import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import ApiMoviesPage from "./pages/ApiMoviesPage";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Славные парни", genre: "Криминал", watched: true },
    { id: 2, title: "Крик", genre: "Ужасы", watched: false },
    { id: 3, title: "Солярис", genre: "Драма", watched: true },
    { id: 4, title: "Волк с Уолл-стрит", genre: "Криминал", watched: true },
  ]);

  function addMovie(movie) {
    setMovies([...movies, movie]);
  }

  function deleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  function toggleMovie(id) {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      )
    );
  }

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/movies"
          element={
            <MoviesPage
              movies={movies}
              onAdd={addMovie}
              onDelete={deleteMovie}
              onToggle={toggleMovie}
            />
          }
        />

        <Route path="/api-movies" element={<ApiMoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
