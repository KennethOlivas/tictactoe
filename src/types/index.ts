export type Board = string[][];

export enum BoardActionKind {
  UPDATE = "UPDATE",
  RESET = "RESET",
}

export interface updateBoardAction {
  type: BoardActionKind;
  payload: Board;
}

export interface boardState {
  board: Board;
}

export interface winnerBoardState {
  winnerBoard: Board;
}
