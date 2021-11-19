import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import funko2 from '@images/productos/producto-funko-2.png';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const [cart, setCart] = useState([]);
	const handleClick = () => {
		setCart([]);
	}
	return (
		<div className="card ProductItem">
			<header>
				<span className="tag is-medium hpn-alt has-text-white">Nuevo</span>
			</header>
			<div className="card-content pt-0">
				<figure className="image is-1by1">
					<img src={product.images[0]} alt={product.title} />
				</figure>
				<div className="product-info">
					<div className="content has-text-centered has-text-weight-semibold is-size-5">
						<p>
							<a className="hpn-red-text" href="#">
								{product.title}
								<br />
								{product.price} MXN
							</a>
						</p>
					</div>
					<figure onClick= {handleClick}>
						<img src={addToCart} alt="Add" />
					</figure>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;

