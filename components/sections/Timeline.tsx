"use client";

const data = [
  {
    date: "May 2025 - October 2025",
    role: "Mid React Developer",
  },
  {
    date: "July 2022 - March 2025",
    role: "NextJS Developer",
  },
  {
    date: "March 2022 - July 2022",
    role: "Full-stack Developer",
  },
  {
    date: "September 2022 - February 2023",
    role: "API Gateway Developer",
  },
  {
    date: "June 2021 - December 2022",
    role: "Web Developer",
  },
];

export default function Timeline() {
  return (
    <div className="relative pl-6">
      {/* Vertical line */}
      <div className="absolute left-2 top-2 h-[87%] w-[2px] bg-primary"></div>

      {data.map((item, index) => (
        <div key={index} className="relative mb-8">
          {/* Dot */}
          <span className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-primary"></span>

          {/* Content */}
          <p className="text-primary font-semibold">{item.date}</p>
          <p className="text-gray-300">{item.role}</p>
        </div>
      ))}
    </div>
  );
}
