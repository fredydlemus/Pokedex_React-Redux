import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import pokemonReducer from "./reducers/pokemonReducer";
import { logActions, reportError } from "./middlewares";
import createSagaMiddleware from "@redux-saga/core";
import pokemonSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();


const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhacers = composeAlt(applyMiddleware(sagaMiddleware, logActions, reportError))

const store = createStore(pokemonReducer, composedEnhacers);

sagaMiddleware.run(pokemonSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
