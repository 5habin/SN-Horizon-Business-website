import React from 'react';
import './info.css'; 
import leadershipImage from './leadership.png'; 
import historyImage from './history.png'; 

const Info = () => {
  return (
    <div className='info-section'>
      <div className='info-box'>
        <div className='info-content'>
          <h2 className='info-title'>
            Leadership Team
          </h2>
          <p>
            Our leadership team consists of seasoned professionals with extensive experience in driving innovation and growth in the consumer products industry.
            They are committed to guiding the organization towards sustainable practices.
          </p>
        </div>
        <img src={leadershipImage} alt='Leadership Team' className='info-image' />
      </div>

      <div className='info-box'>
        <div className='info-content'>
          <h2 className='info-title'>
            Our History
          </h2>
          <p>
            Founded in 2020, SN Horizon has rapidly evolved into a trusted partner for consumer product companies seeking to embrace data and AI.
            Our history is marked by innovation and a commitment to sustainability.
          </p>
        </div>
        <img src={historyImage} alt='Our History' className='info-image' />
      </div>
    </div>
  );
};

export default Info;
