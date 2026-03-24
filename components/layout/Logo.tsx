"use client";

import { Black_Ops_One } from "next/font/google";

const blackOps = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

export default function Logo({ size = "text-4xl" }: { size?: string }) {
  return (
    <p
      className={`${blackOps.className} ${size} text-primary tracking-wide uppercase`}
    >
      ervin
    </p>
  );
}
