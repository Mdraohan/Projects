import React from 'react';

const TaskHandle = ({ task, deleteTask, toggleTaskCompletion }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  const handleCompletionToggle = () => {
    toggleTaskCompletion(task.id);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCompletionToggle}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskHandle;