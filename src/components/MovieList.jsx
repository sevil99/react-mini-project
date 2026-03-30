import MovieCard from "./MovieCard";

function MovieList({ movies, onDelete, onToggle }) {
  if (movies.length === 0) {
    return <p>Список пуст</p>; // условный рендеринг
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id} // key обязателен
          movie={movie}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default MovieList;