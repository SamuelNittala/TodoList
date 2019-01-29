import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ToDoItem from "./components/ToDoItem";
function App() {
  return (
    <div className="tdl">
      <h1> Things to do </h1>
      <ToDoItem obj={{ name: "Wake up", id: "td1" }} />
      <ToDoItem obj={{ name: "Code", id: "td2" }} />
      <ToDoItem obj={{ name: "Eat", id: "td3" }} />
      <ToDoItem obj={{ name: "Sleep", id: "td4" }} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
