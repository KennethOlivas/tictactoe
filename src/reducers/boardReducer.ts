import { BoardActionKind, boardState, updateBoardAction } from "@types";

export const BOARD_INICIAL_STATE = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

/**
 * It takes in a state and an action, and returns a new state
 * @param {boardState} state - boardState
 * @param {updateBoardAction} action - updateBoardAction
 * @returns The boardReducer is returning the state of the board.
 */

export const boardReducer = (state: boardState, action: updateBoardAction) => {
  const { payload, type } = action;
  switch (type) {
    case BoardActionKind.UPDATE:
      return {
        ...state,
        board: payload,
      };
    case BoardActionKind.RESET:
      return {
        board: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
      };
    default:
      return state;
  }
};
