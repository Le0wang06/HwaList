import React, { useState } from 'react';

function MovieCard({movie}){
  const [isFavorite, setIsFavorite] = useState(false);

  function onFavoriteClick(){
    setIsFavorite(!isFavorite);
  }

  return (
    <div>
      <div>
        <img src={movie.url} alt={movie.title} />
        <div>
          <button onClick={onFavoriteClick}>
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <div>
          <span>⭐</span>
          <span>8.5</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;