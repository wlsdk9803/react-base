// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import HelloWorld from "./components/HelloWorld";
import { CaptionImage } from "./components/CaptionImage";
import { BlinkComponent } from "./components/BlinkComponent";
import CBlinkComponent from "./components/CBlinkComponent";
import { CountComponent } from "./components/CountComponent";
import { useState } from "react";
import { FocusInputButton } from "./components/FocusInputButton";
import PrimeCalculator from "./components/PrimeCalculator";
import CountCallback from "./components/CountCallback";
import TodoApp from "./components/TodoApp";
import { TodoApp2 } from "./components/TodoApp2";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import MyPage from "./components/MyPage";
import { PlaceHolder } from "./components/PlaceHolder";
import ExampleMain from "./components/ExampleMain";

function App() {
  const [showCount, setShowCount] = useState(true);
  // ListGroup.Item을 클릭했을 때,
  // 해당하는 사람의 정보를 Modal에 Rendering
  // modal-header: id, modal-body: 이름
  return (
    <div>
      {/* <HelloWorld /> */}
      {/* <CaptionImage
        imgUrl="https://img.freepik.com/free-photo/close-up-on-adorable-kitten-indoors_23-2150782471.jpg"
        caption="고양이"
      /> */}
      {/* <CaptionImage
        imgUrl="https://cdn.autotribune.co.kr/news/photo/201905/3539_24226_3926.jpg"
        caption="이건 트럭입니다."
      /> */}
      {/* <BlinkComponent text="안녕" /> */}
      {/* <CBlinkComponent text="클래스" /> */}
      {/* <button
        onClick={(e) => {
          setShowCount(!showCount);
        }}
      >
        버튼
      </button>
      {showCount ? <CountComponent /> : null} */}
      {/* <FocusInputButton /> */}
      {/* <PrimeCalculator /> */}
      {/* <CountCallback /> */}
      {/* <ThemeProvider>
        <Button variant="primary">기본 버튼</Button>{" "}
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <ThemeButton />
        <MyPage />
      </ThemeProvider> */}
      {/* <TodoApp2 /> */}
      {/* <PlaceHolder /> */}
      <ExampleMain />
    </div>
  );
}

export default App;
