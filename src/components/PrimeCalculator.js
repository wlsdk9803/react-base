import React, { useState, useMemo } from "react";

const calculatePrimes = (limit) => {
  console.log(`limit: ${limit}에 대한 소수 계산`);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
};

const PrimeCalculator = (props) => {
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);
  const primes = useMemo(() => calculatePrimes(limit), [limit]); // 이때는 limit가 바뀔 때만 연산을 함 => 성능 최적화 // 참고: 이건 한 줄이라 괄호 + return 생략된 것임
  //const primes = calculatePrimes(limit); // 이때는 소수 구하기와 무관한 count가 바뀌어도 연산을 또 함

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <button onClick={addCount}>카운트 증가</button>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <p>계산된 소수: {primes.join(", ")}</p>
    </div>
  );
};

export default PrimeCalculator;
