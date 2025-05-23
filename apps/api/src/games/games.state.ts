import { Injectable } from '@nestjs/common';
import { GameState } from './types';
import { Game } from './games.model';
import { PlayersService } from '../players/players.service';
import { Player } from 'src/players/types';

@Injectable()
export class GameStateService {
  private games = new Map<string, GameState>();

  constructor(private readonly playerService: PlayersService) {}

  createGame(
    code: string,
    hostName: string,
    cardsNumber: number,
  ): GameState {
    const host = this.playerService.createTemporaryPlayer(hostName, cardsNumber);
    const game: GameState = {
      code,
      status: 'waiting',
      cardsNumber,
      host: host.name,
      players: new Map<string, Player>(),
      availableBalls: this.shuffleBalls(),
      drawnBalls: [],
      createdAt: Date.now(),
    };
    game.players.set(host.name, host);

    this.games.set(code, game);
    return game;
  }

  joinGame(game: GameState, name: string): void {
    
    const player = this.playerService.createTemporaryPlayer(name, game.cardsNumber);
    game.players.set(player.name, player);
  }

  getAllGames(): string[] {
    return Array.from(this.games.keys());
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
