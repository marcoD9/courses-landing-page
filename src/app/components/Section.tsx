import Card from "./ui/Card";

export default function Section() {
  return (
    <div className="bg-[var(--background)] grid h-[60vh] border-6 p-8 mt-4 border-[var(--border)] rounded-2xl gap-8 grid-cols-3 grid-rows-3">
      <div className="col-span-1 row-span-3">
        <Card content="1" />
      </div>
      <div className="col-span-2 row-span-2">
        <Card content="2" />
      </div>
      <div className="col-span-2 row-span-1">
        <Card content="3" />
      </div>
    </div>
  );
}
