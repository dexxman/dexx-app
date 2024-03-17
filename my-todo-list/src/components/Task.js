import React,{useState} from 'react'


function Task({ tasks, removeTask, updateTask }) {
  

  return tasks.map((task, index) => (
    <div key={index}>
      <div key={task.id}>
        {task.text} - {task.date}
        <button className='delete-btn' onClick={() => removeTask(task.id)}>Delete</button>
        <button className='edit-btn' onClick={() =>  (task.id)}>Edit</button>
      </div>
    </div>
  ));
}

export default Task;
