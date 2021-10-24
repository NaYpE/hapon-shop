import React from 'react';
import '../styles/ProductInfo.scss';
import tanjiro from '@images/productos//producto-funko-1.png';
import iconAdd from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
	return (
		<>
			<img src={tanjiro} />
			<div className="ProductInfo">
				<p>$500.00 MXN</p>
				<p>Tanjiro Kamado</p>
				<p>Funk Pop Tanjiro Kamado Demon Slayer.</p>
				<button className="primary-button add-to-cart-button">
					<img src={iconAdd} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;