import { z } from 'zod';

// 👉 Zod schema
export const CreateGameSchema = z.object({
  hostName: z.string({
    required_error: 'errors.hostNameRequired',
    invalid_type_error: 'errors.hostNameRequired'
  }).min(1, 'errors.hostNameRequired'),
  cardsNumber: z.number({
    required_error: 'errors.cardsNumberRequired',
    invalid_type_error: 'errors.cardsNumberRequired'
  }).int().min(1, 'errors.cardsNumberMin').max(6, 'errors.cardsNumberMax'),
});

// 👉 TypeScript type derived from Zod
export type CreateGamePayload = z.infer<typeof CreateGameSchema>;
