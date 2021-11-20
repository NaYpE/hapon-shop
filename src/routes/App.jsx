import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout.jsx';
import Home from '@pages/Home.jsx';
import Login from '@pages/Login.jsx';
import PasswordRecovery from '@pages/PasswordRecovery.jsx';
import SendEmail from '@pages/SendEmail.jsx';
import NewPassword from '@pages/NewPassword.jsx';
import MyAccount from '@pages/MyAccount.jsx';
import CreateAccount from '@pages/CreateAccount.jsx';
import Checkout from '@pages/Checkout.jsx';
import Orders from '@pages/Orders.jsx';
import NotFound from '@pages/NotFound.jsx';
import AppContext from "@context/AppContext.js";
import useInitialState from "@hooks/useInitialState.js";

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={ initialState }>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/password-recovery" component={PasswordRecovery} />
                        <Route exact path="/send-email" component={SendEmail} />
                        <Route exact path="/new-password" component={NewPassword} />
                        <Route exact path="/account" component={MyAccount} />
                        <Route exact path="/signup" component={CreateAccount} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/orders" component={Orders} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;