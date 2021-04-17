import React, { useState, useEffect } from 'react'
import { Song, Track, Instrument } from 'reactronica'
import '../../styles/main.scss'

import SequencerControls from './SequencerControls'
import axios from 'axios'
import Select from 'react-select'
import { getTokenFromLocalStorage } from '../../helpers/authHelp'


const Sequencer = () => {
  // * Song State
  const [isPlaying, setIsPlaying] = useState(false)
  const [bpm, setBpm] = useState(120)
  const [volume, setVolume] = useState(100)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  // * Track State
  const [steps, setSteps] = useState(null)
  const [scale, setScale] = useState('major')

  // * Instrument State
  const [synth, setSynth] = useState('duoSynth')
  const [synthList, setSynthList] = useState([])
  const [notes, setNotes] = useState([])

  // * Form State
  const [loopTitle, setLoopTitle] = useState('')
  const [genres, setGenres] = useState([])
  const [genresArray, setGenresArray] = useState([])
  // console.log('🐝 ~ file: Sequencer.js ~ line 32 ~ genres', genres)
  const [formData, setFormData] = useState({
    title: loopTitle,
    bpm: bpm,
    steps: steps,
    synth: synth,
    genres: genresArray,
  })

  // * Global Variables
  // const synthListArray = ['amSynth', 'duoSynth', 'fmSynth', 'membraneSynth', 'metalSynth', 'monoSynth', 'pluckSynth', 'synth']
  const synthListArray = ['duoSynth', 'fmSynth', 'membraneSynth', 'pluckSynth', 'synth']
  const synthOptions = [
    { value: 'duoSynth', label: 'duoSynth' },
    { value: 'fmSynth', label: 'fmSynth' },
    { value: 'membraneSynth', label: 'membraneSynth' },
    { value: 'pluckSynth', label: 'pluckSynth' }, 
    { value: 'synth', label: 'synth' }
  ]
  let notesArray = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4']
  const scaleList = ['major', 'minor', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'locrian' ]

  const scaleOptions = [
    { value: 'major', label: 'major' },
    { value: 'minor', label: 'minor' },
    { value: 'dorian', label: 'dorian' },
    { value: 'phrygian', label: 'phrygian' }, 
    { value: 'lydian', label: 'lydian' }, 
    { value: 'mixolydian', label: 'mixolydian' }, 
    { value: 'locrian' , label: 'locrian'  }, 
    { value: 'phrygian', label: 'phrygian' }
  ]
  const genreOptions = [
    { id: '1', value: 1, name: 'Hip-Hop', label: 'Hip-Hop' },
    { id: '2', value: 2, name: 'Rock', label: 'Rock' },
    { id: '3', value: 3, name: 'Pop', label: 'Pop' }
  ]

  const handleScales = () => {
    console.log('SCALE', scale)
    if (scale === 'major') {
      notesArray = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4']
      setNotes(['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4'])
    }

    if (scale === 'minor') {
      notesArray = ['C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3', 'Bb3', 'C4']
      setNotes(['C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3', 'Bb3', 'C4'])
    }

    if (scale === 'dorian') {
      notesArray = ['C3', 'D3', 'Eb3', 'F3', 'G3', 'A3', 'Bb3', 'C4']
      setNotes(['C3', 'D3', 'Eb3', 'F3', 'G3', 'A3', 'Bb3', 'C4'])
    }

    if (scale === 'phrygian') {
      notesArray = ['C3', 'Db3', 'Eb3', 'F3', 'G3', 'Ab3', 'Bb3', 'C4']
      setNotes(['C3', 'Db3', 'Eb3', 'F3', 'G3', 'Ab3', 'Bb3', 'C4'])
    }

    if (scale === 'lydian') {
      notesArray = ['C3', 'D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C4']
      setNotes(['C3', 'D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C4'])
    }

    if (scale === 'mixolydian') {
      notesArray = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'Bb3', 'C4']
      setNotes(['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'Bb3', 'C4'])
    }

    if (scale === 'locrian') {
      notesArray = ['C3', 'Db3', 'Eb3', 'F3', 'Gb3', 'Ab3', 'Bb3', 'C4']
      setNotes(['C3', 'Db3', 'Eb3', 'F3', 'Gb3', 'Ab3', 'Bb3', 'C4'])
    }

    return notesArray
  }




  useEffect(() => {
    setSteps([null])
    setBpm(120)
    setVolume(-5)
    setSynthList(synthListArray)
    //setNotes(notesArray)
    setLoopTitle('test frontend loop')
    setScale('phrygian')
  }, []) 

  useEffect(() => {
    handleScales()
  }, [scale])

  useEffect(() => {
    const newFormData = {
      title: loopTitle,
      steps: steps,
      bpm: bpm,
      synth: synth,
      genres: genresArray,
    }
    setFormData(newFormData)
  }, [loopTitle])


  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSave =  async () => {
    const stringSteps = steps.join(' ')
    const formToSend = { ...formData, steps: stringSteps }
    console.log('formToSend-> ', formToSend)

    try {
      await axios.post('/api/loops/', formToSend, { headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}`, 'Content-Type': 'application/json' } })
    } catch (err) {
      console.log(err)
    }

  }

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

  // const handleSynthType = (event) => {
  //   const currentSynth = event.target.value
  //   setSynth(currentSynth)
  // }

  const handleSynthType = (scaleOptions) => {
    const currentSynth = scaleOptions.value
    setSynth(currentSynth)
  }

  const handleGenreSelect = (genreOptions) => {
    const genreValuesArray = []
    genreOptions.map(option => {
      genreValuesArray.push(option.value)
    })
    console.log('genreValuesArray ->', genreValuesArray)
    setGenres(genreOptions)
    setGenresArray(genreValuesArray)
  }

  const handleScaleType = (scaleOptions) => {
    const currentScale =  scaleOptions
    console.log('currentScale ->', currentScale)
    setScale(currentScale.value)
  }

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
        // isPlaying={isPlaying}
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
          />
          {/* <Effect type="feedbackDelay" />
          <Effect type="distortion" /> */}
        </Track>
      </Song>
      <SequencerControls 
        handleBpm={handleBpm}
        handleVolume={handleVolume}
        handleSynthType={handleSynthType}
        handleScaleType={handleScaleType}
        synth={synth}
        bpm={bpm}
        volume={volume}
        synthList={synthList}
        scaleList={scaleList}
        scaleOptions={scaleOptions}
        synthOptions={synthOptions}
      />
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
          return  <button 
            key={note} 
            value={note} 
            className="key" 
            onClick={handleKeyboardKeyPress}
            // onMouseDown={() => setNotes([{ name: note }])}
            // onMouseUp={() => setNotes([null])} 
          >{note}</button>
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
      > {isPlaying ? 'Stop sound' : 'Play sound'}</button>
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
    </div>
  )
}

export default Sequencer