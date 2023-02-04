import { BoardActionKind, updateBoardAction } from "@types";
import { Dispatch } from "react";

type BoardAction = {
  dispatch: Dispatch<updateBoardAction>;
  dispatchWinnerBoard: Dispatch<updateBoardAction>;
  setPlayer: Dispatch<React.SetStateAction<string>>;
  setGameOver: Dispatch<React.SetStateAction<boolean>>;
  setStatus: Dispatch<React.SetStateAction<string>>;
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
  setStatus("X");
};
