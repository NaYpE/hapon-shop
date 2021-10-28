import React from "react";
import { connect } from 'react-redux';
import actions from '../actions/index.js';
import "../styles/Checkout.scss";

const Checkout = (props) => {
  const { cart } = props;

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const remove = (product) => () => {
    props.removeFromCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item) => (
          <div className="Checkout-item" key={item.title}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={remove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: actions.removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

// const Checkout = () => {
// 	return (
// 		<div className="Checkout">
// 			<div className="Checkout-container">
// 				<h1 className="title">My order</h1>
// 				<div className="Checkout-content">
// 					<div className="order">
// 						<p>
// 							<span>03.25.21</span>
// 							<span>6 articles</span>
// 						</p>
// 						<p>$560.00</p>
// 					</div>
// 				</div>
// 				<OrderItem />
// 			</div>
// 		</div>
// 	);
// }

// export default Checkout;