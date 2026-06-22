import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getTestProgressMeta,
  ProgressStatus,
  TEST_PROGRESS_OPTIONS,
  TestStatus,
} from "@/hooks/use-test-status";
import { cn } from "@/lib/utils";

type ProgressBadgeProps = {
  status: ProgressStatus;
  detail?: TestStatus;
};

export function TestProgressBadge({ status, detail }: ProgressBadgeProps) {
  const meta = getTestProgressMeta(status);
  const scoreText =
    status === "finished" && detail?.score != null && detail?.total != null
      ? ` ${detail.score}/${detail.total}`
      : "";

  return (
    <Badge
      variant="outline"
      className={cn("font-mono text-[10px] tracking-wider rounded-full px-2.5", meta.className)}
    >
      {meta.label}
      {scoreText}
    </Badge>
  );
}

type ProgressSelectProps = {
  value: ProgressStatus;
  onChange: (value: ProgressStatus) => void;
};

export function TestProgressSelect({ value, onChange }: ProgressSelectProps) {
  return (
    <Select value={value} onValueChange={(next) => onChange(next as ProgressStatus)}>
      <SelectTrigger className="h-8 rounded-lg font-mono text-[11px] tracking-wide border-border/60">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="font-mono text-[11px] tracking-wide rounded-xl">
        {TEST_PROGRESS_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value} className="font-mono text-[11px]">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
