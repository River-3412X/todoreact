import React from 'react'

const estilos={
  fontSize:"25px",
  textAlign:"center"  
}
function TodoCounter({completed,total}) {
  return (
    total==completed?
    <h1 style={estilos}>
      <strong>Haz Completado todas las Tareas!</strong>
    </h1>

    :
    <h1 style={estilos}>
      Has completado <strong>{completed}</strong>  de <strong >{total}</strong> TODOS
    </h1>
  )
}

export {TodoCounter} ;