import React, { useState } from 'react';
import './Sectors.css';
import Nav from '../Nav/nav';
import Work from './work';
import Contact from '../contact/contact';
import personal from './personal.png';
import food from './food.png';
import house from './house.png';
import health from './health.png';

const sectorsData = [
  {
    title: 'Personal Care and Beauty',
    description: 'A rapidly evolving sector where innovation, customer engagement, and personalization play pivotal roles in driving success.Our expertise helps beauty brands harness market insights and consumer behavior trends to stay ahead of the curve. By leveraging data analytics, cutting-edge technologies, and industry knowledge, we empower brands to create tailored beauty solutions that resonate deeply with their audience. ',
    image: personal
  },
  {
    title: 'Food and Beverage',
    description: 'In a fast-paced and ever-evolving industry, sustainability, operational efficiency, and shifting consumer preferences are key drivers of success. We specialize in helping food and beverage companies stay ahead of market trends by anticipating shifts in demand and aligning their operations to meet the growing desire for healthier, more sustainable, and innovative products. ',
    image: food
  },
  {
    title: 'Household Products',
    description: 'As consumer expectations for both performance and sustainability continue to rise, the household products sector demands constant innovation to stay relevant. We empower brands to optimize their operational efficiency and refine product development processes to meet the evolving needs of today’s environmentally-conscious and performance-driven households.',
    image: house
  },
  {
    title: 'Health and Wellness',
    description: 'With health and wellness becoming a core part of consumers everyday lives, companies in this sector must remain agile and responsive to rapidly shifting trends. We help brands deliver innovative, personalized wellness solutions that cater to the growing demand for holistic health approaches. By staying ahead of evolving consumer expectations, we assist companies in crafting products and services that promote physical, mental, and emotional well-being. ',
     image: health
  }
];

const Sectors = () => {
  const [selectedSector, setSelectedSector] = useState(0);

  return (
    <div className='sectors'>
        <Nav/>
        <div className='sector-head'>
        <h1>Sectors we work on</h1>
      </div>
        <div className="sectors-container">
        <div className="sectors-titles">
        {sectorsData.map((sector, index) => (
          <h3
            key={index}
            className={`sector-title ${selectedSector === index ? 'active' : ''}`}
            onClick={() => setSelectedSector(index)}
          >
            {sector.title}
          </h3>
        ))}
      </div>
      
      <div className="sector-content">
        <div className="sector-image">
          <img src={sectorsData[selectedSector].image} alt={sectorsData[selectedSector].title} />
        </div>
        <div className="sector-description">
          <p>{sectorsData[selectedSector].description}</p>
        </div>
      </div>
    </div>
    <Work/>
    <div className='work-contact'>
        <Contact/>
    </div>
    </div>
  );
};

export default Sectors;
