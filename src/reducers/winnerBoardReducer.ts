import { BoardActionKind, updateBoardAction, winnerBoardState } from "@types";

export const WINNER_INICIAL_STATE = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

/**
 * It takes in a state and an action, and returns a new state
 * @param {winnerBoardState} state - winnerBoardState
 * @param {updateBoardAction} action - updateBoardAction
 * @returns The winnerBoardReducer is returning the state of the winnerBoard.
 */

export const winnerBoardReducer = (
  state: winnerBoardState,
  action: updateBoardAction
) => {
  const { payload, type } = action;
  switch (type) {
    case BoardActionKind.UPDATE:
      return {
        ...state,
        winnerBoard: payload,
      };
    case BoardActionKind.RESET:
      return {
        winnerBoard: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
      };
    default:
      return state;
  }
};
