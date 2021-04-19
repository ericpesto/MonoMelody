import React from 'react'
import './sphere.scss'
const MelodySphere = (props) => {

  console.log('🐝 ~ file: MelodySphere.js ~ line 4 ~ props', props)
  const { title } = props
  const genre = props.genres[0].name
  console.log('🐝 ~ file: MelodySphere.js ~ line 8 ~ genre', genre)
  
  const randomHexCode  = Math.floor(Math.random() * 16777215).toString(16)
  const boxShadowRandomizer = {
    boxShadow: `0 0 20px #${randomHexCode}`,
  }
  
  return (
    <div style={boxShadowRandomizer} className={`sphere bounceInDown ${genre.toLowerCase()} `}>
      <div className='sphere-content'>
        <h1>{title}</h1> 
        <h2>{genre}</h2> 
        
      </div>
    </div>
  )
}

export default MelodySphere
