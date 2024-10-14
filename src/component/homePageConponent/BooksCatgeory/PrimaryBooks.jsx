import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import bookimg1 from '../../../assets/images/socialstudiesworkbook5.png'
import '../../pages/pages.css'
import { button } from '@material-tailwind/react';

const product =[
  {
    id: '1',
    img: 'https://betterpricebookstore.com/wp-content/uploads/2022/10/20200819_174619-400x400.jpg',
    title:'Jamaica Primary Social Studies Workbook 5',
    button: 'Show Now'
  },
  {
    id: '2',
    img: 'https://betterpricebookstore.com/wp-content/uploads/2022/10/20200819_174637-400x400.jpg',
    title:'JAMAICA PRIMARY SOCIAL STUDIES WORKBOOK 6 PLANET EARTH',
    button: 'Show Now'
  },
  {
    id: '3',
    img:'https://i.ibb.co/1Zn7Qt9/20200820-130144.jpg',
    title:'The Wooing of Beppo Tate',
    button:'Show Now'
  },
  {
    id: '4',
    img:'https://i.ibb.co/5KhfDyg/PHOTO-2020-08-21-17-37-58.jpg',
    title:'English Masters for Jamaica',
    button:'Show Now'
  },
  {
    id: '5',
    img: 'https://i.ibb.co/FDnSfhd/20200820-130003.jpg',
    title:'Collins Caribbean Students Dictionary',
    button: 'Show Now'
  },
  {
    id: '6',
    img: 'https://i.ibb.co/Jn1ysfB/20200821-162701.jpg',
    title:'Grade One Integrated Language Arts Workbook',
    button:'Show Now'
  },
  {
    id: '7',
    img: 'https://i.ibb.co/YBbW6PT/20200821-162055.jpg',
    title:'Integrated Reader',
    button: 'Show Now'
  },
  {
    id: '8',
    img: 'https://i.ibb.co/K706wZL/20200821-162817.jpg',
    title:'Grade Two Phonics WorkBook',
    button:' Show Now'
  },
 
]
function PrimaryBooks() {
    
  return (
   <div className='cardLayout'>
  
  {product.map((products) => (
    
      <div className='cardMap' >
      <img className='productImage' src={products.img} alt='product image' width='200px'/>
        <h4 style={{padding:'10px'}}>{products.title}</h4>
        <button style={{padding:'10px'}}>{products.button}</button>
        </div>

    
  ))}
 
</div>
  

   
  )
}

export default PrimaryBooks
