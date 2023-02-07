import { BoardActionKind, updateBoardAction } from "@types";
import { Dispatch, SetStateAction } from "react";

type BoardAction = {
  dispatch: Dispatch<updateBoardAction>;
  dispatchWinnerBoard: Dispatch<updateBoardAction>;
  setPlayer: Dispatch<SetStateAction<string>>;
  setGameOver: Dispatch<SetStateAction<boolean>>;
  setStatus: Dispatch<SetStateAction<string>>;
};

export const resetGame = ({
  dispatch,
  dispatchWinnerBoard,
  setPlayer,
  setGameOver,
  setStatus,
}: BoardAction) => {
  dispatch({
    type: BoardActionKind.RESET,
    payload: [],
  });
  dispatchWinnerBoard({
    type: BoardActionKind.RESET,
    payload: [],
  });
  setPlayer("X");
  setGameOver(false);
  setStatus("Current player: X");
};
