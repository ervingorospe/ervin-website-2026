"use client";

import { useMemo, useState } from "react";
import Card from "@/components/Card";
import { motion, AnimatePresence } from "framer-motion";
import RadialTechLarge from "@/components/sections/RadialTechLarge";
import RadialTechSmall from "@/components/sections/RedialTechSmall";

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

type Content = {
  type: string;
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  desc: string;
};

const contents: Content[] = [
  {
    type: "Frontend",
    icon: <FrontEndIcon className="h-8 w-8" />,
    title: "Front-end",
    subTitle: "Modern UI Development",
    desc: `With years of experience in frontend development, I’ve worked with various tools, libraries, and frameworks to build dynamic and responsive web applications. I specialize in React, Next.js, Tailwind CSS, and Material UI, leveraging them to develop scalable, performance-driven interfaces. I’m passionate about clean code, intuitive design, and creating smooth, user-focused digital experiences.`,
  },
  {
    type: "React",
    icon: <ReactIcon className="h-8 w-8 " />,
    title: "React",
    subTitle: "Modern UI Development",
    desc: `I use React to build dynamic and interactive user interfaces with a component-driven architecture. I have experience managing state, optimizing rendering performance, and structuring scalable applications. I also apply best practices such as reusable components, hooks, and clean code patterns to ensure maintainability and efficiency.`,
  },
  {
    type: "Astro",
    icon: <AstroIcon className="h-8 w-8 " />,
    title: "Astro",
    subTitle: "Modern UI Development",
    desc: `I use Astro to build fast, content-focused websites with excellent performance. Its partial hydration approach allows me to deliver lightweight pages while still integrating modern frameworks like React when needed.`,
  },
  {
    type: "Javascript",
    icon: <JavascriptIcon className="h-8 w-8 " />,
    title: "Javascript",
    subTitle: "Modern UI Development",
    desc: `I have a strong foundation in JavaScript, allowing me to build dynamic and interactive web applications. I write clean, efficient logic and understand core concepts such as closures, async operations, and event handling, which helps me solve complex problems effectively.`,
  },
  {
    type: "Bootstrap",
    icon: <BootstrapIcon className="h-8 w-8 " />,
    title: "Bootstrap",
    subTitle: "Modern UI Development",
    desc: `I have experience using Bootstrap to quickly develop responsive layouts and UI components. It helps me prototype fast and deliver structured designs, especially for projects that require rapid development and consistency.`,
  },
  {
    type: "NextJs",
    icon: <NextJsIcon className="h-8 w-8 " />,
    title: "NextJs",
    subTitle: "Modern UI Development",
    desc: `I develop high-performance applications using Next.js, leveraging features like server-side rendering, static generation, and API routes. I focus on SEO optimization, fast load times, and scalable architecture, making it ideal for business websites and production-ready applications.`,
  },
  {
    type: "Typescript",
    icon: <TypescriptIcon className="h-8 w-8 " />,
    title: "Typescript",
    subTitle: "Modern UI Development",
    desc: `I use TypeScript to write safer and more maintainable code by enforcing strong typing across applications. This helps reduce bugs, improve code readability, and enhance collaboration, especially in large-scale projects and API integrations.`,
  },
  {
    type: "Tailwind",
    icon: <TailwindIcon className="h-8 w-8 " />,
    title: "Tailwind CSS",
    subTitle: "Modern UI Development",
    desc: `I use Tailwind CSS to rapidly build modern and responsive user interfaces with a utility-first approach. It allows me to maintain design consistency, speed up development, and create clean, scalable UI systems without writing excessive custom CSS.`,
  },
  {
    type: "Mui",
    icon: <MuiIcon className="h-8 w-8 " />,
    title: "Material UI",
    subTitle: "Modern UI Development",
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
    <div className="grid lg:grid-cols-2 gap-8 items-center">
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

      <div className="relative overflow-hidden sm:min-h-[350px] min-h-[550px] lg:min-h-[420px]">
        <AnimatePresence mode="wait">
          {selectedContent && (
            <motion.div
              key={selectedContent.type}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Card className="h-full ">
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-accent p-3 text-paper">
                    {selectedContent.icon}
                  </div>
                  <div>
                    <h3 className="text-heading text-xl font-bold">
                      {selectedContent.title}
                    </h3>
                    <h4 className="text-primary font-semibold">
                      {selectedContent.subTitle}
                    </h4>
                  </div>
                </div>

                <p className="mt-6">{selectedContent.desc}</p>

                <p className="italic absolute bottom-10">
                  *Click on the icons to explore
                </p>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
