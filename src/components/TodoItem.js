import React from "react";
import "../styles/TodoItem.css";
import { GoHistory } from "react-icons/go";
import { GoCheck } from "react-icons/go";
import { MdDelete } from "react-icons/md";

const estilos = {
  backgroundColor: "yellow",
  fontSize: 25,
  margin: 0,
  borderRadius: 10,
  padding: 10,
  textAlign: "center"
};

console.log("se renderiza el componente otra cez");

function TodoItem(props) {


  return (
    
    <li className="item">
      <span
        onClick={() => {
          
          if (props.completed == false) {
            props.onCompleted();
          }
        }}
      > 
       {
        props.completed==true?
          <GoCheck className="completed-icon"/>
        :
          <GoHistory className="incompleted-icon"/>
       }

      </span>
      <p className={`${props.completed == true && "completed"}`}
        style={estilos}
      >
        {props.text}
      </p>
      <div>
        <span className="delete"
          onClick={ ()=>{
              props.onDelete();
            } 
          }
        >
          <MdDelete />
        </span>
      </div>
    </li>
  );
}

export { TodoItem };