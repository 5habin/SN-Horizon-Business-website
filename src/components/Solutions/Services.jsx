import React, { useState } from 'react';
import './Services.css';
import Nav from '../Nav/nav';
import Contact from '../contact/contact';
import serviceImage1 from './dummy-image1.png'; // Dummy image for Strategic Consulting
import serviceImage2 from './dummy-image2.png'; // Dummy image for Sustainability
import serviceImage3 from './dummy-image3.png'; // Dummy image for Business Intelligence
import serviceImage4 from './dummy-image4.png'; // Dummy image for Data Management

const servicesData = [
  {
    title: "Strategic Consulting & Digital Transformation",
    content: {
      description: "Our strategic consulting services help brands navigate digital transformation, adopt DTC models, and identify growth opportunities in a fast-paced market.",
      image: serviceImage1,
      bulletPoints: [
        "Digital Transformation Roadmap",
        "E-Commerce & Direct-to-Consumer (DTC) Model Development",
        "Digital Strategy & Innovation",
        "Process Automation & Efficiency",
        "Change Management & Training"
      ]
    }
  },
  {
    title: "Sustainability Consulting",
    content: {
      description: "We guide businesses toward eco-friendly practices, helping them reduce their carbon footprint and achieve sustainability certifications.",
      image: serviceImage2,
      bulletPoints: [
        "Sustainability Strategy Development",
        "Carbon Footprint Assessment & Reduction",
        "Sustainable Supply Chain Optimization",
        "Sustainability Certifications & Compliance",
        "Waste Reduction & Circular Economy",
        "Sustainable Packaging Solutions"
      ]
    }
  },
  {
    title: "Business Intelligence & Reporting",
    content: {
      description: "SN Horizon’s business intelligence solutions empower companies with real-time data and insights, enabling smart decision-making and strategic growth.",
      image: serviceImage3,
      bulletPoints: [
        "Custom Dashboards & KPI Tracking",
        "Market & Consumer Insights",
        "Sales & Financial Reporting Automation",
        "Data Visualization & Reporting Tools",
        "Predictive Analytics & Forecasting",
        "Data Integration & Consolidation"
      ]
    }
  },
  { 
    title: "Data Management & AI Solutions",
    content: {
      description: "We offer end-to-end data management and AI-powered solutions to help companies harness the power of their data for better decision-making.",
      image: serviceImage4,
      bulletPoints: [
        "Data Strategy & Governance",
        "AI-Powered Analytics",
        "Data Warehousing & Integration",
        "Machine Learning & Predictive Modeling",
        "Data Cleansing & Quality Management",
        "AI-Driven Customer Personalization"
      ]
    }
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const toggleService = (index) => {
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <div className='service-page'>
      <Nav />
      <div className='service-head'>
        <h1>Solutions We Provide</h1>
      </div>
      <div className='content-container'> 
        <div className='para'>
          <p>
            At SN Horizon, we are dedicated to empowering brands through innovative solutions tailored to meet the unique challenges of the consumer products industry. 
            Our suite of services encompasses strategic consulting, digital transformation, sustainability consulting, business intelligence, and data management powered by AI. 
            We partner with our clients to drive sustainable growth, enhance operational efficiency, and harness the power of data for informed decision-making. With a commitment to excellence, 
            we enable organizations to adapt and thrive in an ever-evolving marketplace.
          </p>
        </div>
        <div className="services-container">
          {servicesData.map((service, index) => (
            <div key={index} className={`service-section ${index === servicesData.length - 1 ? 'last-service' : ''}`}>
              <h2
                className={`service-title ${selectedService === index ? 'active' : ''}`}
                onClick={() => toggleService(index)}
              >
                {service.title}
              </h2>
              {selectedService === index && (
                <div className={`service-content ${selectedService === index ? 'active' : ''}`}>
                  <p>{service.content.description}</p>
                  <div className="service-image-container">
                    <img src={service.content.image} alt={service.title} className="service-image" />
                    <ul>
                      {service.content.bulletPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Contact/>
    </div>
  );
};

export default Services;
