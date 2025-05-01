import { Injectable } from '@nestjs/common';
import { GameState, Player } from './types';

@Injectable()
export class GameStateService {
  private games = new Map<string, GameState>();

  createGame(
    code: string,
    // hostId: string,
    config: Partial<GameState>,
  ): GameState {
    const game: GameState = {
      code,
      // hostId,
      status: 'waiting',
      cardsPerPlayer: 1,
      players: new Map<string, Player>(),
      availableBalls: this.shuffleBalls(),
      drawnBalls: [],
      createdAt: Date.now(),
      ...config,
    };

    this.games.set(code, game);
    return game;
  }

  getGame(code: string): GameState | undefined {
    return this.games.get(code);
  }

  deleteGame(code: string) {
    this.games.delete(code);
  }

  private shuffleBalls(): number[] {
    return Array.from({ length: 90 }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5,
    );
  }
}
