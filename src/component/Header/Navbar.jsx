import React from 'react'
import logo from '../../assets/images/better-price-books-logo.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className='navbar'>
<img style={{width:'200px', borderRadius:'20px'}} src={logo} alt='logo'/>

<ul className='navLinks'>
    <li className='navitem'><Link to='/'>Home</Link></li>
    <li className='navitem'><Link to='/shop'>Shop</Link> </li>
    <li className='navitem'><Link to='/cart'> Cart</Link></li>
    <li className='navitem'><Link to='/bookList'>Book List</Link></li>
    <li className='navitem'><Link to='/contact'> Contact</Link></li>

</ul>
      </nav>
    </div>
  )
}

export default Navbar
