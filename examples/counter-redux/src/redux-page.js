import React, { Component } from "react";
import store from "./store";

export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log("subscribe");
      this.forceUpdate();
    });
  }

  add = () => {
    store.dispatch({ type: "add" });
  };

  minus = () => {
    store.dispatch({ type: "minus" });
  };

  stayStatic = () => {
    store.dispatch({ type: "others" });
  };

  asynAdd = () => {
    store.dispatch(dispatch => {
      setTimeout(() => {
        dispatch({ type: "add" });
      }, 2000);
    });
  };

  render() {
    console.log("store", store);
    return (
      <div>
        <h1>ReduxPage</h1>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.stayStatic}>static</button>
        <button onClick={this.asynAdd}>asyncAdd</button>
      </div>
    );
  }
}
