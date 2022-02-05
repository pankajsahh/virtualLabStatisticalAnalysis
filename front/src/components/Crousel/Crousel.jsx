import './Crousel.css'
import React from 'react';


import { MDBBtn } from 'mdb-react-ui-kit';
import logo  from '../../assets/1.jpg'

export default function App() {
  return (
    <div>
            <div className="text-container">
                <div className="txt">
                    <div className="txt-box">
                        <h2 className="h2-part-1">Welcome to <span className="h2-part-2">Andc virtual labs</span></h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ipsam accusamus eum blanditiis temporibus totam praesentium repudiandae ducimus dignissimos distinctio reprehenderit, fuga laudantium labore vitae natus autem in? Ad praesentium, laboriosam voluptate esse molestias hic eveniet odit? Veniam voluptatum soluta qui distinctio numquam libero itaque facere. Dolor excepturi autem dolores.
                        </p>
                        <div className="button-set">
                            <MDBBtn outline className='mx-2 button-1' color='info'>Explore Experiments</MDBBtn>
                            <MDBBtn outline className='mx-2 button-2' color='info'>Feedback</MDBBtn>
                            
                        </div>
                    </div>
                </div>
                <div className="img-part">
                    <div className="child" >
                        <div className="subchild"><img src={logo} alt="..." /></div>
                    </div>
                </div>
            </div>
        </div>

  );
}