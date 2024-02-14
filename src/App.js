import { useState } from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import AddNewTask from "./AddNewTask";
import Button from "./Button";


function App() {
  const [todos, setTodos] = useState([]);
  const [showAddNewTask, setShowAddNewTask] = useState(false);

  function handleShowAddTask() {
    setShowAddNewTask((s) => !s)
  }

  function handleAddNewTask(newTodo){
    setTodos((todo) => [...todo, newTodo])
    setShowAddNewTask(false)
  }

  function handleDeleteTask(id){
    setTodos((todos) => (todos.filter((todo) => (todo.id !== id ))))
  }

  function handleCompleted(id){
    setTodos((todos) => (todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  return (
    <div className="container">
      <Navbar />
      <Button onClick={handleShowAddTask}>{showAddNewTask ? "Close" : "Add New Task"}</Button>
      {showAddNewTask && <AddNewTask handleAddNewTask={handleAddNewTask}/>}
      <TodoList todos={todos} handleDeleteTask={handleDeleteTask} handleCompleted={handleCompleted}/>
    </div>
  );
}

export default App;
