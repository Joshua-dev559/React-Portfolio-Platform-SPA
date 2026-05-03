export default function SearchBar({ setSearch }) {
  return (
    <input
      className="search"
      placeholder="Search projects..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}