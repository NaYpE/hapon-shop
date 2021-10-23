import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from "../containers/Layout.jsx";
import Login from "../containers/Login.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import RecoveryPassword from "../containers/RecoveryPassword.jsx";
import '../styles/hapon-styles.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/recovery-password" component={ RecoveryPassword }/>
                    <Route path="*" component={ NotFound } />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;