import React from 'react'

const SequencerControls = ({ bpm, volume, synthList, scaleList, handleBpm, handleVolume, handleSynthType, handleScaleType }) => {
  
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
          <select name="synth-type" onChange={handleSynthType}>
            {synthList.map(synth => {
              return <option key={synth} value={synth}>{synth}</option>
            })}
          </select>
        </div>
        <div>
          <label>scale: </label>
          <select name="scale" onChange={handleScaleType}>
            {scaleList.map(scale => {
              return <option key={scale} value={scale}>{scale}</option>
            })}
          </select>
        </div>
      </form>
    </div>
  )
}

export default SequencerControls
