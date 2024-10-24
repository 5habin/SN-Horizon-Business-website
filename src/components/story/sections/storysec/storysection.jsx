import React from 'react';
import './storysection.css';
import storyimg from './storysec.png';

const StorySection = () => {
  return (
    <div className='storysec'>
        <h1>Our Story</h1>
        <div className='story-wrap'>
            <p>
                SN Horizon was founded by <strong >Rafeek Muhammed</strong> with a clear vision to address the growing need for consumer product companies to embrace data, AI, 
                and sustainable practices. Since our inception, we have been on a mission to empower brands through innovation and strategic insights.
                By focusing on AI-powered solutions, digital transformation, and sustainability consulting, SN Horizon has become a trusted partner for businesses
                aiming to adapt and thrive in a fast-evolving marketplace. We are committed to driving responsible growth and helping organizations build long-term value 
                while contributing to a sustainable future.
            </p>
            <img src={storyimg} alt="" className="story-image" /> {/* Change class to className */}
        </div>
    </div>
  );
}

export default StorySection;
