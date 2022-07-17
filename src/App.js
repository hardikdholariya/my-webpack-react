import React from "react";
import logo from "./assets/images/logo.png";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-white">React Webpack</h1>
        <div className="main">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a className="App-link m-2" href="https://webpack.js.org/">
          Learn Webpack
        </a>
      </header>
    </div>
  );
}

export default App;
