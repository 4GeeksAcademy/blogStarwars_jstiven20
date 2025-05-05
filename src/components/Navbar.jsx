import React from 'react';
import { useGlobalContext } from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // ✅ Redirige a Home
    navigate("/");

    // (Opcional) Si quieres reiniciar el estado global, descomenta:
    // dispatch({ type: "reset_store" });
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary px-3">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* ✅ Logo a la izquierda */}
          <img
            src="/assets/img/Logo.png"
            alt="Logo"
            height="40"
            style={{ cursor: "pointer" }}
            onClick={handleLogoClick}
          />

          {/* Botón hamburguesa a la derecha */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent3"
            aria-controls="navbarToggleExternalContent3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <div className="collapse" id="navbarToggleExternalContent3">
        <div className="bg-body-tertiary shadow-3 p-4">
          <h6 className="mb-3">⭐ Favorites ({store.favorites.length})</h6>
          {store.favorites.length === 0 ? (
            <div className="text-muted">No favorites added yet</div>
          ) : (
            store.favorites.map((fav, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center border-bottom py-2"
              >
                <span>{fav.name}</span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => dispatch({ type: "toggle_favorite", payload: fav })}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
