"use client";
import ContactCard from "./ui/ContactCard";
import DescriptionCard from "./ui/DescriptionCard";
import ImageCard from "./ui/ImageCard";
import { motion } from "framer-motion";

export default function Section() {
  // Define animation variants for better organization, reusability, and readability.
  // Each variant object specifies 'initial' (start state), 'whileInView' (when visible)

  // Variants for the main section containers
  const sectionVariants = {
    initial: { opacity: 0, y: 100 }, // Starts invisible, moved 100px down
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    }, // Fades in and moves up
  };

  // Variants for the ImageCard components
  const imageCardVariants = {
    initial: { opacity: 0, x: -100 }, // Starts invisible, moved 100px to the left
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    }, // Fades in and moves right
  };

  // Variants for the DescriptionCard components
  const descriptionCardVariants = {
    initial: { opacity: 0, y: 100 }, // Starts invisible, moved 100px down
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    }, // Fades in, moves up, with a slight delay
  };

  // Variants for the ContactCard components
  const contactCardVariants = {
    initial: { opacity: 0, x: 100 }, // Starts invisible, moved 100px to the right
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    }, // Fades in and moves left, with a slight delay
  };

  return (
    <>
      {/* Section 1 */}
      <motion.div
        className="section" // Existing CSS class for the section layout
        variants={sectionVariants} // Apply the defined section animation variants
        initial="initial" // Set the initial state
        whileInView="whileInView" // Animate to this state when the element enters the viewport
        viewport={{ once: false }} // 'false' means animations will re-trigger every time the element enters/leaves view.
        // Set to 'true' if you only want the entry animation to play once.
      >
        <motion.div
          className="col-span-2 row-span-4" // Tailwind CSS grid classes
          variants={imageCardVariants} // Apply image card animation variants
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <ImageCard imageUrl="/cake.png" backgroundText="CAKES" />
        </motion.div>
        <motion.div
          className="col-span-2 row-span-3"
          variants={descriptionCardVariants} // Apply description card animation variants
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <DescriptionCard
            imageUrl="/pastry-bg.jpeg"
            description="Unlock your inner baker"
          />
        </motion.div>
        <motion.div
          className="col-span-2 row-span-1"
          variants={contactCardVariants} // Apply contact card animation variants
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <ContactCard contact="cake@email.com" />
        </motion.div>
      </motion.div>

      {/* --- */}

      {/* Section 2 */}
      <motion.div
        className="section"
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false }}
      >
        <motion.div
          className="col-span-2 row-span-4"
          variants={imageCardVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <ImageCard imageUrl="/pizza.png" backgroundText="PIZZA" />
        </motion.div>
        <motion.div
          className="col-span-2 row-span-1"
          variants={contactCardVariants} // Reusing contact card variants here
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <ContactCard contact="pizza@email.com" />
        </motion.div>
        <motion.div
          className="col-span-2 row-span-3"
          variants={descriptionCardVariants} // Reusing description card variants here
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <DescriptionCard
            imageUrl="/pizza-bg.png"
            description="Become a pizza maestro"
          />
        </motion.div>
      </motion.div>

      {/* --- */}

      {/* Section 3 */}
      <motion.div
        className="section"
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false }}
      >
        <motion.div
          className="col-start-1 col-end-3 row-start-1 row-end-4"
          variants={descriptionCardVariants} // Reusing description card variants here
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <DescriptionCard
            imageUrl="/bartender-bg.jpeg"
            description="Shake, stir, & muddle"
          />
        </motion.div>
        <motion.div
          className="col-start-1 col-end-3 row-start-4 row-end-5"
          variants={contactCardVariants} // Reusing contact card variants here
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <ContactCard contact="drink@email.com" />
        </motion.div>
        <motion.div
          className="col-start-3 col-end-5 row-span-4"
          variants={imageCardVariants} // Reusing image card variants here
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <ImageCard imageUrl="/cocktail.png" backgroundText="DRINKS" />
        </motion.div>
      </motion.div>
    </>
  );
}
