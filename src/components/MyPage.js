import React, { useContext } from "react";
import { useTheme, ThemeContext } from "./ThemeProvider";

const MyPage = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const { theme } = useTheme();

  return (
    <div
      style={{
        minHeight: 600,
        backgroundColor: theme === "light" ? "#e9e9e9" : "black",
        color: theme === "light" ? "black" : "#e9e9e9",
      }}
    >
      MyPage
    </div>
  );
};

export default MyPage;
