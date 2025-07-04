// src/components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalReducer";

const Card = ({ uid, name, type, details }) => {
  const { store, dispatch } = useGlobalContext();

  const isFavorite = store.favorites.some(
    (fav) => fav.uid === uid && fav.type === type
  );

  const toggleFavorite = () => {
    dispatch({ type: "toggle_favorite", payload: { uid, name, type } });
  };

  return (
    <div className="card m-2" style={{ minWidth: "18rem" }}>
      <img
        src="https://greenparrotrestaurantandpub.com/wp-content/uploads/2023/12/burger.jpg"
        className="card-img-top"
        alt={name}
        onError={(e) => {
          e.target.src = "/images/default.jpg"; // imagen fallback local
        }}
      />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {details && (
          <ul className="list-unstyled">
            {details.gender && (
              <li>
                <strong>Gender:</strong> {details.gender}
              </li>
            )}
            {details.hair_color && (
              <li>
                <strong>Hair Color:</strong> {details.hair_color}
              </li>
            )}
            {details.eye_color && (
              <li>
                <strong>Eye Color:</strong> {details.eye_color}
              </li>
            )}
          </ul>
        )}
        <div className="d-flex justify-content-between mt-3">
          <Link to={`/${type}/${uid}`} className="btn btn-outline-primary">
            Learn more!
          </Link>
          <button className="btn btn-outline-warning" onClick={toggleFavorite}>
            <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

