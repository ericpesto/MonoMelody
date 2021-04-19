import React from 'react'
import '../../styles/keyboard.scss'

const Keyboard = ({ notes, handleKeyboardKeyPress, handleResetSteps, isPlaying, setIsPlaying }) => {
  
  return (
    <div className="box keyboard-wrapper">
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
      <div>
        <button className={isPlaying ? 'button is-danger' : 'button is-success'} onClick={() => setIsPlaying(!isPlaying)} > {isPlaying ? 'STOP' : 'PLAY'}</button>
        <button className="button is-warning"  onClick={handleResetSteps}>RESET</button> 
      </div>
    </div>
  )
}

export default Keyboard
