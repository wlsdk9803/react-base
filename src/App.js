// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
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
import { Col, Container, ListGroup, Row } from "react-bootstrap";

function App() {
  const [showCount, setShowCount] = useState(true);
  const [items, setItems] = useState([
    { id: 1, name: "임세현" },
    { id: 2, name: "최경서" },
    { id: 3, name: "박진아" },
  ]);
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
      <Container fluid>
        <Row>
          <Col sm={6} xs={12}>
            <h1>Users</h1>
            <ListGroup defaultActiveKey="link1">
              {items.map((item) => (
                <ListGroup.Item action key={item.id}>
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={6} xs={12}>
            <h1>Stocks</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
