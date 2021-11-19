import React from "react";
import tanjiro from "@images/productos/producto-funko-1.png";
import addToCart from '@icons/bt_add_to_cart.svg';

const Product = ({ product, handleAddToCart }) => (
  <div className="card">
    <header>
      <span className="tag is-medium hpn-alt has-text-white">Nuevo</span>
    </header>
    <div className="card-content pt-0">
      <figure className="image is-1by1">
        {/* <img src={product.image} alt={product.title} /> */}
        <img alt="Imagen Funk Pop Tanjiro Kamad" src={tanjiro} />
      </figure>
      <div className="content has-text-centered has-text-weight-semibold is-size-5">
        <h2>
          <a className="hpn-red-text" href="#">
            {product.title}
            <br />
            <span>${product.price}</span>
          </a>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
      <img src={addToCart} alt="add to cart" />
        Comprar
      </button>
    </div>
  </div>
);

export default Product;
