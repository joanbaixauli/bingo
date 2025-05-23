import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './games/games.module';
import { PlayersController } from './players/players.controller';
import { PlayerModule } from './players/players.module';

@Module({
  imports: [GameModule, PlayerModule],
  controllers: [AppController, PlayersController],
  providers: [AppService],
})
export class AppModule {}
