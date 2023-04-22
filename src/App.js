
import './App.css';
import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
function App() {
  const [todos,setTodos]=useState([]);
  const [todo,setTodo]=useState("");
  
  const addTodo=()=>{
    if(todo!==""){
    setTodos([...todos,todo]);
      setTodo("");
  }
  }
  const deleteTodo=(text)=>{
    const newTodos=todos.filter((todo)=>{
      return todo!==text;
    });
    setTodos(newTodos);
  }
  return (
    <div > 
      <h1>React Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
        
        </div> 
  
  );
}

export default App;
