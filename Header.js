import React from "react";
import "./Header.css"; // Import the CSS file
import Pop from "./Pop";
const Header = () => {
  return (
    <>
<div className="header" >

      <div className="left">React Meals</div>
      <div className="right">
        <i className="fas fa-shopping-cart"></i>
        <h3>your cart</h3>
        <div className="zero">3</div>
      </div>
    </div>
    <div className="foodimage">
    <Pop></Pop>

    </div>
   
    </>
    
  );
};
export default Header;
