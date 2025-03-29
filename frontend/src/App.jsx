import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

const movie = {
  title: "Inception",
  release_date: "2010",
  url: "https://via.placeholder.com/150"
}

const movie2 = {
  title: "The Matrix",
  release_date: "1999",
  url: "https://via.placeholder.com/150"
}



function App() {
  const movieNumer = 1;
  
  return (
    <>
      <div className="app">
        <MovieCard movie={movie} />
      </div>

      {movieNumber === 1? (
        <MovieCard movie={movie} />
      ): (
        <MovieCard movie={movie} />
      )}


    </>
  )
}


export default App
