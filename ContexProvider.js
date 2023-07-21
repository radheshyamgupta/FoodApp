import React,{useState} from "react";
import ContextCreated from "./CartContex";
export default function ContexProvider(props) {
    const [modalData, setModalData] = useState([]);
  return (
    <ContextCreated.Provider value={{modalData,setModalData}}>
    {props.children}
    </ContextCreated.Provider>
  )
 
}
