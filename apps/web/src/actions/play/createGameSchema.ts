import { z } from 'zod';

export const CreateGameSchema = z.object({
  hostName: z.string().min(1),
  cardsNumber: z
    .preprocess((v) => Number(v), z.number().int().min(1).max(5))
    .default(1),
});