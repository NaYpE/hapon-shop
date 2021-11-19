import React from "react";
import ProductDetail from "@containers/ProductDetail.jsx";
import Products from "@containers/Products.jsx";
import ProductList from "@containers/ProductList.jsx";
import Banner from "@components/Banner.jsx";

const Home = () => {
	return (
		<>
			<Banner />
			<ProductList />
		</>
	);
}

export default Home;