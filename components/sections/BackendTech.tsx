"use client";

import NodeJsIcon from "@/components/icons/NodeJsIcon";
import ExpressJsIcon from "@/components/icons/ExpressJsIcon";
import NestJsIcon from "@/components/icons/NestJsIcon";
import GraphQlIcon from "@/components/icons/GraphQlIcon";
import RestApiIcon from "@/components/icons/RestApiIcon";
import AuthIcon from "@/components/icons/AuthIcon";
import ServerIcon from "@/components/icons/ServerIcon";
import Node from "@/components/Node";

// animation
import { motion, AnimatePresence } from "framer-motion";
import { animateBtmToUp } from "@/animation/framer-motion";

const nodes = [
  {
    type: "NodeJs",
    label: <NodeJsIcon className="h-6 w-6 sm:h-10 sm:w-10" />,
    className: "top-8 sm:top-9",
    lineHeight: "h-15 sm:h-30",
  },
  {
    type: "ExpressJs",
    label: <ExpressJsIcon className="h-6 w-6 sm:h-10 sm:w-10" />,
    className: "-top-12 sm:-top-12 sm:-top-16",
    lineHeight: "h-35 sm:h-55",
  },
  {
    type: "NestJS",
    label: <NestJsIcon className="h-6 w-6 sm:h-10 sm:w-10" />,
    className: "top-8 sm:top-9",
    lineHeight: "h-15 sm:h-30",
  },
  {
    type: "GraphQL",
    label: <GraphQlIcon className="h-6 w-6 sm:h-10 sm:w-10 " />,
    className: "-top-12 sm:-top-16",
    lineHeight: "h-35 sm:h-55",
  },
  {
    type: "RestApi",
    label: <RestApiIcon className="h-6 w-6 sm:h-10 sm:w-10" />,
    className: "top-8 sm:top-9",
    lineHeight: "h-15 sm:h-30",
  },
  {
    type: "Authentication",
    label: <AuthIcon className="h-6 w-6 sm:h-10 sm:w-10" />,
    className: "-top-12 sm:-top-16",
    lineHeight: "h-35 sm:h-55",
  },
  {
    type: "Server",
    label: <ServerIcon className="h-6 w-6 sm:h-10 sm:w-10" />,
    className: "top-8 sm:top-9",
    lineHeight: "h-15 sm:h-30",
  },
];

export default function BackendTech({
  onClick,
  type,
}: {
  type: string;
  onClick: (type: string) => void;
}) {
  return (
    <motion.div
      variants={animateBtmToUp}
      className="order-first lg:order-last mt-24 lg:mt-0 w-full flex flex-col items-center"
    >
      {/* ICON ROW */}
      <div className="relative w-full items-end flex justify-between max-w-5xl px-8">
        {/* Node */}
        {nodes?.map((node) => (
          <div className="flex flex-col items-center" key={node.type}>
            <Node
              selectedType={type}
              key={node.type}
              onClick={onClick}
              type={node.type}
              className={node.className}
              label={node.label}
            />
            <div className={`w-px bg-primary ${node.lineHeight}`} />
          </div>
        ))}
      </div>

      {/* BACKEND BOX */}
      <div
        onClick={() => onClick("Backend")}
        className={`cursor-pointer w-full max-w-5xl border border-primary py-2 text-center ${type === "Backend" ? "text-paper bg-primary" : "bg-transparent text-primary"} hover:bg-primary hover:text-paper transition-colors duration-700 ease-in-out`}
      >
        <h2 className="text-lg sm:text-2xl font-bold">{"</> Backend"}</h2>
      </div>
    </motion.div>
  );
}
