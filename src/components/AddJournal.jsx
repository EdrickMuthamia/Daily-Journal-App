import { useState } from 'react';

function AddJournal() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(new Date());
  const [mood, setMood] = useState('happy');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // POST request - add new entry with all fields
    fetch('http://localhost:3001/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, date, mood })
    });
    
    // Clear the form after submission
    setTitle('');
    setContent('');
    setDate(new Date());
    setMood('happy');
  };

  
  return (
    <div className="add-journal">
      <h2>Add Entry</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="excited">Excited</option>
          <option value="neutral">Neutral</option>
        </select>
        <textarea 
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <button type="submit" className="btn">Add</button>
      </form>
    </div>
  );
}

export default AddJournal;