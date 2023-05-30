import Entry from "../Entry";
import TabBar from "../TabBar";
import "./EntrySection.css";

export default function EntrySection({ entries }) {
  return (
    <>
      <section className="entrySection">
        <TabBar />
        <ul className="entryList">
          {entries.map(({ id, date, motto, notes }) => (
            <Entry id={id} date={date} motto={motto} notes={notes} />
          ))}
        </ul>
      </section>
    </>
  );
}
