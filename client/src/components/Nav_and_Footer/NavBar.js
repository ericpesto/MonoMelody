/* eslint-disable no-undef */
import React from 'react'
import { Link } from 'react-router-dom'

import 'bulma/sass/utilities/_all.sass'
import 'bulma/sass/components/navbar.sass'
const NavBar = () => {
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
          <Link to="/join" className="navbar-item">
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
