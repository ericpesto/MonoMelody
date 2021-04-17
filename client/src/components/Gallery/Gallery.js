// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MelodySphere from './MelodySphere'


const Gallery = () => {

  //get data & return it 
  const [data, setData] = useState(null)
  console.log('setData: ',data )

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('/api/loops/')
      console.log('🐝 ~ file: Gallery.js ~ line 10 ~ response', response)
      setData(response.data)
    }
    getData()
  },[])


  

  if (!data) return <h1>NO DATA!</h1>
  // const { title } = data
  return (
    <div className='gallery-component'>

      <div className='sphere-display columns is-multiline'>
        {data.map(item=>{
          return (
          // <div className='sphere' key={item.id}>
          //   <h1>{item.title}</h1>

            <div className='column' key={item.id} >
              <MelodySphere {...item}/>
            </div>
            // </div>
          )
        })

        }


      </div>






      
    </div>
  )
}

export default Gallery
