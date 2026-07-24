/* Reading passage catalogue.
   Extracted from the route so the data can be shared with the admin
   content registry (src/lib/content-registry.ts) as well as the page. */

export type Passage = {
  id: string;
  title: string;
  passageNumber: 1 | 2 | 3;
  description?: string;
  htmlFile?: string;
  content?: string;
  isPremium: boolean;
  isNew?: boolean;
};

export const PASSAGES: Passage[] = [
  // Newest tests first — add new tests at the TOP of this list.
  // === Batch 5: individual tests split from multi-passage "marathon" mocks ===
  {
    id: "new-the-development-of-the-silk-industry",
    title: "The Development of the Silk Industry",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "How silk production spread from ancient China across the world — with note completion, sentence completion and True/False/Not Given.",
    htmlFile: "/passages/NEW_the_development_of_the_silk_industry.html",
  },
  {
    id: "new-walking-and-shoes-eighteenth-century-london",
    title: "Walking and Shoes in Eighteenth-Century London",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "How improved streets turned walking into a fashionable pastime, and reshaped footwear — with section matching, sentence completion and multiple choice.",
    htmlFile: "/passages/NEW_walking_and_shoes_in_eighteenth_century_london.html",
  },
  {
    id: "new-the-discovery-of-a-baby-mammoth",
    title: "The Discovery of a Baby Mammoth",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "The near-perfect frozen mammoth found in Siberia and what it reveals about a vanished species — with a mix of IELTS question types.",
    htmlFile: "/passages/NEW_the_discovery_of_a_baby_mammoth.html",
  },
  {
    id: "new-mercator-the-map-maker",
    title: "Mercator – The Map Maker",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "The life of the cartographer whose projection reshaped how we picture the world — with True/False/Not Given and note completion.",
    htmlFile: "/passages/NEW_mercator_the_map_maker.html",
  },
  {
    id: "new-what-makes-a-musical-expert",
    title: "What Makes a Musical Expert?",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "Whether musical expertise is innate or learned, and how it can be measured — with a range of IELTS question types.",
    htmlFile: "/passages/NEW_what_makes_a_musical_expert.html",
  },
  // === Batch 4: reading tests reconstructed from scanned PDFs via OCR ===
  {
    id: "new-youth-homelessness",
    title: "Youth Homelessness",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "The difficulty of measuring youth homelessness in Britain and the models used to explain it — with multiple choice, a word-bank summary and Yes/No/Not Given.",
    htmlFile: "/passages/NEW_youth_homelessness.html",
  },
  {
    id: "new-the-nuisance-of-noise",
    title: "The Nuisance of Noise",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "A history of humanity's struggle against unwanted noise, from Hippocrates to noise-cancelling headphones — with section matching, multiple-selection and sentence completion.",
    htmlFile: "/passages/NEW_the_nuisance_of_noise.html",
  },
  {
    id: "new-what-would-happen-if-all-trees-disappeared",
    title: "What Would Happen If All the World's Trees Disappeared?",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "How the loss of all forests would reshape climate, oceans and human life — with paragraph matching, match-the-researcher and summary completion.",
    htmlFile: "/passages/NEW_what_would_happen_if_all_the_worlds_trees_disappeared.html",
  },
  {
    id: "new-redesigning-the-cleveland-museum-of-art",
    title: "Redesigning the Cleveland Museum of Art",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "How a $320m renovation rethought the museum around 'cultural parity' — with multiple choice, Yes/No/Not Given and a word-bank summary.",
    htmlFile: "/passages/NEW_redesigning_the_cleveland_museum_of_art.html",
  },
  // === Batch 3: reading tests reconstructed from source PDFs ===
  {
    id: "new-the-women-scientists-of-bologna",
    title: "The Women Scientists of Bologna",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "How 18th-century Italy uniquely opened university science to women — with paragraph matching, summary completion and match-the-scholar questions.",
    htmlFile: "/passages/NEW_the_women_scientists_of_bologna.html",
  },
  {
    id: "new-is-artificial-intelligence-a-threat",
    title: "Is Artificial Intelligence a Threat?",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "Gary Marcus weighs whether advanced AI should worry us — with multiple choice, Yes/No/Not Given and a word-bank summary.",
    htmlFile: "/passages/NEW_is_artificial_intelligence_a_threat.html",
  },
  {
    id: "new-thinking-for-themselves",
    title: "Thinking for Themselves",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "Insights into animal intelligence, from Alex the parrot to tool-making crows — with sentence-ending matching, multiple choice and Yes/No/Not Given.",
    htmlFile: "/passages/NEW_thinking_for_themselves.html",
  },
  {
    id: "new-translating-a-key-to-international-understanding",
    title: "Translating: A Key to International Understanding?",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "What makes translation so complex, and the many forms it takes — with paragraph matching, summary completion, feature matching and multiple-selection.",
    htmlFile: "/passages/NEW_translating_a_key_to_international_understanding.html",
  },
  {
    id: "new-the-economic-effect-of-climate",
    title: "The Economic Effect of Climate",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "William Masters's research linking frost, latitude and national wealth — with paragraph-heading matching and sentence completion.",
    htmlFile: "/passages/NEW_the_economic_effect_of_climate.html",
  },
  {
    id: "new-the-future-of-food-packaging",
    title: "The Future of Food Packaging",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "Edible, nonstick, self-dissolving and compressed packaging innovations — with heading matching, company matching and sentence completion.",
    htmlFile: "/passages/NEW_the_future_of_food_packaging.html",
  },
  {
    id: "new-risk-taking",
    title: "Risk Taking",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "How individuals and institutions weigh loss against gain when facing risk — with sentence-ending matching, paragraph matching and multiple choice.",
    htmlFile: "/passages/NEW_risk_taking.html",
  },
  // === Batch 2: reading tests reconstructed from source PDFs ===
  {
    id: "new-the-pyramid-of-cestius",
    title: "The Pyramid of Cestius",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "The 2000-year-old Roman pyramid restored by archaeologists — with True/False/Not Given and note-completion questions.",
    htmlFile: "/passages/NEW_the_pyramid_of_cestius.html",
  },
  {
    id: "new-why-do-singers-lose-their-voices",
    title: "Why Do Singers Lose Their Voices?",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "How vocal-cord damage cuts short singers' careers — with section-matching, sentence completion and match-the-person questions.",
    htmlFile: "/passages/NEW_why_do_singers_lose_their_voices.html",
  },
  {
    id: "new-the-fashion-industry",
    title: "The Fashion Industry",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "The global business of making and selling clothes — with paragraph-heading matching, summary completion and multiple-selection questions.",
    htmlFile: "/passages/NEW_the_fashion_industry.html",
  },
  {
    id: "new-the-development-of-television-in-britain",
    title: "The Development of Television and Its Introduction in Britain",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "The race between mechanical and electronic television and its arrival in Britain — with section-matching, researcher-matching and sentence completion.",
    htmlFile: "/passages/NEW_the_development_of_television_and_its_introduction_in_britai.html",
  },
  {
    id: "new-how-the-petri-dish-supports-scientific-advances",
    title: "How the Petri Dish Supports Scientific Advances",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "How a simple Petri dish still drives cutting-edge Cambridge research — with section-matching, match-the-person and summary completion.",
    htmlFile: "/passages/NEW_how_the_petri_dish_supports_scientific_advances.html",
  },
  {
    id: "new-creative-problem-solving",
    title: "Creative Problem-Solving",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "What neuroscience reveals about insight and puzzle-solving — with section-matching, match-the-researcher and summary completion.",
    htmlFile: "/passages/NEW_creative_problem_solving.html",
  },
  // === Batch import: 34 IELTS Reading practice tests (converted from source HTML) ===
  {
    id: "new-conquering-the-south-pole",
    title: "Conquering the South Pole",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_conquering_the_south_pole.html",
  },
  {
    id: "new-sydney-opera-house",
    title: "Sydney Opera House",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_sydney_opera_house.html",
  },
  {
    id: "new-the-origins-of-tennis",
    title: "The origins of tennis",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_the_origins_of_tennis.html",
  },
  {
    id: "new-traditional-farming-in-zambias-luapula-province",
    title: "Traditional Farming in Zambia's Luapula Province",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (12 questions) covering note/summary completion, True/False/Not Given & multiple-choice.",
    htmlFile: "/passages/NEW_traditional_farming_in_zambias_luapula_province.html",
  },
  {
    id: "new-the-history-of-the-picnic",
    title: "The history of the picnic",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_the_history_of_the_picnic.html",
  },
  {
    id: "new-in-deep-water",
    title: "In Deep Water",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_in_deep_water.html",
  },
  {
    id: "new-transport-and-transport-systems-during-the-roman-empire",
    title: "Transport and transport systems during the Roman Empire",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_transport_and_transport_systems_during_the_roman_empire.html",
  },
  {
    id: "new-the-tuatara-of-new-zealand",
    title: "The Tuatara of New Zealand",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_the_tuatara_of_new_zealand.html",
  },
  {
    id: "new-investing-in-the-future",
    title: "Investing in the Future",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_investing_in_the_future.html",
  },
  {
    id: "new-socotra-island",
    title: "Socotra Island",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_socotra_island.html",
  },
  {
    id: "new-steam-across-the-water",
    title: "Steam across the water",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering note/summary completion, True/False/Not Given & multiple-choice.",
    htmlFile: "/passages/NEW_steam_across_the_water.html",
  },
  {
    id: "new-the-development-of-art-appreciation-in-melbourne-australia",
    title: "The development of art appreciation in Melbourne, Australia",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_the_development_of_art_appreciation_in_melbourne_australia.html",
  },
  {
    id: "new-flying-the-coast",
    title: "Flying the Coast",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_flying_the_coast.html",
  },
  {
    id: "new-museums-and-family-visitors-in-australia",
    title: "Museums and family visitors in Australia",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering note/summary completion, True/False/Not Given & multiple-choice.",
    htmlFile: "/passages/NEW_museums_and_family_visitors_in_australia.html",
  },
  {
    id: "new-the-origin-of-paper",
    title: "The Origin of Paper",
    passageNumber: 1,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 1 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_the_origin_of_paper.html",
  },
  {
    id: "new-born-to-trade",
    title: "Born to Trade",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 2 practice test (13 questions) covering matching, True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_born_to_trade.html",
  },
  {
    id: "new-flood-control-in-the-usa",
    title: "Flood control in the USA",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 2 practice test (11 questions) covering matching, note/summary completion.",
    htmlFile: "/passages/NEW_flood_control_in_the_usa.html",
  },
  {
    id: "new-healthy-buildings-productive-people",
    title: "Healthy buildings, productive people",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 2 practice test (13 questions) covering matching, True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_healthy_buildings_productive_people.html",
  },
  {
    id: "new-public-art-programs-research-update",
    title: "Public Art Programs: Research Update",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 2 practice test (13 questions) covering matching, True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_public_art_programs_research_update.html",
  },
  {
    id: "new-the-role-of-error-in-the-learning-process",
    title: "The role of error in the learning process",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 2 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_the_role_of_error_in_the_learning_process.html",
  },
  {
    id: "new-nanotechnology-the-science-of-the-very-small",
    title: "Nanotechnology: the science of the very small",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 2 practice test (13 questions) covering note/summary completion, True/False/Not Given & multiple-choice, multiple-selection.",
    htmlFile: "/passages/NEW_nanotechnology_the_science_of_the_very_small.html",
  },
  {
    id: "new-can-a-global-database-of-fossils-help-us-predict-the-future-",
    title: "Can a global database of fossils help us predict the future of biodiversity on Earth?",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 2 practice test (13 questions) covering matching, multiple-selection, True/False/Not Given & multiple-choice.",
    htmlFile: "/passages/NEW_can_a_global_database_of_fossils_help_us_predict_the_future_.html",
  },
  {
    id: "new-babies-cry-in-their-mother-tongue",
    title: "Babies cry in their mother tongue",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 2 practice test (13 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_babies_cry_in_their_mother_tongue.html",
  },
  {
    id: "new-homo-ergaster",
    title: "Homo ergaster",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 2 practice test (11 questions) covering matching, note/summary completion.",
    htmlFile: "/passages/NEW_homo_ergaster.html",
  },
  {
    id: "new-why-dont-we-sleep",
    title: "Why don't we sleep?",
    passageNumber: 2,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 2 practice test (13 questions) covering note/summary completion, True/False/Not Given & multiple-choice.",
    htmlFile: "/passages/NEW_why_dont_we_sleep.html",
  },
  {
    id: "new-all-in-the-family",
    title: "All in the family",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 3 practice test (14 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_all_in_the_family.html",
  },
  {
    id: "new-architecture-in-britain",
    title: "Architecture in Britain",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 3 practice test (14 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_architecture_in_britain.html",
  },
  {
    id: "new-marine-mammals-exhibit-their-ingenuity",
    title: "Marine mammals exhibit their ingenuity",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 3 practice test (14 questions) covering True/False/Not Given & multiple-choice.",
    htmlFile: "/passages/NEW_marine_mammals_exhibit_their_ingenuity.html",
  },
  {
    id: "new-when-people-are-deaf-to-music",
    title: "When people are 'deaf' to music",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 3 practice test (9 questions) covering True/False/Not Given & multiple-choice.",
    htmlFile: "/passages/NEW_when_people_are_deaf_to_music.html",
  },
  {
    id: "new-rebranding-art-museums",
    title: "Rebranding art museums",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 3 practice test (14 questions) covering True/False/Not Given & multiple-choice.",
    htmlFile: "/passages/NEW_rebranding_art_museums.html",
  },
  {
    id: "new-songs-of-ourselves",
    title: "Songs of ourselves",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 3 practice test (14 questions) covering matching, True/False/Not Given & multiple-choice.",
    htmlFile: "/passages/NEW_songs_of_ourselves.html",
  },
  {
    id: "new-tasmanias-museum-of-old-and-new-art",
    title: "Tasmania's Museum of Old and New Art",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 3 practice test (14 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_tasmanias_museum_of_old_and_new_art.html",
  },
  {
    id: "new-the-art-of-deception",
    title: "The art of deception",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 3 practice test (9 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_the_art_of_deception.html",
  },
  {
    id: "new-the-long-road-to-artificial-intelligence",
    title: "The Long Road to Artificial Intelligence",
    passageNumber: 3,
    isPremium: true,
    isNew: true,
    description:
      "IELTS Academic Reading — Passage 3 practice test (14 questions) covering True/False/Not Given & multiple-choice, note/summary completion.",
    htmlFile: "/passages/NEW_the_long_road_to_artificial_intelligence.html",
  },
  {
    id: "p1-jethro-tull-seed-drill",
    title: "Jethro Tull – Inventor of the Seed Drill",
    passageNumber: 1,
    isPremium: false,
    description:
      "The English gentleman farmer who revolutionised agriculture by inventing the seed drill — with diagram labelling, note completion and True/False/Not Given questions.",
    htmlFile: "/passages/Passage_1_Jethro_Tull_Seed_Drill.html",
    isNew: true,
  },
  // 30-day reading challenge – Days 1–17
  {
    id: "day1-p1-what-lucy-taught-us",
    title: "What Lucy Taught Us",
    passageNumber: 1,
    isPremium: false,
    description:
      "The discovery of the Lucy skeleton in Ethiopia and what it revealed about human evolution — with True/False/Not Given and note-completion questions.",
    htmlFile: "/passages/Day_1_P1_What_Lucy_Taught_Us.html",
    isNew: true,
  },
  {
    id: "day2-p2-banff-national-park",
    title: "Banff National Park",
    passageNumber: 2,
    isPremium: false,
    description:
      "How a heritage strategy tries to protect Banff National Park's ecology while sustaining tourism — with Yes/No/Not Given, multiple-selection and title-choice questions.",
    htmlFile: "/passages/Day_2_P2_Banff_National_Park.html",
    isNew: true,
  },
  {
    id: "day3-p3-kinesics",
    title: "Kinesics",
    passageNumber: 3,
    isPremium: false,
    description:
      "The study of body language and how non-verbal signals reveal what words conceal — with paragraph-heading matching, Yes/No/Not Given and purpose questions.",
    htmlFile: "/passages/Day_3_P3_Kinesics.html",
    isNew: true,
  },
  {
    id: "day4-p1-exploration-through-the-ages",
    title: "Exploration Through the Ages",
    passageNumber: 1,
    isPremium: false,
    description:
      "Why humans have explored, from prehistoric hunters to 15th-century trade — with sentence-ending matching and note-completion questions.",
    htmlFile: "/passages/Day_4_P1_Exploration_Through_the_Ages.html",
    isNew: true,
  },
  {
    id: "day5-p2-demystifying-our-dreamworld",
    title: "Demystifying Our Dreamworld",
    passageNumber: 2,
    isPremium: false,
    description:
      "Lucid dreaming, the NovaDreamer device and the debate over controlling our dreams — with paragraph-heading matching and True/False/Not Given questions.",
    htmlFile: "/passages/Day_5_P2_Demystifying_Our_Dreamworld.html",
    isNew: true,
  },
  {
    id: "day6-p3-unlocking-the-mystery-of-dreams",
    title: "Unlocking the Mystery of Dreams",
    passageNumber: 3,
    isPremium: false,
    description:
      "How brain-imaging research is reshaping theories of why we dream — with paragraph matching, multiple choice and people-matching questions.",
    htmlFile: "/passages/Day_6_P3_Unlocking_the_Mystery_of_Dreams.html",
    isNew: true,
  },
  {
    id: "day7-p1-moving-continents",
    title: "Moving Continents",
    passageNumber: 1,
    isPremium: false,
    description:
      "From Wegener's continental drift to the theory of plate tectonics — with short-answer and paragraph-matching questions.",
    htmlFile: "/passages/Day_7_P1_Moving_Continents.html",
    isNew: true,
  },
  {
    id: "day8-p2-how-rational-are-we-assessing-risks",
    title: "How Rational Are We When We Assess Risks?",
    passageNumber: 2,
    isPremium: false,
    description:
      "Why people misjudge risk, from rail crashes to seatbelts and natural disasters — with note-completion and paragraph-matching questions.",
    htmlFile: "/passages/Day_8_P2_How_Rational_Are_We_Assessing_Risks.html",
    isNew: true,
  },
  {
    id: "day9-p3-you-are-what-you-speak",
    title: "You Are What You Speak",
    passageNumber: 3,
    isPremium: false,
    description:
      "Does the language you speak shape the way you think? — with Yes/No/Not Given, language-matching and word-bank summary questions.",
    htmlFile: "/passages/Day_9_P3_You_Are_What_You_Speak.html",
    isNew: true,
  },
  {
    id: "day10-p1-endangered-chocolate",
    title: "Endangered Chocolate",
    passageNumber: 1,
    isPremium: false,
    description:
      "The history of cacao and the threats of disease, deforestation and demand facing chocolate — with multiple choice, paragraph matching and note completion.",
    htmlFile: "/passages/Day_10_P1_Endangered_Chocolate.html",
    isNew: true,
  },
  {
    id: "day11-p2-what-is-personality",
    title: "What Is Personality?",
    passageNumber: 2,
    isPremium: false,
    description:
      "What personality is, where it comes from, and the dimensions psychologists use to describe it — with paragraph-heading matching and Yes/No/Not Given questions.",
    htmlFile: "/passages/Day_11_P2_What_Is_Personality.html",
    isNew: true,
  },
  {
    id: "day12-p3-playing-psychological-games",
    title: "Playing Psychological Games",
    passageNumber: 3,
    isPremium: false,
    description:
      "The 'psychological games' people play in relationships, from harmless to manipulative — with paragraph-heading matching, Yes/No/Not Given and multiple choice.",
    htmlFile: "/passages/Day_12_P3_Playing_Psychological_Games.html",
    isNew: true,
  },
  {
    id: "day13-p1-history-of-the-biro",
    title: "The History of the Biro",
    passageNumber: 1,
    isPremium: false,
    description:
      "How the ballpoint pen was invented, patented and popularised — with paragraph-heading matching, multiple choice and short-answer questions.",
    htmlFile: "/passages/Day_13_P1_The_History_of_the_Biro.html",
    isNew: true,
  },
  {
    id: "day14-p2-poppyseed-sandwich-company",
    title: "Business Case Study: Poppyseed Sandwich Company",
    passageNumber: 2,
    isPremium: false,
    description:
      "How new owners transformed a struggling ready-made sandwich business — with paragraph matching and time-period classification questions.",
    htmlFile: "/passages/Day_14_P2_Poppyseed_Sandwich_Company.html",
    isNew: true,
  },
  {
    id: "day15-p3-dressed-to-dazzle",
    title: "Dressed to Dazzle",
    passageNumber: 3,
    isPremium: false,
    description:
      "High-tech fibres, nanotechnology and electronic fabrics transforming fashion — with company-matching and summary-completion questions.",
    htmlFile: "/passages/Day_15_P3_Dressed_to_Dazzle.html",
    isNew: true,
  },
  {
    id: "day16-p2-jumping-spiders",
    title: "Jumping Spiders",
    passageNumber: 2,
    isPremium: false,
    description:
      "How Portia jumping spiders stalk their prey by vibrating webs — with paragraph matching and multiple-choice questions.",
    htmlFile: "/passages/Day_16_P2_Jumping_Spiders.html",
    isNew: true,
  },
  {
    id: "day17-p2-crisis-in-advertising",
    title: "The Crisis in Advertising",
    passageNumber: 2,
    isPremium: false,
    description:
      "Why traditional advertising is losing its reach and how companies are responding — with paragraph-heading matching and Yes/No/Not Given questions.",
    htmlFile: "/passages/Day_17_P2_The_Crisis_in_Advertising.html",
    isNew: true,
  },
  // 30-day reading challenge – Days 18–30
  {
    id: "day18-p2-lapis-lazuli",
    title: "Lapis Lazuli",
    passageNumber: 2,
    isPremium: false,
    description:
      "An academic passage on the history, composition and uses of lapis lazuli — from ancient jewellery to the pigment ultramarine — with paragraph-matching, True/False/Not Given and list-selection questions.",
    htmlFile: "/passages/Day_18_P2_Lapis_Lazuli.html",
    isNew: true,
  },
  {
    id: "day19-p1-british-at-play",
    title: "The British at Play",
    passageNumber: 1,
    isPremium: false,
    description:
      "A review of Nigel Townson's social history of British sport, exploring sport's links to class, gender, violence and commercialism — with summary completion and sentence-ending questions.",
    htmlFile: "/passages/Day_19_P1_British_at_Play.html",
    isNew: true,
  },
  {
    id: "day20-p3-strange-world-of-sight",
    title: "The Strange World of Sight",
    passageNumber: 3,
    isPremium: false,
    description:
      "Richard Gregory explores how perception depends on memory and expectation, drawing on cases of people who gained sight as adults — with multiple choice, Yes/No/Not Given and summary questions.",
    htmlFile: "/passages/Day_20_P3_The_Strange_World_of_Sight.html",
    isNew: true,
  },
  {
    id: "day21-p1-how-consumers-decide",
    title: "How Consumers Decide",
    passageNumber: 1,
    isPremium: false,
    description:
      "Research into heuristic and systematic processing and the crucial role of product packaging in consumer choice — with True/False/Not Given, multiple choice and summary completion.",
    htmlFile: "/passages/Day_21_P1_How_Consumers_Decide.html",
    isNew: true,
  },
  {
    id: "day22-p2-practical-intelligence",
    title: "Practical Intelligence Lends a Hand",
    passageNumber: 2,
    isPremium: false,
    description:
      "Professor Sternberg's research on practical intelligence and its inverse relationship with academic intelligence — with multiple choice and classification questions.",
    htmlFile: "/passages/Day_22_P2_Practical_Intelligence.html",
    isNew: true,
  },
  {
    id: "day23-p2-sports-science",
    title: "Sports Science",
    passageNumber: 2,
    isPremium: false,
    description:
      "How biomechanics, physiology, psychology and technology help Olympic athletes perform — with paragraph-matching, people-matching and diagram-labelling questions (Questions 17–29).",
    htmlFile: "/passages/Day_23_P2_Sports_Science.html",
    isNew: true,
  },
  {
    id: "day24-p1-giant-panda",
    title: "The Giant Panda",
    passageNumber: 1,
    isPremium: false,
    description:
      "How DNA testing settled what a panda is, and how the giant panda and spectacled bear compare — with classification and sentence-completion questions.",
    htmlFile: "/passages/Day_24_P1_The_Giant_Panda.html",
    isNew: true,
  },
  {
    id: "day25-p3-ingenuity-gap",
    title: "The Ingenuity Gap",
    passageNumber: 3,
    isPremium: false,
    description:
      "Thomas Homer-Dixon on society's growing need for 'ingenuity' and why its supply may fall short — with sentence-endings, multiple choice and Yes/No/Not Given questions.",
    htmlFile: "/passages/Day_25_P3_The_Ingenuity_Gap.html",
    isNew: true,
  },
  {
    id: "day26-p3-benefits-of-being-bilingual",
    title: "The Benefits of Being Bilingual",
    passageNumber: 3,
    isPremium: false,
    description:
      "Research on the cognitive, neurological and lifelong benefits of bilingualism — with table completion, Yes/No/Not Given and paragraph-matching questions.",
    htmlFile: "/passages/Day_26_P3_Benefits_of_Being_Bilingual.html",
    isNew: true,
  },
  {
    id: "day28-p1-experience-versus-speed",
    title: "Experience versus Speed",
    passageNumber: 1,
    isPremium: false,
    description:
      "How the ageing brain compensates for slower processing with accuracy and experience — with multiple choice, sentence-ending and summary completion questions.",
    htmlFile: "/passages/Day_28_P1_Experience_versus_Speed.html",
    isNew: true,
  },
  {
    id: "day29-p2-robotic-crop-breeding",
    title: "Robotic Approach to Crop Breeding",
    passageNumber: 2,
    isPremium: false,
    description:
      "A robot that identifies drought-tolerant sunflowers by measuring leaf temperature and transpiration efficiency — with sentence-completion and paragraph-matching questions.",
    htmlFile: "/passages/Day_29_P2_Robotic_Crop_Breeding.html",
    isNew: true,
  },
  {
    id: "day30-p3-mother-tongue-in-education",
    title: "The Significant Role of Mother Tongue in Education",
    passageNumber: 3,
    isPremium: false,
    description:
      "Why developing children's mother tongue supports, rather than hinders, their education in the majority language — with multiple choice, summary (word bank) and Yes/No/Not Given questions.",
    htmlFile: "/passages/Day_30_P3_Mother_Tongue_in_Education.html",
    isNew: true,
  },
  // Volume 11 – Test 1 (Premium)
  {
    id: "vol11-t1-r1",
    title: "Volume 11 Test 1 – The History of the Pencil",
    passageNumber: 1,
    isPremium: true,
    description:
      "Volume 11 Test 1 Reading Passage 1: the origins of the modern pencil, from 16th-century Borrowdale graphite to how pencils are manufactured today — questions 1–13.",
    htmlFile: "/passages/Vol11_T1_P1_History_of_the_Pencil.html",
    isNew: true,
  },
  {
    id: "vol11-t1-r2",
    title: "Volume 11 Test 1 – How Do Plants Talk to Each Other?",
    passageNumber: 2,
    isPremium: true,
    description:
      "Volume 11 Test 1 Reading Passage 2: research on the subtle chemical, root and possibly acoustic ways plants communicate — questions 14–26.",
    htmlFile: "/passages/Vol11_T1_P2_How_Do_Plants_Talk.html",
    isNew: true,
  },
  {
    id: "vol11-t1-r3",
    title: "Volume 11 Test 1 – We Have Star Performers",
    passageNumber: 3,
    isPremium: true,
    description:
      "Volume 11 Test 1 Reading Passage 3: Jeffrey Pfeffer questions the assumption that talent is fixed and that hiring stars guarantees success — questions 27–40.",
    htmlFile: "/passages/Vol11_T1_P3_Star_Performers.html",
    isNew: true,
  },
  {
    id: "p1-olmec",
    title: "The Olmec and Their Great Stone Heads",
    passageNumber: 1,
    isPremium: false,
    description:
      "An academic passage about the ancient Olmec civilisation of Mesoamerica and the enormous sculpted stone heads they left behind.",
    htmlFile: "/passages/Olmec_CDI_standalone.html",
    isNew: true,
  },
  {
    id: "p1-bar-code",
    title: "The History of the Bar Code",
    passageNumber: 1,
    isPremium: false,
    description:
      "An academic passage tracing the invention and standardisation of the bar code, from a 1948 idea to billions of daily scans.",
    htmlFile: "/passages/Bar_code_CDI_standalone.html",
    isNew: true,
  },
  {
    id: "p2-eating-meat",
    title: "Should We Stop Eating Meat?",
    passageNumber: 2,
    isPremium: false,
    description:
      "An academic passage weighing the environmental costs and trade-offs of a meat-free world.",
    htmlFile: "/passages/Eating_meat_CDI_standalone.html",
    isNew: true,
  },
  // Cambridge IELTS 21 – Test 1
  {
    id: "cam21-t1-r1",
    title: "Cambridge 21 Test 1 – The Davies Sisters",
    passageNumber: 1,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 1 Reading Passage 1: The Davies Sisters — questions 1–13.",
    htmlFile: "/passages/C21_T1_P1_The_Davies_Sisters.html",
    isNew: true,
  },
  {
    id: "cam21-t1-r2",
    title: "Cambridge 21 Test 1 – Why We Need Silence",
    passageNumber: 2,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 1 Reading Passage 2: Why We Need Silence — questions 14–26.",
    htmlFile: "/passages/C21_T1_P2_Why_We_Need_Silence.html",
    isNew: true,
  },
  {
    id: "cam21-t1-r3",
    title: "Cambridge 21 Test 1 – The World of Sugar",
    passageNumber: 3,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 1 Reading Passage 3: The World of Sugar (book review) — questions 27–40.",
    htmlFile: "/passages/C21_T1_P3_The_World_of_Sugar.html",
    isNew: true,
  },
  // Cambridge IELTS 21 – Test 2
  {
    id: "cam21-t2-r1",
    title: "Cambridge 21 Test 2 – Do Animals Dream?",
    passageNumber: 1,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 2 Reading Passage 1: Do Animals Dream? — questions 1–13.",
    htmlFile: "/passages/C21_T2_P1_Do_Animals_Dream.html",
    isNew: true,
  },
  {
    id: "cam21-t2-r2",
    title: "Cambridge 21 Test 2 – Mapungubwe",
    passageNumber: 2,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 2 Reading Passage 2: Mapungubwe — questions 14–26.",
    htmlFile: "/passages/C21_T2_P2_Mapungubwe.html",
    isNew: true,
  },
  {
    id: "cam21-t2-r3",
    title: "Cambridge 21 Test 2 – Artificial Intelligence",
    passageNumber: 3,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 2 Reading Passage 3: Artificial Intelligence — questions 27–40.",
    htmlFile: "/passages/C21_T2_P3_Artificial_Intelligence.html",
    isNew: true,
  },
  // Cambridge IELTS 21 – Test 3
  {
    id: "cam21-t3-r1",
    title: "Cambridge 21 Test 3 – Saving the Saiga",
    passageNumber: 1,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 3 Reading Passage 1: Saving the Saiga — questions 1–13.",
    htmlFile: "/passages/C21_T3_P1_Saving_the_Saiga.html",
    isNew: true,
  },
  {
    id: "cam21-t3-r2",
    title: "Cambridge 21 Test 3 – Getting Around Dar es Salaam",
    passageNumber: 2,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 3 Reading Passage 2: The problems of getting around the city of Dar es Salaam — questions 14–26.",
    htmlFile: "/passages/C21_T3_P2_Dar_es_Salaam.html",
    isNew: true,
  },
  {
    id: "cam21-t3-r3",
    title: "Cambridge 21 Test 3 – Rethinking the Past",
    passageNumber: 3,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 3 Reading Passage 3: Rethinking the Past — questions 27–40.",
    htmlFile: "/passages/C21_T3_P3_Rethinking_the_Past.html",
    isNew: true,
  },
  // Cambridge IELTS 21 – Test 4
  {
    id: "cam21-t4-r1",
    title: "Cambridge 21 Test 4 – The Spread of the Water Hyacinth in Kenya",
    passageNumber: 1,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 4 Reading Passage 1: The problems and benefits created by the spread of the water hyacinth in Kenya — questions 1–13.",
    htmlFile: "/passages/C21_T4_P1_Water_Hyacinth.html",
    isNew: true,
  },
  {
    id: "cam21-t4-r2",
    title: "Cambridge 21 Test 4 – Multilingualism in India",
    passageNumber: 2,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 4 Reading Passage 2: How could multilingualism benefit India's poorest schoolchildren? — questions 14–26.",
    htmlFile: "/passages/C21_T4_P2_Multilingualism_in_India.html",
    isNew: true,
  },
  {
    id: "cam21-t4-r3",
    title: "Cambridge 21 Test 4 – The Globemakers",
    passageNumber: 3,
    isPremium: false,
    description: "Cambridge IELTS 21 Test 4 Reading Passage 3: The Globemakers — The Curious Story of an Ancient Craft — questions 27–40.",
    htmlFile: "/passages/C21_T4_P3_The_Globemakers.html",
    isNew: true,
  },
  {
    id: "p3-piraha",
    title: "The PirahГЈ People of Brazil",
    passageNumber: 3,
    isPremium: false,
    description:
      "An academic passage about the remarkable linguistic and cultural uniqueness of the PirahГЈ tribe in the Amazon rainforest.",
    htmlFile: "/passages/Day_1_Passage_3_Piraha.html",
  },
  {
  id: "p1-dolls",
  title: "Dolls Through the Ages",
  passageNumber: 1,
  isPremium: false,
  description:
    "An academic passage about the history and evolution of dolls from ancient civilisations to modern manufacturing.",
  htmlFile: "/passages/dolls.html",
},
{
  id: "p3-dunes",
  title: "Living Dunes",
  passageNumber: 3,
  isPremium: false,
  description:
    "An academic passage about the behaviour, movement and mysterious singing phenomenon of sand dunes in the world's deserts.",
  htmlFile: "/passages/dunes.html",
},
  { id: "p1-organic-farming", 
   title: "Organic Farming and Chemical Fertilisers", 
   passageNumber: 1, 
   isPremium: false, 
   description: 
     "An academic passage exploring the debate between organic farming and chemical fertilisers, and the future of sustainable agriculture.", 
   htmlFile: "/passages/Day_P1_OrganicFarming_CDI.html", 
  },
{ id: "p2-true-cost-food", 
 title: "The True Cost of Food", 
 passageNumber: 2, 
 isPremium: false, 
 description: 
   "An academic passage examining the hidden environmental and social costs of industrial food production in Britain.", 
 htmlFile: "/passages/Day_P2_TrueCostFood_CDI.html", 
},
{ id: "p3-olive-oil", 
 title: "Olive Oil Production", 
 passageNumber: 3, 
 isPremium: false, 
 description: 
   "An academic passage describing the cultivation, harvesting, and cold-press extraction process of quality olive oil.", 
 htmlFile: "/passages/Day_P3_OliveOil_CDI.html", 
},
{ id: "p4-tv-addiction", 
 title: "TV Addiction", 
 passageNumber: 4, 
 isPremium: false, 
 description: 
   "An academic passage investigating the psychological and behavioural effects of excessive television viewing and its similarities to substance dependence.", 
 htmlFile: "/passages/Day_P4_TVAddiction_CDI.html", 
},
{ id: "p5-farmers-nz", 
 title: "Farmers – An Iconic Chain Store in New Zealand", 
 passageNumber: 5, 
 isPremium: false, 
 description: 
   "An academic passage tracing the century-long history of New Zealand's most iconic department store chain from its mail-order origins to the present day.", 
 htmlFile: "/passages/Day_P5_Farmers_CDI.html", 
},
{ id: "p6-optimism-health", 
 title: "Optimism and Health", 
 passageNumber: 6, 
 isPremium: false, 
 description: 
   "An academic passage reviewing scientific research on how optimism and resilience positively impact physical health, longevity, and the ability to overcome adversity.", 
 htmlFile: "/passages/Day_P6_Optimism_CDI.html", 
},
{ id: "p7-dark-side-technology", 
 title: "The Dark Side of the Technological Boom", 
 passageNumber: 7, 
 isPremium: false, 
 description: 
   "An academic passage analysing the psychological and social costs of the modern electronic workplace, from technostress to reduced creativity.", 
 htmlFile: "/passages/Day_P7_DarkTech_CDI.html", 
},
{ id: "p8-paul-nash", 
 title: "Paul Nash", 
 passageNumber: 8, 
 isPremium: false, 
 description: 
   "An academic passage tracing the life and artistic development of British painter Paul Nash, from his early influences to his work as a war artist.", 
 htmlFile: "/passages/Day_P8_PaulNash_CDI.html", 
},
{ id: "p9-aral-sea", 
 title: "Reclaiming the Future of the Aral Sea", 
 passageNumber: 9, 
 isPremium: false, 
 description: 
   "An academic passage examining the environmental collapse of the Aral Sea due to Soviet-era irrigation and the prospects for partial restoration.", 
 htmlFile: "/passages/Day_P9_AralSea_CDI.html", 
},
{ id: "p10-australian-parrots", 
 title: "Australian Parrots and Their Adaptation to Habitat Change", 
 passageNumber: 10, 
 isPremium: false, 
 description: 
   "An academic passage exploring the diversity of Australian parrot species and how different species have adapted to or been harmed by human-driven habitat change.", 
 htmlFile: "/passages/Day_P10_AustralianParrots_CDI.html", 
},
{ id: "p11-william-gilbert", 
 title: "William Gilbert and Magnetism", 
 passageNumber: 11, 
 isPremium: false, 
 description: 
   "An academic passage on the life and pioneering scientific discoveries of William Gilbert, the father of the science of electricity and magnetism.", 
 htmlFile: "/passages/Day_P11_WilliamGilbert_CDI.html", 
},
{
  id: "p3-mirrors",
  title: "Mirrors",
  passageNumber: 3,
  isPremium: false,
  description:
    "An academic passage exploring the psychological and scientific significance of mirrors, including how they affect human behaviour and self-perception.",
  htmlFile: "/passages/mirrors.html",
},
{
  id: "p1-nintendo",
  title: "Computer Games for Preschoolers: Nintendo's Research and Design Process",
  passageNumber: 1,
  isPremium: false,
  description:
    "An academic passage about the research and design process Nintendo used to develop video games for preschool-aged children.",
  htmlFile: "/passages/nintendo.html",
},
  {
  id: "p1-baobabs",
  title: "The Baobabs of Madagascar",
  passageNumber: 1,
  isPremium: false,
  description:
    "An academic passage about the ancient baobab trees of Madagascar, the threats they face, and the efforts being made to protect them.",
  htmlFile: "/passages/Vol9_P1_Baobabs_CDI.html",
},
{
  id: "p2-coins",
  title: "Coins – The First Form of Money",
  passageNumber: 2,
  isPremium: false,
  description:
    "An academic passage exploring the origins of coins in ancient Greece, their role in trade, and their significance as historical and cultural artefacts.",
  htmlFile: "/passages/Vol9_P2_Coins_CDI.html",
},
{
  id: "p3-grapefruit",
  title: "Creating a Better Grapefruit",
  passageNumber: 3,
  isPremium: false,
  description:
    "An academic passage about how biotech researchers are using compounds to block bitter taste receptors and improve the flavour of food and medicine.",
  htmlFile: "/passages/Vol9_P3_Grapefruit_CDI.html",
},
{
  id: "p3-margaret-mahy",
  title: "The New Zealand Writer Margaret Mahy",
  passageNumber: 3,
  isPremium: false,
  description:
    "An academic passage reviewing the career, writing style, and lasting literary influence of the celebrated New Zealand children's author Margaret Mahy.",
  htmlFile: "/passages/Day_32_P3_Margaret_Mahy_CDI.html",
},
{
  id: "p1-plastics",
  title: "The Development of Plastics",
  passageNumber: 1,
  isPremium: false,
  description:
    "An academic passage tracing the invention and development of synthetic plastics from Bakelite in 1907 to modern biodegradable materials.",
  htmlFile: "/passages/plastics.html",
},
{
  id: "p3-stevenson",
  title: "Robert Louis Stevenson",
  passageNumber: 3,
  isPremium: false,
  description:
    "An academic passage reassessing the literary legacy and lasting influence of the Scottish writer Robert Louis Stevenson.",
  htmlFile: "/passages/stevenson.html",
},
  {
    id: "p2-tv-advertising",
    title: "Children's Comprehension of Television Advertising",
    passageNumber: 2,
    isPremium: false,
    description:
      "An academic passage examining how children understand and are influenced by TV commercials, and the techniques advertisers use to target them.",
    htmlFile: "/passages/Passage_2_TV_Advertising.html",
  },
  {
    id: "p1-thames-tunnel",
    title: "Tunnelling under the Thames",
    passageNumber: 1,
    isPremium: false,
    description:
      "An academic passage about the remarkable engineering challenges behind building the world's first tunnel beneath a navigable river in 19th-century London.",
    htmlFile: "/passages/Tunnelling_under_the_Thames.html",
  },
  {
  id: "p1-trans-atlantic-telegraph-cable",
  title: "How the First Trans-Atlantic Telegraph Cable Was Laid",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about the challenges, materials, funding and impact of laying the first trans-Atlantic telegraph cable.",
  htmlFile: "/passages/how_the_first_trans_atlantic_telegraph_cable_was_laid_passage1.html",
},
{
  id: "p2-removing-unwanted-noise",
  title: "Removing Unwanted Noise",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about methods and technologies used to reduce unwanted noise and improve sound quality.",
  htmlFile: "/passages/removing_unwanted_noise_passage2.html",
},
{
  id: "p3-decisions-decisions",
  title: "Decisions, Decisions",
  passageNumber: 3,
  isPremium: false,
  description:
    "A passage about how people make decisions and the psychological factors that influence choices.",
  htmlFile: "/passages/decisions_decisions_passage3.html",
},
{
  id: "p1-discovering-purple",
  title: "Discovering Purple",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about the history and scientific discovery of purple dye and its importance in industry.",
  htmlFile: "/passages/discovering_purple_passage1.html",
},
{
  id: "p2-beachcombing-early-humans-africa",
  title: "Beachcombing for Early Humans in Africa",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about archaeological evidence of early humans in Africa and what coastal discoveries reveal about their lives.",
  htmlFile: "/passages/beachcombing_for_early_humans_in_africa_passage2.html",
},
{
  id: "p3-rewards-scientific-achievement",
  title: "Rewards for Scientific Achievement",
  passageNumber: 3,
  isPremium: false,
  description:
    "A passage about prizes and recognition given for scientific discoveries and achievements.",
  htmlFile: "/passages/the_bug_picture_passage3.html",
},
{
  id: "p1-bug-picture",
  title: "The Bug Picture",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about insects, colours, and scientific observation of small natural details.",
  htmlFile: "/passages/the_bug_picture_passage3.html",
},
{
  id: "p2-remarkable-power-placebos",
  title: "The Remarkable Power of Placebos",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about placebo effects and how expectations can influence symptoms and treatment outcomes.",
  htmlFile: "/passages/the_remarkable_power_of_placebos_passage2.html",
},
{
  id: "p2-dingo-debate",
  title: "The Dingo Debate",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage discussing the ecological role of dingoes in Australia and the debate over controlling their numbers.",
  htmlFile: "/passages/the_dingo_debate_passage2.html",
},
{
  id: "p3-pacific-navigation-voyaging",
  title: "Pacific Navigation and Voyaging",
  passageNumber: 3,
  isPremium: false,
  description:
    "A passage about how Pacific islanders navigated across vast ocean distances using traditional knowledge and canoe voyaging.",
  htmlFile: "/passages/pacific_navigation_and_voyaging_passage3.html",
},
{
  id: "p2-insect-decision-making",
  title: "Insect Decision-Making",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about how insects such as bees and ants make collective decisions and organise group behaviour.",
  htmlFile: "/passages/insect_decision_making_passage2.html",
},
{
  id: "p3-learning-to-walk",
  title: "Learning to Walk",
  passageNumber: 3,
  isPremium: false,
  description:
    "A passage about the effects of walking surfaces on the body and how uneven ground may benefit health.",
  htmlFile: "/passages/learning_to_walk_passage3.html",
},
{
  id: "p3-hidden-lives-solitary-bees",
  title: "The Hidden Lives of Solitary Bees",
  passageNumber: 3,
  isPremium: false,
  description:
    "A passage about solitary bees, their nesting habits, pollination role and threats from pesticides.",
  htmlFile: "/passages/the_hidden_lives_of_solitary_bees_passage3.html",
},
{
  id: "p2-undoing-our-emotions",
  title: "Undoing Our Emotions",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about positive emotions, stress recovery and the psychological effects of emotional states.",
  htmlFile: "/passages/undoing_our_emotions_passage2.html",
},
{
  id: "p2-chinstrap-penguin-population",
  title: "Chinstrap Penguin Population in the Last 50 Years",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about the decline of chinstrap penguins in Antarctica and the role of climate change in changing ecosystems.",
  htmlFile: "/passages/chinstrap_penguin_population_in_the_last_50_years_passage2.html",
},
{
  id: "p2-developmental-tasks-adolescence",
  title: "Developmental Tasks of Normal Adolescence",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about the physical, intellectual, social and emotional changes adolescents experience while growing into adulthood.",
  htmlFile: "/passages/developmental_tasks_of_normal_adolescence_passage2.html",
},
{
  id: "p3-fluoridation-controversy",
  title: "The Fluoridation Controversy",
  passageNumber: 3,
  isPremium: false,
  description:
    "A passage about the debate over adding fluoride to public water supplies and the scientific and social arguments involved.",
  htmlFile: "/passages/the_fluoridation_controversy_passage3.html",
},
{
  id: "p1-father-of-english-geology",
  title: "The Father of English Geology",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about a key figure in the development of English geology and the study of Earth’s history.",
  htmlFile: "/passages/the_father_of_english_geology_passage1.html",
},
{
  id: "p2-whats-happening-to-our-food",
  title: "What's Happening to Our Food?",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about changes in food production, food quality and concerns about modern diets.",
  htmlFile: "/passages/what_s_happening_to_our_food_passage2.html",
},
{
  id: "p3-rewilding",
  title: "Rewilding",
  passageNumber: 3,
  isPremium: false,
  description:
    "A passage about restoring natural ecosystems and bringing back missing species to improve biodiversity.",
  htmlFile: "/passages/rewilding_passage3.html",
},
{
  id: "p1-early-photographic-processes",
  title: "Early Photographic Processes",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about the development of early photography and the scientific processes behind photographic images.",
  htmlFile: "/passages/early_photographic_processes_passage1.html",
},
{
  id: "p3-planet-earths-blue-heart",
  title: "Planet Earth's Blue Heart",
  passageNumber: 3,
  isPremium: false,
  description:
    "A passage about oceans, water systems and their importance to life on Earth.",
  htmlFile: "/passages/planet_earth_s_blue_heart_passage3.html",
},
  {
    id: "p3-business-innovation",
    title: "Business Innovation",
    passageNumber: 3,
    isPremium: false,
    description:
      "As new 'wonder products' are getting harder and harder to find, what should companies do to survive in today's ever more competitive markets?",
    htmlFile: "/passages/gemini-code-1778993342900.html",
  },
  {
    id: "p1-katherine-mansfield",
    title: "Katherine Mansfield",
    passageNumber: 1,
    isPremium: false,
    description:
      "Katherine Mansfield was a modernist writer of short fiction who was born and brought up in New Zealand.",
    htmlFile: "/passages/gemini-code-1778994470958.html",
  },
  {
    id: "p2-the-tasmanian-tiger",
    title: "The Tasmanian Tiger",
    passageNumber: 2,
    isPremium: false,
    description:
      "The Tasmanian tiger, or thylocine, was a carnivorous marsupial (a meat-eating mammal which carries its young in a pouch).",
    htmlFile: "/passages/gemini-code-1778995279738.html",
  },
  {
  id: "p1-our-vanishing-night",
  title: "Our Vanishing Night",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about light pollution, its effects on the night sky, wildlife, and human understanding of darkness.",
  htmlFile: "/passages/our_vanishing_night_passage1.html",
},
{
  id: "p1-isle-of-eigg",
  title: "Reducing Electricity Consumption on the Isle of Eigg",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage explaining how the Isle of Eigg reduced electricity use through renewable energy, demand control, and community action.",
  htmlFile: "/passages/reducing_electricity_consumption_isle_of_eigg_passage1.html",
},
{
  id: "p1-forgotten-forest",
  title: "The Forgotten Forest",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about the longleaf pine forest in the southern United States and efforts to restore this endangered ecosystem.",
  htmlFile: "/passages/the_forgotten_forest_passage1.html",
},
{
  id: "p1-communicating-in-colour",
  title: "Communicating In Colour",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage examining how chameleons use colour for communication, camouflage, rivalry, and attracting mates.",
  htmlFile: "/passages/communicating_in_colour_passage1.html",
},
  {
  id: "p1-sleep-hunter-gatherers",
  title: "Sleep Study on Modern-Day Hunter-Gatherers Dispels Popular Notions",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about research into the sleep patterns of modern hunter-gatherer societies and what they reveal about human sleep.",
  htmlFile: "/passages/sleep_hunter_gatherers_passage1.html",
},
{
  id: "p1-traffic-jams",
  title: "Traffic Jams",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage explaining why traffic jams happen, how traffic-flow theory studies them, and why congestion is difficult to solve.",
  htmlFile: "/passages/traffic_passage1.html",
},
{
  id: "p1-gold-rush",
  title: "Historical Impact of the California Gold Rush",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about how the California Gold Rush transformed migration, transport, industry, agriculture, and the environment.",
  htmlFile: "/passages/gold_rush_passage1.html",
},
{
  id: "p1-mungo-lady-man",
  title: "Mungo Lady and Mungo Man",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about archaeological discoveries at Lake Mungo and debates about early Australian history and human origins.",
  htmlFile: "/passages/mungo_lady_passage1.html",
},
{
  id: "p1-business-cards",
  title: "The Importance of Business Cards",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage discussing the history, cultural role, and continuing importance of business cards in modern professional life.",
  htmlFile: "/passages/business_cards_passage1.html",
},
{
  id: "p1-english-canal-system",
  title: "The English Canal System",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about the development of England’s inland canal network and its importance during the Industrial Revolution.",
  htmlFile: "/passages/canal_passage1.html",
},
{
  id: "p1-ice-cream-history",
  title: "The History of Ice Cream",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage tracing the origins and development of ice cream from ancient frozen desserts to modern industrial production.",
  htmlFile: "/passages/ice_cream_passage1.html",
},
{
  id: "p1-thomas-cole",
  title: "Thomas Cole: American Nature Painter",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about Thomas Cole, America’s first major landscape artist, and his role in painting and protecting nature.",
  htmlFile: "/passages/thomas_cole_passage1.html",
},
{
  id: "p1-computer-games-preschoolers",
  title: "Computer Games for Preschoolers: Nintendo's Research and Design Process",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about Nintendo’s research and design process for creating computer games suitable for preschool children.",
  htmlFile: "/passages/game_research_passage1.html",
},
{
  id: "p1-media-literacy",
  title: "The Media Literacy of Children: A Review of Research Literature",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage reviewing research on children’s media literacy, including access, understanding, creativity, barriers, and support.",
  htmlFile: "/passages/media_literacy_passage1.html",
},
{
  id: "p1-australias-airborne-dentists",
  title: "Australia's Airborne Dentists",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about how the Royal Flying Doctor Service provides dental care to people living in remote areas of Australia.",
  htmlFile: "/passages/australias_airborne_dentists.html",
},
{
  id: "p1-english-canal-system-2",
  title: "The English Canal System",
  passageNumber: 1,
  isPremium: false,
  description:
    "A historical passage about the development, engineering challenges, and decline of England’s canal transport system.",
  htmlFile: "/passages/english_canal_system.html",
},
{
  id: "p1-rubber",
  title: "Rubber",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage discussing the origins, early uses, and development of rubber as an important commercial material.",
  htmlFile: "/passages/rubber.html",
},
{
  id: "p2-a-great-leap-forward",
  title: "A Great Leap Forward",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about New Zealand’s rare Maud Island frogs and conservation efforts to protect them from extinction.",
  htmlFile: "/passages/a_great_leap_forward.html",
},
{
  id: "p2-the-myth-of-the-eight-hour-sleep",
  title: "The Myth of the Eight-hour Sleep",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage exploring scientific and historical evidence about segmented sleep and the idea of sleeping in two periods.",
  htmlFile: "/passages/the_myth_of_the_eight_hour_sleep.html",
},
{
  id: "p2-decision-fatigue",
  title: "Decision Fatigue",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage explaining how repeated decision-making can reduce self-control and affect the quality of later choices.",
  htmlFile: "/passages/decision_fatigue.html",
},
{
  id: "p2-keeping-the-water-away",
  title: "Keeping the Water Away",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about new approaches to flood control, including restoring flood plains and using natural water-management methods.",
  htmlFile: "/passages/keeping_the_water_away.html",
},
{
  id: "p2-will-eating-less-make-you-live-longer",
  title: "Will Eating Less Make You Live Longer?",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about research into calorie restriction, ageing, and conflicting findings from long-term studies on monkeys.",
  htmlFile: "/passages/will_eating_less_make_you_live_longer.html",
},
{
  id: "p2-the-purpose-of-facial-expressions",
  title: "The Purpose of Facial Expressions",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage examining whether facial expressions show inner emotions or function mainly as social signals.",
  htmlFile: "/passages/the_purpose_of_facial_expressions.html",
},
{
  id: "p3-music-soothes-and-awes",
  title: "Music Soothes and Awes – and May Help Us Heal",
  passageNumber: 3,
  isPremium: false,
  description:
    "A passage about how music affects the brain and how researchers use music therapy to support healing and communication.",
  htmlFile: "/passages/music_soothes_and_awes.html",
},
{
  id: "p3-how-should-reading-be-taught",
  title: "How Should Reading Be Taught?",
  passageNumber: 3,
  isPremium: false,
  description:
    "An academic passage discussing different methods of teaching reading, including phonics, whole-word instruction, and whole-language approaches.",
  htmlFile: "/passages/how_should_reading_be_taught.html",
},
  {
  id: "p1-rufous-hare-wallaby",
  title: "The Rufous Hare-Wallaby",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage about the decline, captive breeding, and conservation efforts to save the Australian rufous hare-wallaby.",
  htmlFile: "/passages/the_rufous_hare_wallaby_passage1.html",
},
{
  id: "p1-secrets-of-the-swarm",
  title: "Secrets of the Swarm",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage exploring how ants, bees, termites, and other swarms make collective decisions and what humans can learn from them.",
  htmlFile: "/passages/secrets_of_the_swarm_passage1.html",
},
{
  id: "p1-story-of-silk",
  title: "The Story of Silk",
  passageNumber: 1,
  isPremium: false,
  description:
    "A passage tracing the history of silk from ancient China to the Silk Road and the development of global silk production.",
  htmlFile: "/passages/the_story_of_silk_passage1.html",
},
  {
    id: "p1-radiocarbon-dating",
    title: "Radiocarbon Dating вЂ” The Profile of Nancy Athfield",
    passageNumber: 1,
    isPremium: false,
    description:
      "Have you ever picked up a small stone off the ground and wondered how old it was?",
    htmlFile: "/passages/IELTS_Radiocarbon_Dating_Nancy_Athfield_Test.html",
  },
  {
    id: "p2-the-return-of-monkey-life",
    title: "The Return of Monkey life",
    passageNumber: 2,
    isPremium: false,
    description: "The recovery and life of monkeys in Northern Costa Rica",
    htmlFile: "/passages/IELTS_Passage2_Return_of_Monkey_Life_Test.html",
  },
  {
    id: "p1-the-sound-of-dolphin",
    title: "The Sound of Dolphin",
    passageNumber: 1,
    isPremium: false,
    description:
      "Each and every dolphin has a different sound just like you and me, a sound that other dolphins recognize as a particular individual.",
    htmlFile: "/passages/IELTS_The_Sound_of_Dolphin_Test.html",
  },
  {
    id: "p1-morse-code",
    title: "Morse code",
    passageNumber: 1,
    isPremium: false,
    description:
      "Morse code is being replaced by a new satellite-based system for sending distress calls at sea. Its dots and dashes have had a good run for their money.",
    htmlFile: "/passages/IELTS_Passage1_Morse_Code_Test.html",
  },
  {
  id: "p2-agribots",
  title: "The Rise of Agribots",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about the use of robots and automation in farming, showing how agribots may change modern agriculture.",
  htmlFile: "/passages/agribots_part2.html",
},
{
  id: "p2-being-bored",
  title: "Why Being Bored Is Stimulating – and Useful, Too",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage exploring boredom as an emotion and explaining how it may be connected to creativity, attention, and human behaviour.",
  htmlFile: "/passages/being_bored_part2.html",
},
{
  id: "p2-big-cats",
  title: "Bring Back the Big Cats",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about rewilding in Britain and the possible return of vanished native animals such as the lynx.",
  htmlFile: "/passages/big_cats_part2.html",
},
{
  id: "p2-human-laughter",
  title: "The Science of Human Laughter",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage examining why humans laugh, how laughter affects relationships, and what science reveals about humour.",
  htmlFile: "/passages/human_laught_part2.html",
},
{
  id: "p2-lost-city",
  title: "The Lost City",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about Hiram Bingham’s encounter with Machu Picchu and the history behind the famous Inca site.",
  htmlFile: "/passages/lost_city_part2.html",
},
{
  id: "p2-mapping",
  title: "Revolutions in Mapping",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage about the development of mapmaking, from early scientific cartography to modern digital and satellite mapping.",
  htmlFile: "/passages/mapping_part2.html",
},
{
  id: "p2-robots",
  title: "Dawn of the Robots",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage discussing recent progress in robotics and artificial intelligence, including driverless cars and future robot applications.",
  htmlFile: "/passages/robots_part2.html",
},
{
  id: "p2-whales",
  title: "Whale Strandings",
  passageNumber: 2,
  isPremium: false,
  description:
    "A passage investigating why whales become stranded on beaches and the possible causes behind mass strandings.",
  htmlFile: "/passages/whales_part2.html",
},
  {
    id: "p1-why-good-ideas-fail",
    title: "Why Good ideas fail?",
    passageNumber: 1,
    isPremium: false,
    description:
      "Hypothetical case study: As part of a marketing course, two marketing experts comment on a hypothetical case study involving TF, a fictional retail giant specializing home furnishing. The experts give concrete solutions and advice to assist students.",
    htmlFile: "/passages/IELTS_Why_Good_Ideas_Fail_Test.html",
  },
  {
    id: "p1-thomas-young-the-last-true-know-it-all",
    title: "Thomas Young: The last true know-it-all",
    passageNumber: 1,
    isPremium: false,
    description:
      "Thomas Young (1773-1829) contributed 63 articles to the Encyclopedia Britannica, including 46 biographical entries (mostly on scientists and classicists) and substantial essays on вЂњBridge,вЂќ вЂњChromatics,вЂќ вЂњEgypt,вЂќ вЂњLanguagesвЂќ and вЂњTidesвЂќ.",
    htmlFile: "/passages/IELTS_Passage1_Thomas_Young_Test.html",
  },
  {
    id: "p3-what-do-babies-know",
    title: "What do Babies know?",
    passageNumber: 3,
    isPremium: false,
    description:
      "As Daniel Haworth is settled into a high chair and wheeled behind a black screen, a sudden look of worry furrows his 9-month-old brow.",
    htmlFile: "/passages/IELTS_Passage3_What_Do_Babies_Know_Test.html",
  },
  {
    id: "p1-malaria-italy",
    title: "Malaria Italy",
    passageNumber: 1,
    isPremium: false,
    description:
      "Mal-aria. Bad air. Even the world is Italian, and this horrible disease marked the life of those in the peninsula for thousands of years. ",
    htmlFile: "/passages/IELTS_Malaria_Italy_Test.html",
  },
   {
    id: "p1-ambergris",
    title: "Ambergris",
    passageNumber: 1,
    isPremium: false,
    description:
      "Ambergris was used to perfume cosmetics in the days of ancient Mesopotamia and almost every civilization on the earth has a brush with ambergris.",
    htmlFile: "/passages/IELTS_Passage1_Ambergris_Test.html",
  },
   {
    id: "p3-mite-harvestmen",
    title: "Mite Harvestmen",
    passageNumber: 3,
    isPremium: false,
    description:
      "Few people have heard of the mite harvestman, and fewer still would recognize it at close range.",
    htmlFile: "/passages/IELTS_Passage3_Mite_Harvestmen_Test.html",
  },
  {
    id: "p3-verbal-and-non-verbal",
    title: "Verbal and Non-verbal Messages",
    passageNumber: 3,
    isPremium: false,
    description:
      "A study of non-verbal communication carried out in 1967 continues to be widely quoted today.",
    htmlFile: "/passages/verbal_and_non-verbal_CDI_standalone.html",
  },
  {
    id: "p1-guitar",
    title: "The History of the Guitar",
    passageNumber: 1,
    isPremium: false,
    description:
      "An overview of the origins of the modern guitar.",
    htmlFile: "/passages/Guitar_CDI_standalone.html",
  },
  {
    id: "p2-intelligence",
    title: "Intelligent Behavior in Birds",
    passageNumber: 2,
    isPremium: false,
    description:
      "Many people are aware of the intelligence of chimpanzees and other mammals.",
    htmlFile: "/passages/Intelligence_CDI_standalone.html",
  },
  {
    id: "p2-urban",
    title: "Urban Regeneration",
    passageNumber: 2,
    isPremium: false,
    description:
      "Just over a kilometre south of Berlin's Potsdamer Platz, near the left bank of the Landwehr Canal, an extensive, triangular-shaped area of waste ground once separated the neighbourhoods of Kreuzberg to the east and Schöneberg to the west.",
    htmlFile: "/passages/Urban_CDI_standalone.html",
  },
  {
    id: "p1-burgess-shale",
    title: "The Burgess Shale Fossils",
    passageNumber: 1,
    isPremium: false,
    description:
      "Fauna vanished with a whimper, not a bang.",
    htmlFile: "/passages/Burgess_shale_CDI_standalone.html",
  },
  {
    id: "p3-conformity",
    title: "Conformity",
    passageNumber: 3,
    isPremium: false,
    description:
      "A review of conformity and some of the studies that have been done on it.",
    htmlFile: "/passages/Conformity_CDI_standalone.html",
  },
  {
    id: "p1-survivor-story",
    title: "A Survivor's Story",
    passageNumber: 1,
    isPremium: false,
    description:
      "One native bird in New Zealand that has managed to survive the introduction of non-native species.",
    htmlFile: "/passages/Survivor_story_CDI_standalone.html",
  },
  {
    id: "p1-feeding-the-world",
    title: "Feeding the World",
    passageNumber: 1,
    isPremium: false,
    description:
      "Feeding the world while nurturing the planet doesn’t necessarily mean going back to nature, Andy Coghlan reports.",
    htmlFile: "/passages/Feeding_the_world_CDI_standalone.html",
  },
  {
    id: "p2-music",
    title: "Classical Music Over the Centuries",
    passageNumber: 2,
    isPremium: false,
    description:
      "The production of any great art form, and classical music is no exception, does not usually occur in a society dominated by the basic material demands of food and shelter.",
    htmlFile: "/passages/Music_CDI_standalone.html",
  },
  {
    id: "p3-map",
    title: "Mapping the Mind",
    passageNumber: 3,
    isPremium: false,
    description:
      "Dr Simon Hanson reviews Rita Carter’s book Mapping the Mind.",
    htmlFile: "/passages/Map_CDI_standalone.html",
  },
  {
    id: "p2-species",
    title: "The Impact of Invasive Species",
    passageNumber: 2,
    isPremium: false,
    description:
      "Invasive species are among the leading threats to the native wildlife of most countries, with approximately 42 percent of endangered species at risk from them.",
    htmlFile: "/passages/Species_CDI_standalone.html",
  },
  {
    id: "p1-chocolate",
    title: "Chocolate for the Masses",
    passageNumber: 1,
    isPremium: false,
    description:
      "For almost three thousand years, chocolate was a drink of the elite and the wealthy, originally in South America and later on in Europe.",
    htmlFile: "/passages/Chocalate_CDI_standalone.html",
  },
  {
    id: "p3-asian-space",
    title: "Asian Space",
    passageNumber: 3,
    isPremium: false,
    description:
      "Planet Earth is today circled by scores of satellites, orbiting like tiny moons after being sent aloft by rockets to perform a variety of useful tasks.",
    htmlFile: "/passages/Asian_space_CDI_standalone.html",
  },
  {
    id: "p2-how-to-be-happy",
    title: "How to Be Happy",
    passageNumber: 2,
    isPremium: false,
    description:
      "Psychiatrist Tony Fernando was walking down the street when he saw a group of young homeless men sitting on the footpath.",
    htmlFile: "/passages/How_to_be_happy_CDI_standalone.html",
  },
  {
    id: "p1-frozen-food",
    title: "Clarence Birdseye and Frozen Food",
    passageNumber: 1,
    isPremium: false,
    description:
      "Born in 1886 in New York, the American naturalist Clarence Birdseye had an instinctive curiosity, a love of food, and a strong entrepreneurial streak.",
    htmlFile: "/passages/Frozen_food_CDI_standalone.html",
  },
  {
    id: "p3-lost-animals",
    title: "The Lost Animals of Australia",
    passageNumber: 3,
    isPremium: false,
    description:
      "The history of Australia's animals over the past 50,000 years has been largely one of extinction.",
    htmlFile: "/passages/Lost_animals_CDI_standalone.html",
  },
  {
    id: "p1-antarctic",
    title: "Antarctica Exploration and Research",
    passageNumber: 1,
    isPremium: false,
    description:
      "The modern scientific age in Antarctica really began with the introduction of aircraft in the 1920s.",
    htmlFile: "/passages/Antarctic_CDI_standalone.html",
  },
  {
    id: "p2-population",
    title: "Effects of Changes in World Population",
    passageNumber: 2,
    isPremium: false,
    description:
      "Human fertility rates around the world are dropping for a variety of complex reasons.",
    htmlFile: "/passages/Population_CDI_standalone.html",
  },
  {
    id: "p1-carnivorous-plants",
    title: "Carnivorous Plants",
    passageNumber: 1,
    isPremium: false,
    description:
      "They attract insects and then eat their flesh.",
    htmlFile: "/passages/CarnCarnivorous_Plants_CDI_standalone.html",
  },
  {
    id: "p2-bird-migration",
    title: "Bird Migration",
    passageNumber: 2,
    isPremium: false,
    description:
      "Birds have many unique design features that enable them to perform such amazing feats of endurance.",
    htmlFile: "/passages/IELTS_Passage2_Bird_Migration_Test.html",
  },
  {
    id: "p3-global-warming-in-new-zealand",
    title: "Global Warming in New Zealand",
    passageNumber: 3,
    isPremium: false,
    description:
      "For many environmentalists, the world seems to be getting warmer.",
    htmlFile: "/passages/IELTS_Passage3_Global_Warming_NZ_Test.html",
  },
  {
    id: "p1-nintendo-preschoolers",
    title: "Nintendo Preschoolers",
    passageNumber: 1,
    isPremium: false,
    description:
      "Designing computer games for young children is a daunting task for game producers, who, for a long time, have concentrated on more hard core game fans.",
    htmlFile: "/passages/IELTS_Passage1_Nintendo_Preschoolers_Test.html",
  },
  {
    id: "p3-accidental-scientists",
    title: "Accidental Scientists",
    passageNumber: 3,
    isPremium: false,
    description:
      "A paradox lies close to the heart of scientific discovery. If you know just what you are looking for, finding it can hardly count as a discovery, since it was fully anticipated.",
    htmlFile: "/passages/IELTS_Accidental_Scientists_Test_CDI_Layout_v5.html",
  },
  {
    id: "p1-medicine",
    title: "Traditional Maori Medicine",
    passageNumber: 1,
    isPremium: false,
    description: "The Maori are the indigenous people of the islands of New Zealand.",
    htmlFile: "/passages/Medicine_CDI_standalone.html",
  },
  {
    id: "p3-teaching",
    title: "Research into Teaching Styles",
    passageNumber: 3,
    isPremium: false,
    description:
      "Prior to 1960, most inquiries into pupils' learning skills explored the relationship between factors such as children's social background, personality or measured intelligence and their achievement in various school subjects.",
    htmlFile: "/passages/Teaching_CDI_standalone.html",
  },
  {
    id: "p1-reef-fish",
    title: "Reef Fish Study",
    passageNumber: 1,
    isPremium: false,
    description:
      "Tom Holmes examines the relationship between size and survival in fish on Australia’s Great Barrier Reef.",
    htmlFile: "/passages/reef_fish_2_CDI_standalone.html",
  },
  {
    id: "p1-dolls-2",
    title: "Dolls Through the Ages",
    passageNumber: 1,
    isPremium: false,
    description: "What is today a simple children’s toy has a surprisingly rich history.",
    htmlFile: "/passages/Dolls_2_CDI_standalone.html",
  },
  {
    id: "p3-living-dunes",
    title: "Living Dunes",
    passageNumber: 3,
    isPremium: false,
    description:
      "Things don’t come much stranger than heaps of sand that can move and sing of their own accord.",
    htmlFile: "/passages/Living_dunes_CDI_standalone.html",
  },
  {
    id: "p2-playing-with-science",
    title: "Playing with Science",
    passageNumber: 2,
    isPremium: false,
    description: "Is science always a serious matter?",
    htmlFile: "/passages/Playing_with_science_2_CDI_standalone.html",
  },
  {
    id: "p2-attraction-of-video-games",
    title: "The Attraction of Video Games",
    passageNumber: 2,
    isPremium: false,
    description:
      "The world's love of video games has much to do with people's desires and motives.",
    htmlFile: "/passages/Attraction_of_video_games_CDI_standalone.html",
  },
  {
    id: "p1-sleep-study-hunter-gatherers",
    title: "Sleep Study on Modern-Day Hunter-Gatherers",
    passageNumber: 1,
    isPremium: false,
    description:
      "The sleep troubles common in modern life have long been blamed on our industrial society, from the city lights, long work hours and commutes, to caffeine and the Internet.",
    htmlFile: "/passages/Sleep_Study_on_Modern_Day_Hunter_Gatherers_2_CDI_standalone.html",
  },
  {
    id: "p3-tuatara",
    title: "The Tuatara: Past and Future",
    passageNumber: 3,
    isPremium: false,
    description:
      "The New Zealand species of lizard, the tuatara, is firmly embedded in the national psyche.",
    htmlFile: "/passages/Tuatura_CDI_standalone.html",
  },
  {
    id: "p2-biophilic-design",
    title: "Biophilic Design",
    passageNumber: 2,
    isPremium: false,
    description:
      "Biophilic design, a movement related to green architecture, has gained much momentum within the building community in recent years.",
    htmlFile: "/passages/Biophilic_design_CDI_standalone.html",
  },
  {
    id: "p1-humans-and-food",
    title: "A Brief History of Humans and Food",
    passageNumber: 1,
    isPremium: false,
    description:
      "During the journey from our hunter-gatherer ancestors to the present day there have been three seismic changes that have had an impact on the food we eat.",
    htmlFile: "/passages/Humans_and_Food_CDI_standalone.html",
  },
  {
    id: "p2-arts",
    title: "Why Do We Need the Arts?",
    passageNumber: 2,
    isPremium: false,
    description:
      "Imagine a world in which people spend hours working in offices or factories, and then go home in the evening to sit down to dinner.",
    htmlFile: "/passages/ARTS_CDI_standalone.html",
  },
  {
    id: "p3-mahy",
    title: "The New Zealand Writer Margaret Mahy",
    passageNumber: 3,
    isPremium: false,
    description:
      "In a career spanning some fifty years, Margaret Mahy has come to occupy a unique place in New Zealand writing with innovative fiction and original characterisation.",
    htmlFile: "/passages/Mahy_CDI_standalone.html",
  },
  {
    id: "p3-headphones",
    title: "Some Views on the Use of Headphones",
    passageNumber: 3,
    isPremium: false,
    description:
      "Whether wearing headphones at work, or in other areas of everyday life, is a good thing or a bad thing has generated a lot of research and opinion.",
    htmlFile: "/passages/Headphones_CDI_standalone.html",
  },
  {
    id: "p2-celebrities",
    title: "A Study of Western Celebrity",
    passageNumber: 2,
    isPremium: false,
    description:
      "In our celebrity-obsessed culture, TV shows, internet blogs, and even newspapers are often full of the latest news, gossip and scandals about current celebrities.",
    htmlFile: "/passages/Celebrities_CDI_standalone.html",
  },
  {
    id: "p1-building-castle",
    title: "Building a Castle",
    passageNumber: 1,
    isPremium: false,
    description: "Guédelon is no ordinary building site.",
    htmlFile: "/passages/Building_castle_CDI_standalone.html",
  },
  {
    id: "p3-game-theory",
    title: "Game Theory",
    passageNumber: 3,
    isPremium: false,
    description:
      "According to game theory, our chances of success in negotiations are based on the choices of others.",
    htmlFile: "/passages/Game_theory_CDI_standalone.html",
  },
  {
    id: "p2-ideal-homes",
    title: "Ideal Homes",
    passageNumber: 2,
    isPremium: false,
    description:
      "The traditional kampung houses of Malaysia do not need air-conditioning.",
    htmlFile: "/passages/Ideal_CDI_standalone.html",
  },
  {
    id: "p3-what-is-social-history",
    title: "What is Social History?",
    passageNumber: 3,
    isPremium: false,
    description:
      "An exploration of social history as an academic discipline and how it differs from traditional historical approaches.",
    htmlFile: "/passages/what_is_social_history.html",
  },
  {
    id: "p3-why-good-food-tastes-good",
    title: "Why Good Food Tastes Good",
    passageNumber: 3,
    isPremium: false,
    description:
      "The science behind taste perception and why certain foods are so enjoyable to eat.",
    htmlFile: "/passages/why_good_food_tastes_good.html",
  },
  {
    id: "p2-the-power-of-music",
    title: "The Power of Music",
    passageNumber: 2,
    isPremium: false,
    description:
      "How music affects the brain, health, and physical performance, explored through scientific research.",
    htmlFile: "/passages/the_power_of_music.html",
  },
  {
    id: "p2-lean-production",
    title: "Lean Production",
    passageNumber: 2,
    isPremium: false,
    description:
      "The principles and history of lean manufacturing, from craft production to modern just-in-time methods.",
    htmlFile: "/passages/lean_production.html",
  },
  {
    id: "p3-saving-the-skink",
    title: "Saving the Skink",
    passageNumber: 3,
    isPremium: false,
    description:
      "Conservation efforts to protect the endangered skink lizard and the challenges of preserving its natural habitat.",
    htmlFile: "/passages/saving_the_skink.html",
  },
  {
    id: "p3-how-does-watching-sport-influence-the-brain",
    title: "How Does Watching Sport Influence the Brain?",
    passageNumber: 3,
    isPremium: false,
    description:
      "The neuroscience of sport spectatorship — how mirror neurons and other brain systems respond when we watch athletes.",
    htmlFile: "/passages/how_does_watching_sport_influence_the_brain.html",
  },
  {
    id: "p2-traffic-jams",
    title: "Traffic Jams",
    passageNumber: 2,
    isPremium: false,
    description:
      "An academic passage exploring the causes of traffic congestion and modern solutions including smart motorways and variable speed limits.",
    htmlFile: "/passages/traffic_jams.html",
  },
  {
    id: "p1-secret-of-long-life",
    title: "The Secret of Long Life",
    passageNumber: 1,
    isPremium: false,
    description:
      "An academic passage examining the factors that contribute to longevity, from diet and exercise to genetics and social connections.",
    htmlFile: "/passages/secret_of_long_life.html",
  },
  {
    id: "p1-history-of-ice-cream",
    title: "The History of Ice Cream",
    passageNumber: 1,
    isPremium: false,
    description:
      "A passage tracing the origins and global spread of ice cream from ancient iced desserts to modern industrial production.",
    htmlFile: "/passages/history_of_ice_cream.html",
  },
  {
    id: "p1-daylight-saving-time",
    title: "Daylight Saving Time",
    passageNumber: 1,
    isPremium: false,
    description:
      "A passage examining the history, rationale and ongoing debate surrounding the twice-yearly clock change.",
    htmlFile: "/passages/daylight_saving_time.html",
  },
  {
    id: "p3-willpower",
    title: "Willpower",
    passageNumber: 3,
    isPremium: false,
    description:
      "A passage exploring the science of self-control, willpower depletion, and how people can strengthen their resolve.",
    htmlFile: "/passages/willpower.html",
  },
  {
    id: "p1-listening-to-the-ocean",
    title: "Listening to the Ocean",
    passageNumber: 1,
    isPremium: false,
    description:
      "A passage about how scientists use underwater sound to study whale behaviour, ocean temperatures and climate change.",
    htmlFile: "/passages/listening_to_the_ocean.html",
  },
  {
    id: "p1-prosopagnosia",
    title: "Sorry – Who Are You? (Prosopagnosia)",
    passageNumber: 1,
    isPremium: false,
    description:
      "A passage about prosopagnosia, the condition that makes it impossible to recognise faces, and the research being done to understand it.",
    htmlFile: "/passages/prosopagnosia.html",
  },
  {
    id: "p2-unfair-advantage-in-sport",
    title: "What is an Unfair Advantage in Sport?",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage examining how altitude, altitude tents, and high-tech swimsuits raise questions about fairness in elite athletics.",
    htmlFile: "/passages/unfair_advantage_in_sport.html",
  },
  {
    id: "p2-link-between-culture-and-thought",
    title: "The Link Between Culture and Thought",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage about research showing that people from Eastern and Western cultures process information and reason in fundamentally different ways.",
    htmlFile: "/passages/link_between_culture_and_thought.html",
  },
  {
    id: "p2-importance-of-law",
    title: "The Importance of Law",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage exploring how law governs every aspect of life, the growth in legislation, and the often misunderstood role of lawyers.",
    htmlFile: "/passages/importance_of_law.html",
  },
  {
    id: "p3-future-of-worlds-languages",
    title: "The Future of the World's Languages",
    passageNumber: 3,
    isPremium: false,
    description:
      "A passage about efforts to document and preserve endangered languages before they disappear, and the paradox of globalisation.",
    htmlFile: "/passages/future_of_worlds_languages.html",
  },
  {
    id: "p1-answers-underground",
    title: "Answers Underground",
    passageNumber: 1,
    isPremium: false,
    description:
      "A passage about carbon sequestration – capturing CO₂ from power plants and burying it underground to slow global warming.",
    htmlFile: "/passages/answers_underground.html",
  },
  {
    id: "p3-voynich-manuscript",
    title: "The Voynich Manuscript",
    passageNumber: 3,
    isPremium: false,
    description:
      "A passage about the mysterious medieval manuscript that has defied codebreakers for centuries, from amateur dabblers to top cryptanalysts.",
    htmlFile: "/passages/voynich_manuscript.html",
  },
  {
    id: "p3-business-innovation-mercer",
    title: "Business Innovation (Mercer)",
    passageNumber: 3,
    isPremium: false,
    description:
      "A passage examining operational, strategic and demand innovations through case studies of Wal-Mart, Southwest Airlines and Air Liquide.",
    htmlFile: "/passages/business_innovation_mercer.html",
  },
  {
    id: "p3-innovation-in-business-nz",
    title: "Innovation in Business (New Zealand)",
    passageNumber: 3,
    isPremium: false,
    description:
      "A passage discussing how New Zealand businesses approach innovation, from Edison's laborious experimentation to Steve Jobs' visionary leadership.",
    htmlFile: "/passages/innovation_in_business_nz.html",
  },
  {
    id: "p1-bovids",
    title: "Bovids",
    passageNumber: 1,
    isPremium: false,
    description:
      "A passage about the bovid family of mammals — one of the most diverse groups of animals on Earth, from tiny royal antelopes to massive bison.",
    htmlFile: "/passages/bovids.html",
  },
  {
    id: "p1-bodie-ghost-town",
    title: "Bodie: America's Most Famous Ghost Town",
    passageNumber: 1,
    isPremium: false,
    description:
      "A passage about Bodie, California — once a thriving gold-rush town and now America's most famous ghost town, preserved in a state of arrested decay.",
    htmlFile: "/passages/bodie_americas_most_famous_ghost_town.html",
  },
  {
    id: "p2-cuneiform",
    title: "An Important Language Development",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage about cuneiform, the world's first known writing system, which originated over 6,000 years ago in ancient Sumer in what is now southern Iraq.",
    htmlFile: "/passages/an_important_language_development.html",
  },
  {
    id: "p3-crisis-freshwater",
    title: "Crisis! Freshwater",
    passageNumber: 3,
    isPremium: false,
    description:
      "A passage examining the global freshwater crisis — rising demand, shrinking supply, and the political and environmental consequences of water scarcity.",
    htmlFile: "/passages/crisis_freshwater.html",
  },
  {
    id: "p2-digital-diet",
    title: "Digital Diet",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage about the hidden environmental cost of digital technology — the enormous energy consumed by computers, data centres, and the internet.",
    htmlFile: "/passages/digital_diet.html",
  },
  {
    id: "p2-dirty-river-clean-water",
    title: "Dirty River But Clean Water",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage about innovative water management in a flood-prone canyon and the engineering solutions used to deliver clean drinking water.",
    htmlFile: "/passages/dirty_river_but_clean_water.html",
  },
  {
    id: "p3-fear-of-the-unknown",
    title: "Fear of the Unknown",
    passageNumber: 3,
    isPremium: false,
    description:
      "A passage exploring why large American companies struggle to innovate and the growing threat posed by small, agile start-up firms.",
    htmlFile: "/passages/fear_of_the_unknown.html",
  },
  {
    id: "p3-doctoring-sales",
    title: "Doctoring Sales",
    passageNumber: 3,
    isPremium: false,
    description:
      "A passage investigating the controversial sales and marketing strategies used by pharmaceutical companies to influence doctors' prescribing habits.",
    htmlFile: "/passages/doctoring_sales.html",
  },
  {
    id: "p2-e-training",
    title: "E-training",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage examining the benefits, limitations and costs of e-learning and online training programs in corporate environments.",
    htmlFile: "/passages/e_training.html",
  },
  {
    id: "p2-grimms-fairy-tales",
    title: "Grimm's Fairy Tales",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage about the history of the Brothers Grimm fairy tale collection, its origins, reception, and enduring global popularity.",
    htmlFile: "/passages/grimms_fairy_tales.html",
  },
  {
    id: "p2-how-the-mind-ages",
    title: "How the Mind Ages",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage exploring how mental functions change with age and how lifestyle, activity, and flexibility influence cognitive health.",
    htmlFile: "/passages/how_the_mind_ages.html",
  },
  {
    id: "p1-food-desert",
    title: "How to Find Your Way Out of a Food Desert",
    passageNumber: 1,
    isPremium: false,
    description:
      "A passage about citizens using online maps to document the lack of healthy food options in urban neighborhoods in Brooklyn, New York.",
    htmlFile: "/passages/how_to_find_your_way_out_of_a_food_desert.html",
  },
  {
    id: "p3-language-strategy",
    title: "Language Strategy in Multinational Company",
    passageNumber: 3,
    isPremium: false,
    description:
      "A passage evaluating different approaches multinational companies use to manage language barriers, from lingua franca to training programs.",
    htmlFile: "/passages/language_strategy_in_multinational_company.html",
  },
  {
    id: "p2-life-code-unlocked",
    title: "Life Code: Unlocked!",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage about how an applied mathematician used machine learning tools to model gene regulatory networks in yeast and decode the logic of gene expression.",
    htmlFile: "/passages/life_code_unlocked.html",
  },
  {
    id: "p2-light-pollution",
    title: "Light Pollution",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage examining how artificial light at night disrupts the biological rhythms of humans, animals, and ecosystems, and what can be done to reduce it.",
    htmlFile: "/passages/light_pollution.html",
  },
  {
    id: "p2-mammoth-kill",
    title: "Mammoth Kill",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage exploring three competing theories — human hunting, disease, and climate change — behind the extinction of mammoths and other megafauna 11,000 years ago.",
    htmlFile: "/passages/mammoth_kill.html",
  },
  {
    id: "p2-maori-fish-hooks",
    title: "Maori Fish Hooks",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage tracing the history and ingenious design of traditional Maori fish hooks (matau), from their natural-material origins to their modern-day revival in commercial fishing.",
    htmlFile: "/passages/maori_fish_hooks.html",
  },
  {
    id: "p2-marketing-mind-control",
    title: "Marketing and Mind Control",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage examining how advertising exploits the brain's associative and imitative tendencies, using examples from diamonds to bottled water and animal behaviour.",
    htmlFile: "/passages/marketing_and_mind_control.html",
  },
  {
    id: "p2-new-ways-teaching-history",
    title: "New Ways of Teaching History",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage discussing the challenges of teaching history to digital-age students and how multimedia tools like PowerPoint can make lessons more interactive and effective.",
    htmlFile: "/passages/new_ways_of_teaching_history.html",
  },
  {
    id: "p2-saharan-solar-energy",
    title: "Out of Africa: Saharan Solar Energy",
    passageNumber: 2,
    isPremium: false,
    description:
      "A passage reporting on proposals to harness the Sahara Desert's vast solar energy potential using Concentrating Solar Power technology to supply electricity to Europe.",
    htmlFile: "/passages/out_of_africa_saharan_solar_energy.html",
  },
  {
    id: "p3-reducing-climate-change",
    title: "Reducing the Effects of Climate Change",
    passageNumber: 3,
    isPremium: false,
    description:
      "A passage evaluating large-scale geo-engineering proposals — from space sunshades to Arctic aerosols — as a potential backup strategy for tackling global warming.",
    htmlFile: "/passages/reducing_the_effects_of_climate_change.html",
  },
  // Fozilbek IELTS – CDI passages
  {
    id: "p1-seaweed",
    title: "Seaweed",
    passageNumber: 1,
    isPremium: false,
    description:
      "An academic passage on the long history of seaweed as food, fuel and fertiliser, and its growing role in food security and biofuels — questions 1–13.",
    htmlFile: "/passages/Seaweed_CDI_standalone.html",
    isNew: true,
  },
  {
    id: "p1-cane-toad",
    title: "Australia's Cane Toad Problem",
    passageNumber: 1,
    isPremium: false,
    description:
      "An academic passage on how cane toads were introduced to Australia as biological pest control and became an invasive species — questions 1–13.",
    htmlFile: "/passages/Cane_Toad_CDI_standalone.html",
    isNew: true,
  },
  {
    id: "p1-archaeoacoustics",
    title: "The Science of Archaeoacoustics",
    passageNumber: 1,
    isPremium: false,
    description:
      "An academic passage on archaeoacoustics — the study of sound at ancient sites, from Paleolithic caves to Maltese hypogea and Greek theatres — questions 1–13.",
    htmlFile: "/passages/Archaeoacoustics_CDI_standalone.html",
    isNew: true,
  },
  {
    id: "p1-przewalski-horse",
    title: "Back to Wild: The Przewalski Horse",
    passageNumber: 1,
    isPremium: false,
    description:
      "An academic passage on efforts to save the Przewalski horse from extinction and reintroduce it to the wild in Mongolia — questions 1–13.",
    htmlFile: "/passages/Przewalski_Horse_CDI_standalone.html",
    isNew: true,
  },
  {
    id: "p3-age-proofing-brains",
    title: "Age-proofing Our Brains",
    passageNumber: 3,
    isPremium: false,
    description:
      "An academic passage on research into keeping the brain healthy with age, mental exercise, supplements and the science behind them — questions 28–40.",
    htmlFile: "/passages/Age_Proofing_Brains_CDI_standalone.html",
    isNew: true,
  },
  {
    id: "p3-science-filmmaking",
    title: "Science and Filmmaking",
    passageNumber: 3,
    isPremium: false,
    description:
      "An academic passage on how computer-generated imagery and scientific research have transformed special effects in filmmaking — questions 27–40.",
    htmlFile: "/passages/Science_Filmmaking_CDI_standalone.html",
    isNew: true,
  },
];
