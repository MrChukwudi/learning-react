import React from "react";

var isDone = false;

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  document.getElementById("root").style.textDecoration = "none";
}

function App() {
  let strikeThrough = { textDecoration: "line-through" };
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>Change to Strike Through</button>
      <button onClick={unStrike}>Cancel Strike Through</button>
    </div>
  );
}

export default App;
