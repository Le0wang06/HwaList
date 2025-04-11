import React, { useState } from 'react';
import '../css/MovieCard.css'

function MovieCard({manga}){
  const [isFavorite, setIsFavorite] = useState(false);

  function onFavoriteClick(e){
    e.preventDefault();
    setIsFavorite(!isFavorite);
  }

  // Determine the link target - use external link if provided, otherwise use internal route
  const getCardLink = () => {
    // Check if manga has externalLink property
    if (manga.externalLink) {
      return manga.externalLink;
    }
    // Otherwise use default internal link
    return `/manga/${manga.id}`;
  }

  const isExternalLink = manga.externalLink ? true : false;

  return (
    <a 
      href={getCardLink()} 
      className="movie-card"
      target={isExternalLink ? "_blank" : "_self"}
      rel={isExternalLink ? "noopener noreferrer" : ""}
    >
      <div className="movie-image-container">
        {manga.url ? (
          <img src={manga.url} alt={manga.title} />
        ) : (
          <div className="image-placeholder">
            <span>No Image</span>
          </div>
        )}
        
        {manga.status && (
          <div className={`status-badge ${manga.status.toLowerCase()}`}>
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
          <span className="rating-value">{manga.rating || '8.5'}</span>
          <span className="movie-year">• {manga.chapters || '??'} chapters</span>
        </div>
      </div>
    </a>
  );
}

export default MovieCard;