import React, { useState } from 'react';
import '../css/MovieCard.css'

function MovieCard({movie}){
  const [isFavorite, setIsFavorite] = useState(false);

  function onFavoriteClick(){
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="movie-card">
      <div className="movie-image-container">
        <img src={movie.url} alt={movie.title} />
        <button className="favorite-button" onClick={onFavoriteClick}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.release_date}</p>
        <div className="movie-rating">
          <span>⭐</span>
          <span className="rating-value">8.5</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;