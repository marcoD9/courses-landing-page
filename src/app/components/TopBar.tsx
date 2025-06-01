import ThemeSwitch from "./ui/ThemeSwitch";

export default function TopBar() {
  return (
    <div className="bg-linear-to-r from-indigo-950 to-blue-700 flex flex-row items-center justify-between h-24 px-4">
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
