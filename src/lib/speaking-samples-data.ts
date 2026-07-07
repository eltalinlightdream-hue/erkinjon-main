/* ────────────────────────────────────────────────────────────────
   IELTS Speaking — Written Sample Answers
   Content from Erkinjon Abduraimov's speaking practice sets.

   Important language is marked inline as [[phrase|short definition]].
   The Written Samples page renders these as tappable highlights that
   pop up the definition.
   ──────────────────────────────────────────────────────────────── */

export interface SpeakingAnswer {
  label: string;
  text: string;
}

export interface SpeakingQuestion {
  q: string;
  answers: SpeakingAnswer[];
}

export interface SpeakingTopic {
  id: string;
  part: 1 | 2 | 3;
  title: string;
  emoji: string;
  description: string;
  /** Bullet points shown on the cue card (Part 2 only) */
  cueCard?: string[];
  questions: SpeakingQuestion[];
}

export const PART_LABELS: Record<1 | 2 | 3, { name: string; sub: string }> = {
  1: { name: "Part 1", sub: "Introduction & Interview" },
  2: { name: "Part 2", sub: "Cue Card · Long Turn" },
  3: { name: "Part 3", sub: "Two-way Discussion" },
};

/* ────────────────────────────────────────────────────────────────
   Useful Phrases — tips, language chunks and go-to expressions for
   the speaking test. Add groups here as content becomes available;
   `text` supports the same [[phrase|definition]] highlight markup
   as the sample answers.
   ──────────────────────────────────────────────────────────────── */

export interface PhraseGroup {
  id: string;
  title: string;
  emoji: string;
  description: string;
  /** Each entry is a phrase, tip or language chunk shown as its own card. */
  items: { heading: string; text: string }[];
}

export const SPEAKING_PHRASES: PhraseGroup[] = [];

export const SPEAKING_TOPICS: SpeakingTopic[] = [
  /* ═══════════════════ PART 1 ═══════════════════ */
  {
    id: "daily-routine-study",
    part: 1,
    title: "Daily Routine & Study",
    emoji: "📅",
    description: "Routines, organising study time, evenings and staying up late.",
    questions: [
      {
        q: "Do you think it's important to have a daily routine for your study?",
        answers: [
          {
            label: "Version 1",
            text: "Absolutely, I think having a daily study routine is [[essential|stronger word than 'important' — absolutely necessary]]. It helps you [[stay on top of your tasks|idiom — to keep up with and control your work]], [[manage your time effectively|key phrase — use your time well, without wasting it]], and maintain a clear sense of what you need to accomplish each day.",
          },
          {
            label: "Version 2",
            text: "Yes, definitely. A daily routine gives your study sessions [[structure and purpose|strong noun pair — clear organisation and a reason for doing something]]. It helps you work more efficiently, stay consistent, and [[keep track of your progress|useful expression — to follow and record how you are improving]]. I think it's one of those habits that [[makes a real difference in the long run|idiom — it matters over time]].",
          },
          {
            label: "Version 3 · Simpler",
            text: "Yes, it is! I believe a daily routine is there to [[maximize|to make something as great in amount, size, or importance as possible]] the efficiency of our study, and I do use that often. It helps me to [[keep track of my agenda|to make sure you know what is happening with your plan]], and not to get confused.",
          },
        ],
      },
      {
        q: "How do you organise your study time?",
        answers: [
          {
            label: "Version 1",
            text: "Honestly, I don't follow a [[rigid schedule|rigid means very strict and inflexible]] when it comes to studying. I tend to believe that [[action matters more than planning|strong opinion phrase — doing is more important than preparing]] — at some point, you just have to [[sit down and get to work|natural spoken expression — start working seriously]] rather than spending too much time organizing everything.",
          },
          {
            label: "Version 2",
            text: "I'll admit I'm not the most [[structured|organized and systematic]] when it comes to organizing my studies. My view is that [[over-planning can get in the way of doing|idiomatic — too much planning stops you from actually working]]. Sometimes the most productive thing you can do is simply [[just dive in|idiom — start something without hesitation]] when you have the time and energy.",
          },
          {
            label: "Version 3 · Simpler",
            text: "Well, for that I use a couple of apps, such as note apps like Obsidian or just planner apps. I think I mostly [[rely on|to depend on]] Obsidian for [[managing|controlling and organising]] my study time — it's [[quite user-friendly|very easy to use]] and has a really [[plain interface|simple and clean workspace]].",
          },
        ],
      },
      {
        q: "What is your daily study routine?",
        answers: [
          {
            label: "Version 1",
            text: "My study routine [[varies quite a bit|natural expression — changes a lot; is not consistent]] from day to day. On average, I manage around two to three hours, though [[ideally I'd like to do more|good use of conditional for expressing wishes]]. The main [[constraint|a limitation or restriction]] is my job at an educational centre — I sometimes get home quite late.",
          },
          {
            label: "Version 2",
            text: "It's not the most [[consistent routine|consistent means regular and steady]], I'll admit. I typically [[get in about two to three hours|natural spoken phrase for fitting time in]] of studying, but it really depends on the day. Working at an educational centre means I often come home [[late and exhausted|vivid paired adjectives — very tired]].",
          },
          {
            label: "Version 3 · Simpler",
            text: "[[Frankly|to be honest]], I'm one of those students who can waste their time [[in hundreds of ways|in many different ways]], but I try to [[keep my focus|to stay concentrated]] on my studies. I'm an economics student, in my third year, and I have lots of lectures and documents to study. So I spend two or three hours daily studying, along with my English course homework.",
          },
        ],
      },
      {
        q: "Do you ever change your plans?",
        answers: [
          {
            label: "Version 1",
            text: "Yes, absolutely. None of us can truly [[predict what life will throw at us|vivid idiom — know what unexpected things will happen]] — sometimes things change in a matter of minutes. That's why I try to stay as [[flexible and adaptable|key qualities — able to change easily when situations change]] as possible, [[adjusting my plans based on how things develop|natural, mature expression — changing plans as the situation changes]].",
          },
          {
            label: "Version 2",
            text: "Of course — [[changing plans is just a part of life|natural philosophical statement]]. We have no real control over what happens next, so being adaptable is far more useful than being [[rigid|very strict and unwilling to change]]. I've learned to [[go with the flow|idiom — to accept things as they happen]] and respond to situations as they [[unfold|develop or happen]].",
          },
          {
            label: "Version 3 · Simpler",
            text: "Well, although I [[plan ahead|to organise something in advance]], I believe there are occasions when things don't go as we planned. This happens to everyone, right? I just go with the flow and [[play it by ear|idiom — to act according to the current situation, without a fixed plan]].",
          },
        ],
      },
      {
        q: "Have you ever changed your routine?",
        answers: [
          {
            label: "Version 1",
            text: "Yes, [[more times than I can count|idiom — very many times]]. Just recently, for instance, I left home expecting a normal teaching day, but ended up having to go to a university exam instead. It's a good reminder that no matter how [[set|fixed and established]] your routine is, life can [[throw something unexpected your way|vivid expression — surprise you with sudden events]].",
          },
          {
            label: "Version 2",
            text: "Quite often, actually. A recent example is when I planned to go into work and teach my usual classes, but things [[took an unexpected turn|idiom — changed in a surprising way]] and I found myself heading to a university exam instead. It really [[reinforces the importance|strong academic phrase — strengthens or confirms how important something is]] of being adaptable.",
          },
          {
            label: "Version 3 · Simpler",
            text: "Yes, I have — quite a lot of times, actually. Like I mentioned, there are times when I act according to how situations [[unfold|develop or happen]]. Recently, there was one occasion when I needed to cancel my [[get-together|an informal meeting or social occasion]] with friends as I had an [[urgent call|a very important call that needs immediate attention]] from my work.",
          },
        ],
      },
      {
        q: "What's your favourite time of the day?",
        answers: [
          {
            label: "Version 1",
            text: "Evenings, [[without a doubt|strong discourse marker — definitely]]. There's something about that time of day that I find [[deeply calming|deeply adds emphasis — very peaceful]] — the noise [[dies down|phrasal verb — gradually becomes quieter]], the pace slows, and suddenly you have this peaceful window where you can actually think clearly and focus.",
          },
          {
            label: "Version 2",
            text: "It's definitely the evening for me. Once the day [[winds down|phrasal verb — slows down gradually]], everything gets quieter and more settled, and I find I can concentrate far better. There's a kind of [[stillness|calmness and silence]] to the evening that I genuinely [[look forward to|phrasal verb — to anticipate with pleasure]] each day.",
          },
          {
            label: "Version 3 · Simpler",
            text: "[[Hands down|without any doubt]], the evening! That's when I can [[finally breathe|relax after a busy day]], and have some [[me-time|personal time just for yourself]] — I watch movies, play video games, or have a get-together with friends. There's always something calming about evenings, and I think it's because the day starts to [[wind down|slow down, with no more pressure]].",
          },
        ],
      },
      {
        q: "Do you go to sleep early or stay up late?",
        answers: [
          {
            label: "Version 1",
            text: "I'm very much a [[night owl|idiom — a person who stays up late and is active at night]] — it's been that way since my high school years. Something about the evening just brings out a kind of [[hyperactive energy|very energetic state — hyperactive means extremely energetic]] in me. I feel sharper, more focused, and more motivated [[after dark|natural expression — at night]]. I genuinely love the atmosphere of the night — the quiet streets, the absence of noise.",
          },
          {
            label: "Version 2",
            text: "Definitely a night owl. My [[energy levels seem to peak|peak means to reach the highest point]] in the evening — I get more focused, more creative, and more driven. I also just love the way the night feels. There's a stillness to it that the [[daytime simply can't offer|confident contrast — good for spoken emphasis]].",
          },
          {
            label: "Version 3 · Simpler",
            text: "Well, I take my time in the evenings to spend on what I'm [[keen on|interested in]], such as movies or video games. Oftentimes, I also [[end up|to finally be in a particular place or situation]] studying or doing university assignments. So yes, most of the time I do stay up late, and go to bed at around midnight or 1 a.m.",
          },
        ],
      },
      {
        q: "Do you often stay up late?",
        answers: [
          {
            label: "Version 1",
            text: "Yes, almost every single night. Some nights I'm [[cramming for exams|idiom — studying intensively just before a test]] or preparing work materials, and other nights I'm catching up on university assignments. But honestly, there are also evenings where I just [[reward myself|give yourself a treat after working hard]] by [[binge-watching|watching many episodes in one sitting]] whatever catches my eye on Netflix.",
          },
          {
            label: "Version 2",
            text: "Almost always, yes. My late nights are usually split between [[productive tasks|productive means achieving useful results]] — studying for exams, preparing lessons — and less productive but very enjoyable ones, like binge-watching series on Netflix. I'm the kind of person who can easily [[get hooked on a show|idiom — become addicted to watching a TV series]].",
          },
          {
            label: "Version 3 · Simpler",
            text: "Yes, I do! I stay up late quite a lot during the week. The only days I don't stay up late are when I feel [[super exhausted|very, very tired]].",
          },
        ],
      },
    ],
  },
  {
    id: "childhood-memories",
    part: 1,
    title: "Childhood & Memories",
    emoji: "🧸",
    description: "Your childhood, friends, games and the dreams you had as a kid.",
    questions: [
      {
        q: "Did you enjoy your childhood?",
        answers: [
          {
            label: "Version 1",
            text: "[[By and large|mostly / in general — great discourse marker to open an answer]], my childhood was [[genuinely memorable|strong, natural collocation]]. I'd say it was one of those [[carefree|without worries or responsibilities]], worry-free periods where life felt simple and enjoyable.",
          },
          {
            label: "Version 2",
            text: "Honestly, I [[look back on|phrasal verb meaning to remember the past]] my childhood with a lot of fondness. It was the kind of [[carefree upbringing|upbringing means the way you were raised]] where I didn't have much to worry about, which made it quite special.",
          },
        ],
      },
      {
        q: "How old are you?",
        answers: [
          {
            label: "Version 1",
            text: "I'm 21 years old. I was born on the 23rd of August, 2005, [[to be exact|natural phrase for giving precise details]].",
          },
          {
            label: "Version 2",
            text: "I [[just turned 21|natural spoken expression for recently reaching an age]]. My birthday is the 23rd of August, 2005.",
          },
        ],
      },
      {
        q: "Did you prefer to do activities alone or with a group as a child?",
        answers: [
          {
            label: "Version 1",
            text: "I was definitely a [[social kid|natural informal expression — a child who loves being around people]] — I much preferred being around others. I'd spend a lot of time playing games and hanging out with friends, and looking back, those moments were [[truly unforgettable|strong collocation — better than 'very memorable']]. Even now, I sometimes feel a [[wave of nostalgia|nostalgia means a warm longing for the past]] thinking about them.",
          },
          {
            label: "Version 2",
            text: "Without a doubt, I was the type of kid who [[thrived in a group|thrived means grew and did well]]. I loved playing games and socializing with friends. Honestly, I still get nostalgic about those times — they [[left a lasting impression|idiom — stayed in your memory strongly]] on me.",
          },
        ],
      },
      {
        q: "What did you often do with your friends in your childhood?",
        answers: [
          {
            label: "Version 1",
            text: "The thing my friends and I did most often was ride our bikes. Cycling was really [[taking off as a trend|taking off means becoming popular rapidly]] among kids back then — everyone was showing off their bikes and [[personalizing|customizing something to your taste]] them with decorations. It became our [[go-to activity|modern idiom meaning favourite or most reliable choice]].",
          },
          {
            label: "Version 2",
            text: "More than anything else, my friends and I loved riding our bikes together. It was a [[growing trend|useful phrase for describing something becoming popular]] at the time — kids were really into [[showing off|phrasal verb — displaying something to impress others]] their bicycles and adding their own personal decorations to them.",
          },
        ],
      },
      {
        q: "What was your dream when you were a child?",
        answers: [
          {
            label: "Version 1",
            text: "As a child, I had the kind of dreams most kids have — [[fairly classic and idealistic|natural, expressive phrase]], you might say. At various points I wanted to be a superhero, and then I dreamed of becoming very wealthy and using that freedom to travel the world and [[see its wonders firsthand|firsthand means directly / personally]]. Of course, life doesn't always [[follow the script|idiom meaning to go exactly as planned]] we write for ourselves as children.",
          },
          {
            label: "Version 2",
            text: "I had fairly typical childhood dreams, I'd say. I went through a phase of wanting to be a superhero, and later I [[fantasized about|expressive verb — stronger than 'dreamed of']] becoming extremely successful and spending my twenties and thirties travelling the world. It hasn't [[worked out quite like that|natural spoken phrase — things didn't go as expected]], but I think that's true for most people.",
          },
        ],
      },
      {
        q: "Are you the kind of person who sticks to their dreams?",
        answers: [
          {
            label: "Version 1",
            text: "Not particularly, [[if I'm being honest|discourse marker — natural and honest-sounding opener]]. I tend to be quite [[grounded|realistic and sensible]] — I have a fairly clear sense of what's realistic and what isn't. I hold my dreams loosely rather than pursuing them relentlessly. I'd describe myself as [[pragmatic more than driven|strong self-description — practical rather than relentlessly ambitious]].",
          },
          {
            label: "Version 2",
            text: "I wouldn't say so, no. I consider myself a realistic person — I can read situations clearly and I know the difference between what's achievable and what's [[wishful thinking|idiom meaning hoping for something unlikely to happen]]. I prefer to [[stay grounded and adapt to reality|strong phrase — remain realistic and adjust to real situations]] as it is.",
          },
        ],
      },
    ],
  },
  {
    id: "hometown",
    part: 1,
    title: "Hometown",
    emoji: "🏡",
    description: "Talking about where you live and what makes it special.",
    questions: [
      {
        q: "Where do you live?",
        answers: [
          {
            label: "Version 1",
            text: "I come from a small town in eastern Uzbekistan. It's quite a [[modest place|modest means small and unassuming]] — home to around 50,000 people — but it [[has its own quiet charm|expressive phrase — beautiful in a calm, simple way]] and beauty.",
          },
          {
            label: "Version 2",
            text: "I'm from a small town in the east of Uzbekistan. It's not a big place at all, with a [[population of around|useful academic and spoken collocation]] 50,000, but I'd say it's [[genuinely beautiful in its own way|natural, expressive spoken phrase]].",
          },
        ],
      },
    ],
  },
  {
    id: "teachers",
    part: 1,
    title: "Teachers",
    emoji: "🍎",
    description:
      "Would you teach? Favourite teachers and how they helped you — with answers for both opinions.",
    questions: [
      {
        q: "Would you like to be a teacher?",
        answers: [
          {
            label: "Version 1",
            text: "Yes, absolutely. I think teaching would [[suit me very well|natural collocation — better than 'fit me']]. I have a [[genuine passion|genuine means real and sincere]] for sharing knowledge, and I truly believe that teaching others is one of the most effective ways to [[reinforce and deepen|academic collocations for learning — strengthen and improve]] your own understanding.",
          },
          {
            label: "Version 2",
            text: "I do, yes. Teaching [[feels like a natural fit|expressive idiom — suits me perfectly]] for me. There's a widely held idea that you only truly master something when you can explain it clearly to someone else. That really [[resonates with me|phrase meaning something connects with your values or feelings]].",
          },
          {
            label: "Version 3 · Opposite view",
            text: "Honestly, teaching is a profession I'd never pursue. To me, it demands an extraordinary level of [[patience, attentiveness, and care|three key teacher qualities — staying calm, noticing details, looking after people]], along with highly developed [[social skills|the ability to communicate and get along with people]] that I genuinely don't feel I possess.",
          },
          {
            label: "Version 4 · Opposite view",
            text: "I don't think I'd ever want to be a teacher, if I'm being completely honest. It's an [[incredibly demanding|needing a lot of effort, energy and skill]] profession — one that requires you to be consistently patient, attentive, and socially skilled at all times. That combination of qualities is something I [[deeply respect|admire greatly]] in others, but I wouldn't claim to have it myself.",
          },
        ],
      },
      {
        q: "Do you think you could be a teacher?",
        answers: [
          {
            label: "Version 1",
            text: "Honestly, I'm not entirely sure. I have a [[strong desire|more formal and expressive than 'I really want']] to teach, but I sometimes question whether I'm the [[right fit for the role|natural expression — suitable for the job]]. Teaching demands a consistently sociable and [[approachable manner|approachable means easy to talk to]] regardless of the circumstances.",
          },
          {
            label: "Version 2",
            text: "I'd like to think so, but [[I have my doubts|natural spoken expression showing uncertainty]]. The role of a teacher requires more than just knowledge — it demands patience, warmth, and the ability to [[connect with all kinds of people|useful phrase for describing social skills]] at all times.",
          },
          {
            label: "Version 3 · Opposite view",
            text: "No, I genuinely don't think so. Teaching requires a very specific set of skills — patience, clarity, [[emotional intelligence|the ability to understand and manage feelings — yours and other people's]] — and if I'm honest with myself, I don't feel I [[measure up to|idiom — to be good enough for a standard]] that standard. I'd likely struggle in the role.",
          },
          {
            label: "Version 4 · Opposite view",
            text: "I don't think I'd be [[cut out for it|idiom — naturally suited for something]], to be frank. A good teacher needs more than subject knowledge — they need the ability to connect with people, manage a classroom, and [[remain composed under pressure|stay calm in stressful situations]]. Those aren't strengths I'd confidently claim.",
          },
        ],
      },
      {
        q: "Did you have a favourite teacher?",
        answers: [
          {
            label: "Version 1",
            text: "Yes, actually. Back when I was in 7th or 8th grade — roughly seven years ago — I had a teacher who [[stood out from the rest|idiom meaning to be noticeably better or different]]. She was [[quite strict academically|good collocation for describing teachers]], but she gave me some of the most [[valuable advice|strong collocation — better than 'good advice']] I've ever received about education and career.",
          },
          {
            label: "Version 2",
            text: "I do have one teacher who [[comes to mind|natural expression meaning to remember or think of]]. She was demanding in the best possible way — very firm about academic standards — but she also offered [[incredibly insightful guidance|insightful means showing deep understanding]] on education and life direction.",
          },
          {
            label: "Version 3",
            text: "Yes, definitely. There was one teacher who really stood out during my middle school years — around seventh or eighth grade. What made him special wasn't just his teaching style, but the fact that he [[took the time to|made a special effort to]] offer genuine life advice and career guidance. [[Looking back|thinking about the past from now]], that turned out to be incredibly valuable.",
          },
          {
            label: "Version 4",
            text: "I do, yes. I had a teacher back in middle school who [[left a lasting impression on me|idiom — stayed in my memory strongly]]. He had this rare quality of [[going beyond the curriculum|doing more than the official study programme requires]] and offering real-life advice and career suggestions that I found genuinely useful as I grew older.",
          },
        ],
      },
      {
        q: "How did this teacher help you?",
        answers: [
          {
            label: "Version 1",
            text: "He had a way of [[weaving together|expressive verb — combining things creatively]] topics like politics, education, and personal development in a way that felt [[relevant and inspiring|strong adjective pair for describing teaching]]. Honestly, he was more motivating than any self-help book I've come across. I'd walk out of his classes feeling energized and [[ready to take on the world|idiom meaning feeling confident and motivated]].",
          },
          {
            label: "Version 2",
            text: "He covered everything from politics to [[personal development|key topic vocabulary — improving your skills and character]], and he had this remarkable ability to make you feel like anything was possible. I've read self-help books since, but none of them [[came close to|phrasal expression meaning to nearly equal or match]] the motivation I felt walking out of his classroom.",
          },
          {
            label: "Version 3",
            text: "He did a truly [[stellar|excellent, outstanding]] job of equipping me with practical knowledge that went far beyond what most teachers offer. He shared thoughtful insights on choosing a career path, becoming a responsible community member, and preparing effectively for university. What [[set him apart|made him different from — and better than — others]] was his willingness to give the kind of real, honest advice that most educators simply never think to address.",
          },
          {
            label: "Version 4",
            text: "His contribution was remarkable, honestly. He covered everything from career guidance and study strategies to how to [[carry yourself|behave and present yourself]] as a member of society — the kind of [[grounded, practical wisdom|realistic and useful life knowledge]] that most teachers overlook entirely. He treated us as young adults who needed real answers, not just textbook content, and that [[made all the difference|idiom — completely changed the result for the better]].",
          },
        ],
      },
    ],
  },
  {
    id: "social-media",
    part: 1,
    title: "Social Media",
    emoji: "📱",
    description: "Screen time, doom scrolling and what people really do online.",
    questions: [
      {
        q: "Do you spend too much time on social media?",
        answers: [
          {
            label: "Version 1",
            text: "I used to, yes. [[Doom scrolling|modern expression — mindlessly scrolling through negative content]] was a real habit of mine. Then about two weeks ago, I had a [[moment of clarity|idiom — a sudden moment when you understand something clearly]] and decided enough was enough. I deleted several platforms and cut my screen time down considerably. It's been something of a [[digital detox|topic vocab — taking a break from technology and social media]], and I feel much better for it.",
          },
          {
            label: "Version 2",
            text: "Honestly, yes — at least until recently. I was heavily into doom scrolling throughout the day. A couple of weeks ago I made a [[deliberate decision|stronger than 'I decided' — shows conscious choice]] to cut back, deleted a few apps, and limited myself to just Telegram and YouTube. The whole process felt like a much-needed [[internet detox|common expression for reducing online time]].",
          },
          {
            label: "Version 3",
            text: "Not anymore, no — though I certainly used to. I was deeply into doom scrolling for a while, spending far too much time mindlessly going through feeds. Eventually I recognized that it was [[taking a real toll on|idiom — seriously damaging or harming]] my attention span and overall wellbeing, so I made a [[conscious decision|a choice made deliberately, with full awareness]] to step away entirely. It was essentially a full internet detox.",
          },
          {
            label: "Version 4",
            text: "These days, no — but there was a time when I really did. I'd spend hours doom scrolling without any real purpose. At some point I had a moment of clarity and realized it was [[negatively affecting|harming; having a bad influence on]] both my focus and my lifestyle. So I deleted everything and gave myself a complete break — a proper digital detox.",
          },
        ],
      },
      {
        q: "What do people often do on social media?",
        answers: [
          {
            label: "Version 1",
            text: "Social media was originally built as a tool for [[connection and communication|core topic vocabulary]], but the way most people use it today has [[drifted quite far from|expressive phrase — moved away from the original idea]] that original purpose. These days, the moment people have a spare minute, they're endlessly scrolling through reels. What I find unfortunate is that people seem to have [[lost sight of|idiom meaning to forget or ignore something important]] how genuinely useful social media can be.",
          },
          {
            label: "Version 2",
            text: "The original purpose of social media was to [[bring people together|common expression — connect people]], but it has largely become a platform for [[passive entertainment|passive means without active thinking]]. People reach for their phones at the slightest gap in their day. The real shame is that these platforms [[offer enormous educational potential|strong phrase for academic-style speaking]] that most users simply don't tap into.",
          },
          {
            label: "Version 3",
            text: "Social media serves a [[wide range of purposes|many different uses]] for different people. At its core, it's still a communication tool — people use it to [[stay connected|keep in regular contact]] with family and friends, share videos and voice messages, and keep in touch no matter the distance. Beyond that, entertainment has become a dominant use — people consume all kinds of content largely just to [[pass the time|fill free time with light activity]].",
          },
          {
            label: "Version 4",
            text: "People use social media in quite varied ways. For many, it's primarily about staying connected — sharing updates, messages, and media with the people closest to them. But a significant portion of social media use is purely [[entertainment-driven|motivated mainly by fun, not by purpose]]. People scroll through content simply as a way to [[unwind|to relax after effort or stress]] or fill [[idle moments|short periods of free, empty time]] in their day.",
          },
        ],
      },
    ],
  },
  {
    id: "mirrors",
    part: 1,
    title: "Mirrors",
    emoji: "🪞",
    description: "A classic Part 1 object topic — décor, habits and functions of mirrors.",
    questions: [
      {
        q: "Would you use mirrors to decorate your room?",
        answers: [
          {
            label: "Version 1",
            text: "No, I don't think I would. Mirrors [[don't really appeal to me|natural expression — better than 'I don't like']] as a decorative element. I generally prefer a more [[understated, minimal aesthetic|topic vocab for interior design — simple and not flashy]] — I'm not a fan of overly flashy or [[attention-grabbing décor|décor means decoration]].",
          },
          {
            label: "Version 2",
            text: "Probably not, to be honest. My personal style when it comes to interior space [[leans toward simplicity|leans toward means prefers]] — I don't like rooms that feel [[too bold or cluttered|cluttered means messy and overcrowded]] with decorative pieces. A mirror or two might [[serve a practical purpose|good collocation for functional items]], but using them excessively would feel uncomfortable to me.",
          },
        ],
      },
      {
        q: "Do you usually carry a mirror with you?",
        answers: [
          {
            label: "Version 1",
            text: "No, not anymore. When I was at school I used to keep one with me regularly, but these days it seems completely unnecessary. My smartphone has [[essentially replaced it|essentially means in practical terms]] — if I ever need to check my appearance, I just [[flip open the front camera|natural modern expression]]. It's far more convenient.",
          },
          {
            label: "Version 2",
            text: "I haven't carried one [[in years|natural expression meaning for a long time]]. It was something I did back in school, but once smartphones [[became part of everyday life|useful phrase for technology topics]], the need for a separate mirror disappeared entirely. It's one of those small ways technology has made certain things [[redundant|no longer needed or useful]].",
          },
        ],
      },
      {
        q: "How often do you use a mirror?",
        answers: [
          {
            label: "Version 1",
            text: "Not very frequently, actually. My mirror use is [[pretty routine|natural expression meaning regular and habitual]] — I'll [[glance at|glance means to look quickly]] it after a shower or when I'm getting ready in the morning to make sure my outfit is [[in order|correct and presentable]]. Beyond that, I rarely think about it.",
          },
          {
            label: "Version 2",
            text: "Fairly [[infrequently|stronger and more formal than 'not often']], I'd say. I use one as part of my morning routine — after showering and while getting dressed for work — mainly just to give my outfit a quick check. It's [[purely functional|strong phrase — used only for practical purposes]] rather than habitual.",
          },
        ],
      },
      {
        q: "Do you like looking at yourself in a mirror?",
        answers: [
          {
            label: "Version 1",
            text: "Not particularly, no. I don't consider myself especially good-looking, and I think there's something slightly unhealthy about spending too much time [[examining your own reflection|elevated expression — better than 'looking at yourself']]. Someone who checks the mirror constantly just out of [[vanity|excessive pride in one's appearance]] [[strikes me as|useful phrase meaning 'seems to me to be']] a bit obsessive.",
          },
          {
            label: "Version 2",
            text: "Honestly, not really. I'm fairly [[indifferent to|not caring about something]] my own appearance, and I don't think [[dwelling on your reflection|dwelling means thinking too much about something]] is especially healthy. Looking in the mirror out of necessity is one thing, but doing it repeatedly out of vanity is something I'd want to avoid.",
          },
        ],
      },
      {
        q: "Have you ever bought a mirror?",
        answers: [
          {
            label: "Version 1",
            text: "No, I've never purchased one. The mirror I have at home was a gift — a birthday present [[if I recall correctly|discourse marker — great for adding natural hesitation]], though I'm not entirely certain. It's a [[full-length mirror|a mirror showing the whole body]], which I find genuinely useful for checking my outfit. But buying one myself has [[never crossed my mind|idiom meaning it was never something I considered]].",
          },
          {
            label: "Version 2",
            text: "Never, actually. The only mirror I own was [[given to me as a gift|natural passive construction — good for speaking]] — a birthday present I believe, though I'm a bit [[hazy on the details|natural expression meaning not remembering clearly]]. It's quite a large, full-length one, which is actually very practical for checking how an outfit looks.",
          },
        ],
      },
      {
        q: "Do you use a mirror before buying clothing?",
        answers: [
          {
            label: "Version 1",
            text: "Yes, always. I think it's something most people do [[instinctively|doing something naturally without thinking]] — you want to see how something actually looks on you before [[committing to it|strong phrase — deciding to buy or keep it]]. The mirror is a far more reliable guide than asking someone else's opinion, since people often [[tell you what they think you want to hear|idiom for being overly polite]].",
          },
          {
            label: "Version 2",
            text: "Definitely, yes. You need to see how something [[sits on your body|natural expression for how clothes fit]], not just how it looks [[on a hanger|useful phrase for clothing and shopping topics]]. I also think the mirror is more [[trustworthy|reliable and honest]] than asking for someone else's opinion. With a mirror, there's no bias — you see the truth and decide for yourself.",
          },
        ],
      },
      {
        q: "What functions does a mirror have?",
        answers: [
          {
            label: "Version 1",
            text: "The most obvious function is [[personal grooming|topic vocab — taking care of your appearance]] — checking your appearance, making sure your outfit is right. But mirrors also serve a [[decorative purpose|'purpose' is better than 'use' in formal speaking]]; they can make a space feel larger and brighter, which is why [[interior designers|topic vocabulary for home and design questions]] often incorporate them into home décor.",
          },
          {
            label: "Version 2",
            text: "Mirrors primarily serve a personal grooming function — helping people check their appearance in everyday life. But they're also widely used in interior design, where they can create an [[illusion of space|strong expression — making a room seem bigger than it is]] and enhance the [[overall feel of a room|natural spoken phrase for describing rooms]].",
          },
        ],
      },
    ],
  },
  {
    id: "headphones",
    part: 1,
    title: "Headphones",
    emoji: "🎧",
    description: "Earbuds vs over-ear, when you wear them and when you really shouldn't.",
    questions: [
      {
        q: "Do you use headphones?",
        answers: [
          {
            label: "Version 1",
            text: "Yes, without question — I'd say I'm a [[dedicated|devoted; doing something regularly and seriously]] headphone user. For me, they serve as a way to create my own private space and [[block out|to stop yourself from hearing or noticing something]] the outside world. Whether I'm on a bus, in a taxi, or simply walking to work, headphones are almost always in my ears. It's become such a natural part of my routine that I rarely step outside without them.",
          },
          {
            label: "Version 2",
            text: "Definitely — headphones are a [[constant companion|something you always keep with you]] for me. I use them as a way to disconnect from my surroundings and create a [[personal bubble|your own private space, away from other people]], especially in public spaces. Commuting, walking to work, strolling through a park — I virtually always have them on. It's just part of how I [[move through the day|go about my daily activities]].",
          },
        ],
      },
      {
        q: "What type of headphones do you use?",
        answers: [
          {
            label: "Version 1",
            text: "I prefer earbuds — specifically AirPods — over traditional over-ear headphones. The difference in convenience is significant; [[bulky|large and difficult to carry]] headphones are uncomfortable to wear for long periods and [[impractical|not sensible or useful in real situations]] to carry around. What I particularly love is how well they work for sleeping — I have a habit of listening to podcasts as I [[drift off|to fall asleep gradually]], and earbuds make that completely effortless.",
          },
          {
            label: "Version 2",
            text: "Earbuds are my [[go-to|the thing you choose most often; your favourite option]], without a doubt. Standard over-ear headphones might offer good sound, but they're simply too bulky and [[cumbersome|heavy and awkward to use or carry]] for everyday use. My favourite thing about earbuds is that I can wear them lying down, which suits my evening habit of listening to podcasts as a way of [[winding down|relaxing gradually before sleep]] and falling asleep.",
          },
        ],
      },
      {
        q: "In what situations would you not use headphones?",
        answers: [
          {
            label: "Version 1",
            text: "The main situation where I'd remove them is during a [[face-to-face|in person, directly with another person]] conversation. Keeping headphones in while talking to someone feels disrespectful — it signals that you're [[not fully present|not giving your complete attention]]. Beyond that, I also take them out when shopping or when I need to interact with anyone in a public setting, just to make sure I can hear and [[engage|take part actively in conversation]] properly.",
          },
          {
            label: "Version 2",
            text: "There are a few clear situations where headphones simply aren't appropriate. Any kind of direct conversation [[warrants|deserves; makes necessary]] taking them out. I think wearing headphones during face-to-face interaction is quite rude, so I make a point of removing them [[as a matter of courtesy|in order to be polite]] and practicality.",
          },
        ],
      },
    ],
  },
  {
    id: "outer-space-stars",
    part: 1,
    title: "Outer Space & Stars",
    emoji: "🚀",
    description: "Space travel, sci-fi films and whether studying the stars matters.",
    questions: [
      {
        q: "Do you want to travel to outer space?",
        answers: [
          {
            label: "Version 1",
            text: "Definitely not — the idea honestly [[doesn't appeal to me|is not attractive or interesting to me]] at all. While I understand why many people find it exciting, space travel strikes me as both extraordinarily difficult and genuinely dangerous. The [[exposure to radiation|being unprotected from harmful energy rays]] alone makes it a serious health risk. I'm happy to [[admire space from a distance|enjoy something without getting close or involved]].",
          },
          {
            label: "Version 2",
            text: "[[Not a chance|emphatic spoken phrase — absolutely not]], to be honest. Outer space sounds [[thrilling|very exciting]] in theory, but in reality it's an incredibly [[hostile environment|a place where conditions make survival very difficult]]. The radiation exposure, the physical demands, and the sheer danger involved make it something I'd never want to experience firsthand. I'll leave that to the astronauts.",
          },
        ],
      },
      {
        q: "Do you think it's important to learn about other planets?",
        answers: [
          {
            label: "Version 1",
            text: "It really depends on the context. In terms of everyday life, knowledge of planets has very little [[practical relevance|usefulness in real, daily situations]] — most people go through their entire lives without ever needing it. Planets are [[invisible to the naked eye|impossible to see without special equipment]], and the average person can function perfectly well without this knowledge. Unless it's relevant to your field of work or study, I'd say it's not a priority.",
          },
          {
            label: "Version 2",
            text: "Honestly, I'd say it's not particularly important for most people. In the context of daily life, planetary knowledge has almost no [[practical application|real-world use]]. Many people live [[full, productive lives|complete and successful lives]] without knowing basic astronomical facts — so I'd be [[hesitant|unsure; slow to act because of doubt]] to call it essential knowledge.",
          },
        ],
      },
      {
        q: "Are you interested in films about outer space?",
        answers: [
          {
            label: "Version 1",
            text: "Very much so. Sci-fi space films are genuinely among my favourites. Films like Interstellar and The Martian are particularly [[compelling|strongly attracting interest or attention]] to me because they manage to [[blend|to mix or combine smoothly]] imaginative storytelling with real scientific concepts. It's not just entertainment — you actually [[come away|to leave an experience with a feeling or result]] having learned something, and I find that combination incredibly satisfying.",
          },
          {
            label: "Version 2",
            text: "Absolutely — space-themed sci-fi is probably my favourite film genre. What [[draws me to|attracts me to]] films like Interstellar and The Martian is how skillfully they balance fictional narratives with genuine [[scientific grounding|a solid base in real science]]. There are elements rooted in real physics and astronomy, which makes them feel [[intellectually rewarding|satisfying for your mind; making you feel you learned something]] as well as entertaining.",
          },
        ],
      },
      {
        q: "Have you ever taken a course about stars?",
        answers: [
          {
            label: "Version 1",
            text: "No, not formally. I haven't enrolled in any dedicated course on the subject. The closest I've come is the astronomy classes I had at school, though I'd be the first to admit we [[barely scratched the surface|idiom — only dealt with a small part of a subject]] — we covered very basic concepts and not much beyond that. A few things [[stuck with me|stayed in my memory]], but it was hardly in-depth.",
          },
          {
            label: "Version 2",
            text: "I haven't, no — at least not in any meaningful way. I did have astronomy as a subject at school, but it was fairly [[superficial|only covering the surface; not deep or detailed]]. We [[touched on|briefly discussed]] some foundational ideas without going into real depth about stars or planetary systems. I retained a few basic facts, but I wouldn't claim to have any solid knowledge of the topic.",
          },
        ],
      },
      {
        q: "Is it important to study stars?",
        answers: [
          {
            label: "Version 1",
            text: "My honest view is that it depends on your purpose. If you're [[pursuing a career|working towards a profession]] in astronomy, astrophysics, or a related scientific field, then yes — studying stars is absolutely important and worthwhile. But for the general population, I wouldn't call it essential knowledge. It's fascinating as an [[area of curiosity|a subject you explore for interest, not necessity]], but not something most people need.",
          },
          {
            label: "Version 2",
            text: "I think the importance really [[comes down to|depends mainly on]] what you plan to do with the knowledge. For someone working in science or research, understanding stars is clearly valuable. For the average person, though, it sits more in the category of general interest than necessity. It's a [[rich and captivating|full of interest and holding your attention]] field, but I wouldn't say everyone needs to study it.",
          },
        ],
      },
    ],
  },
  {
    id: "singing",
    part: 1,
    title: "Singing",
    emoji: "🎤",
    description: "Music, emotions and whether singing makes people happier.",
    questions: [
      {
        q: "Do you think singing can bring happiness to people?",
        answers: [
          {
            label: "Version 1",
            text: "Yes, I genuinely think it can. I'm not a singer myself [[by any means|in any way at all — used for emphasis with negatives]], but watching others sing makes it clear how powerful it is as an [[emotional outlet|a way to release your feelings]]. It seems to offer a unique way to express and release feelings — whether positive or negative — and in doing so, help people [[unwind|to relax after stress]] and [[shed|to get rid of; let go of]] the stress of everyday life.",
          },
          {
            label: "Version 2",
            text: "Absolutely, I believe singing has real emotional value. I wouldn't call myself a singer, but I can observe the effect it has on people. It appears to be one of the most natural ways to [[channel emotions|direct your feelings into an activity]], and that release seems to have a genuinely [[calming effect|a result that makes you feel peaceful]] — helping people [[let go of|to release; stop holding onto]] their daily worries and feel lighter.",
          },
        ],
      },
    ],
  },
  {
    id: "plans-ambitions",
    part: 1,
    title: "Plans & Ambitions",
    emoji: "🧭",
    description: "Five-year plans, ambition and staying realistic about the future.",
    questions: [
      {
        q: "Do you have any plans for the next five years?",
        answers: [
          {
            label: "Version 1",
            text: "Honestly, I haven't fully [[mapped out a plan|expressive idiom — planned in detail]] for the next five years yet. I'm aware that people often say you should have your future figured out by your early twenties, but I personally don't feel the need to rush. I'd rather make [[thoughtful decisions than hasty ones|strong contrast — hasty means too quick or rushed]].",
          },
          {
            label: "Version 2",
            text: "I haven't really [[settled on a firm plan|natural expression — decided on a definite plan]] yet, and I'm okay with that. People tend to put a lot of pressure on young adults to have everything sorted out, but I think that kind of pressure can be [[counterproductive|producing the opposite of the intended result]].",
          },
        ],
      },
      {
        q: "Are you an ambitious person?",
        answers: [
          {
            label: "Version 1",
            text: "Not particularly, [[if I'm being honest|natural discourse marker for opening a personal opinion]]. I tend to be quite [[grounded|realistic and sensible]] — I know what's realistic and what isn't. I hold my dreams loosely rather than pursuing them relentlessly. I'd describe myself as [[pragmatic more than driven|strong self-description using advanced vocabulary — practical rather than relentlessly ambitious]].",
          },
          {
            label: "Version 2",
            text: "No, like I said. I consider myself a realistic person — I can read situations clearly and I know the difference between what's achievable and what's [[wishful thinking|idiom — hoping for something that is unlikely to happen]]. I always make decisions [[based on the real situation|practical expression — according to actual facts, not wishes]] rather than chasing an ideal.",
          },
        ],
      },
    ],
  },
  {
    id: "studies",
    part: 1,
    title: "Studies",
    emoji: "🎓",
    description:
      "What and where you study, whether you're good at it, classmates and life after graduation.",
    questions: [
      {
        q: "What are you studying?",
        answers: [
          {
            label: "Version 1",
            text: "At present, I'm in my final year, studying International Law at Kutafin Moscow State Law University. So yea, I'll have been there nearly 4 years!",
          },
          {
            label: "Version 2",
            text: "I'm currently studying Software Development at the University of Salamanca. It's my 2nd semester so I'll have been studying for almost 6 months! So yea... [[the time has flown in|idiom — time has passed very quickly]]!",
          },
          {
            label: "Version 3",
            text: "I'm studying a Masters in Engineering at the moment, and I'm about halfway through the first semester. So yea, I'm loving it at the moment. It's tough you know — it's certainly [[no walk in the park|idiom — not easy at all]], that's for sure. But I'm just [[keeping my head down|idiom — staying focused and working hard without distraction]], [[working my butt off|informal idiom — working extremely hard]] and [[fingers crossed|expression of hope — hoping for good luck]], I'll get through it!",
          },
          {
            label: "Version 4",
            text: "I've just [[enrolled in|officially registered for a course]] a Masters of Psychology, and I'll be starting at the end of September! And right now I'm just [[sorting out|organising and dealing with]] all my [[bits and pieces|informal — small belongings and tasks]], figuring out what to take and what to leave behind, and I'll be moving into my new flat fairly soon!",
          },
          {
            label: "Version 5",
            text: "I'm currently doing a Bachelors degree in Public Policy at the University of Chile. So the plan is to finish up this degree and then go on to do a Masters. I've been [[toying with the idea|idiom — considering something casually, without deciding]] of doing that abroad — possibly the UK or Australia! But we'll just have to wait and see. [[Time will tell|idiom — the answer will become clear in the future]]!",
          },
        ],
      },
      {
        q: "Where do you study?",
        answers: [
          {
            label: "Version 1",
            text: "I study at the Complutense University of Madrid. You might have heard of it — it's one of the oldest universities in the world! And it's pretty well known for its public research facilities. So yea, it's quite [[distinguished|respected and admired for excellence]].",
          },
          {
            label: "Version 2",
            text: "I currently study at the Bogota Campus of the National University of Colombia. It's actually known as the golden triangle of higher education in Colombia because it's one of the most [[selective and competitive|hard to get into — only the best applicants are accepted]] universities in the country! Like it's [[a pretty big deal|informal — something very important or impressive]] to get in! I read that they're one of the biggest contributors of scientific papers in [[peer-reviewed publications|academic journals where experts check the research before publishing]] in the country! So that's pretty cool!",
          },
          {
            label: "Version 3",
            text: "I study at the Indian Institute of Science — you could probably guess by the name that it [[specializes in|focuses on a particular field]] Science, Engineering, Design and subjects like that. And it's in northern Bangalore. It was actually [[ranked the top university|placed first in official comparisons]] in India in 2018 and 2019! So yea, pretty impressive!",
          },
          {
            label: "Version 4",
            text: "I'm currently studying in Shanghai at Fudan University — it's actually considered to be one of the most [[prestigious|highly respected and admired]] universities in China. It's probably best known for humanities, natural sciences and medical studies. And it's also really [[well situated|located in a good position]] near the East China Sea!",
          },
          {
            label: "Version 5",
            text: "Currently I study in the [[cultural capital|the city considered the centre of a country's culture]] of Japan — Kyoto! I attend Kyoto University which in fact is the 2nd oldest university in Japan! And yea, it's really well known for Chemistry in particular.",
          },
        ],
      },
      {
        q: "How long have you been studying?",
        answers: [
          {
            label: "Version 1",
            text: "I guess I'll have been studying for nearly 2 years this month! I've just got 1 semester to go and that's it [[done and dusted|idiom — completely finished]]! So yea, it's really true what they say — [[time flies when you're having fun|idiom — time passes quickly when you enjoy yourself]]!",
          },
          {
            label: "Version 2",
            text: "I've been studying since September so I guess it's been about nine months now! So yea, it's really [[flown in|passed very quickly]]! I feel like I'm only getting started though!",
          },
          {
            label: "Version 3",
            text: "I don't know exactly how long I've been studying, but [[I reckon|informal — I think or estimate]] it's nearly 4 and a half years now! And yea, I've got another 2 more to go!",
          },
          {
            label: "Version 4",
            text: "I just started in September this year, so yea, only a few months! It's all still [[pretty fresh|new and recent]]!",
          },
          {
            label: "Version 5",
            text: "Far too long! I'm in my final year of a 5 year course, so I've been studying for 4 years now! And if I'm being honest, [[it feels like a lifetime|expression — it feels extremely long]]!",
          },
          {
            label: "Version 6",
            text: "Well, I studied another degree and [[dropped it|stopped or quit it]] 1 year ago — so longer than most! I've been studying for a total of 6 years!",
          },
        ],
      },
      {
        q: "Are you good at the subject you are studying?",
        answers: [
          {
            label: "Version 1",
            text: "Well, I don't want to [[toot my own horn|idiom — praise myself or boast]], but I did come first in my class in the last exam! I think I'm fairly decent in most of the modules. I wouldn't say it [[comes naturally|is easy without effort]] — like I still have to [[knuckle down|idiom — start working hard and seriously]] and work hard. Sometimes I'm in the library [[til all hours of the morning|until very late at night]]. But it's a sacrifice I have to make! Especially since the fees are so damn expensive!",
          },
          {
            label: "Version 2",
            text: "I'm an average student if I'm being honest with you! I'm [[neither struggling nor excelling|not doing badly but not doing brilliantly either]]! But I could definitely do better if I didn't have so many [[personal commitments|responsibilities and obligations outside study]] outside of uni. I'm part of a swimming club and it [[eats up a huge chunk of my time|idiom — consumes a large part of my time]]! We have training 5 times per week and the sessions are pretty lengthy. So yea, I've got [[a lot on my plate|idiom — many responsibilities to deal with]]! I just have to watch my grades don't [[slip|gradually become worse]], otherwise my mum will go mad!",
          },
          {
            label: "Version 3",
            text: "Well, I'm not exactly a [[grade-A student|a top student who gets the best marks]]! I definitely haven't done as well as I'd have liked, but I'm hoping to completely [[turn it around|idiom — change a bad situation into a good one]] in my final semester! I was just about [[keeping afloat|idiom — barely surviving or managing]] this year because I just couldn't [[wrap my head around|idiom — understand something difficult]] my Mechanics module! But next year we're studying Design Theory, which is [[right up my street|idiom — exactly suited to my interests]] so I'm [[buzzin'|informal — very excited]] for that!",
          },
          {
            label: "Version 4",
            text: "I couldn't tell you whether or not I'm good at law actually! This is my first year and I think I won't really be able to [[gauge|measure or judge]] my ability until my [[placement year|a year spent working in a company as part of a degree]]! But I do feel fairly confident — like I'm able to [[keep up with|stay level with; not fall behind]] all my assignments and I did a pretty good job in my exams in January. So yea, I guess [[so far so good|expression — everything has gone well until now]]!",
          },
          {
            label: "Version 5",
            text: "Honestly yea. Psychology has always been [[a passion of mine|something I deeply love]], so I actually study it a great deal outside of class time. I reckon that's why it comes so naturally to me. I've [[read up on|studied by reading a lot about]] most of the topics in my free time! Hopefully I'll be able to [[keep it up|continue at the same level]]!",
          },
        ],
      },
      {
        q: "Why did you choose to study that?",
        answers: [
          {
            label: "Version 1",
            text: "Well I've always been really into computers and I'm a bit of a [[tech nerd|informal — a person very enthusiastic about technology]]. So it kind of seemed to be the perfect job for me! You know, I had already [[tried my hand at|idiom — attempted something for the first time]] coding in high school and my teacher said I had [[a knack for it|idiom — a natural talent for it]]!",
          },
          {
            label: "Version 2",
            text: "Honestly, I just kind of [[fell into it|idiom — started something by chance, without planning]]. I actually wanted to be a Math teacher, but [[the word on the street|idiom — what people were saying; the rumour]] was that Engineering was growing and teaching jobs were becoming [[oversaturated|having too many people for the available positions]]. It's ok so far, so we'll see!",
          },
          {
            label: "Version 3",
            text: "I've no idea! [[Looking back|thinking about the past from now]], I think I just wanted to go to uni! At the time, I had no [[job prospects|chances or opportunities of employment]] whatsoever and I guess I [[took a gamble|idiom — took a risk]] and went with Spanish Literature. I'm an [[avid reader|a very enthusiastic and frequent reader]], so it kind of makes sense!",
          },
          {
            label: "Version 4",
            text: "Well it was a bit of [[a coin toss|idiom — a 50/50 decision between two options]] between German and French. I [[settled on|finally chose after consideration]] German in the end because I just liked the language better. Simple as that. Also, I'll probably study French afterwards anyway!",
          },
          {
            label: "Version 5",
            text: "Well, I loved Business Studies at school and I'm [[fascinated by|extremely interested in]] Marketing so I thought Brand Management would be [[a good fit for me|something that suits me well]]! We'll see. So far, the course has completely [[opened my eyes|idiom — made me aware of new things]]. Hopefully I'll be able to [[take most of the information on board|idiom — absorb and accept the information]] and be able to use it in the future.",
          },
          {
            label: "Version 6",
            text: "Well, [[if truth be told|discourse marker — to be honest]], I didn't have many options when I applied to university because I didn't get outstanding grades in high school. But anyway, I really [[had my heart set on|idiom — wanted something very much]] going to university, so I decided to accept an [[unconditional offer|a university place offered with no grade requirements]] in Project Management. I figured it might be useful for me in the future in case I open up my own business one day!",
          },
        ],
      },
      {
        q: "How do you feel about your studies?",
        answers: [
          {
            label: "Version 1",
            text: "Well I think they're going pretty well. I've passed all my exams for the year, so [[that's a relief|expression — that removes my worry]]! I'm also working while I study — so I was a bit [[wary|cautious and slightly worried]] that I wasn't going to be able to manage it all! But thankfully it seems to be [[working out just fine|developing successfully]]!",
          },
          {
            label: "Version 2",
            text: "Well I suppose they're going ok. I mean, I could definitely improve in some areas, but to be honest, the modules this year have been [[pretty dry|informal — boring and uninteresting]]! But [[on the bright side|idiom — looking at the positive part]], I've made some awesome friends from my course!",
          },
          {
            label: "Version 3",
            text: "I'm loving it at the moment! Right now we're learning about criminal psychology and how to diagnose a subject. It's absolutely [[mind-blowing|extremely impressive or exciting]]! So yea, things are going really well!",
          },
          {
            label: "Version 4",
            text: "Oh my days, it's a [[complete and utter nightmare|emphatic — an extremely bad situation]]! I've got [[boatloads of|informal — very large amounts of]] coursework at the moment and I have to submit an essay before my [[deadline|the latest time by which something must be finished]] next week! So yea, it's all a bit [[hectic|very busy and rushed]] at the moment!",
          },
          {
            label: "Version 5",
            text: "Awk well, [[you have your good days and your bad days|expression — some days are good, some are bad]]! I study Finance, so when we're [[crunching numbers|idiom — doing lots of calculations]] or writing reports it can be incredibly [[mind-numbing|extremely boring]]! But [[it is what it is|expression — the situation cannot be changed, so accept it]]!",
          },
          {
            label: "Version 6",
            text: "Oh, I'm [[coming to the end of my rope|idiom — losing my patience; nearly unable to cope]] with this degree! I mean I know a Masters degree isn't supposed to be a walk in the park, but I didn't think it'd be this [[arduous|extremely difficult and tiring]]! But look, I just have to [[get on with it|continue doing it without complaining]] and [[power through|idiom — continue with determination despite difficulty]]!",
          },
        ],
      },
      {
        q: "Do you find it interesting? / Do you enjoy what you study?",
        answers: [
          {
            label: "Version 1",
            text: "Well I [[wouldn't go so far as to say|expression — I wouldn't make such a strong claim]] it's interesting! It's just a case of getting through the work and then making your social life interesting! For me, university is more than just the degree, it's the experience!",
          },
          {
            label: "Version 2",
            text: "Absolutely! I find it [[riveting|extremely interesting; holding your full attention]]! I know people associate studying Medicine with long hours, memorizing textbooks, testing and so on, but in reality, what we're learning about is truly incredible! I feel so grateful and I [[count my blessings|idiom — remind myself how lucky I am]] to be in such a position. I know plenty of people who would love to [[trade places with me|idiom — swap their situation with mine]]! So yea, I love it!",
          },
          {
            label: "Version 3",
            text: "Me personally, yes and no! The subject of Psychology is fascinating, but in university the reality is that you have to memorize a lot of methods and studies and write really boring, [[long-winded|too long and using too many words]] essays! But I totally get why they make us do it. They want us to really [[go into depth|examine thoroughly and in detail]] in research, [[sift through|carefully examine a large amount of information]] all the information and try to put something together that is of high quality! And that's [[easier said than done|idiom — much harder to do than to talk about]]! It really tests your [[soft skills|personal abilities like communication and time management]] too!",
          },
          {
            label: "Version 4",
            text: "100%! That's why I chose it! But it's not just interesting to me, it's also a passion of mine! You know, I've always been [[massively into|informal — extremely interested in]] gaming, and I've always wanted to create my own game one day! So it's awesome just being able to study Computer Game Development full-time!",
          },
          {
            label: "Version 5",
            text: "Well of course — since I'm studying it! Business and marketing really interest me! You know, I like to study entrepreneurs like Roman Abramovich or Mark Zuckerberg and try to [[take in|absorb and understand]] as much information as possible so that in the future I might be able to [[set up|start or establish]] a pretty good business.",
          },
        ],
      },
      {
        q: "Is that a popular subject in your country?",
        answers: [
          {
            label: "Version 1",
            text: "I believe so, yea. I wouldn't say that it's oversaturated, but I do think there are quite a few people who enrol in it! It's obviously a job that pays well so there's that element of [[financial security|having enough money to feel safe]] which doesn't do any harm! And as well it's a profession that's [[held in high regard|respected and admired]] in society so there is this sense of respect which comes along with the job!",
          },
          {
            label: "Version 2",
            text: "Awk I'd say it's fairly average in terms of popularity. It depends if you're into computers and technical work really, but I wouldn't say it's more popular than other subjects. Perhaps a better way of looking at it is the [[demography|the make-up of the group of people involved]] of it, as it tends to be more of 'a guy thing' than a subject girls are interested in, as far as I can see. I think I heard it was like a 4:1 ratio guys to girls. So yea, I thought that was quite interesting.",
          },
          {
            label: "Version 3",
            text: "Honestly [[I haven't a clue|idiom — I have no idea]]! I reckon it's probably [[up-there with|informal — at the same high level as]] some of the most common subjects to learn at university. People will always need legal advice and so I think many people enrol in it because it's a secure job. And when people hear you study Law, you automatically gain their respect and admiration. It's a weird thing really, but I guess it's because it's [[no easy feat|idiom — not an easy achievement]]! I mean you really have to work your butt off and [[put in a lot of late nights|spend many evenings working until late]] in the library.",
          },
          {
            label: "Version 4",
            text: "It's probably one of the less popular subjects actually! It's quite [[specialized|focused on a narrow field requiring specific training]], and to be honest, you really need to be an animal-lover. Veterinary is pretty demanding and it can also be quite [[intimidating|frightening; making you feel nervous]] at times to be working with aggressive or maybe unpredictable animals! But I think that's [[part and parcel of|idiom — an essential and unavoidable part of]] the job, it's just something we have to get used to! But yea, it's not that common.",
          },
          {
            label: "Version 5",
            text: "I personally think it's not super popular at the moment but I think it'll really [[take off|idiom — suddenly become successful or popular]] in the coming years because of AI and automation. I think people will eventually realize that certain jobs aren't safe anymore and they'll start to look at more technologically-based jobs. And I think people are starting to [[cop on|informal idiom — realise or understand]] that Robotic Engineering has huge potential so it's becoming more and more [[intriguing and appealing|fascinating and attractive]].",
          },
        ],
      },
      {
        q: "What do you dislike about the subject you are studying?",
        answers: [
          {
            label: "Version 1",
            text: "How much time have you got? Only joking! Ah for me, it's probably the early mornings! I've class from 7am till 12pm and I'm absolutely [[worn out|extremely tired]] by lunch time! I'm just not [[a morning person|someone who functions well early in the day]] you know! And what's pretty funny is that my best mate who I sit beside is an [[early bird|idiom — a person who wakes up early and is energetic in the morning]] so she has all this energy and I just can't deal with her! I [[love her to bits|idiom — love her very much]] but in all honesty, she [[tests my patience|makes it hard for me to stay calm]]! Especially in our morning lecture!",
          },
          {
            label: "Version 2",
            text: "Hmm, [[come to think of it|discourse marker — now that I consider it]], I really don't dislike anything about Physics! I mean obviously it can be hard to wrap my head around sometimes, but that's also part of the appeal! So yea, sorry to disappoint but no, there's nothing I really dislike about it!",
          },
          {
            label: "Version 3",
            text: "Awk yea, I think like every subject, you have your [[pros and cons|advantages and disadvantages]]. For me I guess it's just the sheer [[workload|the amount of work to be done]]. And a huge chunk of my time is eaten up by researching — never mind doing the actual assignments! So yea, the subject's ok, but the amount of work that comes along with it is [[a bit over the top|idiom — excessive; more than reasonable]]!",
          },
          {
            label: "Version 4",
            text: "That's hilarious! Yep, I think it's safe to say that I'm really coming to the end of my rope with it to be honest! I don't know why I chose it! It's a good degree that's very useful and will help me to [[land a well-paid job|informal — successfully get a job with a good salary]] but it's just so damn dry! Like yesterday, we were learning how to work out interest rates. So yea, that's the level of fun we're talking about!",
          },
          {
            label: "Version 5",
            text: "Well, most of the time it's [[dead on|informal — perfectly fine; acceptable]]. But some of my modules are [[horrendously boring|extremely and terribly boring]]! So yea, I just have to suffer through them! But [[for the most part|mostly; in general]], they're ok.",
          },
          {
            label: "Version 6",
            text: "The lecturer!! Honestly, he'd put you right to sleep! Other than that, I'd maybe say that there are too many assignments handed out per week. You know, I really think they could cut that number in half and it'd still be more than enough! But [[hey ho|informal expression — accepting something you cannot change]], this is what I [[signed up to|agreed to take part in]]!",
          },
        ],
      },
      {
        q: "Do you like your classmates?",
        answers: [
          {
            label: "Version 1",
            text: "Yea they're awesome actually! We're all a pretty [[tight-knit group|a group with close, strong relationships]] and we socialize a lot outside class time. Some of the guys play football together during the week and as far as I'm aware there are some girls who share a house together! But yea, I definitely like my classmates! I've no complaints!",
          },
          {
            label: "Version 2",
            text: "They're ok I guess. I don't really know them all that well as we've only just started. But everyone seems nice so far. Of course there are a few strange characters [[floating about|informal — present here and there]] but I think that's to be expected! It'll be interesting though to see how everyone [[gels|informal — bonds and works well together]] and what [[clicks|informal — small social groups]] form!",
          },
          {
            label: "Version 3",
            text: "Yea they're really cool actually. I'm pretty fortunate to meet such a nice bunch of people. And the thing I like the most about them is that they're super [[down-to-earth|practical, honest and not pretentious]]! Like they don't seem to be [[caught up in|absorbed or trapped in]] creating an image or pretending to be someone they're not. They're just themselves. And they're not [[judgemental|too quick to criticise others]] either, which seems to be a rare trait these days! So yea, they're great!",
          },
          {
            label: "Version 4",
            text: "Yea I do! They're [[quite the characters|informal — colourful, entertaining personalities]]!! I like them a lot! They all have their own unique personalities and they're just super down-to-earth. There are some who I haven't gotten to know yet but hopefully as the year progresses, we'll have more opportunities to sit down and have a chat!",
          },
          {
            label: "Version 5",
            text: "Honestly, not really. I think a lot of them are quite [[self-entitled|believing they deserve special treatment]] and a bit [[pretentious|trying to appear more important or impressive than they are]]! It's pretty common because a lot of them have parents who are [[well-off|wealthy; financially comfortable]]. So it's sad to say, but there are only really [[a handful of|a small number of]] my classmates that I actually [[get on with|have a good relationship with]]! And the other annoying thing is that they're quite [[clicky|informal — forming closed social groups that exclude others]], so everyone kind of has their own group. But I personally would talk to anyone.",
          },
        ],
      },
      {
        q: "What are the main aspects of your subject?",
        answers: [
          {
            label: "Version 1",
            text: "The main aspects... Let me see... Well, I'm in my first year and we have 3 modules per semester. Right now we're studying Financial Planning, Basic Accounting and Statistics. So it's mostly learning about [[the fundamentals|the basic and most important principles]] at this stage. We do a lot of calculations, and also just understanding the theory behind each transaction. So yea, what you've heard about Accounting is true — we just crunch a bunch of numbers!",
          },
          {
            label: "Version 2",
            text: "Well Medicine has a bunch of different modules and components which [[make up|form or constitute]] the degree. I mean, we study physiology, pharmacology, biochemistry, genetics, psychology — tonnes of things! We of course look at infection and immunology. Goodness, [[the list is endless|expression — there are too many to mention]]! And after your [[foundation years|the first general years of medical training]] you then would normally [[specialize in|focus your career on one particular area]] a particular area such as orthopaedics, pediatrics, psychiatry, dermatology or whatever.",
          },
          {
            label: "Version 3",
            text: "Hmm, well there are so many elements to programming, but I'd say the main thing is that we have to understand the different issues and be able to figure out solutions for them. And it depends as well whether you're a [[front-end or back-end developer|front-end builds what users see; back-end builds the hidden server logic]].",
          },
          {
            label: "Version 4",
            text: "Well Mechanical Engineering is such a [[broad|wide-ranging; covering many areas]] subject. Like you learn about the design and [[sustainability|the ability to continue working long-term without damage]] of mechanics. You have to learn about the properties of materials — for example, how they perform under certain temperatures. We of course do a lot of computer work in our course. So we learn the basics of programming and how to [[tie it all together|idiom — connect everything into one whole]] with the mechanics. It's really fascinating stuff!",
          },
        ],
      },
      {
        q: "Do you plan to continue studying that?",
        answers: [
          {
            label: "Version 1",
            text: "Well yea! Of course I am! I didn't spend all that money for nothing! I want to be a dentist in the future, and this is the only course that'll lead me there! So yea, once I [[finish up|complete]] this course, I'll complete an [[internship|a period of supervised work experience]] somewhere and then hopefully find full-time employment!",
          },
          {
            label: "Version 2",
            text: "Actually my plan is to finish up this course, and do a masters in something [[a tad|informal — slightly; a little bit]] different. I've realized that I'm more into business and consulting than I am finance. So yea, hopefully this masters in business will be enjoyable. And I think [[having a background in|having previous experience or education in]] finance doesn't hurt either! We'll have to wait and see! Fingers crossed it all works out!",
          },
          {
            label: "Version 3",
            text: "Well I hope so, yes! Unless I get kicked off the course!! But yea, of course I plan to keep on going with my degree, and we'll see what happens [[later down the line|idiom — at a later point in the future]]. I know some people [[drop out|leave a course before finishing it]] halfway through, but I don't see that happening to me. I'm [[pretty set on|quite determined about]] completing my degree.",
          },
          {
            label: "Version 4",
            text: "I'm not sure to be honest. I'm a little bit [[on the fence|idiom — undecided between two options]] at the moment. You know, my degree is really [[versatile|useful in many different situations]], and I know that I can land a good job with it, but I'm just a tad worried that I'll end up hating it! Because I'm a very creative and [[spontaneous|acting on sudden impulses rather than plans]] person, and my [[gut feeling|idiom — instinctive feeling without logical reason]] is that I need a job that allows me to create and express myself. But [[it's early days|idiom — too soon to know the result]]. We'll have to wait and see!",
          },
          {
            label: "Version 5",
            text: "Of course! My plan is to complete this degree and then [[head over to|informal — travel to]] Australia to do a Masters in Hospitality! So fingers crossed it'll all work out! I know it's really hard to get into hotels over there for international students, but I'm [[staying optimistic|keeping a positive attitude]]! [[You'll never know unless you try|expression — you must attempt something to find out if it is possible]]!",
          },
        ],
      },
      {
        q: "Do you prefer to study in the mornings or evenings?",
        answers: [
          {
            label: "Version 1",
            text: "Oh, I'm 100% a morning person! I just feel so much more [[productive|able to get a lot of work done]] in the mornings than I do in the evenings. Maybe it's because I've [[run out of energy|used up all my energy]] by the end of the day! But yea, the morning is just the best time for me!",
          },
          {
            label: "Version 2",
            text: "I've always been a [[night owl|idiom — a person who is active late at night]] to be honest. It's just so difficult for me to [[get going|start being active]] in the morning. Maybe that's because I'm exhausted from staying up late at night! You know I [[flick through|look through quickly and casually]] my social media newsfeed, and aww I spend way too much time on YouTube. So maybe that's the reason!",
          },
          {
            label: "Version 3",
            text: "Neither! I actually work ten times better in the afternoon! It's kind of a [[happy medium|idiom — a good compromise between two extremes]] let's say! I definitely don't work effectively at night because my family are home from work, making noise and so on. So it's really hard to [[stay focused|keep your concentration]] and [[keep on track|idiom — continue making progress as planned]]. So yea, I just find that the afternoon is the best time for me!",
          },
          {
            label: "Version 4",
            text: "I work way better in the mornings. You see, I start my day with a workout — I just run around the local park. And that really wakes me up and gets me focused on the work I have to do. So by the time I sit down at my desk, I'm already [[in the zone|idiom — in a state of complete focus and flow]]!",
          },
          {
            label: "Version 5",
            text: "I work a million times better at night. [[I haven't the faintest idea|idiom — I have absolutely no idea]] why, but I just get this [[surge of energy|a sudden powerful increase in energy]]! And it's quite odd because I get this urge to keep going and a lot of the time I have to tell myself to [[call it quits|idiom — stop doing something]] and go to bed! So yea, it's a weird one! But definitely night time is the best time for me!",
          },
        ],
      },
      {
        q: "What was your first day at university like?",
        answers: [
          {
            label: "Version 1",
            text: "Oh, good question! Well I remember it was a really stormy morning, and I was a little bit [[windswept|untidy from being blown by the wind]] coming into the lecture hall! I just remember the anxiety of looking for a seat — you know I arrived a little bit late and the whole lecture theatre was [[filled to the brim|idiom — completely full]]! I can't remember exactly what we did, but I imagine it was kind of an [[induction day|an introduction day for new students]] where you look through the syllabus and get familiar with your modules and stuff like that! But yea, it's surprisingly a little bit [[foggy in my mind|idiom — unclear in my memory]]!",
          },
          {
            label: "Version 2",
            text: "My first day?! Well, it was [[one for the books|idiom — very memorable and remarkable]], I can tell you that!! I remember that we had our induction class and then there was a short 30 minute break where we could get to know all the other students. And I basically [[befriended|became friends with]] a group of guys who I later had lunch and drinks with! And we actually ended up partying that night!! I mean, we went from [[complete strangers|people who have never met before]] to good friends in just one day! So yea, that's what [[sticks out|idiom — is most memorable]] most for me on my first day of university!",
          },
          {
            label: "Version 3",
            text: "My first day?! Well we did a lot of social activities on our first day to kind of [[break the ice|idiom — reduce awkwardness between people meeting for the first time]] between everyone. I remember we chatted about our backgrounds, where we were from, why we chose our degree and things like that. And then we were just given a short little induction about what was ahead of us. It was pretty brief to be honest. So yea, I mean, there wasn't [[anything to write home about|idiom — anything special or impressive]]!",
          },
        ],
      },
      {
        q: "What do you hope to do after you graduate?",
        answers: [
          {
            label: "Version 1",
            text: "Well, I plan to [[take on a new challenge|accept a new difficult task]] and do a masters degree in Pharmacology and Toxicology! After that, I'd love to find a job in our national health service! But I'm just [[taking things one step at a time|idiom — progressing gradually without rushing]]!",
          },
          {
            label: "Version 2",
            text: "After I graduate I'm going to head away on vacation! You know, this degree has really [[taken a lot out of me|idiom — exhausted me; drained my energy]] and I think it might be a good idea to go somewhere to [[blow off some steam|idiom — release stress and relax]]! And after I come back, I'm going to go [[job-hunting|actively searching for a job]]!",
          },
          {
            label: "Version 3",
            text: "Well, fingers crossed I'll find a job! I'm currently applying to a bunch of different Digital Marketing companies so I hope I'll be able to [[land myself a good job|informal — successfully get a good job]]! We'll see how it goes!",
          },
          {
            label: "Version 4",
            text: "Honestly [[I haven't got a clue|idiom — I have no idea]]! I really need to [[pull my socks up|idiom — make a serious effort to improve]] and apply to some jobs or else I'll be [[in hot water|idiom — in serious trouble]]! I've also thought about applying to some international companies! I know it's ridiculously competitive, but I'm really looking forward to the challenge! So yea, in the meantime I'll try to [[brush up on|idiom — refresh and improve a skill]] my coding so as to prepare myself as much as possible!",
          },
          {
            label: "Version 5",
            text: "After I graduate I'm out of here! God willing, I'll have [[immigrated to|moved permanently to another country]] Canada. My [[top priorities|the most important things to do first]] are to find a job and an apartment! I've joined a few Facebook groups and tried to [[network with|build useful professional relationships with]] people out there already, so yea, hopefully it'll all work out!",
          },
        ],
      },
    ],
  },
  {
    id: "work",
    part: 1,
    title: "Work",
    emoji: "💼",
    description:
      "Your job, colleagues, responsibilities, first days at work and how your industry is changing.",
    questions: [
      {
        q: "Where do you work?",
        answers: [
          {
            label: "Version 1",
            text: "So, I work for a small tech [[enterprise|a company or business]]. It's only [[been in business|been operating as a company]] for about 5 years, so it's pretty fresh and it's in its developing stages.",
          },
          {
            label: "Version 2",
            text: "I currently work in a fairly big architecture company in the centre of Moscow. It [[specializes in|focuses on a particular field]] eco-designs and [[sustainable living|a lifestyle that avoids damaging the environment]] concepts, things like that.",
          },
          {
            label: "Version 3",
            text: "I currently work as a teacher in a local primary school! And I teach grades 1 and 2! And I'll have been working there for 3 years in January!",
          },
          {
            label: "Version 4",
            text: "I'm actually [[in between jobs|idiom — currently unemployed, moving from one job to another]] at the moment. I took some time off as my mum wasn't well, but now I'm currently job-hunting for something part-time that just helps [[pay the bills|earn enough money for basic living costs]]. But thankfully my wife has a good job to [[keep both of us afloat|idiom — keep us financially surviving]] at the moment!",
          },
          {
            label: "Version 5",
            text: "I currently work in a law firm right now as a [[trainee solicitor|a lawyer still completing their practical training]]. I actually did an internship with them which let me [[get my foot in the door|idiom — get a first opportunity in a company or industry]]. So I'm very lucky I have to say!",
          },
          {
            label: "Version 6",
            text: "I work in a digital marketing company at the moment, but I'm [[counting the seconds|idiom — waiting impatiently]] till I get to [[hand in my notice|officially tell your employer you are leaving the job]]! It's just [[a means to an end|idiom — something done only to achieve something else]] for me to be honest. I'm planning on heading back to university to study childcare in September!",
          },
          {
            label: "Version 7",
            text: "I actually have a couple of jobs! I'm a mechanical engineer and I work for a car company called Ford. And as well, I tutor Maths on the weekend at my home to [[bring in some extra cash|earn additional money]]. You know, I guess it's kind of a [[side hustle|modern expression — extra work done alongside a main job for more income]]!",
          },
          {
            label: "Version 8",
            text: "I used to be a cook in an Italian restaurant, but I've recently become a [[stay-at-home mum|a mother who stays home to look after the family instead of doing paid work]]. So I basically look after everything at the house, mind the kids, and I also [[help out with|assist with]] my husband's business accounts.",
          },
        ],
      },
      {
        q: "What's your job like?",
        answers: [
          {
            label: "Version 1",
            text: "Well, my job is quite creative. I get to work on [[an array of|a wide variety of]] projects and you know, [[no two days are the same|expression — every day is different]]. However, it can be quite [[taxing|physically or mentally demanding]] and stressful at times. I have to constantly [[meet and exceed|reach and go beyond]] the client's demands, and if they're not happy, it can really damage our [[reputation and credibility|how much people respect and trust you]]. So yea, I have to always [[be on my toes|idiom — stay alert and ready]], and make sure that we don't [[take our eye off the ball|idiom — lose focus on what is important]]!",
          },
          {
            label: "Version 2",
            text: "Well, there is a lot of creativity involved in my job. I work on [[piles of|informal — very many]] different projects and there is a lot of variety in my day! I obviously have to [[meet my deadlines|finish work by the required times]] of course, and that can be quite a challenge sometimes! But my colleagues are superstars, they're always [[willing to lend a hand|idiom — ready to help]] and [[check up on|visit or contact someone to make sure they are fine]] me to make sure I'm ok. It's quite incredible really since they have their own work to get on with. But that's just the way it is — we're just such a tight-knit group!",
          },
          {
            label: "Version 3",
            text: "Well, to be honest, I really don't like my job. You know, it pays the bills, but it's [[by no means|definitely not; in no way]] my passion! I'm actually currently searching for a different [[career path|the direction of your professional life]], and I have to admit I've been [[low-key freaking out|modern informal — quietly panicking]] about this. But yea, hopefully I'll find something that suits me! Nothing's really [[taken my fancy|idiom — attracted or appealed to me]] yet, but we'll just have to wait and see! My friend always tries to [[reassure|comfort someone and remove their doubts]] me that something awesome will come along and she tries to keep me positive, which can be tricky because I'm not the most optimistic person in the world! So yea, I'm going to keep looking online and fingers-crossed I'll [[find my calling|idiom — discover the work you feel born to do]] in life!",
          },
          {
            label: "Version 4",
            text: "Hmm, if truth be told, I really dislike my job — it's simply a means to an end. It's just not for me. But [[on a more positive note|discourse marker — changing to a happier subject]], I'm currently applying to do a masters in Psychology which I'm [[eagerly anticipating|looking forward to with excitement]]! You know I've always been interested in how the brain works and I'm quite [[inquisitive|curious; wanting to learn about things]] by nature. And recently I've had a real desire to help those suffering from mental health problems. You know it's an epidemic at the moment. So yea, I think it [[suits me down to the ground|idiom — is perfectly suitable for me]]!",
          },
          {
            label: "Version 5",
            text: "Well, my job's ok — [[it has its pros and cons|it has advantages and disadvantages]]. I like the fact that I have a decent salary, but I think the [[corporate culture|the values and atmosphere of a company]] is a tad stressful! My [[day to day|daily; routine]] tasks are actually quite interesting, but my boss likes to [[micromanage|control every small detail of employees' work]] and it can really [[get on everyone's nerves|idiom — annoy everyone]]! What else? I like the fact that I have some [[time-freedom|the ability to choose when you work]] in my job! You know, I can choose my own hours and I can also work [[from the comfort of my own home|expression — at home, comfortably]] which is [[an added bonus|an extra advantage]]!",
          },
        ],
      },
      {
        q: "Why did you choose your job?",
        answers: [
          {
            label: "Version 1",
            text: "Well, if I'm being honest, I kind of just [[fell into|idiom — started by chance, without planning]] this position. You know, I was just looking for anything to pay the bills and [[a buddy of mine|informal — a friend of mine]] [[referred me to|recommended me to]] the company. So yea, I just took the first thing that [[came my way|idiom — appeared or became available to me]] really!",
          },
          {
            label: "Version 2",
            text: "Well I've always been [[passionate about|deeply enthusiastic about]] health, and I love working with people face-to-face, so I looked up a bunch of jobs that kind of fit that profile and then [[narrowed it down to|reduced the options to]] the ones which I could really see myself doing [[long-term|for a long period of time]]. Physiotherapy seemed to be well-paid and it was a job where I could really [[make a difference|idiom — have a real positive effect]]!",
          },
          {
            label: "Version 3",
            text: "I honestly haven't a clue why I chose Marketing!! I guess it was because I didn't specialize in any particular field and Marketing was actually pretty easy to [[get into|enter or start in]]. But you know, I [[grew into the job|gradually became comfortable and capable in the job]]. I started [[taking on|accepting; starting to deal with]] more responsibility and getting more experience, and I [[haven't looked back since|idiom — have continued successfully without regret]]!",
          },
          {
            label: "Version 4",
            text: "Well, when I was in high school, I really loved IT class and I [[hung out with|informal — spent time socially with]] a bunch of [[computer fanatics|people extremely enthusiastic about computers]] who would discuss some of the latest apps and news about certain programmers. So that got me into it. I started programming at a young age, and I guess [[before I knew it|idiom — sooner than expected]], I had become pretty [[nifty|informal — skilful]] at it! So maybe it was always [[in the cards|idiom — destined or likely to happen]] you know, that I would go on to become a programmer! Who knows!",
          },
          {
            label: "Version 5",
            text: "Well I've had [[a pile of|informal — very many]] jobs over the years but [[nothing really stuck|informal — nothing lasted or felt right]]! I tried finance, sales, marketing and even construction! Anyway, [[long story short|idiom — to summarise quickly]], I realized that I wanted to [[dictate my own schedule|have full control over my own timetable]] and my own work. I basically wanted more freedom to manage my schedule. I [[came across|found by chance]] freelance consulting, read up on it a bit and [[gave it a whirl|idiom — tried it]]! And so far, so good!",
          },
        ],
      },
      {
        q: "Do you like your colleagues?",
        answers: [
          {
            label: "Version 1",
            text: "Yea, they're awesome actually. We honestly [[get on like a house on fire|idiom — have an extremely good relationship]]! You know, we're always joking around, [[pulling pranks on|playing tricks on]] each other and just [[having a laugh|informal — enjoying ourselves]]! It's a really great vibe in the office! And everyone just [[looks out for|protects and cares about]] each other which is nice!",
          },
          {
            label: "Version 2",
            text: "Hmm, well, I would say that some of them are nice, but others I don't really get on with. Some of them are just a little bit too pretentious [[for my liking|expression — for my personal taste]]! You know, they'd talk about all the fancy places they've been to or what they've bought and I really [[couldn't care less|idiom — am completely uninterested]] what they have to say! But some of the new staff are really friendly and down to earth!",
          },
          {
            label: "Version 3",
            text: "Well I work with my brother so I guess I have to get on with him [[regardless of|without being affected by]] whether I like him or not! I'm joking! We work really well together because we understand each other. I think that's the key! We just try to be [[flexible and agreeable|willing to adapt and easy to work with]] as much as possible!",
          },
          {
            label: "Version 4",
            text: "I actually just started my job so I don't know everyone that well to be honest! So far everyone has been pretty friendly and helpful so I imagine that we'll all get on well. I think there's a good [[work environment|the atmosphere and conditions of a workplace]] and [[company culture|the shared values and behaviour of a company]] so that probably contributes to the cheerful atmosphere! But yea, I'm really looking forward to [[getting stuck in|idiom — starting work with energy and enthusiasm]] and just getting to know everybody [[on a deeper level|more personally and meaningfully]].",
          },
          {
            label: "Version 5",
            text: "Yea, they're all pretty [[sound|informal British — decent and reliable]] to me! As long as I get on with my work and do a decent job, they're happy with me, and that creates a good, healthy work relationship. I don't know if I'd go and have a beer with them on the weekend or anything, but I'd definitely have a coffee and a chat during lunch! So yea, they're decent people!",
          },
        ],
      },
      {
        q: "Is your job popular in your country?",
        answers: [
          {
            label: "Version 1",
            text: "Yea, I'd say it's fairly popular. I think because it's a well-paid job with good [[career prospects|opportunities for future promotion and success]] which makes it pretty attractive. And it also has a lot of [[perks|extra benefits from a job beyond salary]] like they fly you round the world, [[put you up in|pay for your accommodation in]] fancy hotels and you get to [[rub shoulders with|idiom — meet and mix with important people]] some pretty big names! So it can really [[catapult your career|idiom — advance your career very quickly]]!",
          },
          {
            label: "Version 2",
            text: "Oh, totally. I think it's popular not only in Russia, but also all over the world. You know, it's a kind of job that will always be needed. So I think it'll remain a [[sought-after|wanted by many people]] profession for many years to come. And I think there's some [[prestige|respect and admiration from society]] which comes along with it and it kind of elevates your [[socioeconomic status|your position in society based on money and class]]. Which people don't like to admit, but let's face it, you'd rather have a job where people [[look up to|admire and respect]] you and are impressed than a low-skilled job which is almost [[frowned upon|disapproved of by society]] or is seen to be of less worth. You know?",
          },
          {
            label: "Version 3",
            text: "For sure. Engineering is becoming more [[in demand|wanted and needed by employers]] year on year and I can't see it changing anytime soon! You know, technology is becoming ever so integrated into our lives, and I reckon there'll be an even greater need for more engineers to operate and repair machines in the future! You only have to look at the top tech companies like Google or Apple to realize the maintenance required. Like think of all the hardware they have! They spend [[an absolute fortune|a very large amount of money]] on [[upkeep|the cost and work of keeping things in good condition]] from the very [[best and brightest|the most talented people]] engineers!",
          },
          {
            label: "Version 4",
            text: "Mmm. Yea, teaching is most definitely popular in Peru, but to be honest, it's super oversaturated! Like, there are just way too many people who want to be teachers but there aren't enough positions available! And you know we have other industries which are [[crying out for|idiom — desperately needing]] staff — like our national health service is really [[understaffed|not having enough workers]] at the moment. But yea, I wonder if it's a generational thing. Like maybe it was just a popular career path at the time when kids were growing up, or for whatever reason, I'm not sure.",
          },
          {
            label: "Version 5",
            text: "Not really. I think that my job is fairly specialized, so it takes years before you're fully [[qualified, licenced and able to practice|having completed all official training and permissions to work]]. So only a handful of people actually become eye-surgeons. But yea, I definitely think it's [[on the radar|idiom — being noticed and considered]] for [[prospective|potential; likely in the future]] students coming through because you can live a very comfortable lifestyle and not have to worry about [[making ends meet|idiom — earning just enough money to live]]. It's just more the stress and [[mental fatigue|tiredness of the mind from stress or overwork]] which might [[turn people off|idiom — make people lose interest]]. But I guess that's part and parcel of heaps of jobs!",
          },
          {
            label: "Version 6",
            text: "100%! We have a massive coffee scene in Vietnam, so we'll always need baristas. And they're [[a dime a dozen|idiom — very common and easy to find]] in the major cities so the salary isn't anything to write home about! But I guess it's more about the love of the craft, you know the passion — it's kind of become an art form particularly for hipsters! Or at least that's how [[it comes across|it appears or seems]] to me! Like my Instagram is [[flooded with|filled with a very large amount of]] artistic coffee-making montages and epic shots of freshly-brewed coffee! So yea, I think baristas will be a pretty popular position for many years to come!",
          },
        ],
      },
      {
        q: "What are your responsibilities at work?",
        answers: [
          {
            label: "Version 1",
            text: "Well, I'm [[in charge of|responsible for managing]] ordering raw materials from our suppliers. It's pretty simple really — you just try to find the best deal [[with regards to|concerning; in relation to]] the quality and the price. So yea, I would make sure that we have enough [[inventory|the goods and materials a business keeps in stock]], I would [[keep an eye out for|idiom — watch carefully for]] any discount opportunities, and ensure all the products are processed and logged into the system correctly. It's [[handy enough|informal — quite easy and convenient]]!",
          },
          {
            label: "Version 2",
            text: "Well, I'm an architect, so I design houses! I take care of any tasks that the boss [[sends my way|gives to me]], whether it's a sketch, report or client meeting. I'm usually the one who [[signs off on|gives official approval to]] any design submissions and I spend a great deal of my time communicating what the client wants with the rest of the team. So I guess I'm kind of [[the middle man|the person who connects two sides]] which I quite like because I'm a little bit OCD and I like to be in control as much as possible! It's just in my nature you know. Some people think I'm a [[control freak|informal — a person who needs to control everything]] but I just like things done right!",
          },
          {
            label: "Version 3",
            text: "As part of the product [[quality assurance|checking that products meet the required standard]] team, we're responsible for making sure all products [[adhere to|follow; comply with]] the regulations. So we need to basically [[carry out|perform; conduct]] some tests and make sure they're functioning correctly before [[giving the green light|idiom — giving permission to proceed]]! There's also a lot of [[paperwork|routine administrative documents]] that comes along with the job unfortunately. So yea, I have to make sure I have that all filled out and handed in before the deadline!",
          },
          {
            label: "Version 4",
            text: "As an early childhood studies teacher, I have to assist in the development of the child — you know, their personal, social, language and physical coordination abilities. So we have to create [[visual aids|pictures and objects that help people learn]] and teaching resources, and [[come up with|think of; invent]] songs and all types of creative activities. So yea, I usually have [[a heap of|informal — a large amount of]] lesson planning to get through over the weekend, but I really don't mind. I just [[flick on|informal — switch on]] some TV show for background noise, pour myself a glass of wine and yea, [[the time flies by|idiom — time passes very quickly]]!",
          },
          {
            label: "Version 5",
            text: "Well, I'm a waiter and also a barista, so I obviously [[wait the tables|serve customers at their tables]] and take orders. But I'd say most of the time I'm [[behind the counter|working at the serving area of a cafe or shop]] making coffees. You know, there are only two of us in the cafe who have a reasonable amount of experience making coffee so I guess that's why! Other than that, we clean everything up. We have to make sure everything is clean and tidy because our manager is a total hard-ass — we just know that she'll be [[on our backs|idiom — constantly criticising and pressuring us]] and honestly I can't [[put up with|tolerate; endure]] listening to her lecture us on how to [[wipe down|clean a surface with a cloth]] a bloody table! So yea...",
          },
          {
            label: "Version 6",
            text: "Where do we start?! Well as an app developer, I mostly work on the back-end so I write the web services and APIs used by front-end users. I basically create code, I try to improve the server and take care of a lot of [[bugs|errors or faults in software]] and so on. And I'd say my job is mostly [[troubleshooting|finding and solving problems systematically]] and fixing problems!",
          },
        ],
      },
      {
        q: "Would you want a different job in the future?",
        answers: [
          {
            label: "Version 1",
            text: "No, I'm pretty happy in my current job. I couldn't imagine myself doing anything else to be honest. [[If anything|discourse marker — the only possible change would be]], I'd just like to progress in my career, maybe publish some of my research in some scientific journals. What else? I'd be pretty open to the idea of lecturing in a university, or at least just having some kind of [[mentoring role|a position guiding and advising less experienced people]]. That'd probably be the dream for me! I'd be pretty [[chuffed|informal British — very pleased]] with that!",
          },
          {
            label: "Version 2",
            text: "Yea, for sure. I'm currently studying a masters in oil and gas management, so I'd like to find a management job in one of the top companies. But you know [[there's a long road ahead|idiom — much work remains before the goal]]. So I'm just trying to keep focused, try to take in as much as I can, and hopefully one day some opportunities will [[present themselves|appear; become available]]! Fingers crossed!",
          },
          {
            label: "Version 3",
            text: "Mmm, maybe. It depends really. If someone was to offer me a job with an attractive salary in my field I'd definitely consider it! But I'm pretty [[picky|choosing carefully; hard to satisfy]] with jobs, and I'm actually quite [[content|satisfied and happy]] in my current position. I guess we'll just have to wait and see! I'm well aware that things change and people [[move on|progress to something new]], and who knows, I might want a bit of a [[shake up|a big change to how things are arranged]] in the future! So yea...",
          },
          {
            label: "Version 4",
            text: "Not really to be honest. My current job [[ticks all the boxes|idiom — meets all my requirements]] for me. You know, it's well-paid, I have a [[flexible schedule|a timetable that can easily be changed]], and I find the work really [[mentally-stimulating|making your brain active and interested]] as well! I wouldn't mind [[getting a promotion|being moved up to a higher position]] in the future though!! I'm joking. But that would actually be nice! But anyway, I'd love to stay at my current company because I get on really well with everyone here and they're kind of like a family to me at this point. So yea, as long as it's within the company.",
          },
        ],
      },
      {
        q: "What was the first day of your work like?",
        answers: [
          {
            label: "Version 1",
            text: "It was pretty normal I'd say. The HR manager just introduced me to all the staff, I was [[given a tour of|shown around]] the office, and my boss just [[went through|explained step by step]] all my duties. It was pretty nice actually, everyone was super [[welcoming|friendly to a person arriving somewhere new]]!",
          },
          {
            label: "Version 2",
            text: "Goodness! Well it wasn't what I was expecting, I can tell you that! I basically got [[thrown in at the deep end|idiom — given a difficult task with no preparation]]! My boss asked me to do a job that I wasn't prepared for at all! Basically all the [[new recruits|people who have just joined a company]] had to make phone calls to clients. Man, it was intimidating! But I [[got through it|survived or completed a difficult experience]] [[unscathed|without being harmed]] thankfully!",
          },
          {
            label: "Version 3",
            text: "Well, it was a day I'll never forget! I didn't have much experience at the time so I had no confidence [[whatsoever|at all — used for emphasis with negatives]]! And [[call me naive|expression — you may think I was too innocent]], but I expected to learn my role in stages, [[bit by bit|gradually; little by little]], but that wasn't the case at all! It turned out that we were understaffed that day, so they needed me to help out with the service! I made so many embarrassing mistakes! But I guess that's what happens when you're thrown in at the deep end! So yea, that was that!",
          },
          {
            label: "Version 4",
            text: "Honestly, [[it couldn't have gone better|expression — it was as good as possible]]! I remember meeting all the staff and getting on with them like a house on fire! I was given a few tasks to do and I got them done and dusted [[ahead of schedule|earlier than planned]], and then we all stayed after work and had drinks together, exchanging stories and just [[having some banter|informal British — enjoying playful, funny conversation]]! It was so damn good! I honestly wasn't expecting everything to [[go as smoothly as it did|happen without any problems]]!",
          },
        ],
      },
      {
        q: "Is there anything you dislike about your job?",
        answers: [
          {
            label: "Version 1",
            text: "Absolutely! I mean, who doesn't?! I personally hate the micromanagement at my job! It really gets on my nerves when my boss is always [[snooping around|informal — secretly investigating]] to see [[what I'm up to|informal — what I am doing]]. I mean, how am I supposed to focus on my work when I have to constantly [[look over my shoulder|idiom — feel anxious about being watched]]?! [[Aside from that|discourse marker — apart from that]], there is a bit of paperwork [[now and again|occasionally]], but that doesn't bother me.",
          },
          {
            label: "Version 2",
            text: "Awk yea, I think there are always little things which bother us! I personally find that the location of the job is the reason for most of the things that get on my nerves! Like the street noise for example. The construction work at our office building never seems to end! And of course, there are delivery vans loading and unloading every single day, so sometimes that can cause [[a fair amount of|quite a lot of]] stress. But aside from that [[I can't really complain|expression — things are mostly fine]].",
          },
          {
            label: "Version 3",
            text: "Oh [[you bet|informal — certainly; absolutely]]! For one, company meetings! It just [[irks|annoys; irritates]] me that we have them monthly! I really can't wrap my head around the need for so many! I know that [[the vast majority of|nearly all of]] businesses have meetings [[every quarter|every three months]]. And that's [[more than plenty|completely sufficient]]! But other than that I'm pretty content. It's not the worst place in the world!",
          },
          {
            label: "Version 4",
            text: "Honestly, [[nothing comes to mind|expression — I cannot think of anything]]! I love pretty much everything about my job. My colleagues are lovely and always willing to lend a hand. The job is fairly [[low-stress|not causing much stress]] and I can just get on with it without all the [[bureaucracy|excessive official rules and procedures]] that other people put up with. And my boss is literally the best! She always knows exactly what to do! Like you know those people who can take on massive [[high-stakes|involving big risks and big consequences]] projects but it doesn't seem to [[faze|disturb or worry someone]] them? Yea, that's her!",
          },
        ],
      },
      {
        q: "Do you work better in the mornings or the evenings?",
        answers: [
          {
            label: "Version 1",
            text: "Oh, I'm 100% a morning person! I just feel so much more productive in the mornings than I do in the evenings. Maybe it's because I've run out of energy by the end of the day! My dad is exactly the same so I must [[take after|resemble a family member in character or looks]] him in that respect! He would have gotten up at [[ungodly hours|idiom — extremely early or inconvenient times]] just to get a few things done around the house! I don't know how he did it! But yea, I'm definitely a morning person too!",
          },
          {
            label: "Version 2",
            text: "I've always been a [[night owl|idiom — a person who is active late at night]] to be honest. It's just so difficult for me to get going in the morning. Maybe that's because I'm exhausted from staying up late the previous night! I just find myself [[mindlessly scrolling|looking through content without thinking or purpose]] through pointless videos and pictures on YouTube and Instagram! But you know I've [[made a resolution|made a firm decision to change a habit]] that I'm going to start going to bed earlier and get up earlier! So hopefully I'll be a different person!",
          },
          {
            label: "Version 3",
            text: "Neither! I actually work ten times better in the afternoon! It's kind of a happy medium let's say! I definitely don't work effectively at night because my family are home from work, making noise and so on. So it's really hard to stay focused and keep on track. And the morning is the morning! Who wants to do anything in the morning! [[I'm lucky if|expression — even the smallest thing is difficult for me]] I can even hold a conversation with someone at 7am! So yea, I'm all about the afternoon!",
          },
          {
            label: "Version 4",
            text: "I work way better in the mornings. You see, I start my day with a workout — I just run around the local park. And that really wakes me up and gets me focused on the work I have to do for the day ahead. So by the time I sit down at my desk, I'm already in the zone! It's quite funny actually because people at the office [[envy|wish they had what someone else has]] me! Like they're always telling me that they wish they had my [[willpower|the mental strength to control your own behaviour]] to get up and exercise! But you know, I just tell them that people are just [[built differently|informal — naturally different in character]]!",
          },
          {
            label: "Version 5",
            text: "I work a million times better at night. I haven't the faintest idea why, but I just get this surge of energy! I'm well aware that it's quite odd but I just get this [[urge|a strong sudden desire]] to keep going, and a lot of the time I have to tell myself to call it quits and go to bed! It's just hard to stop when you're in a [[productive mood|a state of mind where you get a lot done]]! So yea, I definitely work a little bit better at night!",
          },
        ],
      },
      {
        q: "Do you prefer to work in a quiet environment or somewhere with some noise?",
        answers: [
          {
            label: "Version 1",
            text: "A quiet environment for sure! I work in an office where I attend meetings, write reports and things like that, so I can't imagine that I'd be able to get through a work day with anything more than, I don't know, a [[mild chatter|quiet background talking]]! So yea, definitely quiet!",
          },
          {
            label: "Version 2",
            text: "I personally don't mind a little bit of noise actually! Otherwise I start to [[fidget|make small restless movements from boredom or nerves]] and [[procrastinate|delay doing what you should be doing]]. Obviously I'm not talking about construction noise or anything over the top, but I find it quite calming when there are other people [[moving about|moving around a place]]. I don't know, maybe it's just me! My friends often call me a weirdo!",
          },
          {
            label: "Version 3",
            text: "I really can't put up with noise in general, I need my [[peace and quiet|calm and silence]]! Obviously there are certain types of tasks where noise is unavoidable and I don't mind that. And actually I don't mind [[background noise|sound that is present but not the focus of attention]] sometimes when I work though. I quite like to flick on the TV or put some music on while I'm studying.",
          },
          {
            label: "Version 4",
            text: "Well, I work in a factory and other noisy places [[on a daily basis|every day]], it's just part of the job. I quite like the noises the machines make, and I enjoy having some banter with my colleagues, so I guess I'd [[lean more towards|prefer slightly]] noisy environments I think!",
          },
        ],
      },
      {
        q: "What is your ideal job?",
        answers: [
          {
            label: "Version 1",
            text: "Well, I'm fairly content in my job right now to be honest! You know, I've really worked hard to get to where I am today and I don't [[take my job for granted|idiom — fail to appreciate something because you are used to it]]! I'm just so grateful to be able to [[provide for my family|earn the money my family needs to live]] and have a job that I'm passionate about! So yea, I'm happy!",
          },
          {
            label: "Version 2",
            text: "Hmm, maybe an astronaut! I mean, I don't think I'm anywhere near smart enough, but this is [[hypothetical|imagined, not real]]! You know, it would be a real [[dream come true|idiom — a wish becoming reality]] to be able to look down on the earth from a truly unique perspective and as well, to go where very few have gone before! I just think that'd be awesome!",
          },
          {
            label: "Version 3",
            text: "Well it's always been a dream of mine to be a professional basketball player! I grew up watching Michael Jordan and I just can't imagine what it'd be like to play basketball [[for a living|as your job; to earn money]]! So yea, maybe a basketball player! Although I'd maybe have to [[shoot up|informal — grow taller quickly]] a few inches and put a tad more muscle on!",
          },
          {
            label: "Version 4",
            text: "Any job?! Hmm, well, I think if I could [[go back in time|return to the past]] and start again, I'd try to become a doctor. You know, I was smart in school but maybe I just didn't have [[the drive|the strong motivation and ambition]] or focus that is needed to [[pursue a career in|work towards a profession in]] medicine! That'd be cool.",
          },
          {
            label: "Version 5",
            text: "Well, I'm currently applying to a bunch of jobs in software engineering. I'd love to work for a massive tech company like Google or Facebook. I just have to keep my head down and work hard and who knows, one day it might happen! Fingers crossed!",
          },
          {
            label: "Version 6",
            text: "An architect! I've been fascinated with design since I was a kid, and it would be so [[rewarding|giving satisfaction and a sense of achievement]] to know that I [[had a hand in|idiom — was involved in creating]] building something extraordinary! [[As well as that|discourse marker — in addition]], I like the idea of future generations seeing something I built! So yea, an architect.",
          },
        ],
      },
      {
        q: "Has your work changed in recent years?",
        answers: [
          {
            label: "Version 1",
            text: "Yea, it's changed quite [[substantially|by a large amount]]! I used to work in quite a small company with local clients and other small businesses, but now I'm in a large international [[corporation|a very big company]] which takes on massive projects! It's [[chalk and cheese|British idiom — two things completely different from each other]] really!",
          },
          {
            label: "Version 2",
            text: "Not at all! I've had the same job for nearly ten years now! Maybe I've got a little bit more responsibility and people [[call on me for advice|ask me for guidance]] from time to time, but [[generally speaking|discourse marker — in general]], my job's practically the same as the day I started!",
          },
          {
            label: "Version 3",
            text: "I'd say it's somewhat changed. I used to work quite broadly with every type of project, and now I've specialized in a particular area of projects. And I've also got some young guys to do some of the [[dog work|informal — boring, routine tasks]] for me! So they carry out any general sort of task that would eat up my time while I just focus on [[big picture|the overall situation rather than details]] things! So that's a perk!",
          },
          {
            label: "Version 4",
            text: "I think it changes every year. As I learn more and become more capable in my job, I get given more responsibility. Obviously they're [[compensating|paying someone for their work or effort]] me for this extra value. But yea, we have new staff that [[come and go|arrive and leave regularly]] every couple of years so that obviously changes the [[work dynamic|the way people interact and work together]] a fair bit. But I can't think of any other ways it's changed!",
          },
          {
            label: "Version 5",
            text: "Oh, totally! I've made a massive [[career change|a switch to a completely different type of job]] as I used to work in finance, and now I'm back at university studying Engineering! So I just have a few years to go and then hopefully I'll find a well-paid engineering job! [[Touch wood|British idiom — said to avoid bad luck when hoping for something]]!",
          },
        ],
      },
      {
        q: "In the future, do you think there will be any changes in your industry?",
        answers: [
          {
            label: "Version 1",
            text: "Awk [[I've no doubt|I am completely certain]] that there'll be changes! You know, the world is [[constantly evolving|continuously developing and changing]] and I don't see any reason why it would stop! And I'd say there'll be a fair bit of [[automation|machines doing work previously done by people]] in my industry in the coming years. As AI is integrated more and more, I imagine that jobs will become more specialized and employees will take on more management positions.",
          },
          {
            label: "Version 2",
            text: "In the near future, no, but in the distant future, absolutely! Teaching is a profession which requires feedback so at the moment I don't think the tech is [[sophisticated|advanced and complex]] enough to handle this level of complexity! I'd say that it'll take at least twenty years for the algorithms to develop this [[precision|exactness and accuracy]]! But who knows!",
          },
          {
            label: "Version 3",
            text: "Without a doubt! CAD and other sketching software were revolutions in my industry, and I'm constantly hearing that they're [[on the cusp of|idiom — at the point just before something big happens]] something else which'll completely [[change the game|idiom — transform the situation entirely]]! Perhaps VR immersive architecture will become a reality!",
          },
          {
            label: "Version 4",
            text: "I can't see it changing [[a whole lot|informal — very much]]! I reckon there'll be less paperwork of course, and maybe a more flexible and progressive work schedule. And I'd like to think that we won't be working the standard [[9 to 5|expression — normal office working hours]] jobs, but rather a 4 day work week! Maybe that's [[a bit of a stretch|idiom — slightly unrealistic]], but I can always dream, can't I?!",
          },
          {
            label: "Version 5",
            text: "Indeed. I think the big tech advances will completely [[change the face of|idiom — transform the appearance or nature of]] medicine in years to come! I can only imagine what machines will be able to do! You would expect that they would be able to perform certain [[low risk procedures|medical operations with little danger]] as the algorithms become more complex. But yea, I think [[the sky is the limit|idiom — there is no limit to what is possible]] with this new breed of technology!",
          },
        ],
      },
    ],
  },
  {
    id: "home-accommodation",
    part: 1,
    title: "Home & Accommodation",
    emoji: "🏠",
    description: "Houses vs flats, who you live with, favourite rooms and your neighbourhood.",
    questions: [
      {
        q: "Do most people in your country live in houses or flats?",
        answers: [
          {
            label: "Version 1",
            text: "I'd say it all [[comes down to|idiom — depends mainly on]] where you live in the country — like if you live in the city centre or further out. If you live in the city centre, it's [[highly likely|very probable]] that you'll live in a flat, but if you live in [[the suburbs|residential areas on the edge of a city]] or in the countryside, I'd [[put my money on|idiom — confidently bet on]] you having a house. It just depends really.",
          },
          {
            label: "Version 2",
            text: "Here in China, most people live in big cities, so living in a [[block of flats|a large building divided into apartments]] is [[by far|by a great amount — used for emphasis with superlatives]] the most common type of home. You know, in some [[residential area|an area where people live rather than work]]. Most farmers and agricultural businesses obviously have their own houses. For example, I live in Beijing and every single one of my friends lives in a flat, so that gives you a good idea!",
          },
          {
            label: "Version 3",
            text: "Ah, I'd say it's 50/50. You'll definitely find most of the flats in the city centre as there is limited land, but you know, [[terrace houses|houses joined together in a row]] are actually really common there too. It depends really. Interestingly, we're seeing lots of young people looking into alternative living solutions — especially those that are [[self-sustainable|able to provide for itself without outside help]], more [[cost-effective|giving good value for the money spent]] or [[off the grid|idiom — not connected to public utilities like electricity and water]]. So yea, it's a mixture at the moment, but people are definitely [[thinking outside the box|idiom — thinking creatively, beyond the usual ways]] so that they can have that more balanced lifestyle.",
          },
          {
            label: "Version 4",
            text: "Oh for sure most people live in houses. The country is pretty big [[geographically-speaking|in terms of physical land area]] and most people can afford to build their own homes. Of course we do have flats, but only really in the city centre.",
          },
        ],
      },
      {
        q: "Do you live in a house or flat?",
        answers: [
          {
            label: "Version 1",
            text: "I currently live in a [[studio flat|a small apartment with one main room]]! It's fairly tiny but [[it does the job|idiom — it is good enough for its purpose]]! And it's in a really good location near my university so thankfully I don't have to [[commute|travel regularly between home and work or study]] back and forth every day! It takes me [[more or less|approximately]] 10 minutes to get to my lecture hall which is a real win! And it's pretty modern — like it's [[kitted out with|British idiom — fully equipped with]] all the contemporary furnishings, there's lots of natural light, and yea, I love it!",
          },
          {
            label: "Version 2",
            text: "I live in an apartment at the moment with a few [[mates|informal British — friends]] from uni on [[the outskirts|the outer edges of a city]] of the city! So yea it's a fair bit different from living at home with my parents! Obviously there are pros and cons! Like our apartment is quite basic so it's not kitted out with all the [[electrical appliances|machines like fridges and washing machines]] that I'm used to. But you know, [[slowly but surely|idiom — gradually but steadily making progress]], we're adding more and more to it. So yea, it's filling up nicely!",
          },
          {
            label: "Version 3",
            text: "I actually live in the same house as I was [[brought up|raised as a child]] in, which is in a pretty [[built-up|densely covered with buildings]] residential area. You know I'm still [[saving up|keeping money aside for a future purchase]] some money at the moment for [[a place of my own|my own home]] and some other bits and pieces. So it just makes sense for me to live at home for a year or so. And I'm not bothered too much because I have my car and I can just [[come and go as I please|idiom — move freely without restrictions]]. Like on the weekends I generally head up to my friends' house and hang out with them on Saturday and Sunday! So yea, for now it's ok, but I'll be [[house-hunting|searching for a house to buy or rent]] in the near future!",
          },
          {
            label: "Version 4",
            text: "I'm currently living in a shared apartment. I've actually just moved in! I used to live in a house in the suburbs, but I [[came to the decision|formally decided after thinking]] to move closer to the city for [[handiness|informal — convenience]]! So yea, now my commute time is [[cut in half|reduced by 50%]] and I can [[sleep in|stay in bed later than usual]] a little bit longer in the mornings! So yea, it's great!",
          },
        ],
      },
      {
        q: "Who do you live with?",
        answers: [
          {
            label: "Version 1",
            text: "I currently live with my family — my mum, dad, brother and sister!",
          },
          {
            label: "Version 2",
            text: "I actually live with my family and my grandparents! Their house is [[attached to|physically joined to]] ours so it feels like we basically live together!",
          },
          {
            label: "Version 3",
            text: "I live [[on my own|alone]] in a studio apartment in the city centre!",
          },
          {
            label: "Version 4",
            text: "I actually just [[moved in with|started living together with]] my girlfriend! So it's just me and her!",
          },
          {
            label: "Version 5",
            text: "I live with a bunch of people actually. I [[rent a room|pay to use a room in someone's property]] in a house with 4 other people.",
          },
          {
            label: "Version 6",
            text: "I'm currently at uni, so I live [[on campus|within the university grounds]] and share a [[dorm room|a bedroom for students in university accommodation]] with some other students!",
          },
          {
            label: "Version 7",
            text: "I just live with my family — you know, my husband and my kids!",
          },
        ],
      },
      {
        q: "Do you have a favourite room?",
        answers: [
          {
            label: "Version 1",
            text: "For sure! Without doubt, my favourite room is my bedroom. I've really put a lot of time into decorating it and [[making it my own|idiom — personalising it to reflect who I am]]. So yea, definitely the bedroom!",
          },
          {
            label: "Version 2",
            text: "Hmm, I guess since I'm quite a [[practical|focused on what is useful rather than beautiful]] person, I would [[go for|choose]] the kitchen. I mean, it's probably the one room that I couldn't live without! So yea, the kitchen would be my [[room of choice|the room I prefer]].",
          },
          {
            label: "Version 3",
            text: "Aw, [[hands down|idiom — without any doubt]], the living room! I literally live in there! I'm a massive movie-lover, so I just spend [[hours on end|idiom — many continuous hours]] [[binge-watching|watching many episodes in one sitting]] everything and anything on Netflix!",
          },
          {
            label: "Version 4",
            text: "I'd have to say my office! I know that's a bit sad, but let me explain! I'm a real [[workaholic|a person addicted to working]], and I need a nice space to get my work done. So my wife and I [[gave the office a makeover|idiom — completely redecorated the office]] and kitted it out with all the [[fixtures and fittings|the equipment and furniture installed in a room]]! And now it's just such a great work environment for me!",
          },
          {
            label: "Version 5",
            text: "Hmm, I'd probably say my sitting room because it's super peaceful, and I can just read my books without any distractions. And it's also got a big, [[comfy|informal — comfortable]] sofa in there!",
          },
        ],
      },
      {
        q: "How is your room decorated?",
        answers: [
          {
            label: "Version 1",
            text: "My room is pretty basic to be honest. I've just moved in and I haven't really put much effort into making it feel [[homey|comfortable and welcoming like a home]], but I'll try to add more pictures and other [[bits and bobs|British idiom — small miscellaneous items]] to [[give the room a lift|idiom — make the room feel brighter and better]]! I've also [[played with the idea|idiom — considered casually]] of getting myself a new TV and Xbox, so that would kind of act as a feature or [[focal point|the centre of attention in a space]] in the room! But we'll just have to wait and see. I haven't [[made my mind up|idiom — decided]] just yet!",
          },
          {
            label: "Version 2",
            text: "I think I've done a pretty damn good job [[if I do say so myself|expression — praising yourself lightly]]! I actually [[take a lot of pride in|feel very proud of and careful about]] my room, so I've bought furniture that matches the colour of the walls, I've got photos of friends and family [[scattered everywhere|spread around in many places]], and I've even put up some fairy lights to give it a little bit more [[ambiance|the mood and atmosphere of a place]]! Of course I've got all the regular fittings and furnishings like a bedside table or a little reading lamp — just [[little touches|small details that improve something]] which make it feel more homey!",
          },
          {
            label: "Version 3",
            text: "It's decorated pretty much like the rest of the house to be honest! It's got the same kind of [[contemporary|modern; in the current style]] feel with lots of colourful pictures and ornaments. And I've also framed some photos of my family and keep them on my [[dresser|a piece of bedroom furniture with drawers]]. But I have to say my room is designed to be as [[minimalistic|using very few decorations; deliberately simple]] as possible. I like to keep it fairly simple and [[uncluttered|tidy; without too many objects]] so I've got some [[built-in storage units|storage fixed into the walls of a room]] to keep all my bits and pieces [[out of sight|hidden; not visible]].",
          },
        ],
      },
      {
        q: "Do you like your neighbourhood?",
        answers: [
          {
            label: "Version 1",
            text: "Oh yea, I really can't complain about my neighbourhood! You know, it's got [[all the essentials|all the basic necessary things]], and thankfully there aren't any [[troublemakers|people who cause problems]] around! The last thing anyone wants is to be always looking over their shoulder in their own neighbourhood! So I'm really grateful for that! What else? The neighbours are really [[amiable|friendly and pleasant]] and everyone knows everyone! So yea, it's quite a [[tight-knit community|a community with close, strong relationships]]! We're always looking out for each other and there's always someone willing to lend a hand if you need it!",
          },
          {
            label: "Version 2",
            text: "Well I'm located [[right in the heart of|exactly in the centre of]] the city centre! So I don't feel like it's really a neighbourhood. But it's great — it's in an ideal area and everything is [[on your doorstep|idiom — very close to where you live]] which is handy! My only complaint is that it can be hard to get some peace and quiet with all the street noise! But you know I'm young and single so I can put up with it. If I had a family however, it'd be [[a completely different story|idiom — a totally different situation]]! I just think it'd be a nightmare trying to put your kids to sleep!",
          },
          {
            label: "Version 3",
            text: "Honestly, not really. Because it's a bit [[out of the way|idiom — far from the main areas; remote]], there aren't many great restaurants or facilities. And my neighbourhood isn't [[well connected|having good transport links]] to the city, so it can be [[a pain in the neck|idiom — an annoying inconvenience]] if I'm [[meeting up with|arranging to see]] friends in the city centre! It also doesn't really have much of a [[community vibe|informal — a feeling of community togetherness]]. Like where my parents live, everyone gets together, they [[put on|organise an event]] family events and just help each other out when they can. Everyone here just [[keeps to themselves|idiom — stays private and avoids socialising]] sadly.",
          },
          {
            label: "Version 4",
            text: "Indeed I do! As I live in a pretty [[rural|relating to the countryside, not the city]] area, my whole village is essentially my neighbourhood! It's great because everyone knows each other, but at the same time, that also means that [[everyone knows your business|idiom — everyone knows your private affairs]]! So I guess it's great for community but bad for privacy! For now I'd prefer city life but I can easily see myself coming back and [[bringing up|raising children]] a family here.",
          },
        ],
      },
      {
        q: "What facilities are in your neighbourhood?",
        answers: [
          {
            label: "Version 1",
            text: "Well, we're quite blessed actually — we've got restaurants, cafes, a post office, stationery shop, and [[greengrocers|shops selling fruit and vegetables]] [[within a stone's throw|idiom — very close by]]! And [[on top of that|discourse marker — in addition]], a new gym just [[opened up|started operating]] 3 minutes from my house! What else? There's a little park a mile or so down the road which is great if you have kids. You know, you can just [[let them loose|idiom — allow them to play freely]] and they can [[go nuts|informal — play with wild energy]] on the jungle gym while you have a coffee or organize your day.",
          },
          {
            label: "Version 2",
            text: "Honestly, not much! We have a little [[cornershop|a small local shop selling everyday goods]] for the community where we get our basics like bread and milk and then there's a McDonald's just down the road. The best thing about our area is the council football pitches which are across the street from the residential area. So at least we can go and play for free! Other than that we're quite limited and have to [[head into|informal — travel to]] the city to find some decent bars, restaurants and all the other facilities.",
          },
          {
            label: "Version 3",
            text: "Well, I live in the countryside so there aren't a pile of facilities! There's a bar which all [[the locals|the people living in a particular area]] drink in at the weekend, but honestly, [[that's about it|expression — there is nothing more]]! We usually have to head to the next town which is much bigger and kitted out with all the entertainment options and services.",
          },
          {
            label: "Version 4",
            text: "Oh goodness, well, I live [[bang in|informal — exactly in]] the city centre, so I've got [[every option under the sun|idiom — every possible option]] available to me! There are some incredible entertainment complexes, the museum of modern art, [[quirky|unusual in an attractive, interesting way]] little bars, cafes full of hipsters! Oh! And there are some [[top-notch|informal — excellent; highest quality]] sushi restaurants here!! Honestly we're [[spoiled rotten|idiom — given far too many good things]]! However I should just add [[the caveat|a warning or condition attached to a statement]] that this all [[comes at a price|idiom — has a disadvantage attached]]! Eating out is [[extortionate|extremely and unfairly expensive]]! I'm quite [[frugal|careful with money; avoiding waste]] so I tend to cook at home.",
          },
        ],
      },
    ],
  },
  {
    id: "hometown-city",
    part: 1,
    title: "Hometown & City",
    emoji: "🌆",
    description:
      "Where you're from, whether you'd stay or move away, how your hometown has changed and what tourists can see.",
    questions: [
      {
        q: "Where are you from? / Where do you currently live?",
        answers: [
          {
            label: "Version 1",
            text: "Well, I'm from quite a small little city called Newry, in Northern Ireland. So there are maybe 30 thousand people here, something like that. And it's probably [[best known for|most famous for]] the canal which transported a lot of products from the city to the capital. But yea, it's still got a very kind of old feel — it's still quite traditional. But there are some different more [[high-end|expensive and high quality]] restaurants [[popping up|informal — appearing quickly in numbers]] over the city!",
          },
          {
            label: "Version 2",
            text: "So yea, I'm from a little city called Newry, which is [[on the border of|at the dividing line between two countries]] Northern Ireland and the Republic of Ireland. It's quite a nice little place to live. And more specifically I live in the countryside, so it's great — there's more fresh air, you get a little bit of peace and quiet here, and you can kind of avoid [[the hustle and bustle|idiom — the busy noise and activity of a city]] of the city centre which I absolutely [[dread|feel great fear or anxiety about]]. So it's good yea! I like it here!",
          },
          {
            label: "Version 3",
            text: "Well, I originally am from a little city called Newry which is in Northern Ireland, just kind of on the border between Northern Ireland and the Republic of Ireland. But I'm currently living in Valencia which is a [[coastal city|a city located by the sea]] in Spain. So yea, it's pretty different here — it's got a much nicer climate. But I do miss the peace and quiet of the countryside back home!",
          },
          {
            label: "Version 4",
            text: "So I'm originally from the countryside just outside a pretty small city called Newry which is in Northern Ireland. And yea, it's lovely there — it's peaceful and relaxing. But currently I'm living in Valencia which is a [[drastically|extremely; severely]] different city. It's a coastal city and the population is probably, I don't know, 10 or 20 times more than what I'm used to. And I'll actually have been living here for 3 months this September. So yea, [[time flies|idiom — time passes very quickly]]!",
          },
        ],
      },
      {
        q: "Do you plan to stay in your current city or move away?",
        answers: [
          {
            label: "Version 1",
            text: "Oh, I'm 100% moving out of my current city! [[Don't get me wrong|expression — don't misunderstand me]], I love it here, but I've [[had my sights set on|idiom — been determined to achieve]] [[relocating|moving to live in a different place]] to Australia for quite some time now!",
          },
          {
            label: "Version 2",
            text: "[[In the long-run|idiom — over a long period of time]] — yes. [[As a matter of fact|discourse marker — actually; in fact]], I'm planning on heading off to London to complete a Masters! Once I get that done and dusted, I plan to go job hunting here.",
          },
          {
            label: "Version 3",
            text: "I'll most likely [[stay put|idiom — remain where you are]] for a little while as I need to finish up my final year at university. But in the summer, [[I'm out of here|informal — I am definitely leaving]]!",
          },
          {
            label: "Version 4",
            text: "Yea I've got big plans ahead of me in Canada actually! I've got a job [[lined up|arranged and ready for the future]] in a software developing company and I hope to [[emigrate|leave your country to live in another]] in the coming months!",
          },
          {
            label: "Version 5",
            text: "I'm not sure actually. I haven't [[made up my mind|idiom — decided]] about my future yet. I'd love to spend a year or so abroad, but in the long-run, I want to [[set up a life|establish a permanent home and lifestyle]] here.",
          },
          {
            label: "Version 6",
            text: "Oh, I'm definitely staying put! I've got a perfectly good job and a husband that I love here! Of course I'm [[up for|informal — willing and enthusiastic about]] little trips [[here and there|occasionally, in various places]]!",
          },
          {
            label: "Version 7",
            text: "Honestly, I've got so much on my plate here, I don't think there's any way I'd be able to move! I [[run my own business|own and manage my own company]] and I've got a family to [[fend for|provide for and protect]], so that's me [[for the foreseeable future|for as far ahead as can be predicted]]!",
          },
          {
            label: "Version 8",
            text: "Yea, without doubt I'm going to stay here! I just got offered [[my dream job|the perfect job you have always wanted]] in an international company so I'm really looking forward to [[getting my career off the ground|idiom — starting my career successfully]]!",
          },
        ],
      },
      {
        q: "Do you like your hometown?",
        answers: [
          {
            label: "Version 1",
            text: "Absolutely! My hometown has [[everything imaginable|every possible thing]]! From nightlife entertainment to sports facilities, it's got it all! I've [[hosted|welcomed and entertained guests]] friends here countless times and they've all [[had a ball|idiom — had a wonderful time]]!",
          },
          {
            label: "Version 2",
            text: "Yes and no! St Petersburg [[has a lot going for it|idiom — has many positive qualities]]! I mean, the architecture in the city centre is truly [[breathtaking|astonishingly beautiful]]. But it does have its social and economical issues. You know, there's just such a big [[wealth gap|the difference between rich and poor people]] here.",
          },
          {
            label: "Version 3",
            text: "Oh 100%! My city has an endless list of things to do! Maybe I'm [[biased|unfairly favouring one side because of personal connection]] because I was [[born and raised|expression — born and brought up in a place]] here, I don't know. But I do genuinely [[highly rate|informal — consider excellent]] Medellin as a top city!",
          },
          {
            label: "Version 4",
            text: "If truth be told, [[I'm not a fan|informal — I don't like it]]. I think there are an array of cities which [[have a lot more to offer|provide many more benefits]] in terms of things like job opportunities, [[transport infrastructure|the systems of roads and public transport]] or affordable healthcare. My country is pretty [[corrupt|dishonestly using power for personal gain]], so opportunities and wealth are not distributed as they should be.",
          },
          {
            label: "Version 5",
            text: "It's ok I guess. I think there is a lot that it could improve on but for the most part, it's pretty decent. It obviously [[doesn't compare to|is not as good as]] cities like New York, London, or Paris, but [[it does the trick|idiom — it is good enough]]!",
          },
          {
            label: "Version 6",
            text: "If I'm being honest, I don't feel super [[connected to|having an emotional bond with]] my hometown. As a matter of fact, I've been living in the capital for [[the best part of|idiom — most of]] three years now. There's just [[no comparison|one is clearly much better than the other]] between the 2 cities in terms of job opportunities and infrastructure.",
          },
          {
            label: "Version 7",
            text: "For sure! It's not as [[technologically advanced|having modern, developed technology]] as some of the big major cities, but I love it [[nonetheless|despite that; anyway]]. I think the people are what really makes it a great place to live!",
          },
          {
            label: "Version 8",
            text: "Yea it's a pretty damn cool city if I'm being honest! It's [[renowned for|famous and celebrated for]] its water sports as it's right beside the ocean! Coastal cities tend to be more [[laid back|idiom — relaxed and easy-going]] so it suits me down to the ground!",
          },
        ],
      },
      {
        q: "Do you visit your hometown often?",
        answers: [
          {
            label: "Version 1",
            text: "[[Now and again|idiom — occasionally]]. I usually [[head back|return]] for the holiday period and stay with my mum and dad, or I sometimes [[drop by|idiom — visit casually]] if there's a big social event on.",
          },
          {
            label: "Version 2",
            text: "[[From time to time|occasionally]], yea — whenever [[the occasion calls for it|the situation makes it necessary]]! I always head home for Tet holiday though. [[It's a must|expression — it is absolutely necessary]]!",
          },
          {
            label: "Version 3",
            text: "To be honest with you, I haven't been home in 2 years! I've been studying abroad and it's so damn expensive to fly home! I'm on a bit of a [[tight budget|having very little money to spend]] as I'm only a student, but I do [[keep in touch|idiom — stay in contact]] via Skype and WhatsApp!",
          },
          {
            label: "Version 4",
            text: "Oh, yea, well, I still live in my hometown! I have a home and full-time job here so this is where I am 99% of the time!",
          },
        ],
      },
      {
        q: "Has your hometown changed much since you were a child?",
        answers: [
          {
            label: "Version 1",
            text: "Without question! It's really [[come a long way|idiom — improved greatly]] since I was a kid in terms of its facilities, the infrastructure, and I've even noticed the standard of the [[hospitality industry|the business of hotels, restaurants and tourism]] has improved as well!",
          },
          {
            label: "Version 2",
            text: "Without a doubt! It used to be a really broken place, but I'm happy to say that it has really [[transformed into|completely changed into]] a truly decent city! There is now better [[accessibility|how easy it is to reach or use something]] throughout the city, more job opportunities here, and the local clubs are [[thriving|growing and succeeding strongly]] at the moment!",
          },
          {
            label: "Version 3",
            text: "Hmm, I think it's [[more or less|approximately; almost]] the same, but with more people and more buildings! Of course there have been a few improvements with regards to the infrastructure, but [[all things considered|idiom — taking everything into account]], it's still very much the same little city!",
          },
        ],
      },
      {
        q: "Is your hometown a good place to raise children?",
        answers: [
          {
            label: "Version 1",
            text: "Yea I reckon so. There are a few big parks for kids to run around in and it's a pretty [[safe and secure|protected from danger and crime]] place to live so we don't have to worry about them staying out late at night.",
          },
          {
            label: "Version 2",
            text: "Absolutely. My hometown has a great [[community spirit|the feeling of belonging and cooperation among neighbours]] so there's a real effort to organise fun family events! It's also got lots of [[multi-purpose facilities|buildings that can be used for many different activities]] throughout the city which can be [[utilized|used]].",
          },
          {
            label: "Version 3",
            text: "Not really to be honest with you. There's a fairly high [[crime rate|the amount of crime in an area]] and a severe lack of security in residential areas, so I'd hate to bring up a child in this environment. I think the countryside would be [[ten times better|informal — much better]].",
          },
        ],
      },
      {
        q: "What is there for tourists to see in your hometown?",
        answers: [
          {
            label: "Version 1",
            text: "Well, my hometown is really well known for its temples and Buddhist culture so I think doing a tour around all of the sites would be a good start! As well as that, I'd recommend trying dumplings as they're one of the most popular dishes in the country.",
          },
          {
            label: "Version 2",
            text: "I'd [[highly recommend|strongly suggest]] hiking the surrounding mountains and [[checking out|informal — going to see]] the view of the city at the top. It's absolutely breathtaking. [[Aside from that|discourse marker — apart from that]], maybe head to the local market to [[get a feel for|idiom — begin to understand or experience]] the traditional cuisine!",
          },
          {
            label: "Version 3",
            text: "Well, there isn't a pile of things to do here! It's quite an [[agricultural|relating to farming]] city so if they like that sort of thing, perhaps visit some of the local farms. But if they want something a little more active, with a little bit more [[buzz|informal — excitement and lively atmosphere]] about it, I'd suggest heading to the old city as there are [[a heap of|informal — many]] entertainment options — like bars, clubs, restaurants and so on.",
          },
        ],
      },
    ],
  },
  {
    id: "chatting",
    part: 1,
    title: "Chatting",
    emoji: "💬",
    description: "What you chat about, face-to-face vs online, and small groups vs big groups.",
    questions: [
      {
        q: "What do you chat about with your friends?",
        answers: [
          {
            label: "Model Answer",
            text: "The conversations I usually have with my friends [[revolve around|to primarily center or focus on particular topics]] [[cliché topics|overused or common topics that lack originality]] such as football and politics honestly. Apart from these topics, we also [[find ourselves|frequently end up in a situation or conversation]] talking about building our businesses and starting our families, as my close friends are [[bachelors|unmarried men]] too.",
          },
        ],
      },
      {
        q: "Do you prefer to chat face-to-face or on social media?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, it really depends on who the person is and what the topic is. For any [[trivial topic|a subject of little importance or significance]] that can be discussed online, I believe social media such as Telegram is really great, but if I am discussing, say, marriage or a business idea, it is better to [[meet up with|arrange to see someone in person for a face-to-face meeting]] that person.",
          },
        ],
      },
      {
        q: "Do you like to talk about different topics than when you were a child?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, the kinds of topics I talk about have greatly changed. In the past, I used to discuss things like grades, video games and food, but now my conversations are mostly about my business, relationships and health. I think I have realized that these things are the most important things now.",
          },
        ],
      },
      {
        q: "Do you prefer chatting with a few friends or a big group of people?",
        answers: [
          {
            label: "Model Answer",
            text: "When there are too many people talking, chances are people are going to talk over each other and the whole thing [[descends into chaos|becomes disorderly or unruly]], so it is better to [[keep the circle small|limit the number of people involved to a select few]] and keep the [[conversations meaningful|discussions that have depth and significance, not shallow talk]].",
          },
        ],
      },
    ],
  },
  {
    id: "clothes",
    part: 1,
    title: "Clothes",
    emoji: "👕",
    description: "Your style, colours you wear and how weekday and weekend outfits differ.",
    questions: [
      {
        q: "What kind of clothes do you like to wear?",
        answers: [
          {
            label: "Model Answer",
            text: "I like wearing [[casual clothes|informal and comfortable clothing worn in relaxed settings]]. I am a [[sporty person|someone active who enjoys sports or physical activities]], so I wear a [[tracksuit|a set of athletic clothing — a jacket and matching pants]] and its bottoms, a t-shirt and trainers [[for the most part|in general or usually]]. If I feel particularly [[fancy|dressed up; wearing more formal attire]], I might [[sport a suit|wear a formal suit]], but that is a really rare occasion, [[to be perfectly candid with you|to be completely honest and open]].",
          },
        ],
      },
      {
        q: "Are there any types of clothing you would never wear?",
        answers: [
          {
            label: "Model Answer",
            text: "I don't like wearing [[flamboyant clothes|bold and extravagant clothing that attracts attention]] that might make me [[look feminine|appear to have characteristics traditionally associated with females]]. I therefore avoid wearing clothes that are too bright, as I don't like [[to be the center of attention|to be the focus of people's notice or interest]]. I also don't like wearing traditional clothes because they are not comfortable.",
          },
        ],
      },
      {
        q: "What colour clothes do you like to wear?",
        answers: [
          {
            label: "Model Answer",
            text: "I find [[muted colors|subdued or less vibrant colors that are not very bold or bright]] to be more attractive simply because they tend to be more [[versatile|usable in a variety of combinations and settings]] and can easily be [[matched with the rest of my outfit|coordinated well with the other clothing items I'm wearing]]. Also, these colors are less likely [[to clash with one another|to not go well together, creating an unharmonious effect]], making it easier [[to create cohesive and stylish outfits|to put together clothing combinations that look well-organized and fashionable]].",
          },
        ],
      },
      {
        q: "Do you wear the same style of clothes on weekdays and weekends?",
        answers: [
          {
            label: "Model Answer",
            text: "No, I don't typically wear the same style of clothes on weekdays and weekends. During the weekdays, especially when I have work or [[formal commitments|scheduled events that require a more dressed-up style of clothing]], I tend to opt for more [[professional attire|clothing suitable for a formal or business setting]]. This usually means wearing [[business casual|a style less formal than traditional business attire but still appropriate for work]] or formal outfits like dress shirts, [[slacks|formal trousers]], and blazers. These outfits help me [[maintain a polished and put-together appearance|ensure I look neat, organized, and professional]] [[in a professional setting|in a workplace or formal environment]]. On the weekends, however, I prefer to [[dress more casually|wear relaxed and informal clothing]] and comfortably. I often [[go for|choose or opt for]] jeans or shorts paired with T-shirts, sweatshirts, or other [[relaxed clothing items|comfortable and easygoing pieces of clothing]].",
          },
        ],
      },
    ],
  },
  {
    id: "concentration",
    part: 1,
    title: "Concentration",
    emoji: "🎯",
    description: "Paying attention, dealing with noise and the tricks that help you stay focused.",
    questions: [
      {
        q: "Do you always pay attention in your lessons at school?",
        answers: [
          {
            label: "Model Answer",
            text: "Whether I am concentrated or not depends on the subject and the teacher. I'm more likely to pay attention in subjects that I'm interested in and that I think are [[relevant to my future goals|pertinent to the objectives or ambitions I have for my future]]. I'm also more likely to pay attention in classes taught by teachers who are [[engaging and deliver interesting lessons|teachers who make the class interesting and captivating through their methods]].",
          },
        ],
      },
      {
        q: "Do you find it easy to concentrate when you're in a noisy place?",
        answers: [
          {
            label: "Model Answer",
            text: "Noise does [[interfere with my ability|disrupt or hinder my capacity to do something effectively]] to concentrate and focus. So if I need to be in a noisy place and do something, I usually use earplugs or [[noise-canceling headphones|headphones with technology to reduce or eliminate external noise]] [[to block out the noise|to prevent or diminish the impact of surrounding noise]], and continue my tasks.",
          },
        ],
      },
      {
        q: "When is it particularly important for you to concentrate?",
        answers: [
          {
            label: "Model Answer",
            text: "There are so many moments when it is [[of crucial importance|extremely significant or essential]] to stay focused. For example, when I am driving, I have to stay concentrated and [[not get distracted by|avoid losing concentration due to]] a phone call or other notifications. Or it can lead to [[a fatal car accident|a serious accident that can result in loss of life]]. When I am taking a test it is important to concentrate, otherwise it is easy to [[make careless mistakes|commit errors due to lack of attention or focus]], and that can [[cost a lot|bring significant negative consequences in money, time or other resources]] both in terms of money and time.",
          },
        ],
      },
      {
        q: "What do you do to help yourself concentrate better?",
        answers: [
          {
            label: "Version 1",
            text: "I try to [[get a healthy amount of sleep|ensure you get an adequate and restful amount of sleep]] since being [[well rested|feeling refreshed and revitalized after a good night's sleep]] is crucial for concentration. I also [[eat nutritious foods|consume a diet that includes healthy and nourishing foods]] and exercise regularly, since I found both are helpful to improve focus. There are more things you can do to improve your ability to focus but these two are important ones.",
          },
          {
            label: "Version 2",
            text: "I usually make a list actually. I think it just [[sorts out all of my thoughts|organizes and clarifies my ideas or tasks]] and it also makes me more motivated. I guess it makes the work less [[daunting|overwhelming or intimidating]] and more [[doable|achievable or manageable]]. It just simplifies everything. I also put my phone away somewhere because otherwise it'll [[distract|divert my attention away from the task at hand]] me. [[That's about it really|expression — those are the main things, in summary]].",
          },
        ],
      },
      {
        q: "Do you find it hard to concentrate?",
        answers: [
          {
            label: "Model Answer",
            text: "All the time. I think most people find it hard to concentrate [[to their full potential in the age we live in|to achieve optimal concentration in the current era]]. I personally procrastinate in the most [[ridiculous ways|unreasonable or nonsensical methods]]. Like I'll [[jump on|begin using something quickly and impulsively]] YouTube or Instagram and tell myself that I'll just watch one 5 minute video and [[before you know it|used to emphasize how quickly something happens]], I'll look at the time and see that I've just wasted an hour and a half. [[Attention span of a goldfish|humorous expression — a very short attention span]].",
          },
        ],
      },
      {
        q: "Did you concentrate on your studies a lot when you were younger?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, I did indeed. I was pretty disciplined as a kid, and I always wanted to do well. I [[put it down to my competitive nature|attribute it to my inherent drive to compete and succeed]]. Like playing sports and games, I loved winning and hated losing. So when I got to high school, I saw it as another place to compete. So, I definitely [[put the time in|invested effort and time]], and thankfully I was able to get good grades and [[get into uni|successfully gain admission to a university]].",
          },
        ],
      },
    ],
  },
  {
    id: "day-off",
    part: 1,
    title: "Days Off",
    emoji: "🌤️",
    description: "Your last break, what you do with free days and who you spend them with.",
    questions: [
      {
        q: "When was the last time you had a few days off?",
        answers: [
          {
            label: "Model Answer",
            text: "Apart from my regular Sundays, it was during the summer holidays. I took some break, for about 2 weeks. I went back to my hometown and I spent those 2 weeks mostly with my family members. I also met some of my childhood friends and overall, I had an amazing time.",
          },
        ],
      },
      {
        q: "What do you usually do when you have days off?",
        answers: [
          {
            label: "Model Answer",
            text: "I try to spend some time on things that I don't normally have time to do, like my hobbies. I watch some of my favorite or new TV shows, I go shopping and I play sports with my friends and colleagues. And I also visit my relatives with my family members.",
          },
        ],
      },
      {
        q: "Do you usually spend your days off with your parents or with your friends?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, [[generally speaking|discourse marker — in general]], I prefer to be around my family members. I mean my closest friends are my colleagues and I see them [[on a regular basis|regularly; often]], and [[given that|considering the fact that]] I work around 60 hours a week, I don't always have time to talk and discuss things with my family members. That's why I try to be with my family members when I have a holiday.",
          },
        ],
      },
      {
        q: "What would you like to do if you had a day off tomorrow?",
        answers: [
          {
            label: "Model Answer",
            text: "I'd probably travel locally because I cannot remember the last time I did that, to be honest. I'd call my friends and we'd probably [[be headed to somewhere|be going or traveling to a particular destination]] far away from the capital, like the mountains.",
          },
        ],
      },
    ],
  },
  {
    id: "films",
    part: 1,
    title: "Films",
    emoji: "🎬",
    description:
      "Movie tastes, cinema vs home, favourite film stars and whether you'd want to be one.",
    questions: [
      {
        q: "Do you like watching films?",
        answers: [
          {
            label: "Model Answer",
            text: "I am a [[massive movie lover|someone with a strong passion for movies]], and I [[binge watch|to watch multiple episodes or seasons in one sitting]] shows on Netflix all the time. If there is a movie that's got all [[the media hype|the intense attention and excitement generated by the media]], I'm also [[jumping on the bandwagon|idiom — joining something that is currently popular or trending]].",
          },
        ],
      },
      {
        q: "What kind of movies do you like best?",
        answers: [
          {
            label: "Model Answer",
            text: "I like movies with an [[interesting storyline|a plot that captures your attention and engages you]] and [[great acting|exceptional performances by the actors]]. I also like [[dialogue-driven|movies that primarily focus on conversations among the characters]] movies such as 12 Angry Men or Dinner with Andre, where two people sit and talk. Such movies give you [[food for thought|idiom — something that stimulates deep thinking]].",
          },
        ],
      },
      {
        q: "Do you prefer to watch films at the cinema or at home?",
        answers: [
          {
            label: "Model Answer",
            text: "Well unless the movie is [[the talk of the age|a movie widely discussed and popular at the moment]], I am definitely watching it at home. I can lie on my couch and pause the movie at any time I want to go to the kitchen to bring something to eat. But [[that is not the case|the situation is different]] when you are watching it on a big screen with a hundred other people.",
          },
        ],
      },
      {
        q: "Who is your favourite film star?",
        answers: [
          {
            label: "Model Answer",
            text: "I have quite a few actually but I am going to say Robin Williams. He was just such a massive part of my childhood and teenage years. For me he'll always be the genie from Aladdin. He was [[outstanding|exceptional or remarkably good]] in Bicentennial Man, Flubber, Hook, RV, Jumanji and a [[whole host of others|many more examples; a wide variety of other movies]]. I just loved how [[animated and wacky|energetic and eccentric in his performances]] he was. He [[didn't take himself seriously|had a sense of humor about himself; not self-important]] and he just [[gave so much joy|brought happiness and delight]] to so many people.",
          },
        ],
      },
      {
        q: "Would you like to be a film star?",
        answers: [
          {
            label: "Model Answer",
            text: "You know I've often thought about this. I love the idea of it. You know, how cool would it be to [[play a part|act a role or character in a movie]] like James Bond or Rambo, but in reality I think acting is [[a tough job|a challenging and demanding profession]] and I'm not entirely sure it's worth it. You certainly kiss your privacy goodbye. The media these days are [[relentless|persistent and unforgiving, never stopping]]. I think it would [[make me go mad|cause me to become mentally distressed or overwhelmed]] honestly. And something I've thought about as I've gotten older is that actors would have to be away a lot of the time from their families and their homes. I'm [[a creature of habit|idiom — someone who prefers routine and finds change difficult]] so I'd really struggle with that. So no, I think there are a hundred other jobs I'd rather do before being a film star.",
          },
        ],
      },
      {
        q: "Have you ever met a film star in person?",
        answers: [
          {
            label: "Model Answer",
            text: "Never — some of my friends have, I'm surprised I haven't [[bumped into|idiom — accidentally encountered or met unexpectedly]] a single one. The closest I got to a film star was a YouTuber who makes filmmaking videos, but [[that's about it|expression — there is nothing more to add]].",
          },
        ],
      },
      {
        q: "Are film stars popular in your country?",
        answers: [
          {
            label: "Model Answer",
            text: "Of course. People really [[glamourize|to idealize or present someone as more glamorous or exciting than they really are]] film stars. I know that some of my friends [[romanticize|to view something in an overly idealized or romantic way]] their favorite actors. I personally focus more on interesting people with great minds like Paul Graham.",
          },
        ],
      },
    ],
  },
  {
    id: "fishing",
    part: 1,
    title: "Fishing & Fish",
    emoji: "🎣",
    description: "Eating fish, fishing spots, aquariums and whether you'd keep fish as pets.",
    questions: [
      {
        q: "Do you like eating fish?",
        answers: [
          {
            label: "Model Answer",
            text: "Yep. [[Big fish eater|someone who regularly consumes a lot of fish]]. Love salmon, cod and fish like that. But I [[am not really big on eating seafood|I don't have a strong preference for eating seafood]]. It actually [[grew on me|idiom — I developed a liking for it over time]] after I became serious about doing a [[protein high diet|a diet that includes a significant amount of protein]], because before I didn't like eating fish because of its [[texture and odour|the feel and smell of the food]].",
          },
        ],
      },
      {
        q: "Have you seen any movies with lots of fish?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, [[off the top of my head|idiom — spontaneously, without much thought or planning]], I can't think of a movie, but I did watch an animated cartoon called Finding Nemo. Back in my childhood years, it was the most popular cartoon. I guess I watched its [[sequel|a film that continues the story of a previous work]] too.",
          },
        ],
      },
      {
        q: "Do you often see fishing in your city?",
        answers: [
          {
            label: "Model Answer",
            text: "Never actually. You have to actually head out to specific [[fishing spots|locations where people go to fish, known for their suitability for catching fish]] to see it in action. I personally spend my time either in the city center or in the mountains rather than near the sea. But if you're really keen on fishing, there are definitely plenty of spots. You can go to [[piers|platforms that extend over the water, often used for fishing]], [[embankments|raised walls or slopes along a body of water]], or you can [[take a boat out to|go on a boat ride or journey on the water to]] a lake or the sea.",
          },
        ],
      },
      {
        q: "Where can you see a lot of fish?",
        answers: [
          {
            label: "Model Answer",
            text: "Apart from the sea? Well obviously people go to aquariums to see fish. Where else? [[I don't know really|expressing uncertainty about a topic]]; I think going to an aquarium is [[your best bet|idiom — the most advisable or likely course of action]] if you want to [[get up close to them|approach or move closer to observe them]]. The only other place that comes to my mind is the fish market. You'll find plenty of fish there but they won't be alive obviously.",
          },
        ],
      },
      {
        q: "Would you like to keep fish as a pet?",
        answers: [
          {
            label: "Model Answer",
            text: "Honestly it doesn't really [[appeal to me|attract my interest or liking]]. I'd personally rather get a dog or some type of pet you can [[make a big emotional connection with|create a strong emotional bond with]], you know? I think fish are cool and fascinating, and I love learning about them, but [[that's as far as I go with them|that's the extent of my connection or interest in them]]. I just don't [[fancy|British informal — have a desire or preference for]] them as pets.",
          },
        ],
      },
    ],
  },
  {
    id: "fixing-things",
    part: 1,
    title: "Fixing Things",
    emoji: "🔧",
    description:
      "Repairing what breaks, learning by trial and error and whether everyone should know basic repairs.",
    questions: [
      {
        q: "Do you generally try to fix things when they stop working or break?",
        answers: [
          {
            label: "Model Answer",
            text: "[[You bet|informal — certainly; absolutely]]! When the things I own start [[malfunctioning|not working as it should, due to a fault or problem]] or [[break down|to stop working or functioning properly]], my go-to move is to [[roll up my sleeves|idiom — get ready for hard work]] and try to [[fix|to repair or restore something to a working state]] it. It's not only [[budget-friendly|affordable; not straining one's budget]] but also keeps things [[greener|more environmentally friendly — repairing reduces waste and conserves resources]]. For example, last month, my old bicycle's chain got all tangled up, so I grabbed my tools and managed to get it back in working order.",
          },
        ],
      },
      {
        q: "Did anyone teach you how to fix things when you were a child?",
        answers: [
          {
            label: "Model Answer",
            text: "I didn't receive any [[formal instruction|structured or organized learning, as in a classroom or training programme]] on fixing things during my childhood, but I picked up some basic skills through [[trial and error|trying different approaches and learning from mistakes until success]]. For example, I remember trying to repair a broken toy by [[taking it apart|disassembling an object by removing its components]] and attempting to [[put it back together|reassembling the object, returning it to its original form]]. Over time, these experiences helped me develop a [[knack for|a natural talent or skill for doing something well]] [[troubleshooting|the process of identifying and solving problems systematically]] and [[mending|repairing or fixing something that is damaged or broken]] various items.",
          },
        ],
      },
      {
        q: "What do you do with something that is broken and can't be fixed?",
        answers: [
          {
            label: "Model Answer",
            text: 'Most of the time, I simply say "[[good riddance|expression of relief when getting rid of something unwanted]]" and [[discard|to get rid of or throw away something no longer useful]] it, but if the components can be [[repurposed|given a new use or function, different from the original purpose]] I keep them. It\'s surprising how [[versatile|adaptable; usable in various ways]] some parts can be. For instance, I once [[salvaged|saved or recovered something that might have been lost or discarded]] the buttons from a broken remote control and used them for a [[DIY project|a Do-It-Yourself task — creating or repairing something on your own, without professional help]].',
          },
        ],
      },
      {
        q: "Do you think everyone should learn how to fix things in the home?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, if people know [[basic repair skills|fundamental abilities to fix common problems without professional help]], it helps them to be [[self-sufficient|able to provide for one's own needs without relying on others]], save money, and reduce waste. I also think it is good for the environment, but I can understand when people want to rely on professionals because of their lifestyle and personal choice.",
          },
        ],
      },
    ],
  },
  {
    id: "friends",
    part: 1,
    title: "Friends",
    emoji: "👥",
    description: "Being a good friend, childhood friends, loyalty and why friendship matters.",
    questions: [
      {
        q: "Do you think you are a good friend?",
        answers: [
          {
            label: "Model Answer",
            text: "[[I'd like to think so|expression — I believe so, or I hope so]], yea. I always try to help them out when I can and I don't mind [[going out of my way|idiom — making extra effort or inconveniencing myself to help]] for them. I think that's a good sign that you're a close friend. As well, if they're in an argument with someone, I try to [[back them up|support them in a disagreement or argument]] as much as possible or at least try to see it from their point of view. I think there is [[a heap of|informal — a lot of; numerous]] different ways you can be a good friend but [[I reckon|informal — I believe or think]] the main one is just [[be there for them|offer support and assistance when they need it]] when they need it.",
          },
        ],
      },
      {
        q: "Do you still have some friends from your childhood?",
        answers: [
          {
            label: "Model Answer",
            text: "I do yea. I wouldn't talk to them as often as I used to but we do [[make an effort|put in the time and energy]] to [[catch up|idiom — meet or communicate to find out what's happening in each other's lives]] [[every now and again|occasionally; from time to time]] to see [[what's going on|the current events or developments]] in each other's lives. It's just that life gets busy and your time gets [[eaten up by|consumed or occupied by]] other responsibilities. But yea, we normally FaceTime and have a laugh, and [[reminisce about the good old days|reflect and talk about fond memories from the past]].",
          },
        ],
      },
      {
        q: "Have the types of friends you make changed a lot?",
        answers: [
          {
            label: "Model Answer",
            text: "They have actually. A few years ago I only really made friends with [[sporty|active in sports or physically active]] people, but now I tend to make friends with those who are just doing something interesting with their lives — whether that is an author, podcaster, dancer or cryptocurrency [[enthusiast|a person with a strong interest or passion for a particular activity]]. It doesn't really matter as long as they're [[decent|fair, honorable, or respectable in character]] and interesting people.",
          },
        ],
      },
      {
        q: "What makes a good friend?",
        answers: [
          {
            label: "Model Answer",
            text: "I think a good friend is just someone who is [[there for you|available and supportive when you require assistance]] when you need them. Someone who won't mind helping you when you're in trouble and who [[has your back|idiom — supports and defends you in difficult situations]] and who'll [[stick with you through thick and thin|idiom — remain loyal and supportive in both good and challenging times]], through the good times and the bad. So yea, I guess [[loyal|faithful and steadfast in friendship]] is the word I'm looking for.",
          },
        ],
      },
      {
        q: "Do you talk about yourself to your friends?",
        answers: [
          {
            label: "Model Answer",
            text: "[[All the time|frequently or regularly]]. I think that's pretty normal for everyone though. Like, you ask them about their lives and they ask about yours. So yea, I tell them [[what's going on with|the current happenings or developments in]] my work or what I [[got up to|informal — the activities you did]] on the weekend, or I might ask them for advice about something.",
          },
        ],
      },
      {
        q: "Do you like to listen to or talk with your friends?",
        answers: [
          {
            label: "Model Answer",
            text: "A bit of both. I think it's important to [[have a balanced back and forth|maintain an equal exchange of conversation]] when you chat with your friends. No one wants to sit there and listen to the other person [[ramble on for ages|talk endlessly without a clear point or purpose]]. And [[likewise|similarly; in the same way]], no one wants to chat to someone who has nothing to say.",
          },
        ],
      },
      {
        q: "Do you often change your mind about your friends?",
        answers: [
          {
            label: "Model Answer",
            text: "Not really, I think I know my friends pretty well. Obviously if they did something [[out of character|behaving in a way that is unusual for them]] or they [[crossed certain boundaries|overstepped established limits or guidelines]], I'd think differently about them. But I just don't see that happening. [[Fingers crossed|expression of hope for a favorable outcome]].",
          },
        ],
      },
      {
        q: "Is it important to have friends?",
        answers: [
          {
            label: "Model Answer",
            text: "Awk yea, I think everyone can agree that having friends is an [[essential part|a crucial or necessary component]] of life. It would be [[bleak|gloomy or depressing]] without them. Friends can give you advice, help you out when you need it and just [[give you a laugh|make you laugh; provide humor]]. [[In my experience|based on what I have personally encountered]], friends are the people who listen to you when you're going through something and are able to support you [[through thick and thin|idiom — in both good times and bad times]].",
          },
        ],
      },
    ],
  },
  {
    id: "geography",
    part: 1,
    title: "Geography",
    emoji: "🗺️",
    description:
      "Geography at school, why it's useful and countries worth visiting for their landscapes.",
    questions: [
      {
        q: "Did you study geography at school?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, geography was taught between grades 7 and 10, [[as far as I can remember|to the best of my recollection or knowledge]]. I remember learning about the [[physical features of|characteristics related to the Earth's surface of]] our planet like continent and mountain formation, [[quakes|short for earthquakes — the shaking of the Earth's surface]] and volcanoes and [[all that jazz|colloquial expression — and various related things]]. I also learnt about [[human societies|groups of people organized and living together with shared customs and cultures]] and their interaction with one another.",
          },
        ],
      },
      {
        q: "Do you think geography is a useful subject?",
        answers: [
          {
            label: "Model Answer",
            text: "Of course, it helps students [[develop a better understanding of|enhance their comprehension or knowledge about]] the world around them. For example, I think many current problems can be better understood if people know geography well, like the ongoing war between Russia and Ukraine.",
          },
        ],
      },
      {
        q: "Are you interested in visiting any countries because of their geography?",
        answers: [
          {
            label: "Model Answer",
            text: "There are many such countries [[in my bucket list|a list of things or experiences one hopes to do in their lifetime]]. New Zealand [[easily tops this list|is the highest priority or most desirable item on the list]] because of its [[dramatic landscape|scenery that is visually striking, with bold or impressive natural features]] as I believe it is [[a paradise|an ideal or perfect place]] for [[adventure seekers|individuals who actively seek out exciting and challenging experiences]] like me. Next up is Norway for its famous Northern Lights.",
          },
        ],
      },
      {
        q: "Do many people study geography in your country?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, many people stop learning this subject after school, because there is no need to continue learning it deeply. But some of my friends play games like GeoGuessr which improves their knowledge of geography, I believe.",
          },
        ],
      },
    ],
  },
  {
    id: "gifts",
    part: 1,
    title: "Gifts",
    emoji: "🎀",
    description: "Giving and receiving gifts, what to buy and shopping online vs in store.",
    questions: [
      {
        q: "Do you like giving gifts to people?",
        answers: [
          {
            label: "Model Answer",
            text: "I guess I do. It is a great way to [[make your friends and family's day a little brighter|bring some joy or happiness to someone's day]]. It is also a great way [[to strengthen bonds|to enhance or deepen the emotional connections between people]] and [[put a smile on their face|make someone happy or bring a cheerful expression to their face]]. For example, last week I bought my brother a new backpack — he was [[over the moon|idiom — extremely happy or delighted]].",
          },
        ],
      },
      {
        q: "What kind of gifts do you usually give to your friends or family?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, if I am buying a gift for women that I know, I am usually buying flowers — [[a classic gift that you can never go wrong with|a traditional and universally appreciated gift that is likely to be well-received]]. For men, either a watch or a perfume [[does the trick|idiom — is effective or serves its purpose well]].",
          },
        ],
      },
      {
        q: "Do you prefer to buy gifts online or in a store?",
        answers: [
          {
            label: "Model Answer",
            text: "I don't have a preference between online and in-store shopping for gifts. It really depends on the situation. Online shopping is great for [[convenience and variety|the advantage of ease and a wide range of options]], but [[there's something special about|there is a unique or enjoyable aspect to]] visiting a store and seeing the gift in person. So, I choose based on what [[fits the occasion best|is the most suitable choice for the specific event or situation]].",
          },
        ],
      },
      {
        q: "How do you feel when you receive a gift from someone?",
        answers: [
          {
            label: "Model Answer",
            text: "I think literally everyone feels happy when they receive a gift. I mean it is [[a nice gesture|a kind or considerate action]] that [[warms my heart|makes me feel happy or touched in a heartfelt way]] because I feel special and appreciated, especially if a gift is [[thoughtful|showing careful consideration for the recipient's preferences and needs]]. I mean when I know they have spent a good amount of time to choose the gift for me.",
          },
        ],
      },
    ],
  },
  {
    id: "health",
    part: 1,
    title: "Health & Exercise",
    emoji: "💪",
    description:
      "Keeping fit, a balanced diet, favourite sports and which sports keep people healthy.",
    questions: [
      {
        q: "What kind of exercises do you do?",
        answers: [
          {
            label: "Model Answer",
            text: "These days, I usually [[go jogging|engage in running exercise at a moderate pace]] in the mornings and I [[skip some rope|jump rope — a form of cardiovascular exercise]] because the weather is nice. Every now and then I do push-ups and pull-ups. I don't do these exercises very [[intensely|with high levels of effort, pushing one's limits]]. I just try to keep fit by doing [[light exercises|less intense physical activities aimed at maintaining fitness without extreme effort]].",
          },
        ],
      },
      {
        q: "How do you keep healthy?",
        answers: [
          {
            label: "Model Answer",
            text: "Apart from doing those exercises, I try to [[have a balanced diet|eating a wide variety of foods in the right proportions to maintain a healthy body weight]]. Yes I may consume fast food [[here and there|occasionally or infrequently, not on a regular basis]], but I always try to include fruit and vegetables into what I eat.",
          },
        ],
      },
      {
        q: "What are your favourite sports?",
        answers: [
          {
            label: "Model Answer",
            text: "I love football. [[On top of|in addition to; besides]] playing it with my friends once a week or so, I watch it quite passionately. Also, I enjoy watching [[combat sports|sports involving fighting techniques such as striking and kicking]] such as wrestling and boxing because these sports are [[a big deal|informal — important or special]] in my country.",
          },
        ],
      },
      {
        q: "What sports help people stay healthy?",
        answers: [
          {
            label: "Model Answer",
            text: "I believe any type of sport is effective in improving people's health. Even [[less intense|not highly strenuous or demanding]] sport types such as yoga are believed to improve physical fitness. But according to what I've heard, running is the best if people aim to stay healthy because it helps [[blood circulation|the flow of blood through the body, delivering oxygen and nutrients to cells]], it's good for the heart and it [[burns fat|uses stored body fat as an energy source during physical activity]].",
          },
        ],
      },
    ],
  },

  /* ═══════════════════ PART 2 ═══════════════════ */
  {
    id: "place-free-time",
    part: 2,
    title: "Describe a place you would like to visit in your free time",
    emoji: "🫖",
    description: "A model long-turn answer about a traditional Chaihana in Fergana.",
    cueCard: [
      "Where it is",
      "What you will do there",
      "How long you will stay",
      "Why you would like to visit",
    ],
    questions: [
      {
        q: "Describe a place you would like to visit in your free time.",
        answers: [
          {
            label: "Model Answer",
            text: "For quite some time now, I've had a growing list of places I'd like to visit in my hometown, and one that has been [[at the top of my mind|idiom — something you think about most often]] lately is a newly opened Chaihana — a traditional Uzbek cafe and restaurant here in Fergana. It opened around two or three months ago, and it has been [[generating a lot of buzz|buzz means excitement and talk among people]] among locals ever since.\n\nWhat I find particularly [[compelling|strongly attracting interest or attention]] about this place is its décor. Unlike many modern establishments that have [[moved away from their cultural roots|strong phrase for losing traditional identity]], this Chaihana has maintained a [[genuinely authentic Uzbek atmosphere|powerful descriptive phrase]] — you can see [[intricate traditional patterns|intricate means detailed and complex]], beautiful brickwork, and detailed woodwork throughout. It feels like [[stepping into a different era|vivid idiom — era means a period of time]].\n\nOn top of that, several friends who have already visited with their families have [[spoken very highly of|natural expression meaning praised enthusiastically]] the food, describing it as some of the best in Fergana. I'd love to go with a group of close friends and experience it properly. The only thing holding me back at the moment is that I'm a little [[short on money|natural idiom — not having enough money]] — it's on the [[pricier side|natural spoken expression — pricier means more expensive]] — but once I get the chance, it's definitely [[first on my list|idiom meaning the most important or prioritized thing]].",
          },
        ],
      },
    ],
  },
  {
    id: "special-gift",
    part: 2,
    title: "Describe a special gift you received",
    emoji: "🎁",
    description: "A model long-turn answer about a homemade birthday cake.",
    cueCard: [
      "What kind of gift it was",
      "When you had it",
      "Why it was special",
      "Who you were with",
    ],
    questions: [
      {
        q: "Describe a special gift you received.",
        answers: [
          {
            label: "Model Answer",
            text: "If I'm being truthful, I don't often receive particularly memorable gifts. The people close to me aren't really the type to [[go out of their way|idiom — to make a special effort for someone]] for birthdays or surprises — not because they don't care, but it's just not something they naturally do.\n\nHowever, one gift from my childhood has [[stayed with me|phrasal verb — remained in your memory strongly]] all these years, and thinking about it still [[brings a smile to my face|natural expression for a happy memory]]. I was about seven or eight years old when my sister, on my birthday, decided to bake me a cake entirely by hand. What made it so [[touching|emotionally moving and heartfelt]] was that it was one of her very first times doing something like that.\n\nShe has grown into an exceptional cook over the years — truly gifted when it comes to baking and making sweets — but at the time, she was still [[finding her feet|idiom — getting used to something new for the first time]] in the kitchen. What she created was a chocolate cake, made with me [[specifically in mind|strong phrase — made with a particular person considered]], since she knew how much I loved chocolate at that age.\n\nIt wasn't just a cake — it was a [[personal gesture|a gesture means an action that shows your feelings]], crafted with real [[love and attention to detail|attention to detail means being careful about small things]]. The taste was absolutely [[unforgettable|impossible to forget]], and I mean that literally — even now, I feel like I can still [[sense it on my tongue|vivid sensory expression — better than 'remember the taste']]. It's the kind of gift that [[money can't buy|idiom — something valuable that cannot be purchased]], and it remains one of the most special things anyone has ever done for me.",
          },
        ],
      },
    ],
  },
  {
    id: "invention-ai",
    part: 2,
    title: "Describe an invention that changed the world",
    emoji: "🤖",
    description: "A model long-turn answer about Artificial Intelligence and ChatGPT.",
    cueCard: [
      "What the invention is",
      "How you learned about it",
      "How it is used",
      "Why it is important",
    ],
    questions: [
      {
        q: "Describe an invention that changed the world.",
        answers: [
          {
            label: "Model Answer",
            text: "There have been hundreds of [[groundbreaking inventions|innovations that significantly advance or change a field or industry]] over the past century, ranging from the internet to the wheel. But now I am going to talk about a recent invention that [[totally blew my mind|completely amazed or astounded me]]. It's Artificial Intelligence, or AI, which is pretty much [[a game-changer|something that fundamentally alters or revolutionizes a situation or industry]], and the latest thing in this realm is ChatGPT-4. It's this smart invention that's changed the direction of how we talk to technology and how it responds to us.\n\nImagine you are having a chat with your computer or your phone, and it understands what you're saying and responds like a real person. That's GPT. You can type or talk to it, and it gets what you mean and chats back in a way that makes sense. It's like your [[tech buddy|an AI or technology that interacts with you in a friendly and intuitive way]] who's a mind reader.\n\nThe cool thing is that ChatGPT-4 is an evolution of previous versions, and it's part of the bigger picture of AI. The concept of AI has been around [[since the dawn of the 21st century|from the beginning of the 21st century]], but it's now that we're seeing these amazing advancements, and ChatGPT-4 is a star player in that journey.\n\nSo, why is it important? Well, it's a game-changer. It's making our lives easier in so many ways. It's like having a super-smart assistant that's available 24/7, and it's helping us in business, healthcare, education, and more. This invention is [[pushing the boundaries of|extending the limits or possibilities in a particular field]] what technology can do, and it's pretty exciting to think about what's coming next, you know.",
          },
        ],
      },
    ],
  },
  {
    id: "long-car-journey",
    part: 2,
    title: "Describe a long car journey you went on",
    emoji: "🚗",
    description: "A model long-turn answer about a weekly drive to a legendary palov spot.",
    cueCard: [
      "Where you went",
      "Who you went with",
      "What you did during the journey",
      "How you felt about it",
    ],
    questions: [
      {
        q: "Describe a long car journey you went on.",
        answers: [
          {
            label: "Model Answer",
            text: "I don't really like [[dull|boring or uninteresting]] car journeys, you know. [[If anything|discourse marker — in fact; more accurately]], I can go on a long car journey once a year for a holiday. But now I've got this favorite [[eating spot|a restaurant or place to enjoy a meal]] in Tashkent, and it's called \"SamOsh.\" They serve the most amazing palov you can find in town and I am going to talk about them now.\n\n[[The catch is|the challenge or noteworthy aspect is]], \"SamOsh\" is [[tucked away|hidden or situated in a less obvious location]] in this [[obscure part of the city|a less-known or less-visited area of the city]]. Getting there involves an hour-long car ride. But you know, my colleagues and I really love this place so much that we make the journey at least once a week.\n\nIt's not just about the destination, to be honest — it's the whole journey that makes it special. I usually go with my colleagues, and we [[have a blast|idiom — have a great time]] during the car ride. We chat, share stories, and make plans, all while looking forward to the [[mouthwatering|extremely delicious or appetizing]] palov we're about to [[devour|to eat or consume eagerly]].\n\nHow do I feel about it? Well, I absolutely love it. The journey feels like a fun adventure, [[building up our excitement|increasing our anticipation or eagerness]] for the incredible palov waiting for us there. But it's not just about the food; it's about the [[great company|enjoyable companionship or friends]], [[camaraderie|a sense of friendship, trust and goodwill among a group]] and the memories we create. So, yeah, it's a journey I always eagerly await, and it's become [[a cherished part of my week|something highly valued that happens regularly each week]].",
          },
        ],
      },
    ],
  },
  {
    id: "a-book",
    part: 2,
    title: "Describe a book you enjoy reading again and again",
    emoji: "📖",
    description: "A model long-turn answer about Dostoevsky's Notes from Underground.",
    cueCard: [
      "What the book is",
      "How often you read it",
      "Why you keep coming back to it",
      "How it makes you feel",
    ],
    questions: [
      {
        q: "Describe a book you enjoy reading again and again.",
        answers: [
          {
            label: "Model Answer",
            text: "You know, there's a book I keep going back to, and I am going to talk about it now. It's \"Notes from Underground\" by Fyodor Dostoevsky. It's a pretty deep novel, written way back in 1864, and it's all about the human mind and soul.\n\nI have this habit of reading \"Notes from Underground\" about once a year. The very reason why I keep coming back to it is Dostoevsky's incredible way of [[peeling back|uncovering or revealing deeper layers or aspects]] the layers of his [[protagonist's|the main character of a story]] thoughts. This guy, the \"Underground Man,\" he's so complex, and the author's way of portraying his [[inner turmoil|intense emotional conflict or distress within a person]] and [[philosophical musings|deep, contemplative thoughts on fundamental or abstract ideas]] is just brilliant.\n\nWhat I find fascinating is how Dostoevsky describes the human psyche, showing all the messy emotions and contradictions we deal with. His style is like [[an intellectual rollercoaster|a journey of complex and thought-provoking mental experiences]]. It forces you to confront your own thoughts and feelings in a pretty [[intense way|a manner that is deeply engaging or emotionally charged]].\n\nThe cool thing is, whenever I'm feeling down or stuck in a rough patch, I turn to this book. It's like a shot of inspiration and hope when life's throwing its worst at you. It reminds me that, even in the darkest moments, there's [[a glimmer of light at the end of the tunnel|a symbol of hope or a positive sign in challenging times]] to [[yearn for|to strongly desire or long for something]]. It's like your friend saying, \"Hey, things can get better.\"",
          },
        ],
      },
    ],
  },
  {
    id: "moved-new-apartment",
    part: 2,
    title: "Describe a person who recently moved to a new home",
    emoji: "📦",
    description:
      "A model long-turn answer about a friend's move from the city centre to the suburbs.",
    cueCard: [
      "Who this person is",
      "What the new place is like",
      "Why they moved",
      "How they feel about it now",
    ],
    questions: [
      {
        q: "Describe a person who recently moved to a new home.",
        answers: [
          {
            label: "Model Answer",
            text: "I think it's one of the rarest things we do in our lifetime. If anything, we only move to a new apartment once or twice. I've got a buddy named Ernazar who's in his early twenties, and he [[recently switched things up|made a recent change or alteration in his life]] by moving to a new place. He is my childhood friend and I've known him my whole entire life, you know.\n\nSo, this new place he's got is pretty sweet — a cool, modern apartment in a quiet suburban area. It's a [[huge upgrade|a substantial improvement or enhancement]] from his previous spot, which was this tiny, pricey place right in the city center. His new [[pad|informal — a person's home]] has [[spacious|having a lot of room or ample space]] rooms, loads of natural light, and it's super peaceful. It's just what he needed for a more comfortable and budget-friendly living space.\n\nHis decision to move was all about the crazy high rent prices in the city center. I mean, it was [[eating into his wallet big time|costing him a significant amount of money]]. So, he [[figured a switch|decided to make a change or transition]] to a quieter suburb would give him a better quality of life without [[breaking the bank|idiom — spending so much that it strains your finances]]. Plus, he wanted [[a change of scenery|a new and different environment or surroundings]], something more chill to match his young professional life.\n\nDo you know what the best part is? This move has been amazing for him. He's not just in a more spacious and budget-friendly place; he's also way happier and more relaxed. It's like [[a weight off his shoulders|idiom — a relief from a burden or stress]]. He's got more [[cash to play with|extra money for spending as you wish]], whether it's saving up or going out to have fun. Seeing him enjoy this new and [[improved setup|a better living or working arrangement]] just makes me happy.",
          },
        ],
      },
    ],
  },
  {
    id: "popular-person",
    part: 2,
    title: "Describe a popular person",
    emoji: "⭐",
    description: "A model long-turn answer about podcast host Joe Rogan.",
    cueCard: [
      "Who this person is",
      "What they do",
      "How you came to know about them",
      "Why they are popular",
    ],
    questions: [
      {
        q: "Describe a popular person.",
        answers: [
          {
            label: "Model Answer",
            text: "I think it's really easy nowadays to become popular, especially in the era of the internet: with popularity being a click away, I mean, you don't have to put much effort in. So, now I want to tell you about this super popular guy Joe Rogan. He's the host of this amazing podcast called the \"Joe Rogan Experience\" on YouTube and I've been a fan of his for a while now.\n\nJoe Rogan [[wears many hats|idiom — has multiple roles or responsibilities]], you know. He's a stand-up comedian, actor, and even a former mixed martial artist. But it's his role as a podcast host that's made him really famous. I first [[came across|found or discovered by chance]] him through his stand-up comedy and his gig as a UFC commentator. His humor and depth of knowledge totally [[hooked me in|captivated or deeply interested me]].\n\nOne of the coolest things about him is the incredible variety of guests he brings onto his podcast. I mean, he's had Elon Musk, famous comedians, and respected scientists like Andrew Huberman. It's like he can chat with anyone about anything, and that's what I find super intriguing.\n\nWhat I love most about Joe is his authenticity. He's not afraid to ask the [[tough questions|challenging or difficult inquiries that require deep thought]] and [[get to the heart of the matter|to reach the core or most important part of a discussion]] during his conversations. He's not just looking for [[clickbait headlines|sensational or misleading headlines designed to attract attention and clicks]]; he genuinely wants to explore important topics. That's why I respect him so much. He's [[a breath of fresh air|idiom — something new and refreshing, in contrast to what's common]] in an era where sensationalism often takes over.\n\nBesides all that, he's a bit of a role model, especially in the world of masculinity. He's all about discipline, [[resilience|the ability to bounce back from setbacks or adversity]], and mental strength, which I think is something many people can learn from and [[look up to|admire and consider as a role model or source of inspiration]].",
          },
        ],
      },
    ],
  },
  {
    id: "movie-didnt-like",
    part: 2,
    title: "Describe a movie you watched and didn't like",
    emoji: "🍿",
    description: "A model long-turn answer about the Barbie movie not living up to the hype.",
    cueCard: [
      "What the movie was",
      "When you watched it",
      "Why you didn't like it",
      "How you felt about the hype",
    ],
    questions: [
      {
        q: "Describe a movie you watched and didn't like.",
        answers: [
          {
            label: "Model Answer",
            text: "I don't really watch a lot of movies these days since I'm busy with the many responsibilities I have got. But now I am going to talk about this Barbie movie I saw recently — quite a [[letdown|a disappointment; something that falls short of expectations]], to be honest. It had received a lot of [[media hype|excessive promotion and attention in the media]], but it didn't quite [[live up to the buzz|meet the high expectations generated by media coverage]]. It [[falls under the fantasy genre|belongs to the fantasy category of films]], and I caught it a few weeks ago.\n\nSo, the main reason for my disappointment was the story. It felt like I'd seen it all before — the classic \"girl saves the day\" plot. I was hoping for something more original and thought-provoking, but it just didn't [[deliver in that department|meet expectations or perform well in that aspect]].\n\nThe characters, too, didn't have that depth I was expecting. They felt kind of [[one-dimensional|lacking depth or complexity]], which was [[a bummer|informal — something disappointing or unfortunate]], considering the potential for more complex and interesting characters in a Barbie movie.\n\nThe humor was [[a bit of a miss|a failure; something that doesn't meet expectations]] for me. It [[leaned more towards|tended to be inclined towards or favor]] kid-friendly, [[slapstick|a style of humor involving exaggerated physical actions and simple situations]] humor, making it a bit hard for adults like me to fully connect with the film. I think animated movies can have clever humor that appeals to people of all ages.\n\nVisually, the movie was nice, but it didn't [[bring anything groundbreaking to the table|contribute anything innovative or uniquely valuable]] in terms of shooting quality. I was hoping for something more, given the advanced technology we have these days.\n\nAnd you know what made it even more disappointing? All the media hype. It [[set my expectations really high|raised my anticipation to a very elevated level]], and the movie just couldn't quite reach them.",
          },
        ],
      },
    ],
  },
  {
    id: "helpful-person",
    part: 2,
    title: "Describe a person who often helps others",
    emoji: "🦸",
    description: "A model long-turn answer about Mr. Abdulla, the neighbourhood's guardian angel.",
    cueCard: [
      "Who this person is",
      "How you know them",
      "How they help people",
      "How you feel about them",
    ],
    questions: [
      {
        q: "Describe a person who often helps others.",
        answers: [
          {
            label: "Model Answer",
            text: "Always [[lending a helping hand|offering assistance]] to people, especially to strangers, definitely brings positive outcomes to our lives. And now I'm going to talk about this amazing person I know, Mr. Abdulla. He's like the neighborhood's [[guardian angel|a constant helper and protector]], always ready to lend a helping hand.\n\nSo, Mr. Abdulla is this elderly gentleman who lives in my neighborhood. I've known him since I was born, you know. He's retired and spends most of his time [[tending to|caring for]] his beautiful garden. And let me tell you, that garden of his is like [[a small piece of paradise|a beautiful, perfect place]].\n\nHe's somehow special, you know, because of his eagerness to help people. He's a gardening wizard, and he's more than happy to [[lend out|to share something temporarily]] his gardening tools whenever someone needs them. Need a shovel, a rake, or any gardening advice? He's your guy. But it's not just about the garden. He's always there for anyone who needs assistance with anything.\n\nOne time, I was driving to work, and [[out of the blue|idiom — suddenly and unexpectedly]], my car broke down. It couldn't have happened at a worse time because I had an important meeting that day. I was stuck on the side of the road, feeling helpless and stressed. And you know who came [[to my rescue|to help me in a difficult situation]]? Mr. Abdulla in his old Jeep. He not only gave me a lift to work but also helped me [[get my car sorted out|informal — get my car fixed]]. His [[timely support|prompt assistance at exactly the right moment]] [[saved the day|idiom — prevented a crisis]], and I [[can't thank him enough|expression — I am extremely grateful]].",
          },
        ],
      },
    ],
  },
  {
    id: "ideal-house",
    part: 2,
    title: "Describe your ideal house",
    emoji: "🌲",
    description: "A model long-turn answer about a fairytale house deep in the forest.",
    cueCard: [
      "Where it would be",
      "What it would look like",
      "When you would live there",
      "Why it appeals to you",
    ],
    questions: [
      {
        q: "Describe your ideal house.",
        answers: [
          {
            label: "Model Answer",
            text: "You know, when I think about my ideal home, I [[can't help but picture|feel compelled to imagine; unable to resist the mental image]] a charming house [[tucked away|hidden or situated in a discreet, secluded location]] in the [[heart of a beautiful forest|the central and most picturesque part of a woodland]]. It's the kind of place that feels like a fairytale come to life, and I'm going to talk about it.\n\nFirst off, I'd place this house in a remote part of a [[lush|abundantly green, thriving, and full of life]], untouched forest. I'm talking about a real [[off-the-grid|not connected to public utilities; remote and self-sustaining]], peaceful retreat where you're far, far away from the city's noise and pollution. The idea here is to live in harmony with nature, surrounded by tall trees and a thriving ecosystem.\n\nNow, in terms of the house itself, I'm all about that [[rustic|having a simple, rural, and unrefined quality]], [[old-world charm|a quality that evokes the beauty and appeal of a past era]]. I envision it made of timber and stone, with a classic [[thatched roof|a roof covered with straw or reeds, seen in traditional architecture]] and those big, [[wooden beams|strong horizontal wooden supports in a building]]. The exterior would combine seamlessly with the natural surroundings, and you'd find generous windows all around the house, so you could take in those breathtaking forest views from every room. And of course, there's a [[spacious|having ample space; roomy]] porch, perfect for sipping coffee and taking in the forest sights and sounds.\n\nAs for when I'd want to live there, I'd say it's the kind of place I'd move to when I'm ready to fully embrace a slower, more [[contemplative|involving quiet, deep thought]] lifestyle. I'm thinking of it as a [[retirement dream|an ideal living situation for your post-working years]]. A peaceful spot where I can read, write, and [[immerse myself in|become completely absorbed in]] the beauty of the natural world.",
          },
        ],
      },
    ],
  },
  {
    id: "adventure",
    part: 2,
    title: "Describe an adventure you would like to go on",
    emoji: "🪂",
    description: "A model long-turn answer about a bungee jumping dream with a friend.",
    cueCard: [
      "What the adventure is",
      "Who you would go with",
      "When and where you would do it",
      "Why it excites you",
    ],
    questions: [
      {
        q: "Describe an adventure you would like to go on.",
        answers: [
          {
            label: "Model Answer",
            text: "I wouldn't be wrong if I said I'm one of the most adventurous people on Earth. I've always had this [[wild idea|an exciting, unconventional thought]] in my head about going [[bungee jumping|jumping from a height attached to an elastic cord]], and I'm telling you, it's going to be a [[heart-pounding thrill|an intensely exciting experience]]. I've got a buddy named Jo'rabek who's just as [[nuts about|informal — extremely passionate about]] extreme sports as I am, so I figure he's [[the perfect companion|the ideal partner for an activity]] for this wild ride.\n\nSo, we're thinking, why not make this bungee jumping extravaganza happen on a bright, sunny day? The kind of day where the sky is the bluest blue you've ever seen, and the sun's rays are [[beaming down|shining brightly from above]]. That way, we can get the full experience with some [[epic views|spectacular sights]] while we [[plunge into the unknown|dive into uncertainty]]. A weekend during the summer sounds like the perfect time, you know.\n\nNow, what's the plan? The whole concept of [[leaping off a platform|jumping from a raised surface]] and free-falling, only to [[bounce back up|rebound after a fall]], [[gives me a rush|provides a surge of excitement]] just thinking about it. It's all about that extreme sensation, you know? The feeling of weightlessness and then the [[cord jerking you back|the elastic cord suddenly pulling you upward]] to safety. That's what we're after — pure, [[unadulterated|pure; not mixed with anything else]] thrill.\n\nBut where should we do this? Well, not just any old place. We want to pick a spot that's legendary for bungee jumping, maybe one of those breathtaking canyons or cliffs. We're talking about a location that not only delivers a crazy [[adrenaline rush|a surge of energy and excitement from danger or thrill]] but also offers [[jaw-dropping|astonishing; amazing]] natural beauty. It's [[the combo of|informal — the combination of]] extreme adventure and [[stunning scenery|exceptionally beautiful landscapes]] that would make this trip absolutely unforgettable.",
          },
        ],
      },
    ],
  },
  {
    id: "difficult-decision",
    part: 2,
    title: "Describe a difficult decision you once made",
    emoji: "⚖️",
    description: "A model long-turn answer about buying a house and moving from Navoi to Tashkent.",
    cueCard: [
      "What the decision was",
      "Why it was difficult",
      "What you considered before deciding",
      "What the result was",
    ],
    questions: [
      {
        q: "Describe a difficult decision you once made.",
        answers: [
          {
            label: "Model Answer",
            text: "Well, one of the most significant decisions I've ever made was to buy a house in a completely different city, Tashkent, and move away from my hometown, Navoi. The reason behind this major decision was my job. About two years ago, I was offered a fantastic opportunity in Tashkent, which meant I had to [[pack up|prepare all your things for moving]] and leave Navoi.\n\nIt was a tough decision, no doubt. I had lived in Navoi practically my whole life, so leaving my familiar surroundings was [[a big deal|a significant matter]]. Of course, to make this decision, I had to consider a bunch of factors.\n\n[[First and foremost|discourse marker — most importantly; before anything else]], I had to think about my career. I talked to mentors and experts in my field to understand if this job in Tashkent was worth it. I wanted to know if it could [[open up more doors|idiom — create more opportunities]] for me [[in the long run|over a long period of time]].\n\nThen, of course, there was my family. I had several [[heart-to-heart conversations|honest, sincere talks about feelings]] with my loved ones. We looked into schools, lifestyle, and the overall quality of life in Tashkent, especially in comparison to Navoi. [[Their input|their opinions and contributions]] was crucial.\n\nMoney was another [[big part of the equation|a significant factor in the decision]]. I met with financial advisors to see if it was even [[feasible|possible and practical to achieve]] to buy a house in Tashkent. That city's real estate market is quite pricey compared to Navoi, so I needed to understand the [[financial implications|the effects on your money situation]], including mortgage rates and [[property appreciation|the increase of a property's value over time]].\n\n[[At the end of the day|idiom — in the end; ultimately]], I decided to go for it. The potential for personal and professional growth, the better educational opportunities for my kids, and the possibility of the property appreciating in value [[swayed me towards|persuaded me to choose]] Tashkent.",
          },
        ],
      },
    ],
  },
  {
    id: "expensive-item",
    part: 2,
    title: "Describe an expensive item you would like to give as a gift",
    emoji: "⌚",
    description: "A model long-turn answer about a fur coat and a Rolex for a beloved brother.",
    cueCard: [
      "What the item is",
      "Who you would give it to",
      "Why you chose it",
      "What it symbolizes for you",
    ],
    questions: [
      {
        q: "Describe an expensive item you would like to give as a gift.",
        answers: [
          {
            label: "Model Answer",
            text: "To be honest, I'm not the one to choose or give presents, but now I'm going to talk about an expensive gift I'm dreaming of giving to my brother. It's going to be a fantastic fur coat and a [[top-of-the-line|the highest quality or best available in a category]] Rolex watch. I've chosen these because my brother is just an incredible person who's always been there for me, and I think he truly deserves something extraordinary. Now, saving up for these beauties will take me about 3 to 4 months, [[factoring in|including in the calculation]] my regular monthly expenses and making sure I can afford them without causing any [[financial stress|anxiety or pressure caused by money difficulties]].\n\nSo, the fur coat and Rolex watch are quite special to me. They symbolize not only the value of time but also the [[strong bond|a close and enduring connection between people]] I share with my brother. He's been [[a rock in my life|idiom — someone who provides unwavering support and stability]], providing [[unwavering support|consistent, steadfast support that never changes in difficult times]] and being super [[selfless|caring about others' needs more than your own]] in his actions. I'm [[forever grateful|extremely thankful]] for his kindness and love.\n\nThe Rolex watch, well, it's all about time. It's a reminder of all the moments we've shared and all the ones we'll create in the future. By gifting it to him, I want to express my gratitude for the time he's dedicated to our relationship and the excitement I feel about the moments we're yet to experience.\n\nNow, that fur coat, it's all about warmth, comfort, and protection. Just like my brother, who's always provided me with emotional warmth and a sense of security. He's been [[a constant shelter in the storms of life|metaphor — someone who always protects and guides you during hard times]], offering unwavering support and guidance. The fur coat is a way of saying, \"Hey, I want you to feel as comfortable and protected as you've made me feel all this time.\"",
          },
        ],
      },
    ],
  },
  {
    id: "water-sport",
    part: 2,
    title: "Describe a water sport you would like to try",
    emoji: "🏄",
    description: "A model long-turn answer about the dream of learning to surf.",
    cueCard: [
      "What the sport is",
      "Where you would do it",
      "Whether it is easy or difficult",
      "Why you want to try it",
    ],
    questions: [
      {
        q: "Describe a water sport you would like to try.",
        answers: [
          {
            label: "Model Answer",
            text: "It's one of the rarest topics that I might think of, but I've got curious about water sports quite recently. And now I'm going to talk about a water sport I've [[got my eye on|idiom — having a strong interest or desire for something]], which is surfing! Surfing is all about riding awesome waves on a surfboard, and it's something I've been [[dying to try|eagerly wanting to experience]] in the future.\n\nFirst off, where would I do it? Well, I'd love to head to some famous surf spots like Hawaii, South Africa, and Australia. These places are like [[heaven for surfers|ideal locations with great waves for surfers]], with incredible waves that are perfect for catching a ride.\n\nNow, is surfing easy or difficult? Honestly, it's [[no walk in the park|idiom — not easy at all]]. I've watched tons of YouTube videos of pros, and they make it look effortless, but trust me, it's not. You need serious physical strength, balance, and a deep understanding of how the ocean works. That's part of what makes it so fascinating — the challenge and the thrill of it all.\n\nSpeaking of YouTube, I've got a couple of favorite surfers I follow. One of them is Kelly Slater, [[an absolute legend|a highly respected and skilled person]] in the surfing world. The way he rides those waves is like [[poetry in motion|graceful and beautiful movement]]. Then there's Stephanie Gilmore, who's a rock star in women's surfing. Watching them [[pull off those incredible moves|successfully execute impressive actions]] and ride massive waves just [[fires up my enthusiasm|ignites my excitement and eagerness]] to try it myself.",
          },
        ],
      },
    ],
  },
  {
    id: "public-speech",
    part: 2,
    title: "Describe a speech you gave",
    emoji: "🎙️",
    description: "A model long-turn answer about an unconventional birthday speech for a friend.",
    cueCard: [
      "When and where you gave it",
      "What the speech was about",
      "How you felt about giving it",
      "How people reacted",
    ],
    questions: [
      {
        q: "Describe a speech you gave.",
        answers: [
          {
            label: "Model Answer",
            text: "To be honest, I'm [[not really cut out for|not naturally suited or skilled for a particular task or role]] making public speeches, but let me tell you about this speech I gave at my friend's birthday party, which was a bit different from your usual birthday wishes. We celebrated it on August 2nd with a small group of close friends and family.\n\nSo, instead of the usual \"may all your dreams come true\" and such, I decided to take a more [[unconventional|different from what is usual or expected]] approach. I started by [[recounting|recalling and telling in detail]] some of the funny mistakes and [[mishaps|small unlucky accidents or unfortunate incidents]] my friend had gotten himself into over the years. You know, those hilarious moments that we all have but don't always talk about. It was a great way to [[reminisce about|fondly remember and talk about the past]] the good times we've had and the lessons learned from those [[blunders|careless or embarrassing mistakes]].\n\nI didn't stop there, though. I also decided to bring up some of the common [[pitfalls|common mistakes or hidden problems people tend to fall into]] we all fall into, like making [[impulse purchases|unplanned, spontaneous buying decisions made without much thought]]. In our group, there's [[a running joke|a recurring humorous comment or situation a group keeps referring to]] about not buying a [[ridiculously expensive|extremely overpriced or costly]] car, and I couldn't resist [[poking fun at|making lighthearted, playful jokes about]] that too. But my intention was to make the point that it's okay to make mistakes as long as you learn from them.\n\nTo be honest, I had [[mixed feelings|both positive and negative emotions at the same time]] about the speech. I was a little nervous at first, not knowing how my friend and the guests would react to this different approach. But as I started sharing those funny stories and saw the smiles and laughter [[spreading through the room|becoming noticeable among everyone present]], I felt [[a huge sense of relief|a strong feeling that worry has disappeared]]. My friend and everyone else really got into it, and by the end of the speech, the atmosphere was all [[positive vibes|informal — a good, cheerful atmosphere]]. It turned out to be a memorable and enjoyable moment, and I'm glad I could [[add a unique twist|introduce an original element that makes something different and special]] to the birthday celebration.",
          },
        ],
      },
    ],
  },
  {
    id: "crowded-place",
    part: 2,
    title: "Describe a crowded place you have visited",
    emoji: "🚇",
    description: "A model long-turn answer about a lunchtime crush at Pakhtakor subway station.",
    cueCard: [
      "Where the place is",
      "When you went there",
      "What it was like",
      "How you felt about it",
    ],
    questions: [
      {
        q: "Describe a crowded place you have visited.",
        answers: [
          {
            label: "Model Answer",
            text: "I really [[despise|strongly dislike; have a deep aversion to]] places that are [[fully packed with|completely filled with, having no room available]] people and always try to avoid them as much as I can. But now let me tell you about this crazy experience I had at the \"Pakhtakor\" subway station, [[right in the heart of|located at the central part of]] my city. So, I usually take the subway in the mornings and evenings, and I'm used to seeing quite a few people during those times. But one day, during my lunch break, I decided to head back home, and that's when things got interesting.\n\nNo kidding, I was totally [[taken aback|surprised or shocked by something unexpected]] by the sight that greeted me at this station. It was like [[a sudden influx of|a sudden and large increase in the number of]] people from all over the city. I couldn't believe my eyes. The place was absolutely packed, and it felt like every living soul in town had decided to hang out there right when I showed up.\n\nWhat added to the chaos was that there was a problem with one of the metro lines that day, causing a 10-minute delay. You'd think a 10-minute delay [[isn't a big deal|is not a significant or important issue]], right? Well, apparently, it is when you're dealing with a subway station during lunchtime.\n\nThere were people everywhere — on the platform, in the [[concourse|a large open area in a public building used for gathering or moving through]], basically just everywhere you looked. It was like [[a mad rush|a chaotic and hurried movement or activity]], and I'd estimate there were easily thousands of people around. The noise level was [[off the charts|idiom — exceedingly high or extreme]] — conversations, footsteps, and those ever-annoying announcements over the [[intercom|a system for voice announcements over loudspeakers]].\n\nI couldn't help but feel [[a mix of|a combination of different emotions]] surprise and a bit of discomfort. I mean, I'm used to the [[hustle and bustle|the busy and noisy activity of a crowded place]] during the rush hours, but this was [[a different ballgame|idiom — a completely different situation]]. I had to [[wade through the crowd|move through a densely packed group of people with effort]] like an adventurer through the Amazon jungle, making sure I didn't [[bump into|accidentally collide with]] anyone or lose my stuff.\n\nBut here's the thing: as overwhelming as it was, I couldn't help but find it strangely fascinating. It made me realize the importance of picking the right time for my subway trips, like not during the lunchtime rush. It also gave me a glimpse of how many folks rely on the subway in our city. It's like a [[lifeline|something vital that people depend on to live or function]], and I appreciate how efficient our public transportation system is.",
          },
        ],
      },
    ],
  },
  {
    id: "interesting-job",
    part: 2,
    title: "Describe a job you think is interesting",
    emoji: "📰",
    description: "A model long-turn answer about the demanding life of a news reporter.",
    cueCard: [
      "What the job is",
      "How you know about it",
      "What skills it requires",
      "Whether you would do it yourself",
    ],
    questions: [
      {
        q: "Describe a job you think is interesting.",
        answers: [
          {
            label: "Model Answer",
            text: "There are many jobs that seem really [[intriguing|very interesting; fascinating]] to me, ranging from truck drivers to software developers. But now I'm going to talk about the exciting and quite demanding job of a news reporter. It's a profession that really [[grabs my attention|captures my interest]] because it's like [[a whirlwind of challenges|many complex, fast-moving difficulties]]. I got introduced to this world through my [[keen interest in|strong fascination with]] current events and the media.\n\nNews reporters have this super cool job of keeping us all [[in the know|informed; up to date]] about what's happening in the world. They're like information superheroes. To [[nail this gig|informal — excel at this job]], you need to be [[a jack of all trades|idiom — someone skilled in many different areas]]: awesome communication skills, [[a knack for|a natural talent for]] analyzing situations [[on the fly|quickly, while things are happening]], the ability to work under [[immense pressure|very high stress]], and adaptability to every twist and turn the news can throw at you. Staying well-informed and [[thinking on your feet|idiom — reacting and deciding quickly without preparation]] are the [[secret ingredients|the key factors for achieving success]] for success.\n\nOne really mind-blowing thing about news reporters is their [[unwavering commitment|consistent, dedicated devotion that never weakens]] to getting us the news, even when Mother Nature [[throws a tantrum|behaves wildly and unpredictably]]. I'll never forget this one time when a reporter was standing in the middle of a heavy rainstorm, reporting live about a major storm [[wreaking havoc|causing extensive damage]]. It was like something out of an action movie. Despite getting [[drenched|soaking wet]] and battling the wind, that reporter stayed [[cool as a cucumber|idiom — completely calm under pressure]] and kept us all informed. It's a classic example of their dedication to keeping us [[in the loop|idiom — well-informed and updated]], no matter what.\n\nNow, here's the thing: as cool as this job may sound, I don't think I'm [[cut out for it|naturally suited for it]]. It's [[incredibly demanding|extremely challenging]], with [[tight deadlines|very short time limits]] and the need to face some pretty intense situations. While I totally respect and admire news reporters for what they do, I think my interests and skills are better suited for something else. But I'll forever be [[in awe of|filled with admiration and wonder for]] the folks who take on the challenge of being news reporters and keep us informed [[day in and day out|continuously, every single day]]. They're literally [[the unsung heroes|people whose efforts go unnoticed or unappreciated]] of the media world!",
          },
        ],
      },
    ],
  },

  /* ═══════════════════ PART 3 ═══════════════════ */
  {
    id: "friendship-social-media",
    part: 3,
    title: "Friendship & Social Media",
    emoji: "🤝",
    description: "Deeper discussion — how technology reshapes friendships and connection.",
    questions: [
      {
        q: "Do you still keep in touch with your friends from your childhood?",
        answers: [
          {
            label: "Version 1",
            text: "Yes, I do stay in touch, though not particularly frequently. We tend to exchange brief [[life updates|news about what is happening in your life]] every couple of months rather than maintaining constant contact. Part of the reason is geography: my childhood friends have [[scattered across|spread out over many different places]] different regions of Uzbekistan and beyond. I think [[drifting apart|idiom — slowly becoming less close to someone]] from childhood friends is something most people experience as they get older — it's a natural, if slightly [[bittersweet|happy and sad at the same time]], part of growing up.",
          },
          {
            label: "Version 2",
            text: "I do keep in touch with a few of them, though I'd say it's fairly [[infrequent|not happening often]] — occasional [[check-ins|short contacts to see how someone is doing]] every two or three months rather than regular contact. The main reason is geography — my childhood friends are now spread across different regions of Uzbekistan and beyond. [[Losing touch|idiom — no longer being in contact with someone]] with people from your earlier years is something most people experience as they get older, and while it can feel a little sad, I'd say it's perfectly normal.",
          },
        ],
      },
      {
        q: "What's the difference between having younger friends and older friends?",
        answers: [
          {
            label: "Version 1",
            text: "To me, the most [[striking|very noticeable]] difference lies in how you actually spend your time together. With younger friends, the tendency is to be [[out and about|idiom — going to different places; being active outside]] — going to concerts, trying out restaurants, or staying up late for [[spontaneous|done suddenly, without planning]] get-togethers. With older friends, the dynamic shifts noticeably. You're more likely to visit each other at home or enjoy a quiet picnic outdoors. The energy is calmer, but just as meaningful.",
          },
          {
            label: "Version 2",
            text: "From where I stand, the biggest difference is in the kind of activities you tend to share. Younger friendships are more [[outward-facing|focused on going out and being social]] — people go out together, explore new places, and keep things lively and spontaneous. Older friendships tend to be more [[settled|calm and stable]] and home-based. People are more inclined to visit each other's homes rather than going out frequently. Both [[have their own charm|are attractive in their own way]], but the vibe is quite different.",
          },
        ],
      },
      {
        q: "Has technology changed people's friendships, and how?",
        answers: [
          {
            label: "Version 1",
            text: "I genuinely believe technology has [[profoundly reshaped|changed deeply and completely]] the way we maintain friendships. The most significant change has been in communication — mobile phones and social media have made it possible to stay connected with people [[regardless of|without being affected by]] distance or lifestyle differences. A friend living abroad is still [[just a message away|very easy to contact]]. Technology has been a powerful force in keeping relationships alive that might otherwise have [[faded|slowly disappeared or weakened]].",
          },
          {
            label: "Version 2",
            text: "Technology has [[undeniably|impossible to deny; clearly]] transformed friendships in fundamental ways. The most obvious impact is on communication — messaging apps and social media have [[broken down the barriers|removed the obstacles]] of distance, allowing people to share life updates and stay [[emotionally connected|feeling close in your feelings]] with loved ones far away. What might have been a fading friendship decades ago can now be maintained [[with relative ease|fairly easily]].",
          },
        ],
      },
      {
        q: "What do you think of communicating via social media?",
        answers: [
          {
            label: "Version 1",
            text: "While I fully acknowledge the benefits of social media as a communication tool, I think it's equally important to recognise its [[drawbacks|disadvantages]]. The most significant concern is the way it can [[foster|to encourage the growth of something]] unhealthy or [[superficial|only on the surface; without depth]] relationships. When people are in constant digital contact but rarely meet in person, the relationship lacks genuine depth. Real relationships need to be [[cemented|made strong and permanent]] through shared experiences and face-to-face interaction.",
          },
          {
            label: "Version 2",
            text: "I think communicating via social media is a [[double-edged sword|idiom — something with both advantages and disadvantages]]. On one hand, it offers undeniable convenience and keeps people connected across distances. On the other hand, it can [[give rise to|to cause or create]] relationships that look active on the surface but lack genuine depth. I believe physical presence and real shared experiences are what truly [[solidify a bond|make a relationship strong and lasting]] between people.",
          },
        ],
      },
      {
        q: "Will online social media replace face-to-face communication?",
        answers: [
          {
            label: "Version 1",
            text: "I don't think it ever will, not entirely. Face-to-face communication has an [[irreplaceable|too special to be replaced by anything else]] quality that digital interaction simply can't match. What sets in-person conversation apart is the [[personal touch|the warm, human element in communication]] — the ability to read someone's facial expressions, look them in the eye, and genuinely feel their emotions [[in real time|immediately, as things happen]]. That kind of connection is deeply human, and I believe it will always hold its place at the centre of meaningful relationships.",
          },
          {
            label: "Version 2",
            text: "No — and I say that [[with some conviction|with strong belief and confidence]]. While the shift toward online communication is real and ongoing, I believe face-to-face interaction will always [[retain its dominance|keep its leading position]] when it comes to meaningful connection. There's something about physical presence that no screen can [[replicate|to copy exactly]] — the warmth of eye contact, the ability to [[pick up on|to notice something that is not obvious]] subtle emotions, the sense of truly being with someone.",
          },
        ],
      },
      {
        q: "Is it necessary for kids to have close friends?",
        answers: [
          {
            label: "Version 1",
            text: "I think the answer depends quite a lot on the age of the child. For teenagers — say, 16 or 17 — close friendships are genuinely important. There are conversations and emotions that young people feel they simply can't bring to their parents, and having a [[trusted friend|a friend you can rely on completely]] [[fills that gap|provides what is missing]]. For younger children — around 8 to 10 — the bond with parents and family is usually the primary and most [[nurturing|giving care and support that helps growth]] relationship, and close peer friendships are less essential at that stage.",
          },
          {
            label: "Version 2",
            text: "It depends on the age group, I think. Teenagers absolutely benefit from having close friends — there are aspects of their [[inner lives|private thoughts and feelings]] they're unlikely to [[open up about|to talk honestly about personal things]] with their parents. [[Peer friendships|friendships with people of the same age]] serve a unique role at that stage of development. For younger children, however, strong family bonds are far more [[foundational|forming the necessary base for everything else]], and parents are better placed to offer guidance and emotional support.",
          },
        ],
      },
    ],
  },
  {
    id: "art-galleries",
    part: 3,
    title: "Art & Galleries",
    emoji: "🖼️",
    description:
      "Why people still visit galleries, whether museums should be free, and how art inspires.",
    questions: [
      {
        q: "Why do some people visit galleries instead of viewing art online?",
        answers: [
          {
            label: "Version 1",
            text: "While the shift toward doing everything online is [[undeniable|impossible to deny or argue against]], I don't think it can truly replace the experience of visiting a gallery in person. There's something [[irreplaceable|cannot be replaced by anything else]] about standing in front of a work of art — you can observe it from different angles and feel a [[genuine connection|genuine means real and sincere]] to it.",
          },
          {
            label: "Version 2",
            text: "As convenient as online viewing is, I believe the [[in-person experience|contrasts with online or virtual — being physically there]] is something entirely different and far more valuable. Art is meant to be experienced [[with all your senses|expressive phrase — seeing, hearing and feeling at the same time]]. There's also the social aspect — discussing artworks with fellow visitors creates a [[richer, more engaging experience|richer means deeper and fuller]].",
          },
        ],
      },
      {
        q: "Should art galleries and museums be free of charge?",
        answers: [
          {
            label: "Version 1",
            text: "No, I don't think they should be [[entirely free|entirely adds emphasis — completely free]]. Museums and galleries have [[significant running costs|running costs means ongoing expenses]] — staff salaries, building maintenance, conservation of artworks — and those expenses have to be [[covered somehow|the costs must be paid in some way]].",
          },
          {
            label: "Version 2",
            text: "Not necessarily, no. While the idea of [[free cultural access|free entry to arts and heritage]] is appealing, it's not very realistic. These institutions face considerable monthly expenses — from maintenance to staff wages — and [[charging for admission|standard expression for asking entrance fees]] is one of the primary ways they [[sustain themselves financially|sustain means to keep going; survive money-wise]].",
          },
        ],
      },
      {
        q: "How do artworks inspire people?",
        answers: [
          {
            label: "Version 1",
            text: "I won't claim to be an [[art expert|someone with specialised knowledge of art]], but I do have a perspective. Art is essentially a reflection of how artists perceive and feel about the world — it's [[emotion given form|poetic expression — feelings turned into something you can see]]. When a viewer encounters a piece that [[resonates with|connects deeply with]] their own inner experiences, it can be deeply inspiring.",
          },
          {
            label: "Version 2",
            text: "Art, as I understand it, is the product of an artist's [[emotional response|a reaction based on feelings]] to the world. When someone encounters a work that [[speaks to something they've felt|expressive phrase for emotional connection]], it creates a powerful connection that can be truly inspiring. That inspiration isn't limited to positive feelings either — art can evoke darker impulses too. That's what makes it such a powerful [[emotional intermediary|intermediary means a go-between — art carries feelings between people]].",
          },
        ],
      },
    ],
  },
  {
    id: "children-drawing",
    part: 3,
    title: "Children & Drawing",
    emoji: "🖍️",
    description: "The right age to learn drawing and why adults stop doing it.",
    questions: [
      {
        q: "What is the right age for a child to learn to draw?",
        answers: [
          {
            label: "Version 1",
            text: "Personally, I think drawing [[tends to be overrated|overrated means given more value than deserved]] as a skill — I don't believe children should be pressured into learning it. That said, if we're talking about the ideal age to introduce it, I'd say [[the earlier the better|fixed expression — great for giving recommendations]]. Children [[begin developing cognitively|cognitively relates to mental development]] around the age of two or three.",
          },
          {
            label: "Version 2",
            text: "My view is that drawing is sometimes given more importance than it deserves, and children certainly shouldn't be [[forced into it|made to do something against their will]]. In terms of the right age to start, I'd say as early as possible. The brain [[develops rapidly in the early years|useful phrase for child development topics]], and that's a great time to introduce drawing in a [[playful, pressure-free way|pressure-free means without stress]].",
          },
        ],
      },
      {
        q: "Why do children draw more often than adults?",
        answers: [
          {
            label: "Version 1",
            text: "The answer is fairly [[straightforward|simple and easy to understand]] — adults simply don't have the same amount of free time that children do. Between work, study, and family [[obligations|duties and responsibilities]], there's very little room for drawing. On top of that, many adults tend to view drawing as something [[childish or unproductive|suitable only for children, or not achieving useful results]].",
          },
          {
            label: "Version 2",
            text: "It [[comes down to|phrasal expression — the main reason is]] time and priorities. Children have the [[luxury of free time|luxury suggests free time is something valuable]] and few responsibilities. Adults, however, are consumed by work, family, and other commitments. There's also a [[social perception|how society views something]] element — drawing is often seen as a childish pursuit.",
          },
        ],
      },
    ],
  },
  {
    id: "ages-happiness",
    part: 3,
    title: "Ages & Happiness",
    emoji: "🌅",
    description: "Memory, the happiest age and how it feels to be where you are now.",
    questions: [
      {
        q: "How do people remember each stage of their lives?",
        answers: [
          {
            label: "Version 1",
            text: "People [[hold onto memories|phrasal verb — keep memories; natural and expressive]] in a variety of ways — through photographs, familiar scents, or objects that carry [[sentimental value|emotional importance]]. What I find fascinating is how something as simple as a single photo can [[instantly transport you back|vivid expression for how memories work]] to a specific moment and bring up a whole range of emotions.",
          },
          {
            label: "Version 2",
            text: "There are many ways people [[preserve memories|preserve means to keep something safe]] — photos, smells, meaningful objects, and so on. It's quite remarkable how a single photograph can pull you right back to a moment you'd almost forgotten and [[stir up emotions|stir up means to cause feelings to arise]] you weren't expecting.",
          },
        ],
      },
      {
        q: "At what age do you think people are the happiest?",
        answers: [
          {
            label: "Version 1",
            text: "In my view, happiness isn't really [[tied to a specific age|tied to means connected to]] — it's far more personal than that. I've heard people of all ages claim they're living the best years of their life. So my honest take is that it [[entirely depends on the individual|strong conclusion phrase for speaking]].",
          },
          {
            label: "Version 2",
            text: "I don't think happiness is something that [[peaks at a particular age|peaks means reaches the highest point]]. You hear people from completely different stages of life saying the same thing. Ultimately, I believe [[happiness is a personal experience|clear, confident opinion statement]], not an age-based one.",
          },
        ],
      },
      {
        q: "Do you enjoy being the age you are now?",
        answers: [
          {
            label: "Version 1",
            text: "To be completely honest, I feel like I'm going through one of the more [[challenging periods|more mature than 'hard times']] of my life. I find myself having what I can only describe as [[existential crises|questioning the meaning and purpose of life]] — questioning my identity, my direction, and what really matters. Those kinds of questions can really [[weigh on you|idiom meaning to worry or burden someone mentally]].",
          },
          {
            label: "Version 2",
            text: "I'll be honest — this isn't the easiest time in my life. I often find myself caught up in [[existential thinking|thinking deeply about meaning and purpose]], asking questions like who am I and where am I headed. It can be quite [[overwhelming|so strong that it is difficult to deal with]] at times, but I suppose it's a [[natural part of this stage of life|excellent expression for speaking about growing up]].",
          },
        ],
      },
    ],
  },
  /* ═══════════ PART 3 — Topic sets (single model answers) ═══════════ */
  {
    id: "waiting",
    part: 3,
    title: "Waiting",
    emoji: "⏳",
    description: "Everyday waiting, whether children are more patient, and why we dislike it.",
    questions: [
      {
        q: "What are the daily experiences that people have to wait for?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, it's a [[universal experience|something everyone goes through]] to find yourself waiting for something. The most common one, I believe, is traffic jams, especially in big cities. When you're [[commuting during peak hours|travelling to and from work at the busiest times]], that's when people [[play the waiting game|wait patiently with no choice]]. Another one is in restaurants or cafés, where your patience is tested. There's a usual eating spot of mine, and every day I wait in a long line to pay for the meal I got.",
          },
        ],
      },
      {
        q: "Do you think children have more patience than adults?",
        answers: [
          {
            label: "Model Answer",
            text: "I believe it heavily [[boils down to|comes down to; depends mainly on]] the situation, and the reality is [[not that black and white|not simple; has many shades in between]]. Sometimes, for a toddler, five minutes can feel like [[an eternity|a very long time]]. But kids can surprise you with their capacity for patience, especially if they're engaged in something they love or are looking forward to a reward. Adults, on the other hand, have had more time to practise patience — life throws all sorts of waiting games at us, and we learn to deal with them. But does that make us more patient? Not always, because we're [[juggling a million things|managing many responsibilities at once]] and time feels precious.",
          },
        ],
      },
      {
        q: "Why do people dislike waiting?",
        answers: [
          {
            label: "Model Answer",
            text: "The first reason is that there's a [[sense of lost time|the feeling that time is being wasted]]. You understand that time's precious, and when you're waiting, you feel like you could be doing a million other productive things instead. But you're stuck, and it makes you feel bad. Then there's also the element of [[uncertainty|not knowing what will happen]], especially if you don't know how long the wait will be. It's the not knowing that [[can eat at you|slowly makes you anxious or frustrated]] — five minutes? Thirty minutes? An hour? That uncertainty can be harder to deal with than the wait itself.",
          },
        ],
      },
    ],
  },
  {
    id: "customer-service",
    part: 3,
    title: "Service",
    emoji: "🛎️",
    description: "How people react to bad service, what customers expect, and whether robots can do better.",
    questions: [
      {
        q: "How do people respond to bad service?",
        answers: [
          {
            label: "Model Answer",
            text: "Most people don't hesitate to let a manager or employee know [[right off the bat|instantly; without delay]] when the service [[isn't up to snuff|fails to meet expected standards]], which is a totally classic move. They want to address the problem [[head-on|directly and boldly]], hoping for a quick resolution or at least acknowledgement. Then there are the so-called [[silent sufferers|people who endure dissatisfaction without complaining, voicing it later]]. They might feel dissatisfaction, but they don't want to say anything — most of the time they express that disappointment later through online reviews or by simply choosing not to return.",
          },
        ],
      },
      {
        q: "As a customer, what kinds of services do you expect from a company?",
        answers: [
          {
            label: "Model Answer",
            text: "As a customer, it heavily [[boils down to|comes down to; depends mainly on]] a few key elements, like quality. Whether it's a product or a service, people want to get something worth what they're paying for. Then there's reliability — clients want to trust the company. They want it to [[deliver on its promises|keep its commitments]] at the right time for the right cost. And as a small business owner, I realised that being transparent about your product or service is a big one too. You should be honest about what you're selling, what it costs, and the terms of the deal — no hidden fees, no [[fine print tricks|deceptive details buried in the small print]]. People respect honesty, and it also [[fosters trust|encourages trust to grow]] between a client and a company.",
          },
        ],
      },
      {
        q: "What is bad service?",
        answers: [
          {
            label: "Model Answer",
            text: "For me, the first [[deal-breaker|a critical issue that ruins everything]] is when the staff have a poor attitude. If they seem [[indifferent|apathetic; not caring at all]], rude, or outright hostile, you feel it right away. This is how most customers will [[be put off|feel repelled or discouraged]] by the staff. Long waits or delays are also huge. I really [[despise|strongly dislike]] services that leave me waiting too long, or when I'm just left on hold — they're being disrespectful to my precious time.",
          },
        ],
      },
      {
        q: "Do you think robots can sometimes provide better customer service than people?",
        answers: [
          {
            label: "Model Answer",
            text: "Sure, in some scenarios they can offer better customer service. They're efficient and consistent — a robot doesn't get tired or have a bad day, mood, or [[whatnot|and so on; et cetera]]. They're also great for 24/7 service — no need for sleep, no coffee breaks. Got a question at 3 a.m.? No problem, you can just ask it. For straightforward, informational things, like checking your bank balance or finding out when your package is arriving, robots are on point. But there are also times when the human touch [[comes into play|becomes relevant]]. When things get tricky, or there's a tough situation with [[a fussy customer|a demanding or difficult customer]], that's when humans are [[on the front|taking the lead; handling it directly]], because a robot can't genuinely [[empathise|understand and share someone's feelings]] with you, or [[reassure|offer comfort or confidence]] you with a tone of voice, a smile, or that human connection.",
          },
        ],
      },
    ],
  },
  {
    id: "athletes-sports",
    part: 3,
    title: "Athletes & Sports",
    emoji: "🏅",
    description: "The qualities of an athlete, popular sports, benefits for children and spotting talent.",
    questions: [
      {
        q: "What characteristics do you think an athlete should have?",
        answers: [
          {
            label: "Model Answer",
            text: "I think being a professional athlete is all about the [[whole package|the complete set of qualities]] of physical, mental, and emotional strength. Obviously, you need physical fitness — whatever your sport demands, you should just have it. Another one is [[mental toughness|the ability to stay strong under pressure]]. The mind has to be as fit as the body: you should stay focused when the crowd's screaming and keep your composure when there's tremendous pressure on. The next one is discipline. It's about doing what needs to be done, even when you don't want to. [[Rain or shine|no matter the circumstances]], win or lose, you're training, practising, pushing.",
          },
        ],
      },
      {
        q: "What kind of sports are popular in your country?",
        answers: [
          {
            label: "Model Answer",
            text: "In Uzbekistan, people just [[go nuts for|are extremely enthusiastic about]] boxing and football. If you stop one person at random and ask their favourite sport, it's literally one of these two. Football is a [[cultural phenomenon|something hugely important within a culture]] — Sundays are sacred for football matches, like a weekly holiday during the season. Boxing is also [[primal|deeply exciting on an instinctive level]]. The big fights are spectacles, with a buzz that's electric. It's like [[everyone and their dog|absolutely everybody]] watches these big fights.",
          },
        ],
      },
      {
        q: "What are the benefits of sports for children?",
        answers: [
          {
            label: "Model Answer",
            text: "Engaging in sports from childhood obviously makes a kid physically fit. It builds their strength, coordination, and overall health, and such early exposure [[lays the foundations|creates the base]] for a lifetime of fitness. Plus, there's the [[mental resilience|the ability to recover from setbacks]]. Sports can be tough — you lose, you mess up, and it stings. But then you learn, you get back out there, and you try again. Building that mental toughness is what's going to help them through life, way beyond the field or the court.",
          },
        ],
      },
      {
        q: "Is it easy to identify children's talents?",
        answers: [
          {
            label: "Model Answer",
            text: "It's really [[a hit or miss|unpredictable; sometimes it works, sometimes not]] to identify gifted children. Sometimes it's right there on the surface, shining at you, but other times it's more hidden, and you've got to do some [[sifting|careful searching to find what matters]]. Some kids [[show their cards early|reveal their abilities from a young age]] — when a child has a natural inclination, a pull towards something, it can be pretty obvious. But talent isn't always a [[lightning bolt|a sudden, obvious flash]]; sometimes it's a [[slow burn|something that develops gradually over time]] that builds with practice and patience. Some children need exposure to different activities, encouragement to try new things, and the space to mess up and learn from it.",
          },
        ],
      },
    ],
  },
  {
    id: "computers",
    part: 3,
    title: "Computers",
    emoji: "💻",
    description: "What we use computers for, students and screens, gaming addiction and new products.",
    questions: [
      {
        q: "What do people use computers for?",
        answers: [
          {
            label: "Model Answer",
            text: "Honestly, it's better to ask what we don't use computers for these days, right? People are literally doing everything with computers today — education, research, assignments, remote work, and even online shopping and entertainment. So I'd say there's no particularly [[dominant|most common; standing out above the rest]] thing that people do with them nowadays. Computers are like a [[Swiss army knife|a tool useful for a huge range of purposes]] for modern life, so to speak.",
          },
        ],
      },
      {
        q: "Should students be allowed to use computers at school?",
        answers: [
          {
            label: "Model Answer",
            text: "Yeah, students should absolutely be using computers at school, as long as we teach them not just to use the technology, but to use it wisely. They shouldn't be [[scrolling through TikToks|mindlessly browsing short videos]] when they should be [[hitting the textbooks|studying hard]], you know? We need to make sure they're visiting the right websites and the right programs. But if we're not showing them how to [[navigate this digital world|find their way through online life safely]], we're [[setting them up to|putting them in a position to]] get lost in it.",
          },
        ],
      },
      {
        q: "What do you think of people who are addicted to playing computer games?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, I think they're [[caught in a tough spot|stuck in a difficult situation]]. Games are amazing, but they're like a spice: great in the right amount, but too much can overpower everything else. You start [[missing out on|failing to experience or enjoy]] other stuff — hanging out in the real world, building relationships face-to-face, getting fresh air, living life away from the screen. It's about finding the [[sweet spot|the ideal balance]] where you enjoy the virtual worlds while [[keeping your feet on the ground|staying connected to real life]] in the real one. And if someone's lost that balance, they need a hand to help them back up, not judgment for falling down.",
          },
        ],
      },
      {
        q: "Should parents limit the amount of time that children spend using computers?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, parents should definitely [[have a say over|have some control or influence on]] how much time their children spend on these technologies. It's not just setting a timer and saying, that's it. It's about engaging with what they're doing online — what games are they playing? What videos are they watching? Who are they talking to? Parents should also be involved so they can guide them through the [[digital jungle|the confusing and risky online world]].",
          },
        ],
      },
      {
        q: "Why do people often have problems using new products?",
        answers: [
          {
            label: "Model Answer",
            text: "Oh, the experience of trying to use something new for the first time is wild. We get used to doing things a certain way, and when something comes along, it totally [[flips the script|completely changes the usual situation]]. Naturally, there's this thing called [[change aversion|the tendency to resist new or unfamiliar things]] — we're naturally skeptical of new things because they feel unfamiliar, and our first instinct is to resist. We just don't want negative first impressions. Imagine coming to a new restaurant for the first time: you don't want to taste something new because the whole experience might turn out to be negative, so you just [[stick to your usual|keep to what you already know and trust]] hamburgers.",
          },
        ],
      },
    ],
  },
  {
    id: "advice",
    part: 3,
    title: "Advice",
    emoji: "🧭",
    description: "Whether parents should advise children, when advice is accepted, and who should give it.",
    questions: [
      {
        q: "Do you think parents should give advice to their children?",
        answers: [
          {
            label: "Model Answer",
            text: "For sure — it's a big part of being a parent. When you have these little humans looking up to you, and you've lived longer and gained the experience, that's why you should definitely [[share the nuggets of your wisdom|offer your valuable insights]]. It's our job to [[hand that knowledge down|pass wisdom on to the next generation]] so they become good people when they grow up. But it's better to encourage them to think for themselves, to become their own person. So most of the time, the best advice is helping them take sensible decisions on their own. The advice shouldn't just be do this or that — it should be about teaching them how to be better decision-makers on their own.",
          },
        ],
      },
      {
        q: "What are the areas in which people are more (or less) willing to accept advice?",
        answers: [
          {
            label: "Model Answer",
            text: "When it comes to taking advice, people get pretty complex. Sometimes they ask for your advice, but when you give it, they don't really follow it, which [[drives me crazy|frustrates or annoys me]] sometimes. But I guess it's all about the [[personal stakes involved|how much someone is personally invested]], and they might [[put up walls against|resist; refuse to accept]] some advice, especially [[unsolicited|given without being asked for]] advice. Advice about romantic relationships doesn't really help, because the topic is so close to the heart — people should figure that out [[on their own terms|according to their own preferences]]. But people do like it when they get advice about their personal development. Such advice gives this [[dopamine hike|a surge of pleasure or motivation]] and [[gives them fuel|provides energy and drive]], like they're ready to take on everything.",
          },
        ],
      },
      {
        q: "Do you prefer advice from your family or your friends?",
        answers: [
          {
            label: "Model Answer",
            text: "It [[boils down to|comes down to; is ultimately about]] the situation you're asking advice for. Your family have known you your whole life. They've seen your [[ups and downs|highs and lows]] and might offer wisdom that comes from years of watching you grow up. But the thing about family advice is that sometimes they're too close to the situation, so they might struggle to be objective because they're so invested in your life. On the [[flip side|the opposite point of view]], your friends might offer the best advice too, since they know the current you. They're the ones you're [[in the trenches with|going through daily struggles alongside]] every day. Plus, friends can sometimes be more honest because they're less afraid of hurting you — they can [[give it to you straight|tell you the truth directly]].",
          },
        ],
      },
      {
        q: "Why do so many young people not accept the advice of older people?",
        answers: [
          {
            label: "Model Answer",
            text: "It's mainly because they live in different worlds sometimes, and the advice can feel [[outdated|no longer current or relevant]]. It doesn't [[match up with|align with; fit]] what's happening in the world today. The pace of change is so fast that what worked twenty years ago might not work now. Plus, there can be a [[communication gap|a lack of mutual understanding]] too. The advice might be [[solid|good and reliable]], but if it's not delivered in a way that resonates, it's going to [[fall flat|fail to have the intended effect]]. But it's not that young people never want advice — they do, they just want to feel understood.",
          },
        ],
      },
      {
        q: "In general, what kind of person is most suitable for giving advice to others?",
        answers: [
          {
            label: "Model Answer",
            text: "A suitable advice-giver is someone who doesn't let their [[ego|sense of self-importance or pride]] get in the way. Their advice should be [[unbiased|free from personal prejudice]] — like they're genuinely there to help. Experience is key as well; you want someone who's been through some stuff, who's been [[through thick and thin|through both good and bad times]] and learned from it all. And they should be great listeners — that's the aspect most people ignore when offering advice. Giving good advice isn't just about talking; it's about listening, really hearing what the other person is dealing with. It's about understanding [[the question behind the question|the deeper issue beneath what is actually asked]].",
          },
        ],
      },
      {
        q: "Do you think it's ok if professional advice costs a lot?",
        answers: [
          {
            label: "Model Answer",
            text: "It's a hot topic. When you pay for a lawyer, a doctor, a business consultant, or a top-notch mechanic, you're not just paying for the time it takes them to solve your problem — you're paying for the years they spent becoming a problem-solver, for the expertise they gained. But this professional advice should be fair. You can't just charge crazy high prices simply because you can. There has to be a balance: the cost should [[mirror|reflect; correspond to]] the value provided, and it should be accessible enough that people can actually get the help they need.",
          },
        ],
      },
    ],
  },
  {
    id: "family-business-success",
    part: 3,
    title: "Family Business & Success",
    emoji: "🏪",
    description: "Family businesses, working with relatives, and what it takes to become successful.",
    questions: [
      {
        q: "What kinds of family businesses are common in your country?",
        answers: [
          {
            label: "Model Answer",
            text: "It's become a common thing to open a family business in Uzbekistan. Especially with the economy [[flourishing by leaps and bounds|growing very rapidly]], every family has some sort of business now, whether as a [[side hustle|a small job done alongside your main work]] or extra income. Every neighbourhood has these [[mom-and-pop shops|small family-run stores]] where they sell everything you might want. These are the places where you walk in and they know your name, your dog's name, and how you like your coffee. They're special because they're personal and you feel the connection — plus the seller is your neighbour, so you can take what you want and pay later. And family-owned restaurants are [[mushrooming|appearing and spreading rapidly]] too, where recipes are like treasured family secrets, handed down from grandma, to mum, to the kid who's now running the whole show.",
          },
        ],
      },
      {
        q: "Is it good to work with family members?",
        answers: [
          {
            label: "Model Answer",
            text: "Oh, it's definitely tough. People who work with their families are [[dancing on a wire|doing something risky that requires great balance]], and I respect them. On one hand, there's nothing better than building something with your loved ones — there's a trust you can't easily find with anyone else. You've [[got each other's back|support and protect one another]] when [[push comes to shove|the situation becomes critical]]. But here's the catch: things get intense, especially when times are tough, and it's difficult to separate work from your personal life. You have a disagreement with a family member at the office, and before you know it that person is sitting at the same dinner table with you, so your [[boundaries get blurry|the lines between roles become unclear]]. And you can't easily fire your brother or aunt when things don't work out — it puts you in a super-awkward position. But I know a lot of people who do a great job working with family, and I must say, [[kudos to them|credit and respect to them]].",
          },
        ],
      },
      {
        q: "What does it take to become successful?",
        answers: [
          {
            label: "Model Answer",
            text: "I believe there isn't just one magic ingredient that makes the dish delicious, so to speak, and that's especially the case with success. There are definitely a bunch of factors that [[play a part|contribute; are involved]] when chasing success, but I'd say passion and dedication come first. You've got to love what you're doing and put in the work — the hours, [[the grind|the hard, repetitive effort]]. And you can't talk about success without considering failure; it's about how you handle the punches, the [[setbacks|obstacles that slow your progress]]. I've talked to a lot of successful business owners in Uzbekistan, and the thing I noticed is a bit of fearlessness, a [[willingness to take risks|being ready to gamble on uncertain outcomes]] — you take chances and make bets on yourself. A pinch of all these factors helps you achieve success.",
          },
        ],
      },
      {
        q: "Why is it that some people achieve success faster?",
        answers: [
          {
            label: "Model Answer",
            text: "This whole thing is wild. When you're trying to be successful, the irony is that there's always someone who hit that success button way earlier than you, and that's because of some advantages that shouldn't be [[overlooked|missed or ignored]]. The first is that they got the timing right — sometimes through luck. Some people have a [[knack for|a natural talent for]] spotting trends and gaps, seeing the future way earlier than one might dare to imagine. Then there are the opportunities they have. Sometimes people are given opportunities that others aren't — an education, an internship, a mentor who takes a chance on them, all of which provide a [[shortcut to success|a faster route to achievement]]. So those two are the main reasons some people achieve it earlier.",
          },
        ],
      },
      {
        q: "What do people need to sacrifice for success?",
        answers: [
          {
            label: "Model Answer",
            text: "There's always a price you pay to reach a certain level of greatness — success isn't free. Oftentimes it's time. You must be willing to sacrifice countless hours grinding on your journey while the rest of the world is sleeping, partying, or chilling out. It's also about what you do with your time: you must cut out this [[instant gratification|the desire for immediate reward]] and gravitate towards [[delayed gratification|giving up a reward now for a bigger one later]], a long-term gain. You might skip that party to work on your business, or reschedule your day. Plus, this whole success thing [[takes its toll on|causes damage or strain to]] your relationships too — they take a hit. You're chasing this dream, and not everyone's going to understand or support it. You might miss out on time with family, friends, or a significant other. It's almost impossible to [[strike that balance|find the right equilibrium]].",
          },
        ],
      },
    ],
  },
  {
    id: "history-buildings",
    part: 3,
    title: "History & Buildings",
    emoji: "🏛️",
    description: "Tall buildings, why we visit historical places, protecting them, and old architecture.",
    questions: [
      {
        q: "Why are there so many tall buildings in cities?",
        answers: [
          {
            label: "Model Answer",
            text: "I guess it's all because of efficiency. Instead of a structure spreading out over miles, you just go up. You can have hundreds of people working or living in the [[footprint|the ground area a building occupies]] of a single building. And it's not just about the space; it's about the economics too. The more you can do in one spot, the more value you get out of that [[prime real estate|the most desirable and expensive land]].",
          },
        ],
      },
      {
        q: "Why do people like to visit historical places?",
        answers: [
          {
            label: "Model Answer",
            text: "People love visiting historical places because it's literally like time travel. You're [[walking in the footsteps of|following the path once taken by]] those who came before you — it's like a portal that gives you a sense of amazement, a connection to our ancestors. When you stand where history happened, you feel part of the story of humanity. It's [[humbling|making you feel modest, aware of something greater]] and inspiring; you think about the lives of those who stood there before you, their struggles, their triumphs. It's a [[shared human heritage|the common history and culture belonging to us all]]. And there's a wonder to it — the [[awe of craftsmanship|deep admiration for skilled work]] and the legacy that's lasted centuries or even millennia. It [[blows your mind|amazes you completely]] how they built these places with the tools they had.",
          },
        ],
      },
      {
        q: "What can we do to stop visitors from damaging historical places?",
        answers: [
          {
            label: "Model Answer",
            text: "The first key is education. You should let people know the significance of these places and what they represent. Make them understand that this isn't just old stuff — it's our [[collective heritage|the shared inheritance of a whole community]]. When people get that, they're more likely to respect it. You should also do all the checking and monitoring. When some authorities say a [[large influx of tourists|a big flow of visitors arriving]] destroyed this or that building, it often turns out to be not the tourists but the building itself — it's old and might get lost against the [[stand of time|the test of time; ageing over the years]]. That's why the government should do regular check-ups of such buildings.",
          },
        ],
      },
      {
        q: "What is interesting about old buildings?",
        answers: [
          {
            label: "Model Answer",
            text: "I believe it's not just one thing that speaks to you about old buildings. They're a [[link to the past|a connection to earlier times]]; they connect us with previous generations. It's a way to touch history, to feel part of the longer human story. You look at old buildings and think about the lives of people who were there before you — it's really something. Then you've got the survival aspect, which is wild. These buildings have [[stood through|endured; survived]] wars, weather, and the [[rise and fall of empires|the growth and collapse of great powers]]. They've seen things change around them, and yet here they are, still standing, which is fascinating.",
          },
        ],
      },
      {
        q: "Is having too many tourists a positive thing for historical attractions?",
        answers: [
          {
            label: "Model Answer",
            text: "It's a [[double-edged sword|something with both good and bad consequences]]. On the bright side, tourism brings in the cash, and that cash is crucial for preservation — it pays for the upkeep, the staff, the conservation work. Plus it boosts the local economy: shops, restaurants, and hotels all get a [[piece of the pie|a share of the benefits]]. But on the flip side, too many tourists can [[put a real strain on|place heavy pressure on]] these sites. We're talking [[wear and tear|damage caused by ordinary use over time]], potential damage, not to mention the impact on the local community — traffic jams, crowded streets. It can take away from the charm and the experience, not just for the visitors but for the folks who live there.",
          },
        ],
      },
    ],
  },
  {
    id: "ideas-opinions",
    part: 3,
    title: "Ideas & Opinions",
    emoji: "💡",
    description: "When children form opinions, whether they mirror parents, and where new ideas come from.",
    questions: [
      {
        q: "When do children begin to have their own ideas and opinions?",
        answers: [
          {
            label: "Model Answer",
            text: "I believe it's way earlier than most people think. Most people say kids don't have independent thinking until at least [[puberty age|the age when physical changes of adolescence begin]], but what I really see is that they start it way earlier. You'll see it when they choose their own clothing and decide what they want to eat for dinner. And they question things too — parents are constantly [[bombarded with|faced with a rapid stream of]] whys from their children. I believe that's when they [[build their own world|form their own unique perspectives]] by exploring things.",
          },
        ],
      },
      {
        q: "Do you think children will always have ideas and opinions similar to those of their parents?",
        answers: [
          {
            label: "Model Answer",
            text: "Not always. I think parents are just there to [[lay down the foundations|establish the basic groundwork]] in their children's thinking. Children pick up many things from parents — language, mannerisms, opinions, even preferences. But as children grow, they start getting all these different [[inputs|varied sources that shape understanding]]. They go to school, university, and meet [[people from all walks of life|individuals from all kinds of backgrounds]], and this is when other influences start [[seeping in|gradually entering and affecting them]] and shaping their thinking. They might go in a totally different direction from their parents. Plus, every generation has its own vibe and mindset — the stuff that was [[a big deal|very significant]] for one generation might not be for the next.",
          },
        ],
      },
      {
        q: "What encourages people to come up with new ideas or inventions?",
        answers: [
          {
            label: "Model Answer",
            text: "Traditional wisdom says that every [[groundbreaking|highly innovative; pioneering]] invention was just random, [[out of the blue|happening unexpectedly, without warning]]. But what I really think is that there's a [[trial-and-error|learning through repeated attempts and mistakes]] aspect [[behind the scenes|happening privately, out of public view]]. It's like when you're using something and it just doesn't work right, and you think, this could be better. That irritation [[lights a fire under you|strongly motivates you to act]], and before you know it you're sketching out designs on a [[napkin|an impromptu surface for a quick sketch]]. Plus there's collaboration. When you [[bounce ideas off other people|share and test ideas with others]], you get this [[synergy|combined effort producing more than the sum of its parts]] where the whole is greater than the parts. You might have a piece of the puzzle, someone else has another, you put them together, and boom, you've got something new.",
          },
        ],
      },
      {
        q: "Do you agree that people should spend more time reading about the ideas of famous thinkers of the past?",
        answers: [
          {
            label: "Model Answer",
            text: "For sure. The problems we're facing nowadays aren't new. We've been trying to make sense of the universe, society, morality, and [[all that jazz|and everything similar]] for centuries. When you read the wise thoughts of great thinkers of the past, you see where ideas originated and how they've evolved — and sometimes you realise the old answers [[can still apply today|are still relevant now]], or maybe they just need a [[refresh|an update or revision]].",
          },
        ],
      },
    ],
  },
  {
    id: "trying-new-things",
    part: 3,
    title: "Travelling & Trying New Things",
    emoji: "🧭",
    description: "Accessing travel information, how ages react to new things, and trying new activities.",
    questions: [
      {
        q: "How can people access travel information?",
        answers: [
          {
            label: "Model Answer",
            text: "There are [[a bunch of|numerous; several]] ways to do this. Especially with the internet, it's literally [[in the palm of your hands|readily available, usually on your phone]]. There are websites and apps like Google Flights, all of which are [[mind-blowing|astonishing; remarkable]] and let us compare flights from [[all over the planet|from everywhere in the world]]. And even better, there are YouTube channels and blogs — thousands of them [[dumping knowledge bombs|sharing lots of valuable information]] about [[hidden gems|lesser-known wonderful places]] and travel hacks. I follow a few such vloggers and got really curious about travelling because of them; I've already booked a flight to Nepal next month. And if you're [[old school|traditional; doing things the classic way]], you can still walk into a bookstore and pick up a travel guide — they still [[fit the bill|are suitable for the purpose]].",
          },
        ],
      },
      {
        q: "How do young and old people react differently to new things?",
        answers: [
          {
            label: "Model Answer",
            text: "When young people see new things, their [[eyes light up|they show sudden excitement]], you know — no fear, just [[pure curiosity|genuine, simple interest]], jumping [[all in|fully committed without hesitation]] no matter what. It's like, a new phone? I'll figure it out in two seconds. A new social media platform? I've already got a hundred followers, boom. They find their way with new things [[in a flash|extremely quickly]]. On the [[flip side|in contrast]], with the elderly it's a completely different scenario. They've got the experience, they've [[seen things come and go|witnessed many changes over time]], so they're not going to [[jump on the bandwagon|adopt something just because it's popular]] unless they have a reason. They're like, hold up — what's the new thing? Why do I need it? And that's totally okay.",
          },
        ],
      },
      {
        q: "Should young people try as many new activities as possible?",
        answers: [
          {
            label: "Model Answer",
            text: "Yeah, definitely. Life's too short to [[play it safe|avoid all risks; stay in your comfort zone]]. When you're at this age, your brain is like a [[sponge that soaks up everything|something that absorbs information very quickly]]. You might try a new sport and [[end up sucking at it|turn out to be bad at it]] — but who cares? You learned that this sport isn't [[your thing|the activity you enjoy or excel at]]. Go do something else; you expand your brain this way. And it's not just about the brain — you find out who you are. Young people discover their passion. That's why I'm [[a big believer|strongly convinced and supportive]] in the idea of trying everything when you're young.",
          },
        ],
      },
    ],
  },
  {
    id: "advertising",
    part: 3,
    title: "Advertising",
    emoji: "📣",
    description: "Why new things make us happy, online vs newspaper ads, and how ads shape what we buy.",
    questions: [
      {
        q: "Why does buying new things make people happy?",
        answers: [
          {
            label: "Model Answer",
            text: "It's actually wild how people get this rush when they buy new stuff. Your brain gets hit with a [[dopamine blast|an intense burst of pleasure chemicals]] every time you [[snag something fresh off the shelf|quickly grab a brand-new item]]. There's actual science behind it — it's what they call the [[hedonic treadmill|the tendency to return to a baseline of happiness after each pleasure]]. You buy something, you [[get a kick|feel a momentary thrill]], but then you adapt and you're back to wanting more. Plus, it's about status. We're all part of this big social game whether we like it or not, and getting new gear can make you feel like you're [[levelling up in life|advancing to a higher position]]. Society always [[shoves it down our throats|forcefully pushes the idea on us]] that happiness is just one purchase away.",
          },
        ],
      },
      {
        q: "Which one is more effective, newspaper advertising or online advertising?",
        answers: [
          {
            label: "Model Answer",
            text: "It's definitely online advertising, because we're living in a digital age. Newspapers had their time and have become [[obsolete|outdated; no longer used]], but today it's all about online advertising — it's not even close. Online ads are like a [[sniper rifle|extremely precise and targeted]]: you've got all the data and analytics, you know what people are clicking on and buying, and you can target exactly who you want, when you want. It's just [[nuts|incredibly impressive or effective]]. And you can reach the entire world with online ads. On the flip side, with newspapers it's [[old school|traditional; outdated]] and you're limited to whoever's picking up that paper in your city.",
          },
        ],
      },
      {
        q: "What are the most advertised products in your country?",
        answers: [
          {
            label: "Model Answer",
            text: "In Uzbekistan, it's [[predominantly|mainly; for the most part]] consumer goods and food chains. If you just drive down the freeway or [[flip through channels|change TV channels quickly one after another]], it's like a non-stop [[bombardment of|an overwhelming flood of]] fast food and soda ads. Coca-Cola is everywhere. And it's not just Coke — it's all the big [[fast-food spots|quick-service food outlets]] too: your burger places, your taco spots, your pizza places.",
          },
        ],
      },
      {
        q: "How do ads make us buy what we don't need at all?",
        answers: [
          {
            label: "Model Answer",
            text: "Ads show you this perfect picture of life with their product. Suddenly you're sitting there thinking you need this thing you never thought about before. They create a sense of urgency — like if you don't buy it now, you're [[missing out|failing to get an opportunity others have]], not keeping up with everyone else. [[FOMO|Fear Of Missing Out — anxiety about missed opportunities]] is a powerful motivator. And these ads repeat over and over, so even if you don't need the thing, it starts to feel familiar. [[Familiarity breeds trust|the more familiar something is, the more we trust it]], and the more you trust it, the more likely you are to buy it. It's a [[vicious loop|a self-reinforcing harmful cycle]].",
          },
        ],
      },
      {
        q: "What role does social media play in advertising?",
        answers: [
          {
            label: "Model Answer",
            text: "Social media plays a big part in this [[advertising landscape|the overall marketing environment]]. It's personal — like a direct line into your brain, because the targeting is [[surgical|extremely precise and accurate]]. These platforms have so much data on you it's scary: they know what you like, what you click on, who your friends are, what you're talking about. So the ads you get are [[tailored to|custom-made for]] you specifically. It's like having a billboard in your front yard that changes based on what you're thinking about that day. Plus the feedback loop is instant. Companies [[put out an ad|release an advertisement]] and can tell [[right away|immediately]] if it's working — they see the likes, shares, and comments. If it's not [[hitting|succeeding; landing well]], they [[tweak|make small adjustments to]] it and try again. It's a never-ending cycle of optimisation, and that's the real power of social media advertising.",
          },
        ],
      },
      {
        q: "What are the advantages of advertising?",
        answers: [
          {
            label: "Model Answer",
            text: "Nowadays, advertising is like [[oxygen|something absolutely vital]] for companies — without it, they're invisible. The first big advantage is visibility. You could have the best product in the world, but if no one knows about it, what good is it? So advertising [[gets the word out|spreads information to many people]]. And branding is another massive one. Ads aren't just about selling a product; they're about [[selling an image|promoting a lifestyle or perception]], a lifestyle. Think about companies like Apple or Nike — their ads make you feel something. They're selling you the idea that if you buy their products, you're innovative, you're an athlete, you're part of a [[tribe|a like-minded community you belong to]].",
          },
        ],
      },
    ],
  },
  {
    id: "challenges-and-pride",
    part: 3,
    title: "Challenges & Pride",
    emoji: "🏔️",
    description: "The challenges young people face, overcoming difficulty, rewards and feeling proud.",
    questions: [
      {
        q: "What challenges do young people face today?",
        answers: [
          {
            label: "Model Answer",
            text: "Young people are dealing with [[a whole set of|a large number of]] challenges today. One of the big ones is the pressure to succeed, and that [[comes from all angles|originates from many directions at once]] — parents, school, society, [[you name it|and everything else you could mention]]. And with the rise of social media and the digital world, it brought some challenges too. It's a [[double-edged sword|something with both good and bad sides]] now: while it connects us in amazing ways, most young people are [[falling victim to|suffering the harmful effects of]] addiction, social comparison, and FOMO. It's like navigating a [[virtual minefield|an online space full of hidden dangers]]. But I hope young people overcome these difficulties with ease — it's [[a wild ride|an unpredictable, intense experience]], but they're [[in the driver's seat|in control of their own path]].",
          },
        ],
      },
      {
        q: "How do people overcome challenges?",
        answers: [
          {
            label: "Model Answer",
            text: "Challenges are a big part of our lives now, and there's no [[one-size-fits-all|a single solution that works for everyone]] answer. But I guess it all starts with the right mindset. You should take that [[never-give-up attitude|a determined refusal to quit]] and let your mind figure out the ways. Surrounding yourself with the right [[crew|supportive group of people around you]] is also [[a game-changer|something that dramatically improves the situation]] — they support you and push you to be your best. Plus, staying focused and disciplined is key. You've got to [[put in the work|consistently make the effort]], whether it's in the gym, at work, or in your personal life. It's like building a muscle: the more you work it, the stronger it gets.",
          },
        ],
      },
      {
        q: "What rewards can companies offer to outstanding employees?",
        answers: [
          {
            label: "Model Answer",
            text: "Rewards are like a [[winning formula|a reliably successful approach]] for keeping top talent motivated and happy. There's the traditional way: financial incentives. Bonuses, salary increases, or profit-sharing can really show employees they're valued. Then there are non-monetary rewards too. Recognition is a big one — employee of the month, public praise, or even [[a shoutout|a public mention of acknowledgement]] in a company newsletter. It's like [[putting their name up in lights|celebrating their achievements publicly]].",
          },
        ],
      },
      {
        q: "On what occasions would people feel proud of themselves?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, there are the small wins in everyday life, like [[acing a test|scoring extremely well on an exam]], [[nailing a presentation|delivering it perfectly]] at work, or even just [[hitting a personal best|achieving your own highest result]] at the gym. It's like a high-five from your inner self. Then there are the big life moments, like graduating, landing your dream job, or starting a family — it's like standing on top of a mountain, looking at how far you've come. And let's not forget the times when you help others. When you make a positive impact on someone's life, supporting a friend or being there for your family, that's a special kind of pride.",
          },
        ],
      },
    ],
  },
  {
    id: "learning-languages",
    part: 3,
    title: "Languages",
    emoji: "🗣️",
    description: "Learning English, its future, age and language, and the difficulties learners face.",
    questions: [
      {
        q: "Is it popular to learn English in your country?",
        answers: [
          {
            label: "Model Answer",
            text: "Oh, definitely. Learning English has been [[gaining popularity|becoming more widely liked]] in recent years. It's not just a language anymore; it's [[a ticket to|something that grants access to]] all sorts of opportunities. With English proficiency, you can [[unlock doors to|open access to]] international universities, job markets, and global communication. And those standardised tests like the SAT and IELTS have become a big deal — they're like the passport to studying abroad and [[pursuing higher education|seeking advanced studies]] in English-speaking countries.",
          },
        ],
      },
      {
        q: "Do you think English will be the mainstream language of the world in the future?",
        answers: [
          {
            label: "Model Answer",
            text: "That's a fascinating question. English has definitely become a [[global lingua franca|a common language used worldwide between different peoples]] — the language of international business, diplomacy, and the internet. But predicting the future, especially with languages, is tricky. It's possible that English could continue to dominate, given its widespread use. However, we live in a [[diverse world|a world full of variety and different cultures]], and cultural diversity is a beautiful thing. So the future might be a [[blend of|a mixture or combination of]] English and other languages. It's like a linguistic ecosystem, and each language [[brings its unique flavour to the table|contributes its own distinct qualities]].",
          },
        ],
      },
      {
        q: "Is it easier for young people to learn a language than for older people?",
        answers: [
          {
            label: "Model Answer",
            text: "There's this [[perception|a common belief or view]] that young folks have a language-learning advantage, and [[there's some truth to it|it is partly accurate]]. When you're a kid, your brain is [[versatile|adaptable and flexible]], [[soaking up|absorbing quickly]] all kinds of information, including languages — it's a natural part of our early development. But it doesn't mean the elderly can't learn languages. It's more about the approach and motivation. As you get older, you might have other responsibilities, and it can be [[a big deal|a significant challenge]] to find the time and dedication to learn a new language.",
          },
        ],
      },
      {
        q: "What difficulties do people face when learning a language?",
        answers: [
          {
            label: "Model Answer",
            text: "Learning a new language is not [[a walk in the park|something easy and effortless]]. There are some [[hurdles|obstacles or challenges]] that everyone faces along the way. Firstly, there's pronunciation. Each language has its unique sounds, and mastering those can be a real problem — you might sound like a [[toddler|a very young child]] when you're just starting out. Then there's grammar. Every language has its rules, and they can get pretty complex. It's like trying to [[solve a puzzle|work out a complex problem]], and you make a ton of mistakes before it all clicks. I believe these two aspects are the hardest, because there's no [[shortcut|an easier or quicker way]] to master them.",
          },
        ],
      },
      {
        q: "Is it more important to learn foreign languages now than ever?",
        answers: [
          {
            label: "Model Answer",
            text: "Definitely. In today's world, learning foreign languages is like a [[superpower|a special, exceptional ability]]. The world is more [[interconnected|closely linked together]] than ever, and being able to communicate in multiple languages [[opens up a door to|provides access to]] a [[world of opportunities|a wide range of possibilities]]. From business and travel to diplomacy to [[career boosts|improvements to your professional prospects]], knowing a foreign language gives you [[a competitive edge|an advantage over others]]. It serves as a bridge nowadays to connect with [[people from all walks of life|individuals from all kinds of backgrounds]].",
          },
        ],
      },
    ],
  },
  {
    id: "feeling-tired",
    part: 3,
    title: "Feeling Tired",
    emoji: "😴",
    description: "Which work is more tiring, why there's never enough time, and when people feel tired.",
    questions: [
      {
        q: "Which is more tiring, labour work or studying in the library?",
        answers: [
          {
            label: "Model Answer",
            text: "It's like [[comparing apples and oranges|contrasting two very different things]]. Both can be exhausting in their own right, and it depends on your preferences and what you're built for. Some people thrive in the physical world, while others [[find their element|discover where they naturally do best]] in the realm of ideas. I believe it's all about finding your thing and what leaves you feeling accomplished [[at the end of the day|when everything is considered]].",
          },
        ],
      },
      {
        q: "Do you think that not having enough time is a feature of our modern life?",
        answers: [
          {
            label: "Model Answer",
            text: "Oh, that's a common one — the whole not-enough-hours-in-a-day thing, especially in urban areas. Life today is fast-paced and [[jam-packed|extremely full and crowded]]. We've got [[a lot on our plate|many responsibilities to handle]] — work, family, social media, Netflix, you name it, all [[pulling us in different directions|dividing our attention many ways]]. And part of the reason is that we often forget to prioritise. We're [[swamped with|overwhelmed by a large amount of]] stuff that might not actually be that important. But the truth is, there are enough hours in a day; it's about how we choose to use them. It's like that old saying: don't count the days, make the days count.",
          },
        ],
      },
      {
        q: "When do people usually feel tired?",
        answers: [
          {
            label: "Model Answer",
            text: "There could be a bunch of reasons for [[fatigue|extreme tiredness]], but the most common one is lack of sleep. We're all guilty of staying up too late, whether it's [[binge-watching|watching many episodes in one sitting]] shows, working late, or just [[scrolling through the endless social media abyss|continuously browsing social media with no end]]. That'll [[drain your energy|use up your strength]] really quick. And we shouldn't [[overlook|fail to notice or ignore]] stress, which can have a huge impact on people's mental health.",
          },
        ],
      },
    ],
  },
  {
    id: "measuring-success",
    part: 3,
    title: "Measuring Success",
    emoji: "🎯",
    description: "How we judge others' success and what helps students succeed at school.",
    questions: [
      {
        q: "In general, how do people judge the success of others?",
        answers: [
          {
            label: "Model Answer",
            text: "It's intriguing how we judge the success of others. We have [[societal standards|the norms and expectations set by society]] about success. Most of the time, it's about the external stuff you own — the car you drive, the house you live in, or the job you have. It's a [[societal scoreboard|a public way of ranking people by outward achievement]]. But the truth is, real success goes way deeper than that. I feel like it's about happiness, [[fulfilment|a deep sense of satisfaction and meaning]], and personal growth. So we should be looking at how content and satisfied someone is with their life, not just the material stuff. Are they following their passions, learning, and growing? Are they making a positive impact on the world? That's the real measure of success. It's not what you have; it's who you've become and [[the mark you leave|the lasting impact you have on the world]].",
          },
        ],
      },
      {
        q: "What are the factors that influence students' grades at school?",
        answers: [
          {
            label: "Model Answer",
            text: "Achieving success at school isn't just about [[hitting the books|studying hard]], although that's a big part of it. It's about finding your passion, being curious, and [[staying hungry for knowledge|keeping a strong desire to learn]]. You've got to be engaged with the material, not just memorising it for a test. And surround yourself with a good [[crew|group of people around you]] too — hang out with people who motivate and support you. There's a saying, [[iron sharpens iron|people improve each other through challenge and interaction]], and the same goes for learning. Your peers can push you to be your best.",
          },
        ],
      },
    ],
  },
  {
    id: "adventures-risks",
    part: 3,
    title: "Adventures & Risks",
    emoji: "🧗",
    description: "How adventure relieves stress, the skills it needs, and why young people seek thrills.",
    questions: [
      {
        q: "How do adventurous and exciting activities help people relieve stress?",
        answers: [
          {
            label: "Model Answer",
            text: "I believe it's all about that [[adrenaline rush|the sudden surge of energy and excitement]]. With your body getting flooded with this stuff and you feeling [[a pinch of|a small amount of]] a sense of accomplishment, it's a [[natural stress-buster|something that naturally reduces stress]]. You're so focused on what you're doing — whether it's [[nailing|successfully accomplishing]] a tricky climb or navigating a crazy rapid — that you forget about the everyday stressors. Your problems, your bills, your job — you [[unplug from|disconnect and disengage from]] all that. It's like [[hitting a reset button|starting fresh; beginning anew]] in your brain.",
          },
        ],
      },
      {
        q: "What skills do people need to take part in adventurous activities?",
        answers: [
          {
            label: "Model Answer",
            text: "To get a thrill from such activities, a variety of skills [[come into play|become relevant and necessary]]. You've got to be in [[some decent shape|reasonably good physical condition]], especially for activities like rock climbing, hiking, or extreme sports. I don't mean you should be a [[stud|an exceptionally fit person]], but at least you should be eating healthily, because you need that core strength and stamina to keep going when [[things go south|the situation gets worse]]. But it's not just about the body — it's about the mind too. [[Mental fortitude|inner strength and courage under pressure]] is huge. You need to stay cool under pressure, make quick decisions, and not [[freak out|panic or react with extreme anxiety]] when [[things get hairy|the situation becomes risky or difficult]]. It's that mental nerve that separates the [[thrill-seekers|people who actively chase excitement]] from the panicked ones.",
          },
        ],
      },
      {
        q: "Why do young people like doing exciting things?",
        answers: [
          {
            label: "Model Answer",
            text: "Young folks are [[wired for excitement|naturally built to seek thrills]] — it's in our DNA. They're at a stage in life where they're figuring things out, [[pushing boundaries|testing their limits]], and seeking experiences that make them feel alive. Exciting things — extreme sports, travel, or just crazy adventures — give them a rush that's hard to find elsewhere. Plus, there's a bit of [[rebellion|defiance against accepted rules]] in there too. Young people often [[rebel against|resist and oppose]] [[the status quo|the existing state of things]] and seek excitement as a way to [[challenge norms|question established standards]] and discover who they really are.",
          },
        ],
      },
    ],
  },
  {
    id: "opinions-and-advice",
    part: 3,
    title: "Opinions & Advice",
    emoji: "🗨️",
    description: "Changing opinions, the risk of too much advice, and advice across generations.",
    questions: [
      {
        q: "What important changes in popular ideas and opinions have taken place recently?",
        answers: [
          {
            label: "Model Answer",
            text: "Mainstream ideas are always [[subject to change|liable to change]] because of propaganda machines and media manipulation. One positive change has been people's attitudes towards environmental problems. More and more people are realising that the current environmental situation is bad and action needs to be taken, so [[environmentally-responsible|acting with care for the environment]] individuals are [[calling on|publicly urging]] their governments to adopt policies that force industries to [[scale down|reduce the size of]] their output.",
          },
        ],
      },
      {
        q: "What problems can people face if they ask many different people for advice?",
        answers: [
          {
            label: "Model Answer",
            text: "The danger with asking many people for advice is that it gets more difficult to make a decision. Usually people are bad at giving advice, since they give it from their own perspective. However hard one tries to [[put himself in the other person's shoes|imagine another person's situation]], it's not really possible, so when you ask way too many people for advice, you just end up making it difficult for yourself.",
          },
        ],
      },
      {
        q: "In general, what kind of person is most suitable for giving advice to others?",
        answers: [
          {
            label: "Model Answer",
            text: "The person most suited to giving advice is someone who has [[seen a lot in life|gained wide experience over the years]] and has a lot of experience. Even then, the person should be careful to give advice that is not [[too general|too broad to be useful]], since general advice is not of any use to the person who came seeking it.",
          },
        ],
      },
      {
        q: "In what situations can old people ask younger people for advice?",
        answers: [
          {
            label: "Model Answer",
            text: "Older people might go to younger people for advice when they're not sure about something that is more [[particular to|specific to]] the younger generation. For example, it might be something like cryptocurrencies, a recent [[craze|a widespread short-lived enthusiasm]] that everyone wants to be part of. If they have some money [[lying around|available and unused]], older people could ask younger ones whether investing in something like that is worth it. It's not necessarily the technology that they ask advice about.",
          },
        ],
      },
      {
        q: "Why do so many young people not accept the advice of older people?",
        answers: [
          {
            label: "Model Answer",
            text: "Younger people might not [[resonate with|connect with; relate to]] the words of older people. Usually the advice given to them might not make sense because of the [[generation gap|the difference in attitudes between age groups]]. So if young people fail to [[relate to|understand and identify with]] the advice, they might not follow or accept it when it comes from the older generation.",
          },
        ],
      },
      {
        q: "Some people find it easier to accept advice than others. Why do you think there is this difference?",
        answers: [
          {
            label: "Model Answer",
            text: "It comes down to the willingness with which they approach it when they go asking for advice in the first place. Some people approach others [[adamant that|firmly and stubbornly convinced that]] they're right, and they ask for advice just for the sake of doing so, while others are genuinely in need of advice — and when given it, they [[act on it|take action based on it]] or accept it more enthusiastically.",
          },
        ],
      },
    ],
  },
  /* ═══════ PART 1 — from full mock tests (Tests 2, 4–7) ═══════ */
  {
    id: "staying-up-late",
    part: 1,
    title: "Staying Up Late",
    emoji: "🌙",
    description: "Being a night owl, staying up as a kid, and how it feels the next day.",
    questions: [
      {
        q: "Do you often stay up late?",
        answers: [
          {
            label: "Model Answer",
            text: "I'm [[a night person|someone who prefers being awake late at night]], I have to admit. Staying up late is pretty much a regular thing for me at this point. I know it's not really healthy, but this is what it is. So yeah, I do stay up late very often, even though I'm not too proud of it.",
          },
        ],
      },
      {
        q: "Did you stay up late when you were a kid?",
        answers: [
          {
            label: "Model Answer",
            text: "No, I don't think so, because my parents would never allow it. Plus, I was going to school, which started in the morning, so I needed my night's sleep. In a way, I didn't have the [[freedom|the ability to act without restriction]] to stay up late when I was a kid.",
          },
        ],
      },
      {
        q: "What do you do when you stay up late?",
        answers: [
          {
            label: "Model Answer",
            text: "Different things. I could watch a movie, but most of all I'm quite productive during the night — that's one of the reasons I stay up late. I get most of my work done at night time when my kids are asleep and I have the living room to myself, so I can [[catch up with|get up to date on]] certain tasks.",
          },
        ],
      },
      {
        q: "What does it feel like the following day when you stay up late?",
        answers: [
          {
            label: "Model Answer",
            text: "To me it feels like a normal day, because staying up late is pretty normal for me. Plus, I have [[flexible working hours|a schedule with variable start and end times]], so I don't really have to get up in the morning. I just [[compensate for|make up for; balance out]] it by staying in bed sometimes till noon. So it doesn't really feel unusual — it's just any other day.",
          },
        ],
      },
    ],
  },
  {
    id: "jewelry",
    part: 1,
    title: "Jewelry",
    emoji: "💍",
    description: "Wearing jewelry, what type you like, and giving it as a gift.",
    questions: [
      {
        q: "How often do you wear jewelry?",
        answers: [
          {
            label: "Model Answer",
            text: "I don't really wear jewelry in the traditional sense — I don't wear necklaces, bracelets, or rings. Maybe it's a cultural thing; in Asian cultures it's not common for men to wear jewelry. But I think watches count as jewelry, at least as a practical thing or an [[accessory|an item added to complete or enhance an outfit]]. So yeah, I do wear a watch every day, if that counts.",
          },
        ],
      },
      {
        q: "What type of jewelry do you like to wear?",
        answers: [
          {
            label: "Model Answer",
            text: "Like I said, I'm not really sure. Maybe I like to wear my [[wedding band|the ring worn to show you are married]] more often — again, this is more of a cultural thing. After many years of marriage you just forget to put on your wedding ring, but this is something I probably should be wearing. Other than that, I'm just not too interested in wearing a piece of jewelry.",
          },
        ],
      },
      {
        q: "Have you ever received jewelry as a gift?",
        answers: [
          {
            label: "Model Answer",
            text: "Maybe, maybe not — I'm not sure, though. I received a watch as a gift, if that counts as jewelry. And at some point somebody might have given me a cheap bracelet, the kind people bring back from their travels, but I don't really remember.",
          },
        ],
      },
      {
        q: "Would you give jewelry as a present to others?",
        answers: [
          {
            label: "Model Answer",
            text: "Yeah, I think I would. Jewelry can make a great present, especially for women — you can buy them a ring, earrings, or necklaces in different designs. You could even make it [[personalized|customised specially for one person]] by engraving a message for them, which makes it even more special.",
          },
        ],
      },
    ],
  },
  {
    id: "morning-time",
    part: 1,
    title: "Morning Time",
    emoji: "🌅",
    description: "Getting up early, breakfast, morning habits, and how they've changed.",
    questions: [
      {
        q: "Do you like to get up early?",
        answers: [
          {
            label: "Model Answer",
            text: "I would like to, but I usually can't, because I normally stay up late — I'm [[a night person|someone who prefers being active at night]]. Getting up early is quite a difficult task for me. But I'm okay with it, because I have very [[flexible working hours|variable start and end times for work]].",
          },
        ],
      },
      {
        q: "Is breakfast important?",
        answers: [
          {
            label: "Model Answer",
            text: "They say breakfast is the most important meal of the day, because it helps you [[get a head start on|begin ahead of the usual point]] your day and provides you with necessary vitamins and [[nutrients|substances in food essential for health and growth]]. But since I don't really get up early, I sometimes skip my breakfast.",
          },
        ],
      },
      {
        q: "What do you usually do in the morning?",
        answers: [
          {
            label: "Model Answer",
            text: "I don't really have a strict [[morning routine|a set of habits you go through after waking up]]. I get up and then do whatever — usually I check my phone for emails and messages and try to respond to the urgent ones. I'd like to do some morning exercise, but I'm getting quite lazy these days, so that doesn't happen every day. Roughly, it's get up, check my phone, respond to emails, have a shower, maybe some breakfast, and then go to work.",
          },
        ],
      },
      {
        q: "Did you have the same morning routine when you were younger?",
        answers: [
          {
            label: "Model Answer",
            text: "No, of course not, because when I was younger I had [[obligations|duties or commitments you must fulfil]] — I had to get up early, go to school, and so on. But nowadays, since I'm an adult and independent, I don't really have to go anywhere in the morning. Like I said, I'm [[self-employed|working for yourself rather than an employer]], so I don't have a set time I have to be at work, which gives me some freedom.",
          },
        ],
      },
    ],
  },
  {
    id: "weekends",
    part: 1,
    title: "Weekends",
    emoji: "🎡",
    description: "What you do on weekends, your favourite part, and whether they're long enough.",
    questions: [
      {
        q: "What do you usually do on weekends?",
        answers: [
          {
            label: "Model Answer",
            text: "I try to spend some [[quality time|time spent giving someone your full attention]] with my kids on weekends. But since I'm [[self-employed|working for myself]], sometimes I do need to get some work done as well.",
          },
        ],
      },
      {
        q: "What is your favorite part of the weekend?",
        answers: [
          {
            label: "Model Answer",
            text: "My favourite part of the weekend has to be the evenings, when I get to take my kids out to an [[amusement park|a large outdoor area with rides and entertainment]] or somewhere similar, and we try to have fun there. Sometimes I also go out with my friends — those are the [[highlights of my weekend|the best parts of the weekend]].",
          },
        ],
      },
      {
        q: "Do you think your weekends are long enough?",
        answers: [
          {
            label: "Model Answer",
            text: "Like I said, I'm self-employed, so my working hours are quite flexible. I don't really get stressed during the week, so I'm pretty satisfied with my weekends — they're long enough, I think.",
          },
        ],
      },
      {
        q: "What did you do last weekend?",
        answers: [
          {
            label: "Model Answer",
            text: "Last weekend I was shopping. It was [[back-to-school|the period when children return to school after a break]] time for my kids, and I also own a language school, so we were getting some things ready for classes to resume. I was shopping for [[school supplies|items students commonly use for study]] for my kids as well.",
          },
        ],
      },
    ],
  },
  {
    id: "space-travel",
    part: 1,
    title: "Outer Space & Space Travel",
    emoji: "🚀",
    description: "Whether you'd travel to space, learning about stars, and why studying them matters.",
    questions: [
      {
        q: "Do you want to travel to outer space?",
        answers: [
          {
            label: "Model Answer",
            text: "Personally, I'm not really interested in [[commercial space travel|space travel offered by private companies for profit]], to be honest. For one thing, I don't really have the money for it — it's very expensive. Space travel for scientific purposes is quite necessary, but for commercial reasons I think we should think carefully before committing to such projects. It's enough that we're polluting the earth; I don't see the point of going to space and polluting that as well.",
          },
        ],
      },
      {
        q: "What would you do if you had an opportunity?",
        answers: [
          {
            label: "Model Answer",
            text: "That's a very luxurious type of travel, and it costs a lot to go to outer space. But if I had the opportunity, and if I could be assured it was safe enough, then just [[for the sake of|out of; in the interest of]] curiosity — to be able to see the earth from a distance — I think I'd feel truly [[humbled|made to feel modest before something greater]]. So yes, I'd take that chance, knowing there were no risks. I remember watching a movie like Apollo 13, where Tom Hanks is [[orbiting around|following a circular path around]] the moon, looks back at the earth, tries to cover the whole planet with his thumb, and realises just how small our planet is in the universe.",
          },
        ],
      },
      {
        q: "Have you ever learnt about stars and outer space?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, I have. I took some classes at school. But recently I've become more interested in this field because of my son — he's been crazy about the concepts of light years and black holes, and he makes me watch videos on YouTube to discuss afterwards. I've been learning a lot.",
          },
        ],
      },
      {
        q: "Is it important to study stars?",
        answers: [
          {
            label: "Model Answer",
            text: "Studying stars is quite important, I think. First of all, there's the concept of [[technology spill-over|when technology developed for one purpose benefits another]] — technology used for space exploration can be applied back here on earth. Plus, the knowledge we gain from learning about stars can help us better understand our universe, our planet, and climate change too. It's an interesting topic, and [[suffice to say|it is enough to say]] that studying stars is quite critical.",
          },
        ],
      },
    ],
  },
  {
    id: "happiness-p1",
    part: 1,
    title: "Happiness",
    emoji: "😊",
    description: "What happiness means to you, childhood joys, and how weather affects your mood.",
    questions: [
      {
        q: "What do you think of happiness?",
        answers: [
          {
            label: "Model Answer",
            text: "To me, happiness is the state of being [[content|satisfied and at peace with what you have]] and satisfied with your life. Overall, it's a very deep and philosophical topic that can be approached in many different ways. But [[simply put|to state it in the most basic way]], happiness is being happy without any conditions, let's say.",
          },
        ],
      },
      {
        q: "What usually made you happy when you were a child?",
        answers: [
          {
            label: "Model Answer",
            text: "When I was a kid, I liked going places with my parents — visiting a relative, going to [[amusement parks|large outdoor areas with rides and entertainment]] or swimming pools. Those were my happiest memories, because my parents were always busy working and didn't have much free time, so those were special times.",
          },
        ],
      },
      {
        q: "Does the weather ever affect how you feel?",
        answers: [
          {
            label: "Model Answer",
            text: "Generally speaking, yes. Pleasant, sunny weather can put me in a good mood — you can go out with your family or friends. On the other hand, [[gloomy|dull and dark in a way that causes low spirits]] weather makes me sad. I think this all goes back to our psychological associations from movies and music: they usually use sad tones to reflect stormy weather, so we tend to [[associate|connect in the mind]] bad weather with sadness.",
          },
        ],
      },
    ],
  },
  {
    id: "music",
    part: 1,
    title: "Music",
    emoji: "🎵",
    description: "The music you like, when you listen, how long, and how it makes you feel.",
    questions: [
      {
        q: "What kinds of music do you like to listen to?",
        answers: [
          {
            label: "Model Answer",
            text: "I like listening to all kinds of music, depending on my mood. For example, if I'm feeling down, I like the music from the 90s. Or if I need to [[push myself|force yourself to make a greater effort]], like when I feel like working out, I like listening to hip hop, specifically Eminem songs.",
          },
        ],
      },
      {
        q: "When do you often listen to music?",
        answers: [
          {
            label: "Model Answer",
            text: "I often listen to music when I'm driving, because the experience just makes me feel calm, especially [[soothing|gently calming and relaxing]] music. Or I can have background music on if I'm studying, since it can also help me concentrate.",
          },
        ],
      },
      {
        q: "How much time do you spend listening to music every day?",
        answers: [
          {
            label: "Model Answer",
            text: "I don't really [[set aside|reserve for a particular purpose]] a specific time for listening to music. Like I said, it's usually in the background — if I'm walking or driving somewhere, I usually listen to music, or sometimes podcasts as well.",
          },
        ],
      },
      {
        q: "How do you feel when you listen to it?",
        answers: [
          {
            label: "Model Answer",
            text: "Music has a way of connecting to our emotions. Sometimes listening to sad songs can make us feel that way, and sometimes cheerful songs make us happier. The same applies to me — music helps us [[express our emotions|show our feelings outwardly]] in a better way, I think.",
          },
        ],
      },
    ],
  },
  {
    id: "public-transport",
    part: 1,
    title: "Public Transport",
    emoji: "🚇",
    description: "The most popular transport, driving to work, and traffic problems where you live.",
    questions: [
      {
        q: "What is the most popular means of transportation in your hometown?",
        answers: [
          {
            label: "Model Answer",
            text: "I have to say it's the Metro — the subway system. I think it's the most popular, and the next one has to be the bus system. Both of these forms of public transport are popular in Tashkent.",
          },
        ],
      },
      {
        q: "Is driving to work popular in your country?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, it's getting more and more popular. Unfortunately — and I say unfortunately because it's not really good for the environment — I can see that more and more cars are on our roads every day, especially during [[rush hour|the busiest part of the day for traffic]] periods, when there's [[traffic congestion|roads overcrowded with vehicles]]. So more and more people are driving to work nowadays.",
          },
        ],
      },
      {
        q: "Are there any traffic problems in your area?",
        answers: [
          {
            label: "Model Answer",
            text: "Yeah, like I said, there's usually traffic congestion in Tashkent, especially during [[peak hours|the busiest hours, as in rush hour]] — in the morning when everyone's going to work, or in the evening when they're coming back. That's the biggest problem in Tashkent, I think.",
          },
        ],
      },
    ],
  },
  {
    id: "hair",
    part: 1,
    title: "Hair",
    emoji: "💇",
    description: "Going to the barber, changing your hair colour, and haircuts you didn't like.",
    questions: [
      {
        q: "Do you like going to the hairdresser's or barber's?",
        answers: [
          {
            label: "Model Answer",
            text: "No, but I like my hairstyle, and I don't change it very frequently — I go maybe four or five times a year. It's a lot of [[hassle|an irritating inconvenience]]: you have to make an appointment, so I don't really like it that much.",
          },
        ],
      },
      {
        q: "Do you want to change your hair color?",
        answers: [
          {
            label: "Model Answer",
            text: "No, I don't think I ever would, because I really love my dark hair. People always ask me whether I've [[dyed|changed the colour of using a chemical]] it, but it's the natural dark colour, and I'd never change it.",
          },
        ],
      },
      {
        q: "How often do you have a haircut?",
        answers: [
          {
            label: "Model Answer",
            text: "About four or five times a year, because I like to keep my hair long. I don't really like going to hairdressers that often, because there's always a chance they might [[mess up|do badly; ruin]] my hairstyle. My hair is something I'm quite proud of, so I don't even want barbers touching it for no reason.",
          },
        ],
      },
      {
        q: "Have you had a haircut that you didn't like?",
        answers: [
          {
            label: "Model Answer",
            text: "Almost every time, I have to say. Like I said, I'm really quite sensitive about my hair, and every time someone gives me a shorter haircut, I hate it. I'm very [[demanding|hard to satisfy; expecting a lot]], so I have one barber I always go to now, and I always make my expectations as clear as possible.",
          },
        ],
      },
    ],
  },
  {
    id: "t-shirts",
    part: 1,
    title: "T-shirts",
    emoji: "👕",
    description: "Wearing T-shirts, prints, whether older people can wear them, and buying them as souvenirs.",
    questions: [
      {
        q: "Do you like wearing T-shirts?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, I love wearing T-shirts. I'm [[a casual dresser|someone who dresses in a relaxed, informal way]], so T-shirts go with the rest of my outfits usually.",
          },
        ],
      },
      {
        q: "How often do you wear T-shirts?",
        answers: [
          {
            label: "Model Answer",
            text: "In the summertime and warmer months I tend to wear them every day. But even in winter, I wear them as an [[undershirt|a garment worn underneath a shirt]].",
          },
        ],
      },
      {
        q: "Do you like T-shirts with pictures or prints?",
        answers: [
          {
            label: "Model Answer",
            text: "No, I don't really like T-shirts with pictures and prints, because I hate wearing something that has a [[cliché|an overused, unoriginal idea or design]] or too obvious a design. But if it's a quote from one of my favourite movies or TV shows, then I'm okay with it, because it expresses [[individuality|the qualities that make you different from others]] in a way.",
          },
        ],
      },
      {
        q: "Do you think older people who wear T-shirts are fashionable?",
        answers: [
          {
            label: "Model Answer",
            text: "It depends on the person. Overall, if the T-shirt goes with their outfit, then it's fine. But if it's [[out of place|not suited to the situation or surroundings]], it may not look as good. Overall, though, I don't believe in the idea that certain age groups have a limited choice of clothing.",
          },
        ],
      },
      {
        q: "Would you buy T-shirts as souvenirs on vacation?",
        answers: [
          {
            label: "Model Answer",
            text: "Yeah, I think T-shirts can be a great [[souvenir|an object kept as a reminder of a place]] or gift. I wouldn't buy them for myself, for obvious reasons, but for my friends I think they'd appreciate one — say, a T-shirt from a particular city with the city's name printed on it. So yeah, it would make a great souvenir.",
          },
        ],
      },
    ],
  },
  /* ═══════ PART 2 — from full mock tests (Tests 2, 4–7) ═══════ */
  {
    id: "ideal-job",
    part: 2,
    title: "Describe an ideal job you'd like to do in the future",
    emoji: "💼",
    description: "A model long-turn answer about moving from teaching towards business.",
    cueCard: ["What it is", "How you will get this job", "What skills you need", "Why you would like to do it"],
    questions: [
      {
        q: "Describe an ideal job you'd like to do in the future.",
        answers: [
          {
            label: "Model Answer",
            text: "I'm not really sure about an ideal job, because I'm 34 and I'm a teacher — specifically, an IELTS instructor. I've been teaching in this field for the past ten years or so, which is quite a long time, and I love teaching. I have a [[great passion for|a strong enthusiasm or interest in]] it and I cannot really imagine myself doing any other job. [[As a matter of fact|in reality; actually]], I tried working in different jobs, such as customer service, but for me teaching is my [[true passion and calling|a genuine, deep-seated purpose in life]].\n\nAlong with teaching, I also have a small language school, which I run, located here in Tashkent, Uzbekistan. My experience in [[running the school|managing and overseeing its operations]] has given me some experience in business and management. I also have a degree in business, which is funny because, despite that, I still consider myself more of a teacher than a manager.\n\nIn the future, I'd like to focus more on learning about business and become a more business-oriented professional rather than a teacher, because I feel I've achieved everything I wanted to achieve in teaching, and it's now time to [[face new challenges|deal with unfamiliar, difficult situations]] and [[grow professionally|advance and improve in your career]]. I'm already reading business books and taking online courses, so hopefully in the future I can become a successful business person.",
          },
        ],
      },
    ],
  },
  {
    id: "fashionable-person",
    part: 2,
    title: "Describe a person who likes to dress fashionably",
    emoji: "🕶️",
    description: "A model long-turn answer about Magnus Carlsen's sense of style.",
    cueCard: ["Who he/she is", "What job he/she does", "What kind of clothes he/she wears", "Why he/she likes fashion"],
    questions: [
      {
        q: "Describe a person who likes to dress fashionably.",
        answers: [
          {
            label: "Model Answer",
            text: "I may not be the best person to talk about fashion, because I'm far from an expert on this topic. But if I had to pick one person who dresses fashionably, it has to be Magnus Carlsen, the current world chess champion. I really like Magnus's sense of style — he's got this unique [[fashion sense|a knowledge of how to dress fashionably]] where he can [[pull off|wear successfully; carry off]] any type of outfit you can think of, from [[casual wear|relaxed clothing for everyday use]] to [[formal wear|clothing for formal occasions, like suits]], depending on the event he's attending.\n\nAnother reason he's got this great taste in fashion might be his modelling career. He's actually a model for high-end brands like G-Star and Hugo Boss, and that might explain his exceptional fashion sense. In a way, Magnus Carlsen breaks the typical stereotype of chess players as unfashionable and nerdy, so to speak. With his great sense of fashion and sharp-looking outfits fitting the occasion, I think he can be an inspiration for younger generations. This very fashionable style of his is a reflection of his confidence and [[individuality|the quality that makes a person distinct from others]] — and he also happens to be one of the best chess players of all time.",
          },
        ],
      },
    ],
  },
  {
    id: "piece-of-news",
    part: 2,
    title: "Describe a piece of news about someone you know well",
    emoji: "📰",
    description: "A model long-turn answer about a friend finding an inclusive school for his son.",
    cueCard: ["What the news was", "When and how you heard it", "How you felt about it"],
    questions: [
      {
        q: "Describe a piece of news that you heard about someone you know well.",
        answers: [
          {
            label: "Model Answer",
            text: "I have a very close friend who has an [[autistic|affected by autism, a condition affecting social interaction]] son — his son is [[on the spectrum|having characteristics of autism spectrum disorder]]. He and his wife have been struggling for the past few years to put their child in the right school. Unfortunately, because of the education system in Uzbekistan, these [[mainstream schools|ordinary schools for students without special educational needs]] lacked [[inclusive education|schooling that includes children of all abilities together]] and a proper understanding of autism, so it was quite challenging for them to find a school where their kid could develop social and academic skills.\n\nRecently we had a conversation, and he was really happy to tell me they'd finally found a private school willing to [[take a chance on|risk giving an opportunity to]] his son. It's a mainstream private school, but they were willing to give his autistic son a flexible schedule, so he can attend the classes he likes and [[opt out of|choose not to take part in]] the ones he isn't interested in. I was also happy to hear that the students in the class were very supportive and [[open-minded|willing to consider new ideas; unprejudiced]] about it. They had a very positive relationship with this kid, who is actually very bright and just lacks social skills. Overall, I was happy to learn he got accepted into a mainstream school with inclusive education — I think it can be an important step in his education.",
          },
        ],
      },
    ],
  },
  {
    id: "city-short-stay",
    part: 2,
    title: "Describe a city where you'd like to stay for a short time",
    emoji: "🏝️",
    description: "A model long-turn answer about Galveston, Texas.",
    cueCard: ["What city it is", "Who you will go there with", "What you will do there", "Why you will stay only for a short time"],
    questions: [
      {
        q: "Describe a city where you'd like to stay for a short time.",
        answers: [
          {
            label: "Model Answer",
            text: "The city I'd like to stay in for a short time has to be Galveston, Texas. It's a small island on the Gulf of Mexico. I spent the summer of 2008 there doing a [[work-and-travel program|a scheme that lets students work abroad and travel afterwards]] — it gives students a visa that allows them to work, and then travel at the end of the program.\n\n2008 was the year of the financial crisis, so I was working two or three jobs to pay back my debts. It was also the time the island got hit by [[Hurricane Ike|a major 2008 hurricane that struck the Texas coast]], so I couldn't really spend the whole summer there — I had to run away from the hurricane as soon as I heard about it. I was too young anyway, so I couldn't really explore the island.\n\nNow, from reading about it online, I've learned there are historical museums like the Railroad Museum, some great amusement parks you can visit with your family, and the beaches are lovely, though quite busy during summertime. So I'm actually planning to go back to Galveston, this time with my family, now that I have the money to explore the island and see some sights. The reason I'd want to stay only for a short time is that I think we could explore the island in a very short period — we'd only need about seven days to see everything we want to see.",
          },
        ],
      },
    ],
  },
  {
    id: "enjoyable-daily-routine",
    part: 2,
    title: "Describe a daily routine you enjoy",
    emoji: "🍕",
    description: "A model long-turn answer about a relaxing family weekend routine.",
    cueCard: ["What you do", "When it became your routine", "Whether you will change it", "Why you enjoy it"],
    questions: [
      {
        q: "Describe a daily routine you enjoy.",
        answers: [
          {
            label: "Model Answer",
            text: "Daily routines can be very practical and help us organise our days and weeks and be more efficient, but I want to talk about a particular routine that I find enjoyable and relaxing — my weekend routine. It usually starts the night before. On Saturday nights we tend to have fun as a family — playing games, watching movies or cartoons — and we [[stay up late|remain awake into the night]], because it's not a school night, so I allow my children to stay up late as well.\n\nThe idea is to [[sleep in|sleep later than usual in the morning]] the next day. When we wake up, we have a casual breakfast-lunch. I order a pizza for the whole family so we can eat together, and we plan our day for the rest of the Sunday. Normally we go out to visit parks, or visit friends and family. Sometimes we plan a picnic with my brother's family — he has two kids just like me, so it can be quite an [[eventful|full of interesting or exciting events]] Sunday.\n\nI really love it. Having such a relaxing routine can [[set the mood for|create the right atmosphere for]] the upcoming week and allows us to [[recharge|recover energy and freshness]] our minds and bodies. Having an enjoyable Sunday like this can be a source of inspiration and motivation for the whole family.",
          },
        ],
      },
    ],
  },
  /* ═══════ PART 3 — from full mock tests (Tests 2, 4, 6) ═══════ */
  {
    id: "jobs-career",
    part: 3,
    title: "Jobs & Career",
    emoji: "🧑‍💼",
    description: "Popular jobs, children's ambitions, career regrets, and what matters besides money.",
    questions: [
      {
        q: "What are the most popular jobs in your country?",
        answers: [
          {
            label: "Model Answer",
            text: "There are jobs that have become quite universal throughout the world — for example, working in IT, being an IT specialist, data analyst, or data scientist, which the younger generation aspires to. These are quite [[lucrative|producing a lot of money; financially rewarding]] and also very [[in-demand|wanted or needed by many people]]. But speaking about Uzbekistan, another job that's been [[on the rise|increasing; becoming more common]] lately is teaching English. It's popular among young students trying to be [[self-sufficient|able to support themselves without help]] and earn some money on the side, since we have all these private English schools. There are always job openings for English teachers, and it's usually students who speak English that [[jump at this opportunity|eagerly seize the chance]] — some become great teachers, others do it just temporarily.",
          },
        ],
      },
      {
        q: "What do most children want to be when they grow up?",
        answers: [
          {
            label: "Model Answer",
            text: "I think it has more to do with national pride, especially for boys. When they grow up, they want to be in the army or the police force — something to represent their manhood and defend their country. I think this is quite true universally. But with girls, they usually want jobs that care for people — being a doctor or a teacher is something that appeals to them, I think. I'm not too sure, though.",
          },
        ],
      },
      {
        q: "Do people regret their career choices when they're old?",
        answers: [
          {
            label: "Model Answer",
            text: "Some people do, I think — these are the people who couldn't take risks. They must have been stuck at a [[dead-end job|a job with no opportunity for advancement]] their whole life. Some people basically live in a [[rat race|an exhausting, competitive struggle for wealth or status]], barely [[making ends meet|earning just enough to cover basic needs]], and can't put aside enough money to take risks. So when they get old and retire, they might regret it, wishing they'd been more adventurous and taken more chances. The [[key takeaway|the main point to remember]] here is that you have to be more risk-taking and braver when it comes to job opportunities.",
          },
        ],
      },
      {
        q: "What other factors, besides money, should people consider when choosing a career path?",
        answers: [
          {
            label: "Model Answer",
            text: "While there are lots of things to consider, money shouldn't even be your top priority. Even though young people coming into the job market usually consider the financial aspect first — how much the pay is — sooner or later you realise money isn't the [[key factor|the most important element]]. It's actually other things, like job satisfaction, the working conditions, your employer's attitude towards you, or their attitude towards the environment. And there's [[room for growth|the potential for advancement or improvement]] — can you advance in your career, is there opportunity to grow not just professionally but personally, along with your relationship with your colleagues. These are all factors that should be considered above money.",
          },
        ],
      },
    ],
  },
  {
    id: "fashion-trends",
    part: 3,
    title: "Fashion",
    emoji: "👗",
    description: "Why fashion matters to some, how trends affect shopping, and how companies benefit.",
    questions: [
      {
        q: "Why is fashion important to some people?",
        answers: [
          {
            label: "Model Answer",
            text: "I think some people follow fashion to express themselves and their [[individuality|the qualities that make a person distinct]]. That way, they like to wear the latest brands and styles, and they [[take pride in|feel proud of]] looking sharp and [[put together|looking good through dressing well and having style]].",
          },
        ],
      },
      {
        q: "How do fashion trends affect the way people shop?",
        answers: [
          {
            label: "Model Answer",
            text: "[[Fashion trends|the popular styles of clothing at a particular time]] can definitely influence how we shop. For example, whenever a new trend comes out — a certain style of jeans or a pair of shoes — people who follow fashion are more likely to buy those items if they want to stay current and look [[on trend|in line with the latest fashion]]. But it's not for everyone; some people don't really care about fashion trends, and it doesn't affect their shopping behaviour.",
          },
        ],
      },
      {
        q: "How can companies benefit from fashion trends?",
        answers: [
          {
            label: "Model Answer",
            text: "Companies definitely benefit from fashion trends by using them to update their product line. They can make sure the current fashion reflects in their product development and design — for example, if they see a particular colour or style becoming popular, they can try to [[incorporate|take in or include as part of a whole]] that into their clothing lines. They should also keep an eye on what's on trend, so they're not stocking items that are no longer in demand. But it's also important to remember that fashion has a way of [[cycling back|returning to older styles again]] to older styles, so companies need to keep that in mind too.",
          },
        ],
      },
    ],
  },
  {
    id: "cities-urbanisation",
    part: 3,
    title: "Cities & Urbanisation",
    emoji: "🏙️",
    description: "Town versus city living, why young people move, urbanisation, and keeping people in the country.",
    questions: [
      {
        q: "Do people in your country tend to live in smaller towns or bigger cities?",
        answers: [
          {
            label: "Model Answer",
            text: "I'd have to say smaller towns or the countryside, because Uzbekistan is still an agricultural country. A lot of people rely on farming and agriculture for their [[livelihoods|the means of securing life's necessities]], so from that perspective I still think the majority live in the countryside or smaller towns.",
          },
        ],
      },
      {
        q: "Why do young people want to move to cities?",
        answers: [
          {
            label: "Model Answer",
            text: "It's true that young people are [[migrating to|moving to a new area to find work or a better life]] cities in search of jobs. There are better [[career opportunities|chances that move you towards your career goals]] in the cities, and a better [[nightlife|evening and late-night entertainment such as bars and clubs]], which young people tend to prefer. Young families also prefer cities because of the educational and medical facilities. These are the reasons young people are migrating to cities more and more.",
          },
        ],
      },
      {
        q: "Will urbanisation increase in the future?",
        answers: [
          {
            label: "Model Answer",
            text: "Yeah, I think it will, because the [[living standards|the level of comfort and wealth people have]] in cities are just so much higher and more convenient compared to the countryside. More and more people will start realising this, and, as I said, there are better educational and medical facilities. It's just better, even for older people, to live in cities nowadays because of the support you can get. I think that trend will continue into the future.",
          },
        ],
      },
      {
        q: "How can people be encouraged to live in the country?",
        answers: [
          {
            label: "Model Answer",
            text: "There are different ways the government can encourage people to stay in the countryside. First, they need to make sure living standards are at least equal. They need [[public amenities|facilities provided for public use, like parks and community centres]] like parks, good medical facilities, and schools. They also need career opportunities and more job vacancies in the countryside, and to ensure there's a good internet connection so people can stay connected and work from home. One last thing the government can do is promote the healthy lifestyle of the countryside by increasing [[public awareness|the public's level of understanding of an issue]] of how much healthier it is to live there. If we can create those amenities and conveniences to improve rural living standards, more and more people will probably choose to stay.",
          },
        ],
      },
    ],
  },
  /* ═══════ PART 2 — Cue cards (Describe…) ═══════ */
  {
    id: "positive-change-life",
    part: 2,
    title: "Describe a positive change in your life",
    emoji: "🏋️",
    description: "A model long-turn answer about taking up the gym and building discipline.",
    cueCard: ["What the change was", "When it happened", "How it happened", "And explain how you felt about it"],
    questions: [
      {
        q: "Describe a positive change in your life.",
        answers: [
          {
            label: "Model Answer",
            text: "Making a change is not an easy thing, but one change that has improved my life for the better is [[hitting the gym|going to a fitness or exercise facility]]. I used to be [[trapped in a sedentary lifestyle|stuck in a way of living with very little physical activity]], [[indulging in unhealthy food choices|regularly eating foods that are bad for you]]. But that's all in the past now.\n\nSince I decided to take my health seriously, things have [[taken a turn for the better|experienced a positive change or improvement]]. I've got more energy, and I [[kickstart my day|begin the day with energy and enthusiasm]] with a morning workout. It's like [[a shot of positivity|a boost of optimism]] that keeps me going.\n\nWhat's really cool is that the gym has brought some [[structure to my life|organisation and order in daily activities]]. It's not just about lifting weights; it's about [[setting a routine|establishing a fixed schedule of activities]]. This [[newfound discipline|a recently acquired ability to control your actions]] has helped me manage my time and responsibilities better.\n\nAnd you won't believe the impact it's had on my [[mental well-being|the state of your psychological and emotional health]]. I'm more focused, less stressed, and I'm even [[tackling challenges|dealing with difficult tasks]] with more confidence. Every time I look in the mirror, I see a changed man moving forward, and that gives me a lot of confidence. I actually regret not taking up this habit way earlier, but as they say, [[better late than never|it is preferable to do something late than not at all]].",
          },
        ],
      },
    ],
  },
  {
    id: "waiting-for-something-nice",
    part: 2,
    title: "Describe a time when you waited for something nice",
    emoji: "⚽",
    description: "A model long-turn answer about waiting to see Cristiano Ronaldo play live.",
    cueCard: ["What you waited for", "How long you waited", "Why you were looking forward to it", "And explain how you felt while waiting"],
    questions: [
      {
        q: "Describe a time when you waited for something nice to happen.",
        answers: [
          {
            label: "Model Answer",
            text: "Amazing things are [[worth the wait|valuable enough to justify a long wait]]. Since Cristiano Ronaldo switched clubs, I've been looking forward to the start of the Asian Champions League, because there was a [[slim chance|a very low probability]] that his team might [[get drawn in the same group|be selected to compete together in a tournament]] as my local team — which has turned out to be the case.\n\nThat's just [[straight out of a movie|so extraordinary it seems like it's from a film]]. I mean, Ronaldo's coming to my town. I've been a massive fan of his forever, and this is a [[once-in-a-lifetime opportunity|a rare chance that may never come again]].\n\nThe moment I learnt about this, I rushed to buy a ticket for the match. But [[here's the catch|here is the drawback or complication]] — it cost me three times the usual price. Was it worth it? Absolutely. When you're talking about seeing your idol [[in the flesh|in person, rather than on a screen]], it's a [[no-brainer|a very obvious, easy decision]].\n\nI can't even [[put into words|express something that is beyond description]] how I'm feeling about the prospect of finally meeting him. The excitement is [[through the roof|at an extremely high level]]. It's not just a game; it's a chance to watch Ronaldo [[up close|in close proximity]] and maybe, just maybe, get a chance to say hello. The days leading up to the match [[feel like forever|seem to last a very long time]], but I know it's going to be a memory for a lifetime.",
          },
        ],
      },
    ],
  },
  {
    id: "bad-service",
    part: 2,
    title: "Describe a time when you received bad service",
    emoji: "🍽️",
    description: "A model long-turn answer about a beloved but poorly-run plov centre.",
    cueCard: ["Where it happened", "What the poor service was", "What you did", "And explain how you felt about it"],
    questions: [
      {
        q: "Describe a time when you received bad service at a restaurant or shop.",
        answers: [
          {
            label: "Model Answer",
            text: "Let me [[preface|give context before starting a discussion]] this by telling you that I'm [[a real sucker for|someone with a strong craving for]] plov, and I eat it in the same place at least twice a week. The plov centre is called SamOsh, which has become a sort of [[guilty pleasure|something enjoyable that you feel slightly ashamed to enjoy]] for me — because they serve the most [[mouthwatering|extremely delicious and appetising]] plov you can imagine, but with really terrible service.\n\nHere's the catch: this place is always [[jam-packed|crammed and filled to capacity]]. It's like the entire town knows about their plov magic, so just finding a table is a challenge in itself. You often end up sharing a table with strangers, which can be cosy or chaotic depending on your perspective.\n\nTheir service [[leaves a lot to be desired|is not nearly as good as it should be]]. It's known for being [[lacklustre|lacking energy or quality]], [[to say the least|to put it mildly]]. On one memorable occasion, I waited for my plov for [[what felt like an eternity|a period that seemed exceptionally long]]. It was as if they'd [[misplaced my order|lost track of what I ordered]], and I was [[growing impatient|becoming increasingly restless from waiting]]. But I knew the reward would be worth it. Finally, when my plate of delicious plov arrived, I couldn't have been happier — that was until I found a free table. Just as I was about to sit down, a stranger [[swooped in|arrived suddenly and decisively]] and took the chair right in front of me, which was a little [[baffling|puzzling and confusing]] because there were plenty of other empty tables around.\n\nDespite these regular [[service hiccups|temporary problems in the quality of service]] and the overcrowding, I keep returning — and that's because of their incredible plov. The same is true for most of their other regular customers.",
          },
        ],
      },
    ],
  },
  {
    id: "sportsperson-admire",
    part: 2,
    title: "Describe a sportsperson you admire",
    emoji: "🏀",
    description: "A model long-turn answer about Stephen Curry.",
    cueCard: ["Who this person is", "What sport they play", "What you know about them", "And explain why you admire them"],
    questions: [
      {
        q: "Describe a sportsperson you admire.",
        answers: [
          {
            label: "Model Answer",
            text: "I've always been into sport and [[dabbled in|engaged casually in]] different kinds of sports when I was a child. These days I often watch football — I don't think there's a better sport — but [[every now and then|occasionally; from time to time]] I find myself watching basketball, and today I want to talk about a legend of the game, [[none other than|no one else but]] Stephen Curry. What I admire most about him is his incredible three-point shooting ability. He's not just good; he's the best in the game, and his records [[speak for themselves|are clear and need no further explanation]].\n\nWhat's even more fascinating is how he's achieved such greatness despite being shorter than most of his basketball peers. In a sport where [[height often rules|taller players usually have the advantage]], he's shown that skill and hard work can [[overcome physical limitations|triumph over physical disadvantages]]. It's a [[classic underdog story|a typical tale of someone succeeding against the odds]] that's truly inspiring.\n\nCurry's impact on basketball is [[immense|extremely large and significant]]. He's right up there with legends like Kobe Bryant and LeBron James, and he's a [[true icon of the sport|a person revered as a symbol of excellence]]. What's even more intriguing is the comparison people make between Curry and Lionel Messi — both are considered naturally gifted athletes who [[make the extraordinary look easy|perform very difficult things with apparent ease]]. What makes Curry a [[phenomenon|a remarkable, exceptional individual]] [[by all accounts|according to all available reports]] is the legacy he's built and his impact on the game. For me, he's even better than LeBron James.",
          },
        ],
      },
    ],
  },
  {
    id: "computer-problem",
    part: 2,
    title: "Describe a problem you had with a computer",
    emoji: "🖥️",
    description: "A model long-turn answer about blue-screen trouble after switching to Windows.",
    cueCard: ["What the problem was", "When it happened", "How you solved it", "And explain how you felt about it"],
    questions: [
      {
        q: "Describe a problem you had with a computer or a piece of equipment.",
        answers: [
          {
            label: "Model Answer",
            text: "I've got a computer woe to share. It wasn't a [[hardware glitch|a fault in the physical components]] but a [[software hiccup|a minor issue in a program's functioning]]. You see, I [[switched from|changed over from one thing to another]] my trusty MacBook to a Windows laptop, and that's when the trouble started. When I [[fired up|started or activated]] the new laptop, the screen would turn blue, and then the [[darn thing|a frustrated way of referring to a device]] would restart itself.\n\nNaturally, I [[hit up|informally went to for help]] YouTube and read some blogs, hoping to [[find a quick fix|discover a speedy solution]]. [[It turns out|as it unexpectedly emerged]], I wasn't the only one facing this issue — it's a common hiccup among Windows users. The [[culprit|the cause or source of the problem]], it seems, was incompatible drivers or software conflicts, which were causing those annoying blue screens and restarts. I never had these troubles with my MacBook; it was known for its stable OS, and I miss that simplicity.\n\nSo, following the advice of trusty [[tech-savvy geeks|people highly knowledgeable about technology]], I updated drivers, ran an antivirus scan, and tested the memory and hard drive. It turned out to be a driver issue, so I updated it. Problem solved, and my laptop [[ran smoothly again|resumed working without any issues]].",
          },
        ],
      },
    ],
  },
  {
    id: "advice-you-gave",
    part: 2,
    title: "Describe a piece of advice you gave to someone",
    emoji: "🎓",
    description: "A model long-turn answer about advising a college-bound student.",
    cueCard: ["Who you gave advice to", "What the advice was", "Why you gave it", "And explain how they responded"],
    questions: [
      {
        q: "Describe a piece of advice you gave to someone.",
        answers: [
          {
            label: "Model Answer",
            text: "I'll be honest, giving advice is a [[tricky business|a complex and challenging matter]]. It's easy to get it wrong by letting our own [[biases|prejudices that favour one perspective]] [[creep in|gradually and unnoticed enter or influence]], so I usually [[shy away from|avoid due to hesitation]] giving advice.\n\nBut here's the thing. As an IELTS instructor, I have students who often [[turn to me for guidance|seek advice and assistance from me]]. So when a [[college-bound student|a student preparing to enter higher education]] came to me, I had to [[step up|take on the responsibility]].\n\nI advised them to [[set clear goals|define specific, well-structured objectives]], both short-term and long-term, for their college journey. I told them to explore their passions and make sure their chosen field [[aligned with their dreams|was in harmony with their aspirations]]. I also encouraged them to get involved in college clubs and organisations, and I emphasised the importance of time management and staying organised.\n\nI [[couldn't help but|felt compelled to]] recommend a fantastic book by Cal Newport on excelling in college — something that had been a [[game-changer|something that significantly changes a situation]] for me during my own college years. But the real [[nugget of advice|a particularly valuable piece of advice]] I gave was about seeking academic support and building a network early on. Most high schoolers don't realise that college life can be [[demanding|requiring a lot of effort and energy]], and these things can [[make a big difference|have a substantial impact]]. Hopefully, with my advice, his college life will be a lot easier than mine.",
          },
        ],
      },
    ],
  },
  {
    id: "successful-business-person",
    part: 2,
    title: "Describe a successful business person you know",
    emoji: "📦",
    description: "A model long-turn answer about a 19-year-old dropshipping entrepreneur.",
    cueCard: ["Who this person is", "What business they do", "How you know them", "And explain why they are successful"],
    questions: [
      {
        q: "Describe a successful business person you know.",
        answers: [
          {
            label: "Model Answer",
            text: "Running a successful business is [[no small feat|a significant, impressive accomplishment]]. The person I want to talk about is a [[real standout|a truly exceptional individual]], because he has a [[thriving business|a highly successful, prospering enterprise]] at the age of 19 — and he's my student. He's into dropshipping and [[runs a logistics firm|manages a delivery company]], and it's truly impressive how he makes it all work.\n\nFirst off, he's just 19 and still a student, which makes his achievements even more [[jaw-dropping|astonishing and incredibly impressive]]. With dropshipping, he's got a [[keen sense for|a strong intuition for]] [[spotting trending products|identifying items that are currently popular]] and using digital marketing to [[reach customers worldwide|connect with a global customer base]]. It's like he's got a sixth sense for [[what's hot in the market|what is popular or sought after right now]]. From that alone he makes a decent amount of money, and the dropshipping is more of a [[side hustle|a secondary source of income]].\n\nBut that's not all. He also runs a logistics firm that ensures smooth delivery of goods from all over the world. What really [[gets me|astonishes or impresses me]] is how he balances all of this with his studies. It's a lot to [[juggle|manage multiple responsibilities at once]], but he's doing it with style. His success story is [[nothing short of|absolutely; without a doubt]] inspiring. I'm sure with his work ethic and [[foresight|the ability to anticipate and plan for the future]], he'll achieve greater heights [[down the line|in the future; over time]].",
          },
        ],
      },
    ],
  },
  {
    id: "beautiful-city",
    part: 2,
    title: "Describe a beautiful city you have visited",
    emoji: "🌉",
    description: "A model long-turn answer about San Francisco.",
    cueCard: ["Which city it is", "When you visited", "What you did there", "And explain why you think it is beautiful"],
    questions: [
      {
        q: "Describe a beautiful city you have visited.",
        answers: [
          {
            label: "Model Answer",
            text: "San Francisco, in my [[limited travel experience|not having travelled very extensively]], is [[hands down|without a doubt; unquestionably]] the most beautiful city I've visited. I haven't been to a ton of places yet — just a few cities in Uzbekistan and quick trips to Istanbul and Almaty — but let me tell you why San Francisco [[takes the top spot|is ranked as the best]] for me.\n\nFirst, the Golden Gate Bridge is a [[showstopper|something exceptionally impressive]]. It's not just a bridge; it's an [[icon|a symbol representing something notable]]. Covered in that famous International Orange, it [[stands out against|is noticeably distinct compared to]] the bay's blue waters, especially when it's [[a bit misty|slightly foggy or hazy]]. I remember just standing there and thinking, wow. It's a sight you won't forget.\n\nAnd the city's architecture is [[something else|exceptional; extraordinary]]. Those Victorian houses with their colourful paint and [[intricate designs|complex and detailed patterns]] are like something out of a storybook. You've got places like Alamo Square with the Painted Ladies, and Lombard Street, which is like a [[real-life rollercoaster road|a winding, steep street like a theme-park ride]]. Plus, the city's [[hilly landscape|an area with many slopes and elevations]] means you get [[stunning views|extremely beautiful vistas]] around almost every corner.\n\nNow I've got a real [[itch to|strong desire to]] go back, and maybe even live there someday. It's not just about the pretty sights; San Francisco is a [[hub of creativity and innovation|a central place for dynamic creative activity]]. It's got this amazing [[mix of|a combination or blend of]] cultures, and the energy in the city is [[infectious|spreading enthusiasm to others]]. So it's not just the scenery; it's the [[whole package|every aspect considered together]] that makes me want to go back and call it home.",
          },
        ],
      },
    ],
  },
  {
    id: "person-interesting-ideas",
    part: 2,
    title: "Describe a person who has interesting ideas",
    emoji: "🧠",
    description: "A model long-turn answer about a friend full of original thinking.",
    cueCard: ["Who this person is", "How you know them", "What interesting ideas they have", "And explain why their ideas are interesting"],
    questions: [
      {
        q: "Describe a person who has interesting ideas or opinions.",
        answers: [
          {
            label: "Model Answer",
            text: "I've got this friend of mine, Muhammadali, and he's not your typical [[try-hard|someone who makes excessive efforts to seem impressive]] when it comes to being interesting. He's just naturally [[loaded with|having an abundance of]] intriguing ideas.\n\nLet me give you a couple of examples. We were chatting about time management, and instead of the usual stuff, he [[throws this curveball|presents an unexpected, unconventional idea]]: manage your energy, not your time. It sounded weird at first, but it totally [[makes sense|is logical and reasonable]]. He said we should do tasks when we're naturally more energetic, and it [[just clicked for me|I suddenly understood it]].\n\nThen, talking about travel, he [[brings up this concept|introduces this particular idea]] he calls intentional travel. It's not about solo or group travel; it's about [[setting intentions for|establishing specific goals for]] your trip, like personal growth or cultural immersion. It [[adds a whole new layer of purpose to|brings a fresh, deeper sense of meaning to]] your adventures.\n\nBut it's not just talk with Muhammadali; he [[walks the talk|acts in a way consistent with his words]]. He challenges us to see the world differently and [[embraces fresh perspectives|welcomes new points of view]]. Spending time with him is like a crash course in creative thinking. He's [[one of a kind|unique; unlike anyone else]].",
          },
        ],
      },
    ],
  },
  {
    id: "interesting-place-country",
    part: 2,
    title: "Describe an interesting place in your country",
    emoji: "🏔️",
    description: "A model long-turn answer about the Cave of Tamerlane in Uzbekistan.",
    cueCard: ["Where it is", "How you know about it", "What it is like", "And explain why it is interesting"],
    questions: [
      {
        q: "Describe an interesting place in your country.",
        answers: [
          {
            label: "Model Answer",
            text: "Uzbekistan is a [[treasure trove of|a place with many wonderful things]] interesting destinations, and there's this [[hidden gem|a fantastic place that's not well known]] known as the Cave of Tamerlane, or Amir Temur Guragani. It's [[tucked away|hidden in a quiet spot]] in the Gissar Mountains, right in the Yakkabag district of the Kashkadarya region.\n\nGetting there is like [[stepping into|walking into; entering]] an adventure movie. You follow this [[winding trail|a curvy path or route]] with stone steps that takes you down into a [[stunning canyon|an incredibly beautiful rocky valley]]. This canyon goes on for about six miles and is surrounded by [[towering rock formations|very tall natural rock structures]] that look [[straight out of a movie|as if they're from a film]], kind of like the film Gold of the Mackenna.\n\nWhen you finally reach the entrance of the cave, it's this massive archway, almost like a gateway into another world. Inside, [[you're in for a treat|you'll have a delightful experience]]. The cave is a wonderland of [[strange formations|unusual, peculiar shapes]] that look like jellyfish, and beautiful stalactites.\n\nThere's this cool legend that says the cave was a [[secret hideout|a hidden place for privacy]] for Tamerlane and his men as they [[geared up for military campaigns|got ready for battles and wars]] — though not everyone's convinced by that story. After going to the cave, I was honestly [[blown away|extremely impressed]]. The [[sheer beauty|absolute, pure beauty]] and deep history of the place left me [[pretty amazed|feeling very astonished]].",
          },
        ],
      },
    ],
  },
  {
    id: "useful-advertisement",
    part: 2,
    title: "Describe a useful advertisement you have seen",
    emoji: "🎧",
    description: "A model long-turn answer about a podcast ad for a health supplement.",
    cueCard: ["Where you saw it", "What it was for", "What it was about", "And explain why you found it useful"],
    questions: [
      {
        q: "Describe a useful advertisement you have seen.",
        answers: [
          {
            label: "Model Answer",
            text: "I had this interesting experience with a particularly useful advertisement for Athletic Greens vitamins. It happened when I was listening to Tim Ferriss's podcast. I have to admit, I'm usually [[in the habit of|having a regular practice of]] skipping ads, especially when I'm using an app like Snipd. But on this occasion, something made me stop and actually pay attention.\n\nTim Ferriss was talking about Athletic Greens, and it [[caught my ear|attracted my attention]] because he mentioned something that [[struck a chord with me|resonated and evoked a strong response in me]]. He spoke about how, despite his best efforts, he was [[lacking in|experiencing a deficiency of]] some crucial nutrients. It [[got me thinking|provoked thought]] about my own diet and health.\n\nFor the first time, instead of [[fast-forwarding through the ad|skipping the advertisement to reach the content]], I decided to listen in. And it wasn't just me — a lot of people were discussing Athletic Greens. It [[had this buzz around it|generated excitement and attention]], almost like a shared secret among the podcast's listeners.\n\nSo I thought, why not [[give it a shot|try it]]? I purchased Athletic Greens, and it's been a [[game-changer|something that significantly improves a situation]] for my health. It was a useful advertisement because it provided valuable information about something I genuinely needed but might not have discovered otherwise.",
          },
        ],
      },
    ],
  },
  {
    id: "difficult-task",
    part: 2,
    title: "Describe a difficult task you completed",
    emoji: "🎤",
    description: "A model long-turn answer about giving a TEDx talk.",
    cueCard: ["What the task was", "When you did it", "Why it was difficult", "And explain how you felt after completing it"],
    questions: [
      {
        q: "Describe a difficult task you completed.",
        answers: [
          {
            label: "Model Answer",
            text: "For the majority of people, speaking in public is their top fear, and so was mine — and that's what I want to talk about today. You might think giving a TED talk is quite an achievement, and it used to be. However, it seems like [[everyone and their grandma|a huge number of people]] has given a TED talk these days, and it's [[lost some of its shine|diminished in value and impressiveness]]. But let me tell you, it was still a [[challenging experience|a difficult and demanding situation]].\n\nThe difficulty began with coming up with unique and engaging ideas. With so many TED talks out there, finding a topic that hadn't been [[exhausted|used up completely]] was [[no small feat|a significant accomplishment]]. I wanted something fresh, something that could genuinely [[captivate the audience|hold the attention of the listeners]] and [[offer a different perspective|provide an alternative point of view]].\n\nThe pressure was real. Giving a TEDx talk in front of your peers and teachers can be [[nerve-wracking|extremely stressful and anxiety-inducing]]. There was the expectation to [[deliver something exceptional|provide something of outstanding quality]], and I didn't want to disappoint.\n\nBut in the end, I managed to come up with a topic I was passionate about and that I thought could [[resonate with my audience|create a strong connection with the listeners]]. The process of researching, [[crafting the talk|carefully composing the speech]], and rehearsing was demanding, but incredibly rewarding. Even though it felt like TED talks were [[a dime a dozen|very common and easy to find]] at my school, the experience taught me a lot about public speaking and the importance of sharing ideas that matter. Looking back, I can tell it was [[no walk in the park|a task that was far from easy]].",
          },
        ],
      },
    ],
  },
  {
    id: "foreigner-your-language",
    part: 2,
    title: "Describe a foreigner who speaks your language well",
    emoji: "🗣️",
    description: "A model long-turn answer about the US ambassador speaking Uzbek.",
    cueCard: ["Who this person is", "How you know them", "Why they learned your language", "And explain how you felt about it"],
    questions: [
      {
        q: "Describe a foreigner you know who speaks your language well.",
        answers: [
          {
            label: "Model Answer",
            text: "When someone wants to [[pick up a language|learn or acquire a new language]], they won't usually say I want to learn Uzbek, so it's not that common for me to see foreigners speak my mother tongue. But I've seen a few online.\n\nOne such person is the US ambassador. I've never met him in person, but I've seen many videos of him congratulating people from Uzbekistan on [[various occasions|different events or situations]]. Let me tell you, it's quite impressive how well he speaks Uzbek, especially considering it's not the most widely spoken language in the world.\n\nNot only does he speak Uzbek, but he does it with a really nice accent. Hearing someone speak your mother tongue, especially when their native language is something as widely spoken as English, has [[turned out to be|developed into; resulted in]] a [[delightful experience|a highly enjoyable encounter]]. It's like listening to a friend from your own country. His pronunciation is [[on point|very accurate and precise]], and he sounds genuinely comfortable with the language, which [[adds a personal touch|makes it more individual and intimate]] to his messages.\n\nI'm usually used to hearing foreign ambassadors speak in English or through interpreters, so this was a pleasant surprise. You can tell he's making a [[genuine effort|sincere and authentic attempt]] to [[connect with|build a meaningful relationship with]] the people of Uzbekistan. I understand he might be [[reading from a teleprompter|reciting a script displayed on a device]], but the fact that he's taking the time to [[engage with|interact and involve himself with]] the local population in their own language is a really great [[gesture|an action that conveys a feeling or intention]]. It shows a lot of [[respect and goodwill|positive regard and good intentions]], and it definitely [[goes a long way|has a significant impact]] in building positive relations between the two countries. So [[kudos to him|praise and credit to him]].",
          },
        ],
      },
    ],
  },
  {
    id: "activity-made-tired",
    part: 2,
    title: "Describe an activity that made you feel tired",
    emoji: "🥾",
    description: "A model long-turn answer about an exhausting mountain hike.",
    cueCard: ["What the activity was", "When and where you did it", "Who you did it with", "And explain why it made you feel tired"],
    questions: [
      {
        q: "Describe an activity that made you feel tired.",
        answers: [
          {
            label: "Model Answer",
            text: "The two activities I do most often that leave me [[feeling exhausted|in a state of extreme tiredness]] are football and tennis, which I play every week. But today I want to talk about a recent adventure that totally [[wore me out|made me very tired and drained]] — I went [[hiking|walking in natural, hilly terrain for leisure]] with some friends in the nearby mountains, and let me tell you, it was a real [[energy-zapper|an activity that significantly drains your energy]].\n\nWe hit the trailhead early in the morning, all [[pumped up|feeling excited and full of energy]] and [[full of excitement|filled with anticipation]]. The hike started off pretty easy, with [[well-marked paths|clearly defined, easy-to-follow trails]] and [[picturesque scenery|beautiful, visually attractive landscapes]]. But as we climbed higher, the [[terrain got steeper|the ground became more uphill and harder]] and more challenging. It felt like a never-ending stair-climbing contest, and my legs were [[on the verge of mutiny|close to rebelling against further effort]].\n\nThe [[fatigue|extreme tiredness or weariness]] started [[kicking in|beginning to take effect]] around the halfway mark. My legs turned into jelly, and I was huffing and puffing like a steam engine. We had to take frequent breaks just to catch our breath and sip water. At one point I even thought about turning back, but my friends didn't let me.\n\nWhen we finally [[reached the summit|arrived at the highest point]], it was a mix of exhaustion and exhilaration. The view was [[absolutely breathtaking|incredibly stunning and awe-inspiring]], and I realised all the hard work had been worth it. We sat there for a while, enjoying the scenery and [[refuelling with some snacks|replenishing our energy with food]]. The hike back down was easier on the legs, but I was still [[wiped out|extremely tired]] when we reached the trailhead again. I could barely move, but the sense of accomplishment and the beautiful memories [[made it all worthwhile|justified all the effort and fatigue]].",
          },
        ],
      },
    ],
  },
  {
    id: "successful-person-know",
    part: 2,
    title: "Describe a successful person you know",
    emoji: "🩺",
    description: "A model long-turn answer about an uncle who is a surgeon and community hero.",
    cueCard: ["Who this person is", "How you know them", "What they do", "And explain why you think they are successful"],
    questions: [
      {
        q: "Describe a successful person you know.",
        answers: [
          {
            label: "Model Answer",
            text: "Success means different things to different people. I believe it's not just about money, and I want to tell you about my uncle, who's a [[real standout|a truly exceptional individual]] in our town. He's what I'd call a [[well-rounded success story|a person successful in many aspects of life]].\n\nMy uncle is [[the talk of the town|a widely discussed, popular figure locally]], and not just because he's an amazing surgeon. He's got a reputation that [[stretches far and wide|extends over a wide area]], thanks to his skill and precision in the operating room. People travel from all over just to get treated by him. What's even more impressive is that his success extends beyond his personal achievements.\n\nHe's not just about making money. He's set up a clinic that offers [[affordable healthcare|reasonably priced, accessible medical care]] to those who can't easily access it. He's all about giving back. He's not just a [[medical whiz|someone highly skilled in medicine]] — I can safely say he's a real community hero, because he's [[big on|strongly committed to]] supporting education and [[health awareness initiatives|efforts to educate people about health]]. He's always putting together free medical camps to teach people about staying healthy.\n\nAnd here's the best part: he's a mentor to young folks aiming to [[make it in healthcare|succeed in the healthcare profession]]. He doesn't just [[hoard his knowledge|keep his knowledge without sharing it]]; he shares it generously, helping others on their journey. I believe that if there are more people who [[strive to make a positive impact|work purposefully to create a beneficial effect]] on the lives of others besides achieving results in their own fields, we can call them successful in [[every sense of the word|in every possible meaning]].",
          },
        ],
      },
    ],
  },
  {
    id: "exciting-adventure",
    part: 2,
    title: "Describe an exciting adventure you did with someone",
    emoji: "🚣",
    description: "A model long-turn answer about trying rowing on a Tashkent canal.",
    cueCard: ["What it was", "Who you did it with", "Where you did it", "And explain why it was exciting"],
    questions: [
      {
        q: "Describe an exciting adventure you did with someone.",
        answers: [
          {
            label: "Model Answer",
            text: "I usually don't [[engage in exciting activities|take part in thrilling pursuits]], but this one time is worth sharing. A friend of mine and I were [[itching to|eager and restless to]] try something different, to [[break away from our usual routines|depart from our typical daily habits]], and we [[stumbled upon|discovered by chance]] the idea of rowing.\n\nWe thought, why not [[give it a shot|try it]]? Neither of us had ever tried rowing before, so we were naturally curious about dipping our oars into the world of water sports. But here's the thing that got us at first — the cost of the equipment. Rowing can be a bit expensive; you need a boat, oars, all the safety gear, and it [[adds up|accumulates over time]]. However, we thought of it as an investment, not just in equipment but in ourselves — a chance to explore a unique activity, get fit, and enjoy nature, [[all rolled into one|combining several things into a single experience]].\n\nWe picked a fantastic spot for our [[escapade|an adventurous, daring experience]]: a beautiful canal right in the heart of Tashkent. Surrounded by [[lush greenery|abundant, vibrant plant life]], it was a peaceful getaway from the city's [[hustle and bustle|the noisy, busy activity of a place]]. As we set off, I was pleasantly surprised by the [[serenity|calm, peace and tranquillity]] of the water and the sheer effort it took to navigate our boat. Rowing turned out to be quite a physical challenge, but also incredibly satisfying.\n\nThe best part is that this whole experience made me appreciate the value of trying new things. Sure, the initial cost was [[a bit of a hit|slightly costly]], but the adventure and all the learning that came with it totally justified the expense. It taught me the power of [[stepping out of my comfort zone|moving beyond my familiar, secure routine]], [[embracing|accepting and welcoming]] fresh experiences, and realising how enriching it can be.",
          },
        ],
      },
    ],
  },
  {
    id: "period-of-history-interested",
    part: 2,
    title: "Describe a period of history you are interested in",
    emoji: "🕌",
    description: "A model long-turn answer about the Islamic Golden Age.",
    cueCard: ["Which period it is", "How you learned about it", "What happened during it", "And explain why you are interested in it"],
    questions: [
      {
        q: "Describe a period of history you are interested in.",
        answers: [
          {
            label: "Model Answer",
            text: "I've always been really [[intrigued by|curious and interested in]] Islam, and I want to feel more connected to it, since I started experiencing a sort of identity crisis lately. I've heard [[bits and pieces|small fragments of information]] about the Islamic Golden Age, and it seems like such a [[fascinating|extremely interesting and captivating]] period. But I've got this feeling that I'm not really connected to the religion, so I think it would be amazing to [[dive into|become fully involved in]] the Islamic Golden Age and learn more about it.\n\nThe Islamic Golden Age, which spanned from around the 8th to the 13th century, was an incredible time. There were [[major breakthroughs|significant advances or discoveries]] in maths, astronomy, medicine, and philosophy. And what's really cool is that scholars from different backgrounds and cultures [[came together|gathered and united]] to share ideas. It was like [[a hub|a central point where ideas converge]] of knowledge exchange.\n\nOne thing that [[stands out|is noticeably exceptional]] for me is the House of Wisdom in Baghdad. It was the ultimate knowledge-sharing spot, translating and [[preserving|protecting and maintaining in original state]] works from all sorts of ancient civilisations — Greek, Roman, Persian, and Indian. That's some serious cross-cultural [[brainpower|intellectual capacity]] right there.\n\nSo I'm thinking that by digging deeper into the Islamic Golden Age, I can really [[get a sense of|understand or perceive]] what was going on back then and, at the same time, [[feel connected|experience a sense of belonging]] to my religion. It's not just about expanding my knowledge; it's about strengthening my connection with this important part of my [[heritage|the traditions and values passed down through generations]]. And who knows, it might even [[challenge some of the stereotypes|question widely held oversimplified beliefs]] I have about that time. It's a journey I'm totally looking forward to.",
          },
        ],
      },
    ],
  },
  /* ═══════ From mock tests — Test One (Day 1) & Test Three (Day 3) ═══════ */
  {
    id: "chocolate",
    part: 1,
    title: "Chocolate",
    emoji: "🍫",
    description: "Whether you like chocolate, your favourite flavour, and chocolate as a gift.",
    questions: [
      {
        q: "Do you like eating chocolate?",
        answers: [
          {
            label: "Model Answer",
            text: "To be honest, I don't really have [[a sweet tooth|a strong liking for sugary food]], so I wouldn't say I'm too [[big on|very fond of]] eating chocolate. I do enjoy it from time to time and it can be a great treat, but like I said, I'm not the biggest fan of chocolate.",
          },
        ],
      },
      {
        q: "What's your favorite flavor?",
        answers: [
          {
            label: "Model Answer",
            text: "As I said, I'm not too big on having chocolate every day, so I don't really have specific preferences for different flavours. I can go for any flavour I'm [[in the mood for|feeling like having at the time]], or whatever my kids are having — if they share their milk or white chocolate with me, I'm fine with it. Occasionally I do [[get a craving for|feel a strong desire for]] dark chocolate, so that could be my favourite, so to speak, though I don't really have strong preferences.",
          },
        ],
      },
      {
        q: "Do you think it is good to use chocolate as gifts to others?",
        answers: [
          {
            label: "Model Answer",
            text: "Well, yes and no. Yes, because some people really like chocolate, so it could be a nice gift for them. But we should also consider the preferences and needs of the people we're giving gifts to. Sometimes chocolate may not be the best choice for everyone, especially if they have certain health issues, so we have to be [[mindful of|conscious and considerate of]] that.",
          },
        ],
      },
    ],
  },
  {
    id: "singing-self-expression",
    part: 1,
    title: "Singing & Self-expression",
    emoji: "🎙️",
    description: "Whether you like singing, learning to sing, who you sing for, and singing and happiness.",
    questions: [
      {
        q: "Do you like singing?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, I do. I definitely like singing, because it's a form of [[self-expression|showing your own feelings and personality]], and I enjoy it when I'm alone or with friends in a karaoke bar. We tend to sing our favourite songs, and sometimes I sing along to whatever I'm listening to in my car. It just feels great — you can [[put all your emotions out|release all your feelings openly]] and have fun with it.",
          },
        ],
      },
      {
        q: "Have you ever learned how to sing?",
        answers: [
          {
            label: "Model Answer",
            text: "No, I haven't. I've never taken any formal lessons, and I've never joined a band or a choir — apart from the music lessons at school. It must have been in my middle-school years when we had once-a-week music lessons, but I don't really remember learning anything there.",
          },
        ],
      },
      {
        q: "Who do you want to sing for?",
        answers: [
          {
            label: "Model Answer",
            text: "It's an interesting question. I don't really sing for anybody in particular — it's just a form of self-expression. Singing helps me [[relieve the tension|release built-up stress]] and control my emotions. Sometimes I sing children's songs for my kids, if that counts, and sometimes at karaoke I sing for my friends, because for [[an amateur singer|someone who sings without being professional]] I do have a great voice — at least that's what they tell me.",
          },
        ],
      },
      {
        q: "Do you think singing can bring happiness to people?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, singing can definitely [[cheer people up|make people feel happier]], because it's about expressing yourself freely and putting your emotions out there — being [[vulnerable|open and exposed emotionally]], basically. Singing makes you feel vulnerable and human, and in that respect it somehow makes you happier, because that's when we start feeling really content with ourselves. It's natural, and singing is one of those activities that can give you this river of emotions.",
          },
        ],
      },
    ],
  },
  {
    id: "historical-period-learn-more",
    part: 2,
    title: "Describe a historical period you would like to know more about",
    emoji: "🚀",
    description: "A model long-turn answer about the Cold War, the Space Race and chess.",
    cueCard: ["When it was", "What you are interested in", "What you already know", "And explain why you would like to know more"],
    questions: [
      {
        q: "Describe a historical period you would like to know more about.",
        answers: [
          {
            label: "Model Answer",
            text: "The historical period I'd like to know more about is the Cold War. I'm particularly fascinated by two specific areas of that period: the Space Race and chess competitions, both of which were a [[symbol|something that represents something with deeper meaning]] of the great technological and intellectual battle between the United States, representing the western world, and the USSR, the eastern world.\n\nSince I'm a big fan of chess, I know pretty much all the history of the game and how it was used as [[a tool of propaganda|something used to promote a political cause, often in a biased way]] by the two governments. So I'd very much like to learn more about the other competition, the Space Race. I already have the general understanding of it, but I'd like to know more about the [[behind-the-scenes|happening away from public view]] details — the great technological achievements like the Apollo program, and the political decisions that may have [[shaped|given form to; influenced]] the very nature of this competition.\n\nAnother thing I think is quite important to understand is the [[shift from|change or movement from one state to another]] competition to cooperation, which resulted in great global space-exploration projects such as the International Space Station.\n\nSo in summary, even though the Cold War is [[widely known for|famous and recognised for]] shaping the current global stage and international relations — which could be a superb topic to [[dive into|start exploring with enthusiasm]] — my fascination [[has more to do with|is more closely connected with]] these two specific areas, and how this competition [[paved the way for|prepared for and made possible]] the modern science we know today.",
          },
        ],
      },
    ],
  },
  {
    id: "history-and-learning",
    part: 3,
    title: "History & Learning",
    emoji: "📜",
    description: "Whether everyone should know history, how children learn it, and protecting old buildings.",
    questions: [
      {
        q: "Should everyone know history?",
        answers: [
          {
            label: "Model Answer",
            text: "Yeah, I believe it's quite [[crucial|extremely important or necessary]] for everyone to have a certain understanding of history. By studying the past, we can gain valuable [[insight|a deep and clear understanding of something]] into how previous events have [[shaped|influenced the form and development of]] the world we live in today, avoid the mistakes of the past, and make an [[informed choice|a decision made after careful consideration of the facts]] in the future.",
          },
        ],
      },
      {
        q: "In what ways can children learn history?",
        answers: [
          {
            label: "Model Answer",
            text: "There are many different methods that could be employed. A traditional but still [[relevant|having a direct bearing on the matter]] approach is studying history through textbooks, which can still be quite valuable. However, a more [[hands-on approach|a method that involves doing rather than just reading]] can be more effective in engaging children and sparking their interest — for example, visiting historical sites or museums can give children first-hand experience of the past. In addition, we shouldn't forget technological advancements: there are apps and [[interactive|involving active participation rather than just watching]] educational videos that can make learning history more accessible for children.",
          },
        ],
      },
      {
        q: "Is it hard to protect historical buildings?",
        answers: [
          {
            label: "Model Answer",
            text: "Preserving historical buildings can be a challenge, especially when we consider the high costs involved. But on the whole, I think it's important to preserve these buildings, as they provide a [[tangible connection|a real, physical link you can see and touch]] to the past and offer great educational value. It's just a matter of balancing the costs with the [[cultural significance|the importance something has due to its ties to a culture]] of the building. For example, [[iconic landmarks|structures considered a symbol of a place or period]] such as the Great Wall of China or the Pyramids of Giza should be preserved despite the expense, no matter the cost, because the cultural and educational benefits justify their [[preservation|keeping something safe and unchanged over time]].",
          },
        ],
      },
    ],
  },
  {
    id: "art-p1",
    part: 1,
    title: "Art",
    emoji: "🎨",
    description: "Whether you like art, drawing as a kid, visiting galleries, and art in your room.",
    questions: [
      {
        q: "Do you like art?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, I do. I'm actually fascinated by all forms of art — drawing, painting, sculpture, dance, music, [[you name it|and anything else you could mention]].",
          },
        ],
      },
      {
        q: "Did you learn drawing when you were a kid?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, I did. I remember taking drawing classes as part of my elementary-school [[curriculum|the whole set of subjects and experiences in education]] — it was [[compulsory|required by rules; not optional]], so we had no choice. I found the lessons boring, but it was also the first time I was introduced to the term still-life drawing, so maybe, after all, it did mean something.",
          },
        ],
      },
      {
        q: "Have you ever visited an art gallery?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, I have, when I was living in the US as an [[exchange student|a student who attends a school in another country]]. I was staying with a [[host family|a family that provides lodging to a visiting student]] who were really interested in going to different galleries and museums, and there were quite a few in our neighbourhood. Every weekend we'd go to a gallery or museum, walk around, and they'd ask my opinion on the pieces [[on display|put somewhere for people to see]]. I was only 17 or 18, so I pretended to understand all the complexities and sophistication, but they were kind enough to explain all the [[cultural references|things relating to the culture of a country]].",
          },
        ],
      },
      {
        q: "Is there any artwork on the wall in your room?",
        answers: [
          {
            label: "Model Answer",
            text: "Not now, but there used to be. There was an artwork before the recent remodel, but after it I changed the wallpaper, and now the artwork doesn't really [[go with|match or blend well with]] the new one, so I had to [[take it down|remove it from the wall]]. Overall, though, having artwork in your room shows you're connected to the art world and makes the room feel more sophisticated, so I think it's a good thing.",
          },
        ],
      },
    ],
  },
  {
    id: "colours",
    part: 1,
    title: "Colour",
    emoji: "🌈",
    description: "Your favourite colour, bright versus dark, colours you dislike, and why colour matters.",
    questions: [
      {
        q: "What is your favorite color?",
        answers: [
          {
            label: "Model Answer",
            text: "I don't really have a single favourite colour, but in the context of what I usually wear, I prefer green, because it's really calming and natural. I like the way green makes me feel.",
          },
        ],
      },
      {
        q: "Do you prefer bright colors or dark colors?",
        answers: [
          {
            label: "Model Answer",
            text: "I prefer bright colours in general, because they [[stand out|are easily noticeable]], and I like to [[stand out from the crowd|be distinct from everyone else]]. In a way, bright colours help me do that. Dark colours can be depressing at times, so that's another reason I prefer bright ones.",
          },
        ],
      },
      {
        q: "Are there any colors that you dislike?",
        answers: [
          {
            label: "Model Answer",
            text: "I don't really have specific colours I dislike, to be honest, but within the context of fashion or interior design, I don't really like [[pale and faded|light and washed-out]] colours. Other than that, I'm not really [[picky|hard to please]] when it comes to colours.",
          },
        ],
      },
      {
        q: "Are colors important to you?",
        answers: [
          {
            label: "Model Answer",
            text: "Yes, colour is important to everyone, as it can affect our mood. It's also used by designers, people in fashion, and businesses. Understanding colours and how they [[trigger certain emotions|cause particular feelings to arise]] can help you make an [[informed choice|a decision based on relevant knowledge]], especially when buying something — some companies try to [[trick you into|deceive you so that you make]] unnecessary purchases with the use of different colours, and understanding that can make you less of a target. So in that context, colour can be quite important.",
          },
        ],
      },
    ],
  },
  {
    id: "helped-a-friend",
    part: 2,
    title: "Describe a time when you helped a friend",
    emoji: "🤝",
    description: "A model long-turn answer about lending money to a friend in need.",
    cueCard: ["When it happened", "How you helped your friend", "Why you helped them", "And explain how you felt about it"],
    questions: [
      {
        q: "Describe a time when you helped a friend.",
        answers: [
          {
            label: "Model Answer",
            text: "Helping friends whenever they need us is important — it's a [[social construct|an idea created and accepted by a society]], part of our social agreement, so to speak. But I have this principle of not lending money to friends, especially close ones, as it may potentially harm the relationship.\n\nThere was this one time when a classmate of mine approached me while he was having money problems. I knew he had a [[stable job|a position he could keep for a long time]] and would be able to [[pay me back|repay the loan]], but I had this principle. Still, seeing the pain in his eyes — he was really in a big problem, and it was a significant amount of money that nobody else was willing to help with — I decided to [[ditch|abandon; give up]] my principle and help him out, to [[give him the benefit of the doubt|choose to trust him despite the uncertainty]].\n\nI'm actually glad I did, because it took our relationship to the next level of trust and reliability. He not only repaid his debt, but also returned the favour when I needed his help, so it was a very positive outcome. [[Reflecting on|thinking carefully about]] that instance now, I can say that taking a chance on a friend like that brought a positive change to our relationship. Plus, the moment I gave him the money, I could see the happiness in his eyes, so it was very satisfying to know I could make a positive change in someone's life.",
          },
        ],
      },
    ],
  },
  {
    id: "painting-you-like",
    part: 2,
    title: "Describe a painting you like",
    emoji: "🎨",
    description: "A model long-turn answer about Van Gogh's Starry Night.",
    cueCard: ["What it is", "When and where you saw it", "What it looks like", "And explain why you like it"],
    questions: [
      {
        q: "Describe a painting or work of art you like.",
        answers: [
          {
            label: "Model Answer",
            text: "I wouldn't describe myself as an [[art enthusiast|a person with a strong interest and passion for art]], but I'd like to talk about one of my [[all-time favourite|the most cherished of all]] paintings — Vincent Van Gogh's \"Starry Night.\" I [[stumbled upon|discovered by chance]] this masterpiece a few years back during a visit to the Museum of Modern Art in New York City, and it's been [[etched in my memory|deeply and permanently imprinted in my mind]] ever since.\n\nSo, \"Starry Night\" is a real beauty. It's like a magical, [[swirling night|a night scene with a dynamic, swirling appearance]] sky with bright, colourful stars, a crescent moon, and a cute little village down below. What's cool is that it's not your typical calm-night scene; it's more like the universe having a wild party up there. The colours are striking — deep blues, vibrant yellows, and some enchanting greens — creating this sense of harmony and peace, despite the cosmic chaos.\n\nThe genius [[behind this masterpiece|the artist responsible for this outstanding work]] is Vincent Van Gogh. He painted it in 1889 while he was at a mental asylum in France. It's not just a pretty picture; it's more like [[a window into|a view offering insight into]] Van Gogh's emotional world. The stars and the village are like characters in his [[inner drama|the emotional struggles and conflicts within him]].\n\nWhat really makes it stand out for me is the emotion it carries. At first glance it's like, wow, that's a bit wild! But when you dig deeper, it's all about longing and the idea that even in the midst of [[turbulence|chaos, disturbance and unrest]], there's incredible beauty. The stars seem to dance, and the village is all calm below, which is a striking contrast.\n\nNow, [[here's the kicker|the surprising part that adds real significance]]. I got even more into this painting after hearing Neil deGrasse Tyson talk about it. He explained that Van Gogh, despite the [[emotional turmoil|intense inner conflict and upheaval]], was quite the scientist in his own right. The stars and moon are scientifically accurate, even though they're represented with such [[artistic flair|a unique, creative style]]. This [[fusion of|the blending together of]] art and science just blew my mind.\n\nIn fact, I couldn't resist getting a high-quality copy of \"Starry Night\" and [[hanging it up|displaying it]] in my workroom. Whenever I feel stressed or need [[a burst of inspiration|a sudden surge of creative ideas]], I just look at it. The swirling stars remind me that there's beauty and order even in the [[craziest times|the most chaotic, unpredictable moments]].",
          },
        ],
      },
    ],
  },
  {
    id: "photo-makes-you-happy",
    part: 2,
    title: "Describe a photo that makes you happy",
    emoji: "📷",
    description: "A model long-turn answer about a first-day-of-school photograph.",
    cueCard: ["When it was taken", "Who took it", "What is in the photo", "And explain why it makes you happy"],
    questions: [
      {
        q: "Describe a photo that makes you happy.",
        answers: [
          {
            label: "Model Answer",
            text: "I don't really like pictures of myself, since I'm not [[a photogenic person|someone who looks attractive in photographs]] by nature, you know? But let me tell you about a picture that always [[brings a big smile to my face|makes me really happy]]. It's a snapshot from my very first day of school, [[a momentous day|a day of great importance]] in my life. My mum was the photographer, and it was taken at our home, a place filled with so many [[wonderful memories|recollections of happy experiences]].\n\nI remember that day like it was yesterday. The sun was shining brightly, and there was this [[sense of excitement in the air|a feeling of anticipation and enthusiasm all around]]. It happened on September 5th, which is quite a significant date in my country — it's not only the start of the school year but also Teachers' Day.\n\nIn this photo, you'll see a little version of me, all [[decked out|dressed up in a stylish way]] in my brand-new school uniform. I had this huge backpack on my tiny shoulders, and I was [[beaming with|smiling brightly and radiating]] a mix of nervousness and curiosity. I must have been around six years old, and my eyes were filled with wonder.\n\nWhat makes this photo so special is the [[rush of nostalgia|a sudden, strong longing for the past]] it brings. Looking at it, I'm instantly transported back to a time when life was simple, and my biggest concern was making new friends and learning new things. It captures the sheer joy of my childhood, and it's a heartwarming reminder of that [[carefree time|a period with few worries or responsibilities]].\n\nBut here's the thing — it's a bit of [[a two-edged sword|something with both a positive and a negative side]] for me. While it's a lovely [[trip down memory lane|a journey through past experiences and memories]], it also serves as a gentle reminder of how quickly time flies. [[It's a bit bittersweet to think about|it brings mixed feelings of joy and sadness]] how that little kid in the photo is now an adult, with responsibilities and grown-up worries. It's a reminder to seize the day and cherish every moment.",
          },
        ],
      },
    ],
  },
  {
    id: "party-you-attended",
    part: 2,
    title: "Describe a party you attended",
    emoji: "🎉",
    description: "A model long-turn answer about a backyard summer get-together with college friends.",
    cueCard: ["Whose party it was", "Where it was held", "What you did there", "And explain why you enjoyed it"],
    questions: [
      {
        q: "Describe a party you attended and enjoyed.",
        answers: [
          {
            label: "Model Answer",
            text: "I'd love to tell you about this amazing party I attended recently. It was [[a casual get-together|a relaxed, informal gathering]] with my friends, which turned out to be [[an absolute blast|an extremely enjoyable, exciting experience]].\n\nSo, this party went down a few months back, during a warm summer evening, which was the [[perfect setting|an ideal environment]] for some [[outdoor fun|enjoyable activities outdoors]]. We decided to [[throw it|organise and host it]] in my buddy's backyard, and let me tell you, that place is like a [[mini-paradise|a small, beautiful place like a little piece of heaven]] with a cosy patio and lots of [[greenery|lush plants and trees]]. It [[set the scene for|created the perfect atmosphere for]] a great time.\n\nOur guest list was made up of some of my closest college buddies. We've known each other for years, and this was a chance to catch up. About ten of us showed up, which was just the right size for a fantastic gathering.\n\nWe wanted to keep things easygoing, so we made it [[a potluck-style affair|an event where each guest brings food to share]]. Everyone brought something, but the real star of the show was the barbecue. We grilled up a storm with all sorts of meats and veggies, and the smell was [[mouthwatering|so delicious it made your mouth water]]. To keep things going, we set up game consoles and a speaker system playing our favourite tunes — a perfect mix of great food and entertainment.\n\nAs for the activities, it was [[a real mixed bag|a varied assortment of things]]. We took turns on the video games, got competitive with some board games, and even had a hilarious game of charades. The [[laughter was non-stop|the laughter was continuous and unending]]. Later in the evening, we gathered around a bonfire, shared stories, and [[reminisced|recalled the past with nostalgia]] about our college days. It was one of those moments that just felt right, you know?\n\nWhat made this party so special was the chance to reconnect with old friends. We could just be ourselves, with no formality and no pressure. The cosy backyard, the [[scrumptious|exceptionally delicious]] BBQ, and all the fun games created an atmosphere of pure joy. It was all about celebrating our friendship, reliving the past, and enjoying the simple pleasures of life.",
          },
        ],
      },
    ],
  },
  {
    id: "park-you-like",
    part: 2,
    title: "Describe a park you like to visit",
    emoji: "🌳",
    description: "A model long-turn answer about Central Park (Mirzo Ulug'bek Park) in Tashkent.",
    cueCard: ["Where it is", "How often you go there", "What it is like", "And explain why you like it"],
    questions: [
      {
        q: "Describe a park you like to visit.",
        answers: [
          {
            label: "Model Answer",
            text: "There aren't really many parks I enjoy going to, especially here in Tashkent. But the one I do like visiting is Central Park — or, as we locals call it, Mirzo Ulug'bek Park — in the heart of Tashkent. It's [[hands down|without a doubt; unquestionably]] one of [[my all-time favourite|the best of all the places I've ever been to]] places to hang out. I make it a point to visit twice a week — once in the middle of the workweek and again on weekends. This place has got everything you could ask for, and that's why I keep coming back.\n\nYou see, Central Park is like [[an oasis of calm right smack|a peaceful, quiet place right in the middle]] of the bustling city. As soon as I [[step foot|set foot]] in there, it's like the city noise and the chaos in my head just disappear. Instead, I'm greeted by the [[soothing sounds|pleasant, comforting sounds that help you relax]] of chirping birds, rustling leaves, and the gentle flow of fountains. It's almost like entering another world of tranquillity. For me, it's my escape from [[the daily grind|the routine, monotonous demands of daily life]], a place to unwind from the pressures of work.\n\nBut [[the real deal with|the most impressive thing about]] Central Park is the fantastic views it serves up. There's an impressive mix of colourful flowers, sculptures, and lovely pathways. During spring it's a [[riot of colours|a burst of vibrant colours]] with those well-kept flowerbeds, and the views are absolutely breathtaking. Every time I take a stroll, I can't help but feel at peace and, dare I say, awestruck by the beauty. It's like visual therapy that [[melts away the stresses|relieves the pressures and worries]] of the day.\n\nAnd if you're into picnics, this place has you covered. There are these idyllic picnic spots that are just perfect for family gatherings or hanging out with friends. Imagine having [[a leisurely picnic|a relaxed, unhurried outdoor meal]] under the shade of the giant trees, or just sitting by the serene lake — [[it's the recipe for a perfect day out|it's the ideal combination for a wonderful day outdoors]]. It's in these moments that I spend quality time with my loved ones and truly let go of the worries that build up during a busy workweek.",
          },
        ],
      },
    ],
  },
  {
    id: "person-who-cooks-for-others",
    part: 2,
    title: "Describe a person who likes to cook for others",
    emoji: "👨‍🍳",
    description: "A model long-turn answer about a college roommate who loved cooking for friends.",
    cueCard: ["Who this person is", "How you know them", "What they cook", "And explain why they like cooking for others"],
    questions: [
      {
        q: "Describe a person who likes to cook for others.",
        answers: [
          {
            label: "Model Answer",
            text: "Well, I know a lot of people who like cooking and [[do a pretty good job|do it with real skill]] at it. But when I think of someone who really enjoys cooking for others, the first person that [[pops into my head|comes to mind]] is my [[college buddy|close friend from college]] and roommate, John. This guy [[was something else when it came to|really excelled when it came to]] cooking, even though he started as a total amateur in the kitchen.\n\nYou see, John and I were close friends back in our college years. One day, I introduced him to a traditional dish from my culture, palov, which was [[foreign to him|completely unfamiliar to him]]. But instead of being [[daunted by the challenge|intimidated by the difficulty]], he [[took it on with a passion|approached it with great enthusiasm]] that was hard to miss. It was as if he had this innate talent for cooking, even with dishes he'd never heard of.\n\nWhat made John's cooking special was the way it brought out his kindness. Whenever he prepared a meal, he [[put his heart into it|showed genuine care and effort]]. He wasn't doing it for [[personal glory|recognition or fame for himself]], but because he genuinely loved making people happy through his food. You could taste the love and care in every bite.\n\nOne thing that stood out was that he saw cooking as a form of self-expression, something he did during his [[me-time|personal relaxation and leisure time]]. He didn't aspire to be a professional chef, but cooking was his way of relaxing. So whenever he felt like experimenting with new recipes or simply wanted to [[unwind|relax and de-stress]], he'd [[head to|go to]] the kitchen. His dishes were not just delicious but also [[oozed creativity|showed a remarkable amount of original ideas]], making every meal with him an unforgettable experience.",
          },
        ],
      },
    ],
  },
  {
    id: "science-subject-interested",
    part: 2,
    title: "Describe a science subject you are interested in",
    emoji: "🔭",
    description: "A model long-turn answer about a fascination with astronomy and Carl Sagan.",
    cueCard: ["What it is", "How you became interested in it", "What you know about it", "And explain why you find it interesting"],
    questions: [
      {
        q: "Describe a science subject you are interested in.",
        answers: [
          {
            label: "Model Answer",
            text: "I've always been interested in science, but one particular subject I'm [[fascinated by|extremely interested in and captivated by]] is astronomy. It all began when I [[stumbled upon|discovered by chance]] the captivating documentaries and books of the legendary science communicator, Carl Sagan. This guy was [[a real science rockstar|a prominent, highly influential figure in science]], and he had this [[incredible knack for|exceptional talent for]] making the cosmos [[feel close to home|feel familiar and relatable]].\n\nOne of Sagan's quotes that really [[speaks to me|resonates deeply with me]] is: \"The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.\" I mean, isn't that [[mind-blowing|absolutely astonishing]]? It just shows how we're [[intricately connected|closely intertwined]] with the universe.\n\nSo why does astronomy [[light up my world|bring me so much joy and excitement]]? Well, first and foremost, it's the [[sheer awe of|the overwhelming wonder at]] exploring the universe. Just think about it — billions of galaxies, each with billions of stars and maybe even planets like ours. It's a humbling and exciting thought.\n\nAstronomy doesn't just let us [[stargaze|observe the stars in the night sky]]; it helps us understand where we came from. The Big Bang theory, the birth of stars and galaxies — it's like [[peeling back|gradually uncovering]] the layers of the universe's history. The more you learn, the more it [[boggles your mind|astonishes you completely]].\n\nAnd who can forget the quest for [[extraterrestrial life|life beyond Earth]]? Sagan was super into that, and it's a topic that's always fascinated me too. The possibility of life beyond Earth is [[the stuff of sci-fi dreams|the kind of idea you find in science fiction]]! But it's not all [[cosmic pondering|reflecting on the mysteries of the universe]]. Astronomy has [[real-world applications|practical uses in everyday life]] too — predicting eclipses, meteor showers, or even advancing technology and exploring space. It's all [[linked back to|connected back to]] our fascination with the stars.",
          },
        ],
      },
    ],
  },
  {
    id: "rule-you-dont-like",
    part: 2,
    title: "Describe a rule you don't like",
    emoji: "📵",
    description: "A model long-turn answer about the ban on using phones in libraries.",
    cueCard: ["What the rule is", "Where it applies", "Why you don't like it", "And explain what you would change about it"],
    questions: [
      {
        q: "Describe a rule you don't like.",
        answers: [
          {
            label: "Model Answer",
            text: "Well, I honestly think there are way too many rules. Rules you have to follow as a child, rules you have to [[comply with|follow and adhere to]] at school — they're [[ubiquitous|present everywhere; completely widespread]].\n\nYou know, there's this one rule that really [[gets on my nerves|annoys and irritates me]] — the ban on using cellphones in libraries. I mean, I get why they want to keep things quiet and focused, but I think it's a bit [[too strict and outdated|excessively rigid and behind the times]].\n\nLibraries have always been these [[havens for|safe, comforting places for]] quiet learning, and I totally respect that. But let's be real — our smartphones are basically like Swiss Army knives for learning. You can access e-books, research things, and use all sorts of educational apps right on your phone. Plus, I'm one of those people who likes to [[jot down notes|quickly write brief notes]] on my phone during study sessions. So this [[no-cellphone policy|a rule that prohibits any cellphone use]] seems like it's [[holding onto the past|resisting change and keeping outdated practices]].\n\nAnd you know what's frustrating? There are moments when you absolutely need your phone. I remember once I had a family emergency, and not having my phone with me in the library was [[a real headache|a significant, frustrating problem]]. So instead of [[an all-out ban|a complete, unrestricted prohibition]], why not allow quiet cellphone use for educational purposes and essential communication? That way, the library can be a place for both traditional and modern learning, and everyone can [[get the best of both worlds|enjoy the advantages of both at once]].\n\nThis rule is something I [[can't quite get behind|can't fully support or agree with]]. I get the need for peace and quiet, but this rule really needs to change.",
          },
        ],
      },
    ],
  },
  {
    id: "person-never-met",
    part: 2,
    title: "Describe a person you have never met in person",
    emoji: "💬",
    description: "A model long-turn answer about an online friend from Russia met through Reddit.",
    cueCard: ["Who this person is", "How you know about them", "What kind of person they are", "And explain why you would like to meet them"],
    questions: [
      {
        q: "Describe a person you have never met in person but would like to know more about.",
        answers: [
          {
            label: "Model Answer",
            text: "I've met many people on the internet's [[town square|a central public space for gathering — in this case, Reddit]], which is Reddit. I've got this friend from Russia who's just a very interesting individual. We [[crossed paths|met by chance]] on a language-learning subreddit, and our [[connection was instant|a strong bond formed almost immediately]]. What's really cool about her is that she's an Arabic teacher at a university. Her deep understanding of the language and Middle Eastern culture is seriously impressive. She's [[not just book-smart|not just knowledgeable from books and formal study]]; she's lived it by [[extensively travelling|travelling to many different places]] around the Middle East. Plus, she even got her degree from an American college.\n\nBut it's not just her job or her travels that make her so interesting — it's the way she sees the world. Our conversations often [[veer into|suddenly turn towards]] deep discussions about global politics, history, and [[current affairs|news and events happening right now]]. And every time we chat, I [[can't help but be blown away|can't help but be extremely impressed]] by her [[insights|deep understandings and perspectives]]. She's like this [[walking, talking encyclopedia|someone with extensive knowledge on a huge range of topics]].\n\nWhat's even more [[fascinating|extremely interesting and captivating]] is her perspective on my home country, Uzbekistan. She's curious about it and wants to visit, but she made this intriguing point: that Uzbekistan, as a post-Soviet country, might not feel entirely foreign to her because there are some [[shared cultural elements|common customs and traditions held by both societies]]. It's a viewpoint I'd never considered, and it shows how she can look at [[things from all angles|things from many different perspectives]].\n\nSo, even though we've never met in person, I'm super eager to keep this virtual friendship going.",
          },
        ],
      },
    ],
  },
];

export function findSpeakingTopic(id: string): SpeakingTopic | undefined {
  return SPEAKING_TOPICS.find((t) => t.id === id);
}

export function topicsByPart(part: 1 | 2 | 3): SpeakingTopic[] {
  return SPEAKING_TOPICS.filter((t) => t.part === part);
}
