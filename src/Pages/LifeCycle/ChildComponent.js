import React, { PureComponent } from "react";

// PureComponent giống Component tuy nhiên PureComponent sẽ xét giá trị đầu vào của props có gì thay đổi hay không => nếu có mới render lại
// shouldComponentUpdate không tồn tại trong PureComponent (vì PureComponent đã xử lý render tự động tương đương với lifecycle này)
export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor in Child");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps in Child");
    return state;
  }

  // // chạy sau khi state || props của component thay đổi
  // shouldComponentUpdate(newProps, newState) {
  //   // if (newState.hello) return false;
  //   console.log("shouldComponentUpdate Child");
  //   return true;
  //   // return false;
  // }

  render() {
    console.log("render again Child");
    return (
      <div>Props Child: {this.props.stateNumber.number} Child Component</div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount Child");
    this.i = setInterval(() => {
      console.log("Let's see. 🤔")
    }, 1000)
  }
  componentDidUpdate(prevProps, prevState) {
    // Hạn chế setStatet trong component này (Muốn setState phải có điều kiện if)
    console.log("componentDidUpdate Child");
  }
  componentWillUnmount() {
    clearInterval(this.i);
  }
}
