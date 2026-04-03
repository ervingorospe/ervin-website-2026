"use client";

import CircleCheckIcon from "@/components/icons/CircleCheckIcon";

export default function Alert({
  message,
  type,
  onClose,
}: {
  message: string;
  type: string;
  onClose: () => void;
}) {
  if (type === "success") {
    return (
      <div className="border border-accent text-accent font-semibold px-4 py-2 rounded-2xl flex items-center justify-between">
        <div className="flex items-center space-x-2 ">
          <CircleCheckIcon className="h-4 w-4" />
          <span>{message}</span>
        </div>
        <button onClick={onClose} className="cursor-pointer">
          x
        </button>
      </div>
    );
  }

  if (type === "error") {
    return (
      <div className="border border-red-600 text-red-600 font-semibold px-4 py-2 rounded-2xl flex items-center justify-between">
        <div className="flex items-center space-x-2 ">
          <CircleCheckIcon className="h-4 w-4" />
          <span>{message}</span>
        </div>
        <button onClick={onClose} className="cursor-pointer">
          x
        </button>
      </div>
    );
  }

  return;
}
