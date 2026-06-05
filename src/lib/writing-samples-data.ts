export interface WritingSample {
  id: string;
  reportNumber: number;
  task: 1 | 2;
  chartType: string;
  question: string;
  wordCount: number;
  content: string;
  vocabulary: { word: string; definition: string }[];
  coverImage?: string;
}

export const WRITING_SAMPLES: WritingSample[] = [
  {
    id: "t1-1",
    reportNumber: 1,
    task: 1,
    chartType: "Bar Chart",
    question: "The bar chart shows the number of homes, each worth 5 million US dollars or more, sold in eight cities.",
    wordCount: 288,
    coverImage: "/writing-samples/report-1.jpeg",
    content: `<p>The bar chart compares the volume of 5-million-worth accommodation in eight cities - Dubai, Singapore, Sydney, Los Angeles, Miami, Hong Kong, New York, and lastly London in the years 2009 and 2014. As can be seen, London was home to the most marked number of luxury properties consistently, while registering the highest increase, whereas the smallest number of such houses were in Dubai out of the mentioned cities. Strikingly, there was a general upward trend in the amount of multi-million dollar houses across all cities, with the sole exception of Singapore.</p>
<p>The gains were not equal between categories. London topped the ranking of the cities with the largest number of expensive houses, accounting for 600 in 2009 and a hefty 1600 in 2014. Followed by was New York, as it housed around 500 houses in 2009, which saw an increase of 150 in 2014; meanwhile, the result of Hong Kong came in third - nearly 400 and 600 properties between 2009 and 2014 respectively. Miami exhibited relatively negligible surge in the number of luxury houses, increasing from around 250 to 300 during the period.</p>
<p>The remaining countries were responsible for under or around 200 houses worth 5 million US dollars. The figure for LA, while starting at around 190 in 2009, rose to just over 200 until 2014. Sydney accommodated 180 5-million-worth houses in 2009, the result of which reached approximately 230 in 2014, ahead of LA. A stark different trajectory appeared in the index of Singapore, the number of expensive houses in this country went down from 100 to around 80 from 2009 to 2014. Dubai not only registered the smallest change, which was from around 10 to 40, but also the least number of such houses.</p>`,
    vocabulary: [
      { word: "compares", definition: "shows similarities and differences between two or more items" },
      { word: "as can be seen", definition: "used to introduce the main visible trend" },
      { word: "general upward trend", definition: "a pattern in which figures generally increase" },
      { word: "upward trend", definition: "a general increase over time" },
      { word: "most marked", definition: "the clearest or most noticeable" },
      { word: "followed by", definition: "coming after another category in rank or sequence" },
      { word: "topped the ranking", definition: "ranked first among all categories" },
      { word: "rose to", definition: "increased until reaching a particular point" },
      { word: "exhibited relatively negligible", definition: "used to describe a very small, barely noticeable change" },
      { word: "different trajectory appeared", definition: "used to describe a clearly different pattern of change" },
    ],
  },
  {
    id: "t1-2",
    reportNumber: 2,
    task: 1,
    chartType: "Bar Chart",
    question: "The graph below shows the amount of tea and coffee imported by four different countries.",
    wordCount: 218,
    coverImage: "/writing-samples/report-2.jpeg",
    content: `<p>The report examines differences in the import of tea and coffee, in tonnes, in Canada, The USA, The UK, and lastly Germany. Focusing on the import levels of tea, The UK is reported to be the leading importer of this drink, importing as much as 80,000 tonnes. Germany imports two times less than this figure, albeit following in second. The import volume of the product is on par in Canada and The US, accounting for 20,000 tonnes.</p>
<p>However, a completely different scenario emerges in terms of coffee import rates. Germany takes the lead in this regard, reporting 50,000 tonnes of coffee import, while The US also exhibits a noticeable increase to 40,000 tonnes, ranking second. Meanwhile, Canada comes in fourth, with a margin of 1,000 tonnes compared to the former country. At the end of the scale is the figure for The UK, the import rate of which was responsible for 30,000 tonnes.</p>
<p>In summary, it is evident that The UK heavily focuses on tea imports as opposed to the other three, for which coffee is the main import item. Germany demonstrates relatively greater amounts of coffee import in comparison, whereas there is a correlation regarding import levels of both tea and coffee between Canada and The USA.</p>`,
    vocabulary: [
      { word: "in tonnes", definition: "measured by the unit of weight called tonnes" },
      { word: "import levels", definition: "the amount of goods brought into a country" },
      { word: "takes the lead", definition: "becomes the highest or most important figure" },
      { word: "comes in fourth", definition: "ranks in fourth position" },
      { word: "at the end of the scale", definition: "at the lowest position in a ranking" },
      { word: "in summary", definition: "used to introduce the main overall conclusion" },
      { word: "exhibits noticeable increase", definition: "shows a clearly visible rise in figures" },
      { word: "demonstrates relatively greater", definition: "shows a comparatively larger amount" },
      { word: "demonstrates relatively", definition: "shows something by comparison with others" },
      { word: "correlation regarding import", definition: "a linked pattern between two import figures" },
    ],
  },
  {
    id: "t1-3",
    reportNumber: 3,
    task: 1,
    chartType: "Mixed (Pie + Bar)",
    question: "The pie and bar charts below show the percentage of water consumption and use in Australia in 2004.",
    wordCount: 208,
    coverImage: "/writing-samples/report-3.jpeg",
    content: `<p>The report compares the percentage terms of main water consumers in Australia in the pie chart and areas of residential water use in 2004 in the bar chart. As can be seen, residents consumed the most significant part of the total water consumption, followed by industries, businesses, the government and other undefined sectors. The garden tops the ranking of the residential water usage, whereas the kitchen makes up the smallest percentage of consumption.</p>
<p>Residents were the leading utilizers of water in the country, making up a hefty 70%. Of these, 50% accounted for the share of houses, while apartments were responsible for 20%. The share of industrial and business water usage were somewhat similar (11% vs 10%). Six percentage points less was the share of the government, whilst at the bottom of the list stood the share of other unspecified consumers, constituting 3%.</p>
<p>Moving on, water consumption in residential areas was directed to five areas, with the garden making up the highest percentage at 28%. The percentage of bathrooms followed in a close second, at 27%. Residents used 20% of the total water for the laundry, while 15% was used in the toilet. The least percentage of water was utilized in the kitchen, accounting for 10%.</p>`,
    vocabulary: [
      { word: "compares", definition: "shows similarities and differences between two or more items" },
      { word: "percentage terms", definition: "figures expressed as percentages rather than raw numbers" },
      { word: "as can be seen", definition: "used to introduce the main visible trend" },
      { word: "close second", definition: "nearly the highest, but still in second place" },
      { word: "followed by", definition: "coming after another category in rank or sequence" },
      { word: "at the bottom of the list", definition: "in the lowest position" },
      { word: "water consumption", definition: "the amount of water used" },
      { word: "residential areas", definition: "areas where people live" },
      { word: "accounted for", definition: "represented a particular amount or percentage" },
      { word: "constituting", definition: "forming or making up" },
    ],
  },
  {
    id: "t1-4",
    reportNumber: 4,
    task: 1,
    chartType: "Line Graph",
    question: "The graph below shows the amount of time taken to produce a vehicle by four US-based car manufacturers in the years 1998 to 2002.",
    wordCount: 321,
    coverImage: "/writing-samples/report-4.jpeg",
    content: `<p>The report outlines changes in the number of hours required to manufacture a vehicle across four car-producing companies in the USA - Nissan, General Motors, Ford, and lastly DC from 1998 to 2002. Overall, the car manufacturing sector saw a great deal of efficiency in terms of the hours needed to produce vehicles amongst all car manufacturers, except for DC, albeit at varying degrees over the years. Notably, it was Nissan that represented the most marked decline, whereas relatively moderate changes were shown by Ford and General Motors. By the end of the period, Ford stood out as the manufacturer requiring the most hours of production.</p>
<p>The most significant downward trend was shown by General Motors during the period, which started at the top spot in 1998, requiring as much as nearly 37 hours. However, this figure had plummeted drastically by 2000, reaching 24 hours, followed by a further decrease to 22 hours. In 2002, General Motors produced a vehicle in less than 20 hours.</p>
<p>Meanwhile, the figures for DC and Nissan, starting in second and third respectively, saw reductions not as noticeable as General Motors. DC took 34 hours to manufacture a car in 1998, which then showed a decrease of 2 hours in 2000 before remaining stable until 2001. There was again a drop to 30 hours by DC in 2002. In contrast, the trend for Nissan followed a rather straight trajectory, showing an interval-on-interval decline of 2 hours from 1998 to 2002, going down from 32 hours to 24 hours.</p>
<p>Surprisingly, the production of Ford vehicles rose at a gradual degree. It took off at about 23 hours in 1998, and then increased negligibly to 25 hours until 2000. The manufacturer then went up to 26 hours in 2001, after which the number of hours revised downwards to 24 hours in the end.</p>`,
    vocabulary: [
      { word: "outlines changes", definition: "describes how figures changed over time" },
      { word: "overall", definition: "used to give the main trend or summary" },
      { word: "downward trend", definition: "a general decrease over time" },
      { word: "most marked", definition: "the clearest or most noticeable" },
      { word: "followed by", definition: "coming after another category in rank or sequence" },
      { word: "at the top", definition: "in the highest position" },
      { word: "plummeted drastically", definition: "fell very sharply" },
      { word: "whereas relatively moderate", definition: "used to contrast one pattern with a less extreme one" },
      { word: "significant downward trend", definition: "a very clear and large overall decrease" },
      { word: "relatively moderate changes", definition: "changes that are not dramatic or extreme" },
    ],
  },
  {
    id: "t1-5",
    reportNumber: 5,
    task: 1,
    chartType: "Line Chart",
    question: "The chart below gives information about computer ownership in the US from 1997 to 2012.",
    wordCount: 272,
    coverImage: "/writing-samples/report-5.jpeg",
    content: `<p>The report provides an insight into changes in the percentage of computer ownership in the U.S between 1997 and 2012, comparing percentages of those who owned no computer, 1, 2 and 3 or more computers. As can be seen, the country enjoyed a general upward trend in the percentage of those possessing the device during the period. The most notable increase was observed in the figure for those owning a single device, topping the list as well, whereas the percentage of individuals with 3 or more computers remained at the bottom of the list with the least marked increase over the years.</p>
<p>The computer ownership became more prevalent in the country from 1997 to 2012. Having started at nearly 30% in 1997, the figure for people with a single device rose by 20 percentage points in 2003. However, this figure was down 5 percentage points in 2006 before recovering to 50% in 2012, eventually finishing the period at the top. Despite a relatively moderate growth, owning two computers appeared as the second most popular type of ownership by 2012 at just above 20% — this was up nearly 12 percentage points from 1997. Likewise, the figure for owning 3 computers and more registered an increase to 10% until 2012, which started at a trough of 1% in 1997.</p>
<p>Due to the general surge in the index of ownership, there was a drastic decline in the proportion of the 'no computer' category. After starting at 70% in 1997, the figure dropped gradually to around 35% until 2003. From then on, it recorded a slow reduction of 15 percentage points until 2012.</p>`,
    vocabulary: [
      { word: "as can be seen", definition: "used to introduce the main visible trend" },
      { word: "general upward trend", definition: "a pattern in which figures generally increase" },
      { word: "upward trend", definition: "a general increase over time" },
      { word: "at the top", definition: "in the highest position" },
      { word: "at the bottom of the list", definition: "in the lowest position" },
      { word: "rose by", definition: "increased by a particular amount" },
      { word: "drastic decline", definition: "a very large fall" },
      { word: "moderate growth", definition: "a medium-sized increase" },
      { word: "relatively moderate growth", definition: "an increase that is not dramatic or extreme" },
      { word: "relatively moderate", definition: "not very large or small; in between" },
    ],
  },
  {
    id: "t1-6",
    reportNumber: 6,
    task: 1,
    chartType: "Table",
    question: "The table shows the number of universities ranked top 200 in the world (2011) in three subjects in five countries.",
    wordCount: 229,
    coverImage: "/writing-samples/report-6.jpeg",
    content: `<p>The table illustrates how many universities from five countries featured in the global top 200 rankings across three academic disciplines — Biology, Medicine, and Psychology — in 2011. Overall, the USA dominated all three subject areas by a considerable margin, followed distantly by the UK. The remaining three countries — Australia, Canada, and New Zealand — recorded substantially lower figures across the board, with New Zealand consistently placing last.</p>
<p>The USA and The UK exhibited the greatest number of top-ranking universities. Biology was the most renowned area in these countries, with the former accounting for 69 institutions — almost twice as many as the result of the latter. Psychology was another popular field in these countries, with The USA accounting for 58 world-leading institutions and The UK for 29, while Medicine figures ranked third, where the result of the USA was responsible for 54 — 30 more universities than in The UK.</p>
<p>The remaining countries showed notably fewer numbers. Australia came in third place in the ranking, with 9 in Biology, 13 in Medicine, and 17 in Psychology. In the fourth place was Canada, with an identical number of world-class institutions in Biology as Australia, 12 in Medicine, and 14 in Psychology. At the lower end of the spectrum was New Zealand, which numbered a mere 2 universities in Medicine, 4 in Psychology, and 6 in Biology.</p>`,
    vocabulary: [
      { word: "overall", definition: "used to give the main trend or summary" },
      { word: "considerable margin", definition: "a large difference between two figures" },
      { word: "at the lower end of the spectrum", definition: "among the smallest or lowest results" },
      { word: "featured in", definition: "appeared or was included in a list or ranking" },
      { word: "global top 200 rankings", definition: "a worldwide list of the best 200 institutions" },
      { word: "academic disciplines", definition: "fields of study at university level" },
      { word: "world-leading institutions", definition: "universities or organizations among the best in the world" },
      { word: "across the board", definition: "in every category or area" },
      { word: "top-ranking universities", definition: "universities that appear among the highest in world rankings" },
      { word: "dominated all three subject areas", definition: "was clearly the leader in every subject category" },
    ],
  },
  {
    id: "t1-7",
    reportNumber: 7,
    task: 1,
    chartType: "Bar Chart",
    question: "The bar chart shows tourists from 5 different countries using 4 types of vehicles: cars, air, coach, ferry.",
    wordCount: 317,
    coverImage: "/writing-samples/report-7.jpeg",
    content: `<p>The bar chart compares the percentage terms of travellers from Britain, Germany, Japan, Korea, and Australia utilizing modes of transport — planes, coaches, cars, and ferries. In general, preferences among nations are quite varying, although there seems to be a notable preference toward cars among all nations, except Japan whose residents primarily rely on planes for their travels. For Japanese, Korean, and Australian tourists, the least opted means of transport is a ferry, whereas it is a coach that proves to be of lesser popularity among British and German travellers.</p>
<p>Focusing on countries in the order of the chart, 60% of tourists from Britain cite cars as their top option, followed by an identical share of those who prefer planes and coaches (35%). Those who choose ferries as their means of transport make up 20%. Among German travellers, cars bear more popularity, accounting for just above 50% — around 5 more percentage points than those who use ferries. The percentage of planes follows with a considerable margin at 25%, while the result of coaches constitutes 20%.</p>
<p>Japanese tourists appear to enjoy air travel, as nearly 55% of them prefer planes. This is up 5 percentage points compared to the proportion of coach users, whilst cars are opted by about 25% of total tourists. At the end of the scale is the result of ferries, accounting for a meagre 10%. In contrast, the majority of travellers from Korea favour using cars, with 50%. Coaches place second in terms of popularity at 40%, while cars follow in third at 35% respectively. Ferries, like the former country, are the least popular means of travel among Koreans, recording around 9%.</p>
<p>In comparison, cars are the near-dominant means of transport among Australians at 45%, with a significant margin compared to other modes of travel. The percentage of those using ferries makes up 25%, while that of planes and coaches averages around 10%.</p>`,
    vocabulary: [
      { word: "compares", definition: "shows similarities and differences between two or more items" },
      { word: "percentage terms", definition: "figures expressed as percentages rather than raw numbers" },
      { word: "at the end of the scale", definition: "at the lowest position in a ranking" },
      { word: "in general", definition: "used to summarize the overall pattern" },
      { word: "notable preference", definition: "a clear choice or liking for something" },
      { word: "considerable margin", definition: "a large difference between two figures" },
      { word: "significant margin", definition: "an important or noticeable difference" },
      { word: "followed by", definition: "coming after another category in rank or sequence" },
      { word: "least popular", definition: "chosen or used by the smallest number of people" },
      { word: "constitute", definition: "to form or make up a part of a whole" },
    ],
  },
  {
    id: "t1-8",
    reportNumber: 8,
    task: 1,
    chartType: "Mixed Charts",
    question: "The charts below give information about the price of tickets on one airline between Sydney and Melbourne, Australia, over a two-week period in 2013.",
    wordCount: 267,
    coverImage: "/writing-samples/report-8.jpeg",
    content: `<p>The report provides data regarding ticket price changes, in US dollars, between Sydney and Melbourne, Australia, over a period of two weeks in the year 2013. In general, the disparity of airfares in both routes was not dramatic. On weekdays, particularly on Tuesday, Wednesday, and Thursday, booking prices were relatively cheaper as opposed to Friday, when the price, regardless of the period and the route, was significantly expensive.</p>
<p>Focusing on the flight fee from Sydney to Melbourne, the price stood at 80 dollars in the first week, which was up 40 dollars compared to the second week. Between Tuesday and Thursday, the flight cost remained unchanged over two weeks, hovering around 30 dollars, while the first-week price started to shoot up to around 75 dollars on Friday, and then dipped slightly by 5 dollars on Saturday before further declining to 50 dollars — a price that did not show any changes in the second week.</p>
<p>There was a similar trend in the return fare from Melbourne to Sydney. Monday flight fare was moderately cheaper in this route, at 60 dollars in the first week. This price was down 20 dollars the next week. The price was stable at about 35 dollars in both weeks from Tuesday to Thursday, the result of which only peaked at 80 dollars in week 1. However, this showed a decline of nearly 20 dollars in week 2, whereas the flight fare was comparatively higher in the first week on Saturday than in the following week (60 vs 50 dollars). Notably, the Sunday price was identical in both weeks, at 50 dollars.</p>`,
    vocabulary: [
      { word: "provides data regarding", definition: "gives numerical information about a subject" },
      { word: "in general", definition: "used to summarize the overall pattern" },
      { word: "remained unchanged", definition: "did not change" },
      { word: "dipped slightly", definition: "decreased by a small amount" },
      { word: "significantly expensive", definition: "costing notably more than usual" },
      { word: "was moderately cheaper", definition: "cost a medium amount less than another" },
      { word: "was moderately", definition: "to a medium or average degree" },
      { word: "hovering around", definition: "staying close to a particular number without much change" },
      { word: "peaked at", definition: "reached its highest point at a particular value" },
      { word: "remained unchanged over", definition: "stayed the same across a period of time" },
    ],
  },
  {
    id: "t1-9",
    reportNumber: 9,
    task: 1,
    chartType: "Map/Plan",
    question: "The plans below show the South Wing of Walton Museum in 2008 and in 2012 after it was redeveloped.",
    wordCount: 242,
    coverImage: "/writing-samples/report-9.jpeg",
    content: `<p>The pictures illustrate the redevelopment of the South Wing of Walton Museum from 2008 to 2012. As can be seen, the traditional layout of the museum transformed profoundly, experiencing a number of significant alterations — an addition of a restaurant, a children's playground, a self-service room, and a brand-new exhibition room. These changes resulted in the museum appearing with more floors, while a lift made it more visitor-friendly.</p>
<p>Prior to the transformation, access was through a path directly leading to a reception, after which was a reading room on the first floor. On the ground floor, there was a special exhibition room — under the entrance — which was accessible through a shop, while in the bottom-left corner lay a cloakroom. Further, stairs joined both floors.</p>
<p>After the redevelopment in 2012, visitors could access the museum through an entrance hall, which was located in the former entrance road, above which was a newly-built open terrace. The reception also accommodated a cloakroom within itself, and a restaurant was constructed on top of it. The other two facilities on the ground floor had remained intact, although stairs were removed to make way for a newly installed lift. A construction of a playground for children resulted in the relocation of a cloakroom on the left at the bottom, whereas a self-service room and an additional exhibition room emerged on the third and fourth floors above the reading room respectively.</p>`,
    vocabulary: [
      { word: "as can be seen", definition: "used to introduce the main visible trend" },
      { word: "redevelopment", definition: "the process of changing and improving a place" },
      { word: "significant alterations", definition: "important changes" },
      { word: "newly-built", definition: "recently constructed" },
      { word: "visitor-friendly", definition: "easy and convenient for visitors to use" },
      { word: "remained intact", definition: "stayed unchanged or undamaged" },
      { word: "make way for", definition: "remove something so that another thing can be built or placed" },
      { word: "alterations", definition: "changes" },
      { word: "transformed profoundly", definition: "changed in a deep and fundamental way" },
      { word: "prior to", definition: "before a particular time or event" },
    ],
  },
  {
    id: "t1-10",
    reportNumber: 10,
    task: 1,
    chartType: "Line Graph",
    question: "The first graph gives the number of passengers travelling by train in Sydney. The second graph provides information on the percentage of trains running on time (1995–2004).",
    wordCount: 221,
    coverImage: "/writing-samples/report-10.jpeg",
    content: `<p>The line graphs illustrate data regarding how many passengers, in millions, used trains in Sydney, along with the percentage of trains running on time from 1995 to 2004. Overall, there was a considerable increase in the number of rail commuters during the period, with the all-time figure observed in 2001. Meanwhile, punctual train services were rather erratic for most of the years, eventually plummeting by the end of the period.</p>
<p>More travellers used trains in the city in 2004 than in 1995, when 250 million commuters were registered. This figure slowly climbed to nearly 270 million in 1999, followed by a marked growth of 50 million commuters in 2001 — the all-time-high result in the graph. From then on, the figure for rail commuters dropped to 280 million, and it then remained stable until 2004.</p>
<p>In comparison, the percentage of trains operating on schedule exhibited notable changes. In 1995, the proportion of punctual trains accounted for around 93%, but this was followed by a drastic decline of 13 percentage points in 1997. However, the figure then recovered to its initial point by 1999, whereas a further decrease was recorded in 2000, down to 85%. There was again a surge in the percentage of trains operating on time to nearly 95% until 2002, before dipping markedly to almost 70% in 2004.</p>`,
    vocabulary: [
      { word: "overall", definition: "used to give the main trend or summary" },
      { word: "followed by", definition: "coming after another category in rank or sequence" },
      { word: "all-time-high", definition: "the highest point recorded in the period" },
      { word: "all-time figure", definition: "the highest or most important recorded figure" },
      { word: "remained stable", definition: "stayed almost the same without major change" },
      { word: "climbed to", definition: "increased gradually to a point" },
      { word: "dropped to", definition: "decreased until reaching a particular point" },
      { word: "drastic decline", definition: "a very large fall" },
      { word: "marked growth", definition: "a clear and noticeable increase" },
      { word: "considerable increase", definition: "a large rise" },
    ],
  },
  {
    id: "t1-11",
    reportNumber: 11,
    task: 1,
    chartType: "Bar Chart",
    question: "The bar chart shows the average prices per kilometre of clothing imported into the European Union from six different countries in 1997 and 2003.",
    wordCount: 252,
    coverImage: "/writing-samples/report-11.jpeg",
    content: `<p>The bar chart compares the average cost, in pounds per kilometre, of clothing exported from 6 countries — Argentina, Brazil, Japan, China, India, and Bangladesh — to the European Union in the years 1997 and 2003. Overall, Argentina recorded the highest clothing export prices throughout the period, whereas Bangladesh's clothing was the most affordable. Strikingly, there was a downward trend in the price of clothing from Argentina and Japan over the years, whilst China, India, and Bangladesh registered the reverse trend. In contrast, the figure for Brazil remained stable over the period.</p>
<p>Focusing on countries with the greatest export prices, Argentina topped the list as the price of one kilometre of clothing averaged at around 28 pounds in 1997, but this was down 3 pounds in 2003. Brazil followed in a close second, with its price staying unchanged at about 23 pounds from 1997 to 2003. The cost of clothing from Japan was the third highest at 15 pounds in 1997, which showed a reduction of 2 pounds in 2003.</p>
<p>With regard to the lower-priced exporters, the price in China, which stood at 10 pounds in fourth place in 1997, climbed to 17 pounds by 2003, leapfrogging Japan to take third place overall. Meanwhile, the figure for India ranked fifth, which surged from approximately 7 pounds to 12 pounds during the period. Bangladesh, though still the most affordable exporter, saw its price more than double — rising from around 3 pounds in 1997 to 7 pounds in 2003.</p>`,
    vocabulary: [
      { word: "compares", definition: "shows similarities and differences between two or more items" },
      { word: "overall", definition: "used to give the main trend or summary" },
      { word: "downward trend", definition: "a general decrease over time" },
      { word: "close second", definition: "nearly the highest, but still in second place" },
      { word: "topped the list", definition: "was in first place" },
      { word: "most affordable", definition: "having the lowest price" },
      { word: "remained stable", definition: "stayed almost the same without major change" },
      { word: "climbed to", definition: "increased gradually to a point" },
      { word: "exported from", definition: "sent from one country to another for sale" },
      { word: "European Union", definition: "a group of European countries that cooperate economically and politically" },
    ],
  },
  {
    id: "t1-12",
    reportNumber: 12,
    task: 1,
    chartType: "Map + Graph",
    question: "The map and graph below show the growth in the physical size and population of the city of Alexandria between 1840 and 1980.",
    wordCount: 215,
    coverImage: "/writing-samples/report-12.jpeg",
    content: `<p>The report examines information about the spatial expansion and the population growth of the city of Alexandria from 1840 to 1980. Overall, Alexandria underwent significant spatial expansion throughout the period, ultimately extending across all coastal areas from the Mediterranean Sea to Lake Marriout. The population demonstrated steady growth across most of the period, though the growth trajectory accelerated notably towards the end of the timeframe, with the most dramatic expansion occurring in the final decades.</p>
<p>With regard to the extension of the city, Alexandria occupied a small cape in the west of the mainland in 1840, covering around 4 km². By 1900, the city had stretched southeastward toward Lake Marriout, which showed additional expansion along the southern coastline and further to the north in 1950. After 30 years, the city, covering 100 km² in total, extended along the banks of Lake Marriout ranging from south-west to south-east.</p>
<p>The city witnessed a marked overall growth of the population over the years, commencing at just 100,000 in 1840. This figure exhibited a negligible increase of 400,000 dwellers until 1920, at which point the population ratio moderately surged to 1 million in 1940. From then on, the figure registered a drastic growth to 3 million in 1980 — the all-time-high result in the chart.</p>`,
    vocabulary: [
      { word: "overall", definition: "used to give the main trend or summary" },
      { word: "all-time-high", definition: "the highest point recorded in the period" },
      { word: "drastic growth", definition: "a very large increase" },
      { word: "negligible increase", definition: "a very small rise that is almost unimportant" },
      { word: "steady growth", definition: "regular and continuous increase" },
      { word: "spatial expansion", definition: "growth in the physical area of a place" },
      { word: "population growth", definition: "an increase in the number of people living somewhere" },
      { word: "growth trajectory", definition: "the direction or pattern of growth" },
      { word: "final decades", definition: "the last ten-year periods in the timeframe" },
      { word: "coastal areas", definition: "areas located near the sea or coast" },
    ],
  },
  {
    id: "t1-13",
    reportNumber: 13,
    task: 1,
    chartType: "Line Graph",
    question: "The line graphs illustrate the value changes in the UK steel industry (1970–2000) in terms of total UK demand, UK production, import, and employment status.",
    wordCount: 256,
    coverImage: "/writing-samples/report-13.jpeg",
    content: `<p>The line graphs illustrate the alterations in the total demand, the production and import rates for the UK steel industry from 1970 to 2000, along with changes in employment levels. In general, domestic demand for steel declined substantially throughout the period, albeit consistently exceeding both production and import volumes. The figure for import underwent a similar trajectory, whereas there was a downward trend in steel manufacturing. Employment in the sector experienced steady contraction over the years.</p>
<p>Examining demand patterns, the UK consumed approximately 200,000 tonnes in 1970, representing the highest consumption level. This was down around 20,000 until 1980, then dropping more steeply to just above 100,000 in 1990. From this point on, it mainly hovered around this figure until 2000.</p>
<p>As for the import rate, around 160,000 tonnes of steel was imported in 1970, which exhibited a drastic decline of 70,000 tonnes by 1990, at which point the figure for import followed a similar trajectory as the former. This contrasts sharply with production levels, which surged noticeably from approximately 10,000 in 1970 to nearly 50,000 in 1980, a result that would remain primarily unchanged until 1990. By 2000, the industry produced more steel than the previous decade, accounting for 80,000 tonnes.</p>
<p>With regard to employment, 50,000 workers were employed in the steel industry in 1970, which dropped by 10,000 workers in 1980. By 1990, the downward trend accelerated and hit 20,000 employees before further going down to about 18,000 in 2000.</p>`,
    vocabulary: [
      { word: "in general", definition: "used to summarize the overall pattern" },
      { word: "downward trend", definition: "a general decrease over time" },
      { word: "declined substantially", definition: "fell by a large amount" },
      { word: "highest consumption level", definition: "the largest amount used or consumed" },
      { word: "hovered around", definition: "stayed near a particular number" },
      { word: "drastic decline", definition: "a very large fall" },
      { word: "steady contraction", definition: "regular and continuous decrease" },
      { word: "alterations", definition: "changes" },
      { word: "domestic demand", definition: "need or desire for a product within the country" },
      { word: "import volumes", definition: "amounts imported" },
    ],
  },
  {
    id: "t1-14",
    reportNumber: 14,
    task: 1,
    chartType: "Pie Chart",
    question: "The charts below show information on residential water use in 1988 and 2008.",
    wordCount: 247,
    coverImage: "/writing-samples/report-14.jpeg",
    content: `<p>The pie charts compare the use of water in residential areas across 5 categories — a bathroom, toilets, washing, a kitchen, and a garden — in the years 1988 and 2008. Overall, the most noticeable share of household water consumption was directed towards the kitchen by 2008, whilst gardening accounted for the smallest share of water usage. Of particular note, there was an upward trend in the figure for kitchen and bathroom water usage, while other categories experienced the opposite trajectory during the period.</p>
<p>In 1988, households utilized 25% of the total water to do the laundry, making it the category with the highest share — 3 percentage points up from the share of bathrooms, which followed in second. The proportion of gardening ranked third, accounting for 20%, with the share of toilets in fourth and kitchen in fifth (18% vs 15%).</p>
<p>By 2008, the share of water used in kitchens was able to exceed that of other categories and place in the first spot at 29%, followed by that in bathrooms with a margin of a mere point. The proportion of washing, having fallen two ranks to third place, made up 22% of the total domestic water demand. Further, households spent 14% of the total water in toilets — coming in fourth — whereas the share of water used in gardens was half of this, lying at the bottom of the list.</p>`,
    vocabulary: [
      { word: "overall", definition: "used to give the main trend or summary" },
      { word: "upward trend", definition: "a general increase over time" },
      { word: "with a margin of", definition: "with a difference of a particular amount" },
      { word: "followed by", definition: "coming after another category in rank or sequence" },
      { word: "at the bottom of the list", definition: "in the lowest position" },
      { word: "water consumption", definition: "the amount of water used" },
      { word: "household water consumption", definition: "water used inside or around homes" },
      { word: "residential areas", definition: "areas where people live" },
      { word: "accounted for", definition: "represented a particular amount or percentage" },
      { word: "made up", definition: "constituted or formed a particular share" },
    ],
  },
  {
    id: "t1-15",
    reportNumber: 15,
    task: 1,
    chartType: "Mixed Charts",
    question: "The charts below show the number of tourists to Australia from three countries in 1995 and 2005, and the types of travels between 1995 and 2005.",
    wordCount: 244,
    coverImage: "/writing-samples/report-15.jpeg",
    content: `<p>The charts present visitor numbers to Australia from three countries — The UK, The USA, and Japan — in 1995 and 2005, along with data on travel preferences between these years. Overall, there was a pronounced growth in visitor numbers from both The UK and The USA over the years, whilst the reverse is true for Japan. Regarding travel types, backpacking numbers — unlike staying at resorts — experienced a downward trend during the period, remaining more popular than staying at resorts though.</p>
<p>With regard to country-specific visitor trends, Japan dominated in 1995 with approximately 1.6 million tourists, substantially exceeding both The UK and The USA. British visitor numbers stood at 0.8 million — 0.35 million higher than American visitors at 0.45 million. By 2005, the situation had reversed notably. A similar number of 1.5 million visitors was recorded by both The UK and The USA, experiencing a drastic increase, while the figure for Japan exhibited the opposite trend, declining to 1 million tourists.</p>
<p>Backpacking was the all-time preferred form of travel from 1995 to 2000. Starting at just above 1.5 million, the trend rose by nearly a million in 2000, representing the peak for this travel type. However, this was followed by a noticeable drop to almost 1 million in 2005. Resort stays, by contrast, showed a steady increase throughout the period, rising from 0.5 million in 1995 to 1 million by 2005. At this point, backpacking and resort stay numbers were identical.</p>`,
    vocabulary: [
      { word: "overall", definition: "used to give the main trend or summary" },
      { word: "downward trend", definition: "a general decrease over time" },
      { word: "followed by", definition: "coming after another category in rank or sequence" },
      { word: "rose by", definition: "increased by a particular amount" },
      { word: "reverse is true", definition: "the opposite situation applies" },
      { word: "travel preferences", definition: "the types of travel or transport people choose" },
      { word: "visitor numbers", definition: "the number of people visiting a place" },
      { word: "pronounced growth", definition: "very clear and noticeable increase" },
      { word: "visitors was recorded", definition: "used when stating the number of visitors counted in a period" },
      { word: "tourists substantially exceeding", definition: "tourists being much greater in number than others" },
    ],
  },

  {
    id: "t1-16",
    reportNumber: 16,
    task: 1 as const,
    chartType: "Process Diagram",
    question: "The diagram below illustrates the process of producing soft cheese.",
    wordCount: 237,
    content: `<p>The report gives information about how soft cheese is produced. In general, there are 5 main stages of the process: combining necessary ingredients (salt, water and milk), cooling, fermentation, evaporation, and lastly cooling again ( but in a relatively larger container and for more period). Notably, the process requires a set of special tools like mixer, heat, and filter, while the cheese slowly turns to solid during stages, all of which occur in storage tanks. The first stage is when water and milk are added together to be blended with a mixer. Then this mixture is left to be cooled down at 5 degrees Celsius for two hours before going to another process, where salt is added to the substance, and it is fermented for 6 hours while mixing and applying heat at 37 degrees temperature. Meanwhile, during fermentation there is steam gathered in the tank, which only is released while liquid is evaporating. During this stage, heat is applied again, but at higher temperature( 100* C) for 8 hours, By that time, it has already started to thicken. The last stage of making soft cheese is quite complicated, where before going to be cooled, waste water is disposed of. Cooling process takes place in a larger tank at 5 degrees Celsius for another 8 hours; at the same time, waster water is over released, and the product is finally ready and has enough thickness for consumption.</p>`,
    vocabulary: [],
  },
  {
    id: "t1-17",
    reportNumber: 17,
    task: 1 as const,
    chartType: "Bar Chart",
    question: "The chart shows the percentage of male and female teachers in six different types of educational setting in the UK in 2010.",
    wordCount: 276,
    content: `<p>The report outlines data regarding proportions of male and female teachers in different types of institutions - Nursery/pre preschool, primary school, secondary school, colleges, private training institutes, and lastly universities - in the UK in the year 2010 in the bar graph. Overall, female teachers were more commonplace in nursery, pre schools and primary schools than male teachers, as the age was an important factor, showing a higher percentage of female teachers for younger students, However, a higher percentage of older students were taught by male teachers, such as the ones in the university. There was, interestingly, a little disparity between the proportions of male and female teachers in institutions like secondary school and private training institutes, whereas the proportion of both genders was identical in colleges.</p>
<p>Turning to details, at the youngest level of education - nursery/pre school, nearly 95% of teachers were females, while a mere 5% of male teachers worked there. A quite similar gap can be observed in primary schools, with an increase in the proportion of male teachers ( 8% males vs 92% females). However, the difference between men and women shrunk significantly in secondary schools (47% and 53%), and there was no difference at all in colleges. Regarding to the remaining educational settings, namely private training institutions and universities, there were more men as teachers than women. In the former educational setting, 55 % of teachers consisted males, and 10 points lower were females, while in the latter these figures accounted for a hefty 70% males and 30 % females - by far the largest percentage of men as teachers in one institution as opposed to other settings. 274 words.</p>`,
    vocabulary: [
      { word: "Proportions", definition: "the percentage or part of a whole" },
      { word: "Institutions", definition: "organized places of learning, like schools or universities" },
      { word: "Commonplace", definition: "happening often; very common" },
      { word: "Disparity", definition: "a noticeable difference between two or more things" },
      { word: "Identical", definition: "exactly the same or equal" },
      { word: "Turning to details", definition: "a linking phrase used to introduce specific information" },
      { word: "A mere", definition: "used to emphasize how small a number or amount is" },
      { word: "Gap", definition: "a difference between two figures or groups" },
      { word: "Shrunk significantly", definition: "became much smaller or less noticeable" },
      { word: "No difference at all", definition: "completely equal in amount or number" },
    ],
  },
  {
    id: "t1-18",
    reportNumber: 18,
    task: 1 as const,
    chartType: "Bar Chart",
    question: "The diagrams below show the main reasons workers chose to work from home and the hours males and females worked at home for the year 2019.",
    wordCount: 288,
    content: `<p>The report compares the percentage terms of hours of telecommuting among men and women in the table, while the bar graph shows the main reasons to prefer this type of work setting in 2019. Generally speaking, out of three reasons mentioned, the most popular one was saving money for both genders, where there was only 3% disparity between men and women.</p>
<p>In contrast, this gap further rose when it came to easier childcare, with more women reporting it as a motive than men. The majority of men worked for over 30 hours, while women worked remotely mostly under 10 hours. Regarding results of why people chose the remote work, the most reported response was to save money among both sexes, with males accounting for a high of 43% and women 3 points lower, at 40%. Productiveness was another popular reason, where the percentage of males still exceeded that of women(25% vs 10%). However, the gap among results widened significantly, when easier childcare was in the question. This time nearly 28% of women reported it as a reason to work remotely, making it noticeably higher than that of men, which constituted a meager 5%.</p>
<p>As for the number of hours worked, 74% of all women spend under 10 hours working from home, while only 3% of men opted to do the same. working for 10 to 30 hours is the category where the difference is not as huge, yet the proportion of women was higher than men ( 16% of men vs 22% of women).However, 81% of men worked remotely, whereas mere 6% of women did the same — it is evident that in 2019 telecommuting was highly opted among men than females as the main mean of work.</p>`,
    vocabulary: [
      { word: "g., office, home, factory) disparity between", definition: "a noticeable difference or inequality between two things motive – a reason or purpose for doing something worked remotely – performed one’s job from outside the main office main motive – the most significant or dominant reason behind an action the mo" },
    ],
  },
  {
    id: "t1-19",
    reportNumber: 19,
    task: 1 as const,
    chartType: "Bar Chart",
    question: "Provide an overview of the information by identifying and describing the key details, and include comparisons where appropriate.",
    wordCount: 279,
    content: `<p>🆕 The report outlines percentage terms of the internet usage of adults in group ranging from 16-24, 25-44, 45-54, 55-64, and lastly 65+ between 2003 and 2006 in the bar graph. Generally speaking, the figures for adults of all generations increasingly rose, reflecting a universal expansion in internet adoption, where the youngest group representing the largest percentage of internet users over the period in the question. Older demographics, on the other hand, accessed the internet less frequently compared to other age brackets. Starting with the youngest internet users, their proportions accounted for the all-time-high results throughout the time frame, the result of which in the first years was stable at 80%. It then surged to 100%, marking the chart-peak proportion in 2005 before declining to 90% the next year. Similarly, the internet use of adults at the age of 25-44 and 45-54 experienced a sustained growth from 2003 to 2006. The former commenced at 45% and ended the period at 80%, while the initial point of latter was higher at 60% and hit 80% in 2006, converging with that of the former, and both came a close second in terms of the percent of the internet users. Another increase over these years was observed in the demographic group aged 55-64 years, which rather fluctuated over the first years( 2003-2005) at around 30% and then significantly jumped to 50% — a group with the third most user percentage.</p>
<p>In comparison, the eldest group( adults over 65 years) lagged far behind in terms of the internet usage, with registering the least marked result. It plateaued between 2003 to 2005 and barely exceeded one-fifth of the total internet user proportions in 2006.</p>`,
    vocabulary: [
      { word: "Reflecting a universal expansion in internet adoption", definition: "showing a widespread increase in internet use" },
      { word: "Representing the largest percentage of internet users", definition: "having the highest share among all groups" },
      { word: "Used the internet less frequently", definition: "accessed or engaged with the internet less often" },
      { word: "Accounted for the all-time-high results", definition: "made up the highest figures ever recorded" },
      { word: "Surged to 100%", definition: "rapidly increased to the maximum level" },
      { word: "Marking the chart peak proportion", definition: "reaching the topmost percentage shown in the graph" },
      { word: "Experienced a sustained growth", definition: "showed a steady and continuous increase" },
      { word: "Ended the period at...", definition: "finished the time frame with a specific percentage" },
      { word: "Converging with that of the former", definition: "becoming equal or similar to the earlier group’s result" },
      { word: "Fluctuated over the first years", definition: "varied up and down during the early part of the period" },
    ],
  },
  {
    id: "t1-20",
    reportNumber: 20,
    task: 1 as const,
    chartType: "Table",
    question: "The table below provides data on the number of temporary migrant workers in four countries for 2003 and 2006, along with the number of such workers per 1,000 people in 2006.",
    wordCount: 292,
    content: `<p>The report gives information about the volume of temporary migrant workers in countries: Australia, New Zealand, United Kingdom, and United States in the years 2003 and 2006, and the number of such workers per 1 000 people in 2006 in the table. As can be seen, there was a universal growth in the number of migrant workers on short-term contracts across all countries, where by far the largest rise was seen in United Kingdom. It was United states that hosted the most significant number of migrant workers, whereas New Zealand, albeit being least migrant-friendly country, reported the highest ratio of workers per 1000 inhabitants. In 2003, there were more migrants working temporarily in United States (577000) than in any other countries, the result of which was still the highest in 2006, at 678 000. United Kingdom was the second country with the most numbers of such workers, rising from 137 000 in 2003 to 266 000 in 2006, while the third country was Australia, which was home to 152 000 workers in 2003 and up to 219 000 the next year, The one that closed the list was New Zealand, where number of workers accounted for 65 000 and followed the suit like other countries, hitting a meager 87 000.</p>
<p>Reporting how many workers there were per 1 000 people in 2006, it is surprising that the most marked result belonged to New Zealand (21.1), even though it displayed the lowest result of migrant workers. 10.4 points lower was Australia, and the figure for United Kingdom was at 4.4 migrants working temporarily per 1000 in 2006. Only 2.3 migrants accounted for per thousand people in United States — the fewest count of migrant employees despite showing a reverse trend in the total.</p>`,
    vocabulary: [
      { word: "short-term contracts", definition: "work agreements lasting a limited period. universal growth – increase happening in all categories or places. by far the largest rise – the biggest increase among all. hosted the most significant number – had the highest quantity or total. migrant-fri" },
    ],
  },
  {
    id: "t1-21",
    reportNumber: 21,
    task: 1 as const,
    chartType: "Line Graph",
    question: "Provide an overview of the information by identifying and describing the key details, and include comparisons where appropriate.",
    wordCount: 241,
    content: `<p>The report outlines information about the volume of 4 sport attendees - badminton, basketball, tennis and rugby - in a certain area from 1985 to 2005 in the line graph. Units are measured in single figures. In general, the interest rate of those who revelled in rugby revised downwards over the period in the question, albeit initially securing the clinching top spot, whilst the reverse was true for that of tennis. Notably, there was a sustained trajectory in the number of badminton and basketball players throughout that time frame. In 1985, the most involved type of sport was rugby, starting at 250 attendees, the result of which then dipped radically to 200 in 1995. Meantime, the number of tennis players in that region rose significantly to the same number in 1995, up from 150 in 1985, and it leapfrogged to a high of 225 in 2005, whereas the trend for rugby slashed, hitting a trough of 50 thereafter - the most minimal number of players reported. Conversely, the ratio of those engaging in basketball and badminton fluctuated over the period, with a 50-attendee gap. The former accounted for an initial of 60 and negligibly leaned towards 50 in 2005, converging with that of rugby in that year, while the latter remained flat at 100 over a course of 20 years . The interest rate of those who relished rugby — creative phrasing showing engagement or enthusiasm in a sport. 238 words.</p>`,
    vocabulary: [
      { word: "” clinching top spot", definition: "idiomatic and dynamic phrase meaning “ranked first.” rose significantly to the same number — precise structure for describing comparison and growth. up from 150 in 1985 — common academic phrasing for numerical contrast. albeit initially securing the " },
    ],
  },
  {
    id: "t1-22",
    reportNumber: 22,
    task: 1 as const,
    chartType: "Bar Chart",
    question: "The charts below show the comparison of time spent, in minutes per day, by UK's males and females on household and leisure activities in 2008.",
    wordCount: 321,
    content: `<p>The report outlines data regarding men's and women's time allocation on household activities in the bar chart- cooking and washing, shopping, repair,clothes washing and ironing- and leisure activities in the table - TV, radio,video watching, reading, and doing sports - in the UK in the year of 2008. Units are measured in minutes per day. As can be seen, the most routinely relished activity was watching or listening to radio, tv and videos for both sexes,whereas men took the lead in sports, a past time in which a minority of UK citizens engaged as a whole. As for household activities. women emerged almost as the main doers, with cooking and washing the minutes spent being the most marked, albeit men doing repair job more than women.</p>
<p>Reporting the figures concerning leisure activities, apart from the index of Tv, radio and video, the time spent on the two was accountable for less than 20 minutes by both genders, while on the former both women and men devoted more around 2 hours weekly, with respective figures of 137 and 118. The figure for reading was sustained at 18 minutes in men, and a point higher in women. The one closing the list was the amount of involvement in sports, with men marking 15 minutes, four minutes higher than women. Household activities tend to be done significantly by women, they devoted nearly 80 minutes on cooking and washing compared to men, who did so only at 30 minutes, The time spent on shopping came as a close second, with women putting at about 40 minutes per week and men 25 minutes. The gap was highly pronounced in doing clothes washing and ironing: women allocated 30 minutes and men a meager 10 minutes.</p>
<p>In comparison, the only area men dominated was repairing, accounting for nearly 20 minutes (still lower than figures women exhibited in other activities). the result of women made up 20 minutes therein.</p>`,
    vocabulary: [
      { word: "Time allocation on household and leisure activities", definition: "Compact and academic phrasing for describing categories" },
      { word: "The most routinely relished activity was…", definition: "Vivid but formal; shows variation beyond “most popular.” Men took the lead in… → Strong comparative expression for dominance" },
      { word: "Women emerged as the main household doers…", definition: "High-level structure (“emerged as”) for emphasis" },
      { word: "Albeit men engaging in repair work more than women", definition: "Sophisticated contrast connector (“albeit”)" },
      { word: "With the exception of…", definition: "Excellent for highlighting exceptions in data trends" },
      { word: "The figure for… was sustained at…", definition: "More academic alternative to “remained at.” The only area men dominated was… → Compact evaluative comparison phrase" },
      { word: "The gap was highly pronounced between…", definition: "Advanced adjective (“pronounced”) for clear contrasts" },
      { word: "Came as a close second", definition: "Natural, idiomatic expression for ranking" },
      { word: "Devoted nearly X minutes on…", definition: "Formal and precise; replace “spent” for lexical range" },
      { word: "Accounted for less than X minutes per day", definition: "Strong quantitative phrasing for proportion/time" },
    ],
  },
  {
    id: "t1-23",
    reportNumber: 23,
    task: 1 as const,
    chartType: "Bar Chart",
    question: "The chart below shows the total distance travelled by passengers on five types of transport in the UK between 1990 and 2000.",
    wordCount: 203,
    content: `<p>Interestingly, the figure for air commuting, albeit being public transit, was also less marked compared to other modes of travel. Plus, the total figure for traveled distance rose at a moderate rate over the years in the question, with that of bus, rail, and air marking the same trajectory. The exceptions in this regard were motorbikes and bicycle.</p>
<p>Focusing on by far the most popular means of transport, most people chose bus, with its figure accounting for 40 in 1990 and 45 in 2000. The distance ratio on rail came as the second with the upward trend over the years, rising from 30 to 35. The distance milage was much less pronounced for other transport means, where that of air exhibited a growth from a meager 2 to 5 from 1990 to 2000 contrary to what the result of motorbike and bicycle showed - the decline in public preference during the period. The former halved drastically from 7 to 3, while the latter mirrored the movement down to 2, up from 6. In total, distance covered by all transportation means constituted a remarkable 100 in 1990, the figure for which then rose to a high of 110 in 2000 in the UK. (</p>`,
    vocabulary: [],
  },
  {
    id: "t1-24",
    reportNumber: 24,
    task: 1 as const,
    chartType: "Bar Chart",
    question: "The bar chart provides information about seven categories of employment among adults in 2003 and 2013.",
    wordCount: 253,
    content: `<p>The report focuses on data regarding the percentage terms of those working in diverse occupations over a decade (2003-2013) in the bar chart. Provided types of occupations are business, medical, hotel industry, education training,self employed, building as well as those who were unemployed. In general, the front runner type of profession was owning a business over the period, where the figures for self-employed and unemployed adults stood almost at identical proportions. In stark contrast, the involvement in medical jobs emerged as the last runner therein. Interestingly, with the exception of business and medical, the proportions of all brackets revised downwards.</p>
<p>Reporting the most pronounced percentage terms in the chart, it is evident that the index of business hosted a clinching top result with 45% in 2003, which then dipped moderately to 35% in 2013. Despite commencing at around 10%, the amount of those engaged in self employment and those who were not employed at all soared significantly, matching the proportions of the former category at approximately 45%. The trajectory for education training, hotel industry, and building was also upwards and hovered around from 10% to 20%, with building exhibiting higher percentages ( from 10% to 25% from 2003 to 2013). Those employed in education training and hotel industry constituted nearly 20% of total workforce in 2013, up from 8% and a meager 5% in 2003 respectively. Employees working in medicine showed a relatively remarkable decline from 2003 to 2013; initially marking 20% it halved to a trough of 10% at a radical rate.</p>`,
    vocabulary: [
      { word: "Over a decade", definition: "a period of ten years" },
      { word: "Front runner type of profession", definition: "the occupation with the highest or leading percentage" },
      { word: "Stood almost at identical proportions", definition: "had nearly the same numerical values" },
      { word: "In stark contrast", definition: "showing a clear and strong difference between two figures or trends" },
      { word: "The last runner", definition: "the category with the lowest value or position" },
      { word: "Revised downwards", definition: "decreased or dropped in value or percentage" },
      { word: "Most pronounced percentage terms", definition: "the most noticeable or dominant figures in the data" },
      { word: "Clinching top result", definition: "achieving the highest figure or leading position" },
      { word: "Dipped moderately", definition: "declined slightly but not sharply" },
      { word: "Soared significantly", definition: "increased dramatically or to a large extent" },
    ],
  },
  {
    id: "t1-25",
    reportNumber: 25,
    task: 1 as const,
    chartType: "Bar Chart",
    question: "Provide an overview of the information by identifying and describing the key details, and include comparisons where appropriate.",
    wordCount: 334,
    content: `<p>The report informs about changes in the percentage terms of those from 23-65 employed in 6 occupations with unemployment rate in Ashby, a town in The UK and in general terms in this country in the year 2008 in two pie charts. Types of the occupations in the regard are construction, shop, professional, technical, personal services and office work. In general, in Ashby the labor force mostly involved those working in personal services, while the popularity of professional and technical work were relatively less marked. In general terms in The UK, it was rather different that office work was more prevalent, surpassing the figure for personal services, with the same trend occurring with the professional work. Interestingly, The proportions of unemployed people were also noticeable compared to that of types of jobs as a whole, albeit at smaller proportions. In 2008 in Ashby, by far the most pronounced share of people were involved in personal services, with a high of 21%, closely followed by the result of office work, remaining anchored at 18%. Afterwards, the figures for shop and construction work were also moderate, at 16% and 14% respectively. Professional and technical, in contrast, were the sectors with the smallest proportions, with the respective figures of 8% and 9%. As for unemployment rate, it fell to 14% of the total shares - a sizeable share compared to previous categories.</p>
<p>Focusing on the percentages of the same sectors in The UK as a whole, office-dominated sector prevailed more, at staggering 19%. By 2 points down, personal and technical categories remained a close second, whilst those worked in construction amounted to 16% - a higher proportion than that of in Ashby. The share of people involved in shop related occupations halved slightly to 13% in The UK. Professional workers constituted to 14% of the total shares therein. Interestingly, Ashby used to host more unemployed citizens than The UK as a whole in percentage terms, the result of which in The UK marked a low of 10%.</p>`,
    vocabulary: [
      { word: "By far the most pronounced share", definition: "clearly the largest or most dominant portion" },
      { word: "Remained anchored at … %", definition: "stayed fixed or stable at a specific percentage" },
      { word: "Closely followed by", definition: "immediately ranked after another category in size or proportion" },
      { word: "In contrast, … were the sectors with the smallest proportions", definition: "introduces categories that had the lowest percentages" },
      { word: "Surpassing the figure for …", definition: "exceeding or going above the percentage of another category" },
      { word: "The respective figures of …", definition: "the individual data values corresponding to each category" },
      { word: "A sizeable share compared to previous categories", definition: "a relatively large portion when compared with earlier groups" },
      { word: "Remained a close second", definition: "stayed just behind the leading category in percentage or rank" },
      { word: "Moderate, at … %", definition: "of average level or amount, recorded at a specific percentage" },
      { word: "Interestingly, … were also noticeable compared to …", definition: "draws attention to an unexpected but visible difference" },
    ],
  },
  {
    id: "t1-26",
    reportNumber: 26,
    task: 1 as const,
    chartType: "Table",
    question: "The table below shows the percentage of main types of dwellings in Victoria, the Northern Territory and Tasmania in 2001 and 2006.",
    wordCount: 373,
    content: `<p>The report provides information about sorts of housing in areas - Victoria, the Northern Territory and Tasmania - at intervals of 2001 and 2006. Units are in percentage terms, and housing sorts in the regard are a house, semi-detached houses, a flat or apartment, and other undefined types. Generally speaking, regardless of geographical location and period, an ordinary houses led the chart with the most pronounced percentage points, while semi-detached houses emerged as the second most popular options. The preference towards flats or apartments, in contrast, was not as much as the aforementioned ones - lower proportions of people resided in them.</p>
<p>Focusing on the number of plain houses in three areas, they were more prevalent in Tasmania, 88 in 2001 and 89 in 2007, compared to that of The Northern Territory ( 65 in 2001 and 63 in 2007 - the lowest ratio of such house capacity in this regard), and Victoria ( 79 in 2001 and 76 in 2007). It is clear that there was a little downward trend in the volume of houses in these areas, but Tasmania.</p>
<p>In comparison, semi-detached houses were the second most preferred house types, albeit at the considerably lower amount. In Victoria, there was only 11 such houses in 2001, the result of which then rose by a single point after 6 years. As for The Northern Territory, this ratio was slightly marked, with 13 in 2001 and a high of 15 in 2007, while Tasmania used to house a meager 3 and 4 semi-detached houses in 2001 and 2007 respectively.</p>
<p>Moving on, the number of flats averaged around 10 in all areas, with that of Tasmania recording 7 and 6 in the given years, whilst it accounted for 9 and 10 in Victorian areas. The figure for Northern Territory exhibited a rather upward trend, rising from 8 in 2001 up to 11 in 2007 - the area with the most flats in the table. Aforementioned regions also accommodated other types of houses, with Victoria amounting to 1 and 2, Tasmania 2 and 1 from 2001 and 2007. The number of such undefined houses, however, was more pronounced in the Northern Territory, which amounted to 14 and 11, with a moderate growth over the years.</p>`,
    vocabulary: [
      { word: "Units are in percentage terms", definition: "data are expressed as proportions or percentages" },
      { word: "Led the chart", definition: "ranked first or had the highest figure" },
      { word: "Most pronounced percentage points", definition: "the most noticeable or dominant values in the data" },
      { word: "Emerged as the second most popular options", definition: "appeared as the next preferred category after the leading one" },
      { word: "In contrast", definition: "showing an opposite or different trend" },
      { word: "Lower proportions of people resided in them", definition: "fewer individuals lived in that housing type" },
      { word: "More prevalent in Tasmania", definition: "more common or widespread in the Tasmanian region" },
      { word: "The lowest ratio in this regard", definition: "the smallest comparative figure in the dataset" },
      { word: "A little downward trend", definition: "a slight decrease over time" },
      { word: "Second most preferred house types", definition: "the next most chosen housing category after the leading one" },
    ],
  },
  {
    id: "t1-27",
    reportNumber: 27,
    task: 1 as const,
    chartType: "Map",
    question: "The maps show the changes in the functional area of a museum in 1988 and after the decoration in 2008.",
    wordCount: 287,
    content: `<p>The report focuses on the changes took place in the layout of a museum floor plan over a 10-year period ( 1998 - 2008) in two images. Generally speaking, the layout had undergone some rather radical relocation in its layout, with the emergence of new amenities, which made the museum floor more modernized and user-friendly. Of a particular note, by far the most noticeable alteration was the order of facilities, with permanent exhibition room being placed only to one side, whereas other facilities on the other side. In 1998, the access to the floor used to be from the southernmost side of the plan, with exit being the same door. Tickets, additionally, were sold at the entrance, and to the left of which there was a shop, with temporary exhibition room located in the other side of the entrance, on the west-southern corner. Garden used to stay in the middle, while cafe' was based on top of it. On both top corners, permanent exhibition rooms used to occupy. Lastly, a bathroom and coatroom were situated on the right-bottom corner. Upon completion of changes in 2008, all permanent exhibition rooms were supplanted to the right-hand side of the plan, where the access remained intact, with tickets selling area being inside still. The garden made way for fountains in the middle, with an open area for cafe', which was , in fact, on the top of them along with a bathroom. Left-hand side of the plan encompassed facilities like restaurant on the top, temporary exhibition room in the center, and down that there were relocated shops and coatroom. With these transformations, the museum plan appeared rather ordered and much of efficient use for museum visitors. 283 words -978535 -1574800</p>`,
    vocabulary: [
      { word: "Underwent radical relocation", definition: "experienced major movement or shifting of elements" },
      { word: "Emergence of new amenities", definition: "appearance or addition of new facilities or services" },
      { word: "Modernized and user-friendly", definition: "updated and designed for easy use by visitors" },
      { word: "Most noticeable alteration", definition: "the most visible or striking change" },
      { word: "Order of facilities", definition: "the arrangement or sequence of rooms and features" },
      { word: "Access to the floor", definition: "the entry point or way to enter the area" },
      { word: "Located on the west-southern corner", definition: "positioned in the lower-left side of the layout" },
      { word: "Used to stay in the middle", definition: "previously situated in the central area" },
      { word: "Upon completion of changes", definition: "after all modifications were finished" },
      { word: "Supplanted to the right-hand side", definition: "replaced and moved to the right section" },
    ],
  },
  {
    id: "t1-28",
    reportNumber: 28,
    task: 1 as const,
    chartType: "Mixed Charts",
    question: "The charts below show the use of water for agriculture products in Australia in 2004 and values of these products to the Australian economy in the same year.",
    wordCount: 240,
    content: `<p>The report focuses on the information about the water consumption of 7 sectors in agriculture in percentage terms in Australia in the year 2004, with the income shares from these sectors in two pie charts. Generally speaking, livestock appeared to be the most demanding sector for water, while water used for rice and vegetable cultivation encompassed the smallest proportions. Additionally, the most noticeable revenue stream was fruit-cultivation, with making up almost the half of the economy, where sources like sugar, rice, vegetable, and livestock sectors contributed to smaller percentages. In 2004, by the largest figure for water usage was recorded by that for livestock, with staggering 36%, followed by that of diary, down to 19%. The indexes of cotton, fruit and sugar made up relatively less proportions, with the respective figures of 15%, 11% and 10%. The remaining 10% was split even among sectors like rice and vegetable, which meant in Australia these types of products were not favored in agriculture department. Reporting figures regarding income rates from these goods, it appears most of the people made a living in fruit sector, which accounted for overwhelming 44%, with the result of dairy constituting almost the half of the result, at 24%. 13% income from total revenue came from cotton products, while 7% and 6% were from sugar and livestock respectively. Sectors with the lowest income percentage points were responsible for rice( a mere 1%) and sugar ( up to 5%).</p>`,
    vocabulary: [],
  },
  {
    id: "t1-29",
    reportNumber: 29,
    task: 1 as const,
    chartType: "Line Graph",
    question: "The line graph shows the demand whike the second cahrts show the number of staff in the UK steel industry.",
    wordCount: 253,
    content: `<p>The report outlines the data on the volume of UK steel demand ( in million tones) dis aggregated into total demand, UK production and import categories, along with the size of the workforce employed ( in thousands of people) in this industry from 1970 to 2000 in two line graphs. Overall, imports of steel increased moderately over the years, while both manufacture and demand experienced substantial declines, yet all the three converged in the same point in the end, whereas the significant amount of people exhibited a dramatic contraction in this industry.</p>
<p>Focusing on the total steel demand, it showed a pronounced downward trend, the result of which initiated form 200 millions tones in 1970 and plummeted to 100 millions tones in 2000, the domestic production ratio closely mirrored this downward trend, which from a high of 200 millions tones went down to 100 million tones. In stark contrast, there was a disparity in import levels - it surged radically from almost 0 to the same 100 million tones, indicating the convergence of local production, demand and import volumes at roughly the same level by 2000 - a structurally balanced market state. Moving on workforce in steel industry from 1970 to 2000, it commenced at a high of 50 thousand, which fell by two-thirds by the end of the period. Till 1980, there was a steady dive to 40 thousand, which further dipped markedly in 2000, accounting for 20 thousand workers, which aligned with the reduced demand and production within the steel sector.</p>`,
    vocabulary: [],
  },
  {
    id: "t1-30",
    reportNumber: 30,
    task: 1 as const,
    chartType: "Process Diagram",
    question: "The diagram below shows how drinking is made using solar power.",
    wordCount: 190,
    content: `<p>The report gives information about the extraction of drinking water via the use of solar power as it is shown in the diagram. In general, the water processing is rather sophisticated, comprising several stages: firstly, energy is provided through solar panels, which is followed by extracting underground water, and finally storing this water. The process is fully automated with the use of several equipment and tools and is completely energy-self-sufficient. It all begins with the solar panels which are placed to capture solar lights and channel energy obtained to the converter, a device that helps to turn solar energy to the one that can be later used to generate electricity. The device is often based near an underground well so as to provide electricity travelling to a pump - it is laid under water. Then water journeys to the water tank, which is positioned on the surface several heights above the ground fixed to the wooden platform. Inside of the tank, there is a special tube, once filled with enough water, that directs water either to the tap to access water easily or the mobile container to store drinking water.</p>`,
    vocabulary: [],
  },
  {
    id: "t1-31",
    reportNumber: 31,
    task: 1 as const,
    chartType: "Line Graph",
    question: "The graph below shows different sources of air pollutants in the UK from 1990 to 2005",
    wordCount: 282,
    content: `<p>The report confers data regarding 4 main reasons for air pollution - Transport, Industry, Total air pollutants, and lastly households - in the UK between 1990 and 2005 in the line graph. Units are measured in million tones. In general, the volume of pollution generated by all categories revised downwards, but transport during the period in the question, where the level of trends for households was the only category which showed the most subdued decline compared to that of Industry and total air pollutants - the leading cause of air pollution in the country.</p>
<p>In contrast, Households seemed to have the least influence on the air among the three.</p>
<p>Focusing on the primary triggers of the polluted air, the all-time high results were responsible for the figure for total air pollutants, starting at around 7 million tones in 1990 and going down slightly to 4 million tones in 1999. This was even down to only 3 million tones in 2005 after a stability for 3 years from 1999. Another common factor was Industry, which contributed to nearly 6 million tones of pollutants in 1990, the result of which declined significantly to just 3 million tones in 1996, and then there was a slowly declining trajectory towards a meager 2 millions till 2005. Other air pollutants, yet with insignificant impact, were transport and households. The result of former was mainly sustained at around 1 million tones during the whole period. The latter, once stood at an identical figure as the former category from 1990 to 1993, went down to a trough of a half million tones next interval and hovered around till 2002 before it had edged down to nearly nothing in 2005.</p>`,
    vocabulary: [
      { word: "the most subdued decline", definition: "the smallest or least noticeable decrease. leading cause of air pollution – the primary source responsible for pollution. least influence on the air – minimal impact on air quality. focusing on the primary triggers – concentrating on the main causes." },
    ],
  },
  {
    id: "t1-32",
    reportNumber: 32,
    task: 1 as const,
    chartType: "Line Graph",
    question: "The graph below shows the percentages of internet users who shopped online in Australia by age group.",
    wordCount: 337,
    content: `<p>0 353060 The report outlines data regarding changes in the share of internet users shopping online in Australia in 6 age groups in the years 2007 and 2009 in the bar graph.Age groups mentioned in the report were 15-25, 26-35, 36-45, 46-55, 56-65 and lastly those over 65 years old. As can be seen,all age groups experienced an increase in online shopping participation, where the most substantial shifts in online shopping habits were observed in the proportion of 36-45 and above 65 age brackets during the period in the question, while there were also noticeable, yet not as much as pronounced, changes in the shares of other age groups. People who engaged in shopping online the most was those around 36-45 years old, whereas the reverse was true for the eldest users.</p>
<p>Focusing on the youngest age brackets, around 20% of users at their 15-25 years shopped online in 2007; this was 2 points lower than the share in 2009. In 2007, 30% of online shoppers in the age profile of 26-35 purchased items online, leading the chart, the share of which then rose slightly by 2 points in 2009. Middle aged internet users in 2007 showed rather moderate involvement in online purchasing, where the share of 36-45 year-old users accounted for 25%, whilst this age profile was the most common people who bought items online in 2009. However, a bit older people at 46-55 years old formed relatively lower proportions in both 2007 and 2009, increasing from nearly 20% to 28% respectively. Online shopping habits were not quite favoured by senior citizens, although the figure for these age groups exhibited an increase from 2007 to 2009. In the latter year,around 18% of 56-65 aged users involved in online purchases, and this was nearly 5 points up from the former year. One of the most marked shifts in the proportion of those who did online purchases happened to the eldest age group (over 65 years old): a 5%-result in 2007 surged up to 12 % in 2009.</p>`,
    vocabulary: [
      { word: "the most substantial shifts", definition: "the biggest or most significant changes. observed in the proportion of… — noticed in the percentage of a group. the reverse was true for… — the opposite pattern appeared in another group" },
      { word: "Focusing on the… age brackets", definition: "when we look specifically at a particular age group. accounted for 25% — made up or represented 25%. rose slightly — increased a little. leading the chart — having the highest position in the graph. relatively lower proportions — smaller percentages " },
    ],
  },
  {
    id: "t1-33",
    reportNumber: 33,
    task: 1 as const,
    chartType: "Line Graph",
    question: "The graph shows information about the percentage of people visiting GYM once a month or more between 1984 to 2003.",
    wordCount: 327,
    content: `<p>The report provides information about changes in the share of 4 age groups who visited gym once a month or more from 1984 to 2003 in the line graph. Age groups mentioned are 18-25, 26-45, 46-65, and lastly over 65 year-old brackets. Generally speaking, the attendance ratio to the gym rose, albeit at varying degrees, across all age groups, except for those aged 46-65 - the age profile with the least involvement in gym activities over the period. It was the youngest age profile, however, which showed relatively higher percentages of gym goers. It is evident that visiting gym was quite popular among young individuals. For instance, starting at 15% in 1984, the figure for 18-25 year-old people surged at an unprecedented rate up to nearly 70% in 2003: it accounted for the all-time high share of gym visitors in the chart. As for another young age profile (26-45), after going up from 30% - the highest share of gym goers in 1984- to 40% in 1989, There was a marginal decline to 35% in 1994. This, however, quickly managed to recover and experienced a significant rise to 50% in the end: this age group came a close second in terms of gym engagement in that year. Moving on the results of senior attendees, around 25% 46-65 years old elderly visited gym in 1984, which edged up to nearly 30% in 1989. From this point on, attending the gym started to go down for this age profile at a noticeable level till 2003, recording only 15% of gym goers. The eldest age group (above 65) recorded the lowest participation figures from the period 1984 to 1999: despite this, participation among this cohort fluctuated: it rose from 5% to a peak of 15% in 1994, before declining back to 10% in 1999. By 2003, The amount of elderly gym attendees at above 65 years old had revised upwards and exceeded that of previous age group, up to 20%.</p>`,
    vocabulary: [],
  },
  {
    id: "t1-34",
    reportNumber: 34,
    task: 1 as const,
    chartType: "Table",
    question: "The table below shows the total population and the proportion of males and females aged 15 and aged 75 in the UK from 1911 to 2011.",
    wordCount: 327,
    content: `<p>0 353060 The report outlines changes in the total population ratio,and the proportion of men and women with the separate data for 15 year-old and 75 year-old people in the UK between 1911 and 2011 in the table. In general, the country saw an upward trend in its population ratio, with elderly population also increasing: female elderly individuals comprised a noticeable part in this regard.</p>
<p>In contrast, The proportion of young individuals declined, yet somehow that of young males showed the opposite.</p>
<p>Focusing on the figures regarding total population changes, it significantly surged over the period. In 1991, only 36.1 million people were living in the UK, which then rose by 10 points in 1961, to 46.1 million. Plus,the same change number had occurred in 2011 - there were total 56.1 million UK citizens. Regarding the shares of 15 year-old age profile, only 1.86 % comprised the total population, the result of which moderately declined to 1.48% in 1961 and even more to 1.28% in 2011. As for male figures of this age category, despite an overall downward trend, this gender group showed an increase from 1911 to 2011 ( 334.200 vs 354.400). Meantime, the figure dipped slightly for young female population of the country, starting at 335.700 in 1911 to 333.700 in 2011. The most pronounced decline happened from 1911 to 1961, by 1 800 as it was for 15 year-old males. As for people aged 75,they tend to account for lesser proportions of the total, the percentage of this age category formed 0.23% in 1911, and it edged up to 0.55% in 1961. 0.70% was the result of this category in 2011.</p>
<p>Firstly, there were more marked elderly women in any year compared to men, accounting for 47.400 in 1911 and 210.100 in 2011, while the index of men was at 34.100 in 1911, rising all the way up to 181.300. As can be seen, these both sex categories exhibited rises over the whole period.</p>`,
    vocabulary: [],
  },
];

export function findWritingSample(id: string): WritingSample | undefined {
  return WRITING_SAMPLES.find((s) => s.id === id);
}

export interface WritingEssay {
  id: string;
  testNumber: number;
  task: 2;
  question: string;
  wordCount: number;
  content: string;
  vocabulary: { word: string; definition: string }[];
}

export const WRITING_ESSAYS: WritingEssay[] = [
  {
    id: "t2-1",
    testNumber: 1,
    task: 2 as const,
    question: "Some people believe that more action should be taken to prevent crime, but others feel that little can be done.",
    wordCount: 455,
    content: `<p>The high crime rate makes it difficult for many people to go outside of their homes, as they worry about the negative consequences or being a victim in a crime scenario. While there are those who advocate for measures to tackle this situation to create a safe and worry-free living environment, others believe there is nothing we can do. Personally, I side with the former view for two main factors. Of course, it is challenging to mitigate all issues associated with crime completely. Thanks to modern technology, it is quite understandable that the government cannot fend crime off from society entirely, as criminals can find new ways to break the law.</p>
<p>Moreover, it is also of no use to convince citizens that they are secure, as even a single piece of negative news about crime incidents can spark widespread chaos and public anxiety. Therefore, some may assume that doing away with the fear of crime is not feasible.</p>
<p>Having said that, I still remain convinced that there is a silver bullet to reduce the crime rate and set up a peaceful setting for citizens. The utopian world is somewhat achievable, and it can be done through the governmental power and resources. Only through reinforcing the security systems and police of the country to a level, where public spaces are monitored through surveillance cameras and patrolled by police officers, can a society remain safe.When this sort of environment is created, offenders might be less willing to commit crimes because they may fear being recorded and caught. Such an environment would eliminate fears of criminal victimization or violent incidents in public spaces. In cities like London and Singapore, the presence of surveillance cameras and police patrols has been linked to significant declines in criminal behaviour, for instance. Another wise step towards this problem can be enhancing respect for social order. It means that people follow rules not because they must, but because they might feel it is the right thing to do, something which is rooted in an inner sense of discipline that keeps society stable and safe. In this case, the government plays a major role by legislating fair and transparent laws, and police act firmly but fairly, applying the law equally to all citizens.,say, Japan is one of the safest places to walk in the world, as it displays an extremely low rate of crime, where people can walk alone at night without feeling anxious or threatened.</p>
<p>In summary, a near-utopian society free from crime can be achieved regardless of what some may feel about its practicality. In this regard, it requires a huge amount of effort by the authorities to ensure consistent monitoring and maintain strong social order, as far as I am concerned.</p>`,
    vocabulary: [
      { word: "Victim", definition: "a person who suffers harm from a crime or accident" },
      { word: "Consequences", definition: "the results or effects of an action" },
      { word: "Advocate for", definition: "to publicly support or recommend something" },
      { word: "Mitigate", definition: "to make something less harmful or serious" },
      { word: "Fend off", definition: "to prevent or stop something unpleasant or unwanted" },
      { word: "Chaos", definition: "a state of complete disorder or confusion" },
      { word: "Feasible", definition: "possible or achievable" },
      { word: "Silver bullet", definition: "a simple, perfect solution to a complicated problem" },
      { word: "Utopian world", definition: "an ideal, perfect society" },
      { word: "Reinforcing", definition: "strengthening or making something more powerful" },
    ],
  },
  {
    id: "t2-2",
    testNumber: 2,
    task: 2 as const,
    question: "Other people believe it’s good to have friends who sometimes disagree with them.",
    wordCount: 386,
    content: `<p>It is believed to be a better decision to have a company of friends who share similar perspectives, while there are those who advocate that those friends who can oppose to one's decision are actually a wise choice, as they can tell the downsides of the person and show the right way. Therefore, I support the latter view. I do admit the importance behind the idea of connecting with like-minded friends. This is because it can be interesting to spend time with such people, as people with completely two different areas of interest are hard to get along with, not to mention that there would be less topics to cover in casual gatherings. However, with those whose hobbies and perspectives align with their friends it may be beneficial, while they spend time together thinking about aiming to the same goal and can discuss topics they comply with. People who excel in sports and have no interest in politics can find it difficult to get along with those whose situation is vice versa, for instance. The logic above may seem reasonable to some, yet I assume that friends who can challenge us can benefit in all sorts of ways.</p>
<p>Firstly, they can shift their friends' opinions and expose them to alternative ways of doing or thinking about the same thing. People with diverse backgrounds and those who can vote against our ideas can enrich our beliefs, and broaden our horizons. Plus, they are able to show us our biases and the opinions we usually take for granted. Another reason to surround ourselves with people who can say no to our ideas is the opportunity to see the world from different angles. For example, most things we imagine oftentimes become the reality,even though there is much more to experience. With such a circle of friends, one is exposed to different worldviews, since two individuals ever share the same internal worlds. This can result in learning invaluable lessons from our friends and apply them to our future decisions.</p>
<p>In summary, it is plausible that hanging out with friends with opinions in accordance to ours can create a pleasing company, but it is far from being advantageous to us. I believe that disagreeing friends, however, can drive us to think out of the box and experience life in different views.</p>`,
    vocabulary: [],
  },
  {
    id: "t2-3",
    testNumber: 3,
    task: 2 as const,
    question: "Some people believe that students should pay the full cost for their own study, because university education benefits individuals rather than society. To what extent do you agree or disagree?",
    wordCount: 396,
    content: `<p>There is a view that covering the tuition fees for university education should be a responsibility of students, as it brings about a great deal of benefits to them not the society. While I admit the immense justification behind this notion, considering the burden taxpayers might feel, I still lean towards the idea that the government should subsidize whole cost of university fees. This is mainly because of the long-term societal advantages it offers to the common good.</p>
<p>Admittedly, the idea of self-accountability to bear the cost of university education may seem feasible.Studying university courses, students usually open a door of opportunities to earn higher-salary and career advancements mostly to their own advantage, and if the government attempts to cover the expense for them. this feels unreasonable as well as unfair to those paying taxes as this investment goes for aforementioned self-oriented benefits of students. Meantime, this money can be directed to more global and local issues like mitigating environmental or societal problems. which justifies their money paid. Being said that, I maintain my opinion by the fact that this ultimately benefits the society as a whole. Ensuring and accruing the number of well-educated citizenry in the community can lead innovation and technological advancements in the long term. which could be a crucial step to resolve above-mentioned problems in the society. Many western countries, as studies show, oftentimes focus on the development of education and provide full scholarship programs at universities for both international and local students, as this initiative can urge students to pursue education with the aim of enhancing societal well-being, for instance.</p>
<p>Furthermore, while this sort of financial aid to students by government ensures a well-educated population, it also helps to increase those taking part in civic life. With the increase of individuals who understand politics, economics and environmental matters, they tend to participate more in democratic processes, contributing to a community-oriented decisions that mostly have influence on their life, where this also helps the government to rule with fairness and justice, taking into account opinions of intelligent and community-minded people.</p>
<p>In conclusion, fully covered university education, of course, sounds a bit unfair to some individuals who feel like contributing not the society but students' self goals, yet it yields more upsides than they assume, creating opportunities to enrich the lives of all down the track and increase the amount of civic-minded individuals.</p>`,
    vocabulary: [
      { word: "A responsibility of students", definition: "something students themselves should handle or be accountable for" },
      { word: "Brings about a great deal of benefits", definition: "produces many advantages or positive outcomes" },
      { word: "The immense justification behind this notion", definition: "the strong reasoning or logic supporting this idea" },
      { word: "The burden taxpayers might feel", definition: "the sense of financial strain on those who pay taxes" },
      { word: "Subsidize the whole cost", definition: "to fully support or pay the expenses, usually by the government" },
      { word: "Long-term societal advantages", definition: "benefits that improve society over an extended period" },
      { word: "The common good", definition: "the welfare or well-being of the entire community" },
      { word: "Self accountability", definition: "the act of taking responsibility for one’s own actions or costs" },
      { word: "To bear the cost", definition: "to take financial responsibility or pay for something" },
      { word: "Open a door of opportunities", definition: "to create new chances or possibilities" },
    ],
  },
  {
    id: "t2-4",
    testNumber: 4,
    task: 2 as const,
    question: "Some people believe that watching TV is bad for children, while others claim it has positive effects for children as they grow up. Discuss both views and give your own opinion.",
    wordCount: 547,
    content: `<p>One activity children revel in their leisure time is non other than watching TV, and this is considered to have a negative impact on their mental abilities and behaviour;meanwhile, there are those who tend to think that if exposed to educational content, it is rather possible to take advantage of it. Plus, it also brings a chance for parents to engage in household chores while children's attention is diverted to TV. Thus, I side with the latter view.</p>
<p>Granted, watching TV can pose several threats to children, where one potential drawback is the mental toll it displays. Excessive viewing TV programs can cut short the time they could spend on education and sports, worsening their learning progress and school performance. The behaviour of children, moreover, can be impacted unfavorably. Before being exposed to the world, children who frequently watch TV programs, might adopt reversed opinions about it, which is why they tend to think that the world is a frightening place and loose willingness to spend time outdoors, which may lead to self-isolation later in the adulthood. This is because of the violence portrayed on television, and children who have seen significant amount of violence on TV are more likely to develop aforementioned perspective about the world. There are, on the other hand, those who assume that TV has to do with more advantageous effects to both children and parents.</p>
<p>First of all, TV content does not always cover entertaining programs or shows, whereas some channels air educational programs, like those on National Geographic channel animal and environment related documentaries, it is possible attributable to technological progress to watch YouTube or other video viewing platforms on TV: children can access to educational content on these platforms and learn new skills and knowledge. Therefore, parents now encourage active learning to their children via watching foreign movies or programs while they accompany them and answer their questions, so they can learn independently these languages, for instance.</p>
<p>Furthermore, television has become also the silent babysitter. In modern households, TV often does more than just educating or entertaining children - it provides parents with something increasingly scarce; time. While children are busy with watching their lovely TV programs or cartoons, parents can take this opportunity to allocate time for domestic tasks or self care; cooking, cleaning, doing the laundry, completing work or simply catching their breath. This mostly comes beneficial to dual-income families - when both parents work and find little time on household duties. From my perspective, although TV viewing can be reckoned a negative trend, I feel that it is hard to neglect perks it confers. TV often does a great job educating children in an engaging way, and parents, in turn, gain from this arrangement, an opportunity that allows them to rationalize time efficiently as well as unwind and restore their energy. However, it is always important to maintain supervision over their screen time to prevent excessive viewing and access to sexual or violent content.</p>
<p>In conclusion, it is true that too much screen time can harm children's learning process, and create a sign of violence and isolation, but this does not mean that it is negative as a whole: I believe that watching tv can help children attain new knowledge, and it benefits their parents as well.</p>`,
    vocabulary: [
      { word: "No other than", definition: "used for emphasis to identify something specifically or exclusively. * **Have a negative impact on** – to affect something in a harmful or damaging way. * **Mental abilities and behaviour** – a person’s intellectual skills and patterns of conduct. * " },
    ],
  },
  {
    id: "t2-5",
    testNumber: 5,
    task: 2 as const,
    question: "Some people think that success in life comes from hard work and determination, while others think that there are more important factors such as money and appearance. Discuss both views and give your opinion.",
    wordCount: 449,
    content: `<p>Hard work and determination are shown to be main drivers of successful life by some individuals, whereas there are also advocates bringing other factors to the table as causes of such life like personal financial condition and appearance. Although the former mentioned traits are of importance to certain professions, they are the real cases to achievements in one's life, and personally I side with this view.</p>
<p>On the one hand, appearance and money can be of importance in certain scenarios of life, especially for those jobs that prioritize these aspects of a person over others. These professions promise a short cut ways to be famous and enjoy lucrative income opportunities, whereas production and entertainment industries tend to be ones seeking for those with exceptionally gorgeous appearance, as it plays a key role in these jobs,relying heavily on visual impression and influencing audience perception. Moreover. money can do the trick in professions like Formula 1, a type of sport is relished worldwide,but only with a huge fortune can get permission to be a F1 drives, as even a single driving license costs millions of dollars, not counting special high-cost training is required before that. This does not mean, however, all areas of life involve aforementioned personal qualities. With the consistent work and enough time any person is able to achieve intended purposes in life. By working on one skill or an area of skill and subject for a long term, a person can become an expert in those fields, despite many and many trials and errors. If examined, a huge number of the most successful people on the Earth do not come from a big money or good looking appearance, but have they managed to secure their position over many years studying hard and submerging themselves in their area of speciality. Mark Zuckerburg, CEO of Facebook and Meta, or Jeck ma, a cofounder of Alibaba, are evident examples in this regard, who are accomplished billionaires and professionals in their business areas. Plus, being dedicated and resilient throughout the process to attain something greater in life is vital. This is mainly because most people just give up their goals as they start to confront challenges in their paths, and in such miserable and hopeless stages of work and life Single-mindedness to reach one's objectives despite obstacle is an intrinsic quality that defines the true path required to walk towards success. In conclusion. professions that value personal look and money are usually the ones in media and entertainment, a high promising areas, yet success is not always about only these specific individual qualities, while all walks of life require a person to be determined and hard working in spite of challenges ahead.</p>`,
    vocabulary: [],
  },
  {
    id: "t2-6",
    testNumber: 6,
    task: 2 as const,
    question: "Other people believe that children should be taught this at home.",
    wordCount: 354,
    content: `<p>Arguments over who should be in charge in educating young generation to recycle and avoid waste raises concerns among many. While there are advocates towards the responsibility of schools, there are also for parents' role. Personally, considering time spent and influence of schools, parents can do a little.</p>
<p>Admittedly, parents are the initial teachers of their offspring. Children acquire almost any skill from their parents ranging from eating, walking to oral ones, while they also develop a sense of respect and perspective, where they see their parents as role models in their life, and thus parents can impact on their children's choices and decisions. Taking this into account, raising environmental awareness among children can be of no difficulty for parents;meantime, school systems can focus on conferring vital knowledge about fundamental subjects and teaching skills like teamwork, decision-making, critical thinking and communication ones. Schools conventionally are the places to teach aforementioned abilities, not where a child is prepared to take care of nature instead of spending valuable time and resources on preparation for future career and life.</p>
<p>Nonetheless, I side with supporters of the latter view, as parents cannot influence as efficiently as schools. In these institutions, young generation tends to spend more time than they do at home: they engage in studying the surrounding world, playing games, teamwork activities and connecting with their peers till the afternoon, whilst the time spent at home is considerably lower if it is compared. Since children are usually exposed to peer pressure — influence exerted by people of one's age or social group to conform to group norms — seeing their friends take small steps to protect the environment can motivate them to follow suit.</p>
<p>Moreover, not every household is environmentally conscious at a degree to teach their family members the same; as a result, a pedagogical effort to foster a sustainable awareness campaign at schools is far favorable.</p>
<p>In conclusion, parental responsibility to promote environmental preservation steps is a flawed idea, as they lack enough control and resources as educational places do. Hence, the stress on this should be given to schools for above mentioned reasons. (</p>`,
    vocabulary: [
      { word: "raises concerns among many", definition: "perfect for introducing contentious topics. advocates towards the responsibility of… → useful for discussing differing responsibilities or viewpoints. considering time spent and influence of… → analytical connector; useful for justification. initial " },
    ],
  },
  {
    id: "t2-7",
    testNumber: 7,
    task: 2 as const,
    question: "Do you think the advantages outweigh the disadvantages?",
    wordCount: 413,
    content: `<p>The pivotal role of social media in our lives makes it difficult to avoid using it, where it aims to provide connections and information. Although there are concerns over its potential downsides such as a problematic attachment , I would firmly assert that social media speaks to mainly advantageous side for the majority of users, mitigating obstacles regarding communication and opportunities for improved networking relationships. It is indisputable that one of the most pronounced negatives of social media is a trend what is known as FOMO - fear of missing out. This usually results in negative implications on mental health. When a user is not online on social media pages, it seems to them that they may miss an important event or news, and continuous need to be present on the internet occurs. It is harmful since continuum of this situation may exert a reduction in cognitive functioning, academic performance, focus, and physical well-being.</p>
<p>Having said that, I reckon that social media offers significant benefits across various fronts, one of which has to do with fostering connections. With the help of social media apps and websites, thousands of people are able to stay in touch with loved ones and reconnect with old friends, yet this is not the end of it, where rather it also facilitates an opportunity to share media, photos and videos, and to build a new rapport based on mutual interests, expanding social circles. There are already various cases in which strangers have become life partners and close friends via social media pages, for instance. Another lofty benefits is the possibility to build networking relationship. Social media is not the only communication spot for individuals, but also a chance for professionals and business to look for potential customers or business partners. This means now with the help of it it is much straightforward to find new updates, breaking events and news, employees ( who excel in their careers), employers, organisations that can do the work at an international level, lessening problems like logistics and orders. Such opportunities are usually presented in Twitter and Facebook, where all experienced business people get together to exchange insights.</p>
<p>In conclusion, despite a few potential drawbacks social media puts forward, the ability to stay connected with loved ones and conferring a growth area for business proves invaluable for many users. Thus, I suggest that with responsible use and a critical eye, we can maximize the output of social media while minimizing its negative impacts. (</p>`,
    vocabulary: [],
  },
  {
    id: "t2-8",
    testNumber: 8,
    task: 2 as const,
    question: "g. fixing cars, hairdressing) than on education in universities.",
    wordCount: 333,
    content: `<p>There is a view that investing on vocational education and practical programs plays a vital role, where it is of no importance to spend on university curriculums. Personally, I actually support this idea, as such initiative can prepare professional employees who do not only excel in their field, but do aid financially to companies.</p>
<p>First of all, these educational programs conferred at universities can aim to prepare individuals for successful career path. This competitive job market and the advent of technologies have made it difficult than ever before for new job applicants to be adequate employees suited to the position, where high criteria for their skills is mostly appreciated. Students, while delving into the depth of their courses, are able to be already equipped with employable resume and essential skills like communication, leadership, critical-thinking, decision making and to name just a few long before they even graduate, ensuring that the obstacle to meet required criteria in work settings would be mitigated in advance. This struggle of finding a job is oftentimes what most of the new generation fails to do with.</p>
<p>Furthermore, there is financial consideration of this education as well. Companies not sometimes but frequently feel frustrated as newly graduated workers lack most intrinsic set of skills needed for the workplace, something which is not usually taught at university curriculum. As a result of which, these businesses find themselves educating them, and thus losing money and time on this training, which sometimes may last for months or a year in the worst scenario. This would greatly reduce the chances for a business to progress, while graduates realize they have not mastered the fundamentals. Once such programs are sustained in educational institutions, it can open doors for a business to compete with market behemoths at regional and international levels, securing their position in the market with experienced employees.</p>
<p>In conclusion, such unconventional education at universities can ensure the well-trained workforce for companies, doing away struggles associated in individuals experience and with businesses. (</p>`,
    vocabulary: [
      { word: "Practical programs", definition: "courses emphasizing hands-on experience over theory" },
      { word: "Prepare professional employees", definition: "train individuals to work effectively in professional environments" },
      { word: "Excel in their field", definition: "perform exceptionally well in a particular area of expertise" },
      { word: "Aid financially to companies", definition: "provide financial benefit or cost savings to businesses" },
      { word: "Successful career path", definition: "a progressive and rewarding professional journey" },
      { word: "Competitive job market", definition: "employment environment with high competition for limited positions" },
      { word: "The advent of technologies", definition: "the arrival or development of new technological innovations" },
      { word: "Adequate employees suited to the position", definition: "workers who have the right skills and qualities for a specific job" },
      { word: "High criteria for skills", definition: "strict or demanding standards for required abilities" },
      { word: "Employable résumé", definition: "a well-prepared CV that increases chances of getting hired" },
    ],
  },
  {
    id: "t2-9",
    testNumber: 9,
    task: 2 as const,
    question: "Some people think that a lot of scientific research is a waste of money and time. To some extend do you agree or disagree ?",
    wordCount: 485,
    content: `<p>The wise allocation of public and government funding is one of the most challenging decisions to make for any country, and it is claimed that finance and period devoted to movements towards making a progress in science is widely perceived as inadequate. I do admit that already having a number of issues to solve in the community such as poverty and pollution is a vital area to mitigate, yet I consider this trend of intrinsic importance, as everything is thanks to discoveries in science. I partly acknowledge that it would be rather justifiable if money spent on scientific research would be channeled to iron out other issues in the society, where the first consideration is poverty ratio raising across the globe with ever increasing inflation and economy. Due to recent detrimental international conflicts such as wars on the western-east coasts and Covid 19 back in 2019 and 2020, many countries are still stumbling across several obstacle in the recovery steps. Instead of working scientific advancements, it can be of use to allocate that money and efforts on solving this aforementioned problem, which could make an actual difference. Plus, diverse kinds of pollution has covered the settings in many countries, raising an increasing concern whether all funding should be targeted at this. This is mainly because different chronic diseases and poor living conditions are worsening the quality of life in these countries, and it may be a cunning initiative to aim government funding in this, to enhance living conditions and fulfill concern by common people. India is an evident instance in this regard: despite the challenges of volatile socio-environmental conditions and sometimes harmful environment, especially for the younger generation, it continues to display significant scientific progress that demands considerable financial resources, a paradox which shows that investing in science cannot do with alone.</p>
<p>Having said that, I assume that investments in science speak to mostly advantageous sides, where one of its advantages is the probability to invent life-enhancing tools. GPS and WIFI technologies are direct results of researches done to explore the space, which are then put into use in everyday life. These technologies serve as a main back bone in many areas ranging from medicine to economics. Therefore, many technologies we consider routine were result of discoveries that were not directly aimed at commercial use.</p>
<p>Furthermore, scientific discoveries oftentimes serve as seeds for broader improvements in the society, and its economic impact is large. Nations that invest in science often reap huge benefits across many sectors, while new industries emerge, and old ones are transformed. The result of which is a chance to create more jobs, thus aiding in solving a common issue - the unemployment ratio as well as poverty.</p>
<p>In conclusion,although existing problems make it neglect investing in scientific discoveries, I feel that this investment is far favorable considering not directly but eventually having its influence on economy and daily life quality. (</p>`,
    vocabulary: [
      { word: "Widely perceived as inadequate", definition: "generally considered or viewed as insufficient" },
      { word: "Intrinsic importance", definition: "inherent or natural value within something itself" },
      { word: "Discoveries in science", definition: "new findings or breakthroughs achieved through scientific research" },
      { word: "Channeled to address pressing challenges", definition: "directed or used to solve urgent problems" },
      { word: "Escalating poverty levels", definition: "rapidly increasing rates of poverty" },
      { word: "Ever-increasing inflation", definition: "continuously rising prices and living costs" },
      { word: "Detrimental international conflicts", definition: "harmful or damaging disputes between nations" },
      { word: "Stumbling across obstacles in recovery", definition: "encountering difficulties during a process of improvement or restoration" },
      { word: "Aforementioned problem", definition: "the issue that has been mentioned earlier in discussion or writing" },
      { word: "Multifaceted forms of pollution", definition: "various and complex types of environmental contamination" },
    ],
  },
  {
    id: "t2-10",
    testNumber: 10,
    task: 2 as const,
    question: "Environmental protection is the responsibility of politicians, not individuals, as individuals can do too little.",
    wordCount: 489,
    content: `<p>There has been a huge positive movement towards concerns on environmental degradation, as its impact on people's life is rising, and it is suggested that those who have authorities, politicians, should be the ones to cater for environment to mitigate its problems, not the common folk.I would oppose to this idea, as individuals lack power and resources to take actions, while I can get a picture why this idea is being put forward. One might argue that it is not just government accountable to establish environmental law, protecting flora and fauna, where the contribution people make also plays a huge intrinsic role therein. By making environmental conscious actions in their daily lives, such as recycling, reducing their energy consumption, switching to more eco-friendly energy supplies, and decreasing their carbon footprint, they are able to contribute as much as any government could do. Already developed countries, for instance, have raised such awareness in their individuals' opinions, and thus individuals put an extra effort to make the life more sustainable in their country. Such environmental awareness in ordinary lives of people can ensure the healthy growth and clean settings in communities, which do not only assist government as a whole, but do aim to improve the quality of life. Said that, what individuals might not possess is the power to further maximize the output of their efforts. Likewise countries with the significant amount of control over actions and law, citizens are not in capability to confer fully-provided catering to the environment, and might face an obstacle doing so. Meantime, the outcome being obtained by the government can actually make a noticeable difference. They at the local, state and national levels can create and enforce law, a regulation that tackles with the pollution, preserve natural resources and address issues such as climate change. Countries, furthermore, can also sign international agreements regardless of boundaries between them, a hassle that a citizen cannot in most cases manage to achieve, to unite their power and solve common geographical issue to make a real progress, where the Paris agreement can be a relevant example. Plus, governments are uniquely positioned to deal with this crisis head-on, as financial strain cannot be a much of deal for them. Safeguarding environment, setting up law and implementing green policies might require a huge amount of money and effort. Sometimes not thousands but millions of dollars, an amount that many common people might struggle with to fund. Therefore, allocating reasonable funding to environmental initiatives should be accountability of those with power. It can be supported by the fact that people are, yet, supplying the government through taxation, it is a moral and societal duty of the government to invest in environmental advancement.</p>
<p>To conclude, a positive impact on the environment can be added through the little steps individuals take, whereas to make a real shift towards solving the issue the government should tailor green policies, deploying its authority and means. (</p>`,
    vocabulary: [
      { word: "Mitigate its problems", definition: "reduce or lessen the severity of environmental issues" },
      { word: "Lack power and resources to take actions", definition: "be unable to act effectively due to limited authority or funding" },
      { word: "Environmentally conscious actions", definition: "behaviors guided by awareness of their impact on the planet" },
      { word: "Reducing energy consumption", definition: "lowering the use of electricity, fuel, or other energy sources" },
      { word: "Eco-friendly energy supplies", definition: "energy sources that do not harm the environment, such as solar or wind power" },
      { word: "Carbon footprint", definition: "the total amount of carbon dioxide and greenhouse gases produced by human activities" },
      { word: "Make life more sustainable", definition: "create conditions that support long-term environmental balance and well-being" },
      { word: "Environmental awareness", definition: "understanding and concern about ecological issues and their effects" },
      { word: "Healthy growth and clean settings in communities", definition: "development that ensures public health and a pollution-free environment" },
      { word: "Maximize the output of their efforts", definition: "achieve the highest possible results from environmental actions" },
    ],
  },
  {
    id: "t2-11",
    testNumber: 11,
    task: 2 as const,
    question: "Many men and women are making the decisions to have children later in life. Why is this trend occurring? What are the impact of this development on both family and society?",
    wordCount: 603,
    content: `<p>It is argued that as of now later parenthood has become a common trend for young couples, as it can be supported by the fact that it is financially and mentally favorable for upcoming parents. The result of such scenario can be economic strain and higher number of stable families on the society, while for young families it may open a space for privacy, development and less burden on children if the family is divorced.</p>
<p>Focusing on the determinants of this shift of delayed parenthood, financial preparation can stand out among many reasons. With rapid changing economy of many countries and prices, many people prefer to have kids once achieved a financial independence in their life. Most of the dilemmas and problems in a family occur due to a lack of money, where young couples struggle balancing their family expenses having two or more children at the same time, a situation that brings the family to the poverty. If looked, in fact, countries having a poverty issue is mostly likely to turn out to be the ones with the higher ratio of per child in a family, while developed and economically independent countries have only one or two kids, a paradox that clearly shows why some focus on having later and lesser children. Another driver of this can be related to child upbringing courses' popularity. This sort of courses usually aim to educate upcoming mothers and fathers about difficulties and future issues that might arise during their parenthood, which is rather practical, and thus favored by many nowadays. This helps them to be prepared mentally and raise well-mannered children while stumbling across no challenge at all during the process, a package of lessons that might come handy especially for mothers as they are the responsible ones for child's growth in most traditional families. Delayed birth outcomes clearly associate with detrimental societal issues. To make it more clear, Japan - a country with the low reproduction rate - is facing what is known as declined population growth, where a volume of work force can shrink significantly, leaving a country with small digits of economic boost. Therefore, this country is taking measures to mitigate the issue by legislating policies for families to increase birth ratio, and even conferring incentives. Regarding impact of later parenthood on families, it is positive in most cases.</p>
<p>Firstly, privacy and self-development of parents as mothers and fathers can be urged, having more time to get to know each other well before deciding having a child, travelling and focusing on their career growth and education. Once have faced an obstacle, such parents are ready to alleviate it with joined force, not blaming the other for this situation.</p>
<p>Moreover, there is less probability to suffer for children in such families, as parents are well familiar with each other, and ready to deal with issues as a family. Later parenthood can result in more family-oriented couples, with stable moral support to each other. Notably, there are more figures regarding a divorce among young families - the worst outcome is the suffering a child has to do with. However, such risks are usually dealt with because of aforementioned reasons such as knowing each other well, preparation for parent life, and stable income to raise a child.</p>
<p>In conclusion, financial and mental preparation are the main triggers for delayed choice of parenthood; the negative influence on the economy and a higher likeliness of a stable family are the outcomes of it. Hence, considering it is mostly advantageous, such actions from young couples should be inspired, with baring in mind the economic state of a country.</p>`,
    vocabulary: [],
  },
  {
    id: "t2-12",
    testNumber: 12,
    task: 2 as const,
    question: "These days people prefer to watch live performances (Shows, concerts) through tv or computer, online rather than go to the place of event.",
    wordCount: 417,
    content: `<p>Indisputably the internet has shaped much of the aspects of our live, turning upside down the way how we engage in many activities, and with that now it is a commonplace to see people opting for watching live performances online via their gadgets, not in the conventional way as before. I would argue there are more benefits that come with this, and thus am completely on the side of this view, although I believe there are some reasonable counterarguments to it.</p>
<p>Admittedly, live performances are better watched on the spot, as it can provide unrepeatable experience. Seeing your favorite singer or performer in person, and taking a few pictures are the most satisfying moments, and these make a person's experience unforgettable. Therefore, each year millions of people purchase tickets before even the concert begins months before, just to feel the environment of being present there rather than watching it several days for much affordable price online.</p>
<p>Having said that, I assert that our gadgets have now made it easier to feel the same feelings for far favorable reasons.</p>
<p>First of all, it is about convenience. As attending a live performance requires buying tickets at high prices, it also involves travelling to the place of performance along with the accommodation and food costs, all of which make it even challenging for most of the people to be able to attend, While these hardships are what stop people relishing, online platforms offer it for reduced prices with comforts like being able to watch them whenever people want, considering the fact that they may have work or studies. Plus. as above mentioned price is another common issue. While prices of tickets of well-known singers are exorbitant, platforms like Twitch or YouTube offer recorded versions for reasonable prices, and this can be a reason why many people now favor watching live performances at home, even if it means not in the exact time of the performance.</p>
<p>Furthermore, online streamed events are accessible regardless of age and personal circumstances. Streaming live performances online allows disabled people or those with non-apparent illnesses to enjoy the event at the fullest;meanwhile, young people can also tune in and watch the event: in cases when there are no supervisors to escort them to the spot of the event.</p>
<p>In conclusion, a wide range audience accessibility, low cost and lesser hustle to watch the live performance are the opportunities that make online broadcast performance desirable among viewers, while attending the real event has also benefits to offer.</p>`,
    vocabulary: [],
  },
  {
    id: "t2-13",
    testNumber: 13,
    task: 2 as const,
    question: "Full-time students should spend a lot of time on studies, but they should be involved in other activities too.",
    wordCount: 404,
    content: `<p>In fact, a university life of a student usually keeps them in a strict timetable, and most of full-time students are engaged in studies. There is, however, a view that the involvement of other activities like outdoor ones, volunteer work and sports might benefit them as well. Personally, I totally support this view, as focusing solely on academic achievement can harm than good as a whole. While I believe in the necessity of extracurricular activities, I also neglect that academic achievements can be of importance. During university years, for most of the students the main priority is to acquire as much as possible knowledge of the course they are doing, as this is going to be useful and vital in their future career, while being involved in other activities can come as a distraction, and shift their concentration. Nevertheless, extracurricular activities should be encouraged among full-time students for reasons, like these can help lessen the academic pressure. Constant involvement in academic studies might put burden on students, such as emotional and physical tolls, where these can have a negative impact on both mental and physical well-being of a student, who is due to further continue their studies for 4 or 5 years. Hence, it is common in American universities to offer such activities, sports clubs and volunteer work, to students, which is in order to unwind from consistent academic pressure. Another potential perk student may be provided with these leisure time activities is the enhanced chance to gain skills outside of the classroom, and the ones that these classrooms are in capability to confer. Students can practice multiple kinds of expertise, performing arts, being volunteers in public and social work, and doing diverse sports, and thus improving soft and hard skills beyond classrooms like leadership, resistance, communication skills, adaptability, problem solving and to name just a few- often difficult to teach.</p>
<p>Furthermore, to prevent any extra challenges while being involved in extracurricular activities, students need to maintain a right balance between scholar and leisure activities. By this way, the downside above mentioned can be fed off.</p>
<p>In conclusion, extracurricular activities are indeed vital tools for students to let their steam of and have an opportunity to grow skills, which otherwise are possible to obtain, and these are the reasons why I am of this opinion, although they may interrupt students' academic studies. However, I feel that it is also important to balance of them.</p>`,
    vocabulary: [],
  },
  {
    id: "t2-14",
    testNumber: 14,
    task: 2 as const,
    question: "Some countries introduced a law to limit the hours that employees ask employer to work. Why do you think governments did this ? Is it a positive or negative development ?",
    wordCount: 333,
    content: `<p>It is argued that reducing working hours of employees has been required from companies to legislate in their workplaces around the world, as this legislation targets to boost the quality of work and personal life of people,I am completely critical of the view that it is a positive development. The main motive behind shortened workweeks is straightforward, where the law prioritizes the well-being of workers, aiming to improve their both professional and personal life. Beyond spending increased time with family members, which strengthens the bond within family and fosters mutual understanding, this rule also focuses on omitting emotional and physical tolls that occur during the workweeks of workers, such as burnout, stress and depression - ones that might be a direct result of the rush to meet deadlines or pressure from higher ups of their workplace, for instance. Such legislation could lead to situations where workers begin to care more about themselves, feeling more content with their lives. This, in turn, might have a positive effect on their performance, as a stable personal life often contributes to better outcomes at work. Although there are reasonable justification to why this shift may be a useful one, I opt to the view that it is rather negative, and this rule is no silver bullet to improve the quality of work in companies being done. This is mainly because one-size-fits-all laws can be blunt instruments, while it is far from being feasible in almost all countries, To put it simple, such a legislation can be achieved in certain countries, like western countries with high economic country state, it is not achievable in Asian or African countries, which reversely shows a low-state of economy, and reduced work days might result in a downturn in economical progress.</p>
<p>In conclusion, among many drivers towards the preference to short work hours concern on worker well-being stands out, and it is skeptical that this cannot be practical in any geographical location, given the fact that every country has diverse economic states.</p>`,
    vocabulary: [
      { word: "boost the quality of work and personal life", definition: "to improve both job performance and personal well-being. completely critical of the view – strongly disagreeing with or opposing an opinion. the main motive behind shortened workweeks – the key reason for reducing the number of working days. law prio" },
      { word: "I mprove both professional and personal life", definition: "to make work life and private life better together. spending increased time with family members – using more time to be with family. strengthens the bond within family – makes family relationships closer and stronger. fosters mutual understanding – h" },
    ],
  },
  {
    id: "t2-15",
    testNumber: 15,
    task: 2 as const,
    question: "However, many older people do not take enough exercise. What could be the reason for this? What can be done to encourage them to take exercise?",
    wordCount: 627,
    content: `<p>Maintaining an active lifestyle is indeed an intrinsic aspect of its sort, usually more needed in late years of life, and there is a suggestion by doctors that regular workout should be ensured by the elderly, as they seem to do so less, which is mostly owing to poor health conditions and financial barriers. There are several initiatives that can be put forward to urge routine exercises for the elderly. To start with the reasons behind why there are increasingly less number of elderly people taking regular exercise, the main driver can be, not having motivation which many can assume, but the fact that senior people oftentimes struggle to do exercises, which seem quite easy for younger people, due to health risks. In their late 50s or 60s, most elderly people develop chronic diseases such as heart attack or respiratory illness - doing workout can do more harm than good. Plus, these harmful conditions are often results of their unhealthy lifestyles, which they seem to struggle to quit later on even when they realize their adverse effects to their health. Even when they start following balanced life style, they might see negative effects of doing exercises due to long term influence of habits, say, smoking can prevent from running. Another significant, yet often overlooked, reasons is the financial constraint. Due to lack of enough money - as it is obvious going to the gym or eating organic and following a healthy diet require some money - the elderly might face a challenge, when they are already in difficulty, paying daily life necessities and constant treatment.</p>
<p>Moreover, there are thousands, if not millions, of elderly without providers, and there are less programs which support elderly fitness programs or urge elderly to do workout, while it can be admitted that the government does confer financial help but only with fundamental opportunities like living place and daily eating options. However, other aspects of healthy elderly life is often neglected. As a mitigation towards this issue, the government can provide advanced approaches to maintain an active lifestyle. For example, one way to do so can be developing individually tailored exercising programs, taking into the account of individual medical records. In other words, people who have lung diseases can skip parts of day to day exercises which can have a detrimental impact on these parts of the body. This can noticeably reduce any concerns by seniors and induce them to initiate exercising on a regular basis. Take Germany - a country well-known for its rehabilitation programs - offers these particular recovery programs for its elderly population, and this country has experienced a moderate increase in their percentage of healthy elderly population ratio. Further, more funding should be channeled towards aforementioned programs and even individual based funding should be given to the elderly, considering which sort of physical treatment might be necessary to them. This is mainly because around the world some governments are focusing heavily on combating diverse types of pollution or economic problems - in fact, these are important - while it should not be forgotten that the senior population is a vital layer of the community: many young population rely on the advice given by the valuable expertise of the elderly, and it is this population who usually keeps cultural traditions and customs and passes it on to the next generation. While there might be no supporters of them, it is also the moral duty of the government to be of a great deal of help to them.</p>
<p>In conclusion, seniors often lack healthy bodies or money to do workout on a regular basis, while these issues can be tackled with offering personalized exercise programs and financial aid. This will surely be a good investment towards a long term sustainability.</p>`,
    vocabulary: [
      { word: "overall levels were relatively lower", definition: "general figures were comparatively small. showing higher satisfaction – expressing a greater level of approval. vice versa – the opposite relationship applies. ranked highest as a source of dissatisfaction – was the main contributor to negative views" },
    ],
  },
  {
    id: "t2-17",
    testNumber: 17,
    task: 2 as const,
    question: "Employers should give their staff at least four weeks of holiday a year, as longer holidays make employees better at their job. To what extent do you agree or disagree?",
    wordCount: 496,
    content: `<p>Generally, there are a number of measures to enhance the performance of workers, and there is a view that providing a four-week holiday can do the trick in this regard. However, I do admit the notion behind this, yet I oppose to this idea as it also entails some drawbacks, such as reducing overall productivity of the company and unequal impact across diverse sectors. One of the the most primary reasons of introducing four weeks of holidays is an intrinsic factor that lies behind it. Such extended holidays can help to boost overall work ethics and loyalty within the company. This is mainly due to the fact that employees may initiate feeling valued and more satisfied with their positions in their work settings, which might lead to increased work output and lower employee retention in the company in the long run - the most important considerations of the employers - while better work and life balance can be achieved, where employees can have a chance to spend more time with their family members. Perhaps, this is why many companies in developed countries gravitate towards such holiday-options, being aware of its irreplaceable benefits. I, however, assume that these prolonged holidays can show also adverse effects to mainly the company. While I admit that it is somehow a promising shift to boost performance, I also believe that it can reduce output of the company and put it in the financial strain. During extended annual leave of workers, say, if the company is in the agricultural sector, there might happen a greater loss of manpower. This can be observed when work-flow disruptions and slower operations exist because of longer staff absences. Results in such a scenario are vivid: lower output, higher labour costs and reduced profitability. Small enterprises usually struggle during peak seasons when there are several employees taking longer holidays, for instance. Further, longer holidays can turn out favorable to not all sectors of employment equally. While these increased holidays can benefit to government sectors such as education, politics and services- there employees are more likely to suffer from job-related stress and burnout-, they cannot do so to agriculture and economics. These areas oftentimes operate during at different timetables and are reckoned to be the cornerstone of the economy, where any delays in the performance can severely influence the country’s productivity and place it in a difficult condition. Plus, these delays can lead to increased customer dissatisfaction and lower quality of services. Therefore, most of the health-care and transport sectors, for example, deter prolonged absences of employees within workplaces,where extended leave cycles cause issues such as delayed surgeries of patients or crowded stations and passenger dissatisfaction due to the lack of drivers.</p>
<p>To conclude, prolonged holidays do represent increased performance of workers in the company because of greater work and life balance and satisfaction of employees, yet it is undesirable for some factors,since it cannot be established in all work places evenly and may show reverse outcomes sometimes.</p>`,
    vocabulary: [],
  },
  {
    id: "t2-18",
    testNumber: 18,
    task: 2 as const,
    question: "What are those problems? In order to reduce the problems, should we discourage people to use cars?",
    wordCount: 576,
    content: `<p>At present, roads are filled with transport such as cars, buses and heavy trucks more compared to the past few decades. To prevent environment issues a huge amount of cars on roads are due to cause, it is favorable to put limitation on them, while I also believe that discouraging people from using their beloved cars is somewhat an action of unjust. One of the worst downsides of unlimited use of cars is the possible detrimental impact on the environment. It is true that the most amount of carbon footprint account for the use of cars on roads, which is rather a silent killer. While most people blame factories or human footprint, such as waste and artificial fires, as a reason for pollution, cars are neglected as their effect is rather long term and slow. However, in the long run it is going to be built up in noticeably bigger scale, and it may effect lives of millions at least, and our future generations would be victims of this, for it is proven that carbon dioxide and other lethal gases emitted by transport can have severe outcomes on the ecology, resulting in air pollution and diverse chronic illnesses such as asthma and respiratory illness. Take Tashkent - the capital of my home country - which is experiencing a number of problems due to the heavy transport volume, where the poor air quality is the most considered issue.</p>
<p>Admittedly, the discouragement of car uses can entail some tangible benefits. For example, aforementioned types of illnesses can be initial issues dealt with the help of this measurement, thereby improving the quality of air as well as life in most urban areas with the high density of population such as London, New York and Tokyo, where the most significant amount of issues with cars are observed. Plus, less cars on roads can also mean less traffic congestion, which can be a rather promising advantage of the initiative, as now many urban regions suffer from heavy traffic on roads. This oftentimes lead to delays on some important events and meetings in the lives of the majority. Such an initiative was promoted in the city of Copenhagen years ago, where the use of bikes instead of cars was strongly motivated since this type of transport is both environment-friendly and could mitigate traffic-related issues.</p>
<p>Having said that, I also remain convinced that it is irrational to minimize the use of cars as it can be seen unjustifiable by some. This action can seem something like the limitation of freedom to people, while there are millions of car enthusiasts. As a result, there might arise some public dissatisfaction and protests against this rule, leading to more societal conflicts in the future.</p>
<p>Moreover, there are also diverse types of professions which rely on cars like car service companies. The income of employees in these professions might be cut off due to this motion. Therefore, it is advisable that before legislating rules that deter car usage, we should also reckon adverse effects it might bring about, and perhaps finding the solution to these effects can be a wise step like conferring employment to those who can lose their jobs as a result of the legislation.</p>
<p>In conclusion, because of how noticeable the influence of cars on the environment and one’s well-being is, we should impose measures to reduce car usage, of course. However, this cannot be done unless after effects of this legislation is ensured.</p>`,
    vocabulary: [],
  },
  {
    id: "t2-19",
    testNumber: 19,
    task: 2 as const,
    question: "Many believe that it is important to protect all wild animals, while others think that it is important to protect some, not all of them. Discuss both views and give your opinion.",
    wordCount: 520,
    content: `<p>Preservation priorities over different species have been a matter of the debate among individuals, with some arguing that it is vital to protect all species without exceptions due to moral value, while there are those who support the protection of certain, more important, species. Personally, I support the latter view for reasons: we have limited funding,and the former view is impractical. On the one side, it is somehow rational to assume that we are responsible to preserve all wild animals. This idea is put forward because we, as intelligent beings, possess duties over other species on the Earth. Plus, thanks to what 21st century is able to provided we have all opportunities such as technological and biological ones to take care of all species such as those which are losing their habitat due to human actions. Speaking of this, At present human environmental footprint is leaving most animals in vulnerable state: they lose their local habitats because of agriculture or manufacturing or become victims of hunting for their fur or bones. Once thought common, elephants now turn out to be on the edge of extinction, and they are great examples of human hunting results. That is why we do not sure know for now which animal can die out in the future,and for the long term sustainability of the animal kingdom we should preserve all species, considering we have moral and ethical values in front of these animals whether they are becoming extinct or not. With that being said, I remain in the view that it is impossible to safeguard all species on the Earth.</p>
<p>First of all, we should consider that funding towards animal preservation projects is finite. Having already several issues of greater importance like global warming and pollution, we are not in the state to channel all the money on this regard. For it is more possible to determine the preservation of which animals is the priority for us, where some animals which are overabundant or can have lesser importance not only for us, but also for the environment should be overlooked in the list. For instance, it is irrational to put money on the preservation acts of invasive species or parasitic insects - these either damage ecosystems or humans. Further, the idea of preserving all species, taken in the logical sense, is almost unachievable. As aforementioned, even we have all possibilities to preserve all species, people cannot do so for all species at the same time. It is rather more feasible to set up targeted conservation plans, where focusing on particular endangered species - in this case these would be pandas, for instance - should be the first action, and then going down the list can do the trick. Logically, safeguarding all species, regardless of their conservation statues, is somewhat a impractical movement.</p>
<p>In conclusion, although our opportunities in biology and technology can allow us to protect all wild animals taking into account of moral duties, it is still impossible to do so and a financially difficult task to accomplish,where I believe targeted animal preservation and skipping some animals of less ecological benefit would be reasonable.</p>`,
    vocabulary: [],
  },
  {
    id: "t2-20",
    testNumber: 20,
    task: 2 as const,
    question: "Some think this high income is necessary, while others believe it is unfair.",
    wordCount: 373,
    content: `<p>It is commonly believed that the pay ordinary employees receive is significantly lower than that of company directors, and this is thought to be unjust to these small position workers. It is true that the importance of ordinary workers is great due to commitment and hard work they represent. I, however, would side with those who assume the high income of directors is justified, for they play an intrinsic role within the company, and it is replaceable. Workers tend to receive low salary for the work they do in different companies widely around the world. This is somewhat wrong, because even so-called huge companies give only around a couple of thousand dollars to their employees, who otherwise may serve an important role in the company, while their roles are oftentimes overshadowed. In fact, there is no such insignificant positions in any company. Ensuring good pay to employees might be vital to improve overall work aesthetics and ensure higher incidence of employee retention, which is oftentimes a leading factor why most workers tend to switch positions between companies. For instance, Germany - a country well known for its employee care - maintains equal rights and a salary amount across all positions of work, of course with some exceptions to be seen.</p>
<p>Having said that,I remain convinced that a sizable income of senior positions in companies is rational for several factors, among which the fact that their role has more impact on the company’s future as a whole than any junior positions is the most important justification. This is mainly because the most influential decisions are made by these individuals in the company, and they also bear more responsibility over the outcome of this action as opposed to low position-workers. If any adverse outcome is to be seen, this is going to mostly impact these certain individuals. Therefore, ensuring good pay to them is reasonable to cover the cost of tension at work and responsibility they feel.</p>
<p>In conclusion, to maintain healthy working environment and satisfied workers it is vital to ensure equality in terms of income among workers, yet I feel that it is even far favorable to confer lucrative income for higher positions in the company, as their roles simply cannot be replaced.</p>`,
    vocabulary: [
      { word: "Thought to be unjust", definition: "considered unfair" },
      { word: "Small-position workers", definition: "employees in junior or low-ranking roles" },
      { word: "Commitment and hard work", definition: "strong dedication and effort" },
      { word: "Side with those who assume", definition: "agree with the people who believe" },
      { word: "Justified income", definition: "salary that is reasonable or valid" },
      { word: "Intrinsic role", definition: "an essential, built-in function" },
      { word: "Low salary", definition: "insufficient payment for work" },
      { word: "Serve an important role", definition: "have a meaningful, necessary function" },
      { word: "Oftentimes overshadowed", definition: "frequently ignored or undervalued" },
      { word: "Ensure higher employee retention", definition: "help keep staff in the company longer" },
    ],
  },
];

export function findWritingEssay(id: string): WritingEssay | undefined {
  return WRITING_ESSAYS.find((e) => e.id === id);
}
