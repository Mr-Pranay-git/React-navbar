import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-top'>
            <nav>
                <NavLink className={(e)=>{return e.isActive ? 'red': ''}} to="/">Home</NavLink>
                <NavLink className={(e)=>{return e.isActive ? 'red': ''}} to="/about">About</NavLink>
                <NavLink className={(e)=>{return e.isActive ? 'red': ''}} to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;
