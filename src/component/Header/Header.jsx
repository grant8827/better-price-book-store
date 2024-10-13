import React from 'react'
import '../Header/header.css';
import Navbar from '../Header/Navbar';
import Searchbar from '../Header/Searchbar';
function Header() {
  return (
    <div>
      <div className='topHeader'>
<div>social media</div>
<p style={{color:'white'}}>All prices are quoted in Jamaican Dollars and are subject to change without notice.</p>
      </div>
      <Navbar/>
      <Searchbar/>
    </div>
  )
}

export default Header
