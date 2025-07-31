import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="home">
      <h1>Welcome to Daily Journal</h1>
      <p>Write and manage your daily thoughts</p>
      <button onClick={() => navigate('/add')} className="btn">Write New Entry</button>
      <button onClick={() => navigate('/entries')} className="btn">View Entries</button>
    </div>
  );
}

export default Home;