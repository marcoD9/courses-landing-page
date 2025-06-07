import * as motion from "motion/react-client";

interface CardProps {
  content: string;
  image: string;
}

export default function Card({ content, image }: CardProps) {
  const imageUrl = `/${image}`;
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
      className=" bg-[var(--card)] text-[var(--text-secondary] h-full rounded-4xl content-center justify-items-center font-bold  overflow-hidden    bg-cover bg-center bg-no-repeat  hover:bg-[var(--card-hover-color)]"
      key={content}
      style={{ backgroundImage: `url('${imageUrl}` }}
    >
      <p>{content}</p>
    </motion.div>
  );
}
