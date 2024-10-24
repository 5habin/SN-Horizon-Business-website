import React, { useState, useEffect } from 'react';
import './service.css'; 
import service1 from './data.png'; 
import service2 from './strategy.png';
import service3 from './sustainability.png';
import service4 from './business.png';

const services = [
    {
        id: 1,
        title: 'Data Management',
        longDescription: 'We specialize in integrating data from diverse sources to enhance operational efficiency. Our solutions ensure compliance and data integrity, allowing businesses to harness actionable insights. With our expertise, organizations can drive data-driven decision-making.',
        shortDescription: 'Manage and analyze data effectively.',
        imageUrl: service1,
        link: '/data-management'
    },
    {
        id: 2,
        title: 'Strategic Consulting',
        longDescription: 'Our strategic consulting services empower businesses to redefine their models for sustainable growth. We focus on optimizing supply chains and enhancing customer engagement. Our team works collaboratively to identify new opportunities and implement effective strategies. Build a resilient future with our tailored consulting solutions.',
        shortDescription: 'Provide strategic advice for your business.',
        imageUrl: service2,
        link: '/data-management'
    },
    {
        id: 3,
        title: 'Sustainability Consulting',
        longDescription: 'We guide organizations in reducing their carbon footprint through innovative sustainability practices. Our consulting focuses on implementing circular economy principles and eco-friendly solutions. Together, we create sustainable business strategies that drive long-term environmental impact. Achieve your sustainability goals with our expert support.',
        shortDescription: 'Consulting services focused on sustainability.',
        imageUrl: service3,
        link: '/data-management'
    },
    {
        id: 4,
        title: 'Business Intelligence',
        longDescription: 'Leveraging advanced analytics tools, we provide real-time insights for informed decision-making. Our business intelligence solutions enhance operational performance and strategic planning. Unlock the potential of your data to improve efficiency and drive growth. Stay ahead of the competition with our tailored BI strategies.',
        shortDescription: 'Transform data into actionable insights.',
        imageUrl: service4,
        link: '/data-management'
    },
];

const Service = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='service'>
      <h2>Our <span className='h2-highlight'>Services</span>,</h2>
      <div className='services'>
        {services.map(service => (
          <div className="service-item" key={service.id}>
            <img src={service.imageUrl} alt={service.title} className="service-image" />
            <div className="service-description">
              <h3>{service.title}</h3>
              <p className={isMobile ? 'short-description' : 'long-description'}>
                {isMobile ? service.shortDescription : service.longDescription}
              </p>
              <a href={service.link} className="service-link">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
