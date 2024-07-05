export interface InventoryItem {
  image: string;
  amount: number;
  id: string;
}
export interface UserData {
  coins: number;
  map: number[];
  inventory: number[];
  coinrate: number;
}

export const USERDATA: UserData[] = [
  {
    coins: 1000,
    inventory: [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10,
    ],
    // prettier-ignore
    map: [
      1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 
      4, 13, 14, 13, 15, 17, 17, 15, 13, 6, 
      4, 21, 20, 23, 21, 20, 18, 15, 17, 6, 
      4, 12, 14, 16, 18, 20, 22, 24, 26, 6, 
      4, 13, 15, 17, 19, 21, 23, 25, 27, 6, 
      4, 28, 1, 3, 30, 32, 33, 10, 10, 6,
      4, 29, 7, 9, 31, 34, 35, 10, 10, 6, 
      4, 10, 10, 36, 37, 10, 10, 10, 10, 6,
      4, 10, 10, 38, 39, 10, 10, 10, 10, 6, 
      7, 8, 8, 8, 8, 8, 8, 8, 8, 9,
    ],
    coinrate: 10,
  },
  {
    coins: 2000,
    inventory: [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10,
    ],
    map: [
      14, 23, 23, 23, 23, 35, 23, 23, 23, 13, 21, 33, 33, 33, 33, 33, 33, 33,
      33, 20, 21, 33, 0, 0, 33, 33, 33, 1, 33, 20, 21, 33, 0, 0, 33, 1, 1, 10,
      33, 20, 36, 33, 33, 33, 33, 33, 33, 33, 33, 20, 36, 33, 37, 37, 33, 19,
      19, 10, 33, 20, 21, 33, 4, 7, 33, 19, 19, 10, 33, 20, 21, 33, 6, 8, 33,
      10, 10, 10, 33, 20, 21, 33, 33, 33, 33, 33, 33, 33, 33, 20, 11, 22, 22,
      22, 22, 22, 22, 22, 22, 12,
    ],
    coinrate: 10,
  },
];
