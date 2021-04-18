import React from 'react'
import Select from 'react-select'

const SequencerControls = ({ synth, effect, scale, bpm, volume, handleBpm, handleVolume, handleSynthType, handleScaleType, scaleOptions, synthOptions, effectOptions, handleEffectType }) => {
  
  return (
    <div>
      <form>
        <div>
          <label>vol(db): {volume}</label>
          <div className="slidecontainer">
            <input type="range" min="-20" max="20" value={volume} onChange={handleVolume} />
          </div>
        </div>
        <div>
          <label>bpm: {bpm}</label>
          <div className="slidecontainer">
            <input type="range" min="30" max="280" value={bpm} onChange={handleBpm} />
          </div>
        </div>
        <div>
          <label>synth: {synth} </label>
          <Select
            defaultValue={synth}
            name="synth"
            options={synthOptions}
            // classNamePrefix="select"
            onChange={handleSynthType}
            value={synth}
          />
        </div>
        <div>
          <label>scale: {scale} </label>
          <Select
            defaultValue={scale}
            name="scale"
            options={scaleOptions}
            // classNamePrefix="select"
            onChange={handleScaleType}
            value={scale}
          />
        </div>
        <div>
          <label>effect: {effect} </label>
          <Select
            defaultValue={effect}
            name="effect"
            options={effectOptions}
            // classNamePrefix="select"
            onChange={handleEffectType}
            value={effect}
          />
        </div>
      </form>
    </div>
  )
}

export default SequencerControls
