"use client";

import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { container } from "@/animation/framer-motion";

export default function AnimationContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: isMobile ? 0.1 : 0.7 }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
}
