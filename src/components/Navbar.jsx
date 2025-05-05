import React from 'react';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <button
            data-mdb-button-init
            className="navbar-toggler ms-auto"
            type="button"
            data-mdb-collapse-init
            data-mdb-target="#navbarToggleExternalContent3"
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
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-link btn-block border-bottom m-0"
          >
            Link 1
          </button>
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-link btn-block border-bottom m-0"
          >
            Link 2
          </button>
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-link btn-block m-0"
          >
            Link 3
          </button>
        </div>
      </div>
    </>
  );
};