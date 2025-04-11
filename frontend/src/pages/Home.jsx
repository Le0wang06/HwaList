import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../css/Home.css';
import { fetchAllManga, fetchCategories } from "../services/api";

function Home(){
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [manga, setManga] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Fetch manga data
        const mangaData = await fetchAllManga();
        setManga(mangaData);
        
        // Fetch categories
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
        
        setLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // You could implement additional search functionality here
  }

  const filteredManga = manga.filter(m => {
    const matchesSearch = 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = 
      activeCategory === "All" || 
      m.genres.includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading amazing manga...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="content-wrapper">
        <h1 className="section-title">Discover Amazing Manga</h1>
        <p className="section-subtitle">Find your next favorite series</p>

        <form className="search-form" onSubmit={handleSearch}>
          <input 
            className="search-input"
            type="text" 
            placeholder="Search by title or genre..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${category.name === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="movies-grid">
          {filteredManga.length > 0 ? (
            filteredManga.map((manga) => (
              <MovieCard manga={manga} key={manga.id} />
            ))
          ) : (
            <div className="no-results">
              <h3>No manga found</h3>
              <p>Try changing your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;