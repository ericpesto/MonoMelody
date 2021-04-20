/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import './homepage.scss'
import Typing from 'react-typing-animation'
import Particles from 'react-particles-js'

const HomePage = () => {




  return (
    <>
      <div className="homepage-wrapper">
        

        <div className="hero">

          <Typing>
            <Typing.Delay ms={1000} />
            <h1> Welcome to Mono<span className="hero-bold-text">Melody<span id="orange-dot">.</span></span></h1>
            <Typing.Delay ms={500} />
            <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis sem lacus, nec laoreet augue dignissim vitae. Nulla facilisi. Donec eu velit pretium nulla rutrum venenatis.</p>
            <Typing.Delay ms={500} />
            <button className="button">Create</button>
          </Typing>
          
        </div>
        
     
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
      </div>
    </>
  )
}

export default HomePage
