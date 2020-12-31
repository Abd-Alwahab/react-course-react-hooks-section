import React, { useState, useEffect } from "react";

import data from "./../../util/data";

const HookState = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBooks(data);
    }, 2000);
  });

  return (
    <div>
      {books.length === 0 ? <div>Loading</div> : books.map((b) => <h3>{b.name}</h3>)}
    </div>
  );
};

export default HookState;
