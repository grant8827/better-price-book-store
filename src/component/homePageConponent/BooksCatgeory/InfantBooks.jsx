import React from 'react'
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
    
   
  ]
function InfantBooks() {
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

export default InfantBooks