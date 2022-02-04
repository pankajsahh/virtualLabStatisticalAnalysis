import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import SideBar from './SideBar'
const Home = () => {
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
    const changeContent = () => { }
    return (
        <>
            <div id='home-container'>
                <SideBar list={links} changeContent={changeContent} />
                <div style={{ margin: 'auto', minWidth: '80vw' }}>
                    <span style={{ color: '#2c99ce', fontSize: '30px' }}>
                        Data Science
                    </span>
                    <p></p>
                    <p></p>
                    <Routes>
                        <Route exact path='/he' element={<Introduction />} />
                        <Route exact path='*' element={<Experiments list={list} />} />
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
    const data = list.map(ele => <Link to='/ex'>
        {ele}
    </Link>)
    return <><br />List Of Experiment <p></p> <br />{data}</>
}
export default Home