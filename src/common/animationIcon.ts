import {
  AnimationControls,
  Target,
  TargetAndTransition,
  Transition,
  Variants,
} from "framer";

export const inicial: Target = {
  pathLength: 0,
  pathOffset: 1,
  opacity: 0,
  scale: 0,
  x: 0,
  y: 0,
};

export const animate: AnimationControls | TargetAndTransition = {
  pathLength: 1,
  pathOffset: 0,
  opacity: 1,
  scale: 1,
  x: 0,
  y: 0,
};

export const transition: Transition = {
  default: {
    duration: 0.4,
  },
  scale: {
    type: "spring",
    damping: 10,
    stiffness: 100,
    restDelta: 0.011,
  },
};

export const container: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.15,
      cascade: true,
    },
  },
};

export const item: Variants = {
  hidden: { y: 20, opacity: 0, rotate: 10 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
  },
};
