import React, { Component } from 'react'
import axios from 'axios'
import apiKey from './config/config.js'

export default class App extends Component {

constructor() {
  super();
  this.state = {
    photos: []
  }

}

componentDidMount() {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunset&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos

    });
  })
    .catch(error => {
       console.log('Error fetching and parsing data', error);
    });

}


render() {
  console.log(this.state.photos)
  return (
    <div>
      <div>
        <div>
          <h1> </h1>
        </div>
      </div>
      <div>
      </div>
    </div>

  );

}
}




