import { z } from 'zod';

export const JoinGameSchema = z.object({
  playerName: z.string().min(1),
  sessionCode: z.string().length(5),
});