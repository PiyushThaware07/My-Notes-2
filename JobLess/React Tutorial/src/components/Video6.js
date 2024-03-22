import React, { Component } from "react";

export default class Video6 extends Component {
  // constructor() {
  //   super();
  // }

  details(age) {
    alert(`Hello ${this.props.name} \n ${age}`);
  }

  handleInput(event) {
    alert(event.target.value);
  }

  render() {
    return (
      <>
        <h1>
          <b>
            Class Component in React JS | Class Component vs Functional
            Component
          </b>
        </h1>
        <small>
          Name : {this.props.name} <br />
          Roll No : {this.props.roll}
        </small>
        <br />
        <button onClick={() => this.details("21")}>show portfolio</button>
        <br />
        <input type="text" onChange={(event) => this.handleInput(event)} />
      </>
    );
  }
}
