import { Injectable } from '@nestjs/common';
import { GameStateService } from './game.state';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly gameState: GameStateService) {}

  createGame(dto: CreateGameDto) {
    const code = this.generateCode();
    const game = this.gameState.createGame(
      code, 
      // dto.hostId, 
      {
        cardsPerPlayer: dto.cardsPerPlayer ?? 1
      }
    );

    return { code: game.code };
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
