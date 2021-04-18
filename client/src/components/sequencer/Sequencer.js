import React, { useState, useEffect } from 'react'
import { Song, Track, Instrument, Effect } from 'reactronica'
import '../../styles/main.scss'

import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/authHelp'

import SequencerControls from './SequencerControls'
import Keyboard from './Keyboard'
import StepsDisplay from './StepsDisplay'


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
  const [notes, setNotes] = useState([])

  // * Effect State
  const [effect, setEffect] = useState('freeverb')

  // * Form State
  const [loopTitle, setLoopTitle] = useState('')
  const [genres, setGenres] = useState([])
  const [genresArray, setGenresArray] = useState([])
  const [formData, setFormData] = useState({
    title: loopTitle,
    bpm: bpm,
    steps: steps,
    synth: synth,
    genres: genresArray,
    scale: scale,
    effect: effect,
  })

  // * Global Variables

  let notesArray = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4']

  const synthOptions = [
    { value: 'duoSynth', label: 'duoSynth' },
    { value: 'fmSynth', label: 'fmSynth' },
    { value: 'membraneSynth', label: 'membraneSynth' },
    { value: 'pluckSynth', label: 'pluckSynth' }, 
    { value: 'synth', label: 'synth' }
  ]
  
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

  const effectOptions = [
    { value: 'autoFilter', label: 'autoFilter' },
    { value: 'autoPanner', label: 'autoPanner' },
    { value: 'autoWah', label: 'autoWah' },
    { value: 'bitCrusher', label: 'bitCrusher' }, 
    { value: 'distortion', label: 'distortion' }, 
    { value: 'feedbackDelay', label: 'feedbackDelay' }, 
    { value: 'freeverb' , label: 'freeverb'  }, 
    { value: 'panVol', label: 'panVol' },
    { value: 'tremolo', label: 'tremolo' }
  ]

  const genreOptions = [
    { id: '1', value: 1, name: 'Hip-Hop', label: 'Hip-Hop' },
    { id: '2', value: 2, name: 'Rock', label: 'Rock' },
    { id: '3', value: 3, name: 'Pop', label: 'Pop' }
  ]

  useEffect(() => {
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
  }, [scale])

  // ! FORM BUG
  useEffect(() => {
    setSteps([null])
    setVolume(-5)
    // setSynthList(synthListArray)
    setLoopTitle('')
  }, []) 

  useEffect(() => {
    const newFormData = {
      title: loopTitle,
      steps: steps,
      bpm: bpm,
      synth: synth,
      genres: genresArray,
      scale: scale,
      effect: effect,
    }
    setFormData(newFormData)
  }, [loopTitle, steps, bpm, synth, genresArray, scale, effect])

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

  const handleKeyboardKeyPress = (event) => { 
    const newSteps = [...steps, event.target.value]
    if (newSteps.length <= 9) {
      setIsPlaying(false) 
      setSteps(newSteps)
    }
  } 

  useEffect(() => {
    setIsPlaying(!isPlaying)
  }, [steps])

  const handleBpm = (event) => {
    const currentBpm = Number(event.target.value)
    setBpm(currentBpm)
  }

  const handleVolume = (event) => {
    const currentVolume = parseFloat(event.target.value)
    setVolume(currentVolume)
  }

  const handleSynthType = (synthOptions) => {
    const currentSynth = synthOptions.value
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
    const currentScale =  scaleOptions.value
    console.log('currentScale ->', currentScale)
    setScale(currentScale)
  }

  const handleEffectType = (effectOptions) => {
    const currentEffect =  effectOptions.value
    console.log('currentEffect ->', currentEffect)
    setEffect(currentEffect)
  }

  const handleResetSteps = () => {
    setSteps([null])
    setIsPlaying(false)
  }

  if (!steps) return null
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
          <Effect type={effect} />
        </Track>
      </Song>
      <SequencerControls 
        handleBpm={handleBpm}
        handleVolume={handleVolume}
        handleSynthType={handleSynthType}
        handleScaleType={handleScaleType}
        handleEffectType={handleEffectType}
        synth={synth}
        effect={effect}
        bpm={bpm}
        volume={volume}
        scaleOptions={scaleOptions}
        synthOptions={synthOptions}
        effectOptions={effectOptions}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        handleChange={handleChange}
        formData={formData}
        genreOptions={genreOptions}
        handleGenreSelect={handleGenreSelect}
        genres={genres}
        handleSave={handleSave}
        handleResetSteps={handleResetSteps}
      />
      <hr />
      <Keyboard notes={notes} handleKeyboardKeyPress={handleKeyboardKeyPress} />
      <hr />
      <StepsDisplay 
        currentStepIndex={currentStepIndex} 
        steps={steps} />
    </div>
  )
}

export default Sequencer