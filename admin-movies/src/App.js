import React from "react";
import "./App.css";
import MovieList from './components/MoviesComponent/MovieList';
import SerieList from './components/SeriesComponent/SerieList';

function App () {
  return (
    <div className="App">
      <div className= "container">
        <div className="row">
          
            <div className="title-list col ">
              <h2>Lista de Peliculas</h2>
              <hr/>
              <div className = "movieList">
                <MovieList/>
              </div>
            </div>
            <div className = "title-list col">
              <h2>Lista de Series</h2>
              <hr/>
              <div>
                <SerieList/>
              </div>
            </div>
          
        </div>
      </div>

    </div>
  )
}

export default App;