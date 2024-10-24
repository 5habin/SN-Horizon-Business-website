import React from 'react';
import './story.css';
import Nav from '../nav/nav'; 
import Storysec from './sections/storysec/storysection'
import Info from './sections/info/info'
import Mission from './sections/mission/mission'
import Contact from '../contact/contact'

const Story = () => {
  return (
    <div className='story'>
       <Nav />  {/* Using the original Nav component */}
       <div className='heading'>
         <h1>Learn about our story, history, leadership teams, and more.</h1>
         <Storysec/>
         <Info/>
         <Mission/>
         <Contact/>
       </div>
    </div>
  );
};

export default Story;
