import React from "react";

interface ContactCardProp {
  contact: string;
}

export default function ContactCard({ contact }: ContactCardProp) {
  return (
    <div
      className="
      relative bg-[var(--card)] text-[var(--text-primary)] h-full rounded-4xl
      flex flex-col items-center justify-center 
      font-bold
      hover:bg-[var(--card-hover-color)] transform transition-all duration-500 ease-in-out
      hover:scale-105 hover:z-20 
      overflow-hidden
      p-2"
    >
      <p
        className="
           text-xs sm:text-sm lg:text-base font-semibold leading-tight text-center mb-2"
      >
        Info :
      </p>
      <p
        className="
        text-sm sm:text-base lg:text-lg 
        font-extrabold leading-tight
        drop-shadow-lg"
      >
        {contact}
      </p>
    </div>
  );
}
