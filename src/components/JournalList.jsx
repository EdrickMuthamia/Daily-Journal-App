import { useState, useEffect } from 'react';

function JournalList() {
  const [entries, setEntries] = useState([]);

  // Load my journal entries when page opens
  useEffect(() => {
    // get all entries from my database
    fetch("http://localhost:3001/entries")
      .then((response) => response.json())
      .then((data) => {
        setEntries(data);
      });
  }, []);

  // Function to delete an entry
  const handleDelete = (entryId) => {
    if (confirm('Are you sure you want to delete this?')) {
      fetch(`http://localhost:3001/entries/${entryId}`, {
        method: "DELETE",
      }).then(() => {
        // remove from the list after deleting
        const updatedEntries = entries.filter((entry) => entry.id !== entryId);
        setEntries(updatedEntries);
      });
    }
  };

  return (
    <div className="journal-list">
      <h2>My Journal Entries</h2>

      
      {entries.map(entry => (
        <div key={entry.id} className="entry">
          <h3>{entry.title}</h3>
          <p>Date: {entry.date}</p>
          <p>Mood: {entry.mood}</p>
          <p>{entry.content}</p>
          <button onClick={() => window.location.href = `/edit/${entry.id}`} className="btn">Edit</button>
          <button onClick={() => handleDelete(entry.id)} className="btn">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default JournalList;