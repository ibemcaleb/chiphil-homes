import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import '../styles/Header.css'
import logoImage from '../assets/logo3.png'

const Header = () => {
    const [mobile, setMobile] = useState(false)

    const handleMobile = () => {
        setMobile(!mobile)
    }
  return (
    <div className='header'>
        <Link to={"/"}>
            <img src={logoImage} alt="Chiphil logo" className='logo' />
        </Link>
        <div className='bars-times' onClick={handleMobile}>
            {
                mobile ? <FaTimes className='fa-bars' /> : <FaBars className='fa-times' />
            }
        </div>
        {/* <div className='nav-bar'> */}
            <ul className={mobile ? 'nav-menu show' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to={"/"} className='nav-link' onClick={handleMobile}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/about"} className='nav-link' onClick={handleMobile}>About Us</Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/properties"} className='nav-link' onClick={handleMobile}>Properties</Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/contact"} className='nav-link' onClick={handleMobile}>Contact Us</Link>
                </li>
            </ul>
        {/* </div> */}
    </div>
  )
}

export default Header