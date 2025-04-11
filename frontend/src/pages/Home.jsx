import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css';

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
      url: "public/sololeveling.jpg",
      externalLink: "https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling"
    },
    {
      id: 2, 
      title: "Tower of God", 
      status: "Ongoing",
      chapters: 550,
      rating: "8.9",
      genres: ["Fantasy", "Adventure", "Mystery"],
      url: "public/towerofgod.jpg",
      externalLink: "https://www.webtoons.com/en/fantasy/tower-of-god/list?title_no=95"
    },
    {
      id: 3, 
      title: "The Beginning After the End", 
      status: "Ongoing",
      chapters: 160,
      rating: "9.0",
      genres: ["Fantasy", "Action", "Romance"],
      url: "public/thebegin.jpg",
      externalLink: "https://tapas.io/series/TBATE"
    },
    {
      id: 4, 
      title: "Omniscient Reader's Viewpoint", 
      status: "Ongoing",
      chapters: 140,
      rating: "9.1",
      genres: ["Action", "Fantasy", "Drama"],
      url: "public/omniscient.jpg",
      externalLink: "https://www.webtoons.com/en/action/omniscient-reader/list?title_no=2154"
    },
    {
      id: 5, 
      title: "True Beauty", 
      status: "Ongoing",
      chapters: 223,
      rating: "8.7",
      genres: ["Romance", "Comedy", "Drama"],
      url: "public/truebeauty.jpg",
      externalLink: "https://www.webtoons.com/en/romance/truebeauty/list?title_no=1436"
    },
    {
      id: 6, 
      title: "Demon Slayer", 
      status: "Completed",
      chapters: 205,
      rating: "9.3",
      genres: ["Action", "Fantasy", "Drama"],
      url: "public/demonslayer.jpg",
      externalLink: "https://demonslayerfree.online/"
    },
    {
      id: 7, 
      title: "One Punch Man", 
      status: "Ongoing",
      chapters: 193,
      rating: "9.0",
      genres: ["Action", "Comedy", "Superhero"],
      url: "public/onepunchman.png",
      externalLink: "https://readonepunch-man.com/"
    },
    {
      id: 8, 
      title: "Chainsaw Man", 
      status: "Ongoing",
      chapters: 149,
      rating: "9.1",
      genres: ["Action", "Fantasy", "Horror"],
      url: "public/chainsawman.jpg",
      externalLink: "https://www.viz.com/chainsaw-man"
    },
    {
      id: 9, 
      title: "Jujutsu Kaisen", 
      status: "Ongoing",
      chapters: 253,
      rating: "9.0",
      genres: ["Action", "Fantasy", "Horror"],
      url: "public/jujustukaisen.jpg",
      externalLink: "https://www.viz.com/jujutsu-kaisen"
    },
    {
      id: 10, 
      title: "My Hero Academia", 
      status: "Ongoing",
      chapters: 420,
      rating: "8.6",
      genres: ["Action", "Superhero", "Fantasy"],
      url: "/myheroacademia.jpg",
      externalLink: "https://www.viz.com/my-hero-academia"
    },
    {
      id: 11, 
      title: "Lookism", 
      status: "Ongoing",
      chapters: 468,
      rating: "8.8",
      genres: ["Drama", "Comedy", "Action"],
      url: "/lookism.jpg",
      externalLink: "https://www.webtoons.com/en/drama/lookism/list?title_no=1049"
    },
    {
      id: 12, 
      title: "Eleceed", 
      status: "Ongoing",
      chapters: 242,
      rating: "9.4",
      genres: ["Action", "Comedy", "Fantasy"],
      url: "/eleceed.jpg",
      externalLink: "https://www.webtoons.com/en/action/eleceed/list?title_no=1571"
    },
    {
      id: 13, 
      title: "The God of High School", 
      status: "Ongoing",
      chapters: 582,
      rating: "8.5",
      genres: ["Action", "Martial Arts", "Fantasy"],
      url: "/godofhighschool.jpg",
      externalLink: "https://www.webtoons.com/en/action/the-god-of-high-school/list?title_no=66"
    },
    {
      id: 14, 
      title: "Noblesse", 
      status: "Completed",
      chapters: 544,
      rating: "8.9",
      genres: ["Action", "Fantasy", "Supernatural"],
      url: "/noblesse.jpg",
      externalLink: "https://www.webtoons.com/en/action/noblesse/list?title_no=87"
    },
    {
      id: 15, 
      title: "Unordinary", 
      status: "Ongoing",
      chapters: 292,
      rating: "8.7",
      genres: ["Action", "Drama", "Supernatural"],
      url: "/unordinary.jpg",
      externalLink: "https://www.webtoons.com/en/super-hero/unordinary/list?title_no=679"
    },
    {
      id: 16, 
      title: "I Love Yoo", 
      status: "Ongoing",
      chapters: 208,
      rating: "8.8",
      genres: ["Romance", "Drama", "Comedy"],
      url: "/iloveyoo.jpg",
      externalLink: "https://www.webtoons.com/en/romance/i-love-yoo/list?title_no=986"
    },
    {
      id: 17, 
      title: "Sweet Home", 
      status: "Completed",
      chapters: 141,
      rating: "9.0",
      genres: ["Horror", "Thriller", "Drama"],
      url: "/sweethome.jpg",
      externalLink: "https://www.webtoons.com/en/thriller/sweethome/list?title_no=1285"
    },
    {
      id: 18, 
      title: "Bastard", 
      status: "Completed",
      chapters: 94,
      rating: "9.2",
      genres: ["Thriller", "Horror", "Drama"],
      url: "/bastard.jpg",
      externalLink: "https://www.webtoons.com/en/thriller/bastard/list?title_no=485"
    },
    {
      id: 19, 
      title: "Wind Breaker", 
      status: "Ongoing",
      chapters: 424,
      rating: "9.1",
      genres: ["Sports", "Drama", "Action"],
      url: "/windbreaker.jpg",
      externalLink: "https://www.webtoons.com/en/sports/wind-breaker/list?title_no=372"
    },
    {
      id: 20, 
      title: "Let's Play", 
      status: "Ongoing",
      chapters: 194,
      rating: "8.9",
      genres: ["Romance", "Comedy", "Slice of Life"],
      url: "/letsplay.jpg",
      externalLink: "https://www.webtoons.com/en/romance/letsplay/list?title_no=1218"
    },
    {
      id: 21, 
      title: "Hardcore Leveling Warrior", 
      status: "Completed",
      chapters: 385,
      rating: "8.7",
      genres: ["Action", "Fantasy", "Adventure"],
      url: "/hardcoreleveling.jpg",
      externalLink: "https://www.webtoons.com/en/action/hardcore-leveling-warrior/list?title_no=1221"
    },
    {
      id: 22, 
      title: "Mage Returns After 4000 Years", 
      status: "Ongoing",
      chapters: 172,
      rating: "8.8",
      genres: ["Fantasy", "Action", "Adventure"],
      url: "/magereturns.jpg",
      externalLink: "https://www.tappytoon.com/en/comics/mage-returns-after-4000-years"
    },
    {
      id: 23, 
      title: "The Legend of the Northern Blade", 
      status: "Ongoing",
      chapters: 155,
      rating: "9.5",
      genres: ["Action", "Martial Arts", "Fantasy"],
      url: "/northernblade.jpg",
      externalLink: "https://www.tappytoon.com/en/comics/legend-of-northern-blade"
    },
    {
      id: 24, 
      title: "The Boxer", 
      status: "Completed",
      chapters: 123,
      rating: "9.4",
      genres: ["Sports", "Drama", "Action"],
      url: "/theboxer.jpg",
      externalLink: "https://www.webtoons.com/en/sports/the-boxer/list?title_no=2027"
    },
    {
      id: 25, 
      title: "Nano Machine", 
      status: "Ongoing",
      chapters: 168,
      rating: "8.9",
      genres: ["Action", "Martial Arts", "Fantasy"],
      url: "/nanomachine.jpg",
      externalLink: "https://www.mangago.me/read-manga/nano_machine/"
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