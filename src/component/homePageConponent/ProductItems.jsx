import React from 'react';
import '../pages/pages.css';

function ProductItems(props) {
  return (
    <div>
      <div className="itemCard">
      
        <img style={{width:'230px', height:'230px'}} src={props.image} alt='productimg'/>
        <p style={{width:'230px', margin:'10px'}}>{props.name}</p>
        <buttom>{props.addToCart}</buttom>
      </div>
    </div>
  )
}

export default ProductItems
