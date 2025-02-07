import React from 'react';
import logoMarca from '../images/logo.svg';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import './Footer.css';  

function Footer() {
    return (
        <div className="footerBox">
            <div className='footerBoxLeft'>
                <img className="logoMarca" src={logoMarca} alt="Logo" />
                <div className="iconsBox">
                    <FaFacebook className='footerIcon' size={20} color="#ffffff" />
                    <FaYoutube  className='footerIcon' size={20} color="#ffffff" />
                    <FaTwitter  className='footerIcon' size={20} color="#ffffff" />
                    <FaPinterest className='footerIcon' size={20} color="#ffffff" />
                    <FaInstagram className='footerIcon' size={20} color="#ffffff" />
                </div>
            </div>
            <div className='footerLabelBox'>
                <div className='footerLabel'>About us</div>
                <div className='footerLabel'>Contact</div>
                <div className='footerLabel'>Blog</div>
            </div>
            <div className='footerLabelBox'>
                <div className='footerLabel'>Careers</div>
                <div className='footerLabel'>Support</div>
                <div className='footerLabel'>Privacy Policy</div>
            </div>
            <button className='inviteButton'>Request Invite</button>
        </div>
    );
}

export default Footer;
