import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
// import React,{useContext} from 'react';
import MealList from "./Component/MealList/MealList";
import Modal from "./Component/Modal/Modal";


function App() {
  const [showmodal, setshowModal] = useState(false);
  const [update,setUpdate]=useState([])
  useEffect(() => {
    if (!showmodal) {
      setshowModal(true);
    }
  }, []);
  const hideModalIcon = () => {
    setshowModal(false);
  };
  const showmodalIcon = () => {
    setshowModal(true);
  };
  const germanFish = [
    {
      name: "Forelle-a",
      id:1,
      price: " ₹10",
      description: "Forelle is a freshwater trout native to Germany. ",
    },
    {
      name: "Forelle",
      id:2,
      price: " ₹15",
      description: "Forelle is a freshwater trout native to Germany. ",
    },
    {
      name: "Karpfen",
      id:3,
      price: " ₹20",
      description:
        "Karpfen, also known as carp, is a common fish found in German cuisine.",
    },
    {
      name: "Hecht",
      price: " ₹30",
      id:4,
      description:
        "Hecht, or pike, is a predatory fish with a distinct elongated body.",
    },
    {
      name: "Zander",
      price: " ₹50",
      id:5,
      description: "Zander, also known as pike-perch",
    },
    {
      name: "Dorsch",
      id:6,
      price: " ₹60",
      description:
        "Dorsch, or cod, is a versatile fish widely used in German cooking.",
    },
  ];

  return (
    <>
       <Header onShow={showmodalIcon}></Header>
      <MealList title={germanFish}></MealList>
      {showmodal && (
        <Modal hideModal={hideModalIcon} onShow={showmodalIcon}></Modal>
      )}
   
    </>
   
  );
}

export default App;
