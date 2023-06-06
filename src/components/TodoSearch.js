import React from "react";
import "../styles/TodoSearch.css";
function TodoSearch(){
    return (
       <div className="contenedor">
            <input type="text" className="buttonSearch" placeholder="buscar"/>
       </div>
    );
}

export {TodoSearch};