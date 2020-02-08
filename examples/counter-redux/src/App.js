import React, { Component } from "react";
import ReduxPage from "./redux-page";
import ReactReduxPage from "./react-redux-page";
import MyReactRouterPage from "./react-router-page";

export default class App extends Component {
  render() {
    return (
      <>
        <ReduxPage></ReduxPage>
        <hr></hr>
        <ReactReduxPage></ReactReduxPage>
        <hr></hr>
        <MyReactRouterPage></MyReactRouterPage>
      </>
    );
  }
}
