import React from 'react';
import Crousel from '../../Crousel/Crousel';
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <div><Crousel /></div>
            <div className='intro section__padding'>
                <br /><br />
                <h3 ><i className="fas fa-atlas"> </i> Introduction</h3><hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima voluptatem? Laudantium sunt labore saepe!</p> 
            </div>
        </div>
    )
}
