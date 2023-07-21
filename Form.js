
 import React,{useState,useContext} from "react";
import ContextCreated from "../CartContex/CartContex";
export default function Form(props) {
  const [nameInput, setNameInput] = useState(1);
   const {setModalData}=useContext(ContextCreated)

  const inputHandler = (e) => {
    setNameInput(e.target.value);
  };

  const buttonHandler = () => {
    const newData = {
      Id:props.fishId,
      name: props.fishName,
      price: props.fishPrice,
      quantity: parseInt(nameInput),
      cartQuantity:1
    };
    setModalData((prevData) => [...prevData, newData]);
    
   
  };

  return (
    <React.Fragment>
      <span style={{ display: "flex", justifyContent: "end", alignItems: "flex-end" }}>
        <input
          type="number"
          value={nameInput}
          onChange={inputHandler}
          style={{ width: "60px", marginLeft: "10px", marginRight: "5px", borderRadius: "5px", border: "none", height: "20px", position: "relative", top: "-40px", outline: "none" }}
          placeholder="Quantity"
        />
      </span>

      <div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
        <button onClick={buttonHandler} style={{ width: "60px", borderRadius: "5px", marginRight: "5px", marginTop: "5px", backgroundColor: "rgb(78, 21, 21)", color: "white", border: "none", height: "20px", position: "relative", top: "-40px", outline: "none" }}>+Add</button>
      </div>
    </React.Fragment>
  );
}
// +PLUS BUTTUN IS HERE 