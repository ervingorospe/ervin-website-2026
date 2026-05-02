"use client";

import { motion } from "framer-motion";
import { animateBtmToUp } from "@/animation/framer-motion";

export default function SectionHeader({
  heading,
  subHeading,
  dividerWidth,
}: {
  heading: string;
  subHeading?: string;
  dividerWidth: string;
}) {
  return (
    <div className="text-center">
      <motion.h2
        variants={animateBtmToUp}
        className="text-3xl md:text-4xl font-bold text-heading"
      >
        {heading}
        <span
          className={`block h-[4px] ${dividerWidth} bg-primary mt-1 mx-auto`}
        ></span>
      </motion.h2>
      {subHeading && (
        <motion.h3 variants={animateBtmToUp} className="mt-4">
          {subHeading}
        </motion.h3>
      )}
    </div>
  );
}
