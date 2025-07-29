import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Daily Journal</h1>
      <p>Write and manage your daily thoughts</p>
      <Link to="/add" className="btn">Write New Entry</Link>
      <Link to="/entries" className="btn">View Entries</Link>
    </div>
  );
}

export default Home;