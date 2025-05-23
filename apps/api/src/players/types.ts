export interface Player {
  id: string; // socket.id o identificador temporal
  name: string;
  cards: number[][];
  // matchedNumbers: number[];
  // connected: boolean;
}