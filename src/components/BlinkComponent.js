import React, { useEffect, useState } from "react";

export const BlinkComponent = ({ text }) => {
  const [showText, setShowText] = useState(true);

  //   useEffect(() => {
  //     const timeoutId = setInterval(() => {
  //       setShowText((showText) => !showText);
  //     }, 1000); // 1000ms마다 setShowText 실행 // setTimeout(1000ms 후 실행)과 비교
  //     return () => {
  //       clearInterval(timeoutId); // 컴포넌트가 unmount 될 때 한번 호출되는 함수
  //     };
  //   }, []);

  useEffect(() => {
    const intervalid = setInterval(() => {
      console.log("호출");
      setShowText(!showText); // 이렇게 되면 초기 showText가 true이므로 !showText에 false 들어가고 끝
    }, 3000);
    return () => {
      clearInterval(intervalid);
    };
  }, [showText]); // 따라서 깜빡거리게 하려면 여기 showText 넣어줘야 함. showText 상태가 바뀔 때마다 useEffect 첫번째 함수 호출하려면!

  return <div>{showText ? text : null}</div>;
};
