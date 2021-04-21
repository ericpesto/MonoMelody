/* eslint-disable quotes */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import './profilepage.scss'

import editIcon from '../../assets/edit-icon.svg'

import { isUserOwner } from '../../helpers/authHelp'

const ProfilePage = () => {
  
  const [userData,setUserData] = useState(null)
  console.log('🐝 ~ file: ProfilePage.js ~ line 8 ~ userData', userData)
  
  const params = useParams()
  console.log('🐝 ~ file: ProfilePage.js ~ line 8 ~ params', params)
  
  const getUser =  async () => {
    const response = await axios.get(`/api/auth/users/${params.id}/`)
    setUserData(response.data)
  }

  useEffect(() => {
    getUser()
  }, [location.pathname])


  if (!userData) return <h1>NO DATA </h1>

  const userLoops = userData.loops_created
  console.log('🐝 ~ file: ProfilePage.js ~ line 22 ~ userLoops', userLoops)
    
  return (
    <div className='component profile-page'>
      <section className='profile-top-section'>
        {/* style={{ width: '15rem', height: '15rem' }}  */}
        <img src={userData.profile_image}  alt='profile picture'/>

        <div className='profile-details'>
          <h1>{`${userData.username}`}</h1>
          <p>
            {!userData.bio ? "No info! Someone's mysterious..." : userData.bio }
          </p>
          {
            isUserOwner(userData.id) &&
          
            <Link to={'/profile/edit'}>
              <img className="edit-icon" src={editIcon}/>
            </Link>
          }
        </div>
      
      
      </section>
      
      
      
      <section className='profile-bottom-section'>
      
        <div className='user-loops'>
          <h1>My loops</h1>
          <div className='loops-container'>

            {userLoops.map(loop=>{
              return (
                <Link to='' key={loop.id} >
                  <div  className='profile-single-loop-container'>
                    <h1>{loop.title}</h1>
                  </div>
                </Link>
              )
            })
            }

          </div>

        </div>
      
      
      </section>





    </div>
  )
}

export default ProfilePage
