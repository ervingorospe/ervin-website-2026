"use client";

import React from "react";
import RingHoverButton from "@/components/RingHoverButton";
import FrontEndIcon from "@/components/icons/FrontEnd";
import ReactIcon from "@/components/icons/ReactIcon";
import AstroIcon from "@/components/icons/AstroIcon";
import JavascriptIcon from "@/components/icons/JavascriptIcon";
import BootstrapIcon from "@/components/icons/BootstrapIcon";
import NextJsIcon from "@/components/icons/NextJsIcon";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import MuiIcon from "@/components/icons/MuiIcon";
import Node from "@/components/Node";
import type TechType from "@/components/sections/FrontEnd";

const nodes = [
  {
    type: "React",
    label: <ReactIcon className="h-10 w-10" />,
    className: "-top-20 left-1/2 -translate-x-1/2",
  },
  {
    type: "Astro",
    label: <AstroIcon className="h-10 w-10" />,
    className: "top-8 right-24",
  },
  {
    type: "Javascript",
    label: <JavascriptIcon className="h-10 w-10" />,
    className: "top-1/2 right-2 -translate-y-1/2",
  },
  {
    type: "Bootstrap",
    label: <BootstrapIcon className="h-10 w-10" />,
    className: "bottom-8 right-24",
  },
  {
    type: "NextJs",
    label: <NextJsIcon className="h-10 w-10" />,
    className: "-bottom-19 left-1/2 -translate-x-1/2",
  },
  {
    type: "Typescript",
    label: <TypescriptIcon className="h-10 w-10" />,
    className: "bottom-8 left-24",
  },
  {
    type: "Tailwind",
    label: <TailwindIcon className="h-10 w-10" />,
    className: "top-1/2 left-2 -translate-y-1/2",
  },
  {
    type: "Mui",
    label: <MuiIcon className="h-10 w-10" />,
    className: "top-8 left-24",
  },
];

const RadialTechLarge = React.memo(function RadialTechLarge({
  onClick,
  type,
}: {
  type: string;
  onClick: (label: string) => void;
}) {
  return (
    <div className="relative w-[595px] h-[420px] hidden sm:block lg:hidden xl:block">
      {/* CENTER */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {type == "Frontend" ? (
          <RingHoverButton>
            <div
              onClick={() => onClick("Frontend")}
              className="cursor-pointer Z-10 w-26 h-26 sm:w-56 sm:h-56 rounded-full border border-primary bg-background z-10 flex flex-col items-center justify-center text-primary hover:bg-primary hover:text-paper transition-colors duration-700 ease-in-out"
            >
              <div className="text-3xl">
                <FrontEndIcon className="h-8 w-8 sm:w-18 sm:h-18 " />
              </div>
              <p className="mt-2 font-semibold">Frontend</p>
            </div>
          </RingHoverButton>
        ) : (
          <div
            onClick={() => onClick("Frontend")}
            className="cursor-pointer Z-10 w-26 h-26 sm:w-56 sm:h-56 rounded-full border border-primary bg-background z-10 flex flex-col items-center justify-center text-primary hover:bg-primary hover:text-paper transition-colors duration-700 ease-in-out"
          >
            <div className="text-3xl">
              <FrontEndIcon className="h-8 w-8 sm:w-18 sm:h-18 " />
            </div>
            <p className="mt-2 font-semibold">Frontend</p>
          </div>
        )}
      </div>

      {/* ===== LINES (from center) ===== */}
      {/* top */}
      <div className="absolute top-[23%] left-1/2 w-[19%] h-[1px] bg-primary  origin-left rotate-[-90deg]" />

      {/* top-right */}
      <div className="absolute top-[33.5%] right-[21%] w-[14%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[-45deg]" />

      {/* right */}
      <div className="absolute top-1/2 right-[12%] w-[19%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[0deg]" />

      {/* bottom-right */}
      <div className="absolute bottom-35 right-[21%] w-[14%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[45deg]" />

      {/* bottom */}
      <div className="absolute bottom-[23%] left-1/2 w-[19%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[90deg]" />

      {/* bottom-left */}
      <div className="absolute bottom-35 left-[35%] w-[14%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[135deg]" />

      {/* left */}
      <div className="absolute top-1/2 left-[31%] w-[19%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[180deg]" />

      {/* top-left */}
      <div className="absolute top-[38%] left-[37%] w-[20%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[-135deg]" />

      {/* ===== NODES ===== */}

      {nodes?.map((node) => (
        <Node
          selectedType={type}
          key={node.type}
          onClick={onClick}
          type={node.type}
          className={node.className}
          label={node.label}
        />
      ))}
    </div>
  );
});

export default RadialTechLarge;
