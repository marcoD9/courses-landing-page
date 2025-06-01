import Section from "./components/Section";
import TitleBar from "./components/TitleBar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <TitleBar />
      <Section />
    </div>
  );
}
