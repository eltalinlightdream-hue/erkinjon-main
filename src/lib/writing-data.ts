export type TaskType =
  | "Bar Chart" | "Pie Chart" | "Table" | "Line Graph"
  | "Map" | "Process Diagram"
  | "Opinion" | "Discussion" | "Problem-Solution"
  | "Agree/Disagree" | "Advantages/Disadvantages"
  | "Cause/Effect/Solution" | "Positive/Negative Development"
  | "Two-Part Question";

export interface WritingTask {
  id: string;
  task: 1 | 2;
  type: TaskType;
  title: string;
  description: string;
  prompt: string;
  image?: string;
  htmlFile?: string;
  minWords: number;
  timeMinutes: number;
}

export const WRITING_TASKS: WritingTask[] = [
  {
    id: "t2-credit-cards",
    task: 2,
    type: "Advantages/Disadvantages",
    title: "Credit Cards and Debt",
    description:
      "A Task 2 essay about whether the advantages of easily available credit cards outweigh the disadvantages.",
    prompt:
      "Nowadays, it is easy to apply for and be given a credit card. However, some people experience problems when they are not able to pay their debts back.\nDo the advantages of credit cards outweigh the disadvantages?",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "t2-government-food-choices",
    task: 2,
    type: "Discussion",
    title: "Government Control of Food Choices",
    description:
      "A Task 2 discussion essay about whether the government should regulate people's nutrition and food choices or leave it to personal responsibility.",
    prompt:
      "Some people think that the government should make laws concerning people's nutrition and food choices in order to improve public health, while others believe it is a matter of personal choice and responsibility.\nDiscuss both views and give your opinion.",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "t2-university-demand",
    task: 2,
    type: "Two-Part Question",
    title: "Rising Demand for University Education",
    description:
      "A Task 2 two-part essay about why more people want to attend university and whether this is a positive or negative development.",
    prompt:
      "In many countries, more and more people want to study at universities.\nWhy does this happen? Do you think this is a positive or negative development?",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "t2-fresh-water-supply",
    task: 2,
    type: "Discussion",
    title: "Government Control of Fresh Water",
    description:
      "A Task 2 discussion essay about whether the government should strictly control the supply of fresh water or leave it unregulated.",
    prompt:
      "Some people think that the government should strictly control the supply of fresh water, as it is a limited resource, while others believe it should not be regulated.\nDiscuss both views and give your opinion.",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "t2-working-abroad-with-family",
    task: 2,
    type: "Advantages/Disadvantages",
    title: "Working Abroad with Family",
    description:
      "A Task 2 essay about whether the advantages of moving abroad for work and taking one's family outweigh the disadvantages.",
    prompt:
      "Many people go to work in other countries and bring their families with them.\nDo the advantages of this development outweigh the disadvantages for families?",
    minWords: 250,
    timeMinutes: 40,
  },
  {
    id: "t2-professionals-vs-entertainers-pay",
    task: 2,
    type: "Agree/Disagree",
    title: "Pay for Professionals vs Entertainers",
    description:
      "A Task 2 essay about whether professionals such as doctors, nurses and teachers should be paid more than sports and entertainment personalities.",
    prompt:
      "Professional workers such as doctors, nurses and teachers make a greater contribution to society and therefore should be paid more than sports and entertainment personalities.\nTo what extent do you agree or disagree?",
    minWords: 250,
    timeMinutes: 40,
  },
];

export function getWritingTask(id: string): WritingTask | undefined {
  return WRITING_TASKS.find((t) => t.id === id);
}

export type WritingStatus = "not_started" | "in_progress" | "completed";

export interface WritingProgress {
  status: WritingStatus;
  text?: string;
  words?: number;
  updatedAt?: number;
}

const STORAGE_KEY = "writing-progress-v1";

function readAll(): Record<string, WritingProgress> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getWritingProgress(taskId: string): WritingProgress {
  return readAll()[taskId] ?? { status: "not_started" };
}

export function getAllWritingProgress(): Record<string, WritingProgress> {
  return readAll();
}

export function saveWritingProgress(taskId: string, progress: WritingProgress) {
  if (typeof window === "undefined") return;
  const all = readAll();
  all[taskId] = { ...progress, updatedAt: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  window.dispatchEvent(new CustomEvent("writing-progress-changed"));
}
