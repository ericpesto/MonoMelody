import React, { useState, useEffect } from 'react'
import { Song, Track, Instrument } from 'reactronica'
import '../../styles/main.scss'

const SequencerTest = () => {
// const SequencerTest = (event) => {

  // * Song State
  const [isPlaying, setIsPlaying] = useState(false)
  const [bpm, setBpm] = useState(120)
  const [volume, setVolume] = useState(100)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  // * Track State
  const [steps, setSteps] = useState(null)

  // * Instrument State
  const [synth, setSynth] = useState('monoSynth')
  const [attack, setAttack] = useState(20)
  const [sustain, setSustain] = useState(20)
  const [decay, setDecay] = useState(20)
  const [release, setRelease] = useState(20)
  const [synthList, setSynthList] = useState([])
  const [notes, setNotes] = useState([])

  // * Instrument Variables
  const synthListArray = ['amSynth', 'duoSynth', 'fmSynth', 'membraneSynth', 'metalSynth', 'monoSynth', 'pluckSynth', 'synth']
  const notesArray = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4']

  // const handleLoad = () => {} // load loop from saved/other user etc..
  // const handleBpm = () => {}
  useEffect(() => {
    setSteps(['C3'])
    setBpm(120)
    setVolume(-5)
    setSynthList(synthListArray)
    setNotes(notesArray)
  }, []) 

  useEffect(() => {
    console.log(currentStepIndex)
  }, [currentStepIndex])

  const handleKeyboardKeyPress = (event) => { // handles when a note is clicked to add 
    const newSteps = [...steps, event.target.value] 
    setIsPlaying(false)
    setSteps(newSteps)
    // ! play note of button value
  } 

  const handleBpm = (event) => {
    const currentBpm = Number(event.target.value)
    setBpm(currentBpm)
  }

  const handleVolume = (event) => {
    const currentVolume = parseFloat(event.target.value)
    setVolume(currentVolume)
  }

  const handleSynthType = (event) => {
    const currentSynth = event.target.value
    setSynth(currentSynth)
  }

  // eslint-disable-next-line no-unused-vars
  const handleAttack = (event) => {
    const currentAttack = event.target.value
    setAttack(parseFloat(currentAttack))
  }

  // eslint-disable-next-line no-unused-vars
  const handleSustain = (event) => {  
    const currentSustain = event.target.value
    setSustain(parseFloat(currentSustain))
  }

  // eslint-disable-next-line no-unused-vars
  const handleDecay = (event) => {
    const currentDecay = event.target.value
    setDecay(parseFloat(currentDecay))
  }

  // eslint-disable-next-line no-unused-vars
  const handleRelease = (event) => {
    const currentRelease = event.target.value
    setRelease(parseFloat(currentRelease))
  }

  // const [envelope, setEnvelope] = useState({ 
  //   attack: attack, 
  //   decay: decay, 
  //   sustain: sustain, 
  //   release: release })
  // console.log('🐝 ~ file: App.js ~ line 88 ~ envelope', envelope)

  // eslint-disable-next-line no-unused-vars
  // const handleEnvelopeChange = (event) => {
  //   const updatedEnvelope = { ...envelope, [event.target.name]: parseFloat(event.target.value) }
  //   setEnvelope(updatedEnvelope)
  //   console.log('🐝 ~ file: App.js ~ line 97 ~ updatedEnvelope', updatedEnvelope)
  // }

  // const [formData, setFormData] = useState({
  //   title: '',
  //   synth: '',
  //   envelope: {},
  //   steps: [],
  // })
  // const handleSave = () => {
  //   formData = {...formData, }
  // }

  if (!steps) return null
  const listStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  }

  return (
    <div className="keyboard-wrapper">
      <Song 
        isPlaying={isPlaying}
        bpm={bpm}
        volume={volume}>
        <Track 
          steps={steps}
          onStepPlay={(_stepNotes, index) => {
            setCurrentStepIndex(index)
          }}>
          <Instrument 
            type={synth}
            envelope={{ attack: attack, decay: decay, sustain: sustain, release: release }}
          />
          {/* <Effect type="feedbackDelay" />
          <Effect type="distortion" /> */}
        </Track>
      </Song>
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
      <div className="note-sequence" style={{
        fontSize: '50px',
      }}>
        <ol style={listStyle}>
          {steps.map((step, index) => {
            return <li key={index} id={index} style={index === currentStepIndex ? { color: 'green' } : { color: 'black' } } className={index === currentStepIndex ? 'note-playing' : 'note-off'}> {step} </li>
          })}
        </ol>
      </div>
      <div className="keys-row">
        {notes.map(note => {
          return  <button key={note} value={note} className="key" onClick={handleKeyboardKeyPress}>{note}</button>
        })}
      </div>
      <hr />
      <button
        style={{
          fontSize: '2rem',
        }}
        onClick={() => {
          setIsPlaying(!isPlaying)
        }}
      >
        {isPlaying ? 'Stop sound' : 'Play sound'}
      </button>
    </div>
  )
}
export default SequencerTest