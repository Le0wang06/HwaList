import React, { useState } from 'react';
import '../css/MovieCard.css'

function MovieCard({manga}){
  const [isFavorite, setIsFavorite] = useState(false);

  function onFavoriteClick(e){
    e.preventDefault();
    setIsFavorite(!isFavorite);
  }

  return (
    <a href={`/manga/${manga.id}`} className="movie-card">
      <div className="movie-image-container">
        <img src={manga.url} alt={manga.title} />
        {manga.status && (
          <div className="status-badge">
            {manga.status}
          </div>
        )}
        <button 
          className={`favorite-button ${isFavorite ? 'active' : ''}`} 
          onClick={onFavoriteClick}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{manga.title}</h3>
        <div className="genre-tags">
          {manga.genres?.map((genre, index) => (
            <span key={index} className="genre-tag">{genre}</span>
          ))}
        </div>
        <div className="movie-rating">
          <span>⭐</span>
          <span className="rating-value">{manga.rating || '8.5'}</span>
          <span className="movie-year">• {manga.chapters || '??'} chapters</span>
        </div>
      </div>
    </a>
  );
}

export default MovieCard;