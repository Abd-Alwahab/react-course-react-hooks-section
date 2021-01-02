import React from "react";
import ClassState from "./components/classBase/ClassState";
import HookState from "./components/hooksBase/HookState";
import AuthContext from "./context/auth";
import data from "./util/data";

function App() {
  return (
    <AuthContext.Provider value={{ isLoggedIn: false, user: null, data: data }}>
      <div className="App">
        <HookState />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
