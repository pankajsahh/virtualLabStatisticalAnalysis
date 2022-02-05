import './Crousel.css'
import React from 'react';


import { MDBBtn } from 'mdb-react-ui-kit';
import logo  from '../../assets/1.jpg'

export default function App() {
  return (
    <div>
            <div className="text-container section__padding">
                <div className="txt">
                    <div className="txt-box">
                        <h2 className="h2-part-1">Welcome to <span className="h2-part-2">Andc virtual labs</span></h2>
                        <p>
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nulla? uptatum soluta qui distinctio numquam libero itaque facere. Dolor excepturi autem dolores.
                        </p>
                        <div className="button-set">
                            <MDBBtn outline className='mx-2 button-1' color='info'>Explore Experiments</MDBBtn>
                            <MDBBtn outline className='mx-2 button-2' color='info'>Feedback</MDBBtn>
                            
                        </div>
                    </div>
                </div>
                <div className="img-part">
                    <img src={logo} alt="..." />
                </div>
            </div>
        </div>

  );
}