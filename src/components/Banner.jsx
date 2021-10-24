import React from "react";
import portadaBanner from '@images/hero-image.png';
import "@styles/hapon-styles.scss";
import 'bulma/css/bulma.min.css';

const Banner = () => {
    return (
        <section className="hero is-medium hpn-red">
            <div className="container">
                <div className="hero-body pl-0 pr-0">
                <div className="columns is-vcentered">
                    <div className="column mt-2 mb-2">
                    <div className="content has-text-white">
                        <h1 className="is-size-2 hpn-special-text has-text-white">
                        Hapon - Tienda de figuras
                        </h1>
                        <p className="is-size-5">
                        Encuentra figuras originales de tus animes y videojuegos
                        favoritos, así como de otras áreas relacionadas al mundo del
                        entretenimiento.
                        </p>
                        <p>
                        <a className="button hpn-red-text has-text-weight-semibold"
                            >Explorar catálogo</a
                        >
                        </p>
                    </div>
                    </div>
                    <div className="column m-2">
                    <figure className="image is-fullwidth">
                        <img src={portadaBanner} className="Luffytaro" />
                    </figure>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;