import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


const AddForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuid(),
      name,
      description,
      dueDate,
      completed: false,
    };

    addTask(newTask);

    // Reset form fields
    setName('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div >
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='m-1'
        />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='m-1'
      ></textarea>
      <input
        type="text"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className='m-1'
      />
      <button type="submit">Add Task</button>
    </form>
    </div>
  );
};

export default AddForm;