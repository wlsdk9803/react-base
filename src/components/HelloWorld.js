import React from "react";
import "./HelloWorld.css";
import Style from "./HelloWorld.module.css";

export default function HelloWorld() {
  return (
    // 방법 1
    // css 속성의 key가 객체의 속성
    <div style={{ textAlign: "center" }}>
      <h1>Hello, world!</h1>
      <p>This is My first React Application</p>
    </div>

    // 방법 2
    // <div className="hello-world">
    //   <h1>Hello, world!</h1>
    //   <p>This is My first React Application</p>
    // </div>

    // 방법 3
    // <div className={Style.HelloWorld}>
    //   <h1>Hello, world!</h1>
    //   <p>This is My first React Application</p>
    // </div>
  );
}
