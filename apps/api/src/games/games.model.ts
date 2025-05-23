import { Player } from '../players/types';

export class Game {
  public players = new Map<string, Player>();
  public availableBalls: number[] = [];
  public drawnBalls: number[] = [];
  public createdAt = Date.now();

  constructor(
    public code: string,
    public status: 'waiting' | 'in-progress' | 'finished' = 'waiting',
    public cardsNumber: number = 1
  ) {
    this.availableBalls = this.shuffleBalls();
  }

  addPlayer(player: Player) {
    this.players.set(player.name, player);
  }

  private shuffleBalls(): number[] {
    return Array.from({ length: 90 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
  }

  toJSON() {
    return {
      code: this.code,
      status: this.status,
      players: Object.fromEntries(this.players),
      availableBalls: this.availableBalls,
      drawnBalls: this.drawnBalls,
      createdAt: this.createdAt,
      cardsNumber: this.cardsNumber,
    };
  }
}