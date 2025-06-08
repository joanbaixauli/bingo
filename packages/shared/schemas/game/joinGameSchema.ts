import { z } from 'zod';

export const JoinGameSchema = z.object({
  playerName: z.string().min(1, 'El nombre es obligatorio').max(20, 'Nombre demasiado largo'),
  sessionCode: z.string().length(5, 'El código de la partida debe tener 5 caracteres'),
});

export type JoinGamePayload = z.infer<typeof JoinGameSchema>;
