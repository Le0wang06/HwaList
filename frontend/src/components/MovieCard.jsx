import React, { useState } from 'react';

function MovieCard({movie}){
  const [isFavorite, setIsFavorite] = useState(false);

  function onFavoriteClick(){
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button 
            className={`favorite-button ${isFavorite ? 'active' : ''}`} 
            onClick={onFavoriteClick}
            aria-label="Add to favorites"
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="release-year">{movie.release_date}</p>
        <div className="movie-rating">
          <span className="stars">⭐</span>
          <span className="rating">8.5</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;