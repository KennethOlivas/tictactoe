import { FC } from "react";
import Square from "@Components/Square";
import { motion } from "framer-motion";
import { container, item } from "@Common/animationIcon";

type Props = {
  board: Array<Array<string>>;
  player: string;
  gameOver: boolean;
  onClick: (row: number, col: number) => void;
  winnerBoard: Array<Array<string>>;
};

/**
 * Props is an object with a board property that is an array of arrays of strings, a player property
 * that is a string, a gameOver property that is a boolean, an onClick property that is a function that
 * takes a number and a number and returns void, and a winnerBoard property that is an array of arrays
 * of strings.
 * @property board - The current state of the board.
 * @property {string} player - The current player.
 * @property {boolean} gameOver - boolean;
 * @property onClick - This is a function that will be called when a square is clicked.
 * @property winnerBoard - This is the board that is used to determine if a player has won.
 */

const Board: FC<Props> = ({
  board,
  player,
  gameOver,
  onClick,
  winnerBoard,
}) => {
  return (
    <div className="flex">
      <motion.ul variants={container} initial="hidden" animate="visible">
        {board.map((row, rowIndex) => {
          return (
            <div className="flex" key={rowIndex}>
              {row.map((square, squareIndex) => {
                return (
                  <motion.li key={squareIndex} variants={item} className="flex">
                    <Square
                      winner={
                        winnerBoard[rowIndex][squareIndex] === "X" ||
                        winnerBoard[rowIndex][squareIndex] === "O"
                      }
                      value={square}
                      disabled={gameOver}
                      onClick={() => {
                        onClick(rowIndex, squareIndex);
                      }}
                      player={player}
                    />
                  </motion.li>
                );
              })}
            </div>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Board;
