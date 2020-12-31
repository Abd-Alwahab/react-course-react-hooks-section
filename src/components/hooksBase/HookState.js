import React, { useState, useEffect } from "react";

import data from "./../../util/data";

const HookState = () => {
  const [books, setBooks] = useState([]);

  const fetchBook = async () => {
    console.log("I got called");
    setTimeout(() => {
      setBooks(data);
    }, 2000);
  };

  useEffect(() => {
    let isDataFethced = true;
    if (isDataFethced) fetchBook();

    return () => {
      isDataFethced = false;
    };
  }, []);

  return (
    <div>
      {books.length === 0 ? <div>Loading</div> : books.map((b) => <h3>{b.name}</h3>)}
    </div>
  );
};

export default HookState;
