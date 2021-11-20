import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "@styles/hapon-styles.scss";
import "bulma/css/bulma.min.css";
import "@styles/Header.scss";
import AppContext from "@context/AppContext.js";
import Menu from "@components/Menu.jsx"
import logo from "@images/hapon-logo.png";
import iconShopping from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className="container navbar is-fixed-top has-background-white is-fluid pt-2 pb-2 has-shadow">
      <div className="navbar-brand">
        <figure className="image is-align-self-center">
          <Link className="navbar-item" to="/">
            <img src={logo} />
          </Link>
        </figure>

        <Link
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item hpn-neutral-text" to="./anime.html">
            Figuras de Anime
          </Link>
          <Link
            className="navbar-item hpn-neutral-text"
            to="./videojuegos.html"
          >
            Figuras de Videojuegos
          </Link>
          <Link
            className="navbar-item hpn-neutral-text"
            to="./otros-productos.html"
          >
            Otros Productos
          </Link>
        </div>
        <div className="navbar-end">
          <Link className="navbar-item hpn-neutral-text" to="./acerca.html">
            Acerca de
          </Link>
          <Link className="navbar-item hpn-neutral-text" to="./contacto.html">
            Contacto
          </Link>
        </div>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            usuario@hapon.com
          </li>
          <li className="navbar-shopping-cart">
            <Link to="/checkout">
              <img src={iconShopping} alt="shopping cart" />
              { state.cart.length > 0 ? <div className="Header-alert">${state.cart.length}</div> : null }
            </Link>
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);
