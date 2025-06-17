import { z } from 'zod';

export const JoinGameSchema = z.object({
  playerName: z.string({
    required_error: 'errors.playerNameRequired',
    invalid_type_error: 'errors.playerNameRequired'
  }).min(1, 'errors.playerNameRequired').max(20, 'errors.playerNameTooLong'),
  sessionCode: z.string({
    required_error: 'errors.sessionCodeRequired',
    invalid_type_error: 'errors.sessionCodeRequired'
  }).length(5, 'errors.sessionCodeLength'),
});

export type JoinGamePayload = z.infer<typeof JoinGameSchema>;
