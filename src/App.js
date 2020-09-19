import React from "react";
import "./App.css";
import Nav from "./Nav";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./Services/history";
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
