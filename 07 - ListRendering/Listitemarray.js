import React from 'react'

export default function Listitemarray() {
    const Fruite=["Apple","Banana","Mango","Greops"];

    const listitem=Fruite.map(fuite=><li>{fuite}</li>)

  return (
    <div>Listitemarray</div>
  )
}