import React from "react";

interface ContactCardProp {
  contact: string;
}

export default function ContactCard({ contact }: ContactCardProp) {
  return (
    <div className="relative bg-[var(--card)] text-[var(--text-secondary] h-full rounded-4xl content-center justify-items-center font-bold hover:bg-[var(--card-hover-color)] transform transition-transform duration-300 hover:scale-110 hover:z-100 overflow-hidden">
      <p className="text-xl font-semibold leading-tight">{contact}</p>
    </div>
  );
}
