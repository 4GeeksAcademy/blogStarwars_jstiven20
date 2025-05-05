import React from "react";

export const Footer = () => (
  <footer className="bg-dark text-white text-center py-3 mt-5">
    <div className="container">
      <p className="mb-0">StarWars Blog &copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
);
