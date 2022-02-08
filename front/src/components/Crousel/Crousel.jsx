import './Crousel.css'
import React from 'react';



import logo  from '../../assets/1.jpg'; // Note photo should 800px width and 350px height


export default function App() {
  return (
    <div>
            <div className="text-container section__padding">
                <div className="txt">
                    <div className="txt-box">
                        <h2 className="h2-part-1">Welcome to <span className="h2-part-2">ANDC Virtual Labs</span></h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos.
                        </p>
                        <div className="button-set">
                            <a className='button' href="/experiment">Explore Experiments</a>
                            <a className='button' href="/feedback">Feedback</a>
                            
                        </div>
                    </div>
                </div>
                <div className="img-part">
                    <img src={logo} alt="image1" />
                </div>
            </div>
        </div>

  );
}