"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle() {
  const imagePath = "/background.png";
  const sectionVariants = {
    initial: { opacity: 0, y: 50 }, // Starts invisible, moved 100px down
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    }, // Fades in and moves up
  };

  return (
    <>
      <motion.div
        className="relative h-[40vh] sm:h-[60vh] md:h-[80vh] xl:h-[100vh] bg-[var(--body)] overflow-hidden"
        variants={sectionVariants} // Apply the defined section animation variants
        initial="initial" // Set the initial state
        whileInView="whileInView" // Animate to this state when the element enters the viewport
        viewport={{ once: false }} // 'false' means animations will re-trigger every time the element enters/leaves view.
        // Set to 'true' if you only want the entry animation to play once.
      >
        {/*Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: `url('${imagePath}')` }}
        ></div>{" "}
        {/*Title Container */}
        <div className="bg-[var(--text-primary)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  opacity-50 z-20 flex items-center justify-center">
          {/*
          - absolute: Positions the element relative to its nearest positioned ancestor (the motion.div).
          - top-1/2 left-1/2: Moves the top-left corner of the div to the center of the parent.
          - -translate-x-1/2 -translate-y-1/2: Shifts the div back by half its own width and height, perfectly centering it.  
        */}

          {/* Title Text */}
          <div
            className="flex flex-col items-start w-full justify-start px-4
            /* padding */
            py-8
            sm:py-12
            md:py-16
            lg:py-24
          "
          >
            <h2 className="title-secondary">Explore our courses</h2>
            <h3 className="title-tertiary">
              Elevate your cooking skills from <em>beginner</em> to{" "}
              <em>gourmet</em>. Our online courses provide step-by-step
              guidance, delicious recipes, and pro tips to{" "}
              <strong>master</strong> the kitchen with confidence.
            </h3>
          </div>
        </div>
      </motion.div>
    </>
  );
}
