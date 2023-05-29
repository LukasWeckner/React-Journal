import { useState } from "react";
import FavouriteButton from "../FavouriteButton";
import "./Entry.css";
import star from "./star.svg";
import starFilled from "./starFilled.svg";

export default function Entry({ id, date, motto, notes }) {
  const [isFavourite, setIsFavourite] = useState(false);

  function toggleIsFavourite() {
    setIsFavourite(!isFavourite);
  }

  return (
    <>
      <li className="entry" key={id}>
        <p className="entry__date">{date}</p>
        <h3 className="entry__title">{motto}</h3>
        <p className="entry_text">{notes}</p>
        <FavouriteButton
          className="entry__favouriteButton"
          onClick={toggleIsFavourite}
        >
          <img
            src={isFavourite ? starFilled : star}
            alt="Star symbol as favourite mark"
          />
        </FavouriteButton>
      </li>
    </>
  );
}
