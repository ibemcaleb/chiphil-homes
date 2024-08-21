import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'

const App = () => {
  return (
    <div>
      <Header />
      <div className='outlet'>
        <Whatsapp />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App