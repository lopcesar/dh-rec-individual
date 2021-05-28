import Movie from './Movie';
import { Component } from "react";


class MovieList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movieList: 
        [ ]
        
      };
    }
  
    async queryMoviesAPI(endpoint) {
      const response = await fetch(
        `http://localhost:3000/api/movies${endpoint}`
        );
        console.log(response)
        return await response.json()
    }
    
    async getMoviesList() {
      const moviesResponse = await this.queryMoviesAPI("/")
         
          console.log(moviesResponse);
          return moviesResponse.movies;
          
    }
    
    async updateData() {
      const movieList = await this.getMoviesList()
        
      this.setState({
        movieList,
      });
    }
    
    
    async componentDidMount() {
      setInterval(() =>{
        this.updateData();
        console.log("data updated");
      }, 10000);
      this.updateData();
    
    };
        
  
    render() {
      return (
        <div className="MovieList">
          <div>
            {this.state.movieList.map(
              (elem, id) => {
              return (
                <Movie
                key={id} 
                title={elem.title} 
                />
              
              );
            }
            )}
          </div>
        </div>
      );
    }
  }
  
  
  export default MovieList;