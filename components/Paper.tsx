"use client";

import React from "react";

export default function Paper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-paper/70 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}
