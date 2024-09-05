import React, { useState } from 'react'

import './Colorpicker.css';




export default function ColorPicker() {
    const [Color,setcolor]=useState("#FFFFFF");

    function Colorpick(event){
        setcolor(event.target.value)
    }

  return (
    <>
    <div className='Main'>

        <h2>Selected Color is {Color}</h2>
    <div className='Colorbox' style={{backgroundColor:Color}}>

    </div>
    <br/><br/>
        <h2>Select Color</h2>
     <input type="color" value={Color} onChange={Colorpick}></input>   
    </div>
    </>
  )
}
