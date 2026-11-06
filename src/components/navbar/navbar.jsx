import React from "react";
import './navbar.css'
import {Link} from 'react-router-dom'
import Icon from '../../assets/the_digital_icon.jpg'

const Navbar = ()=>{
    return(
        <>
        <nav className="navbar">

            <div className="nav-left">
                <img src={Icon} alt="" height={90}/>
            </div>

            <ul className="nav-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>

            <div className="nav-button">
                <button>Contact Us</button>
            </div>
        </nav>
        
        <div className="blue-line">
            <hr />
        </div>
        </>
    )
}
export default Navbar;