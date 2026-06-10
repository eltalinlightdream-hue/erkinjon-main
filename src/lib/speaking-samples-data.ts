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
    description: "Would you teach? Favourite teachers and how they helped you — with answers for both opinions.",
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
    description: "Why people still visit galleries, whether museums should be free, and how art inspires.",
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
