import React, { useState, useEffect } from "react";

import data from "./../../util/data";

const HookState = () => {
  const [books, setBooks] = useState([]);

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("I got called");
    setTimeout(() => {
      setBooks(data);
    }, 2000);
  }, [count, age]);

  const updateCount = () => {
    setBooks([]);
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={updateCount}>Add {count}</button>
      {books.length === 0 ? <div>Loading</div> : books.map((b) => <h3>{b.name}</h3>)}
    </div>
  );
};

export default HookState;
