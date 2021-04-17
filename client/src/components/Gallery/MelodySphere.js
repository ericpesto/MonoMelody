import React from 'react'
import './sphere.scss'
const MelodySphere = (props) => {

  console.log('🐝 ~ file: MelodySphere.js ~ line 4 ~ props', props)
  const { title } = props

  
   
  
  return (
    <div className='sphere bounceInDown glowing'>
      <h1>{title}</h1>
    </div>
  )
}

export default MelodySphere
