import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1, stateNumber: { number: 1 } };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return state;
  }

  // chạy sau khi state || props của component thay đổi
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true;
    // return false;
  }

  render() {
    console.log("render");
    return (
      <div>
        Lifecycle
        <h1>{this.state.stateNumber.number}</h1>
        <button
          onClick={() => {
            let newStateNumber = this.state.stateNumber;
            newStateNumber.number += 1;
            this.setState((state) => ({ stateNumber: newStateNumber }));
          }}
        >
          click
        </button>
        {this.state.stateNumber.number < 2 && <ChildComponent stateNumber={this.state.stateNumber} />}
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    // Hạn chế setStatet trong component này (Muốn setState phải có điều kiện if)
    console.log("componentDidUpdate");
  }
}
