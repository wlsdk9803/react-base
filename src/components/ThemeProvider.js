import React, { useState, useContext, createContext } from "react";

// 1. Context 생성
/*export*/ const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // 2. Context, Provider 정의 및 공유할 객체를 value props로 전달
  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
  // 3. value Props로 전달된 객체를 공유할 컴포넌트를 context.provider 내부로 전달
};

// 커스텀 훅. 이거 안만들고 4번째 줄꺼 매번 그대로 갖다 써도 됨.
export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
};
