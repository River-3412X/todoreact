import React from "react";
import "../styles/TodoItem.css";
 function TodoItem(props){
    return(
      <li className="item">
        <span>V</span>
        <p> {props.text} </p>
        <div>
          <span className="delete">X</span>
        </div>
      </li>
    );
  }

  export {TodoItem};