function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search"
      placeholder="Поиск фильма..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}

export default SearchBar;
