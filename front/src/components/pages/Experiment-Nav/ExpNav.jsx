import React from "react";
import { Link,Outlet } from "react-router-dom";
import './ExpNav.css'
const ExpNav = () => {
    const list = [
        'Aim',
        'Theory',
        'Objective',
        'Practice',
        'Procedure',
        'Simulation',
        'PostTest',
        'Reference',
        'Feedback'
    ]
    
    return (
        <>
            <div className="Experiment-bar section__padding">
                {list.map((e) => {
                    return (
                       <Link key={e} to={e}><button className="exp-button" >{e}</button></Link>
                    )
                })}
            </div>
            <Outlet/>
        </>
    )
}
export default ExpNav;