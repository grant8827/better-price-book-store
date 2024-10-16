import React, { useState } from 'react'
  const data = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Strawberry"
  ];
  
function CartPage() {

    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);
  
    const handleSearch = (e) => {
      const value = e.target.value.toLowerCase();
      setQuery(value);
      setFilteredData(
        data.filter(item =>
          item.toLowerCase().includes(value)
        )
      );
    };
  return (
    <div>
    <input 
      type="text" 
      placeholder="Search..." 
      value={query} 
      onChange={handleSearch}
    />
    <ul>
      {filteredData.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
  )
}

export default CartPage


