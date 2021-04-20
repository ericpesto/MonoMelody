import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/main.scss'

import axios from 'axios'
//import { getTokenFromLocalStorage } from '../../helpers/authHelp'

import Sequencer from '../sequencer/Sequencer'
import SequencerControls from '../sequencer/SequencerControls'
import StepsDisplay from '../sequencer/StepsDisplay'


const LoopShow = () => {
  const [loop, setLoop] = useState({})

  // * Song State
  const [isPlaying, setIsPlaying] = useState(false)
  const [bpm, setBpm] = useState(120)
  const [volume, setVolume] = useState(100)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  // * Track State
  const [steps, setSteps] = useState(null)
  const [scale, setScale] = useState('phrygian')
  const [key, setKey] = useState('d')
  // * Instrument State
  const [synth, setSynth] = useState('synth')

  // * Effect State
  const [effect, setEffect] = useState([])
  const [effectsArray, setEffectsArray] = useState([])

  // * Form State
  const [loopTitle, setLoopTitle] = useState('')
  const [genres, setGenres] = useState([])
  const [genresArray, setGenresArray] = useState([])


  const params = useParams()

  useEffect(() => {
    const getLoopData = async () => {
      const response = await axios.get(`/api/loops/${params.id}`)
      setLoop(response.data)
    }
    getLoopData()
  }, [])

  useEffect(() => {
    console.log('loop ->', loop)
    setBpm()
    setSteps()
    setScale()
    setKey()
    setSynth()
    setEffect()
    setEffectsArray()
    setLoopTitle()
    setGenres()
    setGenresArray()
    console.log(bpm)
    console.log(steps)
    console.log(scale)
    console.log(key)
    console.log(synth)
    console.log(effect)
    console.log(effectsArray)
    console.log(loopTitle)
    console.log(genres)
    console.log(genresArray)
  }, [loop])

  const handleVolume = (event) => {
    const currentVolume = parseFloat(event.target.value)
    setVolume(currentVolume)
  }

  if (!steps) return null
  return (
    <div className="loop-wrapper">
      <Sequencer 
        isPlaying={isPlaying}
        bpm={bpm}
        volume={volume}
        steps={steps}
        synth={synth}
        setCurrentStepIndex={setCurrentStepIndex}
        effectsArray={effectsArray}  
      />
      <SequencerControls 
        // need controlls for just volume on loop show
        handleVolume={handleVolume}
        volume={volume}
      />
      <StepsDisplay 
        currentStepIndex={currentStepIndex} 
        steps={steps} 
        // handleResetSteps={handleResetSteps} 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying} 
      />
    </div>
  )
}

export default LoopShow