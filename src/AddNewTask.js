import React, { useState } from 'react'
import Button from './Button'

const AddNewTask = ({handleAddNewTask}) => {
    const [task, setTask] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const id = crypto.randomUUID()
        const newTask = {
            id: id,
            task,
            completed: false
        }
        handleAddNewTask(newTask)
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>Enter new task:</label>
                <input type='text' className='input-field' value={task} onChange={(e) => setTask(e.target.value)} />
                <Button>Add Task</Button>
            </form>
        </div>

    )
}

export default AddNewTask