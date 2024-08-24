import React from 'react'
import './Navbar.css'
import log from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="navBar-left">
                <img src={log} alt="" />
                <ul>
                    <li>Home</li>
                    <li>Movie</li>
                    <li>New</li>
                    <li>Get it Anyway</li>
                </ul>
            </div>
            <div className="navBar-right">
                <img src={search_icon} alt="" className='icons' />
                <p>Children</p>
                <img src={profile_img} alt="" className='profile_icon' />
                <img src={search_icon} alt="" className='icons' />
                <div className='navBar-porfile'>
                    <img src={bell_icon} alt="" />
                    <img src={caret_icon} alt="" />
                    <div className="dropDown">
                        Sign Out from Abhis Nextflix
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar