-- Speaking practice sessions: each student's own practice time and finished mock tests.
--
-- Students never write this table directly. They go through two functions:
--   start_speaking_session(...)                     creates a row and returns its id
--   speaking_session_progress(id, seconds, done)    saves active seconds (about every
--                                                   30 s, and once more at the end)
-- The saved time can never be more than the real time since the session started
-- (and at most 3 hours), so practice minutes cannot be faked from the browser.
--
-- day_tashkent is the Asia/Tashkent calendar day on which the session STARTED.
-- Students can read only their own rows. There is no admin or teacher access.

create table if not exists public.speaking_practice_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  mode text not null check (mode in ('general', 'mock')),
  parts smallint[] not null default '{}',
  mock_set smallint check (mock_set between 1 and 999),
  label text not null default '' check (char_length(label) <= 100),
  recording_type text not null default 'none' check (recording_type in ('none', 'audio', 'video')),
  started_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  ended_at timestamptz,
  duration_seconds integer not null default 0 check (duration_seconds >= 0),
  completed boolean not null default false,
  day_tashkent date not null default ((now() at time zone 'Asia/Tashkent')::date),
  check ((mode = 'mock') = (mock_set is not null))
);

create index if not exists speaking_practice_sessions_user_day_idx
  on public.speaking_practice_sessions (user_id, day_tashkent);
create index if not exists speaking_practice_sessions_user_mock_idx
  on public.speaking_practice_sessions (user_id, mock_set) where completed;

alter table public.speaking_practice_sessions enable row level security;

drop policy if exists "speaking sessions read own" on public.speaking_practice_sessions;
create policy "speaking sessions read own" on public.speaking_practice_sessions
  for select to authenticated
  using (user_id = (select auth.uid()));

revoke all on public.speaking_practice_sessions from anon;
revoke insert, update, delete on public.speaking_practice_sessions from authenticated;
grant select on public.speaking_practice_sessions to authenticated;

create or replace function public.start_speaking_session(
  p_mode text,
  p_parts smallint[],
  p_recording_type text,
  p_label text,
  p_mock_set smallint default null
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_id uuid;
begin
  if (select auth.uid()) is null then
    raise exception 'not signed in' using errcode = '42501';
  end if;
  if p_mode not in ('general', 'mock') then
    raise exception 'invalid mode' using errcode = '22023';
  end if;
  if (p_mode = 'mock') <> (p_mock_set is not null) then
    raise exception 'mock set required for mock mode only' using errcode = '22023';
  end if;
  if coalesce(p_recording_type, 'none') not in ('none', 'audio', 'video') then
    raise exception 'invalid recording type' using errcode = '22023';
  end if;

  insert into public.speaking_practice_sessions (user_id, mode, parts, mock_set, label, recording_type)
  values (
    (select auth.uid()),
    p_mode,
    coalesce(p_parts, '{}'),
    p_mock_set,
    left(coalesce(p_label, ''), 100),
    coalesce(p_recording_type, 'none')
  )
  returning id into v_id;
  return v_id;
end;
$$;

create or replace function public.speaking_session_progress(
  p_session_id uuid,
  p_active_seconds integer,
  p_finished boolean default false
)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_row public.speaking_practice_sessions%rowtype;
  v_wall integer;
  v_seconds integer;
begin
  select * into v_row from public.speaking_practice_sessions
  where id = p_session_id and user_id = (select auth.uid())
  for update;

  if not found then
    raise exception 'session not found' using errcode = 'P0002';
  end if;
  -- A finished session is closed; later calls change nothing.
  if v_row.ended_at is not null then
    return v_row.duration_seconds;
  end if;

  v_wall := ceil(extract(epoch from (now() - v_row.started_at)))::integer + 5;
  v_seconds := least(greatest(coalesce(p_active_seconds, 0), 0), v_wall, 3 * 60 * 60);
  -- Never go backwards (a late, smaller report must not erase time).
  v_seconds := greatest(v_seconds, v_row.duration_seconds);

  update public.speaking_practice_sessions set
    duration_seconds = v_seconds,
    last_seen_at = now(),
    ended_at = case when p_finished then now() else null end,
    completed = coalesce(p_finished, false)
  where id = v_row.id;

  return v_seconds;
end;
$$;

revoke all on function public.start_speaking_session(text, smallint[], text, text, smallint) from public, anon;
revoke all on function public.speaking_session_progress(uuid, integer, boolean) from public, anon;
grant execute on function public.start_speaking_session(text, smallint[], text, text, smallint) to authenticated;
grant execute on function public.speaking_session_progress(uuid, integer, boolean) to authenticated;
