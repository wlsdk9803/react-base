import React, { useState } from "react";
import "./TodoApp.css";
import { useTodo } from "./TodoApp2";

const TodoAppInput = (props) => {
  const { color, setColor, text, setText, todoArr, setTodoArr } = useTodo();
  const reset = () => {
    setText("");
    props.setColor("white");
  };

  const [id, setId] = useState(() => {
    const storedItems = JSON.parse(window.localStorage.getItem("item"));
    return storedItems
      ? Math.max(...storedItems.map((item) => item.id)) + 1
      : 0;
  });
  const makeTodo = () => {
    setTodoArr([...todoArr, { id: id, color: color, text: text }]);
    window.localStorage.setItem(
      "item",
      JSON.stringify([...todoArr, { id: id, color: color, text: text }])
    );
    setId(id + 1);
    // window.localStorage.setItem("item", JSON.stringify(props.todoArr)); // 실시간 반영 안됨 (한 박자 느림)
  };
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      makeTodo();
    }
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input
        placeholder="입력"
        value={text}
        type="text"
        style={{ backgroundColor: color }}
        onKeyDown={(e) => activeEnter(e)}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={() => makeTodo()}>입력</button>
      <button onClick={() => reset()}>초기화</button>
    </div>
  );
};

export default TodoAppInput;
