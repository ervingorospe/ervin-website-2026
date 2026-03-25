"use client";

import Card from "@/components/Card";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillDescription({
  selectedContent,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedContent: any;
}) {
  return (
    <div className="relative overflow-hidden sm:min-h-[350px] min-h-[550px] lg:min-h-[420px]">
      <AnimatePresence mode="wait">
        {selectedContent && (
          <motion.div
            key={selectedContent.type}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Card className="h-full ">
              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-accent p-3 text-paper">
                  {selectedContent.icon}
                </div>
                <div>
                  <h3 className="text-heading text-xl font-bold">
                    {selectedContent.title}
                  </h3>
                  <h4 className="text-primary font-semibold">
                    {selectedContent.subTitle}
                  </h4>
                </div>
              </div>

              <p className="mt-6">{selectedContent.desc}</p>

              <p className="italic absolute bottom-10">
                *Click on the icons to explore
              </p>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
