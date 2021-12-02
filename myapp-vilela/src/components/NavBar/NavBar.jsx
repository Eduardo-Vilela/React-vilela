import React from "react";
import "./style.css";

const NavBar = () => {
  return (
        <header className="navbar">
            <div className="navbartitle navbaritem">icono/marca</div>
            <div className="navbaritem">Productos</div>
            <div className="navbaritem">Contacto</div>
            <div className="navbar__item">Ayuda</div>
        </header>
  );
};

export default NavBar;