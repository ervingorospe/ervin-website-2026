"use client";

import Link from "next/link";

export default function Button({
  firstText,
  secondText,
  padding = "px-7 py-2",
  link,
  defaultClass = "bg-accent text-background hover:text-foreground",
  hoverClass = "bg-primary",
  target = "",
  type = "link",
  disabled,
}: {
  firstText: React.ReactNode;
  secondText: React.ReactNode;
  padding?: string;
  link?: string;
  defaultClass?: string;
  hoverClass?: string;
  target?: string;
  type?: string;
  disabled?: boolean;
}) {
  if (type === "link" && link) {
    return (
      <Link
        href={link}
        target={target}
        className={`group relative overflow-hidden inline-flex items-center justify-center ${defaultClass} rounded-4xl font-bold`}
      >
        {/* 👇 Invisible layout spacer */}
        <span className={`flex items-center gap-2 ${padding} opacity-0`}>
          {firstText}
        </span>

        {/* Background */}
        <span
          className={`absolute inset-0 ${hoverClass} -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]`}
        ></span>

        {/* DEFAULT TEXT */}
        <div
          className="
      absolute inset-0 flex items-center justify-center gap-2
      translate-x-0 opacity-100
      group-hover:translate-x-full group-hover:opacity-0
      transition-all duration-500
      ease-[cubic-bezier(0.65,0,0.35,1)]
      z-10
    "
        >
          {firstText}
        </div>

        <div
          className="
      absolute inset-0 flex items-center justify-center gap-1 
      -translate-x-full opacity-0 
      group-hover:translate-x-0 group-hover:opacity-100 
      transition-all duration-500 delay-100
      ease-[cubic-bezier(0.65,0,0.35,1)]
      z-10
    "
        >
          {secondText}
        </div>
      </Link>
    );
  }

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`cursor-pointer group relative overflow-hidden inline-flex items-center justify-center ${defaultClass} rounded-4xl font-bold`}
    >
      {/* 👇 Invisible layout spacer */}
      <span className={`flex items-center gap-2 ${padding} opacity-0`}>
        {firstText}
      </span>

      {/* Background */}
      <span
        className={`absolute inset-0 ${hoverClass} -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]`}
      ></span>

      {/* DEFAULT TEXT */}
      <div
        className="
      absolute inset-0 flex items-center justify-center gap-2
      translate-x-0 opacity-100
      group-hover:translate-x-full group-hover:opacity-0
      transition-all duration-500
      ease-[cubic-bezier(0.65,0,0.35,1)]
      z-10
    "
      >
        {firstText}
      </div>

      <div
        className="
      absolute inset-0 flex items-center justify-center gap-1 
      -translate-x-full opacity-0 
      group-hover:translate-x-0 group-hover:opacity-100 
      transition-all duration-500 delay-100
      ease-[cubic-bezier(0.65,0,0.35,1)]
      z-10
    "
      >
        {secondText}
      </div>
    </button>
  );
}
