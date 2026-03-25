"use client";

import Paper from "./Paper";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Paper className={`p-8 rounded-4xl border border-primary ${className}`}>
      {children}
    </Paper>
  );
}
