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
];

export function findWritingSample(id: string): WritingSample | undefined {
  return WRITING_SAMPLES.find((s) => s.id === id);
}
