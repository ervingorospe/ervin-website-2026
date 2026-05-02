"use client";

import BgWebsite from "@/assets/images/bg-website.png";
import ErvinImage from "@/assets/images/ervin.png";
import Image from "next/image";
import Button from "@/components/Button";
import SocialMedias from "@/components/SocialMedias";

import { motion } from "framer-motion";
import AnimationContainer from "@/components/layout/AnimationContainer";
import { animateBtmToUp } from "@/animation/framer-motion";
import { a } from "framer-motion/client";

export default function Hero() {
  return (
    <AnimationContainer className="relative h-140 w-full">
      <div className="absolute inset-0 z-0">
        <Image
          className="h-full w-full blur-[3px]"
          src={BgWebsite}
          height={500}
          width={500}
          loading="eager"
          alt="bg-website"
        />
      </div>

      <div className="absolute bottom-0 right-[2%] lg:right-[20%]">
        <Image
          className="h-auto w-[25rem]"
          src={ErvinImage}
          height={500}
          width={500}
          loading="eager"
          alt="bg-website"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-background to-transparent"></div>

      <div className="app-container relative grid gap-4 md:flex h-full items-center justify-between">
        <div className="grid gap-5 mt-16 md:mt-0">
          <div className="grid gap-2">
            <motion.h1
              variants={animateBtmToUp}
              className="text-heading text-4xl md:text-5xl font-black "
            >
              Hi, I&lsquo;m Ervin
            </motion.h1>
            <motion.h2
              variants={animateBtmToUp}
              className="text-accent text-xl md:text-2xl font-bold"
            >
              Full-stack Developer
            </motion.h2>
          </div>
          <motion.div variants={animateBtmToUp} className="flex md:hidden">
            <div className="flex gap-3">
              <SocialMedias />
            </div>
          </motion.div>
          <motion.p
            variants={animateBtmToUp}
            className="prose max-w-lg text-lg font-normal"
          >
            I am a Full-Stack Developer specializing in React, Next.js, and
            Node.js—building seamless and scalable web applications.
          </motion.p>
          <motion.h3
            variants={animateBtmToUp}
            className="text-primary text-xl md:text-2xl font-bold"
          >
            4+ years of experience
          </motion.h3>
          <motion.div variants={animateBtmToUp} className="flex">
            <Button
              defaultClass="md:text-xl bg-accent text-background hover:text-foreground"
              hoverClass="text-background bg-primary"
              padding="px-10 py-2 md:py-4"
              link="#contact"
              firstText={
                <>
                  Hire Me!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_36_13)">
                      <path
                        d="M16.7625 -0.821872C17.0688 -0.931247 17.4063 -0.853122 17.6375 -0.624997C17.8688 -0.396872 17.9438 -0.0562467 17.8344 0.250003L12.2719 15.7781C12.1156 16.2125 11.7063 16.5 11.2469 16.5C10.8031 16.5 10.4031 16.2313 10.2375 15.8219L8.23126 10.8844C8.09064 10.5406 8.15314 10.1469 8.39376 9.86563L11.3469 6.35313C11.5063 6.1625 11.4938 5.88438 11.3188 5.70938C11.1438 5.53438 10.8625 5.52188 10.675 5.68125L7.16251 8.62813C6.87814 8.86563 6.48751 8.92813 6.14376 8.79063L1.19064 6.775C0.781262 6.60938 0.512512 6.20938 0.512512 5.76563C0.512512 5.30625 0.800012 4.89688 1.23439 4.74063L16.7625 -0.821872Z"
                        fill="#4F8CFF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_36_13">
                        <rect width="18" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </>
              }
              secondText={
                <>
                  Nice Idea
                  <span>👍</span>
                </>
              }
            />
          </motion.div>
        </div>
        <motion.div variants={animateBtmToUp} className="hidden md:grid gap-6">
          <SocialMedias />
        </motion.div>
      </div>
    </AnimationContainer>
  );
}
