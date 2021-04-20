/* eslint-disable quotes */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './profilepage.scss'
const ProfilePage = () => {
  
  const [userData,setUserData] = useState(null)
  console.log('🐝 ~ file: ProfilePage.js ~ line 8 ~ userData', userData)
  
  const params = useParams()
  console.log('🐝 ~ file: ProfilePage.js ~ line 8 ~ params', params)
  
  useEffect(() => {
    const getUser =  async () => {
      const response = await axios.get(`/api/auth/users/${params.id}/`)
      setUserData(response.data)
    }
    getUser()
  },[])
  

  // const findUserTopGenres 








  if (!userData) return <h1>NO DATA </h1>

  const userLoops = userData.loops_created
  console.log('🐝 ~ file: ProfilePage.js ~ line 22 ~ userLoops', userLoops)
    
  return (
    <div className='component profile-page'>


      <section className='profile-top-section'>
       
      
        <img style={{ width: '15rem', height: '15rem' }} src={userData.profile_image}  alt='profile picture'/>

        <div className='profile-details'>
          <h1>{`About ${userData.username}`}</h1>
          <p>
            {!userData.bio ? "Someone's mysterious..." : userData.bio }
          </p>
        </div>
      
      
      </section>
      
      
      
      <section className='profile-bottom-section'>
      
        <div className='user-loops'>
          {userLoops.map(loop=>{
            return (
              <div key={loop.id} className='profile-loop-container'>

                <h1>{loop.title}</h1>
              </div>




            )
          })

          }


        </div>
      
      
      </section>





    </div>
  )
}

export default ProfilePage
