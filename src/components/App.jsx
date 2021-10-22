import React from "react";
import Layout from "../containers/Layout.jsx";
import Login from "../containers/Login.jsx";
import RecoveryPassword from "../containers/RecoveryPassword.jsx";
import '../styles/hapon-styles.css';

const App = () => {
    return (
        <Layout>
            <Login />
            <RecoveryPassword/>
        </Layout>
    );
}

export default App;