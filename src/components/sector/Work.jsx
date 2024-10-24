import React from 'react';
import './Work.css';

const workData = [
  {
    number: '1',
    title: 'Project-Based Consulting',
    description: 'One-off consulting engagements to solve specific business challenges.'
  },
  {
    number: '2',
    title: 'Ongoing Retainer Services',
    description: 'Continuous support and strategic consulting as a trusted partner for long-term projects.'
  },
  {
    number: '3',
    title: 'Staff Augmentation',
    description: 'Providing expert resources to support your in-house teams for large or complex projects.'
  },
  {
    number: '4',
    title: 'Engagements',
    description: 'Tailored service models based on client needs, ensuring flexibility and value.'
  }
];

const Work = () => {
  return (
    <div className='work-section'>
      <div className='work'>
        <div className='work-head'>
          <h2>How we work with you</h2>
        </div>
      </div>
      <div className="work-container">
        {workData.map((work, index) => (
          <div className="work-box" key={index}>
            <div className="work-number">{work.number}</div>
            <h3 className="work-title">{work.title}</h3>
            <p className="work-description">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
