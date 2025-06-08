import React from "react";

interface ContactCardProp {
  contact: string;
}

export default function ContactCard({ contact }: ContactCardProp) {
  return (
    <div
      className="
      relative bg-[var(--card)] text-[var(--text-secondary)] h-full rounded-4xl
      flex flex-col items-center justify-center 
      font-bold
      hover:bg-[var(--card-hover-color)] transform transition-all duration-500 ease-in-out /* Transizione più morbida */
      hover:scale-105 hover:z-20 /
      overflow-hidden
      p-4"
    >
      <p
        className="
        text-lg font-semibold leading-tight text-center mb-2"
      >
        More Info at:
      </p>
      <p
        className="
        text-xl sm:text-2xl lg:text-3xl 
        font-extrabold leading-tight
        drop-shadow-lg"
      >
        {contact}
      </p>
    </div>
  );
}
