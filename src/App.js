import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config/config.js';
import PhotoList from './components/PhotoList';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';

export default class App extends Component {

constructor() {
  super();
  this.state = {
    photos: [],
    cats: [],
    dogs: [],
    airplanes: []
   

  };

}
// Calls performSearch to load photo states
componentDidMount() {
  this.performSearch();
  this.performSearch('cats');
  this.performSearch('dogs');
  this.performSearch('airplanes');
 

}
//Handles API call and search feature to photos from Flickr
performSearch = async (query = 'airplanes') => {
  const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      switch (query) {
        case 'dogs':
          this.setState({ dogs: response.data.photos.photo });
          break;
        case 'cats':
          this.setState({ cats: response.data.photos.photo});
          break;
        case 'airplanes':
          this.setState({ airplanes: response.data.photos.photo });
          break;
          default:
            this.setState({
              photos: response.data.photos.photo
            })
      }  
})
  .catch(error => {
     console.log('Error fetching and parsing data', error);
  });
}



// Rendering elements and routing

render() {
  //const query = this.props.match.params.query;
  console.log(this.routeProps);
  return (
    <BrowserRouter>
     <div>
       <div className="container">
       <SearchForm query={this.state.query} onSearch={this.performSearch}  />
       
           <Nav />
         
         <Switch>
          
           <Route exact path="/search/cats" render={ () => <PhotoList data={this.state.cats} />} />
           <Route exact path="/search/dogs" render={ () => <PhotoList data={this.state.dogs} />} />
           <Route exact path="/search/airplanes" render={ () => <PhotoList data={this.state.airplanes} />} />
           <Route exact path="/search/:qSearch" render={ (routeProps) => <PhotoList data={this.state.photos} {...routeProps}/>} />
           
           
        </Switch>
            
          
        

        
       </div>
    </div>
    </BrowserRouter>

  );

}


}




