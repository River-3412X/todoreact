import React from 'react'

const estilos={
  fontSize:"25px",
  textAlign:"center"  
}
function TodoCounter({completed,total}) {
  return (
    <h1 style={estilos}>
      Has completado 
      <strong 
        style={{
          color:"brown"
        }}>{completed}</strong>  de 
      <strong 
        style={{
          color:"brown"
        }}>{total}</strong> TODOS
    </h1>
  )
}

export {TodoCounter} ;