import Section from "./components/Section";
import TitleBar from "./components/TitleBar";
import SectionTitle from "./components/SectionTitle";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <TitleBar />
      <SectionTitle />
      <Section />
    </div>
  );
}
