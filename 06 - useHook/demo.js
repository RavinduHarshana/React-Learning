import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


export default function App() {
  const [Count, SetCount] = useState(0);

  const increment = () => {
    SetCount(Count + 1);
  };
  const decrement = () => {
    SetCount(Count - 1);
  };

  useEffect(()=>{
    //side effect
    console.log(`New Count is ${Count}`);
  },[
    Count  // related variable or something  
    //Methana add karana de anuwa uda function eka weda karnawa
  ]
);

  return (
  

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

      <br></br>
      
      <button className="btn"> Click Here</button>
      
    </>
  );
}
