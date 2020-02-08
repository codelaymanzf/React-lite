import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "./src/react-router-dom";

// function HomePage(props) {
//   return <h5>HomePage</h5>;
// }

// function UserPage(props) {
//   return <h5>UserPage</h5>;
// }

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    );
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}

export default class MyReactRouterPage extends Component {
  render() {
    return (
      <>
        <h2>ReactRouterPage</h2>
        <BrowserRouter>
          <Link to="/home">首页</Link> &nbsp;
          <Link to="/user">用户中心</Link>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/user" component={UserPage}></Route>
        </BrowserRouter>
      </>
    );
  }
}
