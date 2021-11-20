import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext.js';

const ProductItem = ({ product }) => {
	
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
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
					<figure onClick= {() => handleClick(product)}>
						<img src={addToCartIcon} alt="Add" />
					</figure>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;

