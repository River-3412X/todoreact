//import logo from './platzi.webp';
import './App.css';
import React, { useEffect } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoBotton } from './components/CreateTodoButton';

const defaultTodos=[
  {text:"Úno",completed:false},
  {text:"Dos",completed:true},
  {text:"TRes",completed:true},
  {text:"Cuatro",completed:false},
  {text:"Cinco",completed:true},
  {text:"Seis",completed:true},
]; 

function useLocalStorage(){
  const [loading,setLoading]= React.useState(true);
  const [error,setError]= React.useState(false);

  const [storageTodos,setStorageTodos] = React.useState([]);
  var localTodos=[];

  React.useEffect(()=>{
    let responseStorageTodos = localStorage.getItem("todos");
    
    
    if( responseStorageTodos ){
      localTodos = JSON.parse(responseStorageTodos);
    }
    else{
      localTodos=defaultTodos; 
      
    }
    actualizarTodosLocalStorage(localTodos);
    console.log("estamos en el efecto del local Storage");
    setLoading(false);
  },[storageTodos]);
  


  const [todos,setTodos]=React.useState(localTodos);

  const actualizarTodosLocalStorage=(newTodos)=>{
    const stringifyTodos = JSON.stringify(newTodos);

    localStorage.setItem("todos",stringifyTodos);
    setTodos(newTodos);

  };


  const completeTodo=(key)=>{
    const arrayTodos = [...todos];
    const index = todos.findIndex(
      (todo)=>{ return todo.text == key
    });

    arrayTodos[index].completed = true;
    actualizarTodosLocalStorage(arrayTodos);
  }

  const deleteTodo=(key)=>{
    const arrayTodos = [...todos];
    const index = todos.findIndex(
      (todo)=>{ return todo.text == key
    });

    arrayTodos.splice(index,1);
    actualizarTodosLocalStorage(arrayTodos);
  }



  const [valorBusqueda,setValorBusqueda]=React.useState("");

  const totalTodos= todos.length;

  const completedTodos =todos.filter(
    (todos)=>todos.completed==true).length;
  
  const searchedTodos= todos.filter(
    (todo)=>todo.text.includes(valorBusqueda)
  );      

  return {
    todos, completeTodo, deleteTodo,completedTodos,searchedTodos,setValorBusqueda, totalTodos, valorBusqueda,
    loading,setLoading
  };

}


function App() {
  
  useEffect(() => {
    // Esto se ejecuta después de cada renderizado
    console.log("1");
  });
  
  useEffect(() => {
    // Esto sólo se ejecuta en el montaje (cuando el componente aparece)
    console.log(2);
  }, []);
  
  

  const localS = useLocalStorage();


  return (
    <React.Fragment>
      <div className='container'>
        <TodoCounter completed={localS.completedTodos} total={localS.totalTodos} />
        <TodoSearch valorBusqueda={localS.valorBusqueda} setValorBusqueda={localS.setValorBusqueda} />

        { localS.loading && "Cargando..." }
        { localS.error && "Hay un error" }
        {
          (localS.loading==false && localS.todos.length>0) &&
          <TodoList>

            {
              localS.searchedTodos.map(todo=>(
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}
                  onCompleted={
                    ()=>localS.completeTodo(todo.text)
                  }
                  onDelete={ 
                    ()=>localS.deleteTodo(todo.text) 
                  }
                
                />
              
            ))}
          </TodoList>
        }
        {
          (localS.loading==false && localS.todos.length==0) &&
          <h3> Ya no tienes tareas completadas, registraa algunas </h3>
        }

        <CreateTodoBotton />
      </div>
      
    </React.Fragment>
  );
}



export default App;
