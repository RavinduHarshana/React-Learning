import React from "react";

export default function app() {
  const Phones = [
    { Name: "Apple", Price: 1000 },
    { Name: "Samsung", Price: 200 },
    { Name: "Nokia", Price: 500 },
    { Name: "Google", Price: 2300 },
    { Name: "Vivo", Price: 400 },
  ];
  const Laptop = [
    { Name: "Apple", Price: 100000 },
    { Name: "Samsung", Price: 20000 },
    { Name: "Nokia", Price: 50000 },
    { Name: "Google", Price: 23000 },
    { Name: "Vivo", Price: 4000 },
  ];

  return (
    <>

        {/* Setting data as a props  */}
      <List3 item={Phones} Categori="Mobile" />
      <List3 item={Laptop} Categori="Laptop" />
    </>
  );
}
