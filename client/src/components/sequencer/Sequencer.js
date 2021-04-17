import React, { useState, useEffect } from 'react'
import { Song, Track, Instrument } from 'reactronica'
import '../../styles/main.scss'

import SequencerControls from './SequencerControls'
import axios from 'axios'


const Sequencer = () => {
  // * Song State
  const [isPlaying, setIsPlaying] = useState(false)
  const [bpm, setBpm] = useState(120)
  const [volume, setVolume] = useState(100)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  // * Track State
  const [steps, setSteps] = useState(null)

  // * Instrument State
  const [synth, setSynth] = useState('monoSynth')
  const [synthList, setSynthList] = useState([])
  const [notes, setNotes] = useState([])

  // * Instrument Variables
  const synthListArray = ['amSynth', 'duoSynth', 'fmSynth', 'membraneSynth', 'metalSynth', 'monoSynth', 'pluckSynth', 'synth']
  const notesArray = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4']


  // * Form State
  const [loopTitle, setLoopTitle] = useState('')
  const [genres, setGenres] = useState([])
  const [formData, setFormData] = useState({
    title: loopTitle,
    bpm: bpm,
    steps: steps,
    synth: synth,
    genres: genres,
  })

  useEffect(() => {
    setSteps(['C3'])
    setBpm(120)
    setVolume(-5)
    setSynthList(synthListArray)
    setNotes(notesArray)
    setLoopTitle('test frontend loop')
    setGenres([2])
  }, []) 

  useEffect(() => {
    const newFormData = {
      title: loopTitle,
      steps: steps,
      bpm: bpm,
      synth: synth,
      genres: genres,
    }
    setFormData(newFormData)
    console.log('FORM DATA ->>',formData)
  }, [bpm,volume,steps,currentStepIndex,synth])


  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    // console.log('🐝 ~ file: Login.js ~ line 14 ~ event', event)
    setFormData(newFormData)
  }




  const handleSave =  async () => {

    const stringSteps = steps.join(' ')
    console.log('stringSteps: ', stringSteps)
    const formToSend = { ...formData, steps: stringSteps }
    // const formToSend = {
    //   title: '⚫️ 🔴TEST',
    //   loop_data: 'sdw',
    //   steps: 'ssss',
    //   bpm: 120,
    // }
    try {
      // await axios.post('/api/loops/', formData)
      const response = await axios.post('/api/loops/', formToSend, { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTYxOTIxNzM0NX0.JzgEhd-ITt03F8h7VAbFNCPx7Xv6a0wTroVEXWnR4EE',
        'Content-Type': 'application/json',
      } })
      console.log('🐝 ~ file: Sequencer.js ~ line 75 ~ formToSend', response)
    } catch (err) {
      console.log('🔴  Error sending loop', err)
    }
    console.log('🐝 ~ file: Sequencer.js ~ line 75 ~ formToSend', formToSend)
  }



  const handleKeyboardKeyPress = (event) => { // handles when a note is clicked to add 
    const newSteps = [...steps, event.target.value] 
    console.log('🐝 ~ file: SequencerTest.js ~ line 98 ~ newSteps', newSteps)
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

  const handleGenres = (event) => {
    const newGenres = event.target.value
    setGenres(newGenres)
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
        bpm={bpm}
        volume={volume}
        synthList={synthList}
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

      <form>
        <input
          placeholder="title"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />
        <select name="genres" onChange={handleGenres} multiple>
          <option value="1">Hip-Hop</option>
          <option value="2">Rock</option>
          <option value="3">Pop</option>
        </select>


      </form>


      <button onClick={handleSave}>
        SAVE
      </button>


    </div>
  )
}
export default Sequencer