import React from "react";

interface DescriptionCardProp {
  description: string;
}

export default function DescriptionCard({ description }: DescriptionCardProp) {
  return (
    <div className="relative bg-[var(--card)] text-[var(--text-secondary] h-full rounded-4xl content-center justify-items-center font-bold hover:bg-[var(--card-hover-color)] transform transition-transform duration-300 hover:scale-108 overflow-hidden">
      <div
        className="
            relative z-30               
            mt-44                        
            flex flex-col items-center justify-center
            space-y-2 px-4              
          "
      >
        <p className="text-xl font-semibold leading-tight">{description}</p>
      </div>
    </div>
  );
}
