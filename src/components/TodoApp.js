import React, { useEffect, useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [color, setColor] = useState("white");
  const [text, setText] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  useEffect(() => {
    showTodo();
  }, [todoArr]);

  const changeColor = (color) => {
    setColor(color);
  };
  const makeTodo = () => {
    setTodoArr([
      ...todoArr,
      <div style={{ backgroundColor: color }}>{text}</div>,
    ]);
  };
  const showTodo = () => {
    return todoArr.map((elem) => <div>{elem}</div>);
  };

  return (
    <div className="global">
      <h1>Todo App</h1>
      <input
        type="text"
        style={{ backgroundColor: color }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={() => makeTodo()}>입력</button>

      <div>
        <button
          className="colorButton"
          onClick={() => changeColor("white")}
        ></button>
        <button
          className="colorButton"
          onClick={() => changeColor("red")}
        ></button>
        <button
          className="colorButton"
          onClick={() => changeColor("yellow")}
        ></button>
        <button
          className="colorButton"
          onClick={() => changeColor("pink")}
        ></button>
      </div>

      <h2>Todo items</h2>
      <div>{showTodo()}</div>
    </div>
  );
};

export default TodoApp;
