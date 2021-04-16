import React, {  } from 'react'

const SequencerControls = ({ bpm, volume, synthList, attack, sustain, decay, release, handleBpm, handleVolume, handleSynthType, handleAttack, handleSustain, handleDecay, handleRelease }) => {
  

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
        <div className='envelope-controller'>
          <label>attack: {attack}</label>
          <div className="slidecontainer">
            <input type="range" min="-500" max="500" value={Math.floor(attack)} onChange={handleAttack} />
            {/* <input name='attack' type="range" min="-500" max="500" value={Math.floor(attack)} onChange={handleEnvelopeChange} /> */}
          </div>
          <label>sustain: {sustain}</label>
          <div className="slidecontainer">
            <input type="range" min="-500" max="500" value={Math.floor(sustain)} onChange={handleSustain} />
            {/* <input name='sustain' type="range" min="-500" max="500" value={Math.floor(sustain)} onChange={handleEnvelopeChange} /> */}
          </div>
          <label>decay: {decay}</label>
          <div className="slidecontainer">
            <input type="range" min="-500" max="500" value={Math.floor(decay)} onChange={handleDecay} />
            {/* <input name='decay' type="range" min="-500" max="500" value={Math.floor(decay)} onChange={handleEnvelopeChange} /> */}
          </div>
          <label>release: {release}</label>
          <div className="slidecontainer">
            <input type="range" min="-500" max="500" value={Math.floor(release)} onChange={handleRelease} />
            {/* <input name='release' type="range" min="-500" max="500" value={Math.floor(release)} onChange={handleEnvelopeChange} /> */}
          </div>
        </div>
      </form>
    </div>
  )
}

export default SequencerControls
