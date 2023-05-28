import EntryList from "../EntryList";
import TabBar from "../TabBar";
import "./EntrySection.css";

export default function EntrySection() {
  return (
    <>
      <section className="entrySection">
        <TabBar />
        <EntryList />
      </section>
    </>
  );
}
