import React from "react";
import { useTodo } from "./TodoApp2";

const TodoAppSearch = () => {
  const { searchText, setSearchText } = useTodo();
  const reset = () => {
    setSearchText("");
  };
  return (
    <div>
      <input
        placeholder="검색"
        value={searchText}
        type="text"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button onClick={() => reset()}>초기화</button>
    </div>
  );
};

export default TodoAppSearch;
