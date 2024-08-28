import React, { useState } from "react";

export default function App() {
  function btnclick(){
    console.log("Button Click");
  }
  return (
   
    <><button onClick={btnclick} className="btn"> Click Here</button></>
  );
}
