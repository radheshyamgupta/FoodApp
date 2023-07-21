import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import ContextCreated from "../CartContex/CartContex";

function Modal(props) {
  const { modalData, setModalData } = useContext(ContextCreated);

  const handleOrderButtonClick = (event) => {
    event.stopPropagation();
    // Handle the order action here
  };

  const handleIncreaseQuantity = (itemIndex) => {
    // Create a shallow copy of the modalData array
    const updatedModalData = [...modalData];

    // Increase the quantity of the specific item
    updatedModalData[itemIndex].quantity++;

    // Update the state with the updated modalData
    setModalData(updatedModalData);
  };

  const handleDecreaseQuantity = (itemIndex) => {
    // Create a shallow copy of the modalData array
    const updatedModalData = [...modalData];

    // Decrease the quantity of the specific item
    if (updatedModalData[itemIndex].quantity > 0) {
      updatedModalData[itemIndex].quantity--;
    }

    // Update the state with the updated modalData
    setModalData(updatedModalData);
  };

  // Calculate the total amount of the cart items
  const totalAmount = modalData.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace(" ₹", ""));
    const itemQuantity = parseInt(item.quantity, 10);

    // Check for valid numbers
    if (!isNaN(itemPrice) && !isNaN(itemQuantity) && itemQuantity >= 0) {
      return total + itemPrice * itemQuantity;
    } else {
      // Invalid data, return the current total unchanged
      return total;
    }
  }, 0);

  return ReactDOM.createPortal(
    <div className="modal" onClick={props.hideModal}>
      <div className="modal-content" onClick={handleOrderButtonClick}>
        <ul>
          <h1>Your cart items</h1> 

          {modalData.map((item, index) => (
            <li key={index}>
              <h4>  Fish {item.name}</h4> 
             <p>  Price:{item.price} </p>
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
<div  className="buttonstyle">


        <div> 
          <div>
            <h2>Total Amount:   ₹{totalAmount.toFixed(2)}</h2>
          </div>
        </div>

        {/* <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            paddingBottom: "0 5px 5px 0",
            margin: "0, 3px",
          }}
        >
          <button onClick={props.hideModal} >Close</button>
          <button onClick={handleOrderButtonClick}>Order</button>
        </div> */}
        <div>
          <button onClick={props.hideModal}>Close</button>
          <button onClick={handleOrderButtonClick}>Order</button>
        </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-id")
  );
}

export default Modal;
