import React, { useState } from "react";

import { GrClose, GrMenu } from "react-icons/gr";
import { BsCart, BsSearch, BsPerson } from "react-icons/bs";
import logo from "../../assets/maco-logo-negro.png";
import SearchCointainer from "../SearchContainer/SearchCointainer";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const showNavbar = () => {
    setNavToggle(!navToggle);
  };

  const showSearchContainer = () => {
    setSearchToggle(!searchToggle);
  };

  // `
  return (
    <header className="navbar__container">
      <button className="navbar__toggle btn-open" onClick={showNavbar}>
        {navToggle ? <GrClose /> : <GrMenu />}
      </button>
      <a href="#" rel="noopener noreferrer">
        <img className="navbar__logo" src={logo} alt="Logo Maco" />
      </a>
      <nav className={`navbar__items ${navToggle ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Buzos</a>
          </li>
          <li>
            <a href="#">Remeras</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="navbar-icons">
        <div className="navbar-icons__search">
          <BsSearch onClick={showSearchContainer} />
          <SearchCointainer
            searchToggle={searchToggle}
            showSearchContainer={showSearchContainer}
          />
        </div>
        <div className="navbar-icons__profile">
          <BsPerson />
        </div>
        <div className="navbar-icons__cart">
          <BsCart />
          <span>0</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;