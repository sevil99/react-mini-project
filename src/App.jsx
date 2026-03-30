import { useState } from "react";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import SearchBar from "./components/SearchBar";
import "./styles.css";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Славные парни", genre: "Криминал", watched: true },
    { id: 2, title: "Крик", genre: "Ужасы", watched: false },
    { id: 3, title: "Солярис", genre: "Драма", watched: true },
    { id: 4, title: "Волк с Уолл-стрит", genre: "Криминал", watched: true },
  ]);

  const [search, setSearch] = useState("");

  // добавление
  function addMovie(movie) {
    setMovies([...movies, movie]);
  }

  // удаление
  function deleteMovie(id) {
    setMovies(movies.filter((m) => m.id !== id));
  }

  // изменение (toggle)
  function toggleMovie(id) {
    setMovies(
      movies.map((m) =>
        m.id === id ? { ...m, watched: !m.watched } : m
      )
    );
  }

  // фильтрация
  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Список фильмов</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <MovieForm onAdd={addMovie} />

      <MovieList
        movies={filteredMovies}
        onDelete={deleteMovie}
        onToggle={toggleMovie}
      />
    </div>
  );
}

export default App;
