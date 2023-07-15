import React, { useState } from "react";

export default function Form() {
  const [nameInput, setNameInput] = useState(1);

  const inputHandler = (e) => {
    setNameInput(e.target.value);
  };
  const formComponent = {
    display: "flex",
    justifyContent: "end",
    alignItems: "flex-end",
    // flexDirection: "column"
    
  };
const formButton={
  display: "flex",
  justifyContent: "end",
  // alignItems: "end",
  // flexDirection: "column",
  alignItems: "center",
  
}
  
  const buttonHandler = (e) => {
    setNameInput(e.target.value);
  };
  return (
    <React.Fragment>
      <span style={formComponent}>
        {/* <label  >Amount</label> */}
        <input type="text" value={nameInput} onChange={inputHandler} style={{width:"60px", marginLeft: "10px",marginRight:"5px",borderRadius: "5px",border:"none",height:"20px", position:"relative",top:"-40px" ,outline:"none" }} placeholder=" Quantity" />
      </span>

      <div  style={formButton}>
      <button onClick={buttonHandler} style={{ width: "60px", borderRadius: "5px", marginRight:"5px", marginTop:"5px" ,backgroundColor:"rgb(78,21,21) ",color:"white",border:"none",height:"20px", position:"relative",top:"-40px" ,outline:"none" }}>+Add</button>

      </div>
    </React.Fragment>
  );
}
