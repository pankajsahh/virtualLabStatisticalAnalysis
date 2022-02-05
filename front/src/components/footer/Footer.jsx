import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

import './footer.css'

export default function App() {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with andc on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/Acharya-Narendra-Dev-College-University-of-Delhi-Govindpuri-Kalkaji-839455442819466' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://twitter.com/ANDCollege_DU' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://www.andcollege.du.ac.in/' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='https://www.instagram.com/andcollege_du/' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://www.linkedin.com/school/acharya-narendra-dev-college/' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          
        </div>
      </section>

      <div className='vivColor'>
        <div className='container text-center gradient__bg text-md-start mt-5  p-4 '>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 vivTextColor'>
                <i className='fas fa-gem me-3'></i>Andc Virtual-Labs
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>


            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 vivTextColor'>Links</h6>
              <p>
                <a href='#home' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#about' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#contact' className='text-reset'>
                  Contact Us
                </a>
              </p>
              <p>
                <a href='#feedback' className='text-reset'>
                  Feedback
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 vivTextColor'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> kalkaji new delhi
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 91 9899819133
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 91 8010011556
              </p>
            </div>
          </div>
        </div>
        <div className='text-center p-4 vivTextColor' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          &copy; 2021 Copyright &nbsp;
          <a className='text-reset fw-bold ' href='https://www.andcollege.du.ac.in/' target="_blank">
            Acharya Narendra Dev College &nbsp; 
          </a>
          All rights reserved 
        </div>
      </div>

    </MDBFooter>
  );
}