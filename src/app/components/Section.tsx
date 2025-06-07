import ContactCard from "./ui/ContactCard";
import DescriptionCard from "./ui/DescriptionCard";
import ImageCard from "./ui/ImageCard";

export default function Section() {
  return (
    <>
      {/* Section 1*/}
      <div className="bg-[var(--background)] grid h-[60vh] border-6 p-2 mt-4 mx-2 border-[var(--border)] rounded-2xl gap-2 grid-cols-4 grid-rows-4">
        <div className="col-span-2 row-span-4">
          <ImageCard
            mainContent="Learn to bake"
            imageUrl="/cake.png"
            backgroundText="Taste our products"
          />
        </div>
        <div className="col-span-2 row-span-2">
          <DescriptionCard description="lorem ipsum" />
        </div>
        <div className="col-span-2 row-span-2">
          <ContactCard contact="fakeemail" />
        </div>
      </div>
    </>
  );
}
