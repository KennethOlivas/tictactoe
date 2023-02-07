import { animate, inicial, transition } from "@Common/animationIcon";
import { motion } from "framer-motion";
import { FC } from "react";

/**
 * A React component that renders an SVG.
 * @returns A React component that renders an SVG element.
 */

const Xmark: FC = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-1/2 w-1/2 text-lightCream pointer-events-none select-none duration-300 justify-center"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <motion.path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 20 20 4M4 4 20 20"
        initial={inicial}
        animate={animate}
        transition={transition}
      />
    </svg>
  </>
);

export default Xmark;
