import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  console.log(count);

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
