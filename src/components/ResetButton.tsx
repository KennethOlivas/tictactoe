import { inicial, transition, animate } from "@Common/animationIcon";
import { motion } from "framer-motion";
import { FC } from "react";

type Props = {
  onClick: () => void;
};

const ResetButton: FC<Props> = ({ onClick }) => {
  return (
    <motion.button
      initial={inicial}
      animate={animate}
      transition={transition}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1 }}
      className="bg-lightCream border-2 border-lightCream text-aqua text-lg font-bold py-4 px-8 rounded-md 
      shadow-lg shadow-cream/20 hover:bg-lightCream/40 hover:text-light  transition-all duration-200
       hover:shadow-light/40"
      onClick={onClick}>
      Reset
    </motion.button>
  );
};

export default ResetButton;
