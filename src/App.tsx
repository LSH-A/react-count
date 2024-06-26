import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const CounterArray = [];
  for (let i = 0; i < 1000; i++) {
    CounterArray.push(<MkButton></MkButton>);
  }
  return <div>{CounterArray}</div>;
}

function MkButton() {
  const 리턴값 = useState(0);
  const count = 리턴값[0];
  const setCount = 리턴값[1];
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((현재카운트) => 현재카운트 + 1)}>
        증가
      </button>
      <button onClick={() => setCount((현재카운트) => 현재카운트 - 1)}>
        감소
      </button>
      {count !== 0 ? (
        <button onClick={() => setCount(() => 0)}>초기화</button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
