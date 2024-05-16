import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoPencilSharp } from "react-icons/io5";
import "./TodoApp.css";
import TodoAppColorButton from "./TodoAppColorButton";
import { useTodo } from "./TodoApp2";

const TodoAppItems = () => {
  const { todoArr, searchText, setTodoArr } = useTodo();
  const [updateMode, setUpdateMode] = useState({});
  // const inputRefs = useRef(null);

  const deleteTodo = (id) => {
    const updatedItems = todoArr.filter((item) => item.id !== id);
    setTodoArr(updatedItems);
    window.localStorage.setItem("item", JSON.stringify(updatedItems));
    alert(`삭제되었습니다.`);
  };
  const resetTodo = () => {
    setTodoArr([]);
    window.localStorage.setItem("item", JSON.stringify([]));
  };
  const activeButton = (id) => {
    alert(`수정되었습니다.`);
    toggleUpdateMode(id);
  };
  const activeEnter = (e, id) => {
    if (e.key === "Enter") {
      activeButton(id);
    }
  };
  const handleUpdateText = (text, id) => {
    const updatedItems = todoArr.map((item) =>
      item.id === id ? { ...item, text } : item
    );
    setTodoArr(updatedItems);
    window.localStorage.setItem("item", JSON.stringify(updatedItems));
  };
  const handleUpdateColor = (color, id) => {
    const updatedItems = todoArr.map((item) =>
      item.id === id ? { ...item, color } : item
    );
    setTodoArr(updatedItems);
    window.localStorage.setItem("item", JSON.stringify(updatedItems));
  };

  const toggleUpdateMode = (id) => {
    setUpdateMode((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const showTodo = () => {
    return todoArr.map((elem) => {
      const isUpdateMode = updateMode[elem.id] || false;
      return searchText === "" || elem.text.includes(searchText) ? (
        <div style={{ backgroundColor: elem.color, padding: "5px 0 0 5px" }}>
          {isUpdateMode ? (
            <input
              value={elem.text}
              onChange={(e) => handleUpdateText(e.target.value, elem.id)}
              onKeyDown={(e) => activeEnter(e, elem.id)}
              style={{
                backgroundColor: elem.color,
                textAlign: "center",
                width: "50%",
                border: "none",
                fontSize: "16px",
              }}
            />
          ) : (
            <span style={{ display: "inline-block", width: "50%" }}>
              {elem.text}
            </span>
          )}
          <span
            style={{
              visibility: updateMode[elem.id] ? "visible" : "hidden",
              fontSize: "10px",
              color: "gray",
            }}
          >
            수정모드
          </span>
          <IoPencilSharp
            style={{ margin: "0 0 -2px 30px", cursor: "pointer" }}
            onClick={() => toggleUpdateMode(elem.id)}
          />
          <MdDeleteForever
            style={{ margin: "0 0 -2px 5px", cursor: "pointer" }}
            onClick={() => deleteTodo(elem.id)}
          />
          {isUpdateMode ? (
            <TodoAppColorButton
              setColor={(color) => handleUpdateColor(color, elem.id)}
            />
          ) : null}
        </div>
      ) : null;
    });
  };
  useEffect(() => {
    showTodo();
  }, [todoArr]);

  return (
    <div className="global">
      <h2>
        Todo items
        <button style={{ marginLeft: "10px" }} onClick={() => resetTodo()}>
          Todo items 초기화
        </button>
      </h2>
      <div>{showTodo()}</div>
    </div>
  );
};

export default TodoAppItems;
