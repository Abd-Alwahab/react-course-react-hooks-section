import React, { useState } from "react";

const HookState = () => {
  const [error, setError] = useState("error....");

  const updateError = () => {
    setError("can not login");
  };

  return (
    <div>
      <button onClick={updateError}>Update Error</button>
    </div>
  );
};

export default HookState;
