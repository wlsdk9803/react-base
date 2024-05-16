import React from "react";
import "./TodoApp.css";

const TodoAppColorButton = (props) => {
  const colors = ["white", "rgb(255, 107, 107)", "rgb(255, 228, 26)", "pink"];
  const changeColor = (color) => {
    props.setColor(color);
  };
  return (
    <div>
      <button
        className="colorButton"
        style={{ backgroundColor: colors[0] }}
        onClick={() => changeColor(colors[0])}
      ></button>
      <button
        className="colorButton"
        style={{ backgroundColor: colors[1] }}
        onClick={() => changeColor(colors[1])}
      ></button>
      <button
        className="colorButton"
        style={{ backgroundColor: colors[2] }}
        onClick={() => changeColor(colors[2])}
      ></button>
      <button
        className="colorButton"
        style={{ backgroundColor: colors[3] }}
        onClick={() => changeColor(colors[3])}
      ></button>
    </div>
  );
};

export default TodoAppColorButton;
