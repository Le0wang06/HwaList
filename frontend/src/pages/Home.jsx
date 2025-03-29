import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home(){
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    {id: 1, title: "Inception", release_date: "2010", url: "https://via.placeholder.com/150"},
    {id: 2, title: "Interstellar", release_date: "2014", url: "https://via.placeholder.com/150"},
    {id: 3, title: "The Dark Knight", release_date: "2008", url: "https://via.placeholder.com/150"},
    {id: 4, title: "The Matrix", release_date: "1999", url: "https://via.placeholder.com/150"},
    {id: 5, title: "The Dark Knight Rises", release_date: "2012", url: "https://via.placeholder.com/150"}
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search for a movie" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      <div>
        {movies.map((movie) => 
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
            <MovieCard movie={movie} key={movie.id} />
          )
        )}
      </div>
    </div>
  );
}

export default Home;