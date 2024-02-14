import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleDeleteTask, handleCompleted }) => {
    const [sortBy, setSortBy] = useState("added")

    let sortedTodos;

    if(sortBy === "added")
        sortedTodos = todos;

    if(sortBy === "completed")
        sortedTodos = todos.slice().sort((a,b) => (Number(a.completed)) - (Number(b.completed)))

    if(sortBy === "alphabet")
        sortedTodos = todos.slice().sort((a,b) => a.task.localeCompare(b.task))

    return (
        <>
            <div className='todo-list'>
                <ul>
                    {sortedTodos.map((todo) => (
                        <TodoItem todo={todo} key={todo.id} handleDeleteTask={handleDeleteTask} handleCompleted={handleCompleted}/>
                    ))}
                </ul>
            </div>
            <select className='select' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="added">Sort by last added</option>
                <option value="completed">Sort by completed</option>
                <option value="alphabet">Sort by alphabet</option>
            </select>
        </>
    )
}

export default TodoList