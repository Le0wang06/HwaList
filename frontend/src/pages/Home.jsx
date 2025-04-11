import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css'

function Home(){
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Action", "Romance", "Fantasy", "Comedy", "Drama", "Slice of Life"];
  
  const manga = [
    {
      id: 1, 
      title: "Solo Leveling", 
      status: "Completed",
      chapters: 179,
      rating: "9.2",
      genres: ["Action", "Adventure", "Fantasy"],
      url: "/sololeveling.jpg",
      externalLink: "https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling?srsltid=AfmBOoqkKjQ37JgjvbqU_hWfHsmyw7fopI76B7Q42sH0TbSb63rH4Og_"
    },
    {
      id: 2, 
      title: "The Beginning After the End", 
      status: "Ongoing",
      chapters: 160,
      rating: "9.0",
      genres: ["Fantasy", "Action", "Romance"],
      url: "/thebegin.jpg",
      externalLink: "https://www.crunchyroll.com/series/G24H1NWKE/the-beginning-after-the-end?srsltid=AfmBOoqIE3JqnQRyIxo6c4hlyWco8mYAbEuvpqyWHxXEk-QV2r704xm_"
    },
    {
      id: 3, 
      title: "Omniscient Reader's Viewpoint", 
      status: "Ongoing",
      chapters: 140,
      rating: "9.1",
      genres: ["Action", "Fantasy", "Drama"],
      url: "/omniscient.jpg",
      externalLink: "https://www.webtoons.com/en/action/omniscient-reader/list?title_no=2154&page=1https://webtoons.com/en/action/omniscient-reader/list?title_no=2154"
    },
    {
      id: 4, 
      title: "Tower of God", 
      status: "Ongoing",
      chapters: 550,
      rating: "8.9",
      genres: ["Fantasy", "Adventure", "Mystery"],
      url: "/towerofgod.jpg",
      externalLink: "https://www.webtoons.com/en/fantasy/tower-of-god/list?title_no=95"
    }
    ,
    {
      id: 5, 
      title: "True Beauty", 
      status: "Ongoing",
      chapters: 223,
      rating: "8.7",
      genres: ["Romance", "Comedy", "Drama"],
      url: "",
      externalLink: "https://www.webtoons.com/en/romance/truebeauty/list?title_no=1436"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
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
              key={category}
              className={`category-filter ${category === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="movies-grid">
          {filteredManga.map((manga) => (
            <MovieCard manga={manga} key={manga.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;