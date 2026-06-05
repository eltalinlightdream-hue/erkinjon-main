export type ArticleCategory = "Vocabulary" | "Grammar" | "Reading" | "General";
export type ArticleTopic =
  | "Environment"
  | "Education"
  | "Crime"
  | "Technology"
  | "Health"
  | "Society"
  | "Science"
  | "Business"
  | "Culture";
export type ArticleDifficulty = "Beginner" | "Intermediate" | "Advanced";

export const TOPICS: ArticleTopic[] = [
  "Environment",
  "Education",
  "Crime",
  "Technology",
  "Health",
  "Society",
  "Science",
  "Business",
  "Culture",
];

export const DIFFICULTIES: ArticleDifficulty[] = ["Beginner", "Intermediate", "Advanced"];

export interface VocabItem {
  word: string;
  definition: string;
  example: string;
  wordType?: "noun" | "verb" | "adjective" | "adverb" | "phrase" | "noun phrase" | "verb phrase";
}

export interface PronunciationItem {
  word: string;
  ipa: string;
  syllables: string;
  tip: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  topic: ArticleTopic;
  difficulty: ArticleDifficulty;
  coverImage?: string;
  date: string;
  description: string;
  readingTime: number;
  content: string;
  vocabulary: VocabItem[];
  pronunciation: PronunciationItem[];
}

export const ARTICLES: Article[] = [
  // ─── BEGINNER (A2) articles ──────────────────────────────────────
  {
    id: "b1",
    slug: "london",
    title: "London",
    category: "Reading",
    topic: "Culture",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "London is the capital city of England and the United Kingdom. It is one of the most famous cities in the world. Millions of tourists visit every year.",
    readingTime: 3,
    content: `
      <p><strong>London is the capital city of England and the United Kingdom. About nine million people live there. It is one of the largest cities in Europe.</strong></p>

      <h2>A very old city</h2>
      <p>London is a very old city. The Romans built it about 2,000 years ago. They called it Londinium. Over the centuries, London grew bigger and more important. Today it is one of the most famous cities in the world.</p>
      <p>The city has a long and interesting history. There were great fires, wars, and dramatic changes. But London always survived and grew stronger.</p>

      <h2>Famous places</h2>
      <p>London has many famous tourist attractions. Buckingham Palace is the home of the British royal family. The Tower of London is a very old castle near the River Thames. Tourists can visit it and see the Crown Jewels there.</p>
      <p>The Houses of Parliament and Big Ben are also very well known. Big Ben is actually the name of the large bell inside the clock tower. The London Eye is a giant Ferris wheel on the south bank of the Thames. From the top, you can see the whole city.</p>

      <h2>The River Thames</h2>
      <p>The River Thames flows through the centre of London. It is 346 kilometres long. In the past, the Thames was very important for trade. Ships brought goods from all over the world to London's docks.</p>
      <p>Today, people walk along the river, take boat trips, and enjoy the views. Many famous bridges cross the Thames, including Tower Bridge. Tower Bridge is one of the most photographed bridges in the world.</p>

      <h2>A multicultural city</h2>
      <p>London is a very multicultural city. People from all over the world live and work there. You can hear hundreds of different languages on the streets. There are restaurants, shops, and festivals from many different cultures. This diversity makes London a very exciting place to visit and live.</p>
    `,
    vocabulary: [
      { word: "capital", wordType: "noun", definition: "the most important city in a country, where the government is", example: "London is the capital of the United Kingdom." },
      { word: "century", wordType: "noun", definition: "a period of one hundred years", example: "London has changed greatly over the centuries." },
      { word: "attraction", wordType: "noun", definition: "an interesting place that many tourists visit", example: "Big Ben is one of London's most famous attractions." },
      { word: "royal family", wordType: "noun phrase", definition: "the king or queen and their close family members", example: "The royal family lives in Buckingham Palace." },
      { word: "castle", wordType: "noun", definition: "a large, strong building built in the past to protect people from attack", example: "The Tower of London is a very old castle." },
      { word: "Crown Jewels", wordType: "noun phrase", definition: "the collection of precious crowns and objects belonging to the British royal family", example: "Tourists visit the Tower of London to see the Crown Jewels." },
      { word: "parliament", wordType: "noun", definition: "the group of people who make laws in a country", example: "The Houses of Parliament are next to the River Thames." },
      { word: "giant", wordType: "adjective", definition: "very large", example: "The London Eye is a giant Ferris wheel." },
      { word: "flow", wordType: "verb", definition: "to move steadily, like water in a river", example: "The River Thames flows through the centre of London." },
      { word: "trade", wordType: "noun", definition: "the buying and selling of goods between people or countries", example: "The Thames was important for trade in the past." },
      { word: "goods", wordType: "noun", definition: "things that are made and sold", example: "Ships brought goods from all over the world." },
      { word: "dock", wordType: "noun", definition: "a place at a river or sea where ships load and unload", example: "London's docks were very busy in the past." },
      { word: "multicultural", wordType: "adjective", definition: "including many different cultures and nationalities", example: "London is a very multicultural city." },
      { word: "diversity", wordType: "noun", definition: "the quality of including many different types of people or things", example: "The diversity of London makes it exciting." },
      { word: "photographed", wordType: "adjective", definition: "taken pictures of many times", example: "Tower Bridge is one of the most photographed bridges in the world." },
    ],
    pronunciation: [
      { word: "capital", ipa: "/KAP-ih-tul/", syllables: "cap-i-tal", tip: "Stress KAP. Three syllables." },
      { word: "parliament", ipa: "/PAR-luh-munt/", syllables: "par-lia-ment", tip: "Stress PAR. The 'ia' is not pronounced separately." },
      { word: "Thames", ipa: "/TEMZ/", syllables: "Thames", tip: "Silent 'h'. Say TEMZ, not THAYMZ." },
      { word: "palace", ipa: "/PAL-us/", syllables: "pal-ace", tip: "Stress PAL. The 'ace' sounds like 'us'." },
      { word: "multicultural", ipa: "/mul-tee-KUL-cher-ul/", syllables: "mul-ti-cul-tur-al", tip: "Stress KUL." },
      { word: "diversity", ipa: "/dy-VUR-suh-tee/", syllables: "di-ver-si-ty", tip: "Stress VUR." },
      { word: "attraction", ipa: "/uh-TRAK-shun/", syllables: "at-trac-tion", tip: "Stress TRAK." },
    ],
  },
  {
    id: "b2",
    slug: "william-shakespeare",
    title: "William Shakespeare",
    category: "Reading",
    topic: "Culture",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1518081461904-9d8f136a8399?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "William Shakespeare is the most famous writer in the English language. He lived 400 years ago, but people all over the world still read and watch his plays today.",
    readingTime: 3,
    content: `
      <p><strong>William Shakespeare was born in 1564 in a town called Stratford-upon-Avon in England. He is the most famous writer in the English language. People all over the world still enjoy his work today.</strong></p>

      <h2>Early life</h2>
      <p>Shakespeare grew up in Stratford-upon-Avon. His father was a glove maker and his mother came from a farming family. Shakespeare went to a local grammar school, where he learned Latin and studied great stories from ancient times.</p>
      <p>When he was 18 years old, Shakespeare married Anne Hathaway. They had three children together. A few years later, Shakespeare moved to London to work in the theatre.</p>

      <h2>His work in London</h2>
      <p>In London, Shakespeare became a successful actor and playwright. He wrote plays for a theatre company called the Lord Chamberlain's Men. He helped to build a famous theatre called the Globe Theatre on the south bank of the River Thames.</p>
      <p>Shakespeare wrote 37 plays and 154 sonnets. His most famous plays include Romeo and Juliet, Hamlet, Othello, and A Midsummer Night's Dream. His plays tell stories about love, jealousy, power, and death.</p>

      <h2>The Globe Theatre</h2>
      <p>The Globe Theatre was a round, open-air theatre. It could hold about 3,000 people. The poorest audience members, called groundlings, stood on the ground in front of the stage. Richer people sat in covered seats above.</p>
      <p>The original Globe burnt down in 1613 during a performance. A replica of the Globe Theatre was built near the same location in 1997. Visitors can watch plays there today.</p>

      <h2>Shakespeare's legacy</h2>
      <p>Shakespeare died in 1616, but his influence on the English language has never stopped. He invented hundreds of words and phrases that we still use today, such as "bedroom," "lonely," and "break the ice." His plays have been translated into every major language and performed in every country in the world.</p>
    `,
    vocabulary: [
      { word: "playwright", wordType: "noun", definition: "a person who writes plays for the theatre", example: "Shakespeare was the most famous playwright of his time." },
      { word: "grammar school", wordType: "noun phrase", definition: "a type of school in England where students study academic subjects", example: "Shakespeare attended the local grammar school." },
      { word: "theatre company", wordType: "noun phrase", definition: "a group of actors who work together to perform plays", example: "Shakespeare worked with a theatre company in London." },
      { word: "sonnet", wordType: "noun", definition: "a poem with 14 lines, often about love", example: "Shakespeare wrote 154 sonnets during his life." },
      { word: "jealousy", wordType: "noun", definition: "an unhappy feeling when you want what someone else has", example: "Othello is a story about jealousy and trust." },
      { word: "groundlings", wordType: "noun", definition: "the poorest audience members who stood on the ground at the Globe Theatre", example: "The groundlings paid just one penny to watch a play." },
      { word: "open-air", wordType: "adjective", definition: "outside, without a roof", example: "The Globe was an open-air theatre." },
      { word: "replica", wordType: "noun", definition: "an exact copy of something", example: "A replica of the Globe Theatre was built in 1997." },
      { word: "legacy", wordType: "noun", definition: "something important that someone leaves behind after they die", example: "Shakespeare's legacy continues to inspire writers today." },
      { word: "influence", wordType: "noun", definition: "the effect one person or thing has on another", example: "Shakespeare's influence on English literature is enormous." },
      { word: "translate", wordType: "verb", definition: "to change something written into a different language", example: "Shakespeare's plays have been translated into many languages." },
      { word: "ancient", wordType: "adjective", definition: "belonging to a time very long ago", example: "Shakespeare studied ancient stories at school." },
      { word: "successful", wordType: "adjective", definition: "achieving what you wanted to achieve; doing well", example: "Shakespeare became a successful writer in London." },
      { word: "perform", wordType: "verb", definition: "to act in a play or give a show for an audience", example: "Actors performed Shakespeare's plays at the Globe." },
      { word: "phrase", wordType: "noun", definition: "a group of words with a shared meaning", example: "'Break the ice' is a phrase invented by Shakespeare." },
    ],
    pronunciation: [
      { word: "Shakespeare", ipa: "/SHAYK-speer/", syllables: "Shake-speare", tip: "Stress SHAYK. The 'ea' sounds like 'ee'." },
      { word: "playwright", ipa: "/PLAY-ryt/", syllables: "play-wright", tip: "Stress PLAY. The 'w' in wright is silent." },
      { word: "jealousy", ipa: "/JEL-uh-see/", syllables: "jeal-ous-y", tip: "Stress JEL. Three syllables." },
      { word: "sonnet", ipa: "/SON-it/", syllables: "son-net", tip: "Stress SON." },
      { word: "legacy", ipa: "/LEG-uh-see/", syllables: "leg-a-cy", tip: "Stress LEG. Three syllables." },
      { word: "translate", ipa: "/tranz-LAYT/", syllables: "trans-late", tip: "Stress LAYT." },
      { word: "replica", ipa: "/REP-li-kuh/", syllables: "rep-li-ca", tip: "Stress REP. Three syllables." },
    ],
  },
  {
    id: "b3",
    slug: "new-york",
    title: "New York",
    category: "Reading",
    topic: "Culture",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "New York is the largest city in the United States. It is one of the most famous cities in the world. Millions of tourists visit every year to see its famous landmarks.",
    readingTime: 3,
    content: `
      <p><strong>New York City is the largest city in the United States. About 8.3 million people live there. It is one of the most exciting and famous cities in the world.</strong></p>

      <h2>The five boroughs</h2>
      <p>New York City is made up of five areas called boroughs. They are Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Manhattan is the most famous. It is a long, narrow island. Most of the famous skyscrapers and tourist attractions are there.</p>
      <p>Brooklyn is just across the East River from Manhattan. It is a very popular neighbourhood with many cafés, parks, and art galleries. The Brooklyn Bridge connects Brooklyn to Manhattan.</p>

      <h2>Famous landmarks</h2>
      <p>New York has many famous landmarks. The Statue of Liberty stands on a small island in New York Harbour. France gave it to the United States in 1886 as a symbol of friendship and freedom. It is made of copper and is about 93 metres tall.</p>
      <p>The Empire State Building is one of the most famous skyscrapers in the world. It was built in 1931. For many years, it was the tallest building in the world. Visitors can go to the top and look out over the whole city.</p>
      <p>Central Park is a huge green park in the middle of Manhattan. It is 4 kilometres long. People go there to walk, run, cycle, and relax. In winter, there is an outdoor ice-skating rink.</p>

      <h2>A city of immigrants</h2>
      <p>New York has always been a city of immigrants. In the 19th and 20th centuries, millions of people arrived from Europe, Asia, and Latin America. They came looking for a better life. Today, New York is one of the most diverse cities in the world. You can hear more than 800 languages spoken on its streets.</p>

      <h2>Culture and entertainment</h2>
      <p>New York is famous for its culture and entertainment. Broadway is a street in Manhattan where you can see world-class musicals and theatre shows. The city also has hundreds of museums, including the Metropolitan Museum of Art. New York never sleeps — there is always something happening, day and night.</p>
    `,
    vocabulary: [
      { word: "borough", wordType: "noun", definition: "one of the five administrative areas that make up New York City", example: "Manhattan is the most famous borough of New York." },
      { word: "skyscraper", wordType: "noun", definition: "a very tall building in a city", example: "New York is famous for its skyscrapers." },
      { word: "landmark", wordType: "noun", definition: "a famous or easily recognised building or place", example: "The Statue of Liberty is one of New York's most famous landmarks." },
      { word: "harbour", wordType: "noun", definition: "a sheltered area of water near land where ships can stop safely", example: "The Statue of Liberty stands in New York Harbour." },
      { word: "symbol", wordType: "noun", definition: "a thing that represents or stands for something else", example: "The Statue of Liberty is a symbol of freedom." },
      { word: "copper", wordType: "noun", definition: "a reddish-brown metal", example: "The Statue of Liberty is made of copper." },
      { word: "immigrant", wordType: "noun", definition: "a person who comes to live permanently in a foreign country", example: "New York was built by immigrants from many countries." },
      { word: "diverse", wordType: "adjective", definition: "including many different types of people or things", example: "New York is one of the most diverse cities in the world." },
      { word: "neighbourhood", wordType: "noun", definition: "a district or area of a city", example: "Brooklyn is a popular neighbourhood with many cafés and parks." },
      { word: "entertainment", wordType: "noun", definition: "activities that people enjoy in their free time", example: "New York offers world-class entertainment." },
      { word: "musical", wordType: "noun", definition: "a play or film that includes songs and dancing", example: "You can see famous musicals on Broadway." },
      { word: "rink", wordType: "noun", definition: "an area of ice or a hard surface for skating", example: "There is an ice-skating rink in Central Park in winter." },
      { word: "connect", wordType: "verb", definition: "to link two places together", example: "The Brooklyn Bridge connects Brooklyn to Manhattan." },
      { word: "century", wordType: "noun", definition: "a period of one hundred years", example: "In the 19th century, millions of immigrants arrived in New York." },
      { word: "gallery", wordType: "noun", definition: "a room or building where art is shown", example: "Brooklyn has many interesting art galleries." },
    ],
    pronunciation: [
      { word: "borough", ipa: "/BUR-oh/", syllables: "bor-ough", tip: "Stress BUR. The 'ough' is silent — say BUR-oh." },
      { word: "skyscraper", ipa: "/SKY-skray-per/", syllables: "sky-scra-per", tip: "Stress SKY. Three syllables." },
      { word: "harbour", ipa: "/HAR-ber/", syllables: "har-bour", tip: "Stress HAR." },
      { word: "immigrant", ipa: "/IM-ih-grunt/", syllables: "im-mi-grant", tip: "Stress IM. Three syllables." },
      { word: "diverse", ipa: "/dy-VURS/", syllables: "di-verse", tip: "Stress VURS." },
      { word: "entertainment", ipa: "/en-ter-TAYN-munt/", syllables: "en-ter-tain-ment", tip: "Stress TAYN." },
      { word: "museum", ipa: "/myoo-ZEE-um/", syllables: "mu-se-um", tip: "Stress ZEE. Three syllables." },
    ],
  },
  {
    id: "b4",
    slug: "liverpool",
    title: "Liverpool",
    category: "Reading",
    topic: "Culture",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Liverpool is a city in the north-west of England. It is famous for football, music, and its important role in history. It was the home city of the Beatles.",
    readingTime: 3,
    content: `
      <p><strong>Liverpool is a city in the north-west of England, on the River Mersey. About 500,000 people live there. It is one of the most famous cities in England.</strong></p>

      <h2>A port city</h2>
      <p>Liverpool grew as an important port city. Ships from all over the world arrived at its docks. In the 18th and 19th centuries, Liverpool was one of the busiest ports in the world. Trade with America, Africa, and Asia made the city wealthy.</p>
      <p>Sadly, Liverpool was also connected to the slave trade. Ships carried enslaved Africans across the Atlantic Ocean. Today, Liverpool has a museum called the International Slavery Museum to remember this history.</p>

      <h2>Football</h2>
      <p>Liverpool is very famous for football. Liverpool Football Club was founded in 1892. It is one of the most successful clubs in English football history. The club has won six European Champions League titles and nineteen league titles. Liverpool's home stadium is called Anfield.</p>
      <p>Everton is the other major football club in the city. The rivalry between Liverpool and Everton is called the Merseyside Derby. It is one of the most passionate local rivalries in English football.</p>

      <h2>The Beatles</h2>
      <p>Liverpool is the birthplace of the Beatles — one of the most famous bands in history. John Lennon, Paul McCartney, George Harrison, and Ringo Starr all grew up in Liverpool. The Beatles first became famous in the early 1960s.</p>
      <p>Today, tourists come from all over the world to visit places connected to the Beatles. The Cavern Club is a famous music venue in the city centre where the Beatles performed many times. There is also a Beatles Museum called the Beatles Story.</p>

      <h2>Culture and regeneration</h2>
      <p>In 2008, Liverpool was the European Capital of Culture. This brought many visitors and new investments to the city. The Albert Dock is a beautiful waterfront area with museums, galleries, restaurants, and shops. Liverpool has changed greatly in recent years and is a very exciting city to visit today.</p>
    `,
    vocabulary: [
      { word: "port", wordType: "noun", definition: "a town or city with a harbour where ships arrive and leave", example: "Liverpool was one of the busiest ports in the world." },
      { word: "dock", wordType: "noun", definition: "an area at a port where ships load and unload goods", example: "Ships from all over the world arrived at Liverpool's docks." },
      { word: "wealthy", wordType: "adjective", definition: "having a lot of money; rich", example: "Trade made the city of Liverpool very wealthy." },
      { word: "enslaved", wordType: "adjective", definition: "forced to work as a slave, without freedom or rights", example: "The museum tells the story of enslaved Africans." },
      { word: "rivalry", wordType: "noun", definition: "a competitive relationship between two people or groups", example: "The Merseyside Derby is a famous local rivalry." },
      { word: "passionate", wordType: "adjective", definition: "showing very strong feelings or enthusiasm", example: "Liverpool fans are very passionate about their football club." },
      { word: "birthplace", wordType: "noun", definition: "the place where someone was born", example: "Liverpool is the birthplace of the Beatles." },
      { word: "venue", wordType: "noun", definition: "a place where an event takes place", example: "The Cavern Club is a famous music venue." },
      { word: "regeneration", wordType: "noun", definition: "the process of improving an area that was in poor condition", example: "Liverpool went through major regeneration after 2008." },
      { word: "investment", wordType: "noun", definition: "money spent on something to make a profit or improve it", example: "Being Capital of Culture brought new investment to the city." },
      { word: "waterfront", wordType: "noun", definition: "an area of a town next to a river, lake, or sea", example: "The Albert Dock is a beautiful waterfront area." },
      { word: "gallery", wordType: "noun", definition: "a room or building where art is shown", example: "The Albert Dock has several interesting art galleries." },
      { word: "founded", wordType: "verb", definition: "started or established", example: "Liverpool Football Club was founded in 1892." },
      { word: "slave trade", wordType: "noun phrase", definition: "the historical practice of buying and selling enslaved people", example: "The museum teaches visitors about the slave trade." },
      { word: "stadium", wordType: "noun", definition: "a large building used for sports events", example: "Liverpool's stadium is called Anfield." },
    ],
    pronunciation: [
      { word: "Liverpool", ipa: "/LIV-er-pool/", syllables: "Liv-er-pool", tip: "Stress LIV. Three syllables." },
      { word: "Mersey", ipa: "/MUR-zee/", syllables: "Mer-sey", tip: "Stress MUR. The 'ey' sounds like 'zee'." },
      { word: "rivalry", ipa: "/RY-vul-ree/", syllables: "ri-val-ry", tip: "Stress RY. Three syllables." },
      { word: "passionate", ipa: "/PASH-uh-nut/", syllables: "pas-sion-ate", tip: "Stress PASH. Three syllables." },
      { word: "regeneration", ipa: "/ri-jen-er-AY-shun/", syllables: "re-gen-er-a-tion", tip: "Stress AY." },
      { word: "waterfront", ipa: "/WAW-ter-frunt/", syllables: "wa-ter-front", tip: "Stress WAW." },
    ],
  },
  {
    id: "b5",
    slug: "taylor-swift",
    title: "Taylor Swift",
    category: "Reading",
    topic: "Culture",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Taylor Swift is one of the most successful musicians in the world. She started her career as a country music singer and became a global pop star. Read about her life and career.",
    readingTime: 3,
    content: `
      <p><strong>Taylor Swift is one of the most successful musicians in the world. She has sold hundreds of millions of albums and has won dozens of awards. Her fans, called "Swifties," are some of the most loyal in the world.</strong></p>

      <h2>Early life</h2>
      <p>Taylor Alison Swift was born on 13 December 1989 in West Reading, Pennsylvania, USA. She grew up in a small town in Pennsylvania. From a young age, she loved music and performing. She started acting in local theatre shows when she was just ten years old.</p>
      <p>When Taylor was 14, her family moved to Nashville, Tennessee, so she could pursue a music career. Nashville is the centre of country music in the USA. Taylor started writing her own songs and soon got a record deal.</p>

      <h2>Early career</h2>
      <p>Taylor Swift released her first album in 2006. She was just 16 years old. The album was a country music album. Songs like "Tim McGraw" and "Teardrops on My Guitar" became very popular. She quickly became one of the biggest stars in country music.</p>
      <p>Her second album, Fearless, was released in 2008. It won the Grammy Award for Album of the Year — making Taylor the youngest artist to win this prize at that time.</p>

      <h2>Pop superstar</h2>
      <p>In 2012, Taylor moved from country music to pop music with her album Red. She became even more famous. Her albums 1989, Reputation, Lover, Folklore, Evermore, and Midnights all sold millions of copies around the world.</p>
      <p>In 2023 and 2024, Taylor Swift's Eras Tour became one of the biggest concert tours in history. She performed in stadiums all over the world. In every city she visited, fans wore colourful outfits and swapped friendship bracelets.</p>

      <h2>Taylor's influence</h2>
      <p>Taylor Swift is not only famous for her music. She is also known for speaking out about important issues such as artists' rights and political participation. She uses her social media to connect with millions of fans around the world. Taylor Swift has shown that hard work, creativity, and kindness can lead to great success.</p>
    `,
    vocabulary: [
      { word: "musician", wordType: "noun", definition: "a person who plays music or sings professionally", example: "Taylor Swift is one of the most successful musicians in the world." },
      { word: "loyal", wordType: "adjective", definition: "always supporting someone or something", example: "Taylor Swift's fans are some of the most loyal in the world." },
      { word: "pursue", wordType: "verb", definition: "to try to achieve something over a period of time", example: "Taylor moved to Nashville to pursue a music career." },
      { word: "record deal", wordType: "noun phrase", definition: "a contract with a music company to record and sell music", example: "Taylor got a record deal when she was a teenager." },
      { word: "release", wordType: "verb", definition: "to make something available to the public", example: "Taylor released her first album in 2006." },
      { word: "Grammy Award", wordType: "noun phrase", definition: "one of the most prestigious prizes in the music industry", example: "Fearless won the Grammy Award for Album of the Year." },
      { word: "stadium", wordType: "noun", definition: "a very large building where sports and concerts take place", example: "Taylor performed in stadiums all over the world." },
      { word: "outfit", wordType: "noun", definition: "a set of clothes worn together", example: "Fans wore colourful outfits to the concert." },
      { word: "swap", wordType: "verb", definition: "to exchange one thing for another", example: "Fans swapped friendship bracelets at the Eras Tour." },
      { word: "speak out", wordType: "verb phrase", definition: "to express your opinion publicly, especially about something important", example: "Taylor Swift speaks out about artists' rights." },
      { word: "participation", wordType: "noun", definition: "the act of joining in an activity", example: "Taylor encourages political participation among her fans." },
      { word: "creativity", wordType: "noun", definition: "the ability to make new and imaginative things", example: "Taylor Swift's creativity is shown in her songwriting." },
      { word: "superstar", wordType: "noun", definition: "a very famous and successful entertainer or sports person", example: "Taylor Swift became a pop superstar after her album 1989." },
      { word: "tour", wordType: "noun", definition: "a series of performances in different places", example: "The Eras Tour was one of the biggest concert tours in history." },
      { word: "career", wordType: "noun", definition: "the work someone does for most of their life", example: "Taylor started her music career in Nashville." },
    ],
    pronunciation: [
      { word: "musician", ipa: "/myoo-ZISH-un/", syllables: "mu-si-cian", tip: "Stress ZISH. Three syllables." },
      { word: "pursue", ipa: "/per-SYOO/", syllables: "pur-sue", tip: "Stress SYOO." },
      { word: "release", ipa: "/ri-LEES/", syllables: "re-lease", tip: "Stress LEES." },
      { word: "Grammy", ipa: "/GRAM-ee/", syllables: "Gram-my", tip: "Stress GRAM." },
      { word: "creativity", ipa: "/kree-ay-TIV-uh-tee/", syllables: "cre-a-tiv-i-ty", tip: "Stress TIV. Five syllables." },
      { word: "participation", ipa: "/par-tis-uh-PAY-shun/", syllables: "par-tic-i-pa-tion", tip: "Stress PAY." },
      { word: "superstar", ipa: "/SOO-per-star/", syllables: "su-per-star", tip: "Stress SOO." },
    ],
  },
  {
    id: "b6",
    slug: "the-suffragettes",
    title: "The Suffragettes",
    category: "Reading",
    topic: "Society",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "The suffragettes were brave women who fought for the right to vote in the early 20th century. Read about their campaign and why it was so important.",
    readingTime: 3,
    content: `
      <p><strong>One hundred years ago, women in Britain could not vote in elections. A group of brave women called the suffragettes decided to fight for this right. Their campaign changed history.</strong></p>

      <h2>What is the right to vote?</h2>
      <p>In a democracy, people choose their government by voting in elections. In the 19th century in Britain, only men could vote. Women had no voice in politics. Many people thought this was unfair, but changing the law was very difficult.</p>

      <h2>Who were the suffragettes?</h2>
      <p>The suffragettes were members of a group called the Women's Social and Political Union (WSPU). Emmeline Pankhurst founded the WSPU in Manchester in 1903. Her daughters Christabel and Sylvia also became important leaders in the movement.</p>
      <p>The suffragettes used direct action to protest. They chained themselves to railings, broke windows, set fire to post boxes, and went on hunger strikes when they were put in prison. Their motto was "Deeds, not Words."</p>

      <h2>Emmeline Pankhurst</h2>
      <p>Emmeline Pankhurst was one of the most important political figures of the 20th century. She was born in Manchester in 1858. She worked hard for women's rights all her life. She was arrested many times for her protest activities.</p>
      <p>When she was in prison, Emmeline went on hunger strikes. The government was worried she would die in prison, which would make her a martyr. So they released her and then arrested her again after she recovered — this was known as the "Cat and Mouse Act."</p>

      <h2>Victory</h2>
      <p>During the First World War (1914–1918), women worked in factories, hospitals, and on farms. They showed that they could do important work. After the war, in 1918, British women over 30 were allowed to vote. Ten years later, in 1928, all women over 21 could vote — the same as men.</p>
      <p>The suffragettes' campaign was a long and difficult struggle, but it succeeded. Today, the right to vote is seen as one of the most important rights in a democratic society.</p>
    `,
    vocabulary: [
      { word: "vote", wordType: "verb", definition: "to choose someone or something in an election", example: "In 1928, all women over 21 could vote in Britain." },
      { word: "election", wordType: "noun", definition: "when people choose their government by voting", example: "The government is chosen by the people in an election." },
      { word: "democracy", wordType: "noun", definition: "a system where people choose their leaders by voting", example: "In a democracy, everyone has the right to vote." },
      { word: "campaign", wordType: "noun", definition: "a series of actions taken to achieve a goal", example: "The suffragettes ran a long campaign for women's rights." },
      { word: "direct action", wordType: "noun phrase", definition: "protests that directly disrupt normal activities to make a point", example: "The suffragettes used direct action to get attention." },
      { word: "hunger strike", wordType: "noun phrase", definition: "refusing to eat as a form of protest", example: "Emmeline Pankhurst went on hunger strikes in prison." },
      { word: "motto", wordType: "noun", definition: "a short sentence that describes someone's beliefs or aims", example: "The suffragettes' motto was 'Deeds, not Words.'." },
      { word: "arrested", wordType: "adjective", definition: "taken by the police because of breaking the law", example: "Emmeline Pankhurst was arrested many times." },
      { word: "martyr", wordType: "noun", definition: "a person who suffers or dies for a cause or belief", example: "The government did not want Pankhurst to become a martyr." },
      { word: "struggle", wordType: "noun", definition: "a long, difficult effort to achieve something", example: "Winning the right to vote was a long struggle." },
      { word: "protest", wordType: "verb", definition: "to show that you disagree with something by taking action", example: "The suffragettes protested outside Parliament." },
      { word: "movement", wordType: "noun", definition: "a group of people who work together to achieve a social or political change", example: "The women's rights movement changed many laws." },
      { word: "politics", wordType: "noun", definition: "the activities connected to governing a country", example: "Women had no voice in politics before 1918." },
      { word: "figure", wordType: "noun", definition: "an important or famous person", example: "Emmeline Pankhurst was an important political figure." },
      { word: "recover", wordType: "verb", definition: "to become healthy again after illness", example: "They released her from prison until she recovered." },
    ],
    pronunciation: [
      { word: "suffragette", ipa: "/suf-ruh-JET/", syllables: "suf-fra-gette", tip: "Stress JET. Three syllables." },
      { word: "democracy", ipa: "/dih-MOK-ruh-see/", syllables: "de-moc-ra-cy", tip: "Stress MOK. Four syllables." },
      { word: "campaign", ipa: "/kam-PAYN/", syllables: "cam-paign", tip: "Stress PAYN. The 'gn' is silent." },
      { word: "parliament", ipa: "/PAR-luh-munt/", syllables: "par-lia-ment", tip: "Stress PAR. The 'ia' is swallowed." },
      { word: "martyr", ipa: "/MAR-ter/", syllables: "mar-tyr", tip: "Stress MAR. The 'yr' sounds like 'er'." },
      { word: "protest", ipa: "/PROH-test/", syllables: "pro-test", tip: "Stress PRO when it is a noun, pro-TEST when it is a verb." },
    ],
  },
  {
    id: "b7",
    slug: "route-66",
    title: "Route 66",
    category: "Reading",
    topic: "Culture",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Route 66 is one of the most famous roads in the world. It crosses the United States from Chicago to Los Angeles. Read about its history and why it is so special.",
    readingTime: 3,
    content: `
      <p><strong>Route 66 is one of the most famous roads in the United States. It stretches from Chicago, Illinois, to Santa Monica, California — a distance of about 3,940 kilometres. People have called it "The Main Street of America" and "The Mother Road."</strong></p>

      <h2>The history of Route 66</h2>
      <p>Route 66 was officially opened on 11 November 1926. At that time, most roads in the USA were dirt tracks. Route 66 was one of the first highways to be fully paved. This made travel across the country much easier.</p>
      <p>In the 1930s, thousands of families from the Dust Bowl states in the Midwest used Route 66 to travel west. They were looking for a better life in California. This sad but important period in American history was described in John Steinbeck's famous novel The Grapes of Wrath.</p>

      <h2>The golden age of Route 66</h2>
      <p>After the Second World War, Americans began to travel more by car. Route 66 became the road of adventure, freedom, and the American Dream. Families drove along it on holiday. Diners, motels, petrol stations, and souvenir shops appeared along the road.</p>
      <p>By the 1950s and 60s, Route 66 was a symbol of American culture. Bobby Troup wrote a song called "Get Your Kicks on Route 66" in 1946, which became very famous. The road appeared in films, novels, and television programmes.</p>

      <h2>Decline and revival</h2>
      <p>In the 1970s and 80s, new motorways called Interstate Highways were built across the USA. These faster roads bypassed many of the towns on Route 66. Businesses closed and the road became quiet. In 1985, Route 66 was officially removed from the US highway system.</p>
      <p>However, Route 66 never really died. People still drove along it as a tourist attraction. Today, it is one of the most popular road trips in the world. Tourists drive the full length of the road, stopping at diners, motels, and old roadside attractions along the way.</p>

      <h2>What you can see</h2>
      <p>Along Route 66, you can see amazing landscapes — from the flat plains of Illinois to the desert of New Mexico and Arizona, and finally the Pacific Ocean in California. You can visit old drive-in cinemas, neon signs, vintage cars, and famous diners. Route 66 is a living museum of American history and culture.</p>
    `,
    vocabulary: [
      { word: "stretch", wordType: "verb", definition: "to extend over a long distance", example: "Route 66 stretches from Chicago to California." },
      { word: "paved", wordType: "adjective", definition: "covered with a hard surface of tarmac or concrete", example: "Route 66 was one of the first fully paved roads in the USA." },
      { word: "dirt track", wordType: "noun phrase", definition: "a rough road made of soil, not tarmac", example: "Before Route 66, most roads were dirt tracks." },
      { word: "Midwest", wordType: "noun", definition: "the central region of the United States", example: "Many families from the Midwest drove Route 66 in the 1930s." },
      { word: "diner", wordType: "noun", definition: "a small, informal American restaurant", example: "Many diners opened along Route 66 in the 1950s." },
      { word: "motel", wordType: "noun", definition: "a roadside hotel for people travelling by car", example: "There are many motels along Route 66." },
      { word: "souvenir", wordType: "noun", definition: "an object you buy to remember a place or event", example: "Tourists buy souvenirs from shops along Route 66." },
      { word: "symbol", wordType: "noun", definition: "something that represents an idea or feeling", example: "Route 66 became a symbol of the American Dream." },
      { word: "decline", wordType: "noun", definition: "the process of becoming smaller, worse, or less important", example: "The decline of Route 66 began when new motorways were built." },
      { word: "revival", wordType: "noun", definition: "bringing something back to life or popularity after a period of decline", example: "Route 66 has had a revival as a tourist attraction." },
      { word: "bypass", wordType: "verb", definition: "to go around a place, avoiding it", example: "New motorways bypassed many towns on Route 66." },
      { word: "landscape", wordType: "noun", definition: "the natural scenery of an area", example: "Route 66 passes through many different landscapes." },
      { word: "vintage", wordType: "adjective", definition: "from the past and high quality; old-fashioned in a good way", example: "You can see vintage cars along Route 66." },
      { word: "adventure", wordType: "noun", definition: "an exciting and unusual experience", example: "Route 66 became the road of adventure and freedom." },
      { word: "road trip", wordType: "noun phrase", definition: "a long journey made by car for pleasure", example: "Driving Route 66 is one of the most popular road trips in the world." },
    ],
    pronunciation: [
      { word: "stretch", ipa: "/STRECH/", syllables: "stretch", tip: "One syllable. The 'tch' makes a single 'ch' sound." },
      { word: "souvenir", ipa: "/soo-vuh-NEER/", syllables: "sou-ve-nir", tip: "Stress NEER. Three syllables." },
      { word: "landscape", ipa: "/LAND-skayp/", syllables: "land-scape", tip: "Stress LAND." },
      { word: "adventure", ipa: "/ud-VEN-cher/", syllables: "ad-ven-ture", tip: "Stress VEN." },
      { word: "revival", ipa: "/ri-VY-vul/", syllables: "re-vi-val", tip: "Stress VY. Three syllables." },
      { word: "decline", ipa: "/dih-KLYN/", syllables: "de-cline", tip: "Stress KLYN." },
      { word: "vintage", ipa: "/VIN-tij/", syllables: "vin-tage", tip: "Stress VIN." },
    ],
  },
  {
    id: "b8",
    slug: "marathons",
    title: "Marathons",
    category: "Reading",
    topic: "Health",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "A marathon is a long-distance running race of 42.195 kilometres. Read about the history of the marathon and why millions of people around the world run them today.",
    readingTime: 3,
    content: `
      <p><strong>A marathon is a long-distance running race. It is exactly 42.195 kilometres long. Millions of people run marathons every year all over the world. It is one of the most challenging sports a person can do.</strong></p>

      <h2>The legend of Marathon</h2>
      <p>The marathon has an interesting history. According to legend, in 490 BC a Greek soldier called Pheidippides ran from the town of Marathon to Athens to deliver news of a great victory. The Greek army had just defeated a much larger Persian army. Pheidippides ran about 40 kilometres without stopping. When he arrived in Athens, he said "We have won!" and then died from exhaustion.</p>
      <p>This story inspired the modern marathon race. When the first modern Olympic Games were held in Athens in 1896, a marathon race was included. The race followed a similar route to the one Pheidippides ran.</p>

      <h2>The modern marathon</h2>
      <p>Today, marathon races take place in cities all over the world. The most famous marathons are in London, New York, Boston, Berlin, Tokyo, and Chicago. These six races are called the World Marathon Majors.</p>
      <p>The London Marathon was first held in 1981. It is now one of the biggest marathons in the world, with about 50,000 runners every year. Many runners raise money for charity by running the race.</p>

      <h2>Training for a marathon</h2>
      <p>Running a marathon requires months of training. Most runners train for between 16 and 20 weeks. They gradually increase the distance they run each week. A good training plan includes long runs, shorter faster runs, and rest days.</p>
      <p>Nutrition is also very important. Runners need to eat enough carbohydrates to give them energy. During the race, runners drink water and sports drinks to stay hydrated. Many runners also eat energy gels during long runs.</p>

      <h2>Why do people run marathons?</h2>
      <p>People run marathons for many different reasons. Some want to test their physical limits. Others want to raise money for charity. Many people run to improve their health and fitness. And some just love the experience of running through a city with thousands of other people cheering them on. Crossing the finish line of a marathon is one of the most satisfying experiences in sport.</p>
    `,
    vocabulary: [
      { word: "long-distance", wordType: "adjective", definition: "covering or travelling a very long distance", example: "A marathon is a long-distance running race." },
      { word: "legend", wordType: "noun", definition: "an old story that may or may not be true", example: "The marathon has an interesting legend behind it." },
      { word: "soldier", wordType: "noun", definition: "a person who fights in an army", example: "Pheidippides was a Greek soldier." },
      { word: "deliver", wordType: "verb", definition: "to take something to a person or place", example: "Pheidippides ran to Athens to deliver news of the victory." },
      { word: "victory", wordType: "noun", definition: "winning a battle, game, or competition", example: "The Greek army won a great victory at Marathon." },
      { word: "exhaustion", wordType: "noun", definition: "a state of extreme tiredness", example: "Pheidippides died from exhaustion after his run." },
      { word: "charity", wordType: "noun", definition: "an organisation that helps people in need, or money given to help others", example: "Many London Marathon runners raise money for charity." },
      { word: "training", wordType: "noun", definition: "physical exercise done regularly to become better at a sport", example: "Running a marathon requires months of training." },
      { word: "gradually", wordType: "adverb", definition: "slowly and steadily over time", example: "Runners gradually increase the distance they run each week." },
      { word: "nutrition", wordType: "noun", definition: "the food and drink you consume and how it affects your health", example: "Good nutrition is very important for marathon runners." },
      { word: "carbohydrate", wordType: "noun", definition: "a food substance in bread, rice, and pasta that gives energy", example: "Runners eat carbohydrates to give them energy." },
      { word: "hydrated", wordType: "adjective", definition: "having enough water in your body", example: "Runners must stay hydrated during a marathon." },
      { word: "fitness", wordType: "noun", definition: "the condition of being physically healthy and strong", example: "Many people run marathons to improve their fitness." },
      { word: "satisfying", wordType: "adjective", definition: "giving a feeling of pleasure and achievement", example: "Finishing a marathon is a very satisfying experience." },
      { word: "limit", wordType: "noun", definition: "the point beyond which something cannot go further", example: "Marathon runners like to test their physical limits." },
    ],
    pronunciation: [
      { word: "marathon", ipa: "/MAR-uh-thon/", syllables: "mar-a-thon", tip: "Stress MAR. Three syllables." },
      { word: "exhaustion", ipa: "/ig-ZAWS-chun/", syllables: "ex-haus-tion", tip: "Stress ZAWS. The 'h' in 'ex' is not pronounced." },
      { word: "gradually", ipa: "/GRAJ-oo-uh-lee/", syllables: "grad-u-al-ly", tip: "Stress GRAJ. Four syllables." },
      { word: "nutrition", ipa: "/noo-TRISH-un/", syllables: "nu-tri-tion", tip: "Stress TRISH." },
      { word: "carbohydrate", ipa: "/kar-boh-HY-drayt/", syllables: "car-bo-hy-drate", tip: "Stress HY. Four syllables." },
      { word: "satisfying", ipa: "/SAT-is-fy-ing/", syllables: "sat-is-fy-ing", tip: "Stress SAT. Four syllables." },
      { word: "charity", ipa: "/CHAR-uh-tee/", syllables: "char-i-ty", tip: "Stress CHAR. Three syllables." },
    ],
  },
  {
    id: "b9",
    slug: "the-amazon-rainforest",
    title: "The Amazon Rainforest",
    category: "Reading",
    topic: "Environment",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "The Amazon Rainforest is the largest rainforest on Earth. It covers most of the Amazon River basin in South America. Read about this amazing place and why it is so important.",
    readingTime: 3,
    content: `
      <p><strong>The Amazon Rainforest is the largest tropical rainforest in the world. It covers about 5.5 million square kilometres. Most of it is in Brazil, but parts are also in Peru, Colombia, and several other South American countries.</strong></p>

      <h2>The Amazon River</h2>
      <p>The Amazon River is the largest river in the world by the volume of water it carries. It is 6,400 kilometres long. The river starts in the Andes mountains in Peru and flows east until it reaches the Atlantic Ocean in Brazil.</p>
      <p>The Amazon carries about 20% of all the fresh water that flows into the world's oceans. During the rainy season, the river can be up to 48 kilometres wide in some places. Many towns and villages along the river can only be reached by boat.</p>

      <h2>Wildlife</h2>
      <p>The Amazon Rainforest is home to an incredible variety of wildlife. Scientists believe it contains about 10% of all the species on Earth. There are more than 40,000 plant species, 1,300 bird species, and 3,000 types of fish in the Amazon.</p>
      <p>Some of the most famous Amazon animals include the jaguar, the giant river otter, the anaconda, the electric eel, and the pink river dolphin. Many of these animals are found nowhere else on Earth.</p>

      <h2>Indigenous people</h2>
      <p>About one million indigenous people live in the Amazon Rainforest. They belong to hundreds of different tribes and speak many different languages. These people have lived in the forest for thousands of years. They know the plants and animals of the forest very well and use them for food and medicine.</p>

      <h2>Deforestation</h2>
      <p>The Amazon Rainforest is in danger. Every year, large areas of forest are cut down or burned to make space for farms and roads. This is called deforestation. It destroys the habitat of thousands of species and releases large amounts of carbon dioxide into the atmosphere, making climate change worse.</p>
      <p>Many scientists and environmentalists are working to protect the Amazon. They say that saving the Amazon Rainforest is essential for the health of the whole planet.</p>
    `,
    vocabulary: [
      { word: "tropical", wordType: "adjective", definition: "relating to the hot, wet regions near the Equator", example: "The Amazon is the world's largest tropical rainforest." },
      { word: "volume", wordType: "noun", definition: "the amount of space something takes up, or the quantity of liquid", example: "The Amazon River carries an enormous volume of water." },
      { word: "species", wordType: "noun", definition: "a group of animals or plants that are the same type", example: "The Amazon is home to millions of species." },
      { word: "incredible", wordType: "adjective", definition: "extremely good or remarkable; hard to believe", example: "The variety of wildlife in the Amazon is incredible." },
      { word: "jaguar", wordType: "noun", definition: "a large wild cat found in Central and South America", example: "The jaguar is one of the Amazon's most famous animals." },
      { word: "indigenous", wordType: "adjective", definition: "originally from a place; native", example: "About one million indigenous people live in the Amazon." },
      { word: "tribe", wordType: "noun", definition: "a group of people who live together and share the same culture", example: "There are hundreds of tribes in the Amazon." },
      { word: "deforestation", wordType: "noun", definition: "the cutting down of large areas of forest", example: "Deforestation is destroying the Amazon Rainforest." },
      { word: "habitat", wordType: "noun", definition: "the natural environment where an animal or plant lives", example: "Deforestation destroys the habitat of many animals." },
      { word: "atmosphere", wordType: "noun", definition: "the layer of gases surrounding the Earth", example: "Burning forests releases carbon dioxide into the atmosphere." },
      { word: "climate change", wordType: "noun phrase", definition: "long-term changes in global temperatures and weather patterns", example: "Deforestation makes climate change worse." },
      { word: "environmentalist", wordType: "noun", definition: "a person who works to protect the natural environment", example: "Environmentalists are fighting to save the Amazon." },
      { word: "essential", wordType: "adjective", definition: "absolutely necessary; very important", example: "Saving the Amazon is essential for the planet's health." },
      { word: "anaconda", wordType: "noun", definition: "a very large snake found in South America", example: "The anaconda is one of the largest snakes in the world." },
      { word: "fresh water", wordType: "noun phrase", definition: "water from rivers and lakes that is not salty", example: "The Amazon carries 20% of the world's fresh water flow." },
    ],
    pronunciation: [
      { word: "Amazon", ipa: "/AM-uh-zon/", syllables: "Am-a-zon", tip: "Stress AM. Three syllables." },
      { word: "tropical", ipa: "/TROP-uh-kul/", syllables: "trop-i-cal", tip: "Stress TROP. Three syllables." },
      { word: "indigenous", ipa: "/in-DIJ-uh-nus/", syllables: "in-dig-e-nous", tip: "Stress DIJ. Four syllables." },
      { word: "deforestation", ipa: "/dee-for-es-TAY-shun/", syllables: "de-for-es-ta-tion", tip: "Stress TAY. Five syllables." },
      { word: "atmosphere", ipa: "/AT-mus-feer/", syllables: "at-mos-phere", tip: "Stress AT. Three syllables." },
      { word: "species", ipa: "/SPEE-sheez/", syllables: "spe-cies", tip: "Stress SPEE. The 'ies' sounds like 'sheez'." },
      { word: "essential", ipa: "/ih-SEN-shul/", syllables: "es-sen-tial", tip: "Stress SEN." },
    ],
  },
  {
    id: "b10",
    slug: "the-olympic-games",
    title: "The Olympic Games",
    category: "Reading",
    topic: "Health",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "The Olympic Games are the world's greatest sports competition. Athletes from almost every country come together every four years to compete. Read about the history and traditions of the Olympics.",
    readingTime: 3,
    content: `
      <p><strong>The Olympic Games are the most important international sports competition in the world. Athletes from almost 200 countries compete in dozens of different sports. The Games take place every four years.</strong></p>

      <h2>The ancient Olympics</h2>
      <p>The Olympic Games started in ancient Greece about 2,700 years ago. They were held in a place called Olympia, in the south of Greece. Athletes from different Greek city-states came to compete in running, wrestling, discus throwing, and other sports. The Games were held to honour the god Zeus.</p>
      <p>The ancient Olympics continued for almost 1,200 years. They ended in AD 393 when the Roman Emperor Theodosius banned pagan festivals.</p>

      <h2>The modern Olympics</h2>
      <p>The modern Olympic Games were created by a French man called Baron Pierre de Coubertin. He believed that sport could bring peace between nations. The first modern Olympics were held in Athens, Greece, in 1896. Fourteen nations and about 241 athletes took part.</p>
      <p>Today, the Olympic Games are held in a different city every four years. Famous host cities include London, Paris, Tokyo, Beijing, and Sydney. The Olympic flag has five rings of different colours — blue, yellow, black, green, and red. These represent the five continents of the world.</p>

      <h2>Summer and Winter Olympics</h2>
      <p>There are two types of Olympic Games — the Summer Olympics and the Winter Olympics. The Summer Olympics include sports like athletics, swimming, gymnastics, cycling, football, and tennis. The Winter Olympics include sports like skiing, ice skating, ice hockey, and snowboarding.</p>
      <p>The Summer and Winter Olympics both happen every four years, but they are two years apart from each other. For example, if the Summer Olympics are in 2024, the Winter Olympics are in 2026.</p>

      <h2>Olympic traditions</h2>
      <p>The Olympic Games have many famous traditions. The Olympic flame is lit in Olympia, Greece, and carried by a relay of runners to the host city. The opening ceremony is a huge show with music, dancing, and a parade of athletes from every country. At the end, the athletes march into the stadium under their national flag.</p>
      <p>Winners receive gold, silver, or bronze medals. The national anthem of the winner's country is played during the medal ceremony. The Olympics remind us that sport can unite people from all over the world.</p>
    `,
    vocabulary: [
      { word: "compete", wordType: "verb", definition: "to take part in a contest or race to try to win", example: "Athletes from 200 countries compete in the Olympics." },
      { word: "ancient", wordType: "adjective", definition: "belonging to a very long time ago", example: "The ancient Olympics started in Greece 2,700 years ago." },
      { word: "wrestler", wordType: "noun", definition: "a person who competes in wrestling", example: "Ancient Greek athletes included wrestlers and runners." },
      { word: "honour", wordType: "verb", definition: "to show great respect for someone or something", example: "The Games were held to honour the god Zeus." },
      { word: "ban", wordType: "verb", definition: "to officially say something is not allowed", example: "The Roman Emperor banned the ancient Olympics in AD 393." },
      { word: "pagan", wordType: "adjective", definition: "relating to ancient religions that had many gods", example: "The Olympics were a pagan festival in ancient times." },
      { word: "nation", wordType: "noun", definition: "a country and its people", example: "The modern Olympics bring together athletes from many nations." },
      { word: "continent", wordType: "noun", definition: "one of the seven very large areas of land on Earth", example: "The five Olympic rings represent the five continents." },
      { word: "ceremony", wordType: "noun", definition: "a formal public event to celebrate or mark something important", example: "The opening ceremony is one of the most watched events on television." },
      { word: "relay", wordType: "noun", definition: "a race or process where each person takes a turn", example: "The Olympic flame is carried by a relay of runners." },
      { word: "medal", wordType: "noun", definition: "a metal disc given to the winner of a competition", example: "Olympic winners receive gold, silver, or bronze medals." },
      { word: "anthem", wordType: "noun", definition: "the official song of a country", example: "The national anthem is played during the medal ceremony." },
      { word: "unite", wordType: "verb", definition: "to bring people together as one", example: "The Olympics unite people from all over the world." },
      { word: "gymnastics", wordType: "noun", definition: "a sport involving acrobatic movements and balance exercises", example: "Gymnastics is a popular Summer Olympics sport." },
      { word: "parade", wordType: "noun", definition: "a procession of people walking together in a public celebration", example: "Athletes march in the Olympic parade at the opening ceremony." },
    ],
    pronunciation: [
      { word: "Olympic", ipa: "/oh-LIM-pik/", syllables: "O-lym-pic", tip: "Stress LIM. Three syllables." },
      { word: "ancient", ipa: "/AYN-shunt/", syllables: "an-cient", tip: "Stress AYN. Two syllables — the 'cie' makes a 'sh' sound." },
      { word: "athletics", ipa: "/ath-LET-iks/", syllables: "ath-let-ics", tip: "Stress LET. Three syllables. Don't say ATH-uh-let-iks." },
      { word: "ceremony", ipa: "/SER-uh-moh-nee/", syllables: "cer-e-mo-ny", tip: "Stress SER. Four syllables." },
      { word: "gymnastics", ipa: "/jim-NAS-tiks/", syllables: "gym-nas-tics", tip: "Stress NAS. The 'g' is silent." },
      { word: "continent", ipa: "/KON-tuh-nent/", syllables: "con-ti-nent", tip: "Stress KON. Three syllables." },
      { word: "anthem", ipa: "/AN-thum/", syllables: "an-them", tip: "Stress AN. The 'th' makes a soft sound." },
    ],
  },
  // ─── EXISTING articles (Advanced) ─────────────────────────────────
  {
  id: "a16",
  slug: "how-fast-food-ruins-traditional-food-culture",
  title: "How Fast Food Ruins Traditional Food Culture",
  category: "Reading",
  topic: "Culture",
  difficulty: "Advanced",
  coverImage:
    "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1600&q=80",
  date: "2025-02-21",
  description:
    "Fast food may be convenient and cheap, but it can weaken traditional food culture, reduce authentic regional flavours, and create serious health risks.",
  readingTime: 5,
  content: `
    <p><strong>Fast food has become a major part of modern life, but its convenience can come at a cost to traditional food culture and public health.</strong></p>

    <p>Many families eat fast food regularly because it is cheap, quick, and easy to find. However, the popularity of fast food has created important concerns. One major issue is that it can damage authentic regional cuisines by changing traditional dishes into standardized commercial products.</p>

    <h2>Cultural homogenization</h2>
    <p>Fast food chains often create simplified versions of cultural foods. These versions are designed to appeal to the largest possible number of customers, so they often use familiar sweet, salty, or strong flavours instead of the more subtle flavours found in traditional cooking.</p>

    <p>For example, some restaurant versions of Chinese dishes are heavily adapted for American tastes. They may be sweeter, tangier, or heavier than the original recipes. As a result, customers may begin to associate these altered versions with the culture itself, even though they do not fully represent the authentic dish.</p>

    <h2>Losing cultural meaning</h2>
    <p>Traditional food is not only about flavour. It also carries history, preparation methods, family habits, and cultural meaning. When fast food companies simplify traditional meals, they can remove the deeper significance behind those dishes.</p>

    <p>This also affects the social side of eating. In many cultures, meals are shared while sitting with family or friends. Fast food, however, is often promoted as something people eat quickly, alone, or while travelling. This weakens the communal value of traditional dining.</p>

    <h2>Health concerns</h2>
    <p>Fast food also raises serious health concerns. It is usually produced in large quantities and often relies on cheap ingredients such as refined grains, added sugars, high sodium, and heavily processed components.</p>

    <p>Although fast food may seem affordable, its low price can reflect lower nutritional quality. Regular consumption is linked to health problems such as obesity, type 2 diabetes, digestive issues, weaker immunity, high blood pressure, and heart disease.</p>

    <h2>The accessibility argument</h2>
    <p>Some people argue that fast food is popular because it is accessible, especially for people with limited time or money. This point is important, but it does not erase the long-term effects of fast food culture.</p>

    <p>If societies rely too heavily on fast food, they may lose both healthier eating habits and valuable food traditions. The short-term benefits of convenience and low cost can be outweighed by long-term cultural and health damage.</p>

    <h2>Protecting food traditions</h2>
    <p>Fast food cannot disappear overnight, but people can become more aware of what is lost when traditional meals are replaced by mass-produced versions. Protecting authentic food culture means valuing fresh ingredients, regional recipes, family meals, and the stories behind food.</p>

    <p>Ultimately, food is more than something to consume quickly. It is part of identity, community, and cultural memory.</p>
  `,
  vocabulary: [
    {
      word: "fast food chains",
      wordType: "noun phrase",
      definition: "companies that sell quick, standardized meals in many locations",
      example: "Fast food chains often adapt traditional dishes for mass appeal.",
    },
    {
      word: "traditional food culture",
      wordType: "noun phrase",
      definition: "the customs, recipes, and social habits connected to food in a culture",
      example: "Traditional food culture is often passed down through families.",
    },
    {
      word: "authentic cuisine",
      wordType: "noun phrase",
      definition: "food that closely follows the original traditions of a place or culture",
      example: "Authentic cuisine uses traditional ingredients and methods.",
    },
    {
      word: "cultural homogenization",
      wordType: "noun phrase",
      definition: "the process by which different cultures become more similar",
      example: "Fast food can contribute to cultural homogenization.",
    },
    {
      word: "standardized",
      wordType: "adjective",
      definition: "made the same everywhere according to one fixed model",
      example: "Many fast food meals are standardized across countries.",
    },
    {
      word: "misrepresentation",
      wordType: "noun",
      definition: "a false or inaccurate presentation of something",
      example: "Simplified dishes can lead to cultural misrepresentation.",
    },
    {
      word: "communal significance",
      wordType: "noun phrase",
      definition: "importance connected to sharing experiences with a group",
      example: "Family meals have communal significance in many cultures.",
    },
    {
      word: "processed ingredients",
      wordType: "noun phrase",
      definition: "food ingredients that have been heavily changed from their natural form",
      example: "Fast food often contains processed ingredients.",
    },
    {
      word: "nutritional quality",
      wordType: "noun phrase",
      definition: "the health value of food based on its nutrients",
      example: "Fresh meals usually have higher nutritional quality.",
    },
    {
      word: "long-term consequences",
      wordType: "noun phrase",
      definition: "effects that appear or continue far into the future",
      example: "Poor eating habits can have long-term consequences.",
    },
    {
      word: "accessibility",
      wordType: "noun",
      definition: "how easy something is to obtain or use",
      example: "Fast food is popular partly because of its accessibility.",
    },
    {
      word: "cultural memory",
      wordType: "noun phrase",
      definition: "shared knowledge, traditions, and stories remembered by a culture",
      example: "Traditional recipes are part of cultural memory.",
    },
  ],
  pronunciation: [
    {
      word: "traditional",
      ipa: "/truh-DISH-uh-nul/",
      syllables: "tra-di-tion-al",
      tip: "Stress DISH.",
    },
    {
      word: "cuisine",
      ipa: "/kwi-ZEEN/",
      syllables: "cui-sine",
      tip: "Stress ZEEN.",
    },
    {
      word: "authentic",
      ipa: "/aw-THEN-tik/",
      syllables: "au-then-tic",
      tip: "Stress THEN.",
    },
    {
      word: "homogenization",
      ipa: "/huh-MOJ-uh-nuh-ZAY-shun/",
      syllables: "ho-mo-gen-i-za-tion",
      tip: "Stress ZAY.",
    },
    {
      word: "accessibility",
      ipa: "/ak-ses-uh-BIL-uh-tee/",
      syllables: "ac-ces-si-bil-i-ty",
      tip: "Stress BIL.",
    },
    {
      word: "nutritional",
      ipa: "/noo-TRISH-uh-nul/",
      syllables: "nu-tri-tion-al",
      tip: "Stress TRISH.",
    },
  ],
},
  {
  id: "a17",
  slug: "why-we-waste-so-much-food-and-how-to-stop",
  title: "Why We Waste So Much Food and How We Can Stop",
  category: "Reading",
  topic: "Environment",
  difficulty: "Advanced",
  coverImage:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  date: "2025-02-07",
  description:
    "Food waste harms the climate, wastes water and money, and leaves edible food unused, but smarter labels, smaller portions, food donation, and composting can help solve the problem.",
  readingTime: 6,
  content: `
    <p><strong>Food waste is a serious environmental, economic, and social problem, but it can be reduced through better systems and smarter everyday habits.</strong></p>

    <p>Every year, a huge amount of food is wasted in the United States. Much of this food ends up in landfills, where it breaks down under piles of rubbish and releases methane, a powerful greenhouse gas. This means food waste is not only about throwing away meals; it also contributes to climate damage.</p>

    <p>The problem becomes even more serious when we remember how many resources are used to produce food. Agriculture needs water, land, energy, workers, transport, packaging, and money. When edible food is thrown away, all of those resources are wasted too. At the same time, many people still struggle with food insecurity and do not always have enough nutritious food to eat.</p>

    <h2>Confusing food labels</h2>
    <p>One major reason food is wasted is confusion about date labels. Shoppers often see phrases such as “sell by,” “best by,” “use by,” or “best before,” but these labels do not always mean the same thing. Many people believe food is unsafe immediately after the printed date, so they throw it away too early.</p>

    <p>A useful solution is to make food labels clearer and more standardized. If companies used simple labels that clearly explained when food is no longer safe, consumers would make better decisions and waste less food at home.</p>

    <h2>Oversized portions and containers</h2>
    <p>Another cause of food waste is the growth of large servings and big food packages. Restaurants, cinemas, fast-food businesses, and supermarkets often encourage people to buy more than they need. Bigger portions may seem like better value, but they often create leftovers that are never eaten.</p>

    <p>To solve this problem, food businesses can offer smaller portions, flexible serving sizes, and better packaging options. At home, people can also start with smaller servings and take more only if they are still hungry. This simple habit can reduce waste and save money.</p>

    <h2>The demand for perfect produce</h2>
    <p>Many fruits and vegetables are wasted because they do not look perfect. A carrot may be crooked, a tomato may be bumpy, or a banana may have spots, but these foods can still be safe, healthy, and delicious. Unfortunately, shoppers often avoid imperfect produce, so farmers and stores may throw it away or leave it unused.</p>

    <p>Consumers can help by buying “ugly” but edible produce. Stores can also create special sections for imperfect fruits and vegetables and sell them at lower prices. This changes the idea that food must look perfect before it is considered valuable.</p>

    <h2>Poor waste tracking in food businesses</h2>
    <p>Many food retailers do not carefully track how much food they throw away. Without good data, they may keep ordering too much of the same product and repeat the same wasteful pattern. This is especially common with perishable foods such as bread, meat, fresh produce, and ready-made meals.</p>

    <p>Waste tracking technology can help businesses understand what they are over-buying and what customers actually purchase. With better inventory management, stores can reduce waste, save money, and plan their stock more responsibly.</p>

    <h2>Overstocked stores</h2>
    <p>Supermarkets often want their shelves to look full because customers connect full shelves with freshness and quality. However, keeping too much food on display can lead to waste, especially when products spoil before they are sold.</p>

    <p>Retailers can reduce this problem by using historical sales data, improving product management, and changing the shopping environment so that customers do not expect endless quantities of perfect-looking food at all times.</p>

    <h2>Lack of food rescue and recycling services</h2>
    <p>Sometimes people and businesses want to donate or recycle extra food but do not have an easy way to do it. If there is no nearby food bank, donation center, community fridge, composting service, or food recycling program, edible food and food scraps often end up in the trash.</p>

    <p>Communities can respond by strengthening food rescue systems and making composting more accessible. Safe, unused food should be donated to people who need it. Scraps that cannot be eaten or donated should be composted or processed through other recycling systems, such as anaerobic digestion.</p>

    <h2>What people can do at home</h2>
    <p>Ordinary people can also make a difference. They can serve smaller portions, buy imperfect produce, store food properly, plan meals, use leftovers, donate safe unused food, and compost scraps. These actions may seem small, but together they reduce waste and show respect for the food, labor, water, and energy behind every meal.</p>

    <p>Food waste is not impossible to solve. With clearer labels, better business practices, stronger donation systems, and responsible habits at home, society can save money, protect resources, reduce methane emissions, and make more food available to people who need it.</p>
  `,
  vocabulary: [
    {
      word: "food waste",
      wordType: "noun phrase",
      definition: "food that is thrown away even though it could often be eaten or used",
      example: "Reducing food waste can save money and protect the environment.",
    },
    {
      word: "landfill",
      wordType: "noun",
      definition: "a place where rubbish is buried under the ground",
      example: "Food in a landfill can release harmful gases.",
    },
    {
      word: "methane",
      wordType: "noun",
      definition: "a powerful gas that contributes to climate change",
      example: "Rotting food can produce methane in landfills.",
    },
    {
      word: "greenhouse gas",
      wordType: "noun phrase",
      definition: "a gas that traps heat in the atmosphere and warms the planet",
      example: "Methane is a strong greenhouse gas.",
    },
    {
      word: "deplete",
      wordType: "verb",
      definition: "to use up or greatly reduce something valuable",
      example: "Wasting food can deplete water, land, and energy resources.",
    },
    {
      word: "precious resources",
      wordType: "noun phrase",
      definition: "valuable natural or human resources that should not be wasted",
      example: "Agriculture depends on precious resources such as water and soil.",
    },
    {
      word: "edible",
      wordType: "adjective",
      definition: "safe and suitable to eat",
      example: "Odd-looking fruits can still be edible.",
    },
    {
      word: "squandered",
      wordType: "verb",
      definition: "wasted in a careless way",
      example: "When crops are thrown away, the resources used to grow them are squandered.",
    },
    {
      word: "date labels",
      wordType: "noun phrase",
      definition: "printed dates on food packages that guide selling, quality, or safety",
      example: "Confusing date labels can make people throw food away too early.",
    },
    {
      word: "standardized",
      wordType: "adjective",
      definition: "made clear and consistent according to one system",
      example: "Standardized labels would help consumers understand food safety better.",
    },
    {
      word: "portion control",
      wordType: "noun phrase",
      definition: "the practice of serving only a reasonable amount of food",
      example: "Portion control helps families avoid unnecessary leftovers.",
    },
    {
      word: "leftovers",
      wordType: "noun",
      definition: "food that remains after a meal",
      example: "Leftovers should be stored properly and eaten later.",
    },
    {
      word: "flawless produce",
      wordType: "noun phrase",
      definition: "fruits and vegetables that look perfect in shape, size, and color",
      example: "The demand for flawless produce causes many imperfect vegetables to be wasted.",
    },
    {
      word: "food insecure",
      wordType: "adjective phrase",
      definition: "not having reliable access to enough healthy food",
      example: "Food donation can support food insecure families.",
    },
    {
      word: "inventory",
      wordType: "noun",
      definition: "the goods or products a business has available",
      example: "Tracking inventory helps stores avoid buying too much food.",
    },
    {
      word: "over-purchasing",
      wordType: "noun",
      definition: "buying more than is needed",
      example: "Over-purchasing often leads to spoiled food and wasted money.",
    },
    {
      word: "perishable",
      wordType: "adjective",
      definition: "likely to spoil quickly if not stored correctly",
      example: "Milk, meat, and fresh berries are perishable foods.",
    },
    {
      word: "food rescue",
      wordType: "noun phrase",
      definition: "collecting safe unused food and giving it to people who need it",
      example: "Food rescue programs keep edible food out of landfills.",
    },
    {
      word: "composting",
      wordType: "noun",
      definition: "turning food scraps and organic waste into useful soil material",
      example: "Composting fruit peels gives food scraps a second purpose.",
    },
    {
      word: "anaerobic digestion",
      wordType: "noun phrase",
      definition: "a process that breaks down organic waste without oxygen and can produce energy",
      example: "Anaerobic digestion can recycle food scraps that cannot be donated.",
    },
  ],
  pronunciation: [
    {
      word: "waste",
      ipa: "/weyst/",
      syllables: "waste",
      tip: "Do not pronounce it like 'west'; use the long AY sound.",
    },
    {
      word: "landfill",
      ipa: "/LAND-fil/",
      syllables: "land-fill",
      tip: "Stress LAND.",
    },
    {
      word: "methane",
      ipa: "/METH-ayn/",
      syllables: "meth-ane",
      tip: "Stress METH; the second part sounds like 'ayn'.",
    },
    {
      word: "emissions",
      ipa: "/ih-MISH-unz/",
      syllables: "e-mis-sions",
      tip: "Stress MISH; do not pronounce the final -sion as 'see-on'.",
    },
    {
      word: "agriculture",
      ipa: "/AG-ri-kul-cher/",
      syllables: "ag-ri-cul-ture",
      tip: "Stress AG.",
    },
    {
      word: "consumption",
      ipa: "/kun-SUMP-shun/",
      syllables: "con-sump-tion",
      tip: "Stress SUMP.",
    },
    {
      word: "edible",
      ipa: "/ED-uh-bul/",
      syllables: "ed-i-ble",
      tip: "Stress ED; do not say 'ee-DYE-bul'.",
    },
    {
      word: "squandered",
      ipa: "/SKWON-derd/",
      syllables: "squan-dered",
      tip: "Stress SKWON.",
    },
    {
      word: "prematurely",
      ipa: "/pree-muh-CHOOR-lee/",
      syllables: "pre-ma-ture-ly",
      tip: "Stress CHOOR.",
    },
    {
      word: "standardized",
      ipa: "/STAN-der-dyzd/",
      syllables: "stand-ard-ized",
      tip: "Stress STAN.",
    },
    {
      word: "produce",
      ipa: "/PROH-doos/",
      syllables: "pro-duce",
      tip: "As a noun meaning fruits and vegetables, stress PROH.",
    },
    {
      word: "flawless",
      ipa: "/FLAW-lis/",
      syllables: "flaw-less",
      tip: "Stress FLAW.",
    },
    {
      word: "inventory",
      ipa: "/IN-vun-tor-ee/",
      syllables: "in-ven-to-ry",
      tip: "Stress IN.",
    },
    {
      word: "perishable",
      ipa: "/PER-ish-uh-bul/",
      syllables: "per-ish-a-ble",
      tip: "Stress PER.",
    },
    {
      word: "composting",
      ipa: "/KOM-poh-sting/",
      syllables: "com-post-ing",
      tip: "Stress KOM.",
    },
    {
      word: "anaerobic digestion",
      ipa: "/an-air-OH-bik dye-JES-chun/",
      syllables: "an-aer-o-bic di-ges-tion",
      tip: "Stress OH in anaerobic and JES in digestion.",
    },
  ],
},
  {
  id: "a14",
  slug: "the-big-bang",
  title: "The Big Bang",
  category: "Reading",
  topic: "Science",
  difficulty: "Advanced",
  coverImage:
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80",
  date: "2024-08-24",
  description:
    "George Gamow created the first serious scientific explanation of how the universe began from an extremely dense point of matter.",
  readingTime: 5,
  content: `
    <p><strong>The Big Bang theory explains that the universe began with the giant explosion of an infinitely dense, atom-sized point of matter.</strong></p>

    <p>The study of our history and origins is important for understanding who we are. This includes the history of humans, life on Earth, our planet itself, and the universe as a whole. However, studying events that happened billions of years ago is extremely difficult because no one directly observed them.</p>

    <p>George Gamow’s work was the first serious attempt to create a scientific and rational description of the beginning of the universe. He named the moment of explosive birth the “Big Bang,” a name that is still used today.</p>

    <h2>How the idea developed</h2>
    <p>In 1926, Edwin Hubble discovered that the universe is expanding. This discovery made scientists wonder what the universe had looked like in the past. If the universe is growing larger now, it may once have been much smaller.</p>

    <p>In 1927, Georges Lemaitre suggested that the entire universe had once been compressed into a single, infinitely dense atom of matter. He called this idea the “cosmic egg.” However, early explanations of this idea lacked enough scientific data and mathematical support.</p>

    <h2>Gamow’s scientific model</h2>
    <p>George Gamow decided to use physics, mathematics, and quantum theory to test whether the universe could have started as a cosmic egg. He began with Einstein’s equations on general relativity.</p>

    <p>In the 1940s, Gamow used his knowledge of nuclear reactions to describe what would happen inside a primordial fireball. He studied how hydrogen nuclei could be converted into helium and used research on high-energy radiation to understand the conditions of the early universe.</p>

    <p>Gamow slowly built a model of the explosion and the chemical reactions that followed it. He showed mathematically that the early universe was mainly composed of densely packed neutrons. Under extreme heat and pressure, these neutrons could combine into larger nuclei or separate into protons and electrons, forming hydrogen and helium.</p>

    <h2>The afterglow of the universe</h2>
    <p>Gamow also predicted that the Big Bang would have created a huge wave of energy. As the universe expanded, this energy would spread and cool, but it would still remain detectable as a faint afterglow of the original explosion.</p>

    <p>This cosmic background radiation was later detected by radio astronomers, helping to confirm Gamow’s Big Bang theory. Through physics, chemistry, and mathematics, Gamow helped scientists understand the birth of the universe billions of years ago.</p>

    <h2>Fun fact</h2>
    <p>Gamow was known not only for his scientific work but also for his sense of humor and practical jokes. A reporter once described him as one of the few scientists in America with a real sense of humor.</p>
  `,
  vocabulary: [
    {
      word: "giant explosion",
      wordType: "noun phrase",
      definition: "a very large and powerful burst or blast",
      example: "The Big Bang describes the universe beginning with a giant explosion.",
    },
    {
      word: "infinitely dense",
      wordType: "phrase",
      definition: "having unlimited or extremely great density",
      example: "The universe may once have been compressed into an infinitely dense point.",
    },
    {
      word: "scientific explanation",
      wordType: "noun phrase",
      definition: "an explanation based on evidence, logic, and science",
      example: "Gamow created a scientific explanation of the universe’s beginning.",
    },
    {
      word: "rational description",
      wordType: "noun phrase",
      definition: "a logical and reasonable explanation of something",
      example: "His work gave a rational description of the early universe.",
    },
    {
      word: "explosive birth",
      wordType: "noun phrase",
      definition: "a sudden and powerful beginning",
      example: "Gamow called the universe’s explosive birth the Big Bang.",
    },
    {
      word: "ongoing expansion",
      wordType: "noun phrase",
      definition: "continuous growth or spreading",
      example: "Hubble’s discovery showed the universe’s ongoing expansion.",
    },
    {
      word: "cosmic egg",
      wordType: "noun phrase",
      definition: "an early idea that the universe began as a tiny dense object",
      example: "Lemaitre called the original dense universe the cosmic egg.",
    },
    {
      word: "mathematical support",
      wordType: "noun phrase",
      definition: "proof or explanation based on mathematics",
      example: "Early Big Bang ideas needed stronger mathematical support.",
    },
    {
      word: "general relativity",
      wordType: "noun phrase",
      definition: "Einstein’s theory explaining gravity, space, and time",
      example: "Gamow used equations from general relativity.",
    },
    {
      word: "primordial fireball",
      wordType: "noun phrase",
      definition: "the extremely hot early state of the universe",
      example: "Gamow studied reactions inside the primordial fireball.",
    },
    {
      word: "extreme heat and pressure",
      wordType: "noun phrase",
      definition: "very high temperature and force",
      example: "Neutrons changed under extreme heat and pressure.",
    },
    {
      word: "cosmic background radiation",
      wordType: "noun phrase",
      definition: "faint energy left over from the early universe",
      example: "Cosmic background radiation helped confirm the Big Bang theory.",
    },
  ],
  pronunciation: [
    {
      word: "universe",
      ipa: "/YOO-nuh-vurs/",
      syllables: "u-ni-verse",
      tip: "Stress the first syllable: YOO.",
    },
    {
      word: "explosion",
      ipa: "/ik-SPLOH-zhun/",
      syllables: "ex-plo-sion",
      tip: "Stress SPLOH.",
    },
    {
      word: "infinitely",
      ipa: "/IN-fuh-nit-lee/",
      syllables: "in-fi-nite-ly",
      tip: "Stress IN.",
    },
    {
      word: "astronomy",
      ipa: "/uh-STRON-uh-mee/",
      syllables: "as-tron-o-my",
      tip: "Stress STRON.",
    },
    {
      word: "relativity",
      ipa: "/rel-uh-TIV-uh-tee/",
      syllables: "rel-a-tiv-i-ty",
      tip: "Stress TIV.",
    },
    {
      word: "radiation",
      ipa: "/ray-dee-AY-shun/",
      syllables: "ra-di-a-tion",
      tip: "Stress AY.",
    },
  ],
},
{
  id: "a15",
  slug: "adolescence-is-a-new-birth",
  title: "Adolescence is a New Birth",
  category: "Reading",
  topic: "Society",
  difficulty: "Advanced",
  coverImage:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
  date: "2024-08-24",
  description:
    "G. Stanley Hall viewed adolescence as a powerful stage of human development marked by emotional change, self-consciousness, and growth into adulthood.",
  readingTime: 5,
  content: `
    <p><strong>G. Stanley Hall believed that adolescence is a new birth: a stage when young people experience emotional struggle, sensitivity, and major personal change.</strong></p>

    <p>The word “adolescence” literally means “growing up.” It describes the stage between childhood and adulthood, although in everyday use it often refers to the teenage years. In many Western societies, adolescence was not widely recognized as a separate stage of life until the 20th century.</p>

    <h2>Hall’s view of adolescence</h2>
    <p>G. Stanley Hall was a pioneering psychologist and educator. In his 1904 book <em>Adolescence</em>, he became one of the first academics to study this stage seriously.</p>

    <p>Hall was influenced by Darwin’s theory of evolution. He believed that human development is determined by nature and that childhood reflects earlier stages of evolutionary change. According to Hall, children pass through several growth stages before becoming adults.</p>

    <p>At adolescence, Hall believed that evolutionary momentum slows down and individual change becomes more important. This period is marked by strong emotions, self-consciousness, risk-taking, and sensitivity.</p>

    <h2>Storm and stress</h2>
    <p>Hall connected adolescence with the German idea of <em>Sturm und Drang</em>, meaning “Storm and Stress.” He described adolescence as a period of emotional turmoil and rebellion.</p>

    <p>Teenagers, according to Hall, crave strong feelings and new sensations. They may find routine and monotony intolerable. Their awareness of themselves and the world becomes sharper, so experiences are felt more intensely.</p>

    <h2>Modern echoes</h2>
    <p>Many of Hall’s ideas are still reflected in modern research. He believed that adolescents are especially susceptible to depression and described a pattern of sadness that begins around age 11, peaks at 15, and falls steadily until early adulthood.</p>

    <p>Modern studies have also found that teenagers can become highly sensitive to social situations. Their advanced reasoning skills allow them to “read between the lines,” but this can also increase self-criticism and anxiety.</p>

    <p>Hall also claimed that criminal activity is more common during the teenage years and often peaks around age 18, an idea that still has support today.</p>

    <h2>A necessary beginning</h2>
    <p>Although Hall described adolescence as difficult, he did not see it only negatively. He believed it was a necessary beginning of something better. For him, adolescence was the stage when higher and more fully human traits are born.</p>

    <p>In this sense, adolescence is not simply a problem period. It is also a time of growth, identity formation, and preparation for adult life.</p>
  `,
  vocabulary: [
    {
      word: "human development",
      wordType: "noun phrase",
      definition: "the process of physical, emotional, and mental growth in people",
      example: "Hall studied adolescence as part of human development.",
    },
    {
      word: "distinct stage",
      wordType: "noun phrase",
      definition: "a separate and clearly different period",
      example: "Adolescence is a distinct stage between childhood and adulthood.",
    },
    {
      word: "pioneering psychologist",
      wordType: "noun phrase",
      definition: "an early psychologist who introduces important new ideas",
      example: "G. Stanley Hall was a pioneering psychologist.",
    },
    {
      word: "theory of evolution",
      wordType: "noun phrase",
      definition: "the scientific idea that living things change over time",
      example: "Hall was influenced by Darwin’s theory of evolution.",
    },
    {
      word: "ancestral record",
      wordType: "noun phrase",
      definition: "the inherited history of human development",
      example: "Hall believed children develop according to an ancestral record.",
    },
    {
      word: "growth stages",
      wordType: "noun phrase",
      definition: "periods of development that people pass through",
      example: "Children go through several growth stages.",
    },
    {
      word: "individual change",
      wordType: "noun phrase",
      definition: "personal development or transformation",
      example: "Hall saw adolescence as a time of individual change.",
    },
    {
      word: "emotional turmoil",
      wordType: "noun phrase",
      definition: "a state of strong and confused emotions",
      example: "Adolescence may involve emotional turmoil.",
    },
    {
      word: "risk-taking behaviour",
      wordType: "noun phrase",
      definition: "actions that involve danger or possible harm",
      example: "Teenagers may show more risk-taking behaviour.",
    },
    {
      word: "strong sensations",
      wordType: "noun phrase",
      definition: "powerful feelings or experiences",
      example: "Hall believed adolescents crave strong sensations.",
    },
    {
      word: "advanced reasoning skills",
      wordType: "noun phrase",
      definition: "developed ability to think deeply and logically",
      example: "Advanced reasoning skills can make teenagers more sensitive.",
    },
    {
      word: "identity formation",
      wordType: "noun phrase",
      definition: "the process of developing a clear sense of who one is",
      example: "Adolescence is an important period of identity formation.",
    },
  ],
  pronunciation: [
    {
      word: "adolescence",
      ipa: "/ad-uh-LES-ens/",
      syllables: "ad-o-les-cence",
      tip: "Stress LES.",
    },
    {
      word: "psychologist",
      ipa: "/sy-KOL-uh-jist/",
      syllables: "psy-chol-o-gist",
      tip: "The 'p' is silent. Stress KOL.",
    },
    {
      word: "evolution",
      ipa: "/ev-uh-LOO-shun/",
      syllables: "ev-o-lu-tion",
      tip: "Stress LOO.",
    },
    {
      word: "emotional",
      ipa: "/i-MOH-shuh-nul/",
      syllables: "e-mo-tion-al",
      tip: "Stress MOH.",
    },
    {
      word: "rebellion",
      ipa: "/ri-BEL-yun/",
      syllables: "re-bel-lion",
      tip: "Stress BEL.",
    },
    {
      word: "identity",
      ipa: "/eye-DEN-tuh-tee/",
      syllables: "i-den-ti-ty",
      tip: "Stress DEN.",
    },
  ],
},
  {
    id: "a3",
    slug: "young-peoples-mental-health-worse-today",
    title: "Is young people’s mental health really worse today than it was decades ago?",
    category: "Reading",
    topic: "Health",
    difficulty: "Advanced",
    coverImage:
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description:
      "Smartphones, covid-19, social media and climate change may all be affecting the mental health of children and young adults.",
    readingTime: 5,
    content: `
      <p><strong>Smartphones, covid-19, social media and climate change may all be affecting the mental health of children and young adults, reports Carissa Wong.</strong></p>
      <p>Young people’s mental health “has entered a dangerous phase” and “now might be our last chance to act”, scientists have written in the journal <em>The Lancet Psychiatry</em>. They argue that accumulating evidence indicates a steady decline in the mental health of people aged 12 to 25 over the past two decades, with covid-19 causing a recent major plummet.</p>
      <p>Aside from the pandemic, some also point the finger at climate change and smartphones, arguing that these affect younger people more than their older counterparts, or even didn’t exist to the same extent when the latter were children.</p>
      <p>Another argument asks whether a rise in youth mental health issues just comes down to increased awareness of these problems and a reduced stigma around them, which may prompt young people to answer related surveys more honestly and seek out diagnoses.</p>
      <h2>Statistics suggest a real change</h2>
      <p>Whatever the causes, statistics signal that a change has occurred in recent years. In England, for example, surveys suggest that 20 per cent of children aged 8 to 16 had a probable mental health condition in 2023, while just under 13 per cent of 5 to 19-year-olds had at least one mental health condition in 2017. Statistics from other countries, including the US and Australia, tell a similar story, with poor mental health also seeming to increasingly affect young adults.</p>
      <h2>The smartphone question</h2>
      <p>One thing that didn’t widely exist two decades ago was smartphones. Although often blamed for rising rates of depression and anxiety among young people, the data is generally inconclusive. But recently, a randomised controlled trial, the best kind of scientific evidence, of 181 children and adolescents found that giving up smartphones and reducing other forms of screen time to a maximum of 3 hours a week for 14 days was associated with improved psychological symptoms.</p>
      <p>It could be that the problem is less to do with smartphones themselves than what young people are using them for. Studies have linked social media, which is often accessed via these devices, to online bullying, self-harm behaviour and suicide ideation. However, “it’s really important that we don’t just put it all in one bucket and say social media is bad”, says Emily Simonoff at King’s College London.</p>
      <p>Sites like Facebook and Instagram can help young people connect with others during a phase of life where a sense of social belonging is especially important, says Karen Mansfield at the University of Oxford.</p>
      <h2>The pressure of recent crises</h2>
      <p>Another factor is that people who were children two decades ago didn’t have to contend with the covid-19 lockdowns at a young age. While these affected all of society, children and teenagers can’t shape their environments like many adults can, so may have felt particularly out of control, says Simonoff. It also left many young people feeling unsupported and lonely, she says.</p>
      <p>A surge in youth mental health problems at this time has been linked to the shift to remote learning, but for some, returning to schools may have actually worsened their mental health. A recent study found that going back to school was associated with increased psychiatric emergency department visits among children and teens in Italy.</p>
      <blockquote>“Stresses - like the pandemic, like climate change - they’re compounding each other.”</blockquote>
      <p>“A lot of children, for example, who were very anxious at school, were actually quite happy to be at home, to learn online, to have their parents supporting them,” says Mansfield.</p>
      <h2>Climate change and eco-anxiety</h2>
      <p>Another global crisis widely thought to harm youth mental health is climate change. Beyond its physical effects, such as heat-related deaths and extreme weather events, its mental health consequences have been dubbed eco-anxiety, which seems to disproportionately affect young people.</p>
      <p>Researchers at Stanford University in California recently found that among people aged 18 and older in the state, the younger ones were more likely to experience mental health symptoms related to climate change.</p>
      <p>Global warming is especially concerning for young people, who have more years ahead of them than older people, says Emma Lawrance at Imperial College London. They also feel frustrated that they have been left with a crisis they didn’t create, she says. “There is a sense of betrayal and understandable anger that disrupts their sense of a positive vision of the future.”</p>
      <p>Beyond existential worries, exposure to extreme heat in early childhood has been linked to brain changes that may harm mental health, says Lawrance.</p>
      <h2>No single cause</h2>
      <p>All this hints that the decline in youth mental health isn’t just the result of improved awareness. “In terms of recent history, I’d say it’s really getting worse,” says Mansfield.</p>
      <p>Ultimately, it is unlikely that any single factor is to blame. “Uncertainties and stresses - like the pandemic, like climate change - they’re compounding each other,” says Lawrance.</p>
      <p>When it comes to rectifying some of these issues, experts want youth mental health to be a catalyst for action. “Young people are picking up on things that are happening in the world, and the fact they’re not OK is a reflection of these trends in the world that are not OK,” says Lawrance. “It’s the canary in the coal mine.”</p>
      <p><em>If you need support: UK Samaritans: 116 123 (Samaritans.org); US 988 Suicide &amp; Crisis Lifeline: 988 (988lifeline.org).</em></p>
    `,
    vocabulary: [
      { word: "plummet", wordType: "noun", definition: "a sudden and large fall or decrease", example: "Researchers reported a recent major plummet in young people’s mental health." },
      { word: "stigma", wordType: "noun", definition: "a negative social attitude attached to something", example: "Reduced stigma may encourage young people to seek diagnoses." },
      { word: "inconclusive", wordType: "adjective", definition: "not leading to a clear answer or decision", example: "The data on smartphones and anxiety is generally inconclusive." },
      { word: "ideation", wordType: "noun", definition: "the formation of ideas or thoughts, often used clinically", example: "Some studies link social media use with suicide ideation." },
      { word: "to contend with", wordType: "phrase", definition: "to deal with a difficult problem or situation", example: "Young people had to contend with lockdowns at a young age." },
      { word: "eco-anxiety", wordType: "noun", definition: "anxiety caused by concern about environmental damage and climate change", example: "Climate change has mental health consequences such as eco-anxiety." },
      { word: "existential", wordType: "adjective", definition: "related to existence, meaning, or survival", example: "Climate change can create existential worries for young people." },
      { word: "catalyst", wordType: "noun", definition: "something that causes or speeds up change", example: "Experts want youth mental health to be a catalyst for action." },
    ],
    pronunciation: [
      { word: "psychiatry", ipa: "/sai-KY-uh-tree/", syllables: "psy-chi-a-try", tip: "The 'ps' starts with an 's' sound. Stress the second syllable: KY." },
      { word: "adolescents", ipa: "/ad-uh-LES-ents/", syllables: "ad-o-les-cents", tip: "Stress 'les'. The final sound is 'sents', not 'skents'." },
      { word: "inconclusive", ipa: "/in-kuhn-KLOO-siv/", syllables: "in-con-clu-sive", tip: "Stress the third syllable: CLU." },
      { word: "ideation", ipa: "/eye-dee-AY-shun/", syllables: "i-de-a-tion", tip: "Stress the 'a' sound before '-tion': ay." },
      { word: "psychiatric", ipa: "/sai-kee-AT-rik/", syllables: "psy-chi-at-ric", tip: "Stress 'at'. Keep the final syllable short." },
      { word: "existential", ipa: "/eg-zi-STEN-shul/", syllables: "ex-is-ten-tial", tip: "Stress 'sten'. The ending sounds like 'shul'." },
    ],
  },
  {
  id: "a4",
  slug: "understanding-planned-obsolescence",
  title: "Understanding Planned Obsolescence: Impact on Consumers and Industries",
  category: "Reading",
  topic: "Business",
  difficulty: "Advanced",
  coverImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  date: "2026-05-19",
  description:
    "Planned obsolescence is a business strategy where products are intentionally designed to become outdated or useless after a certain period.",
  readingTime: 6,
  content: `
    <p><strong>Planned obsolescence is a strategy to make a product outdated or useless after a set period, boosting future consumer demand for replacements.</strong></p>

    <h2>What Is Planned Obsolescence?</h2>
    <p>Planned obsolescence is a strategy to make a product outdated or useless after a set period, boosting future consumer demand for replacements. Obsolescence happens by releasing a better model or designing a product to fail after a certain period, prompting consumers to prefer newer versions.</p>

    <p>Planned obsolescence is common in tech and fashion, often viewed negatively by consumers, especially if new versions have minor changes. Apple offers a plan for iPhone users to annually swap hardware for a fee, seen as a demand-boosting tactic, though Apple denies this.</p>

    <h2>Key Takeaways</h2>
    <ul>
      <li>Planned obsolescence is a strategy where products are intentionally designed to have a limited lifespan to drive future consumer demand.</li>
      <li>This practice is common in the tech and fashion industries, where new models replace outdated ones regularly.</li>
      <li>Consumers often respond negatively if new versions offer minimal improvements, impacting brand reputation.</li>
      <li>While controversial, planned obsolescence can stimulate technological progress by encouraging frequent upgrades.</li>
      <li>Critics argue this strategy prioritizes profit over satisfaction, but it remains prevalent across various sectors.</li>
    </ul>

    <h2>Industry-Specific Approaches to Planned Obsolescence</h2>
    <p>Some industries are more associated with planned obsolescence. In fashion, nylon stockings run easily, requiring frequent replacements.</p>

    <p>In technology, smartphones typically need replacing every two to three years as hardware wears out and new software becomes incompatible. Software often includes new features and file types that do not work with older versions.</p>

    <p>Computer hardware also sees planned obsolescence as microprocessors follow Moore's Law, doubling transistor count and halving processing cost every two years.</p>

    <p>Finally, planned obsolescence also affects automobile manufacturers, who annually roll out new versions of their models.</p>

    <h2>How Planned Obsolescence Affects Consumer Choices</h2>
    <p>Consumers often dislike planned obsolescence, particularly if new products show little improvement. This strategy can hurt brands' reputations and drive customers away.</p>

    <p>Sometimes, planned obsolescence is not seen negatively, as companies may use it to cut costs, like choosing parts that last five years instead of twenty.</p>

    <h2>Examining Apple's Approach to Planned Obsolescence</h2>
    <p>Apple Inc. has often been at the center of skeptical consumer discourse. The company announced a plan for iPhone users to make direct payments to exchange hardware annually.</p>

    <p>Observers viewed the shorter replacement cycle as a way to boost demand. Skeptics questioned Apple's ability to make significant improvements quickly, a common two- or three-year issue for phone makers.</p>

    <p>Apple denies planned obsolescence, though a Harvard study found iOS upgrades slowed older iPhone processors, not to push new sales. Apple recently settled a 2017 class-action lawsuit over the issue, agreeing to issue payouts to customers and state governments over what has been referred to as "batterygate."</p>

    <p>Although Apple is notorious for this practice, it has not been proved unequivocally. Some economists believe planned obsolescence can drive technological progress, even if it occurs. Besides, other manufacturers, such as the makers of Android phones and tablets, also release new versions of their products annually.</p>

    <h2>The Bottom Line</h2>
    <p>Planned obsolescence is a business strategy where products are designed to have limited lifespans to drive consumer demand for newer models. It is especially prevalent in industries such as technology, fashion, and automotive, often resulting in negative consumer perceptions.</p>

    <p>Although this strategy may control costs and stimulate technological advancement, it also risks damaging brand reputations if improvements are minimal. Apple is a company frequently accused of planned obsolescence, including the "batterygate" incident as a notable case study.</p>

    <p>Planned obsolescence can drive innovation but also attract consumer backlash. It is important for companies to balance these outcomes. Consumers should be aware of planned obsolescence practices to make informed purchasing decisions.</p>
  `,
  vocabulary: [
    {
      word: "planned obsolescence",
      wordType: "noun phrase",
      definition:
        "a business strategy where products are deliberately designed to become outdated or unusable after a certain time",
      example:
        "Planned obsolescence encourages consumers to replace products more frequently.",
    },
    {
      word: "limited lifespan",
      wordType: "noun phrase",
      definition: "a short or fixed period during which something can be used",
      example:
        "Some products are intentionally designed to have a limited lifespan.",
    },
    {
      word: "boost consumer demand",
      wordType: "verb phrase",
      definition: "to increase people’s desire to buy products",
      example:
        "New product releases can boost consumer demand for updated models.",
    },
    {
      word: "demand-boosting tactic",
      wordType: "noun phrase",
      definition: "a method used to increase sales or purchasing behavior",
      example:
        "Annual hardware exchange plans may be seen as a demand-boosting tactic.",
    },
    {
      word: "technological progress",
      wordType: "noun phrase",
      definition: "the development or improvement of technology",
      example:
        "Some economists argue that planned obsolescence can stimulate technological progress.",
    },
    {
      word: "software incompatibility",
      wordType: "noun phrase",
      definition: "a situation where new software does not work with older devices or systems",
      example:
        "Software incompatibility can force consumers to replace old devices.",
    },
    {
      word: "replacement cycle",
      wordType: "noun phrase",
      definition: "the usual period before a product is replaced",
      example:
        "Smartphones often have a two- or three-year replacement cycle.",
    },
    {
      word: "brand reputation",
      wordType: "noun phrase",
      definition: "the way a company is viewed by the public",
      example:
        "Minimal improvements in new products can hurt brand reputation.",
    },
    {
      word: "class-action lawsuit",
      wordType: "noun phrase",
      definition: "a legal case brought by a group of people with the same complaint",
      example:
        "Apple settled a class-action lawsuit related to older iPhone performance.",
    },
    {
      word: "consumer backlash",
      wordType: "noun phrase",
      definition: "a strong negative reaction from customers",
      example:
        "Planned obsolescence can attract consumer backlash.",
    },
  ],
  pronunciation: [
    {
      word: "obsolescence",
      ipa: "/ob-suh-LES-ens/",
      syllables: "ob-so-les-cence",
      tip: "Stress the third syllable: LES.",
    },
    {
      word: "intentionally",
      ipa: "/in-TEN-shuh-nuh-lee/",
      syllables: "in-ten-tion-al-ly",
      tip: "Stress TEN. The middle sounds like 'shuh'.",
    },
    {
      word: "consumer",
      ipa: "/kuhn-SOO-mer/",
      syllables: "con-su-mer",
      tip: "Stress SOO.",
    },
    {
      word: "incompatible",
      ipa: "/in-kuhm-PAT-uh-bul/",
      syllables: "in-com-pat-i-ble",
      tip: "Stress PAT.",
    },
    {
      word: "microprocessors",
      ipa: "/my-kroh-PROH-ses-erz/",
      syllables: "mi-cro-pro-cess-ors",
      tip: "Stress PROH.",
    },
    {
      word: "automobile",
      ipa: "/AW-tuh-moh-beel/",
      syllables: "au-to-mo-bile",
      tip: "Stress AW. The ending sounds like 'beel'.",
    },
    {
      word: "reputation",
      ipa: "/rep-yuh-TAY-shun/",
      syllables: "rep-u-ta-tion",
      tip: "Stress TAY.",
    },
    {
      word: "skeptical",
      ipa: "/SKEP-ti-kul/",
      syllables: "skep-ti-cal",
      tip: "Stress SKEP.",
    },
    {
      word: "unequivocally",
      ipa: "/un-i-KWIV-uh-kuh-lee/",
      syllables: "un-e-quiv-o-cal-ly",
      tip: "Stress KWIV.",
    },
    {
      word: "prevalent",
      ipa: "/PREV-uh-lent/",
      syllables: "prev-a-lent",
      tip: "Stress PREV.",
    },
  ],
},
  {
  id: "a5",
  slug: "understanding-purchasing-power-and-cpi",
  title: "Understanding Purchasing Power and the Consumer Price Index",
  category: "Reading",
  topic: "Business",
  difficulty: "Advanced",
  coverImage:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
  date: "2026-05-19",
  description:
    "Purchasing power describes how much goods or services a unit of money can buy, and how inflation can reduce the real value of currency over time.",
  readingTime: 7,
  content: `
    <p><strong>Purchasing power describes the amount of products or services that a single unit of money can acquire, reflecting the real-world value of currency in the marketplace.</strong></p>

    <h2>What Is Purchasing Power?</h2>
    <p>Purchasing power describes the amount of products or services that a single unit of money can acquire, reflecting the real-world value of currency in the marketplace. It can weaken over time due to inflation. That is because rising prices effectively decrease the number of goods or services that one unit of money can buy.</p>

    <p>Purchasing power is also known as a currency's buying power. In investment terms, purchasing or buying power is the dollar amount of credit available to a customer based on the existing marginable securities in the customer's brokerage account.</p>

    <h2>Key Takeaways</h2>
    <ul>
      <li>Inflation erodes the purchasing power of a currency over time.</li>
      <li>Central banks adjust interest rates to try to keep prices stable and maintain purchasing power.</li>
      <li>One U.S. measure of purchasing power is the Consumer Price Index, or CPI.</li>
      <li>Globalization has linked currencies more closely than ever, so protecting purchasing power worldwide is crucial.</li>
    </ul>

    <h2>Understanding Purchasing Power</h2>
    <p>Purchasing power affects every aspect of economics, from consumers buying goods to investors buying stock to a country's economic prosperity.</p>

    <p>Inflation reduces a currency's purchasing power. Similarly, loss of purchasing power has the same effect as an increase in prices. To measure purchasing power in the traditional economic sense, you could compare the price of a good or service against a price index such as the Consumer Price Index.</p>

    <p>One way to understand purchasing power is to imagine that you worked the same job that your grandfather worked forty years ago. Today, you would need a much higher salary to maintain the same quality of living.</p>

    <p>When a currency's purchasing power decreases due to excessive inflation, serious negative economic consequences can arise. These can include a higher cost of living, higher interest rates that affect the global market, and falling credit ratings. All of these factors can contribute to an economic crisis.</p>

    <h2>Purchasing Power and CPI</h2>
    <p>Governments institute policies and regulations to protect a currency's purchasing power and keep an economy healthy. They also monitor economic data to stay on top of changing conditions. For example, the U.S. Bureau of Labor Statistics measures price changes and announces those changes with CPI.</p>

    <p>CPI is one of the measures of inflation and purchasing power. It calculates the change in the weighted average of prices of consumer goods and services, especially transportation, food, and medical care, at a given time. CPI can point to changes in the cost of living as well as deflation.</p>

    <h2>Purchasing Power Parity</h2>
    <p>A concept related to purchasing power is purchasing power parity, or PPP. PPP is an economic theory that estimates the amount by which an item should be adjusted for parity, given two countries' exchange rates.</p>

    <p>PPP can be used to compare countries' economic activity, income levels, and other relevant data concerning the cost of living, or possible rates of inflation and deflation.</p>

    <h2>Purchasing Power Loss or Gain</h2>
    <p>Purchasing power loss or gain refers to the decrease or increase in how much consumers can buy with a given amount of money. Consumers lose purchasing power when prices increase. They gain purchasing power when prices decrease.</p>

    <p>Causes of purchasing power loss can include government regulations, inflation, and natural and human-made disasters. Causes of purchasing power gain include deflation and technological innovation.</p>

    <h2>Examples of Purchasing Power Loss</h2>
    <p>Historical examples of severe inflation and hyperinflation show how quickly a currency's purchasing power can be destroyed. After World War I, Germany experienced extreme economic hardship and almost unprecedented hyperinflation, partly because of the reparations it had to pay.</p>

    <p>The effects of the loss of purchasing power after the 2008 global financial crisis and the European sovereign debt crisis are remembered to this day. Due to increased globalization and the introduction of the euro, currencies are closely linked, and economic trouble can cross geographic boundaries.</p>

    <h2>Quantitative Easing and Purchasing Power</h2>
    <p>In 2008, the U.S. Federal Reserve kept interest rates near zero and introduced quantitative easing. This policy involved buying government and other market securities to increase the money supply and lower interest rates.</p>

    <p>The increase in capital created more lending and more liquidity. The European Central Bank also used quantitative easing to help stop deflation in the eurozone and support the euro's purchasing power.</p>

    <h2>Protecting Against Purchasing Power Risk</h2>
    <p>Retirees can be particularly aware of purchasing power loss because many live on a fixed amount of money. They need investments that earn a rate of return equal to or greater than inflation, so the value of their savings does not decrease each year.</p>

    <p>Debt securities and fixed-return investments are among the most susceptible to purchasing power risk. Some investments, such as Treasury inflation-protected securities, commodities, oil, and metals, may help protect investors during periods of inflation.</p>

    <h2>The Bottom Line</h2>
    <p>Purchasing power refers to how much you can buy with your money. As prices rise, your money can buy less. As prices drop, your money can buy more.</p>

    <p>Long-time investors know that loss of purchasing power can greatly impact their investments. Rising inflation affects purchasing power by decreasing the number of goods or services people can purchase with their money.</p>

    <p>Investors must look for ways to make a return higher than the current rate of inflation. More advanced investors may track international economies for the potential effect on their long-term investments.</p>
  `,
  vocabulary: [
    {
      word: "purchasing power",
      wordType: "phrase",
      definition: "the amount of goods or services that money can buy",
      example: "Inflation reduces the purchasing power of a currency over time.",
    },
    {
      word: "Consumer Price Index",
      wordType: "phrase",
      definition: "a measure that tracks changes in the prices of common goods and services",
      example: "The Consumer Price Index is often used to measure inflation.",
    },
    {
      word: "inflation",
      wordType: "noun",
      definition: "a general rise in prices over time",
      example: "High inflation means people can buy less with the same amount of money.",
    },
    {
      word: "deflation",
      wordType: "noun",
      definition: "a general fall in prices over time",
      example: "Deflation can increase purchasing power but may slow economic growth.",
    },
    {
      word: "cost of living",
      wordType: "phrase",
      definition: "the amount of money needed to pay for basic expenses",
      example: "A higher cost of living makes it harder for families to save money.",
    },
    {
      word: "hyperinflation",
      wordType: "noun",
      definition: "extremely rapid and uncontrolled inflation",
      example: "Hyperinflation can destroy a currency's purchasing power.",
    },
    {
      word: "quantitative easing",
      wordType: "phrase",
      definition: "a central bank policy that increases money supply by buying securities",
      example: "Quantitative easing was used after the 2008 financial crisis.",
    },
    {
      word: "liquidity",
      wordType: "noun",
      definition: "the availability of money or assets that can easily be used",
      example: "The policy created more liquidity in the financial system.",
    },
    {
      word: "economic stagnation",
      wordType: "phrase",
      definition: "a period when an economy stops growing or grows very slowly",
      example: "High levels of deflation can lead to economic stagnation.",
    },
    {
      word: "inflation-protected securities",
      wordType: "phrase",
      definition: "investments designed to protect value against rising prices",
      example: "Treasury inflation-protected securities may help investors during inflation.",
    },
  ],
  pronunciation: [
    {
      word: "purchasing",
      ipa: "/PUR-chuh-sing/",
      syllables: "pur-chas-ing",
      tip: "Stress the first syllable: PUR.",
    },
    {
      word: "currency",
      ipa: "/KUR-en-see/",
      syllables: "cur-ren-cy",
      tip: "Stress KUR. The final sound is 'see'.",
    },
    {
      word: "inflation",
      ipa: "/in-FLAY-shun/",
      syllables: "in-fla-tion",
      tip: "Stress FLAY.",
    },
    {
      word: "Consumer Price Index",
      ipa: "/kuhn-SOO-mer pryss IN-deks/",
      syllables: "con-su-mer price in-dex",
      tip: "Stress SOO in consumer and IN in index.",
    },
    {
      word: "globalization",
      ipa: "/gloh-buh-luh-ZAY-shun/",
      syllables: "glo-bal-i-za-tion",
      tip: "Stress ZAY.",
    },
    {
      word: "prosperity",
      ipa: "/pro-SPER-uh-tee/",
      syllables: "pros-per-i-ty",
      tip: "Stress SPER.",
    },
    {
      word: "hyperinflation",
      ipa: "/hy-per-in-FLAY-shun/",
      syllables: "hy-per-in-fla-tion",
      tip: "Stress FLAY.",
    },
    {
      word: "unprecedented",
      ipa: "/un-PRES-uh-den-tid/",
      syllables: "un-pre-ce-dent-ed",
      tip: "Stress PRES.",
    },
    {
      word: "quantitative",
      ipa: "/KWON-tuh-tay-tiv/",
      syllables: "quan-ti-ta-tive",
      tip: "Stress KWON.",
    },
    {
      word: "liquidity",
      ipa: "/li-KWID-uh-tee/",
      syllables: "li-quid-i-ty",
      tip: "Stress KWID.",
    },
  ],
},
  {
  id: "a6",
  slug: "latin-america-worlds-most-violent-place",
  title: "400 Murders a Day: Why Latin America Is the World's Most Violent Place",
  category: "Reading",
  topic: "Crime",
  difficulty: "Advanced",
  coverImage:
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80",
  date: "2026-05-19",
  description:
    "Latin America has a small share of the world's population but a very high share of global homicides, caused by inequality, unemployment, impunity, urbanization, organized crime, drugs, guns, and weak institutions.",
  readingTime: 9,
  content: `
    <p><strong>Latin America is home to about 8% of the world's population but has about one-third of its homicides. In 2016, that meant around 400 homicides a day, or roughly 146,000 a year.</strong></p>

    <h2>Violence Is Not Evenly Distributed</h2>
    <p>Latin America is often described as the world’s most violent region, but the bloodshed is not evenly distributed. Some countries and cities experience far higher homicide rates than others. Mexico, Brazil, Venezuela, Guatemala, El Salvador, Honduras, and Colombia have all struggled with serious violence, although some have seen periods of decline.</p>

    <p>The regional homicide rate has increased over the past decade, but experts argue that there is not one single explanation. Instead, several factors repeatedly correlate with homicide across time and space.</p>

    <h2>Income Inequality</h2>
    <p>Income inequality is strongly connected with homicide. Latin America contains many of the world’s most unequal countries. Large disparities in wealth create competition between rich and poor populations, especially over public goods such as policing, healthcare, and education.</p>

    <p>When public services are weak or unevenly distributed, disadvantaged communities often suffer most. Poor-quality public goods can reinforce inequality and contribute to crime.</p>

    <h2>Unemployment Among Young Men</h2>
    <p>High unemployment, especially among young men, is another major factor. A lack of stable work can push young people toward informal or criminal activity. In some places, rising unemployment has been linked directly to increases in homicide.</p>

    <p>Violence can also damage employment. In areas where homicide rates increase, businesses may leave, investment may fall, and job opportunities may shrink.</p>

    <h2>Low-Quality Education</h2>
    <p>Low-quality education and poor school retention are also associated with violence. Where schools have low enrollment, poor teaching quality, and high absenteeism, rates of lethal violence are often higher.</p>

    <p>The problem is not always the amount of money spent on education. In some countries, education funding is poorly distributed or weakened by corruption, which hinders students’ performance.</p>

    <h2>High Impunity</h2>
    <p>Impunity is one of the most serious problems in the region. In many countries, only a small percentage of murders lead to convictions. When criminals believe they are unlikely to be punished, the cost of killing becomes very low.</p>

    <p>High impunity weakens public trust in police, courts, and the criminal justice system. This is especially serious in areas where institutions are already weak or overwhelmed.</p>

    <h2>Condoning Violence</h2>
    <p>In some communities, people may begin to solve disputes through violence because they do not trust the state to protect them. This can lead to vigilante groups, self-defense groups, and militias.</p>

    <p>Although some groups begin as neighborhood protection organizations, many later become criminal enterprises involved in extortion, illegal services, and organized crime.</p>

    <h2>Weak States and Informality</h2>
    <p>High crime is also connected to weak state control and widespread informality. Wealthier people may buy private security and protect themselves with walls, fences, and guards, while poorer communities are left to defend themselves.</p>

    <p>The private security industry has grown in countries such as Mexico, but weak oversight can create new problems, including corruption, human rights abuses, and excessive force.</p>

    <h2>Unregulated Urbanization</h2>
    <p>Latin America urbanized very quickly. Many people moved into cities before governments could provide proper housing, transport, policing, and public services.</p>

    <p>This produced informal settlements, favelas, and shanty towns in marginalized areas. Rapid urbanization and concentrated disadvantage are strongly linked to crime.</p>

    <h2>Organized Criminal Groups</h2>
    <p>The proliferation of organized criminal groups is another major cause of violence. These groups include cartels, prison gangs, street gangs, transnational gangs, paramilitary groups, militias, and criminal syndicates.</p>

    <p>In Mexico, larger cartels have splintered into smaller groups that often rely on local crimes such as extortion. In Brazil, prison gangs and militias play a major role in the drug trade and urban violence.</p>

    <h2>The Drug Trade</h2>
    <p>The drug trade is connected to much of Latin America’s violence. The region contains the world’s main producers of cocaine, and the profits from drugs are extremely high.</p>

    <p>Because the drug business is incredibly lucrative, criminal groups compete violently for territory, smuggling routes, and local markets. The rise of synthetic drugs has also contributed to violence in some areas.</p>

    <h2>Guns and Alcohol</h2>
    <p>Guns and alcohol are another dangerous combination. In areas where alcohol is easily available and firearms are widespread, violence becomes more likely.</p>

    <p>A large share of homicides in Latin America are gun-related. Illegal firearms, weak regulation, and illicit alcohol markets all contribute to the problem.</p>

    <h2>Crime Clusters in Specific Places</h2>
    <p>Violence is not random. Homicide often clusters in specific neighborhoods, at specific times, and among specific groups. In many cities, a small number of streets or districts account for a very large share of murders.</p>

    <p>This concentration also offers opportunities for intervention. Focused policing, social prevention, youth programs, and urban design can help reduce violence when they target the right places and groups.</p>
  `,
  vocabulary: [
    {
      word: "about one-third of its homicides",
      wordType: "phrase",
      definition: "roughly 33% of the world’s murders happen there",
      example: "Latin America has about one-third of the world’s homicides.",
    },
    {
      word: "bloodshed is not evenly distributed",
      wordType: "phrase",
      definition: "violence is concentrated in certain areas, not spread equally",
      example: "The bloodshed is not evenly distributed across the region.",
    },
    {
      word: "has increased annually over the past decade",
      wordType: "phrase",
      definition: "has risen every year during the last ten years",
      example: "The regional homicide rate has increased annually over the past decade.",
    },
    {
      word: "recent economic slowdown has endangered gains",
      wordType: "phrase",
      definition: "economic problems threaten previously achieved progress",
      example: "The recent economic slowdown has endangered gains in reducing inequality.",
    },
    {
      word: "large disparities in wealth",
      wordType: "phrase",
      definition: "big differences between rich and poor people",
      example: "Large disparities in wealth can create social tension.",
    },
    {
      word: "substandard provision of public goods",
      wordType: "phrase",
      definition: "poor-quality government services such as policing, healthcare, or education",
      example: "Poor neighborhoods often suffer from substandard provision of public goods.",
    },
    {
      word: "high rates of unemployment translate directly to crime",
      wordType: "phrase",
      definition: "more unemployment can clearly lead to more crime",
      example: "In some areas, high rates of unemployment translate directly to crime.",
    },
    {
      word: "a 10-percentage-point increase in homicide rates",
      wordType: "phrase",
      definition: "homicides rise by 10 percentage points in a given population",
      example: "A 10-percentage-point increase in homicide rates can damage local employment.",
    },
    {
      word: "low-quality education and poor school retention",
      wordType: "phrase",
      definition: "weak education systems with many students dropping out",
      example: "Low-quality education and poor school retention are linked to violence.",
    },
    {
      word: "hinder students’ performance",
      wordType: "phrase",
      definition: "make it harder for students to learn or achieve good results",
      example: "Poor teaching methods can hinder students’ performance.",
    },
    {
      word: "inability to hold perpetrators to account",
      wordType: "phrase",
      definition: "failure to punish criminals effectively",
      example: "The inability to hold perpetrators to account increases impunity.",
    },
    {
      word: "impunity undermines public perception of the police",
      wordType: "phrase",
      definition: "lack of punishment reduces trust in law enforcement",
      example: "Impunity undermines public perception of the police and courts.",
    },
    {
      word: "a culture of violence",
      wordType: "phrase",
      definition: "social norms that accept or normalize violence",
      example: "Some communities may develop a culture of violence.",
    },
    {
      word: "proliferation of militia",
      wordType: "phrase",
      definition: "fast spread and growth of unofficial armed groups",
      example: "The proliferation of militia has worsened insecurity in some areas.",
    },
    {
      word: "unregulated urbanization",
      wordType: "phrase",
      definition: "cities growing rapidly without proper planning or control",
      example: "Unregulated urbanization can create unsafe urban areas.",
    },
    {
      word: "rapid informalization and peripheralization",
      wordType: "phrase",
      definition: "people moving into informal housing on the edges of cities",
      example: "Rapid informalization and peripheralization created large informal settlements.",
    },
    {
      word: "surge in population growth",
      wordType: "phrase",
      definition: "a fast and large increase in the number of people",
      example: "A surge in population growth put pressure on public services.",
    },
    {
      word: "the proliferation of organized criminal groups",
      wordType: "phrase",
      definition: "the increasing number of gangs and crime networks",
      example: "The proliferation of organized criminal groups has intensified violence.",
    },
    {
      word: "incredibly lucrative business",
      wordType: "phrase",
      definition: "an extremely profitable activity",
      example: "Drug trafficking is an incredibly lucrative business.",
    },
    {
      word: "clustering presents avenues for intervention",
      wordType: "phrase",
      definition: "concentrated crime patterns create opportunities for targeted solutions",
      example: "Crime clustering presents avenues for intervention by police and communities.",
    },
  ],
  pronunciation: [
    {
      word: "homicides",
      ipa: "/HOM-uh-sydz/",
      syllables: "hom-i-cides",
      tip: "Stress HOM. The ending sounds like 'sydz'.",
    },
    {
      word: "heterogeneous",
      ipa: "/het-uh-roh-JEE-nee-us/",
      syllables: "het-er-o-ge-ne-ous",
      tip: "Stress JEE.",
    },
    {
      word: "inequality",
      ipa: "/in-i-KWOL-uh-tee/",
      syllables: "in-e-qual-i-ty",
      tip: "Stress KWOL.",
    },
    {
      word: "disparities",
      ipa: "/dis-PAIR-uh-teez/",
      syllables: "dis-par-i-ties",
      tip: "Stress PAIR.",
    },
    {
      word: "perpetrators",
      ipa: "/PUR-puh-tray-terz/",
      syllables: "per-pe-tra-tors",
      tip: "Stress PUR.",
    },
    {
      word: "impunity",
      ipa: "/im-PYOO-nuh-tee/",
      syllables: "im-pu-ni-ty",
      tip: "Stress PYOO.",
    },
    {
      word: "vigilante",
      ipa: "/vij-uh-LAN-tee/",
      syllables: "vig-i-lan-te",
      tip: "Stress LAN.",
    },
    {
      word: "urbanization",
      ipa: "/ur-buh-nuh-ZAY-shun/",
      syllables: "ur-ban-i-za-tion",
      tip: "Stress ZAY.",
    },
    {
      word: "proliferation",
      ipa: "/pruh-lif-uh-RAY-shun/",
      syllables: "pro-lif-er-a-tion",
      tip: "Stress RAY.",
    },
    {
      word: "lucrative",
      ipa: "/LOO-kruh-tiv/",
      syllables: "lu-cra-tive",
      tip: "Stress LOO.",
    },
  ],
},
   {
    id: "a7",
    slug: "why-to-study",
    title: "WHY TO STUDY?",
    category: "Reading",
    topic: "Education",
    difficulty: "Intermediate",
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "Education is a key part of a society’s growth and progress.",
    readingTime: 5,
    content: `
      <p><strong>Do you think attending school and doing projects for your college is a waste of time?</strong> If you do, you might want to reconsider that claim, as education is a key part of a society’s growth and progress.</p>
      <p>When people are educated, they can significantly contribute to their families and society in various aspects and fields, thus creating a stable and stimulating community.</p>
      <h2>Creating More Employment Opportunities</h2>
      <p>Finding a job is not easy, especially in times of economic turmoil. With the right qualifications and educational background, you can increase your chances of landing a fulfilling job and stand out from a pool of applicants.</p>
      <h2>Securing a Higher Income</h2>
      <p>People with higher education and varied experience are more likely to get high-paying, expert jobs. Study hard and acquire knowledge if you would like to lead a comfortable lifestyle.</p>
      <h2>Developing Problem-solving Skills</h2>
      <p>Education teaches us how to develop critical and logical thinking, make independent decisions, and support our opinions with reliable arguments and evidence.</p>
      <h2>Improving the Economy</h2>
      <p>People with good academic backgrounds tend to get well-paid jobs. Education helps countries grow economically because people can apply knowledge wisely and improve other people’s lives.</p>
      <h2>Providing a Prosperous and Happy Life</h2>
      <p>Education helps people gain a better reputation, climb the career ladder, secure financial resources, and create a positive environment for families and communities.</p>
      <h2>Giving Back to the Community</h2>
      <p>Educated people understand the value of a stable and secure community. They are more likely to take part in projects that improve their neighborhood and society.</p>
      <h2>Creating Modern Society</h2>
      <p>Education molds people into leaders with knowledge, emotions, and true values. It helps people differentiate between right and wrong and can reduce the crime rate.</p>
      <h2>Bridging the Borders</h2>
      <p>Digital education helps connect people and organizations around the world. It widens horizons and helps us understand and appreciate each other.</p>
      <h2>Creating Equal Opportunities</h2>
      <p>Education offers the possibility to live independently and protects people against financial storms and wrong decisions.</p>
      <h2>Introducing Empowerment</h2>
      <p>Education turns weakness into strength, improves decision-making capabilities, and teaches people to live in harmony.</p>
    `,
    vocabulary: [
      { word: "economic turmoil", wordType: "phrase", definition: "a period of serious financial or economic problems", example: "Finding a job is harder in times of economic turmoil." },
      { word: "vacant position", wordType: "phrase", definition: "a job that is available", example: "Hundreds of candidates may apply for one vacant position." },
      { word: "educational background", wordType: "phrase", definition: "a person’s education and qualifications", example: "Your educational background can help you get a better job." },
      { word: "fulfilling job", wordType: "phrase", definition: "a job that gives satisfaction", example: "Education can increase your chances of landing a fulfilling job." },
      { word: "pool of applicants", wordType: "phrase", definition: "the group of people applying for a job", example: "Extra qualifications help you stand out from a pool of applicants." },
      { word: "high-paying job", wordType: "phrase", definition: "a job that gives a good salary", example: "Higher education may lead to a high-paying job." },
      { word: "critical thinking", wordType: "phrase", definition: "careful and logical thinking", example: "Education helps students develop critical thinking." },
      { word: "sound decisions", wordType: "phrase", definition: "wise and reliable decisions", example: "Educated people are better able to make sound decisions." },
      { word: "reliable arguments", wordType: "phrase", definition: "arguments supported by evidence", example: "Students learn to use reliable arguments in discussions." },
      { word: "career ladder", wordType: "phrase", definition: "the stages of progress in a career", example: "Education can help people climb the career ladder." },
      { word: "financial security", wordType: "phrase", definition: "having enough money to live safely", example: "A good education may provide financial security." },
      { word: "decision-making capabilities", wordType: "phrase", definition: "the ability to make choices effectively", example: "Education improves people’s decision-making capabilities." },
    ],
    pronunciation: [
      { word: "education", ipa: "/ed-yoo-KAY-shun/", syllables: "ed-u-ca-tion", tip: "Stress the third syllable: KAY." },
      { word: "opportunity", ipa: "/op-er-TOO-nuh-tee/", syllables: "op-por-tu-ni-ty", tip: "Stress TOO." },
      { word: "qualification", ipa: "/kwol-uh-fi-KAY-shun/", syllables: "qual-i-fi-ca-tion", tip: "Stress KAY." },
      { word: "prosperous", ipa: "/PROS-per-us/", syllables: "pros-per-ous", tip: "Stress the first syllable." },
      { word: "community", ipa: "/kuh-MYOO-nuh-tee/", syllables: "com-mu-ni-ty", tip: "Stress MYOO." },
      { word: "empowerment", ipa: "/im-POW-er-ment/", syllables: "em-pow-er-ment", tip: "Stress POW." },
    ],
  },
  {
    id: "a8",
    slug: "studying-101-study-smarter-not-harder",
    title: "Studying 101: Study Smarter Not Harder",
    category: "Reading",
    topic: "Education",
    difficulty: "Intermediate",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "Many students realize that their high school study habits aren’t very effective in college.",
    readingTime: 6,
    content: `
      <p><strong>Do you ever feel like your study habits simply aren’t cutting it?</strong> Many students discover that the habits they used in high school are not always effective in college.</p>
      <p>College classes can be bigger, exams can be worth more, reading can be more intense, and courses can be more rigorous. This means students often need more active and effective study skills.</p>
      <h2>Reading is not studying</h2>
      <p>Simply reading and re-reading texts or notes is not the same as active studying. Re-reading often leads to quick forgetting.</p>
      <p>Learning information requires active engagement, such as making connections to lectures, forming examples, and regulating your own learning.</p>
      <h2>Ideas for active studying</h2>
      <p>Students can create study guides, formulate questions, teach the information aloud, make concept maps, work through problems, and study in terms of question, evidence, and conclusion.</p>
      <h2>Understand the Study Cycle</h2>
      <p>The Study Cycle includes previewing, attending class, reviewing, studying, and checking your understanding. Skipping one stage may mean missing an important learning opportunity.</p>
      <h2>Spacing out is good</h2>
      <p>Distributed practice means studying over several short periods across days and weeks. It helps students learn more deeply and retain information for the long term.</p>
      <h2>It’s good to be intense</h2>
      <p>Short, intensive study sessions can be more effective than long, drawn-out sessions. Self-testing for 30 or 45 minutes can improve attention and memory.</p>
      <h2>Silence isn’t golden</h2>
      <p>Some students concentrate better with background noise. Active studying is also rarely silent because it often requires saying the material aloud.</p>
      <h2>Problems are your friend</h2>
      <p>In technical courses, working and re-working problems is often more important than simply reading the textbook.</p>
      <h2>Reconsider multitasking</h2>
      <p>Research shows that multitasking can increase the time needed to learn material and decrease the quality of learning.</p>
      <h2>Become a teacher</h2>
      <p>Explaining material in your own words helps reveal confusion, strengthen memory, and make connections between concepts.</p>
      <h2>Take control of your calendar</h2>
      <p>Planning your week, checking your available time, and adjusting your tasks can help you stay on top of coursework.</p>
    `,
    vocabulary: [
      { word: "study habits", wordType: "phrase", definition: "regular ways of studying", example: "Good study habits help students perform better." },
      { word: "perform better", wordType: "phrase", definition: "do something more successfully", example: "Students want to perform better on exams." },
      { word: "active engagement", wordType: "phrase", definition: "direct and thoughtful involvement", example: "Learning requires active engagement with the material." },
      { word: "rote memorization", wordType: "phrase", definition: "memorizing by repetition without deep understanding", example: "Rote memorization is not always effective." },
      { word: "concept maps", wordType: "phrase", definition: "diagrams that show relationships between ideas", example: "Concept maps can explain difficult material." },
      { word: "study guide", wordType: "phrase", definition: "notes or questions used for revision", example: "Create a study guide by topic." },
      { word: "distributed practice", wordType: "phrase", definition: "studying in short sessions over time", example: "Distributed practice helps students remember information." },
      { word: "long-term retention", wordType: "phrase", definition: "remembering information for a long time", example: "Spacing out study improves long-term retention." },
      { word: "intensive study session", wordType: "phrase", definition: "a short but focused study period", example: "An intensive study session may last 45 minutes." },
      { word: "background noise", wordType: "phrase", definition: "sound that is present but not the main focus", example: "Some people study better with background noise." },
      { word: "eliminate distractions", wordType: "phrase", definition: "remove things that stop concentration", example: "You should eliminate distractions while studying." },
      { word: "stay on top of coursework", wordType: "phrase", definition: "manage school tasks well and on time", example: "A calendar helps students stay on top of coursework." },
    ],
    pronunciation: [
      { word: "rigorous", ipa: "/RIG-er-us/", syllables: "rig-or-ous", tip: "Stress the first syllable." },
      { word: "actively", ipa: "/AK-tiv-lee/", syllables: "ac-tive-ly", tip: "Stress AK." },
      { word: "metacognition", ipa: "/met-uh-kog-NISH-un/", syllables: "met-a-cog-ni-tion", tip: "Stress NISH." },
      { word: "distributed", ipa: "/di-STRIB-yoo-tid/", syllables: "dis-trib-ut-ed", tip: "Stress STRIB." },
      { word: "procrastination", ipa: "/pro-kras-tuh-NAY-shun/", syllables: "pro-cras-ti-na-tion", tip: "Stress NAY." },
      { word: "multitasking", ipa: "/mul-tee-TASK-ing/", syllables: "mul-ti-task-ing", tip: "Stress TASK." },
    ],
  },
  {
    id: "a9",
    slug: "fitness-is-hard-to-recover-after-birth",
    title: "Fitness is hard to recover after birth",
    category: "Reading",
    topic: "Health",
    difficulty: "Intermediate",
    coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "Even the fittest women struggle to regain their physical health after being pregnant.",
    readingTime: 3,
    content: `
      <p><strong>Getting back into shape after having a baby is hard, even for women who were fit and strong before becoming pregnant.</strong></p>
      <p>Pregnancy is known to put stress on many parts of the body, including the heart, lungs, muscles and joints. However, little research has assessed the long-term effects of pregnancy on fitness.</p>
      <p>David DeGroot and his colleagues studied 460 women who became pregnant while in the military. Before pregnancy, these women had high levels of fitness because they were active-duty soldiers.</p>
      <p>Even with dedicated training, many of the women struggled to regain their fitness. One year after giving birth, only 30 per cent achieved the same score they had before pregnancy in the US Army Physical Fitness Test.</p>
      <p>By three years after delivery, 75 per cent had matched their pre-pregnancy scores. Sit-up ability and running times declined the most.</p>
      <p>Experts say abdominal muscles are stretched during pregnancy, so sit-ups are especially hard to recover. Running may also slow because it takes time to shed pregnancy weight.</p>
      <p>Lifestyle factors such as lack of time to exercise, disrupted sleep and negative self-image can also hamper new mothers’ fitness recovery.</p>
      <p>Getting fit before pregnancy and staying active during pregnancy can help women regain fitness faster after birth.</p>
    `,
    vocabulary: [
      { word: "get back into shape", wordType: "phrase", definition: "become fit again", example: "It can be hard to get back into shape after pregnancy." },
      { word: "put stress on", wordType: "phrase", definition: "place physical or mental pressure on something", example: "Pregnancy can put stress on the body." },
      { word: "long-term effects", wordType: "phrase", definition: "results that continue for a long time", example: "Researchers studied the long-term effects of pregnancy." },
      { word: "high levels of fitness", wordType: "phrase", definition: "strong physical condition", example: "The soldiers had high levels of fitness before pregnancy." },
      { word: "active-duty soldiers", wordType: "phrase", definition: "soldiers currently serving in the military", example: "The women were active-duty soldiers." },
      { word: "dedicated training", wordType: "phrase", definition: "serious and regular training", example: "Even dedicated training did not help everyone recover quickly." },
      { word: "regain fitness", wordType: "phrase", definition: "recover physical fitness", example: "Many women struggled to regain fitness." },
      { word: "pre-pregnancy scores", wordType: "phrase", definition: "test results from before pregnancy", example: "Some women matched their pre-pregnancy scores after three years." },
      { word: "abdominal muscles", wordType: "phrase", definition: "muscles in the stomach area", example: "Abdominal muscles stretch during pregnancy." },
      { word: "shed excess weight", wordType: "phrase", definition: "lose extra weight", example: "It takes time to shed excess pregnancy weight." },
      { word: "disrupted sleep", wordType: "phrase", definition: "sleep that is frequently interrupted", example: "Disrupted sleep may affect fitness recovery." },
      { word: "negative self-image", wordType: "phrase", definition: "a poor opinion of one’s appearance or body", example: "Negative self-image can hamper recovery." },
    ],
    pronunciation: [
      { word: "pregnancy", ipa: "/PREG-nun-see/", syllables: "preg-nan-cy", tip: "Stress the first syllable." },
      { word: "military", ipa: "/MIL-uh-ter-ee/", syllables: "mil-i-ta-ry", tip: "Stress MIL." },
      { word: "physical", ipa: "/FIZ-i-kul/", syllables: "phys-i-cal", tip: "Stress FIZ." },
      { word: "abdominal", ipa: "/ab-DOM-uh-nul/", syllables: "ab-dom-i-nal", tip: "Stress DOM." },
      { word: "recovery", ipa: "/ri-KUV-er-ee/", syllables: "re-cov-er-y", tip: "Stress KUV." },
      { word: "vigorous", ipa: "/VIG-er-us/", syllables: "vig-or-ous", tip: "Stress VIG." },
    ],
  },
  {
    id: "a10",
    slug: "good-reasons-to-pick-peppers",
    title: "Good Reasons to Pick Peppers",
    category: "Reading",
    topic: "Health",
    difficulty: "Intermediate",
    coverImage: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "Whether sweet or hot, peppers pack a nutrition and flavor punch.",
    readingTime: 4,
    content: `
      <p><strong>If you want to add some zing to your next meal or snack, pick up some peppers.</strong> Fall is when they are at their peak, full of sweet, sharp, or fiery flavor.</p>
      <p>Peppers are low in calories but packed with nutrients. They supply potassium, fiber, and vitamins A and C, which support the immune system.</p>
      <h2>Turn Up the Heat</h2>
      <p>Hot peppers get their heat from capsaicin, a compound that may combat inflammation and promote blood flow. Some research has linked regular hot pepper consumption with a lower risk of cardiovascular disease.</p>
      <h2>Do They Cause Digestive Woes?</h2>
      <p>Spicy peppers do not damage the digestive system, but they can irritate the gastrointestinal tract in some people and cause temporary discomfort such as heartburn or diarrhea.</p>
      <h2>Pick Your Pepper</h2>
      <p>Every pepper has its own unique flavor and heat. Heat is measured on the Scoville scale, from sweet bell peppers to very hot habaneros.</p>
      <p>Sweet peppers can be added raw or sautéed to salads, stir-fries, and sandwiches. Hot peppers can add mild spice or extra fire depending on the type.</p>
      <p>When handling hot peppers, wear gloves and wash your hands and utensils afterward. If food is too hot, dairy products may help cool the burn.</p>
    `,
    vocabulary: [
      { word: "add some zing", wordType: "phrase", definition: "make something more lively or exciting", example: "Peppers can add some zing to a meal." },
      { word: "at their peak", wordType: "phrase", definition: "at their best condition", example: "Peppers are at their peak in fall." },
      { word: "packed with nutrients", wordType: "phrase", definition: "containing many healthy substances", example: "Peppers are packed with nutrients." },
      { word: "immune system", wordType: "phrase", definition: "the body system that fights disease", example: "Vitamin C supports the immune system." },
      { word: "combat inflammation", wordType: "phrase", definition: "fight swelling or irritation in the body", example: "Capsaicin may combat inflammation." },
      { word: "promote blood flow", wordType: "phrase", definition: "help blood move through the body", example: "Hot peppers may promote blood flow." },
      { word: "cardiovascular disease", wordType: "phrase", definition: "disease of the heart or blood vessels", example: "Hot peppers may lower the risk of cardiovascular disease." },
      { word: "digestive system", wordType: "phrase", definition: "the body system that breaks down food", example: "Spicy food does not usually damage the digestive system." },
      { word: "gastrointestinal tract", wordType: "phrase", definition: "the stomach and intestines", example: "Hot peppers may irritate the gastrointestinal tract." },
      { word: "temporary discomfort", wordType: "phrase", definition: "short-lasting unpleasant feeling", example: "Some people feel temporary discomfort after spicy food." },
      { word: "unique flavor", wordType: "phrase", definition: "a special taste", example: "Each pepper has a unique flavor." },
      { word: "cool the burn", wordType: "phrase", definition: "reduce the hot feeling from spicy food", example: "Milk can help cool the burn." },
    ],
    pronunciation: [
      { word: "nutrients", ipa: "/NOO-tree-ents/", syllables: "nu-tri-ents", tip: "Stress NOO." },
      { word: "capsaicin", ipa: "/kap-SAY-sin/", syllables: "cap-sa-i-cin", tip: "Stress SAY." },
      { word: "inflammation", ipa: "/in-fluh-MAY-shun/", syllables: "in-flam-ma-tion", tip: "Stress MAY." },
      { word: "cardiovascular", ipa: "/kar-dee-oh-VAS-kyuh-ler/", syllables: "car-di-o-vas-cu-lar", tip: "Stress VAS." },
      { word: "diarrhea", ipa: "/dye-uh-REE-uh/", syllables: "di-ar-rhe-a", tip: "Stress REE." },
      { word: "habanero", ipa: "/hah-buh-NAIR-oh/", syllables: "ha-ba-ne-ro", tip: "Stress NAIR." },
    ],
  },
  {
    id: "a11",
    slug: "homeworking-shouldnt-be-a-health-risk",
    title: "Homeworking Shouldn’t Be a Health Risk",
    category: "Reading",
    topic: "Business",
    difficulty: "Intermediate",
    coverImage: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "After rushing to exit the office, employers need to reassess conditions for remote workers.",
    readingTime: 4,
    content: `
      <p><strong>When the office exodus began in March, few were ready.</strong> People left hastily, thinking their offices would only be shut for a couple of weeks.</p>
      <p>As a result, a lot of important equipment was left behind. Many people had to work from sofas, beds, kitchen tables, or even the floor.</p>
      <p>The worst offenders are company-issued laptops used for long stretches without external equipment such as a keyboard, mouse, or larger monitor.</p>
      <p>Experts say this can increase the risk of neck and upper back discomfort. Working this way may be acceptable for a few days, but not for months.</p>
      <p>The sofa may feel comfortable at first, but it encourages people to slump, round their shoulders, and put their head forward, which creates greater strain on the body.</p>
      <p>Employers may not always be legally forced to buy every worker a desk and chair, but they still have a duty of care to protect employees’ health and safety.</p>
      <p>In the medium to long term, employers should conduct proper risk assessments of remote workers’ environments.</p>
    `,
    vocabulary: [
      { word: "office exodus", wordType: "phrase", definition: "a large movement of people leaving offices", example: "The office exodus began suddenly." },
      { word: "left hastily", wordType: "phrase", definition: "left very quickly", example: "Workers left hastily during the lockdown." },
      { word: "important equipment", wordType: "phrase", definition: "tools needed to work properly", example: "Important equipment was left behind." },
      { word: "company-issued laptop", wordType: "phrase", definition: "a laptop provided by an employer", example: "Many people used a company-issued laptop at home." },
      { word: "long stretches", wordType: "phrase", definition: "long periods of time", example: "Using laptops for long stretches can cause discomfort." },
      { word: "external equipment", wordType: "phrase", definition: "extra devices connected to a computer", example: "A keyboard and mouse are useful external equipment." },
      { word: "upper back discomfort", wordType: "phrase", definition: "pain or unpleasant feeling in the upper back", example: "Poor posture can cause upper back discomfort." },
      { word: "greater strain", wordType: "phrase", definition: "more physical pressure", example: "Slumping puts greater strain on the body." },
      { word: "statutory duty", wordType: "phrase", definition: "a duty required by law", example: "Employers have a statutory duty of care." },
      { word: "duty of care", wordType: "phrase", definition: "responsibility to protect someone’s health and safety", example: "Companies have a duty of care for employees." },
      { word: "risk assessment", wordType: "phrase", definition: "a check of possible dangers", example: "Employers should conduct a risk assessment." },
      { word: "remote workers", wordType: "phrase", definition: "people working away from the office", example: "Remote workers need safe working conditions." },
    ],
    pronunciation: [
      { word: "exodus", ipa: "/EK-suh-dus/", syllables: "ex-o-dus", tip: "Stress EK." },
      { word: "equipment", ipa: "/i-KWIP-ment/", syllables: "e-quip-ment", tip: "Stress KWIP." },
      { word: "ergonomic", ipa: "/er-guh-NOM-ik/", syllables: "er-go-nom-ic", tip: "Stress NOM." },
      { word: "postural", ipa: "/POS-cher-uhl/", syllables: "pos-tur-al", tip: "Stress POS." },
      { word: "statutory", ipa: "/STACH-oo-tor-ee/", syllables: "stat-u-to-ry", tip: "Stress STACH." },
      { word: "assessment", ipa: "/uh-SES-ment/", syllables: "as-sess-ment", tip: "Stress SES." },
    ],
  },
  {
    id: "a12",
    slug: "a-sticky-subject",
    title: "A sticky subject",
    category: "Reading",
    topic: "Science",
    difficulty: "Advanced",
    coverImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "Surfaces rarely get a second thought, but a new book explains the fascinating science behind them.",
    readingTime: 5,
    content: `
      <p><strong>Watching paint dry is not normally exciting, but there is more happening at the surface than meets the eye.</strong></p>
      <p>Laurie Winkless’s book <em>Sticky: The Secret Science of Surfaces</em> explores the forces at play when materials come into contact.</p>
      <p>The book begins by challenging familiar ideas such as stickiness and slipperiness. What matters is the interaction where one surface meets another.</p>
      <p>Paint, for example, depends on chemical reactions: how pigments and binders mix and how the paint dries in the air.</p>
      <p>At the heart of many surface interactions is friction, the force that resists motion when surfaces slide against each other.</p>
      <p>One example is the gecko, whose feet can stick to and unstick from many surfaces, even inverted or slippery ones. Tiny hairs on its toes help switch stickiness on and off.</p>
      <p>Geckos have inspired robots that climb surfaces and adhesive handpads that allow humans to climb glass walls.</p>
      <p>Scientists still do not fully understand friction at every scale, but surface science has already helped us design, build, join, and improve objects in the world around us.</p>
    `,
    vocabulary: [
      { word: "meets the eye", wordType: "phrase", definition: "is immediately visible or obvious", example: "There is more to surfaces than meets the eye." },
      { word: "surface interactions", wordType: "phrase", definition: "ways in which surfaces affect each other", example: "Surface interactions are central to the book." },
      { word: "forces at play", wordType: "phrase", definition: "forces that are active in a situation", example: "The book studies the forces at play between materials." },
      { word: "come into contact", wordType: "phrase", definition: "touch each other", example: "Materials behave differently when they come into contact." },
      { word: "chemical reactions", wordType: "phrase", definition: "processes where substances change", example: "Paint depends on chemical reactions." },
      { word: "pigments and binders", wordType: "phrase", definition: "color particles and substances that hold them together", example: "Pigments and binders affect how paint dries." },
      { word: "resists motion", wordType: "phrase", definition: "works against movement", example: "Friction resists motion." },
      { word: "slide against", wordType: "phrase", definition: "move while touching another surface", example: "Friction occurs when surfaces slide against each other." },
      { word: "electrostatic forces", wordType: "phrase", definition: "forces caused by electric charges", example: "Gecko feet use small electrostatic forces." },
      { word: "adhesive handpads", wordType: "phrase", definition: "sticky pads used by hands", example: "Geckos inspired adhesive handpads." },
      { word: "atomic scale", wordType: "phrase", definition: "the level of atoms", example: "Scientists study friction on the atomic scale." },
      { word: "precision instruments", wordType: "phrase", definition: "tools designed for very accurate work", example: "Surface science may help design precision instruments." },
    ],
    pronunciation: [
      { word: "surface", ipa: "/SUR-fis/", syllables: "sur-face", tip: "Stress SUR." },
      { word: "friction", ipa: "/FRIK-shun/", syllables: "fric-tion", tip: "Stress FRIK." },
      { word: "hydrophilic", ipa: "/hy-droh-FIL-ik/", syllables: "hy-dro-phil-ic", tip: "Stress FIL." },
      { word: "hydrophobic", ipa: "/hy-droh-FOH-bik/", syllables: "hy-dro-pho-bic", tip: "Stress FOH." },
      { word: "electrostatic", ipa: "/i-lek-troh-STAT-ik/", syllables: "e-lec-tro-stat-ic", tip: "Stress STAT." },
      { word: "nanoscale", ipa: "/NAN-oh-skayl/", syllables: "nan-o-scale", tip: "Stress NAN." },
    ],
  },
  {
    id: "a13",
    slug: "quantum-computer-helps-design-a-better-quantum-computer",
    title: "Quantum computer helps design a better quantum computer",
    category: "Reading",
    topic: "Technology",
    difficulty: "Advanced",
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "A quantum computer has been used to design an improved quantum bit, or qubit.",
    readingTime: 5,
    content: `
      <p><strong>A quantum computer has been used to design an improved quantum bit, or qubit, that could power the next generation of quantum computers.</strong></p>
      <p>As classical computer chips became more complex, it became impractical to design them manually. Computers have long been used to optimize new chip designs.</p>
      <p>However, simulating a quantum processor inside a classical computer is extremely difficult because the required computing resources grow exponentially as each new qubit is added.</p>
      <p>Chao-Yang Lu and colleagues used a quantum algorithm to run simulations. Their research led to a new type of qubit called a plasonium.</p>
      <p>The plasonium is smaller, less noisy, and able to retain its state longer than the team’s current qubit design.</p>
      <p>The team used a variational quantum eigensolver, an algorithm often used in quantum chemistry, to calculate energy levels and improve the circuit design.</p>
      <p>Plasonium qubits are only 240 micrometres long, about 40 per cent of the size of the team’s current transmon design.</p>
      <p>Reducing noise is a vital hurdle for quantum computers because future machines may need millions or billions of qubits to perform useful tasks.</p>
    `,
    vocabulary: [
      { word: "quantum bit", wordType: "phrase", definition: "the basic unit of information in quantum computing", example: "A qubit is a quantum bit." },
      { word: "next generation", wordType: "phrase", definition: "the future version of technology", example: "The qubit could power the next generation of computers." },
      { word: "classical computer chips", wordType: "phrase", definition: "ordinary computer processing chips", example: "Classical computer chips became more complex." },
      { word: "design manually", wordType: "phrase", definition: "create by hand without automated tools", example: "It became impractical to design chips manually." },
      { word: "computing resources", wordType: "phrase", definition: "processing power and memory needed for a task", example: "Quantum simulation needs huge computing resources." },
      { word: "grow exponentially", wordType: "phrase", definition: "increase very rapidly", example: "The resources required grow exponentially." },
      { word: "run simulations", wordType: "phrase", definition: "use a model to test how something behaves", example: "Researchers used a quantum algorithm to run simulations." },
      { word: "retain its state", wordType: "phrase", definition: "keep its condition or information", example: "The new qubit can retain its state longer." },
      { word: "energy levels", wordType: "phrase", definition: "specific amounts of energy in a system", example: "The algorithm calculated energy levels." },
      { word: "physical prototypes", wordType: "phrase", definition: "real test versions of a design", example: "The method avoids building many physical prototypes." },
      { word: "vital hurdle", wordType: "phrase", definition: "a very important obstacle", example: "Reducing noise is a vital hurdle." },
      { word: "useful tasks", wordType: "phrase", definition: "practical jobs or operations", example: "Future quantum computers must carry out useful tasks." },
    ],
    pronunciation: [
      { word: "quantum", ipa: "/KWON-tum/", syllables: "quan-tum", tip: "Stress KWON." },
      { word: "processor", ipa: "/PRO-ses-er/", syllables: "pro-cess-or", tip: "Stress PRO." },
      { word: "algorithm", ipa: "/AL-guh-rith-um/", syllables: "al-go-rithm", tip: "Stress AL." },
      { word: "eigensolver", ipa: "/EYE-gen-sol-ver/", syllables: "ei-gen-sol-ver", tip: "Stress EYE." },
      { word: "micrometre", ipa: "/MY-kroh-mee-ter/", syllables: "mi-cro-me-tre", tip: "Stress MY." },
      { word: "prototype", ipa: "/PROH-tuh-type/", syllables: "pro-to-type", tip: "Stress PROH." },
    ],
  },
  {
    id: "a14",
    slug: "what-to-know-about-the-new-alzheimers-drug",
    title: "What to Know About the New Alzheimer’s Drug",
    category: "Reading",
    topic: "Health",
    difficulty: "Advanced",
    coverImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "Promising or problematic? How to make sense of the controversy over Aduhelm.",
    readingTime: 5,
    content: `
      <p><strong>The Food and Drug Administration approved aducanumab, known as Aduhelm, the first new drug for Alzheimer’s disease in almost 20 years.</strong></p>
      <p>Some experts consider this a major step, but others disagree, saying there is limited evidence that the drug works and is safe.</p>
      <h2>How does Aduhelm work?</h2>
      <p>The drug is given intravenously once a month. It signals the immune system to break down amyloid plaques, protein clumps in the brain thought to kill brain cells.</p>
      <h2>Does it reduce symptoms?</h2>
      <p>The answer is uncertain because two major clinical trials produced conflicting results. One study suggested slower decline, while the other found no clear benefit.</p>
      <h2>Who is the drug for?</h2>
      <p>It is approved for people in the early stages of Alzheimer’s. Experts say it is unlikely to help people with moderate-to-severe cognitive impairment.</p>
      <h2>Possible side effects</h2>
      <p>In studies, some patients developed brain swelling, sometimes with tiny brain bleeds. Other possible side effects included headaches, confusion, vision changes, nausea, diarrhea, falls, and allergic reactions.</p>
      <h2>Cost and access</h2>
      <p>Insurance coverage is unclear, and treatment may involve high costs because patients also need safety monitoring and brain scans.</p>
      <p>Patients interested in the drug should discuss risks, benefits, and monitoring with an Alzheimer’s disease specialist.</p>
    `,
    vocabulary: [
      { word: "disease progression", wordType: "phrase", definition: "the way a disease gets worse over time", example: "Aduhelm may slow disease progression." },
      { word: "clinical benefit", wordType: "phrase", definition: "real improvement in a patient’s health", example: "Experts questioned the clinical benefit of the drug." },
      { word: "side effects", wordType: "phrase", definition: "unwanted results of a medicine", example: "The drug has possible side effects." },
      { word: "neurological injury", wordType: "phrase", definition: "damage to the brain or nervous system", example: "Some side effects may cause neurological injury." },
      { word: "immune system", wordType: "phrase", definition: "the body system that fights disease", example: "The drug signals the immune system." },
      { word: "amyloid plaques", wordType: "phrase", definition: "protein clumps in the brain linked to Alzheimer’s", example: "Aduhelm targets amyloid plaques." },
      { word: "brain deterioration", wordType: "phrase", definition: "gradual worsening of brain condition", example: "Clearing amyloid could slow brain deterioration." },
      { word: "clinical trials", wordType: "phrase", definition: "research studies that test medical treatments", example: "Two clinical trials had conflicting results." },
      { word: "conflicting results", wordType: "phrase", definition: "results that do not agree", example: "The trials yielded conflicting results." },
      { word: "cognitive impairment", wordType: "phrase", definition: "problems with memory or thinking", example: "The drug is unlikely to help severe cognitive impairment." },
      { word: "brain swelling", wordType: "phrase", definition: "an abnormal increase in brain tissue fluid", example: "Some patients developed brain swelling." },
      { word: "out-of-pocket costs", wordType: "phrase", definition: "money patients pay themselves", example: "Patients may face out-of-pocket costs." },
    ],
    pronunciation: [
      { word: "Alzheimer’s", ipa: "/ALTS-hy-merz/", syllables: "Alz-hei-mer’s", tip: "Stress ALTS." },
      { word: "aducanumab", ipa: "/uh-doo-KAN-yoo-mab/", syllables: "a-du-can-u-mab", tip: "Stress KAN." },
      { word: "intravenously", ipa: "/in-truh-VEE-nus-lee/", syllables: "in-tra-ve-nous-ly", tip: "Stress VEE." },
      { word: "amyloid", ipa: "/AM-uh-loyd/", syllables: "am-y-loid", tip: "Stress AM." },
      { word: "cognitive", ipa: "/KOG-ni-tiv/", syllables: "cog-ni-tive", tip: "Stress KOG." },
      { word: "nausea", ipa: "/NAW-zee-uh/", syllables: "nau-se-a", tip: "Stress NAW." },
    ],
  },
  {
    id: "a15",
    slug: "is-turmeric-good-medicine",
    title: "Is Turmeric Good Medicine?",
    category: "Reading",
    topic: "Health",
    difficulty: "Intermediate",
    coverImage: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "The truth about these supplements and inflammation.",
    readingTime: 4,
    content: `
      <p><strong>For hundreds of years, turmeric has been used not just as a flavor enhancer but also as a remedy.</strong></p>
      <p>People have turned to turmeric and curcumin supplements to treat many conditions, especially pain from inflammation linked to osteoarthritis and rheumatoid arthritis.</p>
      <p>However, experts say the evidence is still being debated. Curcumin appears active in preliminary laboratory studies, but there is not yet clear evidence that it is beneficial for people.</p>
      <h2>The science of turmeric</h2>
      <p>One study compared curcumin with diclofenac, a nonsteroidal anti-inflammatory drug used for arthritis pain. It found similar results, but the study had important limitations.</p>
      <p>One reason turmeric supplements may not appear very effective is that curcumin has low bioavailability, meaning very little reaches the bloodstream.</p>
      <p>Some newer supplement formulas are designed to improve absorption. However, higher bioavailability may also increase adverse effects, such as gastrointestinal trouble or interactions with blood-thinning medications.</p>
      <h2>What to try instead</h2>
      <p>For arthritis-related inflammation, doctors may recommend exercise, over-the-counter pain relievers, and dietary changes. Fruits and vegetables contain natural anti-inflammatory compounds and should be part of a healthy diet.</p>
    `,
    vocabulary: [
      { word: "flavor enhancer", wordType: "phrase", definition: "something that improves taste", example: "Turmeric is used as a flavor enhancer." },
      { word: "active component", wordType: "phrase", definition: "the ingredient that creates an effect", example: "Curcumin is an active component of turmeric." },
      { word: "wide variety", wordType: "phrase", definition: "many different types", example: "People use turmeric for a wide variety of ills." },
      { word: "chronic health problems", wordType: "phrase", definition: "health problems that continue for a long time", example: "Some people take supplements for chronic health problems." },
      { word: "preliminary studies", wordType: "phrase", definition: "early research studies", example: "Curcumin appears active in preliminary studies." },
      { word: "clear evidence", wordType: "phrase", definition: "proof that is easy to understand and accept", example: "There is not clear evidence that curcumin helps people." },
      { word: "arthritis pain", wordType: "phrase", definition: "pain caused by arthritis", example: "Diclofenac is used to treat arthritis pain." },
      { word: "placebo group", wordType: "phrase", definition: "a group receiving a fake treatment in a study", example: "The study did not have a placebo group." },
      { word: "low bioavailability", wordType: "phrase", definition: "poor absorption into the bloodstream", example: "Curcumin has low bioavailability." },
      { word: "adverse effects", wordType: "phrase", definition: "harmful or unwanted effects", example: "Better absorption may increase adverse effects." },
      { word: "blood-thinning medications", wordType: "phrase", definition: "medicines that reduce blood clotting", example: "Turmeric may interact with blood-thinning medications." },
      { word: "anti-inflammatory compounds", wordType: "phrase", definition: "substances that reduce inflammation", example: "Fruits and vegetables contain anti-inflammatory compounds." },
    ],
    pronunciation: [
      { word: "turmeric", ipa: "/TUR-mer-ik/", syllables: "tur-mer-ic", tip: "Stress TUR." },
      { word: "curcumin", ipa: "/KUR-kyoo-min/", syllables: "cur-cu-min", tip: "Stress KUR." },
      { word: "osteoarthritis", ipa: "/os-tee-oh-ar-THRY-tis/", syllables: "os-te-o-ar-thri-tis", tip: "Stress THRY." },
      { word: "rheumatoid", ipa: "/ROO-muh-toyd/", syllables: "rheu-ma-toid", tip: "Stress ROO." },
      { word: "bioavailability", ipa: "/by-oh-uh-vay-luh-BIL-uh-tee/", syllables: "bi-o-a-vail-a-bil-i-ty", tip: "Stress BIL." },
      { word: "gastrointestinal", ipa: "/gas-troh-in-TES-tin-ul/", syllables: "gas-tro-in-tes-ti-nal", tip: "Stress TES." },
    ],
  },
  {
    id: "a16",
    slug: "what-secrets-can-baby-black-holes-reveal",
    title: "WHAT SECRETS CAN BABY BLACK HOLES REVEAL?",
    category: "Reading",
    topic: "Science",
    difficulty: "Advanced",
    coverImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "Feige Wang studies some of the most distant objects ever observed: quasars.",
    readingTime: 5,
    content: `
      <p><strong>When Feige Wang was growing up in Shandong province, China, he liked gazing up at the night sky to look at the stars.</strong></p>
      <p>Now, as a NASA Hubble fellow at the University of Arizona’s Steward Observatory, he studies some of the most distant objects ever observed.</p>
      <p>His targets are quasars: black holes surrounded by disks of gas and stars. Because their light takes billions of years to reach Earth, we see them as they existed long ago.</p>
      <p>In 2021, Wang and his colleagues discovered the farthest quasar yet, called J0313-1806. It is more than 13 billion light-years away.</p>
      <p>This quasar is fascinating because its black hole appears too massive for current theories to explain. Its center is around 1.6 billion times the mass of the sun.</p>
      <p>Some models suggest black holes grow from small seeds left by the first stars, but these explanations cannot fully account for J0313-1806’s size.</p>
      <p>Wang and his colleagues think raw hydrogen may have seeded the massive object, but its true origin remains a mystery.</p>
      <p>Future telescopes may help scientists discover more early quasars and understand how the earliest black holes grew.</p>
    `,
    vocabulary: [
      { word: "night sky", wordType: "phrase", definition: "the sky seen at night", example: "Wang liked gazing at the night sky." },
      { word: "distant objects", wordType: "phrase", definition: "things very far away in space", example: "Quasars are distant objects." },
      { word: "primitive galaxies", wordType: "phrase", definition: "very early galaxies", example: "Quasars are nuclei of primitive galaxies." },
      { word: "nearby matter", wordType: "phrase", definition: "material close to something", example: "Black holes suck in nearby matter." },
      { word: "cosmic time travel", wordType: "phrase", definition: "looking into the past by observing distant light", example: "Distant quasars allow cosmic time travel." },
      { word: "light-years away", wordType: "phrase", definition: "a measure of distance in space", example: "J0313-1806 is more than 13 billion light-years away." },
      { word: "current theories", wordType: "phrase", definition: "scientific explanations accepted now", example: "The quasar challenges current theories." },
      { word: "black hole", wordType: "phrase", definition: "an object whose gravity is so strong that light cannot escape", example: "The quasar contains a massive black hole." },
      { word: "raw hydrogen", wordType: "phrase", definition: "hydrogen gas in a simple natural form", example: "Raw hydrogen may have seeded the black hole." },
      { word: "large-scale environment", wordType: "phrase", definition: "the broad surroundings of an object", example: "Scientists know little about early quasars’ large-scale environment." },
      { word: "current instruments", wordType: "phrase", definition: "tools available now", example: "Observers are limited by current instruments." },
      { word: "next generation", wordType: "phrase", definition: "future and more advanced tools", example: "The next generation of telescopes may reveal more secrets." },
    ],
    pronunciation: [
      { word: "quasar", ipa: "/KWAY-zar/", syllables: "qua-sar", tip: "Stress KWAY." },
      { word: "galaxy", ipa: "/GAL-uk-see/", syllables: "gal-ax-y", tip: "Stress GAL." },
      { word: "immense", ipa: "/ih-MENS/", syllables: "im-mense", tip: "Stress MENS." },
      { word: "astrophysics", ipa: "/as-troh-FIZ-iks/", syllables: "as-tro-phys-ics", tip: "Stress FIZ." },
      { word: "hydrogen", ipa: "/HY-druh-jun/", syllables: "hy-dro-gen", tip: "Stress HY." },
      { word: "observatory", ipa: "/ub-ZUR-vuh-tor-ee/", syllables: "ob-serv-a-to-ry", tip: "Stress ZUR." },
    ],
  },
  {
    id: "a17",
    slug: "stranded-red-mangroves-thrive-inland",
    title: "Stranded red mangroves thrive inland",
    category: "Reading",
    topic: "Environment",
    difficulty: "Advanced",
    coverImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1600&q=80",
    date: "2024-08-24",
    description: "Ancient sea level rise displaced a group of normally coastal trees.",
    readingTime: 5,
    content: `
      <p><strong>Nearly 200 kilometers from the sea, red mangroves thrive in the rainforests along the San Pedro Mártir River on the Yucatán Peninsula.</strong></p>
      <p>These tangled trees usually grow in salty coastal water, so scientists wanted to know how they ended up trapped far inland and in freshwater.</p>
      <p>Genetic analyses, vegetation surveys, sediment studies, and sea-level simulations show that the red mangroves are part of a relict ecosystem that has existed for more than 100,000 years.</p>
      <p>During the last interglacial period, warming raised sea levels about nine meters above current levels. The lowlands of what is now the Yucatán Peninsula flooded, and mangrove forests were displaced inland.</p>
      <p>When sea levels later dropped, the trees were left far from the coast. Their survival is remarkable because they are normally adapted to seawater.</p>
      <p>DNA comparisons suggest that the inland mangroves came from about 170 kilometers away along the Gulf of Mexico.</p>
      <p>Other plants in the area also have coastal heritage, and sediments contain coastal gravels, marine shells, and clay rich in shell fragments.</p>
      <p>This relict ecosystem shows the long-term impact of past climate change and may help scientists understand future sea-level rise.</p>
    `,
    vocabulary: [
      { word: "red mangroves", wordType: "phrase", definition: "coastal trees that often grow in salty water", example: "Red mangroves thrive along the river." },
      { word: "Yucatán Peninsula", wordType: "noun phrase", definition: "a peninsula in southeastern Mexico", example: "The trees grow on the Yucatán Peninsula." },
      { word: "tangled trees", wordType: "phrase", definition: "trees with twisted or mixed branches and roots", example: "The mangroves are tangled trees." },
      { word: "freshwater", wordType: "noun", definition: "water that is not salty", example: "The mangroves are now found in freshwater." },
      { word: "genetic analyses", wordType: "phrase", definition: "scientific studies of DNA", example: "Genetic analyses helped explain the trees’ origin." },
      { word: "relict ecosystem", wordType: "phrase", definition: "an ecosystem that survived from an earlier period", example: "The mangroves are part of a relict ecosystem." },
      { word: "interglacial period", wordType: "phrase", definition: "a warm period between ice ages", example: "Sea levels rose during the last interglacial period." },
      { word: "sea levels", wordType: "phrase", definition: "the height of the ocean surface", example: "Rising sea levels flooded the lowlands." },
      { word: "coastal heritage", wordType: "phrase", definition: "origin connected with coastal areas", example: "Many plants there have coastal heritage." },
      { word: "marine gastropods", wordType: "phrase", definition: "sea snails or similar mollusks", example: "Sediments contained shells of marine gastropods." },
      { word: "past climate change", wordType: "phrase", definition: "climate change that happened long ago", example: "The ecosystem shows the impact of past climate change." },
      { word: "future sea-level rise", wordType: "phrase", definition: "expected increase in ocean height", example: "The study may help explain future sea-level rise." },
    ],
    pronunciation: [
      { word: "mangrove", ipa: "/MAN-grohv/", syllables: "man-grove", tip: "Stress MAN." },
      { word: "peninsula", ipa: "/puh-NIN-suh-luh/", syllables: "pe-nin-su-la", tip: "Stress NIN." },
      { word: "ecosystem", ipa: "/EE-koh-sis-tum/", syllables: "e-co-sys-tem", tip: "Stress EE." },
      { word: "interglacial", ipa: "/in-ter-GLAY-shul/", syllables: "in-ter-gla-cial", tip: "Stress GLAY." },
      { word: "sediments", ipa: "/SED-uh-ments/", syllables: "sed-i-ments", tip: "Stress SED." },
      { word: "gastropods", ipa: "/GAS-truh-podz/", syllables: "gas-tro-pods", tip: "Stress GAS." },
    ],
  },
  {
  id: "a18",
  slug: "why-every-year-feels-like-the-worst-ever",
  title: "Why Every Year Feels Like the Worst Ever",
  category: "Reading",
  topic: "Society",
  difficulty: "Advanced",
  coverImage:
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80",
  date: "2026-05-19",
  description:
    "Unfettered media consumption can distort our perception of the present and make every year feel worse than it really is.",
  readingTime: 8,
  content: `
    <p><strong>Unfettered media consumption skews our perception of the present. This article explains why every year can feel like the worst ever and how to break the cycle.</strong></p>

    <h2>Addicted to Bad News</h2>
    <p>In 2020, Jenny Eastwood from Auckland, New Zealand, became addicted to bad news. She constantly checked updates about the pandemic, police brutality, protests, conspiracy theories, and politics. Every few minutes, another alarming post appeared on Reddit or Instagram.</p>

    <p>Like many people, she became obsessed with the world’s seemingly increasing danger. This response has roots in human evolution. Stories of fear and peril raise our anxiety and put our brains on high alert. In the past, this helped early humans survive predators and natural disasters. Today, it often leads to doomscrolling: endlessly refreshing social media and online news to stay aware of the latest threats.</p>

    <h2>Why the Present Feels Worse</h2>
    <p>Many tragedies can make the world feel especially frightening: pandemics, wildfires, hurricanes, inequality, protests, political conflict, and social unrest. However, even when positive developments happen, people often focus more strongly on negative events.</p>

    <p>Experts argue that if any year feels like the worst, it is partly because our brains tend to judge the present more harshly than the past. Unrestricted media consumption can distort perception, making it easy to slide into unhealthy patterns of belief.</p>

    <h2>Declinism and Nostalgia Bias</h2>
    <p>The belief that society is getting worse is not new. Even Ancient Athenians complained that their democracy was not what it used to be. Today, this belief is often called declinism or decline bias.</p>

    <p>People often remember the past more positively than it really was. This is known as rosy retrospection or nostalgia bias. When we remember our own past, we usually recall the best moments and forget many ordinary or unpleasant details. As a result, we may compare a highly edited version of the past with a messy and stressful version of the present.</p>

    <h2>Social Media and Doomscrolling</h2>
    <p>Excessive news consumption can cause stress, anxiety, fatigue, and sleep problems. Heavy exposure to frightening media can make people believe the world is more dangerous than it actually is.</p>

    <p>This idea is related to mean world syndrome, a concept developed from research on television viewing. The more people watched violent television, the more likely they were to believe that real life was dangerous. Modern social media is more complicated because it requires active participation, not just passive watching.</p>

    <h2>The Displacement Effect</h2>
    <p>Social media can provide emotional and social support, especially during difficult times. However, it can also create the displacement effect, where online activity replaces healthier activities such as face-to-face communication, exercise, or sleep.</p>

    <p>People who fear missing out may spend more time online, leading to fatigue and digital burnout. Young people may also engage in upward social comparison, which can lead to feelings of inadequacy and low self-esteem.</p>

    <h2>How to Break the Cycle</h2>
    <p>Psychologists suggest that we can learn to control our biases. The first step is to notice how media shifts our perception. When we become mindful of our thought patterns, we can give ourselves a reality check.</p>

    <p>It also helps to put the present into perspective. The pandemic was frightening, but modern science, medicine, and communication have also allowed people to respond in ways that would not have been possible a century ago.</p>

    <p>Taking stock of what we do have can help reduce negativity bias. People do not need to abandon digital life completely, but they should become more aware of what they consume, who they engage with, and how media affects their mental state.</p>
  `,
  vocabulary: [
    {
      word: "unfettered media consumption",
      wordType: "phrase",
      definition: "unrestricted or uncontrolled use of news and media",
      example: "Unfettered media consumption can make the present feel worse than it is.",
    },
    {
      word: "skews our perception",
      wordType: "phrase",
      definition: "distorts or biases the way we see or understand something",
      example: "Constant bad news skews our perception of reality.",
    },
    {
      word: "addicted to bad news",
      wordType: "phrase",
      definition: "compulsively drawn to negative information",
      example: "During the pandemic, many people became addicted to bad news.",
    },
    {
      word: "narratives of the deadly pandemic",
      wordType: "phrase",
      definition: "ongoing stories and reports about a serious disease outbreak",
      example: "She kept checking narratives of the deadly pandemic online.",
    },
    {
      word: "doomscrolling",
      wordType: "noun",
      definition: "endlessly scrolling through negative news on social media",
      example: "Doomscrolling can increase anxiety and stress.",
    },
    {
      word: "constant vigil",
      wordType: "phrase",
      definition: "continuous alertness or watchfulness for danger",
      example: "Bad news keeps the brain in a state of constant vigil.",
    },
    {
      word: "perceived catastrophe",
      wordType: "phrase",
      definition: "a disaster that is believed or expected, whether real or exaggerated",
      example: "People may keep checking updates to prepare for the next perceived catastrophe.",
    },
    {
      word: "rampant social and economic inequality",
      wordType: "phrase",
      definition: "widespread and uncontrolled unfairness in wealth and opportunity",
      example: "The crisis exposed rampant social and economic inequality.",
    },
    {
      word: "highly divisive election year",
      wordType: "phrase",
      definition: "a political period that strongly separates or polarizes people",
      example: "A highly divisive election year made people feel more anxious.",
    },
    {
      word: "slide into unhealthy patterns of belief",
      wordType: "phrase",
      definition: "gradually develop harmful or distorted ways of thinking",
      example: "Too much negative media can make people slide into unhealthy patterns of belief.",
    },
    {
      word: "tame persistent negative beliefs",
      wordType: "phrase",
      definition: "control or manage ongoing pessimistic thoughts",
      example: "Mindfulness can help people tame persistent negative beliefs.",
    },
    {
      word: "rose-colored glasses",
      wordType: "phrase",
      definition: "an overly optimistic or unrealistic view of the past",
      example: "People often look at history through rose-colored glasses.",
    },
    {
      word: "declinism / decline bias",
      wordType: "phrase",
      definition: "the belief that society is getting worse compared to the past",
      example: "Declinism can make people believe every year is worse than the last.",
    },
    {
      word: "see the world through the lens of negativity bias",
      wordType: "phrase",
      definition: "interpret events mainly by focusing on negative aspects",
      example: "Stress can make us see the world through the lens of negativity bias.",
    },
    {
      word: "propensity to interpret events negatively",
      wordType: "phrase",
      definition: "natural tendency to see things in a pessimistic way",
      example: "Some people have a propensity to interpret events negatively.",
    },
    {
      word: "autobiographical memories are biased toward positivity",
      wordType: "phrase",
      definition: "we tend to remember our personal past more positively than it really was",
      example: "Autobiographical memories are biased toward positivity, so the past may seem better.",
    },
    {
      word: "rosy retrospection / nostalgia bias",
      wordType: "phrase",
      definition: "the tendency to remember the past as better than it actually was",
      example: "Rosy retrospection can make the present look worse by comparison.",
    },
    {
      word: "venerating unrealistically positive versions of the past",
      wordType: "phrase",
      definition: "treating an idealized version of history with excessive admiration",
      example: "Historians warn against venerating unrealistically positive versions of the past.",
    },
    {
      word: "mean world syndrome",
      wordType: "phrase",
      definition: "the belief that the world is more dangerous than it really is due to heavy media exposure",
      example: "Violent media can contribute to mean world syndrome.",
    },
    {
      word: "direct correlation",
      wordType: "phrase",
      definition: "a clear relationship where one thing increases or decreases alongside another",
      example: "Researchers found a direct correlation between TV viewing and fear of the world.",
    },
    {
      word: "cultivation theory",
      wordType: "phrase",
      definition: "the idea that long-term media exposure shapes how people perceive reality",
      example: "Cultivation theory explains how media can shape our view of reality.",
    },
    {
      word: "displacement effect",
      wordType: "phrase",
      definition: "when time spent on one activity replaces healthier activities",
      example: "Social media can create a displacement effect by replacing sleep or exercise.",
    },
    {
      word: "conflate the effects",
      wordType: "phrase",
      definition: "wrongly combine or confuse two separate influences",
      example: "Researchers warn us not to conflate the effects of television and social media.",
    },
    {
      word: "active participation",
      wordType: "phrase",
      definition: "engagement that requires involvement rather than passive watching",
      example: "Social media requires active participation.",
    },
    {
      word: "indispensable",
      wordType: "adjective",
      definition: "absolutely necessary or essential",
      example: "For some users, online support became indispensable during the pandemic.",
    },
    {
      word: "panic-prone primate brains",
      wordType: "phrase",
      definition: "human brains that are biologically wired to respond strongly to danger",
      example: "Media gives our panic-prone primate brains more reasons to feel stressed.",
    },
    {
      word: "reality check",
      wordType: "phrase",
      definition: "a moment of reassessment to see things more objectively",
      example: "Taking a break from social media can provide a useful reality check.",
    },
    {
      word: "take stock in what we do have",
      wordType: "phrase",
      definition: "pause to evaluate and appreciate what currently exists",
      example: "We should take stock in what we do have instead of focusing only on problems.",
    },
    {
      word: "put the present into perspective",
      wordType: "phrase",
      definition: "compare current events with the past to see them more realistically",
      example: "Studying history can help us put the present into perspective.",
    },
    {
      word: "long-standing questions",
      wordType: "phrase",
      definition: "issues or concerns that have existed for a long time",
      example: "The relationship between media and fear raises long-standing questions.",
    },
  ],
  pronunciation: [
    {
      word: "unfettered",
      ipa: "/un-FET-erd/",
      syllables: "un-fet-tered",
      tip: "Stress FET. The ending sounds like 'erd'.",
    },
    {
      word: "perception",
      ipa: "/per-SEP-shun/",
      syllables: "per-cep-tion",
      tip: "Stress SEP. The ending sounds like 'shun'.",
    },
    {
      word: "doomscrolling",
      ipa: "/DOOM-skroh-ling/",
      syllables: "doom-scroll-ing",
      tip: "Stress DOOM.",
    },
    {
      word: "catastrophe",
      ipa: "/kuh-TAS-truh-fee/",
      syllables: "ca-tas-tro-phe",
      tip: "Stress TAS. The ending sounds like 'fee'.",
    },
    {
      word: "inequality",
      ipa: "/in-i-KWOL-uh-tee/",
      syllables: "in-e-qual-i-ty",
      tip: "Stress KWOL.",
    },
    {
      word: "declinism",
      ipa: "/di-KLY-niz-um/",
      syllables: "de-clin-ism",
      tip: "Stress KLY.",
    },
    {
      word: "retrospection",
      ipa: "/reh-truh-SPEK-shun/",
      syllables: "ret-ro-spec-tion",
      tip: "Stress SPEK.",
    },
    {
      word: "venerating",
      ipa: "/VEN-uh-ray-ting/",
      syllables: "ven-er-at-ing",
      tip: "Stress VEN.",
    },
    {
      word: "indispensable",
      ipa: "/in-di-SPEN-suh-bul/",
      syllables: "in-dis-pen-sa-ble",
      tip: "Stress SPEN.",
    },
    {
      word: "reassessment",
      ipa: "/ree-uh-SES-ment/",
      syllables: "re-as-sess-ment",
      tip: "Stress SES.",
    },
  ],
},
];
export function findArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export const DIFFICULTY_STYLES: Record<ArticleDifficulty, string> = {
  Beginner:     "bg-[#3D6B21]/20 text-[#7DBD50] border-[#5D8A3C] font-mono text-[9px]",
  Intermediate: "bg-[#1A5C8A]/20 text-[#6AAFE6] border-[#2A5CA0] font-mono text-[9px]",
  Advanced:     "bg-[#6B4C2A]/20 text-[#C09040] border-[#8B6343] font-mono text-[9px]",
};
