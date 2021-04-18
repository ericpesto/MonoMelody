import React from 'react'

const Keyboard = ({ notes, handleKeyboardKeyPress }) => {
  
  return (
    <div>
      <div className="keys-row">
        {notes.map((note, index) => {
          return  <button 
            key={note} 
            value={note} 
            className="key" 
            onClick={handleKeyboardKeyPress}
          >{index + 1}</button>
        })}
      </div>
    </div>
  )
}

export default Keyboard
