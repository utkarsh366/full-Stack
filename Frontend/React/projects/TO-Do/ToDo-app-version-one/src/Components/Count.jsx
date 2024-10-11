import { useState } from "react";

function Count() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((preCount) => preCount - 1);
  }
  function incrementCount() {
    setCount((preCount) => preCount + 1);
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default Count;
