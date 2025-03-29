import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home(){
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    {id: 1, title: "Inception", release_date: "2010"},
    {id: 2, title: "Interstellar", release_date: "2014"},
    {id: 3, title: "The Dark Knight", release_date: "2008"},
    {id: 4, title: "The Matrix", release_date: "1999"},
    {id: 5, title: "The Dark Knight Rises", release_date: "2012"},
    
  ]

  const handleSearch = () => {
    alert(searchQuery);
  }
    return <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Search for a movie" 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      
      <div className="movie-grid">
        {movies.map((movie) => 
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
            <MovieCard movie={movie} key={movie.id} />
          )
        )}
      </div>
    </div>
}

export default Home;