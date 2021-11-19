import React from 'react';
import ProductItem from '@components/ProductItem.jsx';
import Product from '@components/Product.jsx';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

// const API = 'http://localhost:8090/hapon-shop/api/products/all';
const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				))}
				{/* {products.map(product => (
					<Product />
				))} */}
			</div>
		</section>
	);
}

export default ProductList;