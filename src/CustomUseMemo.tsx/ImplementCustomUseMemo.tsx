import React, { useState } from "react";
import useCustomMemo from "./useCustomMemo";

type ImplementCustomUseMemoProps = {};

const ImplementCustomUseMemo: React.FC<ImplementCustomUseMemoProps> = ({}) => {
  const [count, setCount] = useState(0);
  const [_, setRender] = useState(false);
  const increment = () => {
    console.log("increment");
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    console.log("dencrement");
    setCount((prev) => prev - 1);
  };

  const squareCounter = () => {
    console.log("squareCounter");
    return count * count;
  };

  const renderComponent = () => {
    setRender((pre) => !pre);
  };

  const memoSqureCounter = useCustomMemo<number>(squareCounter, [count]);

  return (
    <div>
      <div>
        <p>number2</p>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <button onClick={renderComponent}>render</button>
      </div>
      <div>{memoSqureCounter}</div>
    </div>
  );
};

export default ImplementCustomUseMemo;
