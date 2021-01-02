import React, { useContext } from "react";
import AuthContext from "../../context/auth";

const HookState = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  // 00-create a login component
  // 01-create a lgout component

  return (
    <div>
      {isLoggedIn ? <p>LoggedIn</p> : <p> You need to login</p>}
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default HookState;
