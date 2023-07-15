import React from "react";
import "./Style.css";
import "./Form.css";
import Form from "./Form";
export default function MealList(props) {
  return (
    <React.Fragment>
      <div>
         <ul className="meallist-1">
          {props.title.map((entry) => (
            <li key={entry.id}>    
              <h2  style={{fontSize:"20px" , }}>{entry.name}</h2>
              <h5 style={{fontStyle:"italic", }}>{entry.description}</h5> 
             
              <h3 style={{color:'brown' }}>{entry.price}</h3>
              <Form></Form>
              

              <hr ></hr>
            </li>
          ))}
        </ul> 
         
      </div>
    </React.Fragment>
  );
}
// thisis margin top for marginTop:"5px" h2
// ths is margin top for h5 marginTop:"5px"
//,marginTop:"5px"
