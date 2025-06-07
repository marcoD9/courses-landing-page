import React from "react";
import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  backgroundText?: string;
  mainContent: string;
}

export default function ImageCard({
  imageUrl,
  backgroundText,
  mainContent,
}: ImageCardProps) {
  return (
    <div className="relative bg-[var(--card)] text-[var(--text-secondary] h-full rounded-4xl content-center justify-items-center font-bold hover:bg-[var(--card-hover-color)] transform transition-transform duration-300 hover:scale-108 overflow-hidden">
      {/* 1.Background Text */}
      {backgroundText && (
        <span
          className="
          absolute
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            text-6xl  text-[var(--text-secondary] 
            whitespace-nowrap         
            select-none pointer-events-none 
            z-10                        
          "
        >
          {backgroundText}
        </span>
      )}

      {/* 2. Image */}
      <div
        className="
  
    absolute z-20
    top-1/2            
    left-1/2          
    -translate-x-1/2  
    -translate-y-1/2   
    w-[50%]           
    aspect-square      
    flex items-center justify-center
      
  "
      >
        <Image
          src={imageUrl}
          alt="image"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      {/* 3. Content of the Card */}
      <div
        className="
          relative z-30               
          mt-44                        
          flex flex-col items-center justify-center
          space-y-2 px-4              
        "
      >
        <p className="text-xl font-semibold leading-tight">{mainContent}</p>
      </div>
    </div>
  );
}
