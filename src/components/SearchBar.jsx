function SearchBar({ search, setSearch }) {
  return (
    <input
      placeholder="Поиск..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;