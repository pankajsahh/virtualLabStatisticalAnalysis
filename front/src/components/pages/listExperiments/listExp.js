import React from 'react'
import { Link, Routes, Route} from 'react-router-dom';

import './listExp.css';


const ListExp = () => {
    const links = [
        'Introduction',
        'Objective',
        'List Of Experiment',
        'Target Audience',
        'Course Alignment',
        'Feedback'
    ]
    const list = [
        'Creating Data Frame',
        
    ]
    
    return (
        <>
            <div id='ListExp-container ' className='container section__padding'>

                {/* <SideBar list={links} changeContent={changeContent} /> */}
                
                <div className='links'>
                    {links.map((e) => {
                        return (
                        <Link key={e} to={e}><button className="list-btn" >{e}</button></Link>
                        )
                    })}
                </div>
                <div className='exp'>
                    <span style={{ color: '#2c99ce', fontSize: '30px' }}>
                        Data Science
                    </span>
                    <Routes>
                        <Route exact path='/intro' element={<Introduction />} />
                        <Route exact path='/*' element={<Experiments  list={list} />} />
                    </Routes>
                </div>
            </div>
           
        </>
    )
}
const Introduction = () => {
    return <div>
        Introduction
    </div>
}
const Experiments = ({ list }) => {
    const data = list.map(ele => <Link to='/DataAnalysis/Aim' className='data-btn' key={ele}>
        {ele}
    </Link>)
    return <><br />List Of Experiment <p></p> <br />{data}</>
}
export default ListExp;