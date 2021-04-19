import React from 'react'
import '../../styles/main.scss'

const StepsDisplay = ({ steps, currentStepIndex }) => {

  if (!steps) return null
  return (
    <div className="box">
      <div className="sequence-wrapper">
        {steps.map((step, index) => {
          return <div key={index} id={index} className={index === currentStepIndex ? 'step-div-active note' : 'step-div-inactive note' }> {index + 1} </div>
        })}
      </div>
    </div>
  )
}

export default StepsDisplay
