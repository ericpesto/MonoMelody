/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { Link } from 'react-router-dom'
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
            <h1> Welcome to Mono_<span className="hero-bold-text">Melody<span id="orange-dot">.</span></span></h1>
            <Typing.Delay ms={500} />
            <p className="hero-text">monoMelody is a music minded social media platform. Craft your own melodies with our sequencer and share them for others to enjoy.</p>
            <Typing.Delay ms={500} />
            <Link to="/create" className="home-button">Create a loop</Link>
          </Typing>
          
        </div>
        <ParticlesBg />
      </div>
    </>
  )
}

export default HomePage
