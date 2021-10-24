import React from 'react';
import '../styles/OrderItem.scss';

const OrderItem = () => {
	return (
		<div className="OrderItem">
			<figure>
				<img src="../imagenes/productos/producto-funko-2.png" alt="Zenitsu" />
			</figure>
			<p>$630.00 MXN</p>
			<p>Zenitsu Agatsuma</p>
			<img src="./icons/icon_close.png" alt="close" />
		</div>
	);
}

export default OrderItem;