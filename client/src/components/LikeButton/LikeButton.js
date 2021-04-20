// eslint-disable-next-line no-unused-vars
//import '../../styles/componentStyles/artCard.scss'
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { getTokenFromLocalStorage, userIsOwner, getPayloadFromToken, userIsAuthenticated } from '../../helpers/authHelp'
import axios from 'axios'
import { userNeedsToLogin } from '../../helpers/popUps'

//* Pass in the ID as props from parent component. 
//* will send authentication header to DB
//* Add check to see if user is logged in so they can like! 
//* Will keep current likes = to those on database 

const Likebutton = ({ id }) => {
  const [ ownerId, setOwnerId ] = useState()
  
  console.log('🐝 ~ file: SemanticLikeButton.js ~ line 16 ~ id', id)
  const [totalFavourites, setTotalFavourites] = useState(0)

  //?? check here and change this 
  const [userLikedAlready, setUserLikedAlready] = useState(null)
  
  useEffect(() => {
    const payload = getPayloadFromToken()
    const currentUserId = payload.sub
    setOwnerId(currentUserId)
    refreshFavourites()
    const interval = setInterval(refreshFavourites, 100000)
    //?need to return and clear interval instantly to prevent it going nuts
    return () => {
      clearInterval(interval)
    }
  }, [])

  // useEffect(() => {
  //   refreshFavourites()
  // },[userLikedAlready])

  const refreshFavourites = async () => {
    const response = await axios.get(`/api/loops/${id}/`)
    const data = response.data
    const latestTotalFavourites = data.likes.length
    setTotalFavourites(latestTotalFavourites)
    
    const payload = getPayloadFromToken()
    const currentUserId = JSON.stringify(payload.sub)
    
    // userIsOwner(currentUserId)

    const likesArray = data.likes
    console.log('🐝 ~ file: LikeButton.js ~ line 51 ~ likesArray', likesArray)
    const hasUserLikedBefore = likesArray.find(item => JSON.stringify(item.owner) === currentUserId)

    console.log('🐝 ~ file: LikeButton.js ~ line 55 ~ hasUserLikedBefore', hasUserLikedBefore)
    // if (hasUserLikedBefore){
    //   setUserLikedAlready(true)
    // } else if (!hasUserLikedBefore){
    setUserLikedAlready(false)
    // }
  }
  

  const handleLike = async () => {

    if (!userIsAuthenticated()){
      userNeedsToLogin('Please login to like!')
      return null
    }
    try {   
      const token = getTokenFromLocalStorage()
      const likeLoadToSend = {
        owner: ownerId,
        loop: id,
      }
      console.log('🐝 ~ file: LikeButton.js ~ line 75 ~ likeLoadToSend', likeLoadToSend)
      const likeResponse = await axios.post(`/api/like/${id}/`, likeLoadToSend, { headers: { Authorization: `Bearer ${token}` } } ) 
      refreshFavourites()
      if (likeResponse.data.message === 'liked!') {
        // notifyPopup(true)
        // setUserLikedAlready(true)
      } else {
        // notifyPopup(false)
      }
    } catch (err) {
      // notifyPopup(false)
    }
  }


  return (
    <div className='like-btn-and-counter '>
      <div>
        { !userLikedAlready && 
        <button  color='#42c298' onClick={handleLike}>
        Like
        </button>
        }
       
        { userLikedAlready &&  
        <button onClick={handleLike}  color='red' >
        Unlike
        </button>
        }
        
        {totalFavourites}
         
      </div>
    </div>
  )
}

export default Likebutton
