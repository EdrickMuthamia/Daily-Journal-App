function Home() {
  return (
    <div className="home">
      <h1>Welcome to Daily Journal</h1>
      <p>Write and manage your daily thoughts</p>
      <button onClick={() => window.location = '/add'} className="btn">Write New Entry</button>
      <button onClick={() => window.location = '/entries'} className="btn">View Entries</button>
    </div>
  );
}

export default Home;