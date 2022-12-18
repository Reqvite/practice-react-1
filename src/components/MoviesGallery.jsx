export const MoviesGallery = ({ movies, movieModal }) => {
  return (
    <ul>
      {movies.map(({ id, title, backdrop_path }) => (
        <li
          key={id}
          onClick={() => movieModal({ src: backdrop_path, alt: title })}
        >
          <h2>{title}</h2>
          <button>Show poster</button>
        </li>
      ))}
    </ul>
  );
};
