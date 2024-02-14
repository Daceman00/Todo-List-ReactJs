import React, { useState } from 'react'

const TodoItem = ({todo, handleDeleteTask, handleCompleted}) => {

  return (
    <li>
        <input type='checkbox' value={todo.completed} onChange={() => handleCompleted(todo.id)}/>
        <p className={`${todo.completed ? "completed" : ""}`}>{todo.task}</p>
        <button className='button-x' onClick={() => handleDeleteTask(todo.id)}>❌</button>
    </li>
        
  )
}

export default TodoItem