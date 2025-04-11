import React, { useState } from 'react';
import '../css/MovieCard.css'

function MovieCard({manga}){
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageSrc, setImageSrc] = useState(manga.url || '');
  const [isUploading, setIsUploading] = useState(false);

  function onFavoriteClick(e){
    e.preventDefault();
    setIsFavorite(!isFavorite);
  }

  function handleImageUpload(e){
    e.preventDefault();
    e.stopPropagation();
    setIsUploading(true);
    
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } else {
      setIsUploading(false);
    }
  }

  return (
    <a href={`/manga/${manga.id}`} className="movie-card">
      <div className="movie-image-container">
        {imageSrc ? (
          <img src={imageSrc} alt={manga.title} />
        ) : (
          <div className="image-placeholder">
            <span>No Image</span>
          </div>
        )}
        
        <label className="upload-image-button" htmlFor={`image-upload-${manga.id}`}>
          {isUploading ? 'Uploading...' : '📷 Upload Image'}
          <input 
            type="file" 
            id={`image-upload-${manga.id}`}
            accept="image/*"
            onChange={handleImageUpload}
            onClick={(e) => e.stopPropagation()} 
            style={{ display: 'none' }}
          />
        </label>
        
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