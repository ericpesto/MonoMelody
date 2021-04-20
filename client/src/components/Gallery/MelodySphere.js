import React from 'react'
import './sphere.scss'
const MelodySphere = (props) => {

  // console.log('🐝 ~ file: MelodySphere.js ~ line 4 ~ props', props)
  const { title, likes } = props
  // console.log('🐝 ~ file: MelodySphere.js ~ line 7 ~ likes', likes)
  const genre = props.genres[0].name
  
  // console.log('🐝 ~ file: MelodySphere.js ~ line 8 ~ genre', genre)
  
  const randomHexCode  = Math.floor(Math.random() * 16777215).toString(16)
  const boxShadowRandomizer = {
    boxShadow: `0 0 30px #${randomHexCode}`,
  }
  
  return (
    <div style={boxShadowRandomizer} className={`sphere bounceInDown ${genre.toLowerCase()} `}>
      <div className='sphere-content'>
        <h1>{title}</h1> 
        <h2 className='sphere-genre'>{genre}</h2> 
        <h3>{likes.length} likes</h3>
        
      </div>
    </div>
  )
}

export default MelodySphere
