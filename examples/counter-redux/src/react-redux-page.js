import React, { Component } from "react";

import { connect } from "./src/react-redux";

class ReactReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { num, add, minus } = this.props;
    return (
      <div>
        <h2>ReactReduxPage</h2>
        <p>{num}</p>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  num: state
});

const mapDispatchToProps = {
  add: () => ({ type: "add" }),
  minus: () => ({ type: "minus" })
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage);
