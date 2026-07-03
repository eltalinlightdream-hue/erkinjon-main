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
];

export function findSpeakingTopic(id: string): SpeakingTopic | undefined {
  return SPEAKING_TOPICS.find((t) => t.id === id);
}

export function topicsByPart(part: 1 | 2 | 3): SpeakingTopic[] {
  return SPEAKING_TOPICS.filter((t) => t.part === part);
}
