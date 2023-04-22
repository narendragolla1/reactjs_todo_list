import React from 'react'

export default function TodoList({todos,deleteTodo}) {
  return (
    <>
    {todos?.length>0?(
    <ul className="todo-list">
      {todos.map((todo,index)=>
        <div className="todo">
          <li key={index}>{todo}</li>
          <button className="delete-button" onClick={()=>{
            deleteTodo(todo);
          }}>
            Delete
            </button>
        </div>
      )}
    </ul>
  ):(
    <div className="empty">
      <p>No task found</p>
    </div>
  )}
    </>
  )
}

