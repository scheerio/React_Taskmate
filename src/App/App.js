
import React, { useState, useRef } from 'react';
import TodoList from '../components/TodoList';
import './App.css';

function App() {

  let [tasks, setTasks] = useState([]);
  let newTaskRef = useRef();

  const handleAddTask = () => {
    let name = newTaskRef.current.value;
    let id = Math.floor(Math.random()*1000000)+1;
    let newTask = {
      'id': id,
      'name' : name,
      'complete': false
    };
    setTasks((prev)=>{
      return [...prev, newTask];
    });
    newTaskRef.current.value = "";
  }

  const handleToggle = (id) => {
    let newTasks = [...tasks];
    let taskToToggle = newTasks.find((task)=>task.id === id);
    taskToToggle.complete = !taskToToggle.complete;
    setTasks(newTasks);
  }

  const handleClearCompleted = () => {
    let newTasks = [...tasks].filter(task => !task.complete);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <div className="stats">
        <p>Number of tasks overall: {tasks.length}</p>
        <p>Number of tasks not completed: {tasks.filter((task)=>(!task.complete)).length}</p>
        <p>Number of tasks completed: {tasks.filter((task)=>(task.complete)).length}</p>
      </div>
      <div className="form">
        <input className="task-input" ref={newTaskRef} type="text" placeholder="enter a task"/>
        <button onClick={handleAddTask}>Submit</button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      <TodoList tasks={tasks} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
