import React from "react";
import Image from "next/image";
interface DescriptionCardProp {
  description: string;
  imageUrl?: string; // Optional imageUrl prop
}

export default function DescriptionCard({
  description,
  imageUrl,
}: DescriptionCardProp) {
  return (
    <div
      className="relative bg-[var(--card)] text-[var(--text-secondary)] h-full rounded-4xl
                 content-center justify-items-center font-bold
                 hover:bg-[var(--card-hover-color)]
                 transform transition-transform duration-300 hover:scale-110
                 hover:z-100 overflow-hidden group"
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Background image for card"
          fill // Make the image fill the parent container
          style={{ objectFit: "cover", zIndex: 0 }} // Image covers and is behind content
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 25vw"
        />
      )}

      {/* Overlay to ensure text readability over the image */}
      {imageUrl && (
        <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-4xl group-hover:opacity-10"></div>
      )}
      {/* The description text */}
      <p
        className="text-[var(--text-primary)]
    relative z-20
    text-xl sm:text-2xl lg:text-3xl
    font-extrabold
    text-center leading-relaxed
drop-shadow-lg
     [text-shadow:_15px_15px_10px_rgba(0,0,0,0.7)]"
      >
        {description}
      </p>
    </div>
  );
}
