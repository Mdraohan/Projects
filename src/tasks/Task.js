import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddForm';
import './task.css'

function Task() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='form-style' >
      <h1 className='m-2'>Task Manager</h1>
      <div>
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
      </div>
    </div>
  );
}

export default Task;