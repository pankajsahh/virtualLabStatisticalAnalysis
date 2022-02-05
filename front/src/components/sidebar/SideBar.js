import React, { useState } from "react";

import "./sidebar.css";
import { BiCaretUp,BiCaretDown } from 'react-icons/bi';

const SideBar = (props) => {
    const [current, setcurrent] = useState("none");
    const [open, setopen] = useState(true);
    const list = props.list;
    const handleClick = (e) => {
        setcurrent(e.target.id);
        props.changeContent(current);
    };
    const links = list.map((ele) => (
        <div
            id={ele}
            onClick={handleClick}
            style={{
                padding: "10px",
                fontSize: "21px",
                fontWeight: "bold",
                cursor: "pointer",
                fontFamily: "sans-serif",
                color: current === ele ? "#ff6600" : "#007bff",
            }}
        >
            {ele}
        </div>
    ));
    return (
        <div id="sidebar">
            {/* <div >
                <button type="button" class="btn btn-primary btn__sidebar ">
                    <BiCaretUp onClick={() => setopen(false)} color="#fff"></BiCaretUp>
                </button>
                <button type="button" class="btn btn-primary btn__sidebar ">
                    <BiCaretDown onClick={() => setopen(true)} color="#fff"></BiCaretDown>
                
                </button>
            </div> */}
            <div
                className="sidebar__list"
                style={{ exactWidth: "25%", display: open ? "flex" : "none" }}
            >
                {links}
            </div>
        </div>
    );
};
export default SideBar;
