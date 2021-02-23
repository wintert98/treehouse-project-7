import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = props => {

    return(
        <ul>
        <li><NavLink to='/search/cats'>Cats</NavLink></li>
        <li><NavLink to='/search/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/search/airplanes'>Airplanes</NavLink></li>
      </ul>
    );
};

export default Nav;