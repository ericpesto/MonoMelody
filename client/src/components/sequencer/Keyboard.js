import React from 'react'

const Keyboard = ({ notes, handleKeyboardKeyPress }) => {
  
  return (
    <div>
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
    </div>
  )
}

export default Keyboard
