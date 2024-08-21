import React from 'react'
import { Link } from 'react-router-dom'
import Whatsap from '../assets/Live_chat.png'
import '../styles/Whatsapp.css'

const Whatsapp = () => {
  return (
    <Link to={"https://wa.me/08033886920"} target='_blank' className='whatsapp-div'>
        <img src={Whatsap} alt="whatsapp" className='whats-img' />
    </Link>
  )
}

export default Whatsapp