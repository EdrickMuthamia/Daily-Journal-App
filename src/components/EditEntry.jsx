import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function EditJournal() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("happy");

  // GET - Load existing data
  useEffect(() => {
    fetch(`http://localhost:3001/entries/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setDate(data.date);
        setMood(data.mood);
      });
  }, [id]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/entries/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, date, mood }),
    });
  };

  return (
    <div className="edit-entry">
      <h2>Edit Entry</h2>
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
        <button type="submit" className="btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditJournal;