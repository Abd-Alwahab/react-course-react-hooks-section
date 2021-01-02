import React from "react";

const Logout = ({ logout }) => {
  console.log("Logout Page");
  return (
    <div>
      <h2>Logout Page</h2>

      <button onClick={logout}>Logout </button>
    </div>
  );
};

export default Logout;
