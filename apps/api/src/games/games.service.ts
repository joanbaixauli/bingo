import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { GameStateService } from './games.state';
import { CreateGamePayload, JoinGamePayload } from 'shared-types';

@Injectable()
export class GamesService {
  constructor(private readonly gameState: GameStateService) {}

  getGames() {
    return this.gameState.getAllGames();
  }

  getGame(code: string) {
    const game = this.gameState.getGame(code);
    if (!game) throw new NotFoundException('Game not found');
    return game;
  }

  createGame(dto: CreateGamePayload) {
    const code = this.generateCode();
    const hostName = dto.hostName;
    const cardsNumber = dto.cardsNumber || 1;
    const game = this.gameState.createGame(
      code,
      hostName,
      cardsNumber
    );

    return { code: game.code };
  }

  joinGame(dto: JoinGamePayload) {
    const game = this.getGame(dto.sessionCode);
    
    if (!game) throw new NotFoundException('Game not found');
    if (game.players.has(dto.playerName)) throw new BadRequestException('Player already in the game');
    
    this.gameState.joinGame(game, dto.playerName);
    return game;
  }

  private generateCode(length = 5): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }
}
