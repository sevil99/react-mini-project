import { useState } from "react";

function MovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;

    onAdd({
      id: Date.now(),
      title,
      genre,
      watched: false,
    });

    setTitle("");
    setGenre("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Жанр"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <button type="submit">Добавить</button>
    </form>
  );
}

export default MovieForm;