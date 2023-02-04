import { animate, inicial, transition } from "@Common/animationIcon";
import { motion } from "framer-motion";
import { FC } from "react";
/**
 * It's a React component that renders an SVG with a motion.path element that animates between two
 * states
 * @returns A React component that renders a SVG element.
 */

const Circle: FC = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-1/2 w-1/2 text-lightCream pointer-events-none select-none duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.8"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728"
          animate={animate}
          initial={inicial}
          transition={transition}
        />
      </svg>
    </>
  );
};

export default Circle;
