import React, { Component } from "react";
import ReduxPage from "./redux-page";
import ReactReduxPage from "./react-redux-page";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <ReduxPage></ReduxPage> */}
        <ReactReduxPage></ReactReduxPage>
      </>
    );
  }
}
