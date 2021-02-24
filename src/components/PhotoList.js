import React from 'react'
import Photo from './Photo'
import NotFound from './NotFound'
// Handles data from API call and coverts to url needed to view photos with alt tags, and generate gallery of photos
 const PhotoList = (props) => {
   
    const results = props.data;
   
    let photos;

    if(results.length > 0) {
     
        photos = results.map(photo => 
        <Photo url={ `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title}/>
        )

    } else {

        photos = <NotFound />
         
    }
    return(
        <div className="photo-container">
          <h2>Results</h2>
            <ul>{photos}</ul>
        </div>
  );

}

export default PhotoList;