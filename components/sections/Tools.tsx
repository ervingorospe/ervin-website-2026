"use client";

import SectionHeader from "@/components/SectionHeader";
import Paper from "@/components/Paper";
import CiCdIcon from "@/components/icons/CiCdIcon";
import AwsIcon from "@/components/icons/AwsIcon";
import VsCodeIcon from "@/components/icons/VsCodeIcon";
import PostmanIcon from "@/components/icons/PostmanIcon";
import WorkbenchIcon from "@/components/icons/WorkbenchIcon";
import PgAdminIcon from "@/components/icons/PgAdminIcon";
import DockerIcon from "@/components/icons/DockerIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import FigmaIcon from "@/components/icons/FigmaIcon";

const tools1 = [
  {
    icon: <AwsIcon className="h-6 w-auto " />,
    label: "AWS",
  },
  {
    icon: <VsCodeIcon className="h-6 w-auto " />,
    label: "VsCode",
  },
  {
    icon: <PostmanIcon className="h-6 w-auto " />,
    label: "Postman",
  },
  {
    icon: <WorkbenchIcon className="h-6 w-auto " />,
    label: "Workbench",
  },
  {
    icon: <PgAdminIcon className="h-6 w-auto " />,
    label: "PgAdmin",
  },
];

const tools2 = [
  {
    icon: <DockerIcon className="h-6 w-auto " />,
    label: "Docker",
  },
  {
    icon: <GithubIcon className="h-6 w-auto " />,
    label: "Github",
  },
  {
    icon: <FigmaIcon className="h-6 w-auto " />,
    label: "Figma",
  },
  {
    icon: <CiCdIcon className="h-6 w-auto " />,
    label: "CI/CD Pipeline",
  },
];

export default function Tools() {
  return (
    <div className="app-container mt-14 md:mt-44">
      <div className="text-center">
        <SectionHeader
          heading="Additional Skills/Tools"
          subHeading="Passionate about turning ideas into fast, scalable, and impactful digital experiences."
          dividerWidth="w-[275px]"
        />
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-6 text-primary">
        {tools1?.map((tool) => (
          <Paper
            key={tool.label}
            className="text-center rounded-4xl 
                 w-full sm:w-[45%] md:w-[200px] 
                 py-2 border border-primary"
          >
            <div className="flex items-center justify-center space-x-2">
              {tool.icon}
              <span className="font-bold">{tool.label}</span>
            </div>
          </Paper>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-primary">
        {tools2?.map((tool) => (
          <Paper
            key={tool.label}
            className="text-center rounded-4xl 
                 w-full sm:w-[45%] md:w-[200px] 
                 py-2 border border-primary"
          >
            <div className="flex items-center justify-center space-x-2">
              {tool.icon}
              <span className="font-bold">{tool.label}</span>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
}
