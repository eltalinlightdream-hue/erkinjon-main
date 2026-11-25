import type { Article } from "./articles-data";

/* ────────────────────────────────────────────────────────────────
   Science & health readings added November 2026.

   Paragraph numbers in `questions` and `tips` are 1-based and count
   only <p> elements in `content` (headings are not counted).
   ──────────────────────────────────────────────────────────────── */

const ALZHEIMERS: Article = {
  id: "a46",
  slug: "what-to-know-about-the-new-alzheimers-drug",
  title: "What to know about the new Alzheimer’s drug",
  category: "Reading",
  topic: "Health",
  difficulty: "Intermediate",
  coverImage: "/articles/covers/alzheimers-drug.svg",
  date: "2026-11-25",
  description:
    "Promising or problematic? How to make sense of the controversy over Aduhelm, the first new Alzheimer’s drug in almost 20 years.",
  readingTime: 3,
  content: `
    <p>The Food and Drug Administration recently approved aducanumab (Aduhelm), the first new drug for Alzheimer’s disease in almost 20 years—and the first to potentially slow disease progression.</p>

    <p>Some experts consider this a big step, but many disagree with the FDA’s decision, saying there’s little evidence the drug works and is safe. Several major medical centers, including the Cleveland Clinic in Ohio and Mount Sinai Health System in New York City, have opted not to administer Aduhelm to patients at this time.</p>

    <p>“It’s an incredible accomplishment for the field that we can use a drug to alter the biology of the disease,” says David Wolk, MD, director of the Alzheimer’s Disease Research Center at the University of Pennsylvania Perelman School of Medicine. But “there’s still uncertainty about the clinical benefit of the drug, and it has side effects that, in some cases, can result in serious neurological injury.”</p>

    <p>The news about Aduhelm may continue to unfold for a while. But for now, here are answers to key questions.</p>

    <h2>How does Aduhelm work?</h2>
    <p>The drug, given intravenously once a month, signals the immune system to break down amyloid plaques, protein clumps in the brain thought to kill brain cells. In theory, clearing amyloid could slow brain deterioration, though other experimental treatments targeting amyloid haven’t eased Alzheimer’s symptoms.</p>

    <h2>Does it reduce symptoms well?</h2>
    <p>That’s uncertain because the two pivotal clinical trials of Aduhelm yielded conflicting results. On average, all study participants—people with very mild symptoms of Alzheimer’s disease—scored worse on assessments of memory, problem-solving skills, and function after taking Aduhelm or a placebo for 18 months. One of the studies found that those given Aduhelm declined more slowly than those in the placebo group; the other found it didn’t help. “At best, the drug slowed down an already slow-moving disease by one-quarter to one-third,” says Wolk, whose medical center participated in the clinical trials.</p>

    <h2>Who is the drug for?</h2>
    <p>It’s approved for people in the early stages of Alzheimer’s. The drug’s questionable clinical benefits in those with very mild symptoms suggests it’s highly unlikely to help people with moderate-to-severe cognitive impairment, says Constantine Lyketsos, MD, director of the Memory and Alzheimer’s Treatment Center at Johns Hopkins University School of Medicine.</p>

    <h2>Are there possible side effects?</h2>
    <p>In studies, about 40 percent of patients developed brain swelling, sometimes along with tiny brain bleeds. About 1 in 4 people with brain swelling also experienced headaches, confusion, vision changes, or nausea. Other possible side effects include diarrhea and falls, and allergic reactions are possible.</p>

    <h2>Will insurance cover the cost?</h2>
    <p>It’s unclear. The Centers for Medicare &amp; Medicaid Services (CMS) is conducting a formal review to decide on a national policy. Some Blue Cross Blue Shield plans have already said they won’t cover it, and other insurers are waiting on the CMS decision. The price: $56,000 a year for the drug and more for services like safety monitoring and MRIs. “We’ve worked out that it would cost about $100,000 to treat someone with Aduhelm for a year,” says Lyketsos.</p>

    <h2>What if I want to take the drug?</h2>
    <p>Talk with your Alzheimer’s disease specialist about whether it might be appropriate. If so, you’ll need cognitive tests and probably a lumbar puncture or positron emission tomography (PET) scan to confirm the presence of brain amyloid. Because side effect risks may well outweigh potential clinical benefits, ask how your doctor will monitor you for those effects and when you’d need to stop taking the drug, Lyketsos says. And be aware that you may face significant out-of-pocket costs.</p>
  `,
  vocabulary: [
    {
      word: "opt",
      wordType: "verb",
      definition: "to choose one thing or course of action instead of another",
      example: "Several hospitals have opted not to use the drug yet.",
      synonyms: ["choose", "decide", "elect"],
    },
    {
      word: "administer",
      wordType: "verb",
      definition: "to give a drug or treatment to someone",
      example: "Nurses administer the medicine once a month.",
      synonyms: ["give", "dispense"],
    },
    {
      word: "accomplishment",
      wordType: "noun",
      definition: "something difficult that has been done successfully",
      example: "Altering the biology of the disease is a real accomplishment.",
      synonyms: ["achievement", "feat"],
    },
    {
      word: "intravenously",
      wordType: "adverb",
      definition: "into a vein, usually through a needle or drip",
      example: "The drug is given intravenously in a clinic.",
      synonyms: ["by drip", "into a vein"],
    },
    {
      word: "deterioration",
      wordType: "noun",
      definition: "the process of becoming gradually worse",
      example: "The aim is to slow the deterioration of brain function.",
      synonyms: ["decline", "worsening"],
    },
    {
      word: "pivotal",
      wordType: "adjective",
      definition: "of central importance; deciding what happens next",
      example: "Two pivotal trials decided whether the drug was approved.",
      synonyms: ["crucial", "key", "decisive"],
    },
    {
      word: "conflicting",
      wordType: "adjective",
      definition: "disagreeing with each other; not able to both be true",
      example: "The studies produced conflicting results.",
      synonyms: ["contradictory", "inconsistent"],
    },
    {
      word: "placebo",
      wordType: "noun",
      definition: "a substance with no medical effect, given to compare against a real drug",
      example: "Half of the participants received a placebo.",
      synonyms: ["dummy pill", "control treatment"],
    },
    {
      word: "impairment",
      wordType: "noun",
      definition: "a condition in which a part of the body or mind does not work properly",
      example: "The drug is unlikely to help people with severe cognitive impairment.",
      synonyms: ["damage", "weakening", "disability"],
    },
    {
      word: "outweigh",
      wordType: "verb",
      definition: "to be greater or more important than something else",
      example: "For some patients, the risks may outweigh the benefits.",
      synonyms: ["exceed", "override"],
    },
    {
      word: "out-of-pocket",
      wordType: "adjective",
      definition: "paid by you personally, not by insurance or an employer",
      example: "Patients may face large out-of-pocket costs.",
      synonyms: ["self-funded", "unreimbursed"],
    },
  ],
  pronunciation: [
    {
      word: "aducanumab",
      ipa: "/ad-yoo-KAN-yoo-mab/",
      syllables: "a-du-can-u-mab",
      tip: "Stress KAN. Drug names ending in -mab are antibodies.",
    },
    {
      word: "Alzheimer’s",
      ipa: "/ALTS-hy-merz/",
      syllables: "Alz-hei-mer’s",
      tip: "Stress ALTS; the 'z' sounds like 'ts'.",
    },
    {
      word: "intravenously",
      ipa: "/in-truh-VEE-nus-lee/",
      syllables: "in-tra-ve-nous-ly",
      tip: "Stress VEE.",
    },
    {
      word: "amyloid",
      ipa: "/AM-uh-loyd/",
      syllables: "am-y-loid",
      tip: "Stress AM; ends like 'void'.",
    },
    {
      word: "placebo",
      ipa: "/pluh-SEE-boh/",
      syllables: "pla-ce-bo",
      tip: "Stress SEE.",
    },
    {
      word: "cognitive",
      ipa: "/KOG-nuh-tiv/",
      syllables: "cog-ni-tive",
      tip: "Stress KOG.",
    },
  ],
  collocations: [
    "clinical trials",
    "side effects",
    "little evidence",
    "immune system",
    "formal review",
    "national policy",
  ],
  questions: [
    {
      paragraph: 2,
      question: "Why have some major medical centres decided not to give patients Aduhelm?",
      options: [
        "It is too expensive for hospitals to store",
        "There is limited proof that it works and is safe",
        "It was approved for a different disease",
      ],
      answer: 1,
      paraphrase: {
        question: "limited proof that it works and is safe",
        passage: "little evidence the drug works and is safe",
      },
    },
    {
      paragraph: 5,
      question: "How is the drug supposed to help patients?",
      options: [
        "It replaces damaged brain cells",
        "It helps the body clear protein clumps from the brain",
        "It reduces headaches and confusion",
      ],
      answer: 1,
      paraphrase: {
        question: "clear protein clumps",
        passage: "break down amyloid plaques, protein clumps in the brain",
      },
    },
    {
      paragraph: 6,
      question: "What did the two main clinical trials show?",
      options: [
        "Both proved that the drug works",
        "Their results did not agree",
        "Neither included a placebo group",
      ],
      answer: 1,
      paraphrase: { question: "results did not agree", passage: "yielded conflicting results" },
    },
    {
      paragraph: 8,
      question: "Roughly what share of study patients developed brain swelling?",
      options: ["About 1 in 4", "About 40 percent", "Nearly all of them"],
      answer: 1,
      paraphrase: {
        question: "share of study patients developed brain swelling",
        passage: "about 40 percent of patients developed brain swelling",
      },
    },
    {
      paragraph: 9,
      question: "According to Lyketsos, what is the full cost of a year of treatment?",
      options: ["$56,000", "About $100,000", "It has not been calculated"],
      answer: 1,
      paraphrase: {
        question: "full cost of a year of treatment",
        passage: "it would cost about $100,000 to treat someone with Aduhelm for a year",
      },
    },
  ],
  tips: [
    {
      paragraph: 2,
      text: "“Opted not to” = “chose not to”. IELTS often paraphrases decisions with choose, decide or elect.",
    },
    {
      paragraph: 6,
      text: "“At best” sets an upper limit: even in the most positive reading, the benefit is small. Watch for it in True/False/Not Given.",
    },
  ],
};

const FOSSIL_FUELS: Article = {
  id: "a47",
  slug: "keep-it-in-the-ground",
  title: "Keep it in the ground",
  category: "Reading",
  topic: "Environment",
  difficulty: "Advanced",
  coverImage: "/articles/covers/keep-it-in-the-ground.svg",
  date: "2026-11-24",
  description:
    "Latest figures show just how drastic our rejection of fossil fuels must be in order to remain below 1.5°C of warming.",
  readingTime: 4,
  author: "Adam Vaughan",
  source: "New Scientist",
  content: `
    <p>Energy companies and nations must leave nine-tenths of Earth’s coal and almost two-thirds of its oil and gas in the ground if the world is to hold temperatures to below 1.5°C of global warming, a target beyond which climate change’s impacts are dangerously amplified, researchers have calculated.</p>

    <p>Their analysis of which fossil fuel reserves are effectively “unextractable” if we are to meet the Paris Agreement temperature pledge makes the situation look dire for petrostates. Globally, oil and gas production must fall by 3 per cent a year to meet the target.</p>

    <p>“We’re painting quite a bleak picture for the future of the global fossil fuel industry,” says James Price at University College London (UCL), who was part of the team behind the analysis.</p>

    <p>Price and his colleagues built on an influential 2015 study on how much of the world’s coal, oil and gas reserves must go unused to stay under 2°C of warming, but this time looked at the 1.5°C goal.</p>

    <p>The researchers assumed a “carbon budget” that was about half the size of the earlier study’s, allowing the world to emit just 580 billion tonnes of carbon dioxide from fossil fuels between 2018 and 2100. They then updated energy system models to reflect the falling cost of renewables and calculated the carbon within global fossil fuel reserves using data from BP, the International Energy Agency (IEA) and others.</p>

    <p>“A key output is we see near a doubling of unextractable oil reserves,” says study author Dan Welsby, also at UCL, meaning that much more must go unused to remain under 1.5°C instead of 2°C. For a 1.5°C future, 89 per cent of coal, 58 per cent of oil and 59 per cent of gas must stay in the ground by 2050.</p>

    <p>However, the researchers say those figures are probably an underestimate. The first reason is that they only modelled scenarios with a 50 per cent chance of hitting 1.5°C. “You wouldn’t get on a plane if you had a 50 per cent probability [of making it],” says Welsby.</p>

    <p>Secondly, the modelling is based on relatively high amounts of CO<sub>2</sub> being removed from the atmosphere – about 6 billion tonnes of CO<sub>2</sub> a year – to meet the temperature target. The technology to do this is still in its infancy, but even assuming it is developed in the coming years, the team was unable to model a scenario with a 66 per cent chance of hitting 1.5°C without resorting to “magic” amounts of CO<sub>2</sub> removals.</p>

    <p>“There’s a good likelihood the rates of decline are going to have to be even larger, and the total amount of carbon that’s going to stay in the ground is also going to be larger. I feel that’s quite a stark outcome,” says Price. “It really puts into stark relief just how challenging conditions will be for countries that are reliant on [revenues] from oil and gas.”</p>

    <p>The global figures mask regional differences. One similarity with the 2015 study is that Canada and Venezuela both have to leave an above average amount of oil reserves unused while the Middle East is more akin to the global average. But because of the sheer size of its oil and gas reserves, “that translates into huge volumes left in the ground”, says Welsby.</p>

    <p>Some oil companies, such as BP, have cut their future oil and gas plans as they attempt to transition to low-carbon energy. Earlier this year, a major report by the IEA suggested no new oil and gas wells should be drilled if the world is to cut emissions to net zero by 2050.</p>

    <p>However, many national oil and gas companies, such as Qatar Petroleum, plan to grow production. “We need to reverse course. Where we are now is a long way away from where we need to be,” says Welsby.</p>
  `,
  vocabulary: [
    {
      word: "unextractable",
      wordType: "adjective",
      definition: "not able to be taken out of the ground (here: if climate targets are to be met)",
      example: "Most of the world’s coal is effectively unextractable.",
      synonyms: ["unusable", "off-limits"],
    },
    {
      word: "dire",
      wordType: "adjective",
      definition: "extremely serious or bad",
      example: "The outlook is dire for countries that depend on oil.",
      synonyms: ["grave", "terrible", "desperate"],
    },
    {
      word: "petrostate",
      wordType: "noun",
      definition: "a country whose economy depends heavily on oil and gas exports",
      example: "Petrostates will need to find new sources of income.",
      synonyms: ["oil-dependent nation"],
    },
    {
      word: "bleak",
      wordType: "adjective",
      definition: "without hope or encouragement",
      example: "The study paints a bleak picture for the fossil fuel industry.",
      synonyms: ["gloomy", "grim", "depressing"],
    },
    {
      word: "influential",
      wordType: "adjective",
      definition: "having a strong effect on how people think or act",
      example: "The 2015 paper was highly influential.",
      synonyms: ["important", "significant", "authoritative"],
    },
    {
      word: "renewable",
      wordType: "noun",
      definition: "an energy source that is naturally replaced, such as wind or solar power",
      example: "The falling cost of renewables changed the models.",
      synonyms: ["clean energy", "green power"],
    },
    {
      word: "underestimate",
      wordType: "noun",
      definition: "a figure that is lower than the real amount",
      example: "The researchers believe their figures are an underestimate.",
      synonyms: ["lowball figure", "conservative estimate"],
    },
    {
      word: "in its infancy",
      wordType: "phrase",
      definition: "at a very early stage of development",
      example: "Carbon-removal technology is still in its infancy.",
      synonyms: ["in the early stages", "embryonic"],
    },
    {
      word: "stark",
      wordType: "adjective",
      definition: "very clear, obvious and unpleasant",
      example: "It is quite a stark outcome for oil producers.",
      synonyms: ["harsh", "blunt", "severe"],
    },
    {
      word: "mask",
      wordType: "verb",
      definition: "to hide or cover something so that it cannot be seen clearly",
      example: "Global averages mask big regional differences.",
      synonyms: ["hide", "obscure", "conceal"],
    },
    {
      word: "akin",
      wordType: "adjective",
      definition: "similar in character (usually “akin to”)",
      example: "The Middle East is more akin to the global average.",
      synonyms: ["similar", "comparable", "close"],
    },
    {
      word: "reverse course",
      wordType: "verb phrase",
      definition: "to change direction completely and do the opposite",
      example: "Producers will need to reverse course and cut output.",
      synonyms: ["change direction", "U-turn"],
    },
  ],
  pronunciation: [
    {
      word: "petrostate",
      ipa: "/PET-roh-stayt/",
      syllables: "pet-ro-state",
      tip: "Stress PET.",
    },
    {
      word: "unextractable",
      ipa: "/un-ik-STRAK-tuh-bul/",
      syllables: "un-ex-tract-a-ble",
      tip: "Stress STRAK.",
    },
    {
      word: "renewables",
      ipa: "/ri-NYOO-uh-bulz/",
      syllables: "re-new-a-bles",
      tip: "Stress NYOO.",
    },
    {
      word: "Venezuela",
      ipa: "/ven-uh-ZWAY-luh/",
      syllables: "Ven-e-zue-la",
      tip: "Stress ZWAY.",
    },
    {
      word: "Qatar",
      ipa: "/KAH-tar/",
      syllables: "Qa-tar",
      tip: "Stress the first syllable in British English: KAH-tar.",
    },
    {
      word: "likelihood",
      ipa: "/LYK-lee-hood/",
      syllables: "like-li-hood",
      tip: "Stress LYK.",
    },
  ],
  collocations: [
    "global warming",
    "carbon budget",
    "go unused",
    "falling cost",
    "cut emissions",
    "net zero",
  ],
  questions: [
    {
      paragraph: 1,
      question: "What share of the world’s coal must stay unused to keep warming under 1.5°C?",
      options: ["About two-thirds", "Around nine-tenths", "Just over half"],
      answer: 1,
      paraphrase: {
        question: "coal must stay unused",
        passage: "leave nine-tenths of Earth’s coal",
      },
    },
    {
      paragraph: 4,
      question: "How does this study differ from the 2015 study it built on?",
      options: [
        "It used different data sources only",
        "It focused on a stricter temperature target",
        "It looked only at coal reserves",
      ],
      answer: 1,
      paraphrase: {
        question: "a stricter temperature target",
        passage: "this time looked at the 1.5°C goal",
      },
    },
    {
      paragraph: 7,
      question: "Why do the researchers think their figures are probably too low?",
      options: [
        "They only modelled a 50 per cent chance of success",
        "They ignored the cost of renewable energy",
        "They relied on old data from BP",
      ],
      answer: 0,
      paraphrase: {
        question: "figures are probably too low",
        passage: "those figures are probably an underestimate",
      },
    },
    {
      paragraph: 8,
      question: "What does the writer say about technology for removing CO₂?",
      options: [
        "It is already widely used",
        "It is at an early stage of development",
        "It is too expensive to model",
      ],
      answer: 1,
      paraphrase: { question: "at an early stage of development", passage: "still in its infancy" },
    },
    {
      paragraph: 12,
      question: "What does Qatar Petroleum plan to do?",
      options: ["Cut production", "Increase production", "Switch to renewables"],
      answer: 1,
      paraphrase: { question: "increase production", passage: "plan to grow production" },
    },
  ],
  tips: [
    {
      paragraph: 2,
      text: "“Dire”, “bleak” and “stark” form a chain of negative adjectives. Writers vary words to avoid repetition, and IELTS questions exploit it.",
    },
    {
      paragraph: 10,
      text: "“Akin to” = “similar to”. Spot comparison language when answering matching questions.",
    },
  ],
};

const QUANTUM: Article = {
  id: "a48",
  slug: "quantum-computer-helps-design-a-better-quantum-computer",
  title: "Quantum computer helps design a better quantum computer",
  category: "Reading",
  topic: "Technology",
  difficulty: "Advanced",
  coverImage: "/articles/covers/quantum-computer.svg",
  date: "2026-11-23",
  description:
    "A quantum machine has been used to invent a smaller, quieter qubit: a glimpse of computers designing their own successors.",
  readingTime: 3,
  author: "Matthew Sparkes",
  source: "New Scientist",
  content: `
    <p>A quantum computer has been used to design an improved quantum bit, or qubit, that could power the next generation of quantum computers. Using the new qubit, it should be possible to build quantum computers that are smaller, higher-performance and more reliable.</p>

    <p>As classical computer chips became more complex, it quickly became impractical to design them manually. For decades, it has instead been commonplace to use computers themselves to help optimise new chip designs for the next generation of computers.</p>

    <p>But it is unfeasible to simulate the operation of all but the simplest quantum processor inside a classical computer. This is because the computing resources required grow exponentially as each new qubit is added.</p>

    <p>Now, Chao-Yang Lu at the University of Science and Technology of China and his colleagues have used a quantum algorithm to run the simulations.</p>

    <p>So far, the research has led to the development of a new type of qubit, the quantum version of a classical bit, which can exist in a mixture of a 0 and 1 state until it is measured and settles on one.</p>

    <p>The new qubit, dubbed a plasonium, is smaller, less noisy and able to retain its state longer than the group’s current qubit design. The team believes that the work opens the way to designing advanced quantum processors using existing quantum machines.</p>

    <p>Peter Knight at Imperial College London says the concept is intriguing and also intuitive. “If you think about a classical machine that’s trying to simulate a quantum processor, it’s hard work. So it’s obvious that once you’ve got a quantum processor, you’d see if you can use it for that purpose. Already it’s given them some new insights.”</p>

    <p>Knight says that the new qubit design offers advantages but also, crucially, reduces several inconvenient features of current generation circuits.</p>

    <p>To invent the plasonium, the team used an algorithm called a variational quantum eigensolver, which is often used in quantum chemistry to calculate the energy levels of molecules. This allowed the group to simulate the behaviour of particles in quantum circuits and iron out negative properties while developing positive features, all while avoiding the laborious process of building vast numbers of physical prototypes.</p>

    <p>The plasonium qubits are each only 240 micrometres long, which is just 40 per cent of the size of the team’s current generation qubit design, called a transmon. This means that replacing transmon qubits with plasonium qubits will allow today’s large processors to be miniaturised. This will be key because future quantum computers will need to scale up from containing dozens of qubits, as most do today, to having the millions or billions required to carry out useful tasks.</p>

    <p>Reducing “noise” in quantum computers is another vital hurdle between current machines and more powerful, useful quantum computers. Crucially, the plasonium is also less noisy than the group’s existing transmon qubit. In a classical computer, noise can come from a “bit flip” when a single bit encounters an error, generally caused by interaction with a stray charged particle passing through the computer. It is possible to reduce this problem in the design stage of a classical bit, but designing out similar noise issues in a quantum bit has been challenging. The new approach makes it easier.</p>
  `,
  vocabulary: [
    {
      word: "impractical",
      wordType: "adjective",
      definition:
        "not sensible or realistic to do, usually because it is too difficult or expensive",
      example: "It became impractical to design chips by hand.",
      synonyms: ["unworkable", "unrealistic"],
    },
    {
      word: "commonplace",
      wordType: "adjective",
      definition: "happening often; not unusual",
      example: "Computer-aided design is now commonplace.",
      synonyms: ["routine", "standard", "widespread"],
    },
    {
      word: "unfeasible",
      wordType: "adjective",
      definition: "not possible to do in practice",
      example: "Simulating large quantum processors is unfeasible.",
      synonyms: ["impossible", "impractical"],
    },
    {
      word: "exponentially",
      wordType: "adverb",
      definition: "increasing faster and faster as something grows",
      example: "The resources required grow exponentially.",
      synonyms: ["rapidly", "dramatically"],
    },
    {
      word: "dubbed",
      wordType: "adjective",
      definition: "given a particular name or nickname",
      example: "The new qubit, dubbed a plasonium, is smaller.",
      synonyms: ["named", "called", "nicknamed"],
    },
    {
      word: "intriguing",
      wordType: "adjective",
      definition: "very interesting because it is unusual or unexpected",
      example: "Knight finds the concept intriguing.",
      synonyms: ["fascinating", "compelling"],
    },
    {
      word: "intuitive",
      wordType: "adjective",
      definition: "easy to understand without needing explanation",
      example: "Using a quantum computer to design one feels intuitive.",
      synonyms: ["natural", "instinctive", "obvious"],
    },
    {
      word: "laborious",
      wordType: "adjective",
      definition: "needing a lot of time and effort",
      example: "Building prototypes one by one is laborious.",
      synonyms: ["painstaking", "arduous", "tedious"],
    },
    {
      word: "prototype",
      wordType: "noun",
      definition: "a first model of something, used for testing before it is made in quantity",
      example: "The team avoided building physical prototypes.",
      synonyms: ["model", "trial version"],
    },
    {
      word: "miniaturise",
      wordType: "verb",
      definition: "to make a much smaller version of something",
      example: "The new qubit lets processors be miniaturised.",
      synonyms: ["shrink", "scale down"],
    },
    {
      word: "hurdle",
      wordType: "noun",
      definition: "a problem or difficulty that must be overcome",
      example: "Noise is another vital hurdle.",
      synonyms: ["obstacle", "barrier", "challenge"],
    },
    {
      word: "stray",
      wordType: "adjective",
      definition: "moving away from where it should be; random and unwanted",
      example: "A stray particle can cause a bit flip.",
      synonyms: ["random", "errant"],
    },
  ],
  pronunciation: [
    {
      word: "qubit",
      ipa: "/KYOO-bit/",
      syllables: "qu-bit",
      tip: "Stress KYOO, like the letter Q.",
    },
    {
      word: "plasonium",
      ipa: "/pla-ZOH-nee-um/",
      syllables: "pla-so-ni-um",
      tip: "Stress ZOH.",
    },
    {
      word: "eigensolver",
      ipa: "/EYE-gun-sol-ver/",
      syllables: "ei-gen-sol-ver",
      tip: "Stress EYE; 'eigen' is German for 'own'.",
    },
    {
      word: "exponentially",
      ipa: "/ek-spoh-NEN-shuh-lee/",
      syllables: "ex-po-nen-tial-ly",
      tip: "Stress NEN.",
    },
    {
      word: "laborious",
      ipa: "/luh-BOR-ee-us/",
      syllables: "la-bo-ri-ous",
      tip: "Stress BOR.",
    },
    {
      word: "micrometres",
      ipa: "/MY-kroh-mee-terz/",
      syllables: "mi-cro-me-tres",
      tip: "Stress MY.",
    },
  ],
  collocations: ["next generation", "iron out", "energy levels", "scale up", "carry out"],
  questions: [
    {
      paragraph: 2,
      question: "Why did engineers start using computers to design chips?",
      options: [
        "Chips became too complex to design by hand",
        "Computers were cheaper than engineers",
        "Quantum chips required it by law",
      ],
      answer: 0,
      paraphrase: {
        question: "too complex to design by hand",
        passage: "impractical to design them manually",
      },
    },
    {
      paragraph: 3,
      question: "Why can’t classical computers simulate large quantum processors?",
      options: [
        "They are too slow to measure qubits",
        "The resources needed grow exponentially",
        "Qubits are too small to observe",
      ],
      answer: 1,
      paraphrase: {
        question: "resources needed grow exponentially",
        passage: "the computing resources required grow exponentially",
      },
    },
    {
      paragraph: 6,
      question: "Which of these is NOT given as an advantage of the plasonium?",
      options: ["It is smaller", "It is less noisy", "It is cheaper to manufacture"],
      answer: 2,
      paraphrase: {
        question: "advantage of the plasonium",
        passage:
          "smaller, less noisy and able to retain its state longer (cost is never mentioned)",
      },
    },
    {
      paragraph: 9,
      question: "What did the algorithm allow the team to avoid?",
      options: [
        "Building many physical prototypes",
        "Using a quantum computer at all",
        "Measuring the energy of molecules",
      ],
      answer: 0,
      paraphrase: {
        question: "avoid building many physical prototypes",
        passage: "avoiding the laborious process of building vast numbers of physical prototypes",
      },
    },
    {
      paragraph: 10,
      question: "How big is a plasonium qubit compared with a transmon?",
      options: ["About 40 per cent of the size", "Twice as big", "240 times smaller"],
      answer: 0,
      paraphrase: {
        question: "40 per cent of the size",
        passage: "just 40 per cent of the size of the team’s current generation qubit",
      },
    },
  ],
  tips: [
    {
      paragraph: 3,
      text: "Paraphrase chain: impractical (para 2) → unfeasible (para 3). Both mean “not realistically possible”. Exam questions love this.",
    },
    {
      paragraph: 7,
      text: "Don’t confuse “intriguing” (interesting because unusual) with “intuitive” (easy to understand without explanation).",
    },
  ],
};

const HUMAN_GENOME: Article = {
  id: "a49",
  slug: "the-legacy-of-the-human-genome-project",
  title: "The legacy of the Human Genome Project",
  category: "Reading",
  topic: "Science",
  difficulty: "Advanced",
  coverImage: "/articles/covers/human-genome.svg",
  date: "2026-11-22",
  description:
    "The initiative forever altered biomedicine, but work remains to fulfil its true potential. Twenty years on, what did sequencing the human genome really change?",
  readingTime: 6,
  author: "Jennifer E. Rood and Aviv Regev",
  source: "Science",
  content: `
    <p>Twenty years after the publication of its first draft sequence, the Human Genome Project (HGP) has had a profound effect on biomedical research—at the bench, on the computer, and across the scientific community. Large datasets and reference maps are now valued resources to guide scientific and clinical research, drug development, and medical practice. The HGP has also left us with a major mission—still incomplete 20 years later—to understand how genomic information leads to the development, function, and malfunction of cells and organisms and to fully leverage this knowledge to promote human health and treat disease.</p>

    <p>In the 1980s, scientists used ever-finer genetic mapping tools to pinpoint the genes underlying Mendelian disorders such as cystic fibrosis and Huntington’s disease. But to fully understand the genetic basis of common human diseases, where multiple genes are at play, these genomic marker–based mapping techniques were insufficient. Instead, theoretical analysis showed that an infinitely dense physical map would be needed—that is, the full sequence of the human genome. This realization converged with new advances in sequencing technology and other motivations, such as identifying cancer-driving mutations, to propel the 1990 launch of a concerted initiative to sequence the full genome—the HGP—delivering a first draft in 2000 and a “finished” reference sequence in 2003.</p>

    <p>Many initially doubted the utility of undertaking this costly effort, claiming that it could undermine attempts to understand the function of individual genes while not directly revealing the disease biology. Yet one of the first direct outcomes of the reference genome was to enable studies of human genetic variation, including in disease, initially through genome-wide association studies (GWASs) that have since identified tens of thousands of loci for specific traits and diseases. As modern genetics predicted, GWASs mostly find genes with small effect sizes, but these are nonetheless essential clues into causal disease mechanisms that may otherwise remain inaccessible.</p>

    <p>The human reference genome also enabled other crucial efforts to decipher disease biology, such as cancer genome analyses to map somatic genetic drivers in tumors, mapping of rare disease genes, and phenome-wide association studies leveraging large-scale biobanks to examine variants linked to multiple traits and diseases in an unselected population. The reference further allowed for comparative genomics to annotate functional elements, and ancient DNA techniques to track human migrations and trait development, including susceptibility to disease.</p>

    <p>A reference human genome sequence has itself proved a critical research tool. Basic lab experiments today are unimaginable without it: from designing primers for molecular cloning to genetic manipulation by small interfering RNA (siRNA) or CRISPR-Cas9–based guide RNAs. Both the HGP itself and the availability of the reference drove the development of powerful new technologies for rapid and cheap sequencing. Next-generation sequencing is the microscope of the 21st century, enabling an array of powerful sequencing-based functional genomics methods, such as profiling gene expression in individual cells and characterizing the spatial context of cells and tissues. These methods, reliant on a reference genome, play an increasingly important role in fulfilling the HGP’s promise of elucidating gene function and enabling individual labs to make key contributions that previously would have required large-scale efforts.</p>

    <p>Building the reference also ushered in the growth of modern computational biology and an appreciation of the power of computational thinking to solve biological problems by drawing on large datasets that previously did not exist. The scale of the data generated during genome projects necessitated new data processing and analysis approaches, drawing a generation of computer scientists into biological problems and driving the development of assembly algorithms. As the quantity of genomic data has grown rapidly in the ensuing decades, biology has drawn on mathematical, statistical, and computational advances to expand the analyses of these and other data, most recently with deep learning models.</p>

    <p>A further computational challenge for the HGP was making the data accessible to researchers, both in its raw form—while maintaining security and confidentiality of personal genomic information—and in a manner that allowed effective querying and visualization. The need for data portals, a relatively late realization in the HGP, drove the creation of some of the first large-scale biological databases and innovative platforms to access, analyze, search, and visualize the data, in particular the University of California, Santa Cruz, “Genome Browser”. The Genome Browser’s “tracks” concept and sustained software engineering set the bar for future endeavors and are among its enduring legacies, both as an essential research resource and as inspiration for other genomic data platforms.</p>

    <p>The HGP rapidly changed a climate of mostly small-scale collaboration and limited prepublication data sharing, by demonstrating the value of big data and the reference maps and by pioneering the principles necessary to undertake the creation and operation of a large international consortium. The Bermuda Principles of 1996, and their expansion in 2003 as the Fort Lauderdale Agreement, have served as important guidance around biological data sharing and credit attribution ever since. The HGP became a blueprint for many consortia that openly share data to accelerate science—such as the 1000 Genomes Project, The Cancer Genome Atlas (TCGA), the International Cancer Genome Consortium, ENCODE, gnomAD, the BRAIN Initiative, and the Human Cell Atlas—each assembling reference maps for different challenges as a public good.</p>

    <p>The HGP’s ultimate promise was to improve human lives, moving from biological understanding of disease to diagnosis, treatment, or even prevention. The reference genome has already begun to make this impact, most prominently in rare neonatal disorders and cancer. For example, researchers can now more readily identify the specific mutations underpinning rare genetic disorders, and begin to develop mechanistic understanding and treatment options, while enabling families to plan future pregnancies and, through shared data resources, connect them to other similar patients. In cancer, genetic markers and profiles are leading to improved diagnosis through routine standard assays, precision treatments, and new ways to monitor disease progression and treatment response less invasively through liquid biopsies, and single-cell profiling is helping reveal tumor heterogeneity in unprecedented detail.</p>
  `,
  vocabulary: [
    {
      word: "profound",
      wordType: "adjective",
      definition: "very great or intense; having a deep effect",
      example: "The project had a profound effect on biomedical research.",
      synonyms: ["deep", "far-reaching", "major"],
    },
    {
      word: "leverage",
      wordType: "verb",
      definition: "to use something to the maximum advantage",
      example: "Scientists want to fully leverage this knowledge.",
      synonyms: ["exploit", "make use of", "harness"],
    },
    {
      word: "pinpoint",
      wordType: "verb",
      definition: "to find or identify something exactly",
      example: "Mapping tools helped pinpoint the genes behind some disorders.",
      synonyms: ["identify", "locate", "isolate"],
    },
    {
      word: "insufficient",
      wordType: "adjective",
      definition: "not enough for a particular purpose",
      example: "Older mapping techniques were insufficient.",
      synonyms: ["inadequate", "lacking"],
    },
    {
      word: "propel",
      wordType: "verb",
      definition: "to push or drive something forward",
      example: "New technology helped propel the launch of the project.",
      synonyms: ["drive", "spur", "push"],
    },
    {
      word: "undermine",
      wordType: "verb",
      definition: "to gradually weaken or damage something",
      example: "Critics feared it could undermine other research.",
      synonyms: ["weaken", "erode", "sabotage"],
    },
    {
      word: "decipher",
      wordType: "verb",
      definition: "to discover the meaning of something difficult to understand",
      example: "The genome helped decipher disease biology.",
      synonyms: ["decode", "interpret", "unravel"],
    },
    {
      word: "susceptibility",
      wordType: "noun",
      definition: "the state of being easily affected or harmed by something",
      example: "Ancient DNA reveals susceptibility to disease.",
      synonyms: ["vulnerability", "predisposition"],
    },
    {
      word: "elucidate",
      wordType: "verb",
      definition: "to make something clear; to explain",
      example: "New methods are elucidating gene function.",
      synonyms: ["clarify", "explain", "shed light on"],
    },
    {
      word: "usher in",
      wordType: "verb phrase",
      definition: "to cause or mark the start of something new",
      example: "The reference ushered in modern computational biology.",
      synonyms: ["herald", "launch", "introduce"],
    },
    {
      word: "consortium",
      wordType: "noun",
      definition: "a group of organisations working together (plural: consortia)",
      example: "Running an international consortium needed new principles.",
      synonyms: ["alliance", "partnership", "coalition"],
    },
    {
      word: "unprecedented",
      wordType: "adjective",
      definition: "never having happened or existed before",
      example: "Tumours can now be studied in unprecedented detail.",
      synonyms: ["unparalleled", "unheard-of", "record"],
    },
  ],
  pronunciation: [
    {
      word: "genome",
      ipa: "/JEE-nohm/",
      syllables: "ge-nome",
      tip: "Stress JEE; rhymes with 'home'.",
    },
    {
      word: "Mendelian",
      ipa: "/men-DEE-lee-un/",
      syllables: "Men-de-li-an",
      tip: "Stress DEE.",
    },
    {
      word: "susceptibility",
      ipa: "/suh-sep-tuh-BIL-uh-tee/",
      syllables: "sus-cep-ti-bil-i-ty",
      tip: "Stress BIL; -ility words stress the syllable before -ity.",
    },
    {
      word: "consortium",
      ipa: "/kun-SOR-shee-um/",
      syllables: "con-sor-ti-um",
      tip: "Stress SOR; 'ti' sounds like 'shee'.",
    },
    {
      word: "heterogeneity",
      ipa: "/het-uh-roh-juh-NEE-uh-tee/",
      syllables: "het-er-o-ge-ne-i-ty",
      tip: "Stress NEE.",
    },
    {
      word: "biopsies",
      ipa: "/BY-op-seez/",
      syllables: "bi-op-sies",
      tip: "Stress BY.",
    },
  ],
  collocations: [
    "drug development",
    "genetic variation",
    "rare disease",
    "big data",
    "data sharing",
    "public good",
  ],
  questions: [
    {
      paragraph: 1,
      question: "According to the writers, which part of the HGP’s mission is still unfinished?",
      options: [
        "Sequencing the full human genome",
        "Understanding how genomic information shapes cells and organisms",
        "Building online data portals",
      ],
      answer: 1,
      paraphrase: {
        question: "still unfinished",
        passage:
          "still incomplete 20 years later—to understand how genomic information leads to the development, function, and malfunction of cells",
      },
    },
    {
      paragraph: 2,
      question: "Why were older mapping techniques not enough for common diseases?",
      options: [
        "Several genes are involved in them",
        "They only affect a few families",
        "Sequencing machines did not exist",
      ],
      answer: 0,
      paraphrase: {
        question: "several genes are involved",
        passage: "where multiple genes are at play",
      },
    },
    {
      paragraph: 3,
      question: "What did critics initially fear about the project?",
      options: [
        "It would take too long to finish",
        "It could distract from studying individual genes",
        "It would reveal private patient data",
      ],
      answer: 1,
      paraphrase: {
        question: "distract from studying individual genes",
        passage: "could undermine attempts to understand the function of individual genes",
      },
    },
    {
      paragraph: 6,
      question: "What effect did the HGP have on computer scientists?",
      options: [
        "It drew many of them into biology",
        "It replaced them with biologists",
        "It made their algorithms unnecessary",
      ],
      answer: 0,
      paraphrase: {
        question: "drew many of them into biology",
        passage: "drawing a generation of computer scientists into biological problems",
      },
    },
    {
      paragraph: 8,
      question: "What are the Bermuda Principles mainly about?",
      options: [
        "Sharing biological data and giving credit",
        "Funding international cancer research",
        "Protecting patients’ consent",
      ],
      answer: 0,
      paraphrase: {
        question: "sharing biological data and giving credit",
        passage: "guidance around biological data sharing and credit attribution",
      },
    },
  ],
  tips: [
    {
      paragraph: 2,
      text: "“Pinpoint” = identify exactly. It is a Band 7+ alternative to “find”.",
    },
    {
      paragraph: 5,
      text: "The metaphor “the microscope of the 21st century” signals importance. It’s a classic target for Matching Information questions.",
    },
  ],
};

export const SCIENCE_ARTICLES_2026: Article[] = [ALZHEIMERS, FOSSIL_FUELS, QUANTUM, HUMAN_GENOME];
