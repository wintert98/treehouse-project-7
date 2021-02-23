import React from 'react'
import Photo from './Photo'
import NotFound from './NotFound'

 const PhotoList = (props) => {

    const results = props.data;
    console.log(results)
    let photos;

    if(results.length > 0) {
     
        photos = results.map(photo => 
        <Photo url={ `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title}/>
        )

    } else {

        photos = <NotFound />
         
    }
    return(
        <ul>
           {photos}
        </ul>
  );

}

export default PhotoList;