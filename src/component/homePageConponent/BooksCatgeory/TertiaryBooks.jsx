import React from 'react'
import '../../pages/pages.css';
const product =[
  {
    id: '1',
    img: 'https://i.ibb.co/7kcR3qW/PHOTO-2020-08-21-17-38-01.jpg',
    title:'CSEC Physics',
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
    img:'https://betterpricebookstore.com/wp-content/uploads/2022/10/20200819_174619-400x400.jpg',
    title:'Jamaica Primary Social Studies Workbook 5',
    button:'Show Now'
  },
  {
    id: '4',
    img:'https://betterpricebookstore.com/wp-content/uploads/2022/10/20200819_174619-400x400.jpg',
    title:'Jamaica Primary Social Studies Workbook 5',
    button:'Show Now'
  },
  {
    id: '5',
    img: 'https://betterpricebookstore.com/wp-content/uploads/2022/10/20200819_174619-400x400.jpg',
    title:'Jamaica Primary Social Studies Workbook 5',
    button: 'Show Now'
  },
  {
    id: '6',
    img: 'https://betterpricebookstore.com/wp-content/uploads/2022/10/20200819_174619-400x400.jpg',
    title:'Jamaica Primary Social Studies Workbook 5',
    button:'Show Now'
  },
  {
    id: '7',
    img: 'https://betterpricebookstore.com/wp-content/uploads/2022/10/20200819_174619-400x400.jpg',
    title:'Jamaica Primary Social Studies Workbook 5',
    button: 'Show Now'
  },
  {
    id: '8',
    img: 'https://betterpricebookstore.com/wp-content/uploads/2022/10/20200819_174619-400x400.jpg',
    title:'Jamaica Primary Social Studies Workbook 5',
    button:' Show Now'
  },
 
]
function TertiaryBooks() {
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

export default TertiaryBooks
