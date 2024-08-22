import React from 'react'
import '../styles/Testimonial.css'
import { testimonialInfo } from "../data/testimonialData"
import { motion } from 'framer-motion'

const Testimonial = () => {
    const testimonies = testimonialInfo.map(testimony => (
        <motion.div 
            className="testimonial-card"
            initial={{ y: 300 }}
                whileInView={{
                    y: 0,
                    transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8
                    }
                }}
        >
            <p className="testimonial-review"><span className="quote">"</span>{testimony.review}<span className="quote">"</span></p>
            <div className="testimonial-pic-name">
                <img src={testimony.pic} alt="testimonial" className="testimonial-pic" />
                <h5 className="testimonial-name">{testimony.name}</h5>
            </div>
        </motion.div>
    ))
    return (
        <div className="testimonial">
            <motion.h1
                initial={{ x: -300 }}
                whileInView={{
                    x: 0,
                    transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8
                    }
                }}
            >
                What our customers say
            </motion.h1>
            <div className="testimonial-card-container">
                { testimonies }
            </div >
        </div>
    )
}

export default Testimonial