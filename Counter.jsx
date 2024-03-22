import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({initialValue = 0}) {
  const [counter, setCounter] = useState(initialValue);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  function resetCounter() {
    setCounter(initialValue);
  }

  return (
    <>
      <CounterDisplay counter= {counter} />
      <button onClick={incrementCounter}>Increment Count</button>
      <button onClick={decrementCounter}>Decrement Count</button>
      <button onClick={resetCounter}>Reset Count</button>
    </>
  );
}

export default Counter;
