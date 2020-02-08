import { createStore, applyMiddleware } from "./src/redux";
import logger from "./src/redux-logger";
import thunk from "./src/redux-thunk";

import counterReducer from "./reducers";

const store = createStore(counterReducer, applyMiddleware(thunk, logger));

export default store;
