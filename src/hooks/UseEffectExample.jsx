import React, { useEffect, useState } from "react";
import axios from "axios";
// API URL https://jsonplaceholder.typicode.com/comments
const UseEffectExample = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
      });
  }, []);

  return (
    <>
      <h1>useEffect Example :</h1>
      <div>First User Email from API IS : {data}</div>
    </>
  );
};

export default UseEffectExample;
