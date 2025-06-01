import * as motion from "motion/react-client";

interface CardProps {
  content: string;
}

export default function Card({ content }: CardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.1,
        },
      }}
      whileTap={{ scale: 0.8 }}
      className=" bg-[var(--card)] text-[var(--foreground)] h-full rounded-4xl content-center justify-items-center font-bold hover:bg-[var(--card-hover-color)]"
      key={content}
    >
      <p>{content}</p>
    </motion.div>
  );
}
