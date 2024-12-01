import React from "react";
import "./Favorites.scss";

const Favorites = () => {
  const favorites = ["Lorem ipsum dolor sit amet.", "Another case item."];

  return (
    <div className="favorites">
      <h3>Case Favorites</h3>
      <ul>
        {favorites.map((fav, index) => (
          <li key={index}>{fav}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
