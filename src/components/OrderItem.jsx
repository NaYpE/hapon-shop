import React from 'react';
import '@styles/OrderItem.scss';
import funko2 from '@images/productos/producto-funko-2.png';

const OrderItem = () => {
	return (
		<div className="OrderItem">
			<figure>
				<img src="../imagenes/" alt="Zenitsu" />
			</figure>
			<p>$630.00 MXN</p>
			<p>Zenitsu Agatsuma</p>
			<img src={funko2} alt="close" />
		</div>
	);
}

export default OrderItem;