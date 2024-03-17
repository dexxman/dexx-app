import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    console.log(...tasks);
  };

  
  // Update Task
  const updateTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
  };

  // Delete Task
  const removeTask = id => {
    const removedArr = [...tasks].filter(task => task.id !== id);
    setTasks(removedArr);
  };

  // Sort Tasks by Time
  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => new Date(a.date) - new Date(b.date));
    setTasks(sortedTasks);
  };

  return (
    <div>
      <h1>Get Things Done!</h1>
      <h2>You are your own motivation!</h2>
      <TaskForm onSubmit={addTask} />
      <button className='sort-btn' onClick={sortTasks}>Sort Tasks by Time</button>
      <Task tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
    </div>
  );
}

export default App;



