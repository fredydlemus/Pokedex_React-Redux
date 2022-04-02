import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import "./index.css";
<<<<<<< HEAD
import { store } from "./store";
=======
import { logActions, reportError } from "./middlewares";
import rootReducer from "./slices/rootReducer";
import thunk from "redux-thunk";



const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhacers = composeAlt(applyMiddleware(thunk, logActions, reportError))

const store = createStore(rootReducer, composedEnhacers);

>>>>>>> 0afc624823764ea89d3656938073973be232f57c

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
