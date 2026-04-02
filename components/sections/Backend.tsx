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
    subTitle: "Scalable Server-Side Architecture",
    desc: `I build secure and scalable backend systems using Node.js, Express, and RESTful APIs. I structure applications using service and repository patterns to ensure maintainability, clean architecture, and performance. I also handle authentication, API security, database design, and third-party integrations including payment systems and enterprise APIs.`,
  },
  {
    type: "NodeJs",
    icon: <NodeJsIcon className="h-8 w-8" />,
    title: "NodeJS",
    subTitle: "High-Performance JavaScript Runtime",
    desc: `I use Node.js to develop fast and efficient server-side applications. From building REST APIs to handling middleware, validation, and authentication, I ensure clean structure and optimized performance. I also integrate external services, manage async processes, and deploy production-ready backend systems.`,
  },
  {
    type: "ExpressJs",
    icon: <ExpressJsIcon className="h-8 w-8 " />,
    title: "ExpressJS",
    subTitle: "RESTful API Development",
    desc: `With Express.js, I create well-structured and secure RESTful APIs. I implement middleware handling, authentication (JWT, OAuth), error management, and route modularization. My focus is building maintainable API layers that integrate smoothly with frontend applications and third-party services.`,
  },
  {
    type: "RestApi",
    icon: <RestApiIcon className="h-8 w-8 " />,
    title: "RestAPI",
    subTitle: "Robust API Integration & Architecture",
    desc: `I design and consume RESTful APIs with proper validation, authentication, and structured JSON responses. I have experience deploying APIs in enterprise environments, integrating banking systems, configuring API gateways, and ensuring secure communication between services.`,
  },
  {
    type: "Authentication",
    icon: <AuthIcon className="h-8 w-8 " />,
    title: "Authentication",
    subTitle: "Secure Access Control Systems",
    desc: `I implement secure authentication systems using JWT, OAuth, and role-based access control. I have experience integrating Google authentication, managing protected routes, securing APIs, and handling user permissions to ensure data privacy and system integrity.`,
  },
  {
    type: "Server",
    icon: <ServerIcon className="h-8 w-8 " />,
    title: "Server",
    subTitle: "Server Deployment & Optimization",
    desc: `I manage server environments, configure API deployments, and optimize backend performance for production. I have experience deploying applications using cloud platforms, configuring environment variables, handling logging, and ensuring stability for live applications.`,
  },
  {
    type: "NestJS",
    icon: <NestJsIcon className="h-8 w-8 " />,
    title: "NestJS",
    subTitle: "Enterprise-Grade Backend Framework",
    desc: `I use NestJS to build structured and scalable backend applications using modular architecture and TypeScript. I apply dependency injection, clean code principles, and layered architecture to create maintainable systems suitable for enterprise-level applications.`,
  },
  {
    type: "GraphQL",
    icon: <GraphQlIcon className="h-8 w-8 " />,
    title: "GraphQL",
    subTitle: "Efficient Data Querying",
    desc: `I work with GraphQL to build flexible APIs that allow clients to request only the data they need. I implement schema design, resolvers, and secure data fetching strategies to improve performance and optimize frontend-backend communication.`,
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
