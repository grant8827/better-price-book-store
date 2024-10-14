import React, { useState } from 'react';
import Category from './Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Searchbar() {
  const [query, setQuery] = useState("")

  const fetchData = (value) =>{
    fetchData("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(json => {
    
    });
  }

  const handleChange = (value) =>{
    setQuery(value)
    fetchData(value)
  }
  return (
    <div>
      <div className="searchbar">
        <div className='searchLink'>
            <Category/>
        <input style={{width:'400px', padding:'12px'}} type='search' value={query} placeholder='search...' 
        onChange={(e) => handleChange(e.target.value)}/>
        <FontAwesomeIcon style={{ position: 'relative', top:'6px', right:'45px',  height:'35px', width:'35px' }} icon={faSearch} size='1x' color='var(--secondary)'/>
        </div>
      
      <div className='shoppingCart'>
        <p style={{alignItems:'baseline', margin:'5px'}}>$0.00 - 0 items</p>
      <FontAwesomeIcon style={{alignItems:'center', float:'right'}} icon={faShoppingCart } size='2x' color='var(--secondary)' />
      </div>
        
      </div>
    </div>
  )
}

export default Searchbar
