import React, { Component } from "react";

export default class Video11 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("Previous state:", prevState.count);
    console.log("Current state:", this.state.count);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return nextState.count % 2 === 0;
  }

  UpdateCounter() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    console.log("Render");
    return (
      <>
        <h1>
          <b>Lifecycle Methods in React JS | Lifecycle Hooks in React JS</b>
        </h1>
        <h3>
          <b>Counter : {this.state.count}</b>
        </h3>
        <button onClick={() => this.UpdateCounter()}>Update Counter</button>
      </>
    );
  }
}
