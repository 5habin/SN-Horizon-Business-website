import React from 'react'
import './about.css'

const about = () => {
  return (
    <div className='content'>


        <div className='pc-content'>
            <div className="about-section ">
                <div className="about-left">
                    <h1>What is <br/>
                    <span className="highlight">SN Horizon</span>?
                    </h1>
                </div>
                <div className="about-right">
                    <div className='about-right-box'>
                    <p>
                        <span className="right-highlight" >SN Horizon</span> is a cutting-edge consulting firm focusing on AI-powered solutions, digital transformation, 
                        and sustainability consulting tailored for the Consumer Products Industry. We enable brands to innovate, 
                        adapt, and thrive in a competitive market through our deep expertise and commitment to excellence.
                    </p>
                    </div>    
                </div>
            </div>

                <div className="about-section ">
                    <div className="about-left">
                        <h1 className='focus-h1'>We <br/>
                        <span className="highlight">Focus</span> on..
                        </h1>
                    </div>
                    <div className="about-right">
                        <div className='about-right-box'>
                            <p className='browser-right'>
                            We focus on innovation, sustainability, and long-term value creation.
                            Our mission is to empower organizations to adapt to the evolving market landscape while promoting responsible  
                            growth that benefits both our clients and the environment. Together, we shape a sustainable future.
                            </p>
                        </div>    
                    </div>
             </div>
        </div>  

 
        <div className='mobile-content'>
            <div className='about-mobile'>
                <h1>What is <span className="highlight">SN Horizon</span>?
                </h1>
                <p> 
                    <span className="right-highlight" >SN Horizon</span> is a cutting-edge consulting firm specializing in AI-driven solutions and
                    digital transformation for the Consumer Products Industry. We empower brands to innovate and excel in a competitive market.
                </p>
            </div>
            <div className='about-mobile'>
                <h1>We <span className="highlight">Focus</span> on..
                </h1>
                <p> 
                   innovation and sustainability to empower organizations in adapting to evolving markets while promoting responsible growth. 
                   Together, we shape a sustainable future that benefits both our clients and the environment.
                </p>
            </div>
        </div>
    </div>
    
 );
};

export default about

