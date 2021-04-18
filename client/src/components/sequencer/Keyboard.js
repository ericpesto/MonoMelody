import React from 'react'

const Keyboard = ({ notes, handleKeyboardKeyPress, handleResetSteps }) => {
  
  return (
    <div>
      <p>Steps</p>
      <div className="keys-row">
        {notes.map((note) => {
          return  <button 
            key={note} 
            value={note} 
            className="key" 
            onClick={handleKeyboardKeyPress}
          >{note}</button>
        })}
      </div>
      <button onClick={handleResetSteps}>RESET</button> 
    </div>
  )
}

export default Keyboard
