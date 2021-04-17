import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getPayloadFromToken, userIsAuthenticated } from '../../helpers/authHelp'
import './navbar.scss'

const NavBar = () => {
  const [userId, setUserId] = useState(null)

  const location = useLocation()
  useEffect(() => {

  }, [location.pathname])

  const history = useHistory()
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  useEffect(() => {
    const payload = getPayloadFromToken()
    const userId = payload.sub
    setUserId(userId)
  }, [getPayloadFromToken()])


  //make a onclick change the state or something 
  const [isActive, setIsActive] = React.useState(false)

  return (
    <nav className="navbar custom-nav">
     
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
          </Link>
          
          <a onClick={() => {
            setIsActive(!isActive)
          }}role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            { userIsAuthenticated() &&
        <>
          <Link to={`/profile/${userId}`} className="navbar-item">Profile</Link>
          {/* <Link to="/doodle-new" className="navbar-item">Doodle</Link> */}
        </>
            }
            {/* <Link to="/doodle-new" className="navbar-item">Doodle</Link> */}
            <Link to="/doodle-new" className="navbar-item">Doodle</Link>
            <Link to="/gallery" className="navbar-item">Gallery</Link>
          </div>

          <div className="navbar-end">
            { !userIsAuthenticated() &&
        <>
          <Link to="/register" className="navbar-item">
            Sign Up
          </Link>

          <Link to="/login" className="navbar-item">
            Login
          </Link>
        </>
            }
            { userIsAuthenticated() &&
        <>
          <div className="navbar-item" onClick={handleLogout}>
            Logout
          </div>
        </>
            }
          </div>
        </div>

      </div>
    </nav>
  )
}

export default NavBar
