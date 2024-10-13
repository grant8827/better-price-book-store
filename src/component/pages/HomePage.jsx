import React from 'react'
import '../../App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SidebarImage from '../homePageConponent/SidebarImage';
import SlideWidget from '../homePageConponent/SlideWidget';
import PrimaryBooks from '../homePageConponent/BooksCatgeory/PrimaryBooks';
import BookBonner from '../homePageConponent/BookBonner';
import TertiaryBooks from '../homePageConponent/BooksCatgeory/TertiaryBooks';
import InnovativeAddBonner from '../homePageConponent/InnovativeAddBonner';
import NavelInfantBooks from '../homePageConponent/BooksCatgeory/NavelInfantBooks';
import BookSale from '../homePageConponent/BooksCatgeory/BookSale';
function HomePage() {
  return (
    <div>
    <div className="container">
    <div className="SliderHeader">
    <SlideWidget/>
      <SidebarImage/>
    </div>
     
  
    </div>
    <div className="container">
      
      <PrimaryBooks/>
  
    </div>
    <div className="container">
      
      < BookBonner/>
  
    </div>
    <div className="container">
      
      < TertiaryBooks/>
  
    </div>
    <InnovativeAddBonner/>

    <div className="container">
      
      < NavelInfantBooks/>
  
    </div>

  
    </div>
  )
}

export default HomePage
