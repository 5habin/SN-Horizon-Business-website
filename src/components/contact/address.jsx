import React from 'react';
import './address.css';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';  // using react-icons for icons

const address = () => {
  return (
    <div className="address-container">
      <div className="address-left">
        <FaMapMarkerAlt className="icon" />
        <div className="address">
          <h3>Office Address</h3>
          <p>123 Business Street, City, Country</p>
        </div>
      </div>

      <div className="address-right">
        <FaEnvelope className="icon" />
        <div className="email">
          <h3>Email Us</h3>
          <p>contact@company.com</p>
        </div>
      </div>
    </div>
  );
};

export default address;
