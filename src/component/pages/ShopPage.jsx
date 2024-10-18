import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../pages/pages.css';
import { ProductsData } from '../homePageConponent/Products';
function ShopPage() {
 
  return (
    <div className='container'>
    <div className='cardLayout'>
  {ProductsData.slice( 0, 12).map((products) => (
      <div className='cardMap' >
      <img className='productImage' src={products.image} alt='product image' width='200px'/>
        <h4 style={{padding:'10px'}}>{products.title}</h4>
        <button style={{padding:'10px'}}>{products.button}</button>
        </div>
  ))}
 
</div>
</div>
  )
}

export default ShopPage
