import React from 'react';
import './Style.css';

export default function MealList(props) {
  return (
    <>
      <div>
        <ul className="meallist-1">
          {props.title.map((entry) => (
            <li key={entry.id}>
              <h2  style={{fontSize:"20px" , marginTop:"5px"}}>{entry.name}</h2>
              <h5 style={{fontStyle:"italic",marginTop:"5px" }}>{entry.description}</h5>
              <h3 style={{color:'brown' ,marginTop:"5px"}}>{entry.price}</h3>
              <hr ></hr>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
