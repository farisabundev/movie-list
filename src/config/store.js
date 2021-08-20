import { combineReducers, createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducers from "./reducers";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ ...reducers }),
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
