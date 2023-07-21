

import React, { useContext } from "react";
import "./Header.css";
import Pop from "./Pop";
import ContextCreated from "./CartContex/CartContex";

const Header = (props) => {
  const { modalData } = useContext(ContextCreated);

 
  const totalQuantity = modalData.reduce((total, item) => total + item.cartQuantity, 0);



  return (
    <React.Fragment>
      <div className="header">
        <div className="left">React Meals</div>
        <div className="right">
          <i className="fas fa-shopping-cart" onClick={props.onShow} style={{ cursor: "pointer" }}></i>
          <h3 onClick={props.onShow} style={{ cursor: "pointer" }}>your cart</h3>
          
          <div className="zero" style={{ cursor: "pointer" }}>{totalQuantity}</div>
        </div>
      </div>

      <div className="foodimage">
        <Pop></Pop>
      </div>
    </React.Fragment>
  );
};

export default Header;

