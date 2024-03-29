import React from "react";
import "../styles/CreateTodoButton.css";
function CreateTodoBotton(){
    return(
        <button onClick={
            (event)=>{
                console.log("le diste click al boton +")
                console.log(event);
                console.log(event.target);
            }
        }>
            <span className="add">+</span>
        </button>
    );
}

export {CreateTodoBotton};