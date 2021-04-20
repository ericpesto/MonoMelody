import React from 'react'
import { Link } from 'react-router-dom'
import './sphere.scss'
const MelodySphere = (props) => {

  console.log('🐝 ~ file: MelodySphere.js ~ line 4 ~ props', props)
  const { title, id } = props
  const genre = props.genres[0].name
  console.log('🐝 ~ file: MelodySphere.js ~ line 8 ~ genre', genre)
  
  
  return (
    <div className={`sphere bounceInDown ${genre.toLowerCase()}`}>
      <div className='sphere-content'>
        <h1>{title}</h1> 
        <h2>{genre}</h2> 
        <Link to={`/loop/${id}`}>Listen</Link>
      </div>
    </div>
  )
}

export default MelodySphere
