import React from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
import Drawer from 'react-modern-drawer'; 
import 'react-modern-drawer/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/better-price-books-logo.png';

function ResponsiveDrawer() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

   
  return (
    <div>
         <button style={{backgroundColor:'transparent'}} onClick={toggleDrawer}> <FontAwesomeIcon style={{ }} icon={faBars} size='3x' 
         color='var(--secondary)'/></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div>
                <img style={{width:'200px', borderRadius:'20px'}} src={logo} alt='logo'/>
                    <ul style={{margin:'20px'}}>
                    <li style={{listStyle:'none', marginTop:'30px', fontSize:'20px'}}><Link style={{textDecoration:'none'}} to='/'>Home</Link></li>
    <li style={{listStyle:'none', marginTop:'30px', fontSize:'20px'}}><Link style={{textDecoration:'none'}} to='/shop'>Shop</Link> </li>
    <li style={{listStyle:'none', marginTop:'30px', fontSize:'20px'}}><Link style={{textDecoration:'none'}} to='/cart'> Cart</Link></li>
    <li style={{listStyle:'none', marginTop:'30px', fontSize:'20px'}}><Link style={{textDecoration:'none'}} to='/bookList'>Book List</Link></li>
    <li style={{listStyle:'none', marginTop:'30px', fontSize:'20px'}}><Link style={{textDecoration:'none'}} to='/contact'> Contact</Link></li>
                    </ul>
                </div>
            </Drawer>
    </div>
  )
}

export default ResponsiveDrawer

