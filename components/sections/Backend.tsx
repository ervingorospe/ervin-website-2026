"use client";

import { useMemo, useState } from "react";
import RadialTechLarge from "@/components/sections/RadialTechLarge";
import RadialTechSmall from "@/components/sections/RedialTechSmall";
import SkillDescription from "@/components/SkillDescription";

// ICONS
import FrontEndIcon from "@/components/icons/FrontEnd";
import ReactIcon from "@/components/icons/ReactIcon";
import AstroIcon from "@/components/icons/AstroIcon";
import JavascriptIcon from "@/components/icons/JavascriptIcon";
import BootstrapIcon from "@/components/icons/BootstrapIcon";
import NextJsIcon from "@/components/icons/NextJsIcon";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import MuiIcon from "@/components/icons/MuiIcon";

const contents = [
  {
    type: "NodeJs",
    icon: <FrontEndIcon className="h-8 w-8" />,
    title: "NodeJS",
    subTitle: "Modern UI Development",
    desc: `With years of experience in frontend development, I’ve worked with various tools, libraries, and frameworks to build dynamic and responsive web applications. I specialize in React, Next.js, Tailwind CSS, and Material UI, leveraging them to develop scalable, performance-driven interfaces. I’m passionate about clean code, intuitive design, and creating smooth, user-focused digital experiences.`,
  },
  {
    type: "ExpressJs",
    icon: <ReactIcon className="h-8 w-8 " />,
    title: "ExpressJS",
    subTitle: "Modern UI Development",
    desc: `I use React to build dynamic and interactive user interfaces with a component-driven architecture. I have experience managing state, optimizing rendering performance, and structuring scalable applications. I also apply best practices such as reusable components, hooks, and clean code patterns to ensure maintainability and efficiency.`,
  },
  {
    type: "RestApi",
    icon: <AstroIcon className="h-8 w-8 " />,
    title: "RestAPI",
    subTitle: "Modern UI Development",
    desc: `I use Astro to build fast, content-focused websites with excellent performance. Its partial hydration approach allows me to deliver lightweight pages while still integrating modern frameworks like React when needed.`,
  },
  {
    type: "Authentication",
    icon: <JavascriptIcon className="h-8 w-8 " />,
    title: "Authentication",
    subTitle: "Modern UI Development",
    desc: `I have a strong foundation in JavaScript, allowing me to build dynamic and interactive web applications. I write clean, efficient logic and understand core concepts such as closures, async operations, and event handling, which helps me solve complex problems effectively.`,
  },
  {
    type: "Server",
    icon: <BootstrapIcon className="h-8 w-8 " />,
    title: "Server",
    subTitle: "Modern UI Development",
    desc: `I have experience using Bootstrap to quickly develop responsive layouts and UI components. It helps me prototype fast and deliver structured designs, especially for projects that require rapid development and consistency.`,
  },
  {
    type: "NestJS",
    icon: <TypescriptIcon className="h-8 w-8 " />,
    title: "NestJS",
    subTitle: "Modern UI Development",
    desc: `I use TypeScript to write safer and more maintainable code by enforcing strong typing across applications. This helps reduce bugs, improve code readability, and enhance collaboration, especially in large-scale projects and API integrations.`,
  },
];

export default function BackEnd() {
  const [type, setType] = useState<string>("Frontend");

  const selectedContent = useMemo(
    () => contents.find((item) => item.type === type),
    [type],
  );

  return (
    <div className="grid mt-16 lg:grid-cols-2 gap-8 items-center">
      <SkillDescription selectedContent={selectedContent} />
    </div>
  );
}
