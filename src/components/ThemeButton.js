import React, { useContext } from "react";
import { useTheme, ThemeContext } from "./ThemeProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      현재 테마: {theme === "light" ? "밝은 모드" : "어두운 모드"}
    </button>
  );
};

export default ThemeButton;
