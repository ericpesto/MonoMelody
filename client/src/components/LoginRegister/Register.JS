import React, { useState } from 'react'
import './userForms.scss'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  console.log('🔴 ERRORS ', errors)

  

  const handleChange = (event) => {
    console.log('LOGGING')
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const dataToSend = formData
      console.log('🤖 ~ formData', formData)
      const response =  await axios.post('api/auth/register/', dataToSend)
      console.log('🟢 ~ file: JoinPage.js ~ line 44 ~ response', response)
      //history.push('/login') //!change back to /
    } catch (err) {
      setErrors(err.response.data)
      console.log('🔴 ~ file: JoinPage.js ~ line 44 ~ response',err)
      console.log('🔴  ERROR MESSAGE',err.response.data)
      //setWasLoginSuccess(false)
      // loginPopUp(false)
    }
  }




  
  return (
    <div>
      <form className="signup-form box column is-half is-offset-one-quarter" onSubmit={handleSubmit}>
        <div className="field">
          <p className="control ">
            <input className="input is-medium" 
              name="username" 
              placeholder="Username" 
              value={formData.username}
              onChange={handleChange}
            />

          </p>
        </div>
        <div className="field">
          <p className="control ">
            <input className="input is-medium" 
              name="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
            />

          </p>
        </div>
        <div className="field">
          <p className="control ">
            <input className="input is-medium" 
              //type="password" 
              name='password'
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              type='password'
            />
          </p>
        </div>
        <div className="field">
          <p className="control password-confirmation-control ">
            <input className="input is-medium" 
              name="password_confirmation" 
              placeholder="Confirm Password" 
              value={formData.password_confirmation}
              onChange={handleChange}
              type='password'
            />

          </p>
        </div>
        <div className="field-button">
          <button className="button box is-fullwidth hover-box">Sign Up</button><br />
        </div>
      </form>
      
    </div>
  )
}

export default Register
