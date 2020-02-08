import React, { Component, useContext } from "react";
import { createBrowserHistory } from "history";

const RouterContext = React.createContext();

export class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory(this.props);
    console.log("this.history", this.history);
    this.state = {
      location: this.history.location
    };

    this.unlisten = this.history.listen(location => {
      this.setState({
        location
      });
    });
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    return (
      <RouterContext.Provider
        value={{
          history: this.history,
          location: this.state.location
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}

export function Route(props) {
  const { path, component: Component } = props;
  const { location } = useContext(RouterContext);
  console.log("route-location ", location);
  const match = path === location.pathname;
  console.log("path ", path);
  console.log("pathname ", location.pathname);
  console.log("match ", match);
  return match ? <Component /> : null;
}

export class Link extends Component {
  handleClick = (event, history) => {
    event.preventDefault();
    history.push(this.props.to);
    console.log("history-after ", history);
  };

  render() {
    const { children, to } = this.props;
    return (
      <RouterContext.Consumer>
        {ctx => (
          <a href={to} onClick={event => this.handleClick(event, ctx.history)}>
            {children}
          </a>
        )}
      </RouterContext.Consumer>
    );
  }
}
