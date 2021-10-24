import React from "react";
import Banner from "../components/Banner.jsx";
import Header from "../components/Header.jsx";
import ProductList from "../containers/ProductList.jsx";
import "@styles/hapon-styles.scss";
import "bulma/css/bulma.min.css";

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <section className="section has-background-white px-6">
                <div className="container">
                    <div className="columns">
                        <div className="column is-full">
                            <div className="content">
                                <h2 className="is-size-3 has-text-centered hpn-neutral-text hpn-special-text">
                                    Figuras de Anime
                                </h2>
                            </div>
                        </div>
                    </div>
                        <div className="column">
                            <ProductList />
                        </div>
                        <div className="column">
                            <ProductList />
                        </div>
                        <div className="column">
                            <ProductList />
                        </div>
                    <div className="columns">
                        <div className="column is-full">
                            <div className="content">
                                <h2 className="is-size-3 has-text-centered hpn-red-text">
                                    <a href="#" className="button hpn-red has-text-white has-text-weight-semibold">
                                        Ver todas
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;