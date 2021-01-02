import React, { useCallback, useState } from "react";
import Header from "./components/hooksBase/Header";
import Logout from "./components/hooksBase/Logout";
import UpdateUser from "./components/hooksBase/UpdateUser";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});

  const updateUser = (newUser) => {
    console.log("new update function");

    setUser(newUser);
  };

  const logout = () => {
    console.log("new logout function");
    setIsLoggedIn(false);
  };

  const updateComponents = () => {
    console.log("Notify Component With New Updaed User");
  };

  return (
    <div className="App">
      <UpdateUser updateUser={updateUser} />
      <Logout isLoggedIn={isLoggedIn} logout={logout} />
      <Header updateComponents={updateComponents} />
    </div>
  );
}

export default App;
