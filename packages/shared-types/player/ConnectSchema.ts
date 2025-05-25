import { z } from 'zod';

export const ConnectSchema = z.object({
  code: z.string().length(5),
  playerId: z.string().min(1),
  playerToken: z.string().min(1),
});

export type ConnectSchema = z.infer<typeof ConnectSchema>;