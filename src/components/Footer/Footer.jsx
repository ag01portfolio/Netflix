import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import x from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={youtube} alt="" />
                <img src={x} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
            </div>
            <div className="footer-text-list">
                <ul>
                    <li>Audio Dec</li>
                    <li>Help Center</li>
                    <li>Gift Card</li>
                    <li>Term of Use</li>
                    <li>Privacy</li>
                    <li>Contact us</li>
                    <li>Legal Notices</li>
                </ul>
            </div>
            <div className="footer-copy-right">
                © 1997 - 2024 Netflix, Inc.
            </div>
        </div>
    )
}

export default Footer