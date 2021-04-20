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
	            'value': 8,
	            'density': {
	                'enable': true,
	                'value_area': 800,
	            },
	        },
	        'line_linked': {
	            'enable': false,
	        },
	        'move': {
	            'speed': 1,
	            'out_mode': 'out',
	        },
	        'shape': {
	            'type': [
	                'image',
	                'circle'
	            ],
	            'image': [
	                {
	                    'src': '/react.cd2ab268.svg',
	                    'height': 20,
	                    'width': 23,
	                },
	                {
	                    'src': '/k8s.2d579d24.svg',
	                    'height': 20,
	                    'width': 20,
	                },
	                {
	                    'src': '/code.b3b4c4f4.png',
	                    'height': 20,
	                    'width': 20,
	                }
	            ],
	        },
	        'color': {
	            'value': '#ff7f08',
	        },
	        'size': {
	            'value': 30,
	            'random': false,
	            'anim': {
	                'enable': true,
	                'speed': 4,
	                'size_min': 10,
	                'sync': false,
	            },
	        },
	    },
	    'retina_detect': false,
          }} />
        {/* <div className='homepage-content'>
          <p>
          
          </p>
        </div> */}


      </div>

    </>
  )
}

export default HomePage
