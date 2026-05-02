"use client";

import FrontEnd from "@/components/sections/FrontEnd";
import BackEnd from "@/components/sections/Backend";
import Database from "@/components/sections/Database";
import SectionHeader from "@/components/SectionHeader";
import AnimationContainer from "@/components/layout/AnimationContainer";

export default function Skills() {
  return (
    <div className="app-container mt-14 md:mt-44" id="skills">
      <AnimationContainer className="text-center">
        <SectionHeader
          heading="My Skills"
          subHeading="The technologies I use to turn ideas into scalable, real-world applications."
          dividerWidth="w-[115px]"
        />
      </AnimationContainer>
      <FrontEnd />
      <BackEnd />
      <Database />
    </div>
  );
}
