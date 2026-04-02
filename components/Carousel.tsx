"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import BrithHill from "@/assets/images/brithill.png";
import Cajun from "@/assets/images/cajun_seafood.png";
import GLBC from "@/assets/images/glbc.png";
import Cochran from "@/assets/images/cochran_firm.png";
import RJH from "@/assets/images/rjh_consulting.png";
import IronBloom from "@/assets/images/ironbloom.png";
import SC from "@/assets/images/stategic_communications.png";

const projects = [
  {
    id: 1,
    title: "RJH Consulting",
    image: RJH,
    link: "https://rjh-consulting-1366-git-main-modiphy.vercel.app/",
  },
  {
    id: 2,
    title: "The Cochran Firm",
    image: Cochran,
    link: "https://cochran-firm-1332.vercel.app/",
  },
  {
    id: 3,
    title: "Britt Hill",
    image: BrithHill,
    link: "https://britt-hill-1334-git-main-modiphy.vercel.app/",
  },
  {
    id: 4,
    title: "Cajun Seafood",
    image: Cajun,
    link: "https://cajun-seafood-1355-git-main-modiphy.vercel.app/",
  },
  { id: 5, title: "GLBC", image: GLBC, link: "https://glbc-1367.vercel.app/" },
  {
    id: 6,
    title: "Strategic Communications",
    image: SC,
    link: "https://scbhuey-1234.vercel.app/",
  },
  {
    id: 7,
    title: "Ironbloom",
    image: IronBloom,
    link: "https://ironbloommarketing.com/",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Group projects dynamically
  const slides = useMemo(() => {
    const grouped = [];
    const itemsPerSlide = isMobile ? 1 : 2;

    for (let i = 0; i < projects.length; i += itemsPerSlide) {
      const chunk = projects.slice(i, i + itemsPerSlide);

      // Only add placeholder on desktop (2 layout)
      if (!isMobile && chunk.length === 1) {
        chunk.push({
          id: -1,
          title: "Coming Soon",
          image: SC,
          link: "",
        });
      }

      grouped.push(chunk);
    }

    return grouped;
  }, [isMobile]);

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full flex gap-8 px-6">
              {slide.map((project) => (
                <div
                  key={project.id}
                  className="flex-1 bg-paper border border-primary rounded-4xl p-8"
                >
                  {project.id !== -1 ? (
                    <>
                      <div className="overflow-hidden h-48 mb-6 rounded-2xl ">
                        <Image
                          src={project.image}
                          width={500}
                          height={500}
                          loading="lazy"
                          alt={project.title}
                          className="h-full object-cover object-top  transition-transform duration-700 ease-in-out hover:scale-125"
                        />
                      </div>

                      <div className="grid gap-2 sm:flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-heading">
                          {project.title}
                        </h3>
                        <Button
                          padding="py-2 px-10"
                          link={project.link}
                          target="_blank"
                          firstText={
                            <>
                              view
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="h-4 w-4 text-primary"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M290.4 19.8C295.4 7.8 307.1 0 320 0L480 0c17.7 0 32 14.3 32 32l0 160c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9L400 157.3 246.6 310.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L354.7 112 297.4 54.6c-9.2-9.2-11.9-22.9-6.9-34.9zM0 176c0-44.2 35.8-80 80-80l80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-80 0c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 176z"
                                  />
                                </svg>
                              </span>
                            </>
                          }
                          secondText={
                            <>
                              see it
                              <span>😊</span>
                            </>
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full min-h-[250px] text-muted italic">
                      Coming Soon
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="cursor-pointer absolute -left-10 top-[40%] rounded-full bg-primary p-3 text-paper hover:bg-paper hover:text-primary transition-colors duration-700 ease-in-out"
      >
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>
      </button>

      {/* Arrows */}
      <button
        onClick={next}
        className="cursor-pointer absolute -right-10 top-[40%] rounded-full bg-primary p-3 text-paper hover:bg-paper hover:text-primary transition-colors duration-700 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
          className="h-4 w-4"
        >
          <path
            fill="currentColor"
            d="M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer h-3 w-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-primary scale-125" : "bg-paper"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
