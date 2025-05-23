import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { GameStateService } from './games.state';
import { PlayersService } from 'src/players/players.service';

@Module({
  controllers: [GamesController],
  providers: [GamesService, GameStateService, PlayersService],
})
export class GameModule {}
