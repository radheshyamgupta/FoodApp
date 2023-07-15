import React from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css"

const Modal = () => {

    return ReactDOM.createPortal(
    <div className="modal" >
      <div className="modal-content" >
       <p> Shushi</p> 
        <h1><span>Total Amount</span> <span>35.56</span></h1>
        <div style={{position:"absolute" ,bottom:"0",right:"0",paddingBottom:"0 5px 5px 0",margin:"0 ,3px"}}> 
        <button>Close</button>
        <button>Order</button>
        </div>
        
      </div>
    </div>,
    
    document.getElementById('modal-id')
  );
};

export default Modal;
