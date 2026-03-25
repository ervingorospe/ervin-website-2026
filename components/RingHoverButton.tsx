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
        className={`pointer-events-none absolute inset-0 rounded-full border border-${color} opacity-40 ripple animate-ping [animation-delay:400ms]`}
      ></span>
    </div>
  );
}
