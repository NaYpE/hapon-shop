import React from "react";
import Banner from "../components/Banner.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Layout = ({ children }) => (
        <div>
            <Header />
            <Banner />
               {children}
            <Footer />
        </div>
    );


export default Layout;