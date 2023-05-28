import React from "react";

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
let myTime = `${hours}:${minutes}:${seconds}`;

function App() {
  let [baseTime, currentTime] = React.useState(hours);
  console.log(baseTime);

  function showTime() {
    baseTime = currentTime(myTime);
    setInterval(baseTime, 1000);
  }

  return (
    <div className="container">
      <h1>{baseTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
