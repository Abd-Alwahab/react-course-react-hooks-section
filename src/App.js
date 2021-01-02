import React from "react";
import { Route, Switch } from "react-router-dom";
import HookState from "./components/hooksBase/HookState";
import about from "./pages/about";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HookState} />
        <Route path="/about" component={about} />
      </Switch>
    </div>
  );
}

export default App;
