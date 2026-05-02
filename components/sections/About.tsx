"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Timeline from "@/components/sections/Timeline";
import AnimationContainer from "@/components/layout/AnimationContainer";
import { animateBtmToUp } from "@/animation/framer-motion";

export default function About() {
  return (
    <div id="about">
      <AnimationContainer className="app-container pt-14 md:pt-24">
        <div className="text-center">
          <SectionHeader
            heading="About Me"
            subHeading="Passionate about turning ideas into fast, scalable, and impactful digital experiences."
            dividerWidth="w-[115px]"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-start mt-12">
          <motion.div variants={animateBtmToUp} className="col-span-2">
            <Card>
              <h4 className="text-heading text-xl font-semibold">
                I&lsquo;m a Full-stack Developer
              </h4>
              <h5 className="text-primary text-lg font-semibold">
                with 4+ years of experience
              </h5>
              <p className="mt-4 max-w-xl">
                Full-Stack Web Developer with experience in React, Next.js,
                Node.js, and database management. Skilled in building scalable
                applications, optimizing performance, and maintaining both
                client-facing interfaces and backend systems.
              </p>
              <p className="mt-4 max-w-xl">
                I help businesses build fast, scalable, and SEO-optimized web
                applications that drive growth and deliver real results. With
                experience in both front-end and back-end development, I create
                reliable digital solutions tailored to modern business needs.
              </p>
              <div className="mt-6 grid gap-4">
                <div className="flex items-center space-x-2">
                  <div className="rounded-lg bg-accent p-3">
                    <svg
                      className="h-8 w-8 text-paper"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-heading font-semibold">Education</div>
                    <div>Bachelor of Science in Information Technology</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="rounded-lg bg-primary p-3">
                    <svg
                      className="h-8 w-8 text-paper"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-heading font-semibold">Location</div>
                    <div>Manila, Philippines</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={animateBtmToUp}
            className="col-span-2 lg:col-span-1"
          >
            <Card>
              <div className="flex items-center space-x-2">
                <svg
                  className="h-7 w-auto text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"
                  />
                </svg>
                <div className="text-heading text-xl font-semibold">
                  Work Experience
                </div>
              </div>

              <div className="mt-6">
                <Timeline />
              </div>

              <div className="mt-12 mb-4">Want to know more about my work?</div>
              <Button
                defaultClass="bg-primary"
                hoverClass="bg-[#3A73E6]"
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
                      >
                        <path
                          d="M13.7721 5.70592C14.076 5.31548 14.076 4.6814 13.7721 4.29096L10.6609 0.292831C10.357 -0.0976105 9.86362 -0.0976105 9.55979 0.292831C9.25596 0.683273 9.25596 1.31735 9.55979 1.70779L11.3439 4.00047H0.777812C0.347585 4.00047 0 4.44713 0 5C0 5.55287 0.347585 5.99953 0.777812 5.99953H11.3439L9.55979 8.29221C9.25596 8.68265 9.25596 9.31673 9.55979 9.70717C9.86362 10.0976 10.357 10.0976 10.6609 9.70717L13.7721 5.70904V5.70592Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </>
                }
                secondText={
                  <>
                    Do it
                    <span>😊</span>
                  </>
                }
              />
            </Card>
          </motion.div>
        </div>
      </AnimationContainer>
    </div>
  );
}
