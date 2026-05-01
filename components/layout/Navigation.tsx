"use client";

import Link from "next/link";

export const menu = [
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Skills",
    link: "#skills",
  },
  {
    label: "Projects",
    link: "#projects",
  },
  {
    label: "Services",
    link: "#services",
  },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-8">
        {menu?.map((menu) => (
          <li key={menu.label}>
            <Link
              href={menu.link}
              className="hover:text-primary transition-all ease-in-out duration-300"
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
