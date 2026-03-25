"use client";

import { useMemo, useState } from "react";
import SkillDescription from "@/components/SkillDescription";

// ICONS
import DatabaseIcon from "@/components/icons/DatabaseIcon";
import MySQLIcon from "@/components/icons/MySQLIcon";
import PostgreSQLIcon from "@/components/icons/PostgreSQLIcon";
import MongoDBIcon from "@/components/icons/MongoDBIcon";
import FirebaseIcon from "@/components/icons/FirebaseIcon";
import SupabaseIcon from "@/components/icons/SupabaseIcon";

const contents = [
  {
    type: "Database",
    icon: <DatabaseIcon className="h-6 w-6" />,
    title: "Database",
    subTitle: "Modern UI Development",
    desc: `With years of experience in frontend development, I’ve worked with various tools, libraries, and frameworks to build dynamic and responsive web applications. I specialize in React, Next.js, Tailwind CSS, and Material UI, leveraging them to develop scalable, performance-driven interfaces. I’m passionate about clean code, intuitive design, and creating smooth, user-focused digital experiences.`,
  },
  {
    type: "MySQL",
    icon: <MySQLIcon className="h-6 w-6 " />,
    title: "MySQL",
    subTitle: "Modern UI Development",
    desc: `I use React to build dynamic and interactive user interfaces with a component-driven architecture. I have experience managing state, optimizing rendering performance, and structuring scalable applications. I also apply best practices such as reusable components, hooks, and clean code patterns to ensure maintainability and efficiency.`,
  },
  {
    type: "PostgreSQL",
    icon: <PostgreSQLIcon className="h-6 w-6 " />,
    title: "PostgreSQL",
    subTitle: "Modern UI Development",
    desc: `I use Astro to build fast, content-focused websites with excellent performance. Its partial hydration approach allows me to deliver lightweight pages while still integrating modern frameworks like React when needed.`,
  },
  {
    type: "MongoDB",
    icon: <MongoDBIcon className="h-6 w-6 " />,
    title: "MongoDB",
    subTitle: "Modern UI Development",
    desc: `I have a strong foundation in JavaScript, allowing me to build dynamic and interactive web applications. I write clean, efficient logic and understand core concepts such as closures, async operations, and event handling, which helps me solve complex problems effectively.`,
  },
  {
    type: "Firebase",
    icon: <FirebaseIcon className="h-6 w-6 " />,
    title: "Firebase",
    subTitle: "Modern UI Development",
    desc: `I have experience using Bootstrap to quickly develop responsive layouts and UI components. It helps me prototype fast and deliver structured designs, especially for projects that require rapid development and consistency.`,
  },
  {
    type: "Supabase",
    icon: <SupabaseIcon className="h-6 w-6 " />,
    title: "Supabase",
    subTitle: "Modern UI Development",
    desc: `I use TypeScript to write safer and more maintainable code by enforcing strong typing across applications. This helps reduce bugs, improve code readability, and enhance collaboration, especially in large-scale projects and API integrations.`,
  },
];

export default function Database() {
  const [type, setType] = useState<string>("Frontend");

  const selectedContent = useMemo(
    () => contents.find((item) => item.type === type),
    [type],
  );

  return (
    <div className="grid mt-16 lg:grid-cols-2 gap-8 items-center">
      <div className="grid gap-4">
        {contents?.map((content) => (
          <div
            className="border border-primary py-2 min-w-[270px] max-w-[400px] mx-auto text-primary cursor-pointer hover:bg-primary hover:text-paper transition-colors duration-700 ease-in-out"
            key={content.title}
            onClick={() => setType(content.type)}
          >
            <div className="flex justify-center items-center space-x-2">
              {content.icon}
              <div className="font-bold text-lg">{content.title}</div>
            </div>
          </div>
        ))}
      </div>
      <SkillDescription selectedContent={selectedContent} />
    </div>
  );
}
