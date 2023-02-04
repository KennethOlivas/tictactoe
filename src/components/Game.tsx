import { useReducer, useState } from "react";
import Board from "@Components/Board";
import { BoardActionKind } from "@types";
import ResetButton from "@Components/ResetButton";
import { boardReducer, BOARD_INICIAL_STATE } from "@reducers/boardReducer";
import {
  winnerBoardReducer,
  WINNER_INICIAL_STATE,
} from "@reducers/winnerBoardReducer";
import { checkForWinner } from "@lib/checkForWinner";
import { resetGame } from "@lib/resetGame";

/**
 * It renders a board, a status, and a reset button
 * @returns The board is being returned.
 */

const Game = () => {
  const [{ board }, dispatch] = useReducer(boardReducer, {
    board: BOARD_INICIAL_STATE,
  });

  const [{ winnerBoard }, dispatchWinnerBoard] = useReducer(
    winnerBoardReducer,
    {
      winnerBoard: WINNER_INICIAL_STATE,
    }
  );

  const [player, setPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [status, setStatus] = useState("X");

  const handleClick = (row: number, col: number) => {
    if (gameOver || board[row][col] !== "") {
      return;
    }

    const newBoard = [...board];

    newBoard[row][col] = player;

    dispatch({
      type: BoardActionKind.UPDATE,
      payload: newBoard,
    });

    const newPlayer = player === "X" ? "O" : "X";
    setPlayer(newPlayer);

    setStatus(`Next player: ${newPlayer}`);

    const winner = checkForWinner(newBoard, dispatchWinnerBoard);
    if (winner) {
      setStatus(`Winner: ${winner}`);
      setGameOver(true);
    }
  };

  const reset = () => {
    resetGame({
      dispatch,
      dispatchWinnerBoard,
      setPlayer,
      setGameOver,
      setStatus,
    });
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center space-y-12 bg-aqua">
      <h1 className="text-3xl font-bold text-lightCream">Player: {player}</h1>
      <h1 className="text-3xl font-bold text-lightCream">{status}</h1>
      <Board
        board={board}
        gameOver={gameOver}
        onClick={handleClick}
        player={player}
        winnerBoard={winnerBoard}
      />
      <ResetButton onClick={reset} />
    </div>
  );
};

export default Game;
