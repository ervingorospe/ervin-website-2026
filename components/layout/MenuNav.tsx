"use client";

import { useState } from "react";
import BarIcon from "@/components/icons/BarIcon";
import { menu } from "./Navigation";
import Link from "next/link";
import Button from "@/components/Button";

export default function MenuNav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative block sm:hidden">
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="cursor-pointer"
      >
        <BarIcon className="h-6 w-auto" />
      </div>

      <div
        className={`absolute right-0 mt-2 w-[300px] bg-background border border-paper rounded-2xl transition-all duration-300 origin-top
        ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
      >
        <ul className="py-4">
          {menu?.map((menu) => (
            <li
              key={menu.label}
              className="px-4 py-4 cursor-pointer border-b border-paper last:border-none group hover:bg-paper hover:text-primary transition-all ease-in-out duration-300"
            >
              <Link href={menu.link} onClick={() => setIsOpen(false)}>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setIsOpen(false)}>
          <Button
            defaultClass="bg-accent text-background hover:text-foreground flex rounded-none rounded-b-2xl w-full"
            link="#contact"
            firstText={
              <>
                Contact
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                  >
                    <path
                      d="M13.7721 5.70592C14.076 5.31548 14.076 4.6814 13.7721 4.29096L10.6609 0.292831C10.357 -0.0976105 9.86362 -0.0976105 9.55979 0.292831C9.25596 0.683273 9.25596 1.31735 9.55979 1.70779L11.3439 4.00047H0.777812C0.347585 4.00047 0 4.44713 0 5C0 5.55287 0.347585 5.99953 0.777812 5.99953H11.3439L9.55979 8.29221C9.25596 8.68265 9.25596 9.31673 9.55979 9.70717C9.86362 10.0976 10.357 10.0976 10.6609 9.70717L13.7721 5.70904V5.70592Z"
                      fill="#4F8CFF"
                    />
                  </svg>
                </span>
              </>
            }
            secondText={
              <>
                Let’s go
                <span>😊</span>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
