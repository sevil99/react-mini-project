import MovieCard from "./MovieCard";

function MovieList({ movies, onDelete, onToggle }) {
  if (movies.length === 0) {
    return <p className="message">Фильмы не найдены</p>;
  }

  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default MovieList;