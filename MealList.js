import React from "react";
import "./MealList.css";
import "./Form.css";
import Form from "./Form";
export default function MealList(props) {
  return (
    <React.Fragment>
      <div>
        <ul className="meallist-1">
          {props.title.map((entry) => (
            <li key={entry.id}>
              <h2 style={{ fontSize: "20px" }}>{entry.name}</h2>
              <h5 style={{ fontStyle: "italic" }}>{entry.description}</h5>

              <h3 style={{ color: "brown" }}>{entry.price}</h3>
              <Form
                fishId={entry.id}
                fishName={entry.name}
                fishPrice={entry.price}
                fishDescription={entry.description}
              >
              </Form>

              <hr></hr>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
