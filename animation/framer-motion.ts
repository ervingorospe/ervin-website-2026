import { Variants } from "framer-motion";

// Parent controls the sequence
export const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // delay between each item
    },
  },
};

// Each item animation (bottom → up + fade)
export const animateBtmToUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
