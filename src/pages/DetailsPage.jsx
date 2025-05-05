// src/pages/DetailsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { type, uid } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${uid}`)
      .then(res => res.json())
      .then(json => setData(json.result.properties))
      .catch(err => console.error("Error loading detail:", err));
  }, [type, uid]);

  if (!data) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h1>{data.name || "Detail"}</h1>
      <ul className="list-group">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="list-group-item">
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsPage;
