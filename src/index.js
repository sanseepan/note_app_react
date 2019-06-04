import React from "react";
import ReactDOM from "react-dom";
import Note from "./Components/Note";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Note app react</h2>
      </div>
      <Note />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
