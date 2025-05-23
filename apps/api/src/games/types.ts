import { Player } from '../players/types';

export type GameStatus = 'waiting' | 'starting' | 'in_progress' | 'finished';

export interface GameState {
  code: string;
  host: string;
  status: GameStatus;
  players: Map<string, Player>;
  cardsNumber: number;
  availableBalls: number[];
  drawnBalls: number[];
  currentBall?: number;
  createdAt: number;
}
