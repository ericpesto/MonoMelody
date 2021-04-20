import React from 'react'
import '../../styles/main.scss'

const LoopInfoCard = ({ loop, loopTitle, bpm, scale, synth }) => {
  //if (!loopTitle) return null
  console.log('loop info card', loop)
  return (
    <div className="box">
      <h1>{loopTitle}</h1>
      <p>{bpm}</p>
      <p>{scale}</p>
      <p>{synth}</p>
    </div>
  )
}

export default LoopInfoCard
