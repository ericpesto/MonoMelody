import React from 'react'
import Select from 'react-select'

const SequencerControls = ({ synth, scale, bpm, volume, handleBpm, handleVolume, handleSynthType, handleScaleType, scaleOptions, synthOptions }) => {
  
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
          <label>synth: </label>
          {/* <select name="synth-type" onChange={handleSynthType}>
            {synthList.map(synth => {
              return <option key={synth} value={synth}>{synth}</option>
            })}
          </select> */}
          <Select
            defaultValue={synth}
            name="synth-type"
            options={synthOptions}
            classNamePrefix="select"
            onChange={handleSynthType}
            value={scale}
          />
        </div>
        <div>
          <label>scale: </label>
          {/* <select name="scale" onChange={handleScaleType}>
            {scaleList.map(scale => {
              return <option key={scale} value={scale}>{scale}</option>
            })}
          </select> */}
          <Select
            defaultValue={scale}
            name="scale"
            options={scaleOptions}
            classNamePrefix="select"
            onChange={handleScaleType}
            value={scale}
          />
        </div>
      </form>
    </div>
  )
}

export default SequencerControls
