// src/components/CardList.jsx
import React from "react";
import Card from "./Card";

const CardList = ({ items, type, detailsMap, title }) => {
  return (
    <div className="container mb-4">
      <h2 className="text-danger">{title}</h2>
      <div className="d-flex flex-row overflow-auto">
        {items.map(item => (
          <Card
            key={item.uid}
            uid={item.uid}
            name={item.name}
            type={type}
            details={detailsMap?.[item.uid]}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
