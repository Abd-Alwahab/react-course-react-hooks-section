import React, { useState } from "react";

const oldUser = {
  name: "Malak Sarukus",
  age: 54,
  role: "user",
  photo:
    "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
};

const HookState = () => {
  const [user, setUser] = useState(oldUser);

  const updateUser = () => {
    setUser({
      name: "Rob",
      age: 10,
    });
  };
  return (
    <div>
      <div>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
        <button onClick={updateUser}>update User</button>
      </div>
    </div>
  );
};

export default HookState;
