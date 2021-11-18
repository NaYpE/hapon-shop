import React from 'react';
import '../styles/ProductItem.scss';
import funko2 from '@images/productos/producto-funko-2.png';
import iconAddCart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
	return (
		<div className="card ProductItem">
			<header>
				<span className="tag is-medium hpn-alt has-text-white">Nuevo</span>
			</header>
			<div className="card-content pt-0">
				<figure className="image is-1by1">
					<img src={funko2} alt="Zenitsu" />
				</figure>
				<div className="product-info">
					<div className="content has-text-centered has-text-weight-semibold is-size-5">
						<p>
							<a className="hpn-red-text" href="#">
								Funk Pop: Tanjiro Kamad
								<br />
								$500.00 MXN
							</a>
						</p>
					</div>
					<figure>
						<img src={iconAddCart} alt="Add" />
					</figure>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;

