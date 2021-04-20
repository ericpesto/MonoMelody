/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import '../../styles/main.scss'
import ParticlesBg from '../particles/ParticlesBg'



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
      <ParticlesBg />
    </>
  )

}

export default About