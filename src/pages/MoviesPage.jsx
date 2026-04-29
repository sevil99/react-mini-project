import { useState } from "react";
import MovieForm from "../components/MovieForm";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

function MoviesPage({ movies, onAdd, onDelete, onToggle }) {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const watchedCount = movies.filter((movie) => movie.watched).length;

  return (
    <div className="page">
      <h1>Мой список фильмов</h1>

      <p>Всего фильмов: {movies.length}</p>
      <p>Просмотрено: {watchedCount}</p>

      <SearchBar search={search} setSearch={setSearch} />

      <MovieForm onAdd={onAdd} />

      <MovieList
        movies={filteredMovies}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    </div>
  );
}

export default MoviesPage;
