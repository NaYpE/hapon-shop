import React from 'react';
import { connect } from 'react-redux';
import actions from '@actions/index.js';
import Product from '@components/Product.jsx';
import '@styles/Products.css';

const Products = (props) => {
  const { products } = props;

  const handleAddToCart = product => () => {
    props.addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: actions.addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);