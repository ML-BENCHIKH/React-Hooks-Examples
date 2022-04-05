import React, { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>useState Example :</h1>
      <button onClick={() => setCount(count + 1)}>Increment count (+) </button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}> Decrement count (-) </button>
    </>
  );
};

export default UseStateExample;
