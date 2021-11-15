import React from "react";
import { createStore } from "redux";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory  } from "history";
import initialState from "../initialState.js";
import reducer from "../reducers/index.js";

const store = createStore(reducer, initialState);
const history = createMemoryHistory ();

const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);

export default ProviderMock;
