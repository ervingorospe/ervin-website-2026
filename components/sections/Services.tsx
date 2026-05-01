"use client";

import SectionHeader from "@/components/SectionHeader";
import Paper from "@/components/Paper";
import StackIcon from "@/components/icons/StackIcon";
import CircleCheckIcon from "@/components/icons/CircleCheckIcon";
import FrontEndIcon from "@/components/icons/FrontEnd";
import CodeIcon from "@/components/icons/CodeIcon";

const services = [
  {
    service: "Full-stack Development",
    icon: <StackIcon className="h-6 w-6 text-primary" />,
    desc: "I provide end-to-end full-stack web development services, building scalable, high-performance applications tailored to your business needs.",
    checkList: [
      "Build complete web applications from frontend to backend.",
      "Backend API development & integration.",
      "Database design & management.",
      "Performance optimization & maintenance.",
    ],
  },
  {
    service: "Front-end Development",
    icon: <FrontEndIcon className="h-6 w-6 text-primary" />,
    desc: "Building responsive, high-performance user interfaces using modern technologies like React and Next.js, focused on clean design and seamless user experience.",
    checkList: [
      "Responsive UI development.",
      "React & Next.js applications.",
      "Clean and scalable component design.",
      "Performance and UX optimization.",
    ],
  },
  {
    service: "Back-end Development",
    icon: <CodeIcon className="h-6 w-6 text-primary" />,
    desc: "Building secure, scalable backend systems and RESTful APIs using Node.js, Express, and NestJS, focused on performance, clean architecture, and reliability.",
    checkList: [
      "RESTful API development.",
      "Authentication & middleware.",
      "Scalable backend architecture.",
      "Performance & security optimization.",
    ],
  },
];

export default function Services() {
  return (
    <div className="app-container mt-14 md:mt-44" id="services">
      <div className="text-center">
        <SectionHeader
          heading="My Services"
          subHeading="What I can help you build for your business"
          dividerWidth="w-[115px]"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {services?.map((list) => (
          <Paper
            key={list.service}
            className="p-6 border border-primary rounded-4xl"
          >
            <div className="flex items-center space-x-2">
              {list.icon}
              <h4 className="text-heading font-semibold text-lg">
                {list.service}
              </h4>
            </div>
            <p className="mt-6">{list.desc}</p>
            <div className="grid gap-4 mt-6">
              {list.checkList?.map((items, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CircleCheckIcon className="h-3 w-3 text-accent shrink-0" />
                  <p className="text-heading font-semibold">{items}</p>
                </div>
              ))}
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
}
