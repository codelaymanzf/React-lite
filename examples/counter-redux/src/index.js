import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";

import { Provider } from "./src/react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);

// const render = () => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// };

// render();

// store.subscribe(render);
