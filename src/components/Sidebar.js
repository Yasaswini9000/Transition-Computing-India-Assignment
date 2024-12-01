import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  const menuItems = [
    { name: "Internal Audit", subItems: [] },
    { name: "UAT Testing", subItems: [] },
    { name: "Interact", subItems: [] },
    { name: "Queue", subItems: [] },
    {
      name: "Asset",
      subItems: ["Parent", "Option One", "Option Two", "All Accessories", "Decorating"],
    },
  ];

  return (
    <div className="sidebar">
      <h2 className="brand">Risk Hawk</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.name}
            {item.subItems.length > 0 && (
              <ul>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
