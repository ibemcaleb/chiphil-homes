import React from 'react'
import '../styles/WelcomeVideo.css'

const WelcomeVideo = () => {
  return (
    <div className='welcome-video'>
        <div className="video-div">
          <iframe className='video' src="https://www.youtube.com/embed/hM3CGsEOUPA" title="Welcome - Learning How to Sew is Easy! (&amp; fun)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        {/*  width="853" height="480" */}
    </div>
  )
}

export default WelcomeVideo