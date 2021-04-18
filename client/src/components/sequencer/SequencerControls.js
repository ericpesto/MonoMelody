import React from 'react'
import Select from 'react-select'
import '../../styles/main.scss'

const SequencerControls = ({ synth, effect, scale, bpm, volume, handleBpm, handleVolume, handleSynthType, handleScaleType, scaleOptions, synthOptions, effectOptions, handleEffectType, isPlaying, setIsPlaying, handleChange, formData, genreOptions, handleGenreSelect, genres, handleSave, handleResetSteps, key, keyOptions, handleKey }) => {

  // ! Select bug!
  
  return (
    <div>
      <form className="synth-controls-wrapper">
        <div className="synth-controls-col">
          <div>
            <label>vol(db): {volume}</label>
            <div className="slidecontainer">
              <input type="range" min="-40" max="10" value={volume} onChange={handleVolume} />
            </div>
          </div>
          <div>
            <label>bpm: {bpm}</label>
            <div className="slidecontainer">
              <input type="range" min="30" max="280" value={bpm} onChange={handleBpm} />
            </div>
          </div>
        </div>
        <div className="synth-controls-col">
          <div>
            <label>synth: {synth} </label>
            <Select
              className='react-select-container'
              defaultValue={synth}
              name="synth"
              options={synthOptions}
              onChange={handleSynthType}
              value={synth}
              placeholder={synth}
            />
          </div>
          <div>
            <label>effect: {effect} </label>
            <Select
              className='react-select-container'
              defaultValue={effect}
              name="effect"
              options={effectOptions}
              onChange={handleEffectType}
              value={effect}
              placeholder={effect}
            />
          </div>
        </div>
        <div className="synth-controls-col">
          <div>
            <label>scale: {scale} </label>
            <Select
              className='react-select-container'
              defaultValue={scale}
              name="scale"
              options={scaleOptions}
              onChange={handleScaleType}
              value={scale}
              placeholder={scale}
            />
          </div>
          <div>
            <label>key: {key} </label>
            <Select
              className='react-select-container'
              defaultValue={key}
              name="key"
              options={keyOptions}
              onChange={handleKey}
              value={key}
              placeholder={key}
            />
          </div>
        </div>
        
        
      </form>

      <button
        style={{
          fontSize: '2rem',
        }}
        onClick={() => {
          setIsPlaying(!isPlaying)
        }}
      > {isPlaying ? 'Stop sound' : 'Play sound'}</button>

      <div>
        <form>
          <input 
            className='title-input'
            placeholder="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
          <Select
            defaultValue={[genreOptions[0], genreOptions[2]]}
            isMulti
            name="genres"
            options={genreOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleGenreSelect}
            value={genres}
          />
        </form>
        <button onClick={handleSave}>SAVE</button>
        <button onClick={handleResetSteps}>RESET</button> 
      </div>

    </div>
  )
}

export default SequencerControls
