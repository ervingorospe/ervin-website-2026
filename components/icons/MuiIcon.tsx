"use client";

export default function MuiIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 35"
      className={className}
    >
      <g clipPath="url(#clip0_85_314)">
        <path
          d="M0 3.60937V18.7614L4.375 21.2887V11.1854L13.125 16.2385L21.875 11.1854V16.2385L13.125 21.2887V26.3404L21.875 31.3906L35 23.8146V13.7112L30.625 16.2385V21.2887L21.875 26.3404L17.5 23.8146L26.25 18.7614V3.60937L13.125 11.1854L0 3.60937ZM35 3.60937L30.625 6.13228V11.1854L35 8.65958V3.60937Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_85_314">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
