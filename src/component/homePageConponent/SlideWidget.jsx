import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  textShadow:' 2px 2px 5px white ',
  color: '#000000',
  fontSize:'40px',
  fontWeight: 'bold',
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '500px'
}
const slideImages = [
  {
    url: 'https://i.ibb.co/dcfcqzW/bannerimg1.jpg',
    caption: 'Better Price Variety Books & Stationery Supplies'
  },
  {
    url: 'https://i.ibb.co/zQBtpqm/slideimage1.jpg',
    caption: 'Read more, Learn more, Achieve more'
  },
  {
    url: 'https://i.ibb.co/fpqkMPQ/slideimage2.jpg',
    caption: 'School Text Books, School & Office Supplies,'
  },
];
function SlideWidget() {
  return (
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default SlideWidget
 

