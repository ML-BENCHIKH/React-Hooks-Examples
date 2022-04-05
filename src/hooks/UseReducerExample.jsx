import React, { useReducer } from "react";

const UseReducerExample = () => {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1, CounText: state.CounText };
      case "SetNewText":
        return { count: state.count, CounText: !state.CounText };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    CounText: true,
  });
  return (
    <div>
      <h1>useReducer Example : </h1>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "SetNewText" });
        }}
      >
        Increment Value
      </button>
      <p>Count is {state.CounText ? "even" : "odd"}</p>
    </div>
  );
};

export default UseReducerExample;
