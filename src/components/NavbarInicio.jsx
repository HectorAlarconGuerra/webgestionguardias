import React from "react";

export const NavbarInicio = () => {
  return (
    <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Seguridad privada
          {/* <img
            src="assets/logo.png"
            alt="Serproemcam logo"
            className="position-relative  img-fluid"
          /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">
                ¿Quiénes somos?
              </a>
            </li> */}
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Visión
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Misión
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-serproemcam" href="#">
                Servicios
              </a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Contáctenos
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
