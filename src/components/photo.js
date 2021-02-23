import React from 'react'
//template for creating li elements for each photo displayed
const Photo = props => {

    return(
    <li>
        <img src={props.url} alt={props.title}/>
    </li>
    );
};

export default Photo;