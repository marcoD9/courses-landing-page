import React from "react";
import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  backgroundText: string;
}

export default function ImageCard({
  imageUrl,
  backgroundText,
}: ImageCardProps) {
  return (
    <div className="relative bg-[var(--card)] text-[var(--text-secondary] h-full rounded-4xl content-center justify-items-center font-bold hover:bg-[var(--card-hover-color)] transform transition-transform duration-300 hover:scale-110 hover:z-100 z-10 overflow-hidden">
      {/* 1.Background Text */}
      {backgroundText && (
        <span
          className="absolute
    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    text-7xl
    sm:text-8xl
    md:text-[10rem]
    lg:text-[15rem]
    xl:text-[20rem]
    -rotate-3
    text-[var(--text-secondary)] opacity-30 drop-shadow-lg
    whitespace-nowrap select-none pointer-events-none
    z-10
    transition-opacity duration-300 group-hover:opacity-10
     [text-shadow:_25px_25px_10px_rgba(0,0,0,1)]"
        >
          {backgroundText}
        </span>
      )}

      {/* 2. Image */}

      <div
        className="
          absolute z-20 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[50%] aspect-square 
          min-w-[150px] min-h-[150px] 
          md:min-w-[250px] 
          flex items-center justify-center 
        "
      >
        <Image
          src={imageUrl}
          alt="image"
          fill
          style={{ objectFit: "cover" }}
          priority
          // For small screens (up to 640px), 50vw.
          // For medium screens (up to 1024px), 30vw.
          // For larger screens (above 1024px), 20vw.
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 20vw"
        />
      </div>
    </div>
  );
}
