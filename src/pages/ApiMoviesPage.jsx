import { useEffect, useState } from "react";

function ApiMoviesPage() {
  const [apiMovies, setApiMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }

        return response.json();
      })
      .then((data) => {
        setApiMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="message">Загрузка фильмов...</p>;
  }

  if (error) {
    return <p className="message error">Ошибка: {error}</p>;
  }

  return (
    <div className="page">
      <h1>Фильмы из API</h1>

      <div className="grid">
        {apiMovies.map((movie) => (
          <div className="card" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Режиссёр: {movie.director}</p>
            <p>Год: {movie.release_date}</p>
            <p>{movie.description.slice(0, 120)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiMoviesPage;
