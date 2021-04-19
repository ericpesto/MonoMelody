import React from 'react'
import '../../styles/main.scss'

const StepsDisplay = ({ steps, currentStepIndex }) => {

  if (!steps) return null
  return (
    <div className="box">
      <div className="sequence-wrapper">
        {steps.map((step, index) => {
          return <div key={index} id={index} className={index === currentStepIndex ? 'step-div-active note' : 'step-div-inactive note' }> {step} </div>
        })}
      </div>
    </div>
  )
}

export default StepsDisplay


// <div className="box">
// <div className="note-sequence" style={{ fontSize: '3vmax' }}>

//   <ol style={listStyle}>
//     {steps.map((step, index) => {
//       return <li key={index} style={{ margin: '0 12px' }}><div id={index} style={index === currentStepIndex ? { color: 'green', transform: 'scale(1.4)', transition: 'all 0.4s' } : { color: 'grey', transition: 'all 0.4s' } } className={index === currentStepIndex ? 'note-playing' : 'note-off'}> {step} </div></li>
//     })}
//   </ol>
// </div>
// </div>