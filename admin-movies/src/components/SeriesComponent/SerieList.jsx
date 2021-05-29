import Serie from './Serie';
import { Component } from "react";


class SerieList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        serieList: 
        [ ]
        
      };
    }
  
    async querySeriesAPI(endpoint) {
      const response = await fetch(
        `http://localhost:3030/api/series${endpoint}`
        );
        return await response.json();
      
    }
    
    async getSeriesList() {
      const seriesResponse = await this.querySeriesAPI("/")
         
          console.log(seriesResponse);
          return seriesResponse.series;
          
    }
    
    async updateData() {
      const serieList = await this.getSeriesList()
        
      this.setState({
        serieList,
      });
    }
    
    
    async componentDidMount() {
      setInterval(() =>{
        this.updateData();
        console.log("data updated");
      },10000 );
      this.updateData();
    
    };
        
  
    render() {
      return (
        <div className="serieList">
          <div>
            {this.state.serieList.map(
              (elem, id) => {
              return (
                <Serie
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
  
  
  export default SerieList;