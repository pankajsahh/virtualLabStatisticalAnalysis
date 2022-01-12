import React,{useState} from "react";

const SideBar =(props)=>{
    const [current,setcurrent]=useState('none');
    const list = props.list
    const handleClick=(e)=>{
        setcurrent(e.target.id)
        props.changeContent(current)
    }
    const links=list.map(ele=><div id={ele} onClick={handleClick} 
        style={{padding:'10px' ,
            fontSize:'21px',
            fontWeight:'bold',
            fontFamily: 'sans-serif',
            color:current==ele?'#ff6600':'#007bff'}}>{ele}</div>)
    return(
        <div style={{exactWidth:'25%'}}>
        {links}
        </div>
    )
}
export default SideBar