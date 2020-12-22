import React, { useState } from "react";
import data from "./../../util/data";

const HookState = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    setBooks(data);
  };
  return (
    <div>
      <button onClick={getBooks}>Get Book</button>

      {books.length === 0 ? <div>Loading</div> : books.map((b) => <h3>{b.name}</h3>)}
    </div>
  );
};

export default HookState;
