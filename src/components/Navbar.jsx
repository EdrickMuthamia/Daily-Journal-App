function Navbar() {
  return (
    <nav className="navbar">
      <h2><button onClick={() => window.location = '/'}>Daily Journal</button></h2>
      <div>
        <button onClick={() => window.location = '/'}>Home</button>
        <button onClick={() => window.location = '/entries'}>Entries</button>
        <button onClick={() => window.location = '/add'}>Add Entry</button>
      </div>
    </nav>
  );
}

export default Navbar;