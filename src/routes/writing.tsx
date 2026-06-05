import { createFileRoute, Link } from "@tanstack/react-router";
import { WRITING_SAMPLES, WRITING_ESSAYS } from "@/lib/writing-samples-data";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Youtube, ExternalLink, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  WRITING_TASKS,
  getAllWritingProgress,
  type WritingStatus,
} from "@/lib/writing-data";
import { cn } from "@/lib/utils";
import { SteveMining, McItem } from "@/components/minecraft-decorations";

export const Route = createFileRoute("/writing")({
  validateSearch: (search: Record<string, unknown>) => ({
    task: (search.task as string | undefined) ?? undefined,
  }),
  head: () => ({
    meta: [
      { title: "IELTS Writing - Task 1 & Task 2 | Abduraimov Erkinjon" },
      { name: "description", content: "IELTS Writing Task 1 and Task 2 practice." },
    ],
  }),
  component: Writing,
});

const STATUS_META: Record<WritingStatus, { label: string; className: string }> = {
  not_started: { label: "Not started", className: "bg-[#3A3A3A] text-[#9A9A9A] border-[#5A5A5A]" },
  in_progress:  { label: "In Progress", className: "bg-[#FFD700]/15 text-[#FFD700] border-[#C09A00]" },
  completed:    { label: "Completed",   className: "bg-[#5D8A3C]/20 text-[#7DBD50] border-[#3D6B21]" },
};

// ── HTML-based practice tasks (open in new tab, no routing needed) ──────────
type HtmlTask = {
  id: string;
  task: 1 | 2;
  type: string;
  title: string;
  description: string;
  image?: string;
  htmlFile: string;
  prompt?: string;
  minWords?: number;
  timeMinutes?: number;
};

const HTML_TASKS: HtmlTask[] = [
  {
    id: "html-t1-water-use",
    task: 1,
    type: "Pie Chart",
    title: "Residential Water Use",
    description: "The charts below show information on residential water use in 1988 and 2008.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    htmlFile: "/passages/task1_1.html",
  },
   {
    id: "html-t1-water-use-purposes",
    task: 1,
    type: "Table",
    title: "Water use purposes",
    description: "The table below shows water use for different purposes in four countries.",
    image: "/writing-images/task1_12.jpg",
    htmlFile: "/passages/task1_12.html",
  },
  {
    id: "html-t1-tourist-numbers-to-ausralia",
    task: 1,
    type: "Mixed",
    title: "Tourist numbers to Australia and Types of travel",
    description: "The charts below show the number of tourists to Australia and the types of travels between 1995 and 2005.",
    image: "/writing-images/task1_10.jpg",
    htmlFile: "/passages/task1_10.html",
  },
    {
    id: "html-t1-unemployment-levels-in-ireland",
    task: 1,
    type: "Line Graph",
    title: "The graph below shows unemployment levels in Ireland and the number of people leaving the country between 1988 and 2008.",
    description: "The charts below show the number of tourists to Australia and the types of travels between 1995 and 2005.",
    image: "/writing-images/task1_11.jpg",
    htmlFile: "/passages/task1_11.html",
  },
  {
    id: "html-t1-female-parliament-members",
    task: 1,
    type: "Line Graph",
    title: "Female Members of Parliament",
    description: "The graph shows the percentage of female members of parliament in five European countries from 2000 to 2012.",
    image: "/writing-images/government_funding.png",
    htmlFile: "/passages/task1_2.html",
  },
  {
    id: "html-t1-uk-steel-industry",
    task: 1,
    type: "Line Graphs",
    title: "UK Steel Industry",
    description: "The line graphs show changes in UK steel demand, production, imports and employment from 1970 to 2000.",
    image: "/writing-images/task3.jpg",
    htmlFile: "/passages/task1_3.html",
  },
  {
    id: "html-t1-uk-steel-employment",
    task: 1,
    type: "Mixed Graphs",
    title: "Value Changes and Employment in the UK Steel Industry",
    description: "The charts illustrate value changes and employment status in the UK steel industry between 1970 and 2000.",
    image: "/writing-images/task1_3.jpg",
    htmlFile: "/passages/task1_4.html",
  },
  {
    id: "html-t1-clothing-import-prices",
    task: 1,
    type: "Bar Chart",
    title: "Average Price of Imported Clothing",
    description: "The bar chart compares the average cost of clothing imported into the European Union from six countries in 1997 and 2003.",
    image: "/writing-images/task1_4.jpg",
    htmlFile: "/passages/task1_5.html",
  },
  {
    id: "html-t1-milk-production",
    task: 1,
    type: "Table",
    title: "Milk Production in Four Countries",
    description: "The table shows the production of milk in the Netherlands, Australia, Tanzania and Guatemala in 1990, 2000 and 2010.",
    image: "/writing-images/task1_6.jpg",
    htmlFile: "/passages/task1_6.html",
  },
  {
    id: "html-t1-milk-production-countries",
    task: 1,
    type: "Table",
    title: "Annual Milk Production",
    description: "The table compares annual milk production in four countries across three years: 1990, 2000 and 2010.",
    image: "/writing-images/task1_7.jpg",
    htmlFile: "/passages/task1_7.html",
  },
  {
    id: "html-t1-aluminium-recycling",
    task: 1,
    type: "Process Diagram",
    title: "Recycling Aluminium Drink Cans",
    description: "The diagram shows the stages in the recycling of aluminium drink cans over a six-week process.",
    image: "/writing-images/task1_8.jpg",
    htmlFile: "/passages/task1_8.html",
  },
  {
    id: "html-t1-communication-methods",
    task: 1,
    type: "Line Graph",
    title: "Communication Methods",
    description: "The line graph shows the percentage of people who used five different communication methods between 1998 and 2008.",
    image: "/writing-images/task1_9.jpg",
    htmlFile: "/passages/task1_9.html",
  },
  {
    id: "html-t1-films-and-ticket-sales",
    task: 1,
    type: "Bar Charts",
    title: "Films Released and Cinema Ticket Sales",
    description: "The charts show the percentages of films released and cinema ticket sales by genre in 1996 and 2000.",
    image: "/writing-images/task1_10.jpg",
    htmlFile: "/passages/task1_10.html",
  },
  {
  id: "html-t1-prison-population-europe",
  task: 1,
  type: "Line Graph",
  title: "Prison Population in Europe",
  description: "The line graph shows the prison population in a European country between 1911 and 2001.",
  image: "/writing-images/task1_13.jpg",
  htmlFile: "/passages/task1_13.html",
},
{
  id: "html-t1-noise-pollution",
  task: 1,
  type: "Bar Chart",
  title: "Noise Pollution Effects",
  description: "The chart shows the number of people effected by noise pollution.",
  image: "/writing-images/task_14.jpg",
  htmlFile: "/passages/task1_14.html",
},
{
  id: "html-t1-american-japanese-office",
  task: 1,
  type: "Map",
  title: "American and Japanese Office",
  description: "The diagrams below show a typical American and a Japanese office.",
  image: "/writing-images/task1_15.jpg",
  htmlFile: "/passages/task1_15.html",
},
{
  id: "html-t1-universities-canada",
  task: 1,
  type: "Bar Chart",
  title: "Academic and Employment Statistics – Canadian Universities",
  description: "The chart below gives information on different academic and employment statistics for three universities in Canada.",
  image: "/writing-images/task1_16.jpg",
  htmlFile: "/passages/task1_16.html",
},
{
  id: "html-t1-brindell-town-development",
  task: 1,
  type: "Map",
  title: "Development of Brindell Town",
  description: "The diagrams below show the development of a town called Brindell and the local areas in 1800, 1900 and 2000.",
  image: "/writing-images/task1_17.jpg",
  htmlFile: "/passages/task1_17.html",
},
{
  id: "html-t1-motorbike-licenses",
  task: 1,
  type: "Bar Chart",
  title: "Motorbike Driving Licences by Gender",
  description: "The chart shows the percentage of male and female who had driving licenses for motorbikes in one European country.",
  image: "/writing-images/task1_18.jpg",
  htmlFile: "/passages/task1_18.html",
},
{
  id: "html-t1-patient-service-ratings",
  task: 1,
  type: "Table",
  title: "Patient Service Ratings",
  description: "The table below shows the percentage of patients saying the service was very good.",
  image: "/writing-images/task1_19.jpg",
  htmlFile: "/passages/task1_19.html",
},
{
  id: "html-t1-marriage-australia",
  task: 1,
  type: "Table",
  title: "Marriage Status and Age in Australia",
  description: "The table below provides information on marriage status and age from 1960 to 2000 in Australia.",
  image: "/writing-images/task1_20.jpg",
  htmlFile: "/passages/task1_20.html",
},
{
  id: "html-t1-tourism-jobs-uk",
  task: 1,
  type: "Chart",
  title: "Tourism Jobs in a UK City",
  description: "The chart below shows the number of jobs in tourism-related industry in one UK city between 1989 and 2009.",
  image: "/writing-images/task1_21.jpg",
  htmlFile: "/passages/task1_21.html",
},
{
  id: "html-t1-coal-fired-power-station",
  task: 1,
  type: "Diagram",
  title: "Coal-Fired Power Station",
  description: "The diagram below shows how the electricity is produced through a coal-fired power station.",
  image: "/writing-images/task1_22.jpg",
  htmlFile: "/passages/task1_22.html",
},
{
  id: "html-t1-spending-categories-australia",
  task: 1,
  type: "Graph",
  title: "Spending Categories in Australia",
  description: "The graph below shows the percentage of total spending in five different categories from 1970 to 2010 in one city in Australia.",
  image: "/writing-images/task1_23.jpg",
  htmlFile: "/passages/task1_23.html",
},
{
  id: "html-t1-tea-coffee-imports",
  task: 1,
  type: "Bar Chart",
  title: "Tea and Coffee Imports",
  description: "The graph below shows the amount of tea and coffee imported by four different countries in tonnes in 2007.",
  image: "/writing-images/task1_24.jpg",
  htmlFile: "/passages/task1_24.html",
},
{
  id: "html-t1-technology-aid-charities",
  task: 1,
  type: "Table",
  title: "Technology Aid by Charities",
  description: "The table shows the amount of money given in aid of developing countries' technology by charities in the US, EU, and other countries from 2006 to 2010.",
  image: "/writing-images/task1_25.jpg",
  htmlFile: "/passages/task1_25.html",
},
   {
    id: "task2_1",
    task: 2,
    type: "Advantages/Disadvantages",
    title: "Home Education vs Schooling",
    description: "A Task 2 essay about whether educating children at home has more advantages than disadvantages compared with formal schooling.",
    prompt: "In some countries, many people choose to educate children at home by themselves instead of sending them to school.\nDo you think the advantages outweigh the disadvantages?",
    image: "",
    htmlFile: "/writing/task2_1.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_2",
    task: 2,
    type: "Agree/Disagree",
    title: "Younger Leaders in Organizations",
    description: "A Task 2 essay about whether younger people would make better leaders and directors in organizations.",
    prompt: "Leaders and directors in an organization are normally older people. Some people think younger leaders would be better.\nDo you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_2.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_3",
    task: 2,
    type: "Agree/Disagree",
    title: "Watching Live Performances Online",
    description: "A Task 2 essay about whether watching live performances online is preferable to attending events in person.",
    prompt: "These days people prefer to watch live performances, such as shows and concerts, on TV or computer online rather than go to the place of that event.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_3.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_4",
    task: 2,
    type: "Agree/Disagree",
    title: "Group Activities and Life Skills",
    description: "A Task 2 essay about whether team activities teach more important life skills than individual activities.",
    prompt: "Group or team activities can teach more important skills for life than activities which are done alone.\nDo you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_4.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_5",
    task: 2,
    type: "Discussion",
    title: "Women in Police and Military Forces",
    description: "A Task 2 discussion essay about whether women should have equal roles in the police and military.",
    prompt: "Some people believe that women should play an equal role to men in a country's police force or military force such as the army, while others think women are not suitable for this kind of job.\nDiscuss both views and give your opinion.",
    image: "",
    htmlFile: "/writing/task2_5.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_6",
    task: 2,
    type: "Agree/Disagree",
    title: "Public Spaces in Towns and Cities",
    description: "A Task 2 essay about the importance of large public spaces such as squares and parks in urban areas.",
    prompt: "It is important for all towns and cities to have large public spaces such as squares and parks.\nTo what extent do you agree or disagree with this statement?",
    image: "",
    htmlFile: "/writing/task2_6.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_7",
    task: 2,
    type: "Agree/Disagree",
    title: "Copying Others in Fashion and Consumer Goods",
    description: "A Task 2 essay about whether fashion and consumer goods show that people naturally copy one another.",
    prompt: "The tendency of human beings to copy one another is shown in the popularity of areas such as fashion and consumer goods.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_7.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_8",
    task: 2,
    type: "Positive/Negative Development",
    title: "Internet as a Source of World News",
    description: "A Task 2 essay about whether using the internet instead of newspapers and TV for world news is a positive or negative change.",
    prompt: "Nowadays, people use the internet instead of newspapers and TV programs to learn about world news.\nIs this a positive or negative development?",
    image: "",
    htmlFile: "/writing/task2_8.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_9",
    task: 2,
    type: "Agree/Disagree",
    title: "Traditional Ideas and Modern Life",
    description: "A Task 2 essay about whether traditional ideas from older generations are useful for preparing young people for modern life.",
    prompt: "The older generations tend to have very traditional ideas about how people should live, think and behave. However, some people believe that these ideas are not helpful in preparing younger generations for modern life.\nTo what extent do you agree or disagree with this view?",
    image: "",
    htmlFile: "/writing/task2_9.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_10",
    task: 2,
    type: "Agree/Disagree",
    title: "Family Values and School Knowledge",
    description: "A Task 2 essay about whether school knowledge is more important than family values for children’s success.",
    prompt: "Learning values from parents and family is important in children’s success, but knowledge gained at school is more important.\nDo you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_10.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_11",
    task: 2,
    type: "Discussion",
    title: "International Business and National Identity",
    description: "A Task 2 discussion essay about whether international business contact benefits people or harms national identity.",
    prompt: "Many people go to other countries to do business and contact with people. While some think that this contact is positive, others believe that it has a negative impact on the identities of citizens.\nDiscuss both views and give your own opinion.",
    image: "",
    htmlFile: "/writing/task2_11.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_12",
    task: 2,
    type: "Agree/Disagree",
    title: "Longer Holidays for Employees",
    description: "A Task 2 essay about whether longer annual holidays improve employees’ performance at work.",
    prompt: "Employers should give their staff at least four weeks of holiday in a year, as longer holidays make employees better at their job.\nTo what extent do you agree or disagree? Give any relevant examples or experience.",
    image: "",
    htmlFile: "/writing/task2_12.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_13",
    task: 2,
    type: "Cause/Effect/Solution",
    title: "Unhealthy Eating Habits and Obesity",
    description: "A Task 2 cause-and-solution essay about unhealthy eating habits, obesity, and ways to improve diets.",
    prompt: "In many countries, people's eating habits are leading to obesity and other health problems.\nWhy do so many people have unhealthy eating habits? What is the most effective way to help people improve their eating habits?",
    image: "",
    htmlFile: "/writing/task2_13.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_14",
    task: 2,
    type: "Positive/Negative Development",
    title: "Affordable International Travel",
    description: "A Task 2 essay about whether easier and more affordable international travel is a positive or negative development.",
    prompt: "It has become easier and more affordable for people to visit other countries.\nIs it a positive or negative development?",
    image: "",
    htmlFile: "/writing/task2_14.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_15",
    task: 2,
    type: "Agree/Disagree",
    title: "More Good News in the Media",
    description: "A Task 2 essay about whether news media should report more positive stories.",
    prompt: "The media should include more stories which report good news.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_15.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_16",
    task: 2,
    type: "Agree/Disagree",
    title: "Fashion and Consumer Goods",
    description: "A Task 2 essay about whether the popularity of fashion and consumer goods proves that people copy each other.",
    prompt: "The tendency for human beings to copy one another is shown in the popularity of fashion in clothes and other consumer goods.\nDo you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_16.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_17",
    task: 2,
    type: "Agree/Disagree",
    title: "Understanding Cultures Through Multinational Work",
    description: "A Task 2 essay about whether working for a multinational organisation is the best way to understand other cultures.",
    prompt: "The best way to understand other cultures is working for a multinational organisation.\nDo you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_17.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_18",
    task: 2,
    type: "Cause/Effect/Solution",
    title: "Fewer Students Choosing Science",
    description: "A Task 2 cause-and-effect essay about why fewer students choose science subjects and how this affects society.",
    prompt: "It is observed that in many countries not enough students are choosing to study science subjects.\nWhat are the causes of this trend, and what are the effects on society?",
    image: "",
    htmlFile: "/writing/task2_18.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_19",
    task: 2,
    type: "Agree/Disagree",
    title: "Technology and Free Time",
    description: "A Task 2 essay about whether modern technology has really given people more free time.",
    prompt: "It was predicted that with the development of technology, people in the 21st century would have much more free time than in the past.\nTo what extent has this prediction come true?",
    image: "",
    htmlFile: "/writing/task2_19.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_20",
    task: 2,
    type: "Agree/Disagree",
    title: "Good News Stories in the Media",
    description: "A Task 2 essay about whether media organisations should include more good news stories.",
    prompt: "The media should include more stories which report good news.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_20.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_21",
    task: 2,
    type: "Two-Part Question",
    title: "Travelling to Other Countries",
    description: "A Task 2 two-part essay about why people travel abroad and whether this trend is positive or negative.",
    prompt: "Many people are travelling to other countries.\nWhy? Is it a positive or negative development?",
    image: "",
    htmlFile: "/writing/task2_21.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_22",
    task: 2,
    type: "Cause/Effect/Solution",
    title: "Problems of Growing Major Cities",
    description: "A Task 2 problem-and-solution essay about the challenges caused by the growth of major cities.",
    prompt: "As major cities continue to grow, so do their problems.\nWhat problems may this cause? What are the solutions for these problems?",
    image: "",
    htmlFile: "/writing/task2_22.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_23",
    task: 2,
    type: "Two-Part Question",
    title: "The Growing Influence of News",
    description: "A Task 2 two-part essay about why the news has become more influential and whether this is positive or negative.",
    prompt: "The news has an increasing impact on people's lives and has never been this influential before.\nWhy is this the case? Is this a positive or negative development?",
    image: "",
    htmlFile: "/writing/task2_23.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_24",
    task: 2,
    type: "Agree/Disagree",
    title: "Museums and National Culture",
    description: "A Task 2 essay about whether museums and galleries should focus mainly on national history and culture.",
    prompt: "Museums and art galleries should concentrate on works that show the history and culture of their own country rather than works from other parts of the world.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_24.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_25",
    task: 2,
    type: "Cause/Effect/Solution",
    title: "Exercise and Older People",
    description: "A Task 2 cause-and-solution essay about why elderly people may not exercise enough and how to encourage them.",
    prompt: "Many old people do not get enough exercise.\nWhy? What can be done?",
    image: "",
    htmlFile: "/writing/task2_25.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_26",
    task: 2,
    type: "Discussion",
    title: "Technology and Crime",
    description: "A Task 2 discussion essay about whether technology reduces crime or creates new opportunities for crime.",
    prompt: "Some people think technology development decreases crimes, while others believe it actually encourages crimes.\nDiscuss both views and give your own opinion.",
    image: "",
    htmlFile: "/writing/task2_26.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_27",
    task: 2,
    type: "Agree/Disagree",
    title: "Producing Food Locally",
    description: "A Task 2 essay about whether countries should produce most of their own food and reduce food imports.",
    prompt: "Some people suggest that a country should try to produce all the food for its population and import as little food as possible.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_27.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_28",
    task: 2,
    type: "Agree/Disagree",
    title: "Social Skills and Qualifications",
    description: "A Task 2 essay about whether social skills are as important as qualifications for success at work.",
    prompt: "Many employers are employing people with good social skills as well as good qualifications.\nDo you agree or disagree that good social skills are as important as good qualifications to succeed in a job?",
    image: "",
    htmlFile: "/writing/task2_28.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_29",
    task: 2,
    type: "Agree/Disagree",
    title: "Free University Education",
    description: "A Task 2 essay about whether university education should be free for everyone regardless of financial background.",
    prompt: "Some people believe that university education should be free, as everyone has a right to study regardless of financial background.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_29.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
  id: "task2_30",
  task: 2,
  type: "Problem/Solution",
  title: "Food Waste Around the World",
  description: "A Task 2 essay about why millions of tons of food are wasted globally and how this problem can be solved.",
  prompt: "Every day, millions of tons of food are wasted all over the world.\nWhy do you think this is happening?\nAnd how can we solve this problem?",
  image: "",
  htmlFile: "/writing/task2_30.html",
  minWords: 250,
  timeMinutes: 40,
    },
{
  id: "task2_31",
  task: 2,
  type: "Agree/Disagree",
  title: "Traditional Food and Fast Food",
  description: "A Task 2 essay about whether replacing traditional food with international fast food negatively affects families and society.",
  prompt: "In many countries, traditional food is being replaced by international fast food. Some people claim that this has negative effects on both families and society.\nTo what extent do you agree or disagree?",
  image: "",
  htmlFile: "/writing/task2_31.html",
  minWords: 250,
  timeMinutes: 40,
},
  {
    id: "task2_32",
    task: 2,
    type: "Advantages/Disadvantages",
    title: "Private Scientific Research",
    description: "A Task 2 essay about whether private companies funding and conducting scientific research has more advantages than disadvantages.",
    prompt: "In today's world, private companies rather than the government pay for and conduct most scientific research.\nDo you think the advantages outweigh the disadvantages?",
    image: "",
    htmlFile: "/writing/task2_32.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_33",
    task: 2,
    type: "Agree/Disagree",
    title: "Are Libraries Still Important?",
    description: "A Task 2 essay about whether libraries have become unnecessary due to online access to information.",
    prompt: "Nowadays, many people think that libraries are no longer important because people can access information online.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_33.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_34",
    task: 2,
    type: "Agree/Disagree",
    title: "Libraries vs Online Information",
    description: "A Task 2 essay about whether libraries are still necessary given that students can access information online.",
    prompt: "Students today can easily access information online, so libraries are no longer necessary.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_34.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_35",
    task: 2,
    type: "Agree/Disagree",
    title: "Employee Dress Code",
    description: "A Task 2 essay about whether employers should care about how their employees dress at work.",
    prompt: "Some people think that employers should not care about the way their employees dress because what matters is the quality of their work.\nTo what extent do you agree or disagree with this statement?",
    image: "",
    htmlFile: "/writing/task2_35.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_36",
    task: 2,
    type: "Agree/Disagree",
    title: "Space Exploration Funding",
    description: "A Task 2 essay about whether money spent on space exploration is a waste and should instead improve lives on Earth.",
    prompt: "Spending money on space exploration is a waste of time. Instead, funds should be spent on improving people's lives on Earth.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_36.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_37",
    task: 2,
    type: "Problems/Solutions",
    title: "Elderly Loneliness and Poor Health",
    description: "A Task 2 essay examining the causes of loneliness and poor health among elderly people and possible solutions.",
    prompt: "Some research shows that older people are generally happier and healthier if they remain active. However, many elderly people today suffer from loneliness and poor physical health.\nWhat are the causes of this trend, and what measures can be taken to solve this problem?",
    image: "",
    htmlFile: "/writing/task2_37.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_38",
    task: 2,
    type: "Discussion",
    title: "Printed Books vs Digital Storage",
    description: "A Task 2 essay discussing whether printed books are still necessary in the digital age.",
    prompt: "Some people think that printed books are no longer necessary in this digital era as all writing can be stored electronically. Others think that printed books still play an important role.\nDiscuss both views and give your opinion.",
    image: "",
    htmlFile: "/writing/task2_38.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_39",
    task: 2,
    type: "Advantages/Disadvantages",
    title: "Private Healthcare",
    description: "A Task 2 essay about whether the advantages of private health care outweigh the disadvantages.",
    prompt: "Some people think that good health is a basic human need, so medical services should not be run by profit-making companies.\nDo the advantages of private health care outweigh the disadvantages?",
    image: "",
    htmlFile: "/writing/task2_39.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_40",
    task: 2,
    type: "Agree/Disagree",
    title: "Government Spending on Sport and Art",
    description: "A Task 2 essay about whether governments should fund sport and art in schools or invest in professional events instead.",
    prompt: "Some people think that the government should spend money on children to take part in sport and art classes in schools, while others think they should spend on professional sports events and public art performances.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_40.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_41",
    task: 2,
    type: "Discussion",
    title: "Junk Food and Education",
    description: "A Task 2 essay discussing whether education is an effective solution to the problem of junk food consumption.",
    prompt: "Scientists agree that people are damaging their health by eating too much junk food. Some people think that the answer to this problem is to educate people. Others think education will not work.\nDiscuss both views and give your own opinion.",
    image: "",
    htmlFile: "/writing/task2_41.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_42",
    task: 2,
    type: "Agree/Disagree",
    title: "Is Scientific Research a Waste?",
    description: "A Task 2 essay about whether modern scientific research is a waste of time and money.",
    prompt: "Some people believe that scientific research done today is a waste of time and money.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_42.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_43",
    task: 2,
    type: "Direct Question",
    title: "What Arts Tell Us About Life",
    description: "A Task 2 essay exploring what the arts can reveal about life that science and technology cannot.",
    prompt: "In today's world of advanced science and technology, we still greatly value our artists such as musicians, painters and writers.\nWhat can arts tell us about life that science and technology cannot?",
    image: "",
    htmlFile: "/writing/task2_43.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_44",
    task: 2,
    type: "Causes/Problems",
    title: "The Throwaway Culture",
    description: "A Task 2 essay about why people today throw away broken items instead of repairing them, and the problems this causes.",
    prompt: "In many parts of the world, people now often throw things away when they are broken and buy new ones, whereas in the past broken things were repaired and used again.\nWhy do you think this is the case? What problems may it lead to?",
    image: "",
    htmlFile: "/writing/task2_44.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_45",
    task: 2,
    type: "Agree/Disagree",
    title: "Traditional Ideas of Older Generations",
    description: "A Task 2 essay about whether traditional ideas held by older generations are unhelpful for preparing young people for modern life.",
    prompt: "The older generations tend to have very traditional ideas about how people should live, think and behave. However, some people believe that these ideas are not helpful in preparing younger generations for modern life.\nTo what extent do you agree or disagree with this view?",
    image: "",
    htmlFile: "/writing/task2_45.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_46",
    task: 2,
    type: "Causes/Solutions",
    title: "Unhealthy Lifestyles",
    description: "A Task 2 essay about why people continue unhealthy activities despite knowing the risks, and how to address this.",
    prompt: "Scientists tell us some activities are good for health and others are bad. Despite knowing that, millions of people continue doing unhealthy activities.\nWhat are the causes and what are the solutions?",
    image: "",
    htmlFile: "/writing/task2_46.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_47",
    task: 2,
    type: "Discussion",
    title: "University vs Getting a Job",
    description: "A Task 2 essay discussing whether university is the best path to a successful career or whether starting work after school is better.",
    prompt: "Some people believe that studying at university or college is the best route to a successful career, while others believe that it is better to get a job straight after school.\nDiscuss both views and give your opinion.",
    image: "",
    htmlFile: "/writing/task2_47.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_48",
    task: 2,
    type: "Agree/Disagree",
    title: "Olympic Spending vs Youth Sports",
    description: "A Task 2 essay about whether money spent on elite sporting competitions should instead be used to encourage children to take up sport.",
    prompt: "Some countries spend a lot of money preparing competitors to take part in major competitions such as the Olympic Games or the Football World Cup. Some people say that it would be better to spend this money encouraging children to take up sports from a young age.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_48.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_49",
    task: 2,
    type: "Agree/Disagree",
    title: "Following Customs in a New Country",
    description: "A Task 2 essay about whether immigrants should follow the customs and traditions of their new country.",
    prompt: "People should follow the customs and traditions when they start to live in a new country.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_49.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_50",
    task: 2,
    type: "Positive/Negative",
    title: "Spending on Looking Younger",
    description: "A Task 2 essay about why people spend money to look younger and whether this is a positive or negative development.",
    prompt: "More and more people today are spending large amounts of money on their appearance in order to look younger. Why do people want to look younger?\nDo you think this is a positive or negative development?",
    image: "",
    htmlFile: "/writing/task2_50.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_51",
    task: 2,
    type: "Agree/Disagree",
    title: "Local History vs World History",
    description: "A Task 2 essay about whether it is more important for schoolchildren to study local history than world history.",
    prompt: "It is more important for schoolchildren to learn about local history than world history.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_51.html",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "task2_52",
    task: 2,
    type: "Agree/Disagree",
    title: "Purpose of Schools",
    description: "A Task 2 essay about whether schools should focus on producing good citizens and workers rather than benefiting students as individuals.",
    prompt: "Some people think that the main purpose of schools is to turn children into good citizens and workers, rather than to benefit them as individuals.\nTo what extent do you agree or disagree?",
    image: "",
    htmlFile: "/writing/task2_52.html",
    minWords: 250,
    timeMinutes: 40,
  },
];

const TASK_TOTALS: Record<1 | 2, number> = {
  1: [...HTML_TASKS, ...WRITING_TASKS].filter((t) => t.task === 1).length,
  2: [...HTML_TASKS, ...WRITING_TASKS].filter((t) => t.task === 2).length,
};

const SAMPLE_TOTALS = {
  "t1-samples": WRITING_SAMPLES.filter((s) => s.task === 1).length,
  "t2-samples": WRITING_ESSAYS.length,
};

const TASK1_FILTERS = ["All", "Line Graph", "Bar Chart", "Table", "Pie Chart", "Map", "Diagram", "Graph", "Process"] as const;
const TASK2_FILTERS = ["All", "Agree/Disagree", "Advantages/Disadvantages", "Discussion", "Problem/Solution", "Direct Question"] as const;

type TabType = 1 | 2 | "t1-samples" | "t2-samples";

function Writing() {
  const { task: taskParam } = Route.useSearch();
  const [tab, setTab] = useState<TabType>(() => {
    if (taskParam === "t1-samples") return "t1-samples";
    if (taskParam === "t2-samples") return "t2-samples";
    return taskParam === "2" ? 2 : 1;
  });
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [progress, setProgress] = useState<Record<string, { status: WritingStatus }>>({});

  useEffect(() => {
    if (taskParam === "t1-samples") setTab("t1-samples");
    else if (taskParam === "t2-samples") setTab("t2-samples");
    else if (taskParam === "2") setTab(2);
    else if (taskParam === "1") setTab(1);
  }, [taskParam]);

  useEffect(() => {
    const refresh = () => setProgress(getAllWritingProgress());
    refresh();
    window.addEventListener("writing-progress-changed", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("writing-progress-changed", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const handleTabChange = (n: TabType) => {
    setTab(n);
    setSearch("");
    setTypeFilter("All");
  };

  const isPracticeTab = tab === 1 || tab === 2;
  const activeFilters = tab === 1 ? TASK1_FILTERS : TASK2_FILTERS;

  const matchesSearch = (title: string) =>
    !search.trim() || title.toLowerCase().includes(search.trim().toLowerCase());
  const matchesType = (type: string) =>
    typeFilter === "All" || type.toLowerCase().includes(typeFilter.toLowerCase());

  const practiceTask = (tab === 1 || tab === 2) ? tab : 1;
  const visibleHtml  = HTML_TASKS.filter((t) => t.task === practiceTask && matchesSearch(t.title) && matchesType(t.type));
  const visibleTasks = WRITING_TASKS.filter((t) => t.task === practiceTask && matchesSearch(t.title) && matchesType(t.type));
  const hasResults = visibleHtml.length > 0 || visibleTasks.length > 0;

  const sampleTask = tab === "t1-samples" ? 1 : 2;
  const visibleSamples = WRITING_SAMPLES.filter((s) => s.task === sampleTask);

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-6xl relative">
        {/* Minecraft decorations */}
        <div className="absolute top-4 right-4 pointer-events-none select-none hidden lg:flex flex-col items-end gap-3">
          <SteveMining size={64} opacity={0.65} />
          <McItem item="crafting-table" size={26} opacity={0.15} />
        </div>
        <div className="absolute top-10 right-28 pointer-events-none opacity-[0.06] hidden xl:block">
          <McItem item="sword" size={32} opacity={1} />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFD700]">✏️ IELTS Writing</h1>

        {/* Video banner */}
        <div className="relative overflow-hidden px-8 py-6 mb-8 flex items-center justify-between gap-4 flex-wrap border-2 border-[#5D8A3C]"
          style={{ background: "linear-gradient(135deg, #1A3A10 0%, #2D2D2D 60%, #1A1A2E 100%)", boxShadow: "4px 4px 0px rgba(0,0,0,0.5)" }}>
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#5D8A3C]" />
          <div className="absolute top-0 right-0 w-48 h-full opacity-10"
            style={{ background: "radial-gradient(circle at 80% 50%, #5D8A3C 0%, transparent 70%)" }} />
          <div className="relative">
            <p className="font-serif text-lg font-semibold mb-0.5">Want to watch Writing lessons?</p>
            <p className="text-sm text-muted-foreground">
              I have dedicated Writing playlists on my Video Lessons page.
            </p>
          </div>
          <Link to="/videos">
            <Button className="relative bg-[#FF0000] hover:bg-[#FF0000]/90 text-white shrink-0 font-mono text-xs tracking-wide active:scale-95 transition-all">
              <Youtube className="w-4 h-4 mr-2" /> Watch Video Lessons
            </Button>
          </Link>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-1 rounded-xl bg-muted p-1 mb-6 w-fit">
          {([1, 2] as const).map((n) => (
            <button
              key={n}
              onClick={() => handleTabChange(n)}
              className={cn(
                "px-5 py-2 rounded-lg font-mono text-xs tracking-widest uppercase font-semibold transition-all duration-200",
                tab === n
                  ? "bg-background shadow-soft text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Task {n}
              <span className="ml-1.5 font-mono text-[10px] font-normal opacity-55 tracking-normal normal-case">
                ({TASK_TOTALS[n]})
              </span>
            </button>
          ))}
          {(["t1-samples", "t2-samples"] as const).map((key) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={cn(
                "px-5 py-2 rounded-lg font-mono text-xs tracking-widest uppercase font-semibold transition-all duration-200",
                tab === key
                  ? "bg-background shadow-soft text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {key === "t1-samples" ? "Task 1 Samples" : "Task 2 Samples"}
              <span className="ml-1.5 font-mono text-[10px] font-normal opacity-55 tracking-normal normal-case">
                ({SAMPLE_TOTALS[key]})
              </span>
            </button>
          ))}
        </div>

        {/* Search + type filters — only for practice tabs */}
        {isPracticeTab && (
          <div className="space-y-3 mb-8">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title..."
                className="pl-9 font-mono text-sm h-9 rounded-xl border-border"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((f) => (
                <Button
                  key={f}
                  variant={typeFilter === f ? "default" : "outline"}
                  size="sm"
                  className="font-mono text-[11px] tracking-wide rounded-full h-8 px-4"
                  onClick={() => setTypeFilter(f)}
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Practice tasks grid */}
        {isPracticeTab && (
          <>
            {!hasResults && (
              <p className="text-muted-foreground py-16 text-center font-mono text-sm tracking-wide">
                No results found.
              </p>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleHtml.map((task) => (
                <button
                  key={task.id}
                  onClick={() => window.open(task.htmlFile, "_blank")}
                  className="block text-left"
                >
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-[0_12px_32px_rgba(43,64,128,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div className="relative aspect-[16/10] bg-muted flex items-center justify-center">
                      {task.image ? (
                        <img src={task.image} alt={task.title} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="text-4xl font-bold text-muted-foreground">Task {task.task}</div>
                      )}
                      <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border bg-muted text-muted-foreground border-border">
                        Not started
                      </span>
                      <span className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1">
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <Badge variant="secondary" className="self-start mb-2 bg-accent text-foreground">{task.type}</Badge>
                      <h3 className="font-serif text-lg font-semibold leading-snug mb-2">{task.title}</h3>
                      <p className="text-sm text-muted-foreground flex-1">{task.description}</p>
                      <p className="text-xs text-muted-foreground mt-3 inline-flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" /> Opens full practice simulator
                      </p>
                    </div>
                  </Card>
                </button>
              ))}
              {visibleTasks.map((task) => {
                const status = progress[task.id]?.status ?? "not_started";
                const meta = STATUS_META[status];
                return (
                  <Link key={task.id} to="/writing/$taskId" params={{ taskId: task.id }} className="block">
                    <Card className="overflow-hidden h-full flex flex-col hover:shadow-[0_12px_32px_rgba(43,64,128,0.12)] hover:-translate-y-1 transition-all duration-300">
                      <div className="relative aspect-[16/10] bg-muted flex items-center justify-center">
                        {task.image ? (
                          <img src={task.image} alt={task.title} className="w-full h-full object-cover" loading="lazy" />
                        ) : (
                          <div className="text-4xl font-bold text-muted-foreground">Task {task.task}</div>
                        )}
                        <span className={cn("absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border", meta.className)}>
                          {meta.label}
                        </span>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <Badge variant="secondary" className="self-start mb-2 bg-accent text-foreground">{task.type}</Badge>
                        <h3 className="font-serif text-lg font-semibold leading-snug mb-2">{task.title}</h3>
                        <p className="text-sm text-muted-foreground flex-1">{task.description}</p>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </>
        )}

        {/* Samples tabs */}
        {tab === "t1-samples" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleSamples.map((sample) => (
              <Link key={sample.id} to="/writing/sample/$id" params={{ id: sample.id }}>
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-[0_12px_32px_rgba(43,64,128,0.12)] hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-[16/10] bg-muted flex items-center justify-center">
                    {sample.coverImage ? (
                      <img src={sample.coverImage} alt={`Report ${sample.reportNumber}`} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <div className="text-4xl font-bold text-muted-foreground">R{sample.reportNumber}</div>
                    )}
                    <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest bg-secondary/80 text-secondary-foreground px-2 py-0.5 rounded-full">
                      Report {sample.reportNumber}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <Badge variant="secondary" className="self-start mb-2 bg-accent text-foreground">{sample.chartType}</Badge>
                    <p className="text-sm text-foreground/80 leading-snug flex-1 line-clamp-3 mb-3">{sample.question}</p>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-wider">{sample.wordCount} words</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {tab === "t2-samples" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WRITING_ESSAYS.map((essay) => (
              <Link key={essay.id} to="/writing/essay/$id" params={{ id: essay.id }}>
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-[0_12px_32px_rgba(43,64,128,0.12)] hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-[16/10] bg-muted flex items-center justify-center">
                    <div className="text-4xl font-bold text-muted-foreground">T{essay.testNumber}</div>
                    <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest bg-secondary/80 text-secondary-foreground px-2 py-0.5 rounded-full">
                      Test {essay.testNumber}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <Badge variant="secondary" className="self-start mb-2 bg-accent text-foreground">Essay</Badge>
                    <p className="text-sm text-foreground/80 leading-snug flex-1 line-clamp-3 mb-3">{essay.question}</p>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-wider">{essay.wordCount} words</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

      </section>
    </SiteLayout>
  );
}
