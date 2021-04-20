/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import './homepage.scss'
import Typing from 'react-typing-animation'
import ParticlesBg from '../particles/ParticlesBg'

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
        <ParticlesBg />
      </div>
    </>
  )
}

export default HomePage
