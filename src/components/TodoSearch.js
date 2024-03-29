import React from "react";
import "../styles/TodoSearch.css";
function TodoSearch({ valorBusqueda,setValorBusqueda }){
    

    return (
       <div className="contenedor">
            <input type="text" className="buttonSearch" placeholder="buscar"
                value={valorBusqueda}
                onChange={
                    (event)=>{
                        console.log(event.target.value);
                        setValorBusqueda(event.target.value);
                    }
                }
                
            />
       </div>  
    );
}

export {TodoSearch};