import {
  diagonal1Winner,
  horizontalWinner,
  verticalWinner,
} from "@lib/winners";
import { BoardActionKind, updateBoardAction } from "@types";
import { Dispatch } from "react";

/**
 * It checks for a winner by checking for horizontal, vertical, and diagonal wins.
 * @param {string[][]} board - string[][] - This is the board that is being passed in.
 * @param dispatchWinnerBoard - Dispatch<updateBoardAction>
 * @returns the winner of the game.
 */

export const checkForWinner = (
  board: string[][],
  dispatchWinnerBoard: Dispatch<updateBoardAction>
) => {
  /* This is checking for horizontal wins. */
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    const reducer = (accumulator: string, currentValue: string) =>
      accumulator + currentValue;
    if (row.reduce(reducer) === "XXX" || row.reduce(reducer) === "OOO") {
      dispatchWinnerBoard({
        type: BoardActionKind.UPDATE,
        payload: horizontalWinner(row[0], i),
      });
      return row[0];
    }
  }

  /* Checking for vertical wins. */
  for (let i = 0; i < board.length; i++) {
    const col = board.map((row) => row[i]);
    const reducer = (accumulator: string, currentValue: string) =>
      accumulator + currentValue;
    if (col.reduce(reducer) === "XXX" || col.reduce(reducer) === "OOO") {
      dispatchWinnerBoard({
        type: BoardActionKind.UPDATE,
        payload: verticalWinner(col[0], i),
      });
      return col[0];
    }
  }

  /* Checking for diagonal wins. */
  const diagonal1 = board.map((row, index) => row[index]);
  if (
    diagonal1[0] === diagonal1[1] &&
    diagonal1[1] === diagonal1[2] &&
    diagonal1[0] !== ""
  ) {
    dispatchWinnerBoard({
      type: BoardActionKind.UPDATE,
      payload: diagonal1Winner(diagonal1[0]),
    });
    return diagonal1[0];
  }

  /* This is checking for the diagonal win from the bottom left to the top right. */
  const diagonal2 = board.map((row, index) => row[board.length - 1 - index]);
  if (
    diagonal2[0] === diagonal2[1] &&
    diagonal2[1] === diagonal2[2] &&
    diagonal2[0] !== ""
  ) {
    dispatchWinnerBoard({
      type: BoardActionKind.UPDATE,
      payload: diagonal1Winner(diagonal2[0]),
    });
    return diagonal2[0];
  }

  /* This is checking if the board is full and if it is, it returns a tie. */
  const isTie = board.every((row) => row.every((col) => col !== ""));
  if (isTie) {
    return "tie";
  }
};
