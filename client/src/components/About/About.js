/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import '../../styles/main.scss'
import Particles from 'react-particles-js'



const About = () => {  

  return (
    <>
      <main className="loop-wrapper">
        <div className="box">
          <div className="section-header-about section-header-create">
            <h1 className="about-title">Meet the team:</h1>    
            <br />
            <div className="section-wrapper-about">  
              <p className="name">Eric Petsopoulos</p>
              <p className="about">https://github.com/ericpesto</p>
              <p className="about">https://www.linkedin.com/in/eric-petsopoulos-b5751761/</p>
            </div>
            <br />
            <div className="section-wrapper-about"> 
              <p className="name">Sami Hakim</p> 
              <p className="about">https://github.com/Hamisakim</p>
              <p className="about">https://www.linkedin.com/in/samihakim/</p>
            </div>
          </div>
        </div>

      </main>
      <Particles
        className="particles-wrapper"
        
        params={{
	    'particles': {
	        'number': {
	            'value': 20,
	            'density': {
	                'enable': true,
	            },
	        },
            'color': {
              'value': '#ff7f08',
            },
	        'size': {
	            'value': 20,
	            'random': true,
	            'anim': {
	                'speed': 3,
	                'size_min': 0.3,
	            },
	        },
	        'line_linked': {
	            'enable': true,
              'opacity': 0.1,
              'distance': 280,
	        },
	        'move': {
	            'random': true,
	            'speed': 0.6,
	            'direction': 'top',
	            'out_mode': 'out',
	        },
	    },
	    'interactivity': {
	        'events': {
	            'onhover': {
	                'enable': true,
	                'mode': 'bubble',
	            },
	            'onclick': {
	                'enable': true,
	                'mode': 'repulse',
	            },
	        },
	        'modes': {
	            'bubble': {
	                'distance': 250,
	                'duration': 2,
	                'size': 0,
	                'opacity': 0.1,
	            },
	            'repulse': {
	                'distance': 300,
	                'duration': 4,
	            },
	        },
	    },
        }} />
    </>
  )

}

export default About