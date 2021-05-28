import React from "react";
import "./App.css";
import MovieList from './components/MoviesComponent/MovieList';
import SerieList from './components/SeriesComponent/SerieList';

function App () {
  return (
    <div className="App">
      <div className = "w-100">
        <div className="title-list">
          <h2>Lista de Peliculas</h2>
          <hr/>
          <div className = "movieList">
            <MovieList/>
          </div>
        </div>
        <div className = "title-list">
          <h2>Lista de Series</h2>
          <hr/>
          <div>
            <SerieList/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;