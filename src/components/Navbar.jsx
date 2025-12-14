export default function Navbar() {
  return (
    <div className="navbar">
      <div className="reddit-logo">reddit</div>
      <input
        className="search-bar"
        placeholder="Search Reddit..."
      />
      <button className="button">Log In</button>
    </div>
  );
}
