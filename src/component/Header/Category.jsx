import React from 'react';
import { useState } from 'react';
import '../Header/header.css'
function Category() {
    const [selectedValue, setSelectedValue] = useState('Option 1'); 
    const handleChange = (event) => {
     setSelectedValue(event.target.value);
     };
  return (
    <div>
         <select className='category' value={selectedValue} onChange={handleChange}>
 <option className='catList' value="Option 1">All Category</option>
 <option className='catList' value="Option 2">CAPE BOOKS</option>
 <option className='catList' value="Option 3">NOVELS</option>
 <option className='catList' value="Option 3">PRIMARY</option>
 <option className='catList' value="Option 3">SECONDARY</option>
 <option className='catList' value="Option 3">INFANT</option>
 </select>
    </div>
  )
}

export default Category


