function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <button onClick={() => window.location.href = '/'} className="btn">Go Home</button>
    </div>
  );
}

export default NotFound;