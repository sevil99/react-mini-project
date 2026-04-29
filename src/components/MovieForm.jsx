import { useState } from "react";

function MovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !genre.trim()) {
      return;
    }

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
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Название фильма"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        placeholder="Жанр"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      />

      <button type="submit">Добавить</button>
    </form>
  );
}

export default MovieForm;
