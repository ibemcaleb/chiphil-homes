import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneFlip, FaLocationDot, FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'
import '../styles/Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='footer'>
        <div className="footer-contact">
            <span className='footer-contact-span'><FaLocationDot className='footer-contact-icon' /> 45 Ago Palace Way, Okota, Isolo, Lagos.</span>
            <span className='footer-contact-span'><FaPhoneFlip className='footer-contact-icon' /> +234 805 345 2135</span>
            <span className='footer-contact-span'><FaEnvelope className='footer-contact-icon' /> info@company.com</span>
        </div>
        <div className="footer-social">
            <Link to={"#"} target='_blank' className='footer-social-link'><FaFacebook className='footer-social-icon' /></Link>
            <Link to={"#"} target='_blank' className='footer-social-link'><FaInstagram className='footer-social-icon' /></Link>
            <Link to={"#"} target='_blank' className='footer-social-link'><FaYoutube className='footer-social-icon' /></Link>
            <Link to={"#"} target='_blank' className='footer-social-link'><FaTiktok className='footer-social-icon' /></Link>
        </div>
        <div className="footer-copyright">
            <p>Copyright &copy; {year} Chiphil-Homes & Properties Limited.</p>
        </div>
    </div>
  )
}

export default Footer