import React from "react";

const UpdateUser = ({ updateUser }) => {
  console.log("Update User");
  return (
    <div>
      <h2>Update User Page</h2>

      <button onClick={() => updateUser({ name: "Abd" })}>update </button>
    </div>
  );
};

export default UpdateUser;
