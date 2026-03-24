"use client";

export default function RingHoverButton({
  children,
  color = "primary",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="relative group inline-block">
      {children}

      <span
        className={`pointer-events-none absolute inset-0 rounded-full border border-${color} opacity-0 group-hover:opacity-40 group-hover:ripple animate-ping [animation-delay:400ms]`}
      ></span>
    </div>
  );
}
