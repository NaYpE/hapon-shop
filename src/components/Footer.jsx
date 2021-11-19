import React from 'react';
import '@styles/hapon-styles.scss';

const Footer = () => (
  <footer className="footer hpn-neutral py-5">
      <div className="content has-text-centered">
      <p className="Footer-title">Hapon</p>
        <p className="has-text-white is-size-6">
          Tienda de figuras de Guadalajara Jalisco, México, &copy;2021
        </p>
        <p>
          <a href="https://www.facebook.com/HaponStore" className="has-text-white"
            ><span className="icon-text"
              ><span className="icon is-size-5"
                ><i className="fab fa-facebook-f"></i></span></span
          ></a>
          <a href="#" className="has-text-white"
            ><span className="icon-text"
              ><span className="icon is-size-5"
                ><i className="fab fa-instagram"></i> </span></span
          ></a>
          <a href="#" className="has-text-white"
            ><span className="icon-text"
              ><span className="icon is-size-5"><i className="fab fa-twitter"></i></span
            ></span>
          </a>
        </p>
      </div>
    </footer>
);

export default Footer;
