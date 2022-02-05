import photo1 from '../../assets/1.jpg'
import photo2 from '../../assets/18.jpg'
import photo3 from '../../assets/19.jpg'
import './Crousel.css'
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className='crousel'>
         <MDBCarousel showControls>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src={photo2} alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={photo3} alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>

  );
}