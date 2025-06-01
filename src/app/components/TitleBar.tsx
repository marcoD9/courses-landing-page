import ThemeSwitch from "./ui/ThemeSwitch";

export default function TitleBar() {
  return (
    <div className="bg-linear-to-r from-[var(--gradient-color1)] to-[var(--gradient-color2)] flex flex-row items-center justify-between h-24 px-4">
      {/* Left Container */}
      <div className="flex-none w-24"></div>

      {/* Center Container */}
      <div className="flex-grow flex justify-center">
        <h1>Landing Page</h1>
      </div>

      {/* Right Container */}
      <div className="flex-none w-24 flex justify-end">
        <ThemeSwitch />
      </div>
    </div>
  );
}
