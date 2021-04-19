import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
  


  if (!userData) return <h1>NO DATA </h1>

  const userLoops = userData.loops_created
  console.log('🐝 ~ file: ProfilePage.js ~ line 22 ~ userLoops', userLoops)
    
  return (
    <div className='component profile-page'>


      <section className='profile-top-section'>
        <div className='profile-details'>
          <p>
            {userData.bio}


          </p>
        </div>

        <img style={{ width: '15rem', height: '15rem' }} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Terry_Crews_by_Gage_Skidmore_5.jpg/1200px-Terry_Crews_by_Gage_Skidmore_5.jpg'}  alt='profile picture'/>
      
      
      
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
