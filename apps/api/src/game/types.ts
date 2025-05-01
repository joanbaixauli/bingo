export type GameStatus = 'waiting' | 'starting' | 'in_progress' | 'finished';

export interface Player {
  id: string; // socket.id o identificador temporal
  name: string;
  card: number[][];
  matchedNumbers: number[];
  connected: boolean;
}

export interface GameState {
  code: string;
  // hostId: string;
  status: GameStatus;
  players: Map<string, Player>;
  cardsPerPlayer: number;
  availableBalls: number[];
  drawnBalls: number[];
  currentBall?: number;
  createdAt: number;
}
