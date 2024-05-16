import React, { useEffect, useState } from "react";

export const CountComponent = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("데이터 받아오기! (이 함수는 한 번만 실행됩니다.)");
    return () => {
      // useEffect의 return 값은 unmount 될 때 실행됨
      console.log(
        "메모리를 잡아먹으면 리소스 해제하는 함수를 return 해주어야 합니다."
      );
    };
  }, []); // 두번째 파라미터가 빈 배열 => 처음에 mount 될 때 한 번 호출
  useEffect(() => {
    console.log(`카운트가 증가할 때마다 실행!\n - count: ${count}`);
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={addCount}>1 증가</button>
    </div>
  );
};
