import React from 'react';
import '../styles/hapon-styles.scss';

const Footer = () => (
  <footer class="footer hpn-neutral py-5">
      <div class="content has-text-centered">
        <p class="has-text-white is-size-6">
          Hapon - Tienda de figuras de Guadalajara Jalisco, México, &copy;2021
        </p>
        <p>
          <a href="#" class="has-text-white"
            ><span class="icon-text"
              ><span class="icon is-size-5"
                ><i class="fab fa-facebook-f"></i></span></span
          ></a>
          <a href="#" class="has-text-white"
            ><span class="icon-text"
              ><span class="icon is-size-5"
                ><i class="fab fa-instagram"></i> </span></span
          ></a>
          <a href="#" class="has-text-white"
            ><span class="icon-text"
              ><span class="icon is-size-5"><i class="fab fa-twitter"></i></span
            ></span>
          </a>
        </p>
      </div>
    </footer>
);

export default Footer;
