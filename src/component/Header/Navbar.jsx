import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import ResponsiveDrawer from './ResponsiveDrawer';
function Navbar() {
  return (
    <div>
      <nav className='navbar'>


<ul className='navLinks'>
    <li className='navitem'><Link to='/'>Home</Link></li>
    <li className='navitem'><Link to='/shop'>Shop</Link> </li>
    <li className='navitem'><Link to='/cart'> Cart</Link></li>
    <li className='navitem'><Link to='/bookList'>Book List</Link></li>
    <li className='navitem'><Link to='/contact'> Contact</Link></li>

</ul>
<div className='drawerNav'>
<ResponsiveDrawer/>
</div>

      </nav>
    </div>
  )
}

export default Navbar
