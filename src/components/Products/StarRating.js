import React from "react";
import { useState } from "react";
import "./StarRating.scss";

const StarRating = ({ currentProducts }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0); // hover on star's
  return (
    <div className="star-rating">
      {currentProducts.map((star, index) => {
        index += 1;
        return (
          <div
            id="startButton"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
