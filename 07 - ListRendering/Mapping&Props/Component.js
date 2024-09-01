import React from "react";

export default function Component(props) {

    // Catch the object in passing props
  const dataobj = props.item;

  const objitem = dataobj.map((item) => <li>{item.Name}:item.Price</li>);

  return (
    <>
      <h2>{props.Categori}:</h2>
      <br />
      <ol>{pitems}</ol>
    </>
  );
}
