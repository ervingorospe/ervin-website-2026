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

const nodes = [
  {
    type: "React",
    label: <ReactIcon className="h-6 w-6" />,
    className: "top-10 left-1/2 -translate-x-1/2",
  },
  {
    type: "Astro",
    label: <AstroIcon className="h-6 w-6" />,
    className: "top-26 right-10",
  },
  {
    type: "Javascript",
    label: <JavascriptIcon className="h-6 w-6" />,
    className: "top-1/2 -right-0 -translate-y-1/2",
  },
  {
    type: "Bootstrap",
    label: <BootstrapIcon className="h-6 w-6" />,
    className: "bottom-25 right-11",
  },
  {
    type: "NextJs",
    label: <NextJsIcon className="h-6 w-6" />,
    className: "bottom-10 left-1/2 -translate-x-1/2",
  },
  {
    type: "Typescript",
    label: <TypescriptIcon className="h-6 w-6" />,
    className: "bottom-26 left-10",
  },
  {
    type: "Tailwind",
    label: <TailwindIcon className="h-6 w-6" />,
    className: "top-1/2 left-0 -translate-y-1/2",
  },
  {
    type: "Mui",
    label: <MuiIcon className="h-6 w-6" />,
    className: "top-26 left-11",
  },
];

const RadialTechSmall = React.memo(function RadialTechLarge({
  onClick,
  type,
}: {
  type: string;
  onClick: (label: string) => void;
}) {
  return (
    <div className="relative w-[300px] h-[420px] block sm:hidden lg:block xl:hidden">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {type == "Frontend" ? (
          <RingHoverButton>
            <div
              onClick={() => onClick("Frontend")}
              className="cursor-pointer Z-10 w-22 h-22 rounded-full border border-primary bg-background z-10 flex flex-col items-center justify-center text-primary hover:bg-primary hover:text-paper transition-colors duration-700 ease-in-out"
            >
              <div className="text-3xl">
                <FrontEndIcon className="h-6 w-6" />
              </div>
              <p className="mt-2 font-semibold text-xs">Frontend</p>
            </div>
          </RingHoverButton>
        ) : (
          <div
            onClick={() => onClick("Frontend")}
            className="cursor-pointer Z-10 w-22 h-22 rounded-full border border-primary bg-background z-10 flex flex-col items-center justify-center text-primary hover:bg-primary hover:text-paper transition-colors duration-700 ease-in-out"
          >
            <div className="text-3xl">
              <FrontEndIcon className="h-6 w-6" />
            </div>
            <p className="mt-2 font-semibold text-xs">Frontend</p>
          </div>
        )}
      </div>
      {/* ===== LINES (from center) ===== */}
      {/* top */}
      <div className="absolute top-[40%] left-1/2 w-[26%] h-[1px] bg-primary  origin-left rotate-[-90deg]" />
      {/* top-right */}
      <div className="absolute top-[43%] right-[23%] w-[17%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[-45deg]" />
      {/* right */}
      <div className="absolute top-1/2 right-[10%] w-[26%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[0deg]" />
      {/* bottom-right */}
      <div className="absolute bottom-[42%] right-[24%] w-[17%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[45deg]" />
      {/* bottom */}
      <div className="absolute bottom-[40%] left-1/2 w-[26%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[90deg]" />
      {/* bottom-left */}
      <div className="absolute bottom-[43%] left-[39%] w-[17%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[135deg]" />
      {/* left */}
      <div className="absolute top-1/2 left-[36%] w-[26%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[180deg]" />
      {/* top-left */}
      <div className="absolute top-[43%] left-[40%] w-[17%] h-[1px] bg-primary -translate-y-1/2 origin-left rotate-[-135deg]" />
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

export default RadialTechSmall;
