import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import ContextCreated from "../CartContex/CartContex";

function Modal(props) {
  const { modalData, setModalData } = useContext(ContextCreated);

  const handleOrderButtonClick = (event) => {
    event.stopPropagation();
  };

  const handleIncreaseQuantity = (itemIndex) => {
    const updatedModalData = [...modalData];

    updatedModalData[itemIndex].quantity++;

    setModalData(updatedModalData);
  };

 
  const handleDecreaseQuantity = (itemIndex) => {
    const updatedModalData = [...modalData];
  
    if (updatedModalData[itemIndex].quantity > 0) {
      updatedModalData[itemIndex].quantity--;
    }
  
    updatedModalData[itemIndex].hidden = updatedModalData[itemIndex].quantity === 0;
  
    setModalData(updatedModalData);
  };
  


  // const totalAmount = modalData.reduce((total, item) => {
  //   const itemPrice = parseFloat(item.price.replace(" ₹", ""));
  //   const itemQuantity = parseInt(item.quantity, 10);

  //   if (!isNaN(itemPrice) && !isNaN(itemQuantity) && itemQuantity >= 0) {
  //     return total + itemPrice * itemQuantity;
  //   } else {
  //     return total;
  //   }
  // }, 0);
  let totalAmount = 0;

for (let i = 0; i < modalData.length; i++) {
  const itemPrice = parseFloat(modalData[i].price.replace(" ₹", ""));
  const itemQuantity = parseInt(modalData[i].quantity, 10);

  if (!isNaN(itemPrice) && !isNaN(itemQuantity) && itemQuantity >= 0) {
    totalAmount += itemPrice * itemQuantity;
  }
}


  return ReactDOM.createPortal(
    <div className="modal" onClick={props.hideModal}>
      <div className="modal-content" onClick={handleOrderButtonClick}>
        <ul>
          <h1>Your cart items</h1>

          {modalData.map((item, index) => 
          !item.hidden && (
            <li key={index}>
              <h4> Fish {item.name}</h4>
              <p> Price:{item.price} </p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncreaseQuantity(index)}>
                +Quantity
              </button>
              <button onClick={() => handleDecreaseQuantity(index)}>
                -Quantity
              </button>

              <hr></hr>
            </li>
          ))}
        </ul>
        <div className="buttonstyle">
          <div>
            <div>
              <h2>Total Amount: ₹{totalAmount.toFixed(2)}</h2>
            </div>
          </div>
          <div>
            <button onClick={props.hideModal}>Close</button>
            <button>Order</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-id")
  );
}

export default Modal;
