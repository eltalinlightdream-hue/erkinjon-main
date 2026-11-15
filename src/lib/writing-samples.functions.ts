import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  SAMPLE_MAX_LIMIT,
  type SampleDetailResult,
  type SampleListResult,
  type SampleTask,
} from "@/lib/writing-samples-library";

const taskSchema = z.union([z.literal(1), z.literal(2)]);

/* The store is imported inside each handler so the sample text (≈1 MB) is
   only ever loaded on the server and never bundled for the browser. */

export const listWritingSamples = createServerFn({ method: "GET" })
  .inputValidator(
    z.object({
      task: taskSchema,
      type: z.string().max(60).optional(),
      q: z.string().max(120).optional(),
      limit: z.number().int().min(1).max(SAMPLE_MAX_LIMIT),
    }).parse,
  )
  .handler(async ({ data }): Promise<SampleListResult> => {
    const { listSamples } = await import("@/lib/writing-samples-store");
    return listSamples(data);
  });

export const getWritingSample = createServerFn({ method: "GET" })
  .inputValidator(
    z.object({
      task: taskSchema,
      id: z.string().regex(/^t[12]-\d{1,4}$/),
    }).parse,
  )
  .handler(async ({ data }): Promise<SampleDetailResult | null> => {
    const { getSample } = await import("@/lib/writing-samples-store");
    return getSample(data.task as SampleTask, data.id);
  });

export const getWritingSampleTotals = createServerFn({ method: "GET" }).handler(
  async (): Promise<Record<SampleTask, number>> => {
    const { sampleTotals } = await import("@/lib/writing-samples-store");
    return sampleTotals();
  },
);
