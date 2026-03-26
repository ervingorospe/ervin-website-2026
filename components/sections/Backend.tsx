"use client";

import { useMemo, useState } from "react";
import SkillDescription from "@/components/SkillDescription";
import BackendTech from "@/components/sections/BackendTech";

// ICONS
import FrontEndIcon from "@/components/icons/FrontEnd";
import NodeJsIcon from "@/components/icons/NodeJsIcon";
import ExpressJsIcon from "@/components/icons/ExpressJsIcon";
import NestJsIcon from "@/components/icons/NestJsIcon";
import GraphQlIcon from "@/components/icons/GraphQlIcon";
import RestApiIcon from "@/components/icons/RestApiIcon";
import AuthIcon from "@/components/icons/AuthIcon";
import ServerIcon from "@/components/icons/ServerIcon";

const contents = [
  {
    type: "Backend",
    icon: <FrontEndIcon className="h-8 w-8" />,
    title: "Backend",
    subTitle: "Modern UI Development",
    desc: `With years of experience in frontend development, I’ve worked with various tools, libraries, and frameworks to build dynamic and responsive web applications. I specialize in React, Next.js, Tailwind CSS, and Material UI, leveraging them to develop scalable, performance-driven interfaces. I’m passionate about clean code, intuitive design, and creating smooth, user-focused digital experiences.`,
  },
  {
    type: "NodeJs",
    icon: <NodeJsIcon className="h-8 w-8" />,
    title: "NodeJS",
    subTitle: "Modern UI Development",
    desc: `With years of experience in frontend development, I’ve worked with various tools, libraries, and frameworks to build dynamic and responsive web applications. I specialize in React, Next.js, Tailwind CSS, and Material UI, leveraging them to develop scalable, performance-driven interfaces. I’m passionate about clean code, intuitive design, and creating smooth, user-focused digital experiences.`,
  },
  {
    type: "ExpressJs",
    icon: <ExpressJsIcon className="h-8 w-8 " />,
    title: "ExpressJS",
    subTitle: "Modern UI Development",
    desc: `I use React to build dynamic and interactive user interfaces with a component-driven architecture. I have experience managing state, optimizing rendering performance, and structuring scalable applications. I also apply best practices such as reusable components, hooks, and clean code patterns to ensure maintainability and efficiency.`,
  },
  {
    type: "RestApi",
    icon: <RestApiIcon className="h-8 w-8 " />,
    title: "RestAPI",
    subTitle: "Modern UI Development",
    desc: `I use Astro to build fast, content-focused websites with excellent performance. Its partial hydration approach allows me to deliver lightweight pages while still integrating modern frameworks like React when needed.`,
  },
  {
    type: "Authentication",
    icon: <AuthIcon className="h-8 w-8 " />,
    title: "Authentication",
    subTitle: "Modern UI Development",
    desc: `I have a strong foundation in JavaScript, allowing me to build dynamic and interactive web applications. I write clean, efficient logic and understand core concepts such as closures, async operations, and event handling, which helps me solve complex problems effectively.`,
  },
  {
    type: "Server",
    icon: <ServerIcon className="h-8 w-8 " />,
    title: "Server",
    subTitle: "Modern UI Development",
    desc: `I have experience using Bootstrap to quickly develop responsive layouts and UI components. It helps me prototype fast and deliver structured designs, especially for projects that require rapid development and consistency.`,
  },
  {
    type: "NestJS",
    icon: <NestJsIcon className="h-8 w-8 " />,
    title: "NestJS",
    subTitle: "Modern UI Development",
    desc: `I use TypeScript to write safer and more maintainable code by enforcing strong typing across applications. This helps reduce bugs, improve code readability, and enhance collaboration, especially in large-scale projects and API integrations.`,
  },
  {
    type: "GraphQL",
    icon: <GraphQlIcon className="h-8 w-8 " />,
    title: "GraphQL",
    subTitle: "Modern UI Development",
    desc: `I use TypeScript to write safer and more maintainable code by enforcing strong typing across applications. This helps reduce bugs, improve code readability, and enhance collaboration, especially in large-scale projects and API integrations.`,
  },
];

export default function BackEnd() {
  const [type, setType] = useState<string>("Backend");

  const selectedContent = useMemo(
    () => contents.find((item) => item.type === type),
    [type],
  );

  return (
    <div className="grid mt-16 mb-42 lg:grid-cols-2 gap-12 items-center">
      <SkillDescription selectedContent={selectedContent} />
      <BackendTech type={type} onClick={(type) => setType(type)} />
    </div>
  );
}
