import { useState } from "react";
import FavouriteButton from "../FavouriteButton";
import "./Entry.css";
import star from "./star.svg";
import starFilled from "./starFilled.svg";

export default function Entry() {
  const [isFavourite, setIsFavourite] = useState(false);

  function toggleIsFavourite() {
    setIsFavourite(!isFavourite);
  }

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
