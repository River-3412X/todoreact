//import logo from './platzi.webp';
import './App.css';
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoBotton } from './components/CreateTodoButton';

const defaultTodos=[
  {text:"Uno",completed:true},
  {text:"Dos",completed:true},
  {text:"TRes",completed:true},
  {text:"Cuatro",completed:false},
  {text:"Cinco",completed:true},
  {text:"Seis",completed:true},
];

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <TodoCounter completed={10} total={15} />
        <TodoSearch/>

        <TodoList>

          {
            defaultTodos.map(todo=>(
              <TodoItem key={todo.text} text={todo.text} />
            
          ))}
        </TodoList>

        <CreateTodoBotton />
      </div>
      
    </React.Fragment>
  );
}



export default App;
