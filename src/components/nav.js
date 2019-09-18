import React from 'react'
import './name.css'
import Passport from '../components/me-passport.jpg'
function Nav(props) {

    return (
        <div className="name">
            <h1 style={props.style}>OSUAGWU NNAMDI OBINNA</h1>
            <img src={Passport} alt="" />
        </div>
    )
    
}







export default Nav;

