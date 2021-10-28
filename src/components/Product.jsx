import React from "react";
import tanjiro from "@images/productos/producto-funko-1.png";

const Product = ({ product, handleAddToCart }) => (
  <div className="card">
    <header>
      <span class="tag is-medium hpn-alt has-text-white">Nuevo</span>
    </header>
    <div class="card-content pt-0">
      <figure class="image is-1by1">
        {/* <img src={product.image} alt={product.title} /> */}
        <img alt="Imagen Funk Pop Tanjiro Kamad" src={tanjiro} />
      </figure>
      <div className="content has-text-centered has-text-weight-semibold is-size-5">
        <h2>
          <a class="hpn-red-text" href="#">
            {product.title}
            <br />
            <span>${product.price}</span>
          </a>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  </div>
);

export default Product;
