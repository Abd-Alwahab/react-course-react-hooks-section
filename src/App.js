import React from "react";
import { Route, Switch } from "react-router-dom";
import HookState from "./components/hooksBase/HookState";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HookState} />
      </Switch>
    </div>
  );
}

export default App;
