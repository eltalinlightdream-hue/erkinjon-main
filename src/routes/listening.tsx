import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Headphones, Lock, Crown, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  getTestProgressMeta,
  ProgressStatus,
  TEST_PROGRESS_OPTIONS,
  useTestStatus,
} from "@/hooks/use-test-status";
import { TestProgressBadge, TestProgressSelect } from "@/components/test-progress-controls";
import { Sheep, McItem } from "@/components/minecraft-decorations";
import { FREE_LIMITS } from "@/lib/premium-content";

export const Route = createFileRoute("/listening")({
  head: () => ({
    meta: [
      { title: "IELTS Listening | Abduraimov Erkinjon" },
      { name: "description", content: "IELTS Listening practice tests — Section 1 to Section 4." },
    ],
  }),
  component: Listening,
});

type ListeningTest = {
  id: string;
  title: string;
  section: 0 | 1 | 2 | 3 | 4;
  description: string;
  questions: number;
  htmlFile: string;
  audioFile?: string;
  isPremium: boolean;
  isNew?: boolean;
};

const TESTS: ListeningTest[] = [
  {
    id: "c21-test-1",
    title: "Cambridge 21 Test 1 — Sailing Club & Ocean Biodiversity",
    section: 0,
    description:
      "Full 40-question test: Oyster Bay Sailing Club courses, working as a makeup trainee, an ocean biodiversity lecture, and the sources of rubber.",
    questions: 40,
    htmlFile: "/passages/C21_Test1.html",
    isPremium: false,
    isNew: true,
  },
  {
    id: "c21-test-2",
    title: "Cambridge 21 Test 2 — Steynford Classes & Cruise Ships",
    section: 0,
    description:
      "Full 40-question test: one-day classes at Steynford College, walks in the region and Melby Coal Mine, food science course feedback, and challenges facing the cruise ship industry.",
    questions: 40,
    htmlFile: "/passages/C21_Test2.html",
    isPremium: false,
    isNew: true,
  },
  {
    id: "c21-test-3",
    title: "Cambridge 21 Test 3 — Shetland Ferry & Invasive Species",
    section: 0,
    description:
      "Full 40-question test: the ferry to the Shetland Islands, starting a street food business, a sustainable and ethical fashion project, and invasive species.",
    questions: 40,
    htmlFile: "/passages/C21_Test3.html",
    isPremium: false,
    isNew: true,
  },
  {
    id: "c21-test-4",
    title: "Cambridge 21 Test 4 — Shopping Survey & Music Therapy",
    section: 0,
    description:
      "Full 40-question test: a shopping survey in Broadbeach, an annual business exhibition, a presentation on houses of the future, and music therapy for surgical patients.",
    questions: 40,
    htmlFile: "/passages/C21_Test4.html",
    isPremium: false,
    isNew: true,
  },
  {
    id: "full-test-1",
    title: "Full Test 1",
    section: 0,
    description:
      "Full 40-question test: music lessons, volunteering in Hambleford, a film studies project, and the history of soap.",
    questions: 40,
    htmlFile: "/passages/ftest1full.html",
    audioFile: "/passages/audio/ftest1.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "full-test-2",
    title: "Full Test 2",
    section: 0,
    description:
      "Full 40-question test: a weekend guitar course booking, a spring festival, an action research course, and digital technology in education.",
    questions: 40,
    htmlFile: "/passages/ftest2full.html",
    audioFile: "/passages/audio/ftest2.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "full-test-3",
    title: "Full Test 3",
    section: 0,
    description:
      "Full 40-question test: a lifeguard application, becoming a millionaire, performance arts course feedback, and a sea lion tracking study.",
    questions: 40,
    htmlFile: "/passages/ftest3full.html",
    audioFile: "/passages/audio/ftest3.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "full-test-4",
    title: "Full Test 4",
    section: 0,
    description:
      "Full 40-question test: becoming a tea taster, Pioneer Historical Village, advice on waste disposal, and whale shark conservation.",
    questions: 40,
    htmlFile: "/passages/ftest4full.html",
    audioFile: "/passages/audio/ftest4.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "full-test-5",
    title: "Full Test 5",
    section: 0,
    description:
      "Full 40-question test: a housesitting registration form, becoming a millionaire, school science experiments, and the history of office design.",
    questions: 40,
    htmlFile: "/passages/v10test1full.html",
    audioFile: "/passages/audio/fulltest5aud.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "full-test-6",
    title: "Full Test 6",
    section: 0,
    description:
      "Full 40-question test: a travel booking call, a running competition, choosing university courses, and feeding wild animals.",
    questions: 40,
    htmlFile: "/passages/v10test2full.html",
    audioFile: "/passages/audio/fulltest6aud.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "full-test-7",
    title: "Full Test 7",
    section: 0,
    description:
      "Full 40-question test: a home cleaning service booking, a city museum tour, a business analysis methods discussion, and a graduate employment survey.",
    questions: 40,
    htmlFile: "/passages/v10test3full.html",
    audioFile: "/passages/audio/fulltest7aud.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "full-test-8",
    title: "Full Test 8",
    section: 0,
    description:
      "Full 40-question test: a school art competition, Palm Island walks and a regional park, a music students survey, and gastropods.",
    questions: 40,
    htmlFile: "/passages/v10test4full.html",
    audioFile: "/passages/audio/fulltest8aud.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "v9-test-1",
    title: "Vol 9 Test 1 — Accommodation & Dormancy",
    section: 0,
    description: "Full 40-question test: accommodation details, Spring Down School, forensic linguistics, and dormancy.",
    questions: 40,
    htmlFile: "/passages/test1full.html",
    audioFile: "/passages/audio/fulltest1.mp3",
    isPremium: false,
  },
  {
    id: "v9-test-2",
    title: "Vol 9 Test 2 — Poppy Reserve & Office Design",
    section: 0,
    description: "Full 40-question test: Sandcastle poppy reserve, Iron Age village, debate organisation, and office design.",
    questions: 40,
    htmlFile: "/passages/test2full.html",
    audioFile: "/passages/audio/fulltest2.mp3",
    isPremium: false,
  },
  {
    id: "v9-test-3",
    title: "Vol 9 Test 3 — Great Sandcastle Center & Food Safety",
    section: 0,
    description: "Full 40-question test: Sandcastle outdoor centre, vacation jobs, voice training for drama, and food safety standards.",
    questions: 40,
    htmlFile: "/passages/test3full.html",
    audioFile: "/passages/audio/fulltest3.mp3",
    isPremium: false,
  },
  {
    id: "v9-test-4",
    title: "Vol 9 Test 4 — Guitar Workshop & Digital Technology",
    section: 0,
    description: "Full 40-question test: guitar course booking, Denford Festival, action research, and digital technology in education.",
    questions: 40,
    htmlFile: "/passages/test4full.html",
    audioFile: "/passages/audio/fulltest4.mp3",
    isPremium: false,
  },
  {
    id: "v9-test-5",
    title: "Vol 9 Test 5 — Tea Tasting & Whale Sharks",
    section: 0,
    description: "Full 40-question test: tea taster career, Pioneer Historical Village, waste disposal, and whale shark conservation.",
    questions: 40,
    htmlFile: "/passages/test5full.html",
    audioFile: "/passages/audio/fulltest5.mp3",
    isPremium: false,
  },
  {
    id: "v9-test-6",
    title: "Vol 9 Test 6 — Kiwi Air Complaint & Patagon People",
    section: 0,
    description: "Full 40-question test: Kiwi Air complaint form, Linwood apartments, bicycle history, and the Patagon people.",
    questions: 40,
    htmlFile: "/passages/test6full.html",
    audioFile: "/passages/audio/fulltest6.mp3",
    isPremium: false,
  },
  {
    id: "v9-test-7",
    title: "Vol 9 Test 7 — Car Servicing & Chocozine",
    section: 0,
    description: "Full 40-question test: car service form, Rosedale Library, Samuel Prout artist, and Chocozine case study.",
    questions: 40,
    htmlFile: "/passages/test7full.html",
    audioFile: "/passages/audio/fulltest7.mp3",
    isPremium: false,
  },
  {
    id: "v9-test-8",
    title: "Vol 9 Test 8 — Medical Call & Berber Nomads",
    section: 0,
    description: "Full 40-question test: medical call record, outdoor education trip, Stone Point NZ, and Berber rural development.",
    questions: 40,
    htmlFile: "/passages/test8full.html",
    audioFile: "/passages/audio/fulltest8.mp3",
    isPremium: false,
  },
  {
    id: "v8-test-1",
    title: "Vol 8 Test 1 — Travel Agency & Bookshop",
    section: 0,
    description:
      "Full 40-question test: International Student Travel Agency form, the Bibliostack bookshop map, the Just-in-Time supply system, and dyscalculia.",
    questions: 40,
    htmlFile: "/passages/v8test1full.html",
    isPremium: false,
  },
  {
    id: "v8-test-2",
    title: "Vol 8 Test 2 — Lifeguard & Performance Arts",
    section: 0,
    description:
      "Full 40-question test: Fearnley lifeguard application, becoming a millionaire, performance arts course feedback, and a sea lion tracking study.",
    questions: 40,
    htmlFile: "/passages/v8test2full.html",
    isPremium: false,
  },
  {
    id: "v8-test-3",
    title: "Vol 8 Test 3 — Beach Travel & Renewable Energy",
    section: 0,
    description:
      "Full 40-question test: Beach Heads travel booking, the City Cycle bike scheme, renewable energy products, and absence from work.",
    questions: 40,
    htmlFile: "/passages/v8test3full.html",
    isPremium: false,
  },
  {
    id: "v8-test-4",
    title: "Vol 8 Test 4 — Property Rentals & Perfume",
    section: 0,
    description:
      "Full 40-question test: AA property rentals, storm clean-up advice, a possible course change, and perfume ornaments.",
    questions: 40,
    htmlFile: "/passages/v8test4full.html",
    isPremium: false,
  },
  {
    id: "v8-test-5",
    title: "Vol 8 Test 5 — Arizona & City Bookshop",
    section: 0,
    description:
      "Full 40-question test: Arizona travel advice, the City Bookshop map, an academic essays discussion, and inventing a universal language.",
    questions: 40,
    htmlFile: "/passages/v8test5full.html",
    isPremium: false,
  },
  {
    id: "v8-test-6",
    title: "Vol 8 Test 6 — Shipping & Trimera",
    section: 0,
    description:
      "Full 40-question test: shipping personal belongings, cooking tours and a culinary school plan, Bitublocks, and the Trimera archaeological site.",
    questions: 40,
    htmlFile: "/passages/v8test6full.html",
    isPremium: false,
  },
  {
    id: "v7-test-1",
    title: "Vol 7 Test 1 — Wedding & Cars in Australia",
    section: 0,
    description: "Full 40-question test: wedding arrangements at Clarence House Hotel, a market tour, a group project discussion, and the impact of cars in Australia.",
    questions: 40,
    htmlFile: "/passages/v7test1full.html",
    isPremium: false,
  },
  {
    id: "v7-test-2",
    title: "Vol 7 Test 2 — Holiday Job & Public Monument",
    section: 0,
    description: "Full 40-question test: a holiday job application, a charity walk, students discussing energy websites, and a public monument assignment.",
    questions: 40,
    htmlFile: "/passages/v7test2full.html",
    isPremium: false,
  },
  {
    id: "v7-test-3",
    title: "Vol 7 Test 3 — Party Planning & Antikythera",
    section: 0,
    description: "Full 40-question test: planning a party, an interview about Riding for the Disabled, a geography lesson discussion, and the Antikythera mechanism.",
    questions: 40,
    htmlFile: "/passages/v7test3full.html",
    isPremium: false,
  },
  {
    id: "v7-test-4",
    title: "Vol 7 Test 4 — Customer Complaint & Saffron",
    section: 0,
    description: "Full 40-question test: a home appliance complaint form, the Connections scheme for visitors, climate change and allergies, and the history of saffron.",
    questions: 40,
    htmlFile: "/passages/v7test4full.html",
    isPremium: false,
  },
  {
    id: "v7-test-5",
    title: "Vol 7 Test 5 — Library Services & Engineering Ethics",
    section: 0,
    description: "Full 40-question test: library services information, a campsite map, music degree student experiences, and ethics in engineering.",
    questions: 40,
    htmlFile: "/passages/v7test5full.html",
    isPremium: false,
  },
  {
    id: "v7-test-6",
    title: "Vol 7 Test 6 — London Relocation & Picture Books",
    section: 0,
    description: "Full 40-question test: London relocation services, starting work at a supermarket, picture books for children, and a James Bay Road field trip.",
    questions: 40,
    htmlFile: "/passages/v7test6full.html",
    isPremium: false,
  },
  {
    id: "v7-test-7",
    title: "Vol 7 Test 7 — School Fair & Sciarrino",
    section: 0,
    description: "Full 40-question test: places to visit with children, volunteer roles at a school fair, environmental science modules, and the music of Salvatore Sciarrino.",
    questions: 40,
    htmlFile: "/passages/v7test7full.html",
    isPremium: false,
  },
  {
    id: "v7-test-8",
    title: "Vol 7 Test 8 — Farm Centre & Clawed Frog",
    section: 0,
    description: "Full 40-question test: a farm activity centre, vacation job discussion, study syndicate planning, and the Africa clawed frog (Xenopus laevis).",
    questions: 40,
    htmlFile: "/passages/v7test8full.html",
    isPremium: false,
  },
  {
    id: "v6-test-1",
    title: "Vol 6 Test 1 — Sailing & Crisis Communication",
    section: 0,
    description:
      "Full 40-question test: a sailing-course form, working for Johnson Jones, organising a debate, and crisis communication theory.",
    questions: 40,
    htmlFile: "/passages/v6test1full.html",
    isPremium: false,
  },
  {
    id: "v6-test-2",
    title: "Vol 6 Test 2 — Drama Workshop & Jatropha",
    section: 0,
    description:
      "Full 40-question test: a residential workshop booking, working at Parson's Fruit Farm, the Stone Point historical site, and jatropha biofuel.",
    questions: 40,
    htmlFile: "/passages/v6test2full.html",
    isPremium: false,
  },
  {
    id: "v6-test-3",
    title: "Vol 6 Test 3 — Get Away Tours & Plastic Buildings",
    section: 0,
    description:
      "Full 40-question test: Get Away cycling tours, sports information for parents, buildings made of plastic, and calotype photography.",
    questions: 40,
    htmlFile: "/passages/v6test3full.html",
    isPremium: false,
  },
  {
    id: "v6-test-4",
    title: "Vol 6 Test 4 — Motorhomes & Soundscapes",
    section: 0,
    description:
      "Full 40-question test: Coxhead motorhomes, Citadel theatre events, an assignment on multinational companies, and soundscapes.",
    questions: 40,
    htmlFile: "/passages/v6test4full.html",
    isPremium: false,
  },
  {
    id: "v6-test-5",
    title: "Vol 6 Test 5 — Campsite & Urban Migration",
    section: 0,
    description:
      "Full 40-question test: a campsite reservation, a talk to new hotel staff, a presentation on African art, and urban migration.",
    questions: 40,
    htmlFile: "/passages/v6test5full.html",
    isPremium: false,
  },
  {
    id: "v6-test-6",
    title: "Vol 6 Test 6 — Residence Survey & Crocodiles",
    section: 0,
    description:
      "Full 40-question test: a residence survey, the Elmsden Way cycle route, archaeological excavations, and a crocodile tracking study.",
    questions: 40,
    htmlFile: "/passages/v6test6full.html",
    isPremium: false,
  },
  {
    id: "lm7-full-test-1",
    title: "LM7 Full Test 1 — Farm Centre & Vacation Jobs & Geology & Night Shift",
    section: 0,
    description:
      "Full 40-question test: Winsham Farm Centre, a vacation jobs survey, a geology study syndicate, and health effects of night shift work.",
    questions: 40,
    htmlFile: "/passages/lm7test1full.html",
    audioFile: "/passages/audio/lm7test1.mp3",
    isPremium: false,
  },
  {
    id: "lm7-full-test-2",
    title: "LM7 Full Test 2 — Wildlife Conservation & Spring Festival & Archaeology & Digital Technology",
    section: 0,
    description:
      "Full 40-question test: a Wildlife Conservation Society membership form, a Spring Festival guide, an archaeology course discussion, and digital technology theory.",
    questions: 40,
    htmlFile: "/passages/lm7test2full.html",
    audioFile: "/passages/audio/lm7test2.mp3",
    isPremium: false,
  },
  {
    id: "lm7-full-test-3",
    title: "LM7 Full Test 3 — Student Accommodation & Global Museum & Pacific Tapa & Learner Persistence",
    section: 0,
    description:
      "Full 40-question test: student accommodation options, a global museum tour, Pacific tapa cloth uses, and a study on learner persistence.",
    questions: 40,
    htmlFile: "/passages/lm7test3full.html",
    audioFile: "/passages/audio/lm7test3.mp3",
    isPremium: false,
  },
  {
    id: "lm7-full-test-4",
    title: "LM7 Full Test 4 — Garden Centre & Hospital Volunteers & Lighthouses & First Factories",
    section: 0,
    description:
      "Full 40-question test: a Bellfield Garden Centre job, hospital ward volunteers, a lighthouses presentation, and the history of the first factories.",
    questions: 40,
    htmlFile: "/passages/lm7test4full.html",
    audioFile: "/passages/audio/lm7test4.mp3",
    isPremium: false,
  },
  {
    id: "lm7-full-test-5",
    title: "LM7 Full Test 5 — Moving to Burnside & Mahana Market & Community Centre & Science Fiction",
    section: 0,
    description:
      "Full 40-question test: moving to Burnside, Mahana Market manager interview, a potential community centre plan, and the importance of science fiction.",
    questions: 40,
    htmlFile: "/passages/lm7test5full.html",
    audioFile: "/passages/audio/lm7test5.mp3",
    isPremium: false,
  },
  {
    id: "lm7-full-test-6",
    title: "LM7 Full Test 6 — Improving Winton & Magnetism in Animals",
    section: 0,
    description:
      "Full 40-question test: an interview about improving Winton, Mentona Fashion careers, a project on palm oil, and magnetism in animals.",
    questions: 40,
    htmlFile: "/passages/lm7test6full.html",
    audioFile: "/passages/audio/lm7test6.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "lm7-full-test-7",
    title: "LM7 Full Test 7 — Stamford Properties & Naked Mole Rats",
    section: 0,
    description:
      "Full 40-question test: renting from Stamford Properties, Clifton Furniture staff orientation, careers and a work placement, and naked mole rats.",
    questions: 40,
    htmlFile: "/passages/lm7test7full.html",
    audioFile: "/passages/audio/lm7test7.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "lm7-full-test-8",
    title: "LM7 Full Test 8 — Campervans & Natural Building Materials",
    section: 0,
    description:
      "Full 40-question test: an Oz Campervans quote form, Bexter Sports Centre, bees and the Varroa mite, and natural building materials.",
    questions: 40,
    htmlFile: "/passages/lm7test8full.html",
    audioFile: "/passages/audio/lm7test8.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "lm7-full-test-9",
    title: "LM7 Full Test 9 — Wildlife Society & Solar Water Purifier",
    section: 0,
    description:
      "Full 40-question test: a Wildlife Conservation Society membership form, an office move, the artist Samuel Prout, and the SW40 solar water purifier.",
    questions: 40,
    htmlFile: "/passages/lm7test9full.html",
    audioFile: "/passages/audio/lm7test9.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "lm7-full-test-10",
    title: "LM7 Full Test 10 — Riverdale Pre-school & Driverless Vehicles",
    section: 0,
    description:
      "Full 40-question test: Riverdale Pre-school enrolment, finding a part-time job at university, a research project on the use of public services, and a driverless vehicle competition.",
    questions: 40,
    htmlFile: "/passages/lm7test10full.html",
    audioFile: "/passages/audio/lm7test10.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "lm7-full-test-11",
    title: "LM7 Full Test 11 — Pearson's Estate Agency & Insects as a Food Source",
    section: 0,
    description:
      "Full 40-question test: registering with Pearson's Estate Agency, an orientation talk at the Pennyfield Horse Riding Centre, a tutorial on a student's Just Coffee essay, and a lecture on insects as a food source.",
    questions: 40,
    htmlFile: "/passages/lm7test11full.html",
    audioFile: "/passages/audio/lm7test11.mp3",
    isPremium: false,
    isNew: true,
  },
  {
    id: "s4-dormancy",
    title: "Dormancy",
    section: 4,
    description:
      "A lecture on animal dormancy — insects, the African lungfish, snails, and the Arctic ground squirrel.",
    questions: 10,
    htmlFile: "/passages/Dormancy_Section_4.html",
    audioFile: "/passages/audio/part-4-dormancy.mp3",
    isPremium: false,
  },
  {
  id: "t24-part1",
  title: "Greek Island Holidays",
  section: 1,
  description: "A conversation about Greek island holidays and apartments in Arillas.",
  questions: 10,
  htmlFile: "/passages/TEST_24_Part1.html",
  audioFile: "/passages/audio/test24section1.mp4",
  isPremium: false,
},
{
  id: "t24-part2",
  title: "Aspen Ski Resort",
  section: 2,
  description: "A talk about Aspen Ski Resort near Cumbia.",
  questions: 10,
  htmlFile: "/passages/TEST_24_Part2.html",
  audioFile: "/passages/audio/test24section2.mp4",
  isPremium: false,
},
  {
  id: "t1-part1",
  title: "London Relocation Services",
  section: 1,
  description: "A conversation about moving to London and finding a suitable property.",
  questions: 10,
  htmlFile: "/passages/TEST_1_Part1.html",
  audioFile: "/passages/audio/test1section1.mp4",
  isPremium: false,
},
{
  id: "t1-part2",
  title: "Canadian Festival Theatre",
  section: 2,
  description: "A talk about a Canadian theatre festival and its arrangements.",
  questions: 10,
  htmlFile: "/passages/TEST_1_Part2.html",
  audioFile: "/passages/audio/test1section2.mp4",
  isPremium: false,
},
{
  id: "t1-part3",
  title: "Water Pumps Dissertation",
  section: 3,
  description: "A discussion about research for a dissertation on water pumps.",
  questions: 10,
  htmlFile: "/passages/TEST_1_Part3.html",
  audioFile: "/passages/audio/test1section3.mp4",
  isPremium: false,
},
{
  id: "t1-part4",
  title: "Food Safety Standards",
  section: 4,
  description: "A lecture about food safety standards and related practices.",
  questions: 10,
  htmlFile: "/passages/TEST_1_Part4.html",
  audioFile: "/passages/audio/test1section4.mp4",
  isPremium: false,
},
{
  id: "t2-part1",
  title: "Getting a Job with an Airline",
  section: 1,
  description: "A conversation about applying for work with an airline.",
  questions: 10,
  htmlFile: "/passages/TEST_2_Part1.html",
  audioFile: "/passages/audio/test2section1.mp4",
  isPremium: false,
},
{
  id: "t2-part2",
  title: "Hospitality Scholarships",
  section: 2,
  description: "A talk about scholarships in hospitality studies.",
  questions: 10,
  htmlFile: "/passages/TEST_2_Part2.html",
  audioFile: "/passages/audio/test2section2.mp4",
  isPremium: false,
},
{
  id: "t2-part3",
  title: "Education House",
  section: 3,
  description: "A discussion about Education House and student-related plans.",
  questions: 10,
  htmlFile: "/passages/TEST_2_Part3.html",
  audioFile: "/passages/audio/test2section3.mp4",
  isPremium: false,
},
{
  id: "t2-part4",
  title: "Textiles with Business Studies",
  section: 4,
  description: "A lecture about textiles and business studies.",
  questions: 10,
  htmlFile: "/passages/TEST_2_Part4.html",
  audioFile: "/passages/audio/test2section4.mp4",
  isPremium: false,
},
  {
  id: "t3-part1",
  title: "Campsites",
  section: 1,
  description: "A conversation about campsites and booking details.",
  questions: 10,
  htmlFile: "/passages/TEST_3_Part1.html",
  audioFile: "/passages/audio/test3section1.mp4",
  isPremium: false,
},
{
  id: "t3-part2",
  title: "Starting a Business",
  section: 2,
  description: "A talk about starting and managing a business.",
  questions: 10,
  htmlFile: "/passages/TEST_3_Part2.html",
  audioFile: "/passages/audio/test3section2.mp4",
  isPremium: false,
},
{
  id: "t3-part3",
  title: "Dolphin Presentation",
  section: 3,
  description: "A discussion about preparing a presentation on dolphins.",
  questions: 10,
  htmlFile: "/passages/TEST_3_Part3.html",
  audioFile: "/passages/audio/test3section3.mp4",
  isPremium: false,
},
{
  id: "t3-part4",
  title: "Tyre Recycling",
  section: 4,
  description: "A lecture about tyre recycling and environmental uses.",
  questions: 10,
  htmlFile: "/passages/TEST_3_Part4.html",
  audioFile: "/passages/audio/test3section4.mp4",
  isPremium: false,
},
{
  id: "t4-part1",
  title: "Sailing Courses",
  section: 1,
  description: "A conversation about sailing courses and course options.",
  questions: 10,
  htmlFile: "/passages/TEST_4_Part1.html",
  audioFile: "/passages/audio/test4section1.mp4",
  isPremium: false,
},
{
  id: "t4-part2",
  title: "Stanley Island",
  section: 2,
  description: "A talk about Stanley Island and visitor information.",
  questions: 10,
  htmlFile: "/passages/TEST_4_Part2.html",
  audioFile: "/passages/audio/test4section2.mp4",
  isPremium: false,
},
{
  id: "t4-part3",
  title: "Absence from Work",
  section: 3,
  description: "A discussion about absence from work and related research.",
  questions: 10,
  htmlFile: "/passages/TEST_4_Part3.html",
  audioFile: "/passages/audio/test4section3.mp4",
  isPremium: false,
},
{
  id: "t4-part4",
  title: "Transhumance",
  section: 4,
  description: "A lecture about transhumance and traditional animal migration.",
  questions: 10,
  htmlFile: "/passages/TEST_4_Part4.html",
  audioFile: "/passages/audio/test4section4.mp4",
  isPremium: false,
},
{
  id: "t24-part3",
  title: "Nursing Course Feedback",
  section: 3,
  description: "A discussion about feedback on a nursing course.",
  questions: 10,
  htmlFile: "/passages/TEST_24_Part3.html",
  audioFile: "/passages/audio/test24section3.mp4",
  isPremium: false,
},
{
  id: "t24-part4",
  title: "Dinner Affects the Environment",
  section: 4,
  description: "A lecture about how food production and dinner choices affect the environment.",
  questions: 10,
  htmlFile: "/passages/TEST_24_Part4.html",
  audioFile: "/passages/audio/test24section4.mp4",
  isPremium: false,
},
{
  id: "t25-part1",
  title: "Hotel Renovation",
  section: 1,
  description: "A conversation about renovation plans for a hotel.",
  questions: 10,
  htmlFile: "/passages/TEST_25_Part1.html",
  audioFile: "/passages/audio/test25section1.mp4",
  isPremium: false,
},
{
  id: "t25-part2",
  title: "Melbourne Zoo",
  section: 2,
  description: "A talk for visitors at Melbourne Zoo.",
  questions: 10,
  htmlFile: "/passages/TEST_25_Part2.html",
  audioFile: "/passages/audio/test25section2.mp4",
  isPremium: false,
},
{
  id: "t25-part3",
  title: "Maori Carving",
  section: 3,
  description: "A student discussion about Maori greenstone tikis and traditional tools.",
  questions: 10,
  htmlFile: "/passages/TEST_25_Part3.html",
  audioFile: "/passages/audio/test25section3.mp4",
  isPremium: false,
},
{
  id: "t25-part4",
  title: "Suburbs",
  section: 4,
  description: "A lecture about suburban life and development.",
  questions: 10,
  htmlFile: "/passages/TEST_25_Part4.html",
  audioFile: "/passages/audio/test25section4.mp4",
  isPremium: false,
},
{
  id: "t26-part1",
  title: "Doctor Appointment",
  section: 1,
  description: "A phone conversation with a doctor about headaches and medical history.",
  questions: 10,
  htmlFile: "/passages/TEST_26_Part1.html",
  audioFile: "/passages/audio/test26section1.mp4",
  isPremium: false,
},
{
  id: "t26-part2",
  title: "Campus Orientation",
  section: 2,
  description: "A campus orientation talk for new students.",
  questions: 10,
  htmlFile: "/passages/TEST_26_Part2.html",
  audioFile: "/passages/audio/test26section2.mp4",
  isPremium: false,
},
{
  id: "t26-part3",
  title: "Field Trip Report",
  section: 3,
  description: "A tutor and student discuss a draft field trip report.",
  questions: 10,
  htmlFile: "/passages/TEST_26_Part3.html",
  audioFile: "/passages/audio/test26section3.mp4",
  isPremium: false,
},
{
  id: "t26-part4",
  title: "Surtsey Island",
  section: 4,
  description: "A lecture about the formation and ecology of Surtsey Island.",
  questions: 10,
  htmlFile: "/passages/TEST_26_Part4.html",
  audioFile: "/passages/audio/test26section4.mp4",
  isPremium: false,
},
{
  id: "t28-part1",
  title: "Theatre Booking",
  section: 1,
  description: "A phone conversation about booking theatre tickets.",
  questions: 10,
  htmlFile: "/passages/TEST_28_Part1.html",
  audioFile: "/passages/audio/test28section1.mp4",
  isPremium: false,
},
{
  id: "t28-part2",
  title: "Choirs",
  section: 2,
  description: "A radio programme about local choirs and workplace singing groups.",
  questions: 10,
  htmlFile: "/passages/TEST_28_Part2.html",
  audioFile: "/passages/audio/test28section2.mp4",
  isPremium: false,
},
{
  id: "t28-part3",
  title: "Tourism Research",
  section: 3,
  description: "A student discussion about a tourism research project.",
  questions: 10,
  htmlFile: "/passages/TEST_28_Part3.html",
  audioFile: "/passages/audio/test28section3.mp4",
  isPremium: false,
},
{
  id: "t28-part4",
  title: "Working as a Patent Attorney",
  section: 4,
  description: "A careers talk about working as a patent attorney.",
  questions: 10,
  htmlFile: "/passages/TEST_28_Part4.html",
  audioFile: "/passages/audio/test28section4.mp4",
  isPremium: false,
},
];

const FILTERS = [
  { v: "all", label: "All" },
  { v: "full", label: "Full tests" },
  { v: "1", label: "Section 1" },
  { v: "2", label: "Section 2" },
  { v: "3", label: "Section 3" },
  { v: "4", label: "Section 4" },
] as const;

function Listening() {
  const [filter, setFilter] = useState<"all" | "full" | "1" | "2" | "3" | "4">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | ProgressStatus>("all");
  const { profile, deviceConflict, user } = useAuth();
  const isPremium = !!profile?.is_premium && !deviceConflict;
  const navigate = useNavigate();

  const testIds = TESTS.map((t) => t.id);
  const { statuses, statusFor, setTestStatus, resetTest } = useTestStatus(testIds);

  // The first few tests stay free; everything after that is Premium-only.
  const freeTestIds = new Set(TESTS.slice(0, FREE_LIMITS.listeningTests).map((t) => t.id));

  const sectionCounts = {
    all: TESTS.length,
    full: TESTS.filter((t) => t.section === 0).length,
    "1": TESTS.filter((t) => t.section === 1).length,
    "2": TESTS.filter((t) => t.section === 2).length,
    "3": TESTS.filter((t) => t.section === 3).length,
    "4": TESTS.filter((t) => t.section === 4).length,
  };

  const visible = TESTS.filter((t) => {
    const matchesSection =
      filter === "all" || (filter === "full" ? t.section === 0 : String(t.section) === filter);
    const matchesStatus = statusFilter === "all" || statusFor(t.id) === statusFilter;
    return matchesSection && matchesStatus;
  });

  function openTest(test: ListeningTest) {
    if (!user) {
      void navigate({ to: "/auth" });
      return;
    }
    if (statusFor(test.id) === "not_done") {
      void setTestStatus(test.id, "not_completed");
    }
    window.open(test.htmlFile, "_blank");
  }

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-6xl relative">
        {/* Minecraft decorations */}
        <div className="absolute top-4 right-4 pointer-events-none select-none hidden lg:flex flex-col items-end gap-3">
          <Sheep size={56} opacity={0.65} />
          <McItem item="torch" size={24} opacity={0.15} className="mc-flicker" />
        </div>
        <div className="absolute top-6 right-24 pointer-events-none opacity-[0.06] hidden xl:block">
          <McItem item="pickaxe" size={32} opacity={1} />
        </div>
        <div className="ink-bleed mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">IELTS Listening</h1>
          <p className="text-muted-foreground mb-1">
            Full listening tests with built-in audio player, timer, and answer checker.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/70 tracking-wide italic">
            Time: Sections 1-4 — 30 min total | Each section approx. 7-8 min
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {/* Primary filter — section (heavier than the status row below) */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <Button
                key={f.v}
                variant={filter === f.v ? "default" : "outline"}
                size="sm"
                className="text-[13px] font-semibold rounded-full h-9 px-5"
                onClick={() => setFilter(f.v)}
              >
                {f.label} ({sectionCounts[f.v]})
              </Button>
            ))}
          </div>
          {/* Secondary filter — status (smaller, quieter) */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mr-1">
              Status
            </span>
            <Button
              variant={statusFilter === "all" ? "secondary" : "ghost"}
              size="sm"
              className="text-[11px] rounded-full h-7 px-3"
              onClick={() => setStatusFilter("all")}
            >
              All
            </Button>
            {TEST_PROGRESS_OPTIONS.map((option) => (
              <Button
                key={option.value}
                variant={statusFilter === option.value ? "secondary" : "ghost"}
                size="sm"
                className="text-[11px] rounded-full h-7 px-3"
                onClick={() => setStatusFilter(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center font-mono text-sm tracking-wide">No tests in this section yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((t) => {
              const locked = !freeTestIds.has(t.id) && !isPremium;
              const status = statuses[t.id];
              const progressStatus = statusFor(t.id);
              const isFinished = progressStatus === "finished";
              const progressMeta = getTestProgressMeta(progressStatus);

              return (
                <Card
                  key={t.id}
                  className={cn("p-6 flex flex-col relative overflow-hidden", progressMeta.cardClassName)}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant={t.section === 0 ? "info" : "secondary"} className={t.section === 0 ? undefined : "bg-accent text-foreground"}>
                        {t.section === 0 ? "Full test" : `Section ${t.section}`}
                      </Badge>
                      {t.isNew && <Badge>New</Badge>}
                      <TestProgressBadge status={progressStatus} detail={status} />
                    </div>
                    <div className="flex items-center gap-2 shrink-0 mt-1">
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {t.questions} questions
                      </span>
                      {locked && <Lock className="w-4 h-4 text-muted-foreground" />}
                    </div>
                  </div>

                  <h3
                    className={cn(
                      "font-serif text-xl font-semibold mb-2 leading-snug",
                      locked && "blur-sm select-none",
                    )}
                  >
                    {t.title}
                  </h3>

                  <p
                    className={cn(
                      "text-sm text-muted-foreground mb-5 flex-1 line-clamp-2",
                      locked && "blur-sm select-none",
                    )}
                  >
                    {t.description}
                  </p>

                  {status?.completedAt && (
                    <p className="text-xs text-muted-foreground mb-3">
                      Completed {new Date(status.completedAt).toLocaleDateString()}
                    </p>
                  )}

                  {!locked && (
                    <div className="mb-3">
                      <TestProgressSelect
                        value={progressStatus}
                        onChange={(next) => setTestStatus(t.id, next)}
                      />
                    </div>
                  )}

                  {locked ? (
                    <Link to={user ? "/premium" : "/auth"}>
                      <Button size="sm" className="w-full bg-gradient-gold text-primary-foreground">
                        <Crown className="w-4 h-4 mr-1" /> Unlock with Premium
                      </Button>
                    </Link>
                  ) : isFinished ? (
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" onClick={() => openTest(t)}>
                        <Headphones className="w-4 h-4 mr-1" /> Review
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-muted-foreground"
                        onClick={() => resetTest(t.id)}
                      >
                        <RotateCcw className="w-4 h-4 mr-1" /> Redo
                      </Button>
                    </div>
                  ) : (
                    <Button size="sm" variant="outline" className="w-full" onClick={() => openTest(t)}>
                      <Headphones className="w-4 h-4 mr-1" />
                      {progressStatus === "not_completed" ? "Continue Test" : "Start Test"}
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
