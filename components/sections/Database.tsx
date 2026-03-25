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
    subTitle: "Data Management & System Design",
    desc: `I design and manage structured and scalable databases to support modern web applications. I have experience working with both SQL and NoSQL databases, ensuring efficient data handling, optimized queries, and secure storage. My focus is on reliability, performance, and seamless integration with backend services and APIs.`,
  },
  {
    type: "MySQL",
    icon: <MySQLIcon className="h-6 w-6" />,
    title: "MySQL",
    subTitle: "Relational Database Management",
    desc: `I use MySQL to design structured relational databases with optimized queries and efficient data relationships. I have experience creating schemas, handling joins, indexing, and ensuring data integrity for scalable applications.`,
  },
  {
    type: "PostgreSQL",
    icon: <PostgreSQLIcon className="h-6 w-6" />,
    title: "PostgreSQL",
    subTitle: "Advanced SQL & Scalable Data Systems",
    desc: `I work with PostgreSQL for building robust and scalable database solutions. I utilize its advanced features such as complex queries, indexing, and performance optimization to handle large datasets and ensure high reliability in production environments.`,
  },
  {
    type: "MongoDB",
    icon: <MongoDBIcon className="h-6 w-6" />,
    title: "MongoDB",
    subTitle: "Flexible NoSQL Data Modeling",
    desc: `I use MongoDB for flexible and scalable NoSQL database solutions. It allows me to handle dynamic data structures, build fast APIs, and manage large volumes of unstructured data efficiently.`,
  },
  {
    type: "Firebase",
    icon: <FirebaseIcon className="h-6 w-6" />,
    title: "Firebase",
    subTitle: "Realtime Backend & Cloud Services",
    desc: `I use Firebase to quickly build and deploy applications with real-time databases, authentication, and cloud services. It helps me create fast, scalable solutions without managing complex backend infrastructure.`,
  },
  {
    type: "Supabase",
    icon: <SupabaseIcon className="h-6 w-6" />,
    title: "Supabase",
    subTitle: "Open-Source Backend & Realtime APIs",
    desc: `I use Supabase as a modern backend solution with PostgreSQL, providing authentication, real-time subscriptions, and API integration. It enables me to rapidly develop full-stack applications with a scalable and developer-friendly workflow.`,
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
            className={`border ${content.title === selectedContent?.title ? "bg-primary text-paper" : "bg-transparent text-primary"} border-primary py-2 min-w-[270px] max-w-[400px] mx-auto  cursor-pointer hover:bg-primary hover:text-paper transition-colors duration-700 ease-in-out`}
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
