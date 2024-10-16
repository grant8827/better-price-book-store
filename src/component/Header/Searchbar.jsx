import React, { useState } from 'react';
import Category from './Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductsData } from '../homePageConponent/Products';

const items = ProductsData;

const data = [
  {
   items
  }
];

function Searchbar() {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    setFilteredData(
      data.filter(item =>
        item.toLowerCase().includes(value)
      )
    );
  };
  return (
    <div>
      <div className="searchbar">
        <div className='searchLink'>
            <Category/>
        <input style={{width:'400px', padding:'12px'}} type='search' value={query} placeholder='search...' 
        onChange={handleSearch}/>
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
