import React, { useState, useEffect, useRef } from "react";

import data from "./../../util/data";

const HookState = () => {
  const inputRef = useRef(null);

  const [value, setValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    setValue(inputRef.current.value);
  };

  return (
    <div>
      <input className="input" type="text" placeholder="Enter your text" ref={inputRef} />

      <button onClick={handleClick}>Add</button>

      <p>{value}</p>
    </div>
  );
};

export default HookState;
