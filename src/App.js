import React from "react";
import Menu from "./Menu";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="container">
        <div class="section">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
