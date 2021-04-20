import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MelodySphere from './MelodySphere'
import './gallery.scss'
const Gallery = () => {
  const [data, setData] = useState(null)
  const [genres, setGenres] = useState(null)
  const [genreFilter, setGenreFilter] = useState(null) //should be ids to check 
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/loops/')
      setData(response.data)
    }
    const getGenres = async () => {
      const response = await axios.get('/api/genres/')
      const dataArray = response.data
      const arrayOfGenreNames = []
      const arrayOfGenreId = []
      dataArray.map(genre =>{
        arrayOfGenreNames.push(genre.name)
        arrayOfGenreId.push(genre.id)
      })
      setGenres(response.data)
    }
    getData()
    getGenres()
  },[])
  const handleGenreSelect = (event) => {
    const genreId =  Number(event.target.value)
    let genreArray = []
    !genreFilter ? genreArray = [] :
      genreArray = [...genreFilter]
    const preventDuplicate = genreArray.findIndex(e => e === genreId)
    if (preventDuplicate === -1){
      genreArray.push(genreId)
      setGenreFilter(genreArray)
    } else {
      genreArray.splice(preventDuplicate, 1)
      setGenreFilter(genreArray)
    }
  }
  if (!data || !genres) return <div className='load-page'><h1>NO DATA!</h1></div>
  return ( 
    <>
      <div className='gallery component'>
        <div className='gallery-filter'> 
          <div className='active-filter'>
          </div>
          { 
            genres.map(genre=>{
              console.log(genreFilter)
              const selectedFilter = {
                backgroundColor: '#FF0000',
              }
              const notSelected = {
                backgroundColor: '#00FF00',
              }
              let style = notSelected
              //if genre.id is in the filter array then change color 
              if (!genreFilter){
                style = notSelected
              } else if (genreFilter.findIndex(e => e === genre.id) > -1 ){
                style = selectedFilter
              }
              return (
                <button
                // style={buttonBackground}
                  className='genre-tag-button' 
                  key={genre.id} 
                  value={genre.id}
                  style={style}
                  onClick={() => {
                    handleGenreSelect(event)
                  }} 
                >
                  {genre.name}
                </button>
              )
            })
          }
        </div>
        <div className='sphere-display columns is-multiline'>
          { !genreFilter &&
        data.map(item=>{
          return (
            <div className='column' key={item.id} >
              <MelodySphere  {...item}/>
            </div>
          )
        })
          }
          {genreFilter && 
            data.map(item=>{
              // const itemGenreId = item.genres[0].id //!first genre id
              const genreIdsToCheck = []
              const allGenresArray = item.genres
              allGenresArray.map(genre=>{
                genreIdsToCheck.push(genre.id)
              })
              const checkIfFilterMatchesGenre = () => {
                const checkIfInFilter = (id) => {
                  return genreFilter.findIndex(e => e === id)
                }
                for (let i = 0; i < genreIdsToCheck.length; i++){
                  const result = checkIfInFilter(genreIdsToCheck[i])
                  if ( result > -1) return true
                }
                return false
              }
              if (checkIfFilterMatchesGenre())
                return (
                  <div className='column' key={item.id} >
                    <MelodySphere  {...item}/>
                  </div>
                )
            })
          }
        </div>
      </div>
    </>
  )
}
export default Gallery