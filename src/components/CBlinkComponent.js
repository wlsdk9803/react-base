import React, { Component, createRef } from "react";

export default class CBlinkComponent extends Component {
  constructor(props) {
    super(props); // state 쓰려면 무조건 써줘야 함

    this.state = {
      showText: true,
    };
    this.intervalRef = createRef();
  }
  componentDidMount() {
    // 컴포넌트가 처음 생성(mount)되고 함수 호출되는 함수
    this.intervalRef.current = setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }
  componentWillUnmount() {
    // 컴포넌트가 삭제(unmount)되기 직전 한번 호출되는 함수
    clearInterval(this.intervalRef.current);
  }

  render() {
    return <div>{this.state.showText ? this.props.text : null}</div>;
  }
}
