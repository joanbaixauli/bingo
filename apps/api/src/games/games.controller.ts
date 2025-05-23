import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGamePayload, JoinGamePayload } from 'shared-types';
import { GamesService } from './games.service';
import { GameState } from './types';

@Controller('game')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Get()
  getGames() {
    return this.gameService.getGames();
  }

  @Get(':code')
  getGame(@Param() params: any): GameState {
    return this.gameService.getGame(params.code);
  }

  @Post('create')
  create(@Body() dto: CreateGamePayload) {
    return this.gameService.createGame(dto);
  }

  @Post('join')
  join(@Body() dto: JoinGamePayload) {
    return this.gameService.joinGame(dto);
  }
}