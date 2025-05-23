import { Injectable } from '@nestjs/common';
import { Player } from './types';

@Injectable()
export class PlayersService {
  private players: Map<string, Player> = new Map();

  createTemporaryPlayer(name: string, cardsNumber: number): Player {
    const player: Player = {
      id: this.generatePlayerId(),
      name,
      cards: [],
      // cards: this.generateCards(cardsNumber),
    };
    this.players.set(name, player);
    return player;
  }

  private generatePlayerId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  addPlayer(player: Player) {
    this.players.set(player.name, player);
  }

  removePlayer(playerId: string) {
    this.players.delete(playerId);
  }

  getPlayer(playerId: string): Player | undefined {
    return this.players.get(playerId);
  }

  getAllPlayers(): Player[] {
    return Array.from(this.players.values());
  }
}
