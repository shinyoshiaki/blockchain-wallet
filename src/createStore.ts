import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import test, { Teststate } from "./modules/test";

const history = createHistory();
const middleware = routerMiddleware(history);

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({ test, router: routerReducer }),
    applyMiddleware(thunk, logger, middleware)
  );
  return { store, history };
}

export interface ReduxState {
  test: Teststate;
}
