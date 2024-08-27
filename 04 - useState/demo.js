import React, { useState } from "react";
import "./demo.css";

export default function App() {
  const [Count, SetCount] = useState(0);

  const increment = () => {
    SetCount(Count + 1);
  };
  const decrement = () => {
    SetCount(Count - 1);
  };
  return (
    //Learning State

    <>
      <div className="Container">
        <span className="Title">My Counter</span>
        <p className="Number">Count Number is {Count}</p>
        <button onClick={decrement} className="Button">
          Add
        </button>
        <button onClick={increment} className="Button">
          Minus
        </button>
      </div>
    </>
  );
}
