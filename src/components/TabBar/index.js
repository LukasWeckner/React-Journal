import Tab from "../Tab";
import "./TabBar.css";

export default function TabBar() {
  return (
    <div className="tabs__container">
      <Tab tabText="All Entries" badgeNumber={3} />
      <Tab tabText="Favorites" badgeNumber={1} />
    </div>
  );
}
