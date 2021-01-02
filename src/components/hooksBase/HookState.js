import React, { useContext } from "react";
import AuthContext from "../../context/auth";

const HookState = () => {
  const authContext = useContext(AuthContext);

  console.log(authContext.data);

  return <div>{authContext.data}</div>;
};

export default HookState;
