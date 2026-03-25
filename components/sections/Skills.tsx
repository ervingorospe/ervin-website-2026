"use client";

import FrontEnd from "@/components/sections/FrontEnd";
import SectionHeader from "@/components/SectionHeader";

export default function Skills() {
  return (
    <div className="app-container pt-14 md:pt-24" id="skills">
      <div className="text-center">
        <SectionHeader
          heading="My Skills"
          subHeading="The technologies I use to turn ideas into scalable, real-world applications."
          dividerWidth="w-[115px]"
        />
      </div>
      <FrontEnd />
    </div>
  );
}
