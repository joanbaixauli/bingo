import { z } from 'zod';

// 👉 Zod schema
export const CreateGameSchema = z.object({
  hostName: z.string().min(1),
  cardsNumber: z.number().int().min(1).max(3),
});

// 👉 TypeScript type derived from Zod
export type CreateGamePayload = z.infer<typeof CreateGameSchema>;
