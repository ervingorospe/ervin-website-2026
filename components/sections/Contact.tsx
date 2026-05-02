"use client";

import Paper from "@/components/Paper";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import SocialMedias from "@/components/SocialMedias";
import ContactForm from "@/components/sections/ContactForm";
import { motion } from "framer-motion";
import AnimationContainer from "@/components/layout/AnimationContainer";
import { animateBtmToUp } from "@/animation/framer-motion";

export default function Contact() {
  return (
    <div className="app-container mt-14 md:mt-44" id="contact">
      <AnimationContainer className="grid md:grid-cols-2 gap-10 md:gap-24 items-start">
        <motion.div variants={animateBtmToUp}>
          <ContactForm />
        </motion.div>

        <motion.div variants={animateBtmToUp}>
          <Paper className="border p-6 border-primary rounded-4xl">
            <h4 className="text-heading font-bold text-2xl">
              Contact Information
            </h4>
            <p className="mt-4">
              Available for remote work globally, I collaborate with clients
              from different parts of the world, providing consistent
              communication, flexibility, and dependable results.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-md bg-primary">
                  <EnvelopeIcon className="h-4 w-4 text-paper" />
                </div>
                <span className="text-heading font-semibold">
                  ervingorospe123@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-md bg-primary">
                  <PhoneIcon className="h-4 w-4 text-paper" />
                </div>
                <span className="text-heading font-semibold">
                  +639304866849
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-md bg-primary">
                  <LocationIcon className="h-4 w-4 text-paper" />
                </div>
                <span className="text-heading font-semibold">
                  Manila, Philippines
                </span>
              </div>
              <div className="mt-8 flex space-x-4">
                <SocialMedias />
              </div>
            </div>
          </Paper>
        </motion.div>
      </AnimationContainer>
    </div>
  );
}
