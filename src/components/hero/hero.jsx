import React from 'react'
import bg from './hero-bg.png'
import mobile_bg from './mobile-bg.png'
import './hero.css'

 const hero = () => {
  return (
    <div className='hero container '>
        <img src={bg} alt='' className='hero-image'/>
        <img src={mobile_bg} alt='' className='mobile-bg'/>
        <div className='hero-text'>
             <h1>Empowering Consumer Brands with Data-Driven Insights.</h1>
             <p>At SN Horizon, we deliver AI-powered solutions and digital transformation strategies, driving sustainability in the Consumer Products Industry.</p>
            <button className='hero-btn'>Learn More..</button>
        </div>
    </div>
  )
}

export default hero;