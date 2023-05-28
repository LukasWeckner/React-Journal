import "./Tab.css";

export default function Tab({ tabText, badgeNumber }) {
  return (
    <div className="tab__container">
      <h2 className="tab__name">
        {tabText} <span className="tab__badge">{badgeNumber}</span>
      </h2>
    </div>
  );
}
