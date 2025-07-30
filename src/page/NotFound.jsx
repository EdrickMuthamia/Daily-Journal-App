import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}

export default NotFound;