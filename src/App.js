import React, { useState } from "react";
import ClassState from "./components/classBase/ClassState";
import HookState from "./components/hooksBase/HookState";
import AuthContext from "./context/auth";
import data from "./util/data";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="App">
        <HookState />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
