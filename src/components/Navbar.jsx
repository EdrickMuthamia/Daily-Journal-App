function Navbar() {
  return (
    <nav className="navbar">
      <h2><button onClick={() => window.location.href = '/'}>Daily Journal</button></h2>
      <div>
        <button onClick={() => window.location.href = '/'}>Home</button>
        <button onClick={() => window.location.href = '/entries'}>Entries</button>
        <button onClick={() => window.location.href = '/add'}>Add Entry</button>
      </div>
    </nav>
  );
}

export default Navbar;