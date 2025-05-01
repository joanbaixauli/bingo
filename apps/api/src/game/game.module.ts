import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameStateService } from './game.state';

@Module({
  controllers: [GameController],
  providers: [GameService, GameStateService],
})
export class GameModule {}
