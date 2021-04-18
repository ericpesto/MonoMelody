import React from 'react'

const StepsDisplay = ({ steps, currentStepIndex }) => {

  const listStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  }

  if (!steps) return null
  return (
    <div>
      <div className="note-sequence" style={{ fontSize: '3vmax' }}>

        <ol style={listStyle}>
          {steps.map((step, index) => {
            return <li key={index} style={{ margin: '0 12px' }}><div id={index} style={index === currentStepIndex ? { color: 'green', transform: 'scale(1.4)', transition: 'all 0.4s' } : { color: 'white', transition: 'all 0.4s' } } className={index === currentStepIndex ? 'note-playing' : 'note-off'}> {step} </div></li>
          })}
        </ol>
      </div>
    </div>
  )
}

export default StepsDisplay
