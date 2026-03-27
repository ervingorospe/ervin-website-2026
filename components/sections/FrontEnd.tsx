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
    type: "Frontend",
    icon: <FrontEndIcon className="h-8 w-8" />,
    title: "Front-end",
    subTitle: "Modern UI Development.",
    desc: `With years of experience in frontend development, I’ve worked with various tools, libraries, and frameworks to build dynamic and responsive web applications. I specialize in React, Next.js, Tailwind CSS, and Material UI, leveraging them to develop scalable, performance-driven interfaces. I’m passionate about clean code, intuitive design, and creating smooth, user-focused digital experiences.`,
  },
  {
    type: "React",
    icon: <ReactIcon className="h-8 w-8 " />,
    title: "React",
    subTitle: "Building dynamic UIs with reusable components.",
    desc: `I use React to build dynamic and interactive user interfaces with a component-driven architecture. I have experience managing state, optimizing rendering performance, and structuring scalable applications. I also apply best practices such as reusable components, hooks, and clean code patterns to ensure maintainability and efficiency.`,
  },
  {
    type: "Astro",
    icon: <AstroIcon className="h-8 w-8 " />,
    title: "Astro",
    subTitle: "Ultra-fast websites with modern performance architecture.",
    desc: `I use Astro to build fast, content-focused websites with excellent performance. Its partial hydration approach allows me to deliver lightweight pages while still integrating modern frameworks like React when needed.`,
  },
  {
    type: "Javascript",
    icon: <JavascriptIcon className="h-8 w-8 " />,
    title: "Javascript",
    subTitle: "Optimized, SEO-friendly, and production-ready apps.",
    desc: `I have a strong foundation in JavaScript, allowing me to build dynamic and interactive web applications. I write clean, efficient logic and understand core concepts such as closures, async operations, and event handling, which helps me solve complex problems effectively.`,
  },
  {
    type: "Bootstrap",
    icon: <BootstrapIcon className="h-8 w-8 " />,
    title: "Bootstrap",
    subTitle: "Responsive layouts built for speed and reliability.",
    desc: `I have experience using Bootstrap to quickly develop responsive layouts and UI components. It helps me prototype fast and deliver structured designs, especially for projects that require rapid development and consistency.`,
  },
  {
    type: "NextJs",
    icon: <NextJsIcon className="h-8 w-8 " />,
    title: "NextJs",
    subTitle: "Building dynamic UIs with reusable components.",
    desc: `I develop high-performance applications using Next.js, leveraging features like server-side rendering, static generation, and API routes. I focus on SEO optimization, fast load times, and scalable architecture, making it ideal for business websites and production-ready applications.`,
  },
  {
    type: "Typescript",
    icon: <TypescriptIcon className="h-8 w-8 " />,
    title: "Typescript",
    subTitle: "Powering interactive and intelligent web experiences.",
    desc: `I use TypeScript to write safer and more maintainable code by enforcing strong typing across applications. This helps reduce bugs, improve code readability, and enhance collaboration, especially in large-scale projects and API integrations.`,
  },
  {
    type: "Tailwind",
    icon: <TailwindIcon className="h-8 w-8 " />,
    title: "Tailwind CSS",
    subTitle: "Rapid UI development with clean and consistent design.",
    desc: `I use Tailwind CSS to rapidly build modern and responsive user interfaces with a utility-first approach. It allows me to maintain design consistency, speed up development, and create clean, scalable UI systems without writing excessive custom CSS.`,
  },
  {
    type: "Mui",
    icon: <MuiIcon className="h-8 w-8 " />,
    title: "Material UI",
    subTitle: "Polished interfaces with scalable component systems.",
    desc: `I use Tailwind CSS to rapidly build modern and responsive user interfaces with a utility-first approach. It allows me to maintain design consistency, speed up development, and create clean, scalable UI systems without writing excessive custom CSS.`,
  },
];

export default function FrontEnd() {
  const [type, setType] = useState<string>("Frontend");

  const selectedContent = useMemo(
    () => contents.find((item) => item.type === type),
    [type],
  );

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="flex items-center justify-center sm:min-h-[750px] lg:min-h-[520px] xl:min-h-[750px]">
        <RadialTechLarge
          type={type}
          onClick={(type: string) => setType(type)}
        />
        <RadialTechSmall
          type={type}
          onClick={(type: string) => setType(type)}
        />
      </div>

      <div className="-mt-16 sm:-mt-24 lg:mt-0">
        <SkillDescription selectedContent={selectedContent} />
      </div>
    </div>
  );
}
