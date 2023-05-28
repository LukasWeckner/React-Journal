import "./Entry.css";
import { ReactComponent as Star } from "./star.svg";

export default function Entry() {
  return (
    <>
      <li className="entry">
        <p className="entry__date">27.05.2023</p>
        <h3 className="entry__title">"That's life in the city"</h3>
        <p className="entry_text">
          City life is a bustling symphony of energy and diversity. Skyscrapers
          stretch toward the sky, streets pulse with activity, and opportunities
          abound. It's a vibrant tapestry of cultures, where dreams find fertile
          ground.
        </p>
        <Star className="entry__icon" />
      </li>
      <li className="entry">
        <p className="entry__date">27.05.2023</p>
        <h3 className="entry__title">"That's life in the city"</h3>
        <p className="entry_text">
          City life is a bustling symphony of energy and diversity. Skyscrapers
          stretch toward the sky, streets pulse with activity, and opportunities
          abound. It's a vibrant tapestry of cultures, where dreams find fertile
          ground.
        </p>
        <Star className="entry__icon" />
      </li>
      <li className="entry">
        <p className="entry__date">27.05.2023</p>
        <h3 className="entry__title">"That's life in the city"</h3>
        <p className="entry_text">
          City life is a bustling symphony of energy and diversity. Skyscrapers
          stretch toward the sky, streets pulse with activity, and opportunities
          abound. It's a vibrant tapestry of cultures, where dreams find fertile
          ground.
        </p>
        <Star className="entry__icon" />
      </li>
    </>
  );
}
