"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Carousel from "@/components/Carousel";
import AnimationContainer from "@/components/layout/AnimationContainer";
import { animateBtmToUp } from "@/animation/framer-motion";

export default function Projects() {
  return (
    <div className="app-container mt-14 md:mt-44" id="projects">
      <AnimationContainer className="text-center">
        <SectionHeader
          heading="Projects"
          subHeading="Turning ideas into scalable, high-performing digital solutions."
          dividerWidth="w-[75px]"
        />
      </AnimationContainer>
      <AnimationContainer className="mt-12">
        <motion.div variants={animateBtmToUp}>
          <Carousel />
        </motion.div>
      </AnimationContainer>
    </div>
  );
}
