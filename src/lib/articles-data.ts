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
  // ─── BEGINNER (A1/A2) articles ───────────────────────────────────
  {
    id: "b1",
    slug: "my-daily-routine",
    title: "My Daily Routine",
    category: "Reading",
    topic: "Society",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Every day we follow a routine. Read about a typical day — from waking up in the morning to going to sleep at night.",
    readingTime: 3,
    content: `
      <p><strong>Most people follow a routine every day. A routine helps us stay organised and use our time well.</strong></p>

      <h2>In the morning</h2>
      <p>My alarm clock rings at 7 o'clock. I get up, wash my face, and brush my teeth. Then I get dressed and go to the kitchen. I eat breakfast — usually bread, eggs, or porridge. Breakfast gives me energy for the day.</p>
      <p>After breakfast, I pick up my bag and leave the house. I walk to the bus stop and take the bus to school or work. The journey takes about twenty minutes.</p>

      <h2>During the day</h2>
      <p>I arrive at school at half past eight. I attend my classes and study different subjects. At noon, I have a lunch break. I eat lunch with my friends in the canteen.</p>
      <p>In the afternoon, I continue my lessons. I also talk with classmates and do group activities.</p>

      <h2>In the evening</h2>
      <p>I come home at around five o'clock. First, I have a snack and rest for a little while. Then I do my homework. I try to finish my homework before dinner.</p>
      <p>We have dinner together as a family. After dinner, I read a book, watch a little television, or go for a short walk. I try to relax in the evening.</p>

      <h2>At night</h2>
      <p>I get ready for bed at around ten o'clock. I wash my face again and brush my teeth. I set my alarm clock for the next morning and go to sleep. A good routine helps me feel healthy and happy.</p>
    `,
    vocabulary: [
      { word: "routine", wordType: "noun", definition: "a set of regular activities done in the same order every day", example: "My morning routine starts at 7 o'clock." },
      { word: "alarm clock", wordType: "noun phrase", definition: "a clock that makes a sound to wake you up at a set time", example: "I set my alarm clock for 7 a.m." },
      { word: "get up", wordType: "verb phrase", definition: "to rise from bed in the morning", example: "I get up at seven every day." },
      { word: "get dressed", wordType: "verb phrase", definition: "to put on your clothes", example: "I get dressed after breakfast." },
      { word: "breakfast", wordType: "noun", definition: "the first meal of the day, eaten in the morning", example: "I always eat breakfast before school." },
      { word: "energy", wordType: "noun", definition: "the power or strength to do things", example: "Breakfast gives me energy for the day." },
      { word: "journey", wordType: "noun", definition: "the process of travelling from one place to another", example: "The journey to school takes twenty minutes." },
      { word: "arrive", wordType: "verb", definition: "to reach a place after travelling", example: "I arrive at school at half past eight." },
      { word: "attend", wordType: "verb", definition: "to go to a lesson, meeting, or event", example: "I attend four classes every day." },
      { word: "lunch break", wordType: "noun phrase", definition: "a short rest in the middle of the day when you eat lunch", example: "We eat in the canteen during the lunch break." },
      { word: "canteen", wordType: "noun", definition: "a place in a school or workplace where you can buy and eat food", example: "The school canteen sells hot meals every day." },
      { word: "snack", wordType: "noun", definition: "a small amount of food eaten between meals", example: "I have a snack when I come home from school." },
      { word: "homework", wordType: "noun", definition: "school work that students do at home", example: "I do my homework before dinner." },
      { word: "relax", wordType: "verb", definition: "to rest and do something enjoyable after working", example: "I like to relax by reading a book in the evening." },
      { word: "set an alarm", wordType: "verb phrase", definition: "to programme an alarm clock to ring at a certain time", example: "I set an alarm for seven o'clock every night." },
    ],
    pronunciation: [
      { word: "routine", ipa: "/roo-TEEN/", syllables: "rou-tine", tip: "Stress TEEN. Don't say ROO-tyn." },
      { word: "breakfast", ipa: "/BREK-fust/", syllables: "break-fast", tip: "Stress BREK. The 'a' in fast sounds like 'u'." },
      { word: "energy", ipa: "/EN-er-jee/", syllables: "en-er-gy", tip: "Stress EN." },
      { word: "arrive", ipa: "/uh-RYV/", syllables: "ar-rive", tip: "Stress RYVE. Don't say A-riv." },
      { word: "attend", ipa: "/uh-TEND/", syllables: "at-tend", tip: "Stress TEND." },
      { word: "canteen", ipa: "/kan-TEEN/", syllables: "can-teen", tip: "Stress TEEN." },
      { word: "relax", ipa: "/ri-LAKS/", syllables: "re-lax", tip: "Stress LAKS." },
    ],
  },
  {
    id: "b2",
    slug: "animals-around-the-world",
    title: "Amazing Animals Around the World",
    category: "Reading",
    topic: "Science",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Our world is full of amazing animals. Some are big, some are small. Some live in cold places and some live in hot places. Let's learn about some interesting animals.",
    readingTime: 3,
    content: `
      <p><strong>There are millions of different animals on Earth. They live in oceans, forests, deserts, and cold mountains. Each animal is special in its own way.</strong></p>

      <h2>Animals in the ocean</h2>
      <p>The blue whale is the largest animal on Earth. It can be 30 metres long and weigh 180 tonnes. Blue whales eat tiny creatures called krill. They are mammals, so they breathe air, just like humans.</p>
      <p>Dolphins are also ocean mammals. They are very intelligent. They communicate with each other using sounds and clicks. Dolphins often swim in groups called pods.</p>

      <h2>Animals in the jungle</h2>
      <p>Tigers are the largest wild cats. They live in forests in Asia. Tigers are excellent hunters. They have orange and black stripes that help them hide in the tall grass.</p>
      <p>Parrots are colourful birds that live in tropical forests. They can copy human speech, which makes them very popular as pets. Wild parrots live in large flocks.</p>

      <h2>Animals in cold places</h2>
      <p>Polar bears live in the Arctic, where the weather is extremely cold. Their white fur keeps them warm and helps them blend into the snow. Polar bears are very strong swimmers.</p>
      <p>Penguins live in Antarctica. They cannot fly, but they are excellent swimmers. They use their wings like flippers to move quickly through the water.</p>

      <h2>Why animals are important</h2>
      <p>All animals play an important role in nature. They help plants grow by carrying pollen and seeds. They are part of the food chain. If one type of animal disappears, it can affect many others. Protecting animals means protecting our planet.</p>
    `,
    vocabulary: [
      { word: "creature", wordType: "noun", definition: "any living animal or organism", example: "Krill are tiny creatures that blue whales eat." },
      { word: "mammal", wordType: "noun", definition: "a warm-blooded animal that breathes air and feeds its young with milk", example: "Dolphins and whales are mammals, not fish." },
      { word: "intelligent", wordType: "adjective", definition: "able to learn and understand things quickly", example: "Dolphins are very intelligent animals." },
      { word: "communicate", wordType: "verb", definition: "to share information or feelings with others", example: "Dolphins communicate using sounds and clicks." },
      { word: "hunter", wordType: "noun", definition: "an animal or person that chases and catches other animals for food", example: "Tigers are excellent hunters in the wild." },
      { word: "stripe", wordType: "noun", definition: "a long, narrow band of colour different from the area around it", example: "Tigers have orange and black stripes." },
      { word: "tropical", wordType: "adjective", definition: "relating to the hot, wet regions near the Equator", example: "Parrots live in tropical forests." },
      { word: "flock", wordType: "noun", definition: "a group of birds that travel or feed together", example: "Wild parrots live in large flocks." },
      { word: "Arctic", wordType: "noun", definition: "the very cold region around the North Pole", example: "Polar bears live in the Arctic." },
      { word: "fur", wordType: "noun", definition: "the thick, soft hair that covers some animals", example: "The polar bear's white fur keeps it warm." },
      { word: "blend in", wordType: "verb phrase", definition: "to look similar to the background so it is hard to notice you", example: "A polar bear's white fur helps it blend into the snow." },
      { word: "flipper", wordType: "noun", definition: "a flat limb used by some animals for swimming", example: "Penguins use their wings like flippers." },
      { word: "pollen", wordType: "noun", definition: "a fine powder made by flowers that helps plants reproduce", example: "Bees carry pollen from flower to flower." },
      { word: "food chain", wordType: "noun phrase", definition: "the order in which animals eat plants and other animals in nature", example: "All animals are part of the food chain." },
      { word: "protect", wordType: "verb", definition: "to keep someone or something safe from harm", example: "We must protect wild animals from extinction." },
    ],
    pronunciation: [
      { word: "creature", ipa: "/KREE-cher/", syllables: "crea-ture", tip: "Stress KREE. Ends in 'cher' not 'tyur'." },
      { word: "mammal", ipa: "/MAM-ul/", syllables: "mam-mal", tip: "Stress MAM. Both syllables are short." },
      { word: "intelligent", ipa: "/in-TEL-uh-jent/", syllables: "in-tel-li-gent", tip: "Stress TEL." },
      { word: "communicate", ipa: "/kuh-MYOO-ni-kayt/", syllables: "com-mu-ni-cate", tip: "Stress MYOO." },
      { word: "tropical", ipa: "/TROP-uh-kul/", syllables: "trop-i-cal", tip: "Stress TROP. Don't say troh-PEE-kul." },
      { word: "Antarctica", ipa: "/ant-ARK-tuh-kuh/", syllables: "Ant-arc-ti-ca", tip: "Stress ARK. The 'c' is not silent — say ant-ARK-ti-kuh." },
    ],
  },
  {
    id: "b3",
    slug: "going-shopping",
    title: "Going Shopping: At the Market and Supermarket",
    category: "Reading",
    topic: "Society",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Shopping is something we do every week. Learn useful words and phrases for buying food, clothes, and everyday items at the market and supermarket.",
    readingTime: 3,
    content: `
      <p><strong>Shopping is an important part of everyday life. We go shopping to buy food, clothes, and many other things we need.</strong></p>

      <h2>At the supermarket</h2>
      <p>A supermarket is a large shop that sells food and household items. When you enter, you take a trolley or a basket. You walk through the aisles and pick the products you need. Some people write a shopping list before they go to help them remember what to buy.</p>
      <p>Fresh food is usually at the back of the supermarket. You can find fruit, vegetables, meat, and dairy products there. Processed food, snacks, and drinks are in other sections. It is a good idea to check the price before you put something in your trolley.</p>

      <h2>At the market</h2>
      <p>An outdoor market is a place where sellers set up stalls and sell their products directly to shoppers. Markets often sell fresh fruit and vegetables, fish, meat, clothes, and handmade goods.</p>
      <p>Many people prefer markets because the food is fresh and the prices are sometimes lower than in supermarkets. You can also talk directly to the seller and ask questions about the products.</p>

      <h2>Paying for your items</h2>
      <p>After you have chosen your items, you go to the checkout. The cashier scans each item and tells you the total cost. You can pay by cash or by card. Some shops also accept contactless payments.</p>
      <p>Always check your receipt after paying. A receipt shows all the items you bought and how much you paid. If something is wrong, you can speak to a member of staff.</p>

      <h2>Useful tip</h2>
      <p>Try to take your own bag when you go shopping. Using a reusable bag is better for the environment than using plastic bags every time.</p>
    `,
    vocabulary: [
      { word: "supermarket", wordType: "noun", definition: "a large shop that sells food and household items", example: "I go to the supermarket every Saturday morning." },
      { word: "trolley", wordType: "noun", definition: "a metal basket on wheels used in supermarkets to carry shopping", example: "I put my items in the trolley as I walk through the aisles." },
      { word: "basket", wordType: "noun", definition: "a small container with a handle used to carry a few items in a shop", example: "I only need a basket because I'm buying a few things." },
      { word: "aisle", wordType: "noun", definition: "a long passage between the rows of shelves in a shop", example: "The cereals are in aisle four." },
      { word: "shopping list", wordType: "noun phrase", definition: "a written list of things you need to buy", example: "I always make a shopping list before I go shopping." },
      { word: "dairy products", wordType: "noun phrase", definition: "food made from milk, such as cheese, butter, and yoghurt", example: "Milk and cheese are common dairy products." },
      { word: "processed food", wordType: "noun phrase", definition: "food that has been changed from its natural form using chemicals or machines", example: "Processed food often contains a lot of salt and sugar." },
      { word: "stall", wordType: "noun", definition: "a small stand in a market where sellers display their products", example: "The market has many fruit and vegetable stalls." },
      { word: "handmade", wordType: "adjective", definition: "made by a person using their hands, not by a machine", example: "She bought a handmade bag from the market." },
      { word: "checkout", wordType: "noun", definition: "the place in a supermarket where you pay for your items", example: "There was a long queue at the checkout." },
      { word: "cashier", wordType: "noun", definition: "a person who takes payments in a shop", example: "The cashier scanned each item quickly." },
      { word: "receipt", wordType: "noun", definition: "a piece of paper that shows what you bought and how much you paid", example: "Keep your receipt in case you need to return an item." },
      { word: "contactless payment", wordType: "noun phrase", definition: "a way to pay by holding your card or phone near a machine, without entering a PIN", example: "I paid by contactless payment at the supermarket." },
      { word: "reusable bag", wordType: "noun phrase", definition: "a bag that can be used many times instead of being thrown away", example: "I always bring a reusable bag when I go shopping." },
      { word: "member of staff", wordType: "noun phrase", definition: "a person who works at a shop or organisation", example: "If you need help, ask a member of staff." },
    ],
    pronunciation: [
      { word: "supermarket", ipa: "/SOO-per-mar-kit/", syllables: "su-per-mar-ket", tip: "Stress SOO. Four syllables." },
      { word: "aisle", ipa: "/YL/", syllables: "aisle", tip: "The 's' is silent — say it like 'I'll'." },
      { word: "dairy", ipa: "/DAIR-ee/", syllables: "dai-ry", tip: "Stress DAIR. Rhymes with 'hairy'." },
      { word: "cashier", ipa: "/ka-SHEER/", syllables: "ca-shier", tip: "Stress SHEER. Don't say CASH-eer." },
      { word: "receipt", ipa: "/ri-SEET/", syllables: "re-ceipt", tip: "The 'p' is silent — say ri-SEET." },
      { word: "contactless", ipa: "/KON-takt-lis/", syllables: "con-tact-less", tip: "Stress KON." },
    ],
  },
  {
    id: "b4",
    slug: "the-four-seasons",
    title: "The Four Seasons: Spring, Summer, Autumn, and Winter",
    category: "Reading",
    topic: "Environment",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Most countries have four seasons: spring, summer, autumn, and winter. Each season brings different weather, activities, and changes in nature.",
    readingTime: 3,
    content: `
      <p><strong>Most countries have four seasons in a year. Each season lasts about three months and brings different weather and different activities.</strong></p>

      <h2>Spring</h2>
      <p>Spring comes after winter. The weather becomes warmer and the days get longer. Trees grow new leaves and flowers begin to bloom. Many animals have babies in spring. People enjoy going outside again after the cold winter.</p>
      <p>Spring is also a busy time for farmers. They plant seeds in the fields. It often rains in spring, which helps crops grow.</p>

      <h2>Summer</h2>
      <p>Summer is the hottest season of the year. The sun shines for many hours every day. People wear light clothes and spend time outdoors. Children have school holidays in summer. Many families go on holiday to the beach or the mountains.</p>
      <p>In some countries, summer can be very dry. Farmers need to water their crops carefully because there is not much rain.</p>

      <h2>Autumn</h2>
      <p>Autumn is the season between summer and winter. The temperature drops and the weather becomes cooler. Leaves on the trees change colour to orange, red, and yellow, and then fall to the ground. This is why autumn is sometimes called "fall" in American English.</p>
      <p>Autumn is harvest time. Farmers collect the crops that have been growing all summer. Fruits such as apples and pumpkins are ready to pick in autumn.</p>

      <h2>Winter</h2>
      <p>Winter is the coldest season. The days are short and the nights are long. In some places, snow falls and rivers freeze. People wear thick coats, hats, and gloves to stay warm.</p>
      <p>Many animals sleep through winter in a process called hibernation. Some birds fly to warmer countries called migration. Winter can be beautiful, especially when snow covers the trees and fields.</p>
    `,
    vocabulary: [
      { word: "season", wordType: "noun", definition: "one of the four periods of the year: spring, summer, autumn, or winter", example: "My favourite season is spring because of the flowers." },
      { word: "bloom", wordType: "verb", definition: "to produce flowers; to open as a flower", example: "Cherry trees bloom beautifully in spring." },
      { word: "crops", wordType: "noun", definition: "plants grown on a farm to be sold or eaten", example: "Farmers water their crops during dry weather." },
      { word: "temperature", wordType: "noun", definition: "a measurement of how hot or cold something is", example: "The temperature drops in autumn." },
      { word: "harvest", wordType: "noun", definition: "the time of year when farmers collect their crops", example: "Autumn is harvest time on most farms." },
      { word: "freeze", wordType: "verb", definition: "to become solid because of very cold temperatures", example: "Some rivers freeze in winter." },
      { word: "hibernation", wordType: "noun", definition: "a long, deep sleep that some animals have during winter", example: "Bears go into hibernation when winter comes." },
      { word: "migration", wordType: "noun", definition: "the movement of animals from one place to another at a certain time of year", example: "Bird migration happens when cold weather arrives." },
      { word: "outdoors", wordType: "adverb", definition: "outside, in the open air", example: "In summer, we spend more time outdoors." },
      { word: "shade", wordType: "noun", definition: "an area that is protected from direct sunlight", example: "We sat in the shade to cool down in the hot summer." },
      { word: "drought", wordType: "noun", definition: "a long period with little or no rain", example: "Crops can die during a summer drought." },
      { word: "melt", wordType: "verb", definition: "to change from solid to liquid because of heat", example: "Snow melts in the spring sunshine." },
      { word: "plant seeds", wordType: "verb phrase", definition: "to put seeds into the ground so they can grow", example: "Farmers plant seeds in spring." },
      { word: "light clothes", wordType: "noun phrase", definition: "thin clothing suitable for warm weather", example: "I wear light clothes in summer." },
      { word: "thick coat", wordType: "noun phrase", definition: "a heavy, warm jacket worn in cold weather", example: "You need a thick coat in winter." },
    ],
    pronunciation: [
      { word: "season", ipa: "/SEE-zun/", syllables: "sea-son", tip: "Stress SEE. Ends with 'zun' not 'zon'." },
      { word: "bloom", ipa: "/BLOOM/", syllables: "bloom", tip: "One syllable. The 'oo' is long, like in 'moon'." },
      { word: "temperature", ipa: "/TEM-pruh-cher/", syllables: "tem-per-a-ture", tip: "Stress TEM. Often said as three syllables: TEM-pruh-cher." },
      { word: "harvest", ipa: "/HAR-vist/", syllables: "har-vest", tip: "Stress HAR." },
      { word: "hibernation", ipa: "/hy-ber-NAY-shun/", syllables: "hi-ber-na-tion", tip: "Stress NAY." },
      { word: "migration", ipa: "/my-GRAY-shun/", syllables: "mi-gra-tion", tip: "Stress GRAY." },
      { word: "drought", ipa: "/DROWT/", syllables: "drought", tip: "Rhymes with 'out'. The 'gh' is silent." },
    ],
  },
  {
    id: "b5",
    slug: "my-family",
    title: "My Family",
    category: "Reading",
    topic: "Society",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1511895426328-dc8714191011?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Family is very important in most cultures. Learn about different family members, family activities, and what makes a happy family.",
    readingTime: 3,
    content: `
      <p><strong>Family is one of the most important things in life. A family is a group of people who love and support each other.</strong></p>

      <h2>Family members</h2>
      <p>A typical family has parents and children. The mother and father are the parents. Sons and daughters are their children. Grandparents are the parents of the mother or father. Aunts and uncles are the brothers and sisters of a parent. Cousins are the children of aunts and uncles.</p>
      <p>Some families are small — maybe just a parent and one child. Other families are large, with many children, grandparents, and other relatives all living together or nearby.</p>

      <h2>What families do together</h2>
      <p>Families spend time together in many ways. They have meals together, especially dinner in the evening. Many families celebrate birthdays with cake and presents. They also celebrate important holidays together.</p>
      <p>Going on trips and holidays together is another popular family activity. Families might visit the seaside, go camping, or travel to another city. These shared experiences create happy memories.</p>

      <h2>Helping each other</h2>
      <p>In a healthy family, everyone helps each other. Older children often help younger brothers and sisters with homework. Parents work hard to provide food, clothes, and education for their children. Grandparents often help look after young grandchildren.</p>
      <p>Families support each other during difficult times too. When someone is sick or has a problem, the family is there to help and give comfort.</p>

      <h2>Changing families</h2>
      <p>Today, families can look different from what they did in the past. Some children live with one parent. Some families adopt children. The most important thing is not the size or shape of the family, but the love and care that its members show to each other.</p>
    `,
    vocabulary: [
      { word: "support", wordType: "verb", definition: "to help and encourage someone, especially during difficult times", example: "Families support each other during difficult times." },
      { word: "relative", wordType: "noun", definition: "a person who is part of your family", example: "All my relatives came to our family celebration." },
      { word: "grandparent", wordType: "noun", definition: "the parent of your mother or father", example: "My grandparents tell me stories about the past." },
      { word: "cousin", wordType: "noun", definition: "the child of your aunt or uncle", example: "I play football with my cousins at the weekend." },
      { word: "celebrate", wordType: "verb", definition: "to do something enjoyable to mark a special occasion", example: "We celebrate birthdays with cake and presents." },
      { word: "holiday", wordType: "noun", definition: "a period of time away from work or school, often spent travelling", example: "Our family goes on holiday every summer." },
      { word: "seaside", wordType: "noun", definition: "an area next to the sea, often visited for holidays", example: "We went to the seaside and played on the beach." },
      { word: "shared experience", wordType: "noun phrase", definition: "something that a group of people do or go through together", example: "Family holidays are shared experiences that create memories." },
      { word: "memory", wordType: "noun", definition: "something from the past that you remember", example: "We have many happy memories from family trips." },
      { word: "provide", wordType: "verb", definition: "to give someone what they need", example: "Parents provide food and shelter for their children." },
      { word: "look after", wordType: "verb phrase", definition: "to take care of someone or something", example: "Grandparents often look after young grandchildren." },
      { word: "comfort", wordType: "noun", definition: "a feeling of relief from pain or worry", example: "When I was sad, my family gave me comfort." },
      { word: "adopt", wordType: "verb", definition: "to legally take another person's child as your own", example: "Some families adopt children who need a home." },
      { word: "care", wordType: "noun", definition: "attention and kindness given to someone", example: "Good parents show care and love to their children." },
      { word: "typical", wordType: "adjective", definition: "showing the usual features of a particular group or situation", example: "A typical family has parents and children." },
    ],
    pronunciation: [
      { word: "relative", ipa: "/REL-uh-tiv/", syllables: "rel-a-tive", tip: "Stress REL. Three syllables." },
      { word: "grandparent", ipa: "/GRAND-pair-unt/", syllables: "grand-par-ent", tip: "Stress GRAND." },
      { word: "celebrate", ipa: "/SEL-uh-brayt/", syllables: "cel-e-brate", tip: "Stress SEL. Three syllables." },
      { word: "memory", ipa: "/MEM-uh-ree/", syllables: "mem-o-ry", tip: "Stress MEM. Three syllables." },
      { word: "provide", ipa: "/pruh-VYD/", syllables: "pro-vide", tip: "Stress VYDE." },
      { word: "adopt", ipa: "/uh-DOPT/", syllables: "a-dopt", tip: "Stress DOPT." },
    ],
  },
  {
    id: "b6",
    slug: "eating-healthy-food",
    title: "Eating Healthy Food",
    category: "Reading",
    topic: "Health",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Eating well is important for your health. Learn about different food groups, what to eat and what to avoid, and how to build a balanced diet.",
    readingTime: 3,
    content: `
      <p><strong>What we eat every day affects our health. Healthy food gives our body the energy and nutrients it needs to work well.</strong></p>

      <h2>Food groups</h2>
      <p>There are five main food groups. Fruits and vegetables give us vitamins and minerals. Bread, rice, and pasta give us energy. Meat, fish, and eggs give us protein. Dairy products like milk and cheese give us calcium for strong bones. Fats and oils should be eaten in small amounts.</p>
      <p>A balanced diet means eating foods from all five groups every day. No single food has all the nutrients your body needs.</p>

      <h2>Eating fruit and vegetables</h2>
      <p>Most health experts say we should eat at least five portions of fruit and vegetables every day. They are low in calories and full of important vitamins. Fresh, frozen, and tinned vegetables are all good choices.</p>
      <p>Dark green vegetables like spinach and broccoli are especially good for you. Colourful fruits like berries, oranges, and mangoes contain many useful vitamins.</p>

      <h2>Foods to limit</h2>
      <p>Some foods are fine to eat sometimes, but not every day. Sugary foods like sweets, chocolate, and fizzy drinks have a lot of calories but very few nutrients. Salty snacks like crisps and processed meats are also unhealthy if eaten in large amounts.</p>
      <p>It is best to cook at home using fresh ingredients when possible. Home cooking allows you to control how much salt, sugar, and oil goes into your food.</p>

      <h2>Drinking water</h2>
      <p>Water is essential for good health. Our bodies are made up of about 60% water. We should drink about eight glasses of water every day. Water helps our organs work properly, keeps our skin healthy, and helps us think clearly. Avoid sugary drinks and drink more water instead.</p>
    `,
    vocabulary: [
      { word: "nutrient", wordType: "noun", definition: "a substance in food that the body needs to grow and stay healthy", example: "Fruits and vegetables contain many important nutrients." },
      { word: "balanced diet", wordType: "noun phrase", definition: "a diet that includes the right amounts of all food groups", example: "A balanced diet keeps your body healthy and strong." },
      { word: "protein", wordType: "noun", definition: "a nutrient found in meat, fish, and eggs that helps the body grow and repair itself", example: "Eggs and meat are good sources of protein." },
      { word: "calcium", wordType: "noun", definition: "a mineral found in dairy products that helps build strong bones and teeth", example: "Milk is a good source of calcium." },
      { word: "vitamin", wordType: "noun", definition: "a natural substance found in food that the body needs to stay healthy", example: "Oranges are rich in vitamin C." },
      { word: "calorie", wordType: "noun", definition: "a unit used to measure the energy that food provides", example: "Vegetables are low in calories." },
      { word: "portion", wordType: "noun", definition: "a specific amount or serving of food", example: "Try to eat five portions of fruit and vegetables a day." },
      { word: "tinned", wordType: "adjective", definition: "food that has been stored in a sealed metal can", example: "Tinned tomatoes are a useful ingredient to keep at home." },
      { word: "limit", wordType: "verb", definition: "to keep something within a controlled amount", example: "You should limit how much sugar you eat." },
      { word: "fizzy drink", wordType: "noun phrase", definition: "a cold drink that contains bubbles of carbon dioxide", example: "Fizzy drinks contain a lot of sugar." },
      { word: "ingredient", wordType: "noun", definition: "one of the items that is used to make a food or dish", example: "Fresh ingredients make home cooking healthier." },
      { word: "essential", wordType: "adjective", definition: "absolutely necessary; very important", example: "Water is essential for good health." },
      { word: "organ", wordType: "noun", definition: "a part of the body that has a specific function, such as the heart or liver", example: "Water helps our organs work properly." },
      { word: "frozen", wordType: "adjective", definition: "food that has been stored at very low temperatures to keep it fresh", example: "Frozen vegetables are just as healthy as fresh ones." },
      { word: "mineral", wordType: "noun", definition: "a natural substance found in food that the body needs in small amounts", example: "Iron is a mineral found in red meat and leafy vegetables." },
    ],
    pronunciation: [
      { word: "nutrient", ipa: "/NYOO-tree-unt/", syllables: "nu-tri-ent", tip: "Stress NYOO. Three syllables." },
      { word: "protein", ipa: "/PROH-teen/", syllables: "pro-tein", tip: "Stress PROH. Two syllables." },
      { word: "calcium", ipa: "/KAL-see-um/", syllables: "cal-ci-um", tip: "Stress KAL. Three syllables." },
      { word: "vitamin", ipa: "/VY-tuh-min/", syllables: "vi-ta-min", tip: "Stress VY. In American English: VY-tuh-min." },
      { word: "calorie", ipa: "/KAL-uh-ree/", syllables: "cal-o-rie", tip: "Stress KAL. Three syllables." },
      { word: "essential", ipa: "/uh-SEN-shul/", syllables: "es-sen-tial", tip: "Stress SEN. Ends in 'shul'." },
    ],
  },
  {
    id: "b7",
    slug: "going-to-school",
    title: "Going to School",
    category: "Reading",
    topic: "Education",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "School is where children learn and grow. Read about a typical school day, subjects, teachers, and why education is so important.",
    readingTime: 3,
    content: `
      <p><strong>School is an important part of every child's life. At school, children learn new subjects, make friends, and prepare for the future.</strong></p>

      <h2>A school day</h2>
      <p>A typical school day starts at around eight or nine in the morning. Students arrive at school and go to their classroom. The teacher takes the register to check who is present. Then lessons begin.</p>
      <p>Most schools have a timetable that shows which lessons happen each day. There are usually five or six lessons a day, each lasting forty-five or sixty minutes. Between lessons, students have short breaks.</p>

      <h2>School subjects</h2>
      <p>At school, students study many different subjects. Mathematics teaches students to count, calculate, and solve problems. Science helps students understand the natural world. English classes develop reading, writing, and communication skills. History teaches about the past. Geography helps students understand the world and different countries.</p>
      <p>Many schools also teach art, music, and physical education. These subjects help students develop creativity and stay physically active.</p>

      <h2>Teachers and classrooms</h2>
      <p>Teachers guide students and help them understand new ideas. A good teacher explains things clearly, answers questions patiently, and encourages students to do their best. Students should respect their teachers and listen carefully during lessons.</p>
      <p>A classroom usually has desks, chairs, a board at the front, and bookshelves. Many classrooms now also have computers or interactive whiteboards.</p>

      <h2>Why education matters</h2>
      <p>Education gives people the knowledge and skills they need for adult life. People who study hard at school have more opportunities later in life. They can find better jobs, earn more money, and make better decisions. Education also teaches people to think for themselves and understand the world around them.</p>
    `,
    vocabulary: [
      { word: "register", wordType: "noun", definition: "an official list of students in a class; also the act of marking attendance", example: "The teacher takes the register at the start of each lesson." },
      { word: "timetable", wordType: "noun", definition: "a schedule showing when lessons take place", example: "Our timetable shows six lessons every day." },
      { word: "subject", wordType: "noun", definition: "an area of study taught in school, such as maths or history", example: "My favourite subject is science." },
      { word: "calculate", wordType: "verb", definition: "to find an answer using numbers and mathematics", example: "Students learn to calculate in maths lessons." },
      { word: "communication", wordType: "noun", definition: "the act of sharing information or ideas with others", example: "Good communication skills are important in everyday life." },
      { word: "creativity", wordType: "noun", definition: "the ability to make new and original things", example: "Art and music lessons encourage creativity." },
      { word: "physically active", wordType: "adjective phrase", definition: "regularly doing exercise and movement", example: "Physical education helps students stay physically active." },
      { word: "guide", wordType: "verb", definition: "to help someone learn or find the right way", example: "Teachers guide students through difficult topics." },
      { word: "patiently", wordType: "adverb", definition: "in a calm way, without getting angry or frustrated", example: "A good teacher explains things patiently." },
      { word: "encourage", wordType: "verb", definition: "to give someone the confidence to do something", example: "My teacher encourages me to read more books." },
      { word: "interactive whiteboard", wordType: "noun phrase", definition: "a large digital screen used by teachers in a classroom", example: "Our teacher uses an interactive whiteboard to show videos." },
      { word: "opportunity", wordType: "noun", definition: "a chance to do something good or useful", example: "Education gives people more opportunities in life." },
      { word: "earn", wordType: "verb", definition: "to receive money for working", example: "Educated people often earn higher salaries." },
      { word: "decision", wordType: "noun", definition: "a choice made after thinking about options", example: "Education helps people make better decisions." },
      { word: "knowledge", wordType: "noun", definition: "information and understanding that a person has about something", example: "School gives children knowledge about the world." },
    ],
    pronunciation: [
      { word: "register", ipa: "/REJ-uh-ster/", syllables: "reg-is-ter", tip: "Stress REJ. Three syllables." },
      { word: "timetable", ipa: "/TYM-tay-bul/", syllables: "time-ta-ble", tip: "Stress TIME. Three syllables." },
      { word: "calculate", ipa: "/KAL-kyuh-layt/", syllables: "cal-cu-late", tip: "Stress KAL." },
      { word: "creativity", ipa: "/kree-ay-TIV-uh-tee/", syllables: "cre-a-tiv-i-ty", tip: "Stress TIV." },
      { word: "encourage", ipa: "/en-KUR-ij/", syllables: "en-cour-age", tip: "Stress KUR." },
      { word: "opportunity", ipa: "/op-er-TYOO-nuh-tee/", syllables: "op-por-tu-ni-ty", tip: "Stress TYOO." },
      { word: "knowledge", ipa: "/NOL-ij/", syllables: "know-ledge", tip: "The 'k' is silent — say NOL-ij." },
    ],
  },
  {
    id: "b8",
    slug: "sports-and-exercise",
    title: "Sports and Exercise: Why Moving Matters",
    category: "Reading",
    topic: "Health",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Exercise is important for our body and mind. Learn about popular sports, the benefits of staying active, and simple ways to get more exercise every day.",
    readingTime: 3,
    content: `
      <p><strong>Exercise is one of the best things you can do for your health. Moving your body regularly keeps you strong, healthy, and happy.</strong></p>

      <h2>Popular sports</h2>
      <p>Football is the most popular sport in the world. Millions of people play or watch football. Players kick a ball and try to score goals. A football match has two teams of eleven players each.</p>
      <p>Basketball is also very popular, especially in the United States. Players throw a ball through a hoop to score points. Swimming is another excellent sport. It exercises almost every muscle in the body and is easy on the joints.</p>
      <p>Running and cycling are popular because they are simple and cheap. You do not need much equipment to go for a run or a bike ride.</p>

      <h2>Benefits of exercise</h2>
      <p>Regular exercise has many benefits for your body. It strengthens your heart and lungs. It builds muscle and keeps your bones strong. It helps you stay at a healthy weight. People who exercise regularly also sleep better at night.</p>
      <p>Exercise is also good for your mental health. When you exercise, your brain releases chemicals called endorphins, which make you feel happy and reduce stress. Sport can also teach teamwork and build confidence.</p>

      <h2>How much exercise do you need?</h2>
      <p>Health experts recommend at least 30 minutes of moderate exercise five days a week. Moderate exercise means you feel a little warm and breathe a little faster, but you can still talk. Examples include brisk walking, cycling, or dancing.</p>

      <h2>Simple ways to be more active</h2>
      <p>You do not need to join a gym to exercise. Walk or cycle to school or work instead of taking a bus. Use the stairs instead of the lift. Go for a walk after dinner. Play a sport with friends at the weekend. Small changes can make a big difference to your health.</p>
    `,
    vocabulary: [
      { word: "exercise", wordType: "noun", definition: "physical activity done to keep the body fit and healthy", example: "Regular exercise keeps your heart and lungs strong." },
      { word: "score", wordType: "verb", definition: "to get a point in a sport or game", example: "The team scored three goals in the match." },
      { word: "hoop", wordType: "noun", definition: "a large ring used in basketball through which players throw the ball", example: "The player threw the ball through the hoop to score." },
      { word: "muscle", wordType: "noun", definition: "a part of the body that allows movement; muscles can be made stronger by exercise", example: "Swimming exercises almost every muscle in the body." },
      { word: "joint", wordType: "noun", definition: "the part of the body where two bones meet, such as the knee or hip", example: "Swimming is easy on your joints." },
      { word: "equipment", wordType: "noun", definition: "the objects and tools needed for a particular activity", example: "You need very little equipment to go running." },
      { word: "strengthen", wordType: "verb", definition: "to make something stronger", example: "Exercise strengthens your heart and lungs." },
      { word: "mental health", wordType: "noun phrase", definition: "a person's emotional and psychological well-being", example: "Exercise is very good for your mental health." },
      { word: "endorphin", wordType: "noun", definition: "a chemical released by the brain during exercise that reduces pain and makes you feel happy", example: "Exercise releases endorphins that improve your mood." },
      { word: "stress", wordType: "noun", definition: "feelings of worry and tension, usually caused by difficult situations", example: "Exercise helps reduce stress." },
      { word: "teamwork", wordType: "noun", definition: "working together with others to achieve a shared goal", example: "Team sports teach the value of teamwork." },
      { word: "confidence", wordType: "noun", definition: "belief in your own abilities", example: "Playing sport can help build confidence." },
      { word: "moderate", wordType: "adjective", definition: "not too much and not too little; at a medium level", example: "Thirty minutes of moderate exercise a day is recommended." },
      { word: "brisk", wordType: "adjective", definition: "quick and energetic", example: "A brisk walk in the morning wakes you up." },
      { word: "active", wordType: "adjective", definition: "doing a lot of physical movement or exercise", example: "It is important to stay active as you get older." },
    ],
    pronunciation: [
      { word: "exercise", ipa: "/EK-ser-syz/", syllables: "ex-er-cise", tip: "Stress EK. Three syllables." },
      { word: "muscle", ipa: "/MUS-ul/", syllables: "mus-cle", tip: "The 'c' is silent — say MUS-ul." },
      { word: "equipment", ipa: "/ih-KWIP-munt/", syllables: "e-quip-ment", tip: "Stress KWIP." },
      { word: "strengthen", ipa: "/STRENG-thun/", syllables: "strength-en", tip: "Stress STRENG. The 'g' is nearly silent." },
      { word: "endorphin", ipa: "/en-DOR-fin/", syllables: "en-dor-phin", tip: "Stress DOR. The 'ph' sounds like 'f'." },
      { word: "moderate", ipa: "/MOD-er-it/", syllables: "mod-er-ate", tip: "Stress MOD. As an adjective, the last syllable is weak." },
      { word: "confidence", ipa: "/KON-fuh-dens/", syllables: "con-fi-dence", tip: "Stress KON." },
    ],
  },
  {
    id: "b9",
    slug: "technology-in-daily-life",
    title: "Technology in Daily Life",
    category: "Reading",
    topic: "Technology",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Technology is everywhere today. Phones, computers, and the internet change the way we live, work, and communicate. Learn about the benefits and risks of technology.",
    readingTime: 3,
    content: `
      <p><strong>Technology is a big part of modern life. Almost everyone uses a smartphone, a computer, or the internet every day.</strong></p>

      <h2>Smartphones</h2>
      <p>A smartphone is a mobile phone that can connect to the internet. People use smartphones to make calls, send messages, take photos, watch videos, and use apps. Smartphones help us stay connected with friends and family, even when they are far away.</p>
      <p>Today, most people keep their smartphone close to them all day. Young people often use smartphones for entertainment, social media, and homework research.</p>

      <h2>Computers and the internet</h2>
      <p>Computers are used at school, at work, and at home. People use computers to write documents, create presentations, and send emails. The internet gives us access to a huge amount of information. We can search for answers to questions, read news, watch videos, and shop online.</p>
      <p>The internet also makes it possible to work or study from home. Many teachers now share lessons and homework through online platforms.</p>

      <h2>Benefits of technology</h2>
      <p>Technology makes many tasks faster and easier. We can communicate instantly with people on the other side of the world. We can find information in seconds. We can buy things online without leaving our home. Technology also helps doctors, scientists, and engineers do their work more effectively.</p>

      <h2>Risks of too much technology</h2>
      <p>However, technology also has risks. Spending too much time on screens can hurt your eyes and make you feel tired. Social media can cause anxiety if people compare themselves to others. It is also important to be careful about sharing personal information online.</p>
      <p>A good balance is important. Using technology wisely means turning it off sometimes and spending time outdoors, reading physical books, or talking with people face to face.</p>
    `,
    vocabulary: [
      { word: "smartphone", wordType: "noun", definition: "a mobile phone with internet access and many features", example: "I use my smartphone to check the news every morning." },
      { word: "app", wordType: "noun", definition: "a software programme designed to run on a mobile device", example: "There are apps for learning languages, fitness, and cooking." },
      { word: "connected", wordType: "adjective", definition: "linked to others, especially through the internet or communication", example: "Smartphones help us stay connected with friends." },
      { word: "social media", wordType: "noun phrase", definition: "websites and apps that allow people to share content and communicate", example: "Many young people use social media every day." },
      { word: "document", wordType: "noun", definition: "a written or digital file containing text or information", example: "I saved the document on my computer." },
      { word: "presentation", wordType: "noun", definition: "a talk or display of information, often using slides or visuals", example: "I made a presentation about climate change for my class." },
      { word: "access", wordType: "noun", definition: "the ability to enter, use, or obtain something", example: "The internet gives us access to information." },
      { word: "platform", wordType: "noun", definition: "an online system or app used for a specific purpose", example: "Teachers share lessons through online platforms." },
      { word: "instantly", wordType: "adverb", definition: "immediately, without any delay", example: "We can communicate instantly with people around the world." },
      { word: "effectively", wordType: "adverb", definition: "in a way that produces good results", example: "Technology helps doctors work more effectively." },
      { word: "screen", wordType: "noun", definition: "the flat surface of a device such as a phone, computer, or television", example: "Spending too long looking at a screen can hurt your eyes." },
      { word: "anxiety", wordType: "noun", definition: "a feeling of worry and fear about what might happen", example: "Social media can cause anxiety in some young people." },
      { word: "compare", wordType: "verb", definition: "to look at two or more things to see how they are similar or different", example: "Some people feel sad when they compare their life to others online." },
      { word: "personal information", wordType: "noun phrase", definition: "details about yourself such as your name, address, or passwords", example: "Be careful not to share personal information online." },
      { word: "balance", wordType: "noun", definition: "having the right amount of different things so that nothing is too much or too little", example: "A good balance between screen time and outdoor activities is important." },
    ],
    pronunciation: [
      { word: "smartphone", ipa: "/SMART-fohn/", syllables: "smart-phone", tip: "Stress SMART." },
      { word: "internet", ipa: "/IN-ter-net/", syllables: "in-ter-net", tip: "Stress IN. Three syllables." },
      { word: "presentation", ipa: "/prez-en-TAY-shun/", syllables: "pres-en-ta-tion", tip: "Stress TAY." },
      { word: "instantly", ipa: "/IN-stunt-lee/", syllables: "in-stant-ly", tip: "Stress IN." },
      { word: "anxiety", ipa: "/ang-ZY-uh-tee/", syllables: "anx-i-e-ty", tip: "Stress ZY. Four syllables." },
      { word: "effectively", ipa: "/ih-FEK-tiv-lee/", syllables: "ef-fec-tive-ly", tip: "Stress FEK." },
    ],
  },
  {
    id: "b10",
    slug: "city-life-and-country-life",
    title: "City Life and Country Life",
    category: "Reading",
    topic: "Society",
    difficulty: "Beginner",
    coverImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
    date: "2025-06-01",
    description: "Some people love living in cities. Others prefer the quiet of the countryside. What are the good and bad things about each? Read and decide which is better for you.",
    readingTime: 3,
    content: `
      <p><strong>Many people must choose between living in a city or in the countryside. Both have advantages and disadvantages. The best choice depends on your lifestyle and preferences.</strong></p>

      <h2>Life in the city</h2>
      <p>Cities are large, busy places with many people. They have shops, restaurants, cinemas, hospitals, universities, and many other facilities. Most jobs are in cities, so people move there to find work. Public transport — such as buses, trams, and underground trains — makes it easy to travel around.</p>
      <p>However, city life also has problems. Cities can be noisy, crowded, and polluted. Housing is expensive. Traffic can be very heavy. Some people feel lonely because they do not know their neighbours.</p>

      <h2>Life in the countryside</h2>
      <p>The countryside is quieter and more peaceful than the city. There is less traffic and cleaner air. People often know their neighbours and feel part of a community. Children can play outside safely.</p>
      <p>Nature is all around you in the countryside. You can see fields, forests, rivers, and wildlife. Many people find that living near nature is good for their mental health.</p>

      <h2>Disadvantages of the countryside</h2>
      <p>However, the countryside also has disadvantages. There are fewer job opportunities. Shops, hospitals, and schools may be far away. Public transport is usually limited, so people need a car. Young people sometimes feel bored because there is less entertainment available.</p>

      <h2>Which is better?</h2>
      <p>There is no single right answer. Some people love the excitement and opportunities of the city. Others prefer the peace and natural beauty of the countryside. Many people choose to live in small towns that are between the two extremes — not as busy as a big city, but not as isolated as a remote village.</p>
    `,
    vocabulary: [
      { word: "advantage", wordType: "noun", definition: "something that helps you or makes a situation better", example: "One advantage of city life is having many job opportunities." },
      { word: "disadvantage", wordType: "noun", definition: "something that makes a situation more difficult or less good", example: "A disadvantage of the city is noise and pollution." },
      { word: "preference", wordType: "noun", definition: "liking one thing more than another", example: "Your preference for city or country life depends on your lifestyle." },
      { word: "facility", wordType: "noun", definition: "a building, service, or piece of equipment available for a particular purpose", example: "Cities have many facilities such as hospitals and universities." },
      { word: "public transport", wordType: "noun phrase", definition: "buses, trains, trams and other vehicles available for everyone to use", example: "Public transport in the city is fast and frequent." },
      { word: "polluted", wordType: "adjective", definition: "containing harmful substances that damage the environment", example: "City air can be polluted from traffic and factories." },
      { word: "crowded", wordType: "adjective", definition: "having too many people or things in a small space", example: "The city centre is very crowded on weekends." },
      { word: "community", wordType: "noun", definition: "a group of people who live in the same area or share the same interests", example: "In the countryside, people often feel part of a close community." },
      { word: "wildlife", wordType: "noun", definition: "wild animals and plants that live in natural environments", example: "The countryside is full of wildlife." },
      { word: "opportunity", wordType: "noun", definition: "a chance to do something useful or enjoyable", example: "There are fewer job opportunities in rural areas." },
      { word: "limited", wordType: "adjective", definition: "small in number or amount; not having much of something", example: "Public transport in the countryside is very limited." },
      { word: "entertainment", wordType: "noun", definition: "activities that people enjoy in their free time", example: "Cities offer more entertainment, such as cinemas and concerts." },
      { word: "isolated", wordType: "adjective", definition: "far from other people, places, or services; lonely", example: "Small villages can feel isolated in winter." },
      { word: "remote", wordType: "adjective", definition: "far away from towns and cities", example: "Some remote villages have no internet connection." },
      { word: "extreme", wordType: "noun", definition: "something at the very end of a range or scale", example: "A small town is between the two extremes of a city and a village." },
    ],
    pronunciation: [
      { word: "advantage", ipa: "/ud-VAN-tij/", syllables: "ad-van-tage", tip: "Stress VAN." },
      { word: "disadvantage", ipa: "/dis-ud-VAN-tij/", syllables: "dis-ad-van-tage", tip: "Stress VAN." },
      { word: "preference", ipa: "/PREF-er-ents/", syllables: "pref-er-ence", tip: "Stress PREF. Three syllables." },
      { word: "facility", ipa: "/fuh-SIL-uh-tee/", syllables: "fa-cil-i-ty", tip: "Stress SIL." },
      { word: "community", ipa: "/kuh-MYOO-nuh-tee/", syllables: "com-mu-ni-ty", tip: "Stress MYOO." },
      { word: "opportunity", ipa: "/op-er-TYOO-nuh-tee/", syllables: "op-por-tu-ni-ty", tip: "Stress TYOO." },
      { word: "entertainment", ipa: "/en-ter-TAYN-munt/", syllables: "en-ter-tain-ment", tip: "Stress TAYN." },
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
