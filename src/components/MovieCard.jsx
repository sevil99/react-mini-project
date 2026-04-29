function MovieCard({ movie, onDelete, onToggle }) {
  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <p>Жанр: {movie.genre}</p>

      <p>
        Статус:{" "}
        {movie.watched ? "Просмотрен" : "Не просмотрен"}
      </p>

      <button onClick={() => onToggle(movie.id)}>
        Изменить статус
      </button>

      <button onClick={() => onDelete(movie.id)}>
        Удалить
      </button>
    </div>
  );
}

export default MovieCard;
