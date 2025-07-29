import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2><Link to="/">Daily Journal</Link></h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/entries">Entries</Link>
        <Link to="/add">Add Entry</Link>
      </div>
    </nav>
  );
}

export default Navbar;