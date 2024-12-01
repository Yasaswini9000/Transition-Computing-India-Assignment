import React from "react";
import ResponsiveCard from "./ResponsiveCard";
import "./Layout.scss";

const Layout = () => {
  const cards = [
    { id: 1, title: "Card 1", description: "This is card 1 description" },
    { id: 2, title: "Card 2", description: "This is card 2 description" },
  ];

  return (
    <main className="layout">
      {cards.map((card) => (
        <ResponsiveCard key={card.id} {...card} />
      ))}
    </main>
  );
};

export default Layout;
