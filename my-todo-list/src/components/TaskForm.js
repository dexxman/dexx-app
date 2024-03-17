import React,{useState} from 'react'


function TaskForm(props) {
  const [input, setInput] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      date: date
    });

    setInput('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is the task for today?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input className='date-input'
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className='add-btn'>Add task</button>
    </form>
  );
}

export default TaskForm;
  