"use client";

import React from "react";
import RingHoverButton from "@/components/RingHoverButton";

const Node = React.memo(function Node({
  className,
  label,
  onClick,
  type,
  selectedType,
}: {
  className: string;
  label: React.ReactNode;
  onClick: (label: string) => void;
  type: string;
  selectedType: string;
}) {
  return (
    <div
      onClick={() => onClick(type)}
      className={`absolute cursor-pointer z-20 ${className}`}
    >
      {selectedType === type ? (
        <RingHoverButton>
          <div className="p-3 rounded-full border border-primary flex items-center justify-center text-primary bg-background hover:bg-primary hover:text-paper transition-colors duration-700 ease-in-out">
            {label}
          </div>
        </RingHoverButton>
      ) : (
        <div className="p-3 rounded-full border border-primary flex items-center justify-center text-primary bg-background hover:bg-primary hover:text-paper transition-colors duration-700 ease-in-out">
          {label}
        </div>
      )}
    </div>
  );
});

export default Node;
