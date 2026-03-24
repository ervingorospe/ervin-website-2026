"use client";

export default function SectionHeader({
  heading,
  subHeading,
  dividerWidth,
}: {
  heading: string;
  subHeading?: string;
  dividerWidth: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-heading">
        {heading}
        <span
          className={`block h-[4px] ${dividerWidth} bg-primary mt-1 mx-auto`}
        ></span>
      </h2>
      {subHeading && <h3 className="mt-4">{subHeading}</h3>}
    </div>
  );
}
