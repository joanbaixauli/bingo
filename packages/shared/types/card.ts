export type Cell = number | null;
export type Card = { id: string, card: Cell[][] };

export type CardProgress = {
  id: string;
  progress: number[];
};