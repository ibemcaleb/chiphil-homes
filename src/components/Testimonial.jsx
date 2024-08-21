import React from 'react'
import '../styles/Testimonial.css'
import { testimonialInfo } from "../data/testimonialData"

const Testimonial = () => {
    const testimonies = testimonialInfo.map(testimony => (
        <div className="testimonial-card">
            <p className="testimonial-review"><span className="quote">"</span>{testimony.review}<span className="quote">"</span></p>
            <div className="testimonial-pic-name">
                <img src={testimony.pic} alt="testimonial" className="testimonial-pic" />
                <h5 className="testimonial-name">{testimony.name}</h5>
            </div>
        </div>
    ))
    return (
        <div className="testimonial">
            <h1>What our customers say</h1>
            <div className="testimonial-card-container">
                { testimonies }
            </div>
        </div>
    )
}

export default Testimonial