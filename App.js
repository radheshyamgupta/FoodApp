import React from "react";
import Header from "./Component/Header";
// import React,{useContext} from 'react';
import MealList from "./Component/MealList/MealList";

function App() {
  const germanFish = [
    {
      name: "Forelle",
      price: "$12.99",
      description: "Forelle is a freshwater trout native to Germany. ",
    },
    {
      name: "Forelle",
      price: "$12.99",
      description: "Forelle is a freshwater trout native to Germany. ",
    },
    {
      name: "Karpfen",
      price: "$9.99",
      description:
        "Karpfen, also known as carp, is a common fish found in German cuisine.",
    },
    {
      name: "Hecht",
      price: "$15.99",
      description:
        "Hecht, or pike, is a predatory fish with a distinct elongated body.",
    },
    {
      name: "Zander",
      price: "$14.99",
      description: "Zander, also known as pike-perch",
    },
    {
      name: "Dorsch",
      price: "$11.99",
      description:
        "Dorsch, or cod, is a versatile fish widely used in German cooking.",
    },
  ];
  return (
    <>
      <Header></Header>
      <MealList title={germanFish}></MealList>
    </>
  );
}

export default App;
