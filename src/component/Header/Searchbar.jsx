import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Category from './Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  } from '@fortawesome/free-solid-svg-icons';


function Searchbar() {

  return (
    <div>
        <div className='searchLink'>
            <Category/>
            <Link to="/shop">
            <input  type='search' 
        placeholder='search...' 
       />
        <FontAwesomeIcon style={{ position: 'relative', 
        top:'10px', right:'45px',  height:'35px',
         width:'35px' }} icon={faSearch} size='1x' 
         color='var(--secondary)'/>

            </Link>
       
        </div>
    </div>
  )
}

export default Searchbar


