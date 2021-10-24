import React from "react";
import "@styles/hapon-styles.scss";
import "bulma/css/bulma.min.css";
import "@styles/Header.scss";

import logo from "@images/hapon-logo.png";
import iconShopping from "@icons/icon_shopping_cart.svg";

const Header = () => {
  return (
    <nav className="container navbar is-fixed-top has-background-white is-fluid pt-2 pb-2 has-shadow">
      <div className="navbar-brand">
        <figure className="image is-align-self-center">
          <a className="navbar-item" href="./index.html">
            <img src={logo} />
          </a>
        </figure>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item hpn-neutral-text" href="./anime.html">
            Figuras de Anime
          </a>
          <a className="navbar-item hpn-neutral-text" href="./videojuegos.html">
            Figuras de Videojuegos
          </a>
          <a
            className="navbar-item hpn-neutral-text"
            href="./otros-productos.html"
          >
            Otros Productos
          </a>
        </div>
        <div class="navbar-end">
          <a className="navbar-item hpn-neutral-text" href="./acerca.html">
            Acerca de
          </a>
          <a className="navbar-item hpn-neutral-text" href="./contacto.html">
            Contacto
          </a>
        </div>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">Usuario</li>
          <li className="navbar-shopping-cart">
            <img src={iconShopping} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
