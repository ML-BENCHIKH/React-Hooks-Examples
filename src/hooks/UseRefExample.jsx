import React, { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    console.log(inputRef.current.value);
  };
  const Focus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h1>ueRef Example : </h1>
      <h2>Lamine</h2>
      <input type="text" placeholder="Ex...." name="name" ref={inputRef} />
      <button onClick={onClick}> Change name</button>
      <button onClick={Focus}> Focus </button>
    </>
  );
};

export default UseRefExample;
