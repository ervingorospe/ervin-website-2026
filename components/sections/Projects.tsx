"use client";

import SectionHeader from "@/components/SectionHeader";
import Carousel from "@/components/Carousel";

export default function Projects() {
  return (
    <div className="app-container mt-14 md:mt-44" id="projects">
      <div className="text-center">
        <SectionHeader
          heading="Projects"
          subHeading="Turning ideas into scalable, high-performing digital solutions."
          dividerWidth="w-[75px]"
        />
      </div>
      <div className="mt-12">
        <Carousel />
      </div>
    </div>
  );
}
