import React from 'react'
import Nav from '../Nav/nav.jsx'
import './contactUs.css'
import Contact from './contact.jsx'
import Address from './address.jsx'

const contactUs = () => {
  return (
    <div className='contactus'>
        <div className='contact-nav'>
            <Nav/>
        </div>
        <div className='contact-address'>
            <Address/>
        </div>
        <div className='contact-details'>
            <Contact/>
        </div>
    </div>
  )
}

export default contactUs;
