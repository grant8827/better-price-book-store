import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Cart() {
  return (
    <div>
      <Link to="/cart">
      <div className='shoppingCart'>
        <p style={{alignItems:'baseline', margin:'5px'}}>$0.00 - 0 items</p>
      <FontAwesomeIcon style={{alignItems:'center', float:'right'}} icon={faShoppingCart } size='2x' color='var(--secondary)' />
      </div>

      </Link>
      
    </div>
  )
}

export default Cart
