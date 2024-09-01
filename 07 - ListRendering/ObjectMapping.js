import React from "react";

export default function ObjectMapping() {
  //Object Array
  const Phones = [
    { Name: "Apple", Price: 1000 },
    { Name: "Samsung", Price: 200 },
    { Name: "Nokia", Price: 500 },
    { Name: "Google", Price: 2300 },
    { Name: "Vivo", Price: 400 },
  ];

  //   Mapping Object
  const Phoneitem = Phones.map((phone) => {
    <li>
      {phone.Name}: &nbsp;
      {phone.Price}
    </li>;
  });

  return (
    <>
      {/* Return items as oder list type */}
    {/* Apita One componenet ekak widihata Design karanna puluwan */}
      <ol>{Phoneitem}</ol>
    </>
  );
}
