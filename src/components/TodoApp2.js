import "./TodoApp.css";
import React, { useState, useContext, createContext } from "react";
import TodoAppInput from "./TodoAppInput";
import TodoAppColorButton from "./TodoAppColorButton";
import TodoAppItems from "./TodoAppItems";
import TodoAppSearch from "./TodoAppSearch";

const TodoContext = createContext();

export const TodoApp2 = () => {
  const [color, setColor] = useState("white");
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [todoArr, setTodoArr] = useState(
    window.localStorage.getItem("item")
      ? JSON.parse(window.localStorage.getItem("item"))
      : []
  );

  return (
    <TodoContext.Provider
      value={{
        color,
        text,
        setText,
        searchText,
        setSearchText,
        todoArr,
        setTodoArr,
      }}
    >
      <div className="global">
        <TodoAppInput setColor={setColor} />
        <TodoAppSearch />
        <TodoAppColorButton setColor={setColor} />
        <TodoAppItems />
      </div>
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const {
    color,
    text,
    setText,
    searchText,
    setSearchText,
    todoArr,
    setTodoArr,
  } = useContext(TodoContext);
  return {
    color,
    text,
    setText,
    searchText,
    setSearchText,
    todoArr,
    setTodoArr,
  };
};
