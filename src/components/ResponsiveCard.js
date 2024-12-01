import React from "react";
import "./ResponsiveCard.scss";

const ResponsiveCard = ({ title, description }) => {
  return (
    <div className="responsive-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ResponsiveCard;
