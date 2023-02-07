import { inicial, transition, animate } from "@Common/animationIcon";
import { motion } from "framer-motion";
import { FC } from "react";

type Props = {
  onClick: () => void;
};

/**
 * A functional component that takes in a prop called onClick. It returns a button that has a click
 * event listener that calls the onClick prop.
 * @param  - initial - the initial state of the component
 * @returns A button with the text "Reset"
 */

const ResetButton: FC<Props> = ({ onClick }) => (
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

export default ResetButton;
