import { createStore, applyMiddleware } from "./src/redux";
import logger from "./src/redux-logger";
import thunk from "./src/redux-thunk";

import counterReducer from "./reducers";

// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "add":
//       return state + 1;
//     case "minus":
//       return state - 1;
//     default:
//       return state;
//   }
// };

const store = createStore(counterReducer, applyMiddleware(thunk, logger));

export default store;
