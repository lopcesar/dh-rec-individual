
import './App.css';
import MovieList from './components/MovieList';
import { Component } from "react";

class App extends Component {
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
      
      return await response.json()
    
    
  }
  
  async getMoviesCount() {
    const countResponse = await this.queryMoviesAPI("/");
    console.log(countResponse)
    return countResponse.index;
  }
  
  async updateData() {
    const movieList = 
     [ {
      title:(this.getMoviesCount())
      }]
    
    this.setState({
      movieList,
    });
  }
  
  
  async componentDidMount() {
    setInterval(() =>{
      this.updateData();
      console.log("data updated");
    }, 3000);
    this.updateData();
  
  };
      

  render() {
    return (
      <div className="App">
        <div>
          {this.state.movieList.map(
            (elem, index) => {
            return (
              <MovieList
              key={index} 
              title={elem.title} 
              rating={elem.rating}
              />
            
            );
          }
          )}
        </div>
      </div>
    );
  }
}


export default App;
