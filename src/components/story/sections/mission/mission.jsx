import React from 'react';
import './mission.css';
import missionIcon from './mision-icon.png'; // Import local mission icon
import visionIcon from './vision-icon.png'; // Import local vision icon

const Mission = () => {
  return (
    <div className='mission-vision-container'>
      {/* Mission Box */}
      <div className='box'>
        <div className='box-header'>
          <div className='green-rectangle'></div>
          <h2 className='box-title'>Mission</h2>
          <div className='icon-container'>
            <img src={missionIcon} alt="Mission Icon" className='mision-icon' />
          </div>
        </div>
        <p>Our mission is to empower businesses in the consumer products industry by providing tailored strategies and cutting-edge technologies. We focus on delivering innovative solutions that drive sustainability, operational efficiency, and long-term growth.
             Through our expertise in AI, digital transformation, and data management, we help organizations navigate complex market challenges and achieve measurable success.</p>
      </div>

      {/* Vision Box */}
      <div className='box'>
        <div className='box-header'>
          <div className='green-rectangle'></div>
          <h2 className='box-title'>Vision</h2>
          <div className='icon-container'>
            <img src={visionIcon} alt="Vision Icon" className='vision-icon' />
          </div>
        </div>
        <p>Our vision is to become the leading partner for consumer product companies, driving the future of innovation and sustainability. We aim to transform businesses by leveraging data-driven insights and AI-powered solutions, enhancing operational performance,
             and fostering customer engagement. At SN Horizon, we are committed to building a sustainable future while delivering value to our clients.</p>
      </div>
    </div>
  );
};

export default Mission;
