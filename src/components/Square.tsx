import { FC, useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Circle from "@Components/Circle";
import Xmark from "@Components/Xmark";

type Props = {
  onClick: () => void;
  value: string | null;
  player: string | null;
  disabled: boolean;
  winner: boolean;
};

const Square: FC<Props> = ({ disabled, onClick, player, value, winner }) => {
  const style = useMemo(() => {
    if (winner) {
      return "w-20 h-20 sm:w-40 sm:h-40 bg-green/50 border-4 rounded-xl border-green transition-all duration-150 flex justify-center items-center";
    }
    return "w-20 h-20 sm:w-40 sm:h-40 bg-transparent border-4 rounded-xl border-cream hover:bg-light/20 transition-all duration-150 flex justify-center items-center";
  }, [winner]);
  const [squareValue, setSquareValue] = useState(value);

  const handleClick = () => {
    if (player !== squareValue && squareValue !== "") return;
    setSquareValue(player);
    onClick();
  };

  useMemo(() => {
    setSquareValue(value);
  }, [value]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      className="sm:w-48 sm:h-48 h-24 w-24">
      <button className={style} disabled={disabled} onClick={handleClick}>
        {squareValue === "X" && <Xmark />}
        {squareValue === "O" && <Circle />}
      </button>
    </motion.div>
  );
};

export default Square;
