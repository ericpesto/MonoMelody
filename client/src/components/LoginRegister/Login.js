import { React, useState } from 'react'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'

const Login = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '', 
  })
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    // if()
    try {
      const response = await axios.post('/api/auth/login/', formData)
      console.log('🐝 ~ file: Login.js ~ line 26 ~ response', response.data.message)
      // setWasLoginSuccess(true)
      // loginPopUp(true)
      window.localStorage.setItem('token',response.data.token)
    } catch (err) {
      console.log('🐝 ~ file: Login.js ~ line 24 ~ err', err)
    }
  }

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    console.log('🐝 ~ file: Login.js ~ line 14 ~ event', event)
    setFormData(newFormData)
  }
  
  return (
    <div className='user-form-component'>
      <form onSubmit={handleSubmit}className="box column is-half is-offset-one-quarter">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              //value={formData.password}
            />
          </div>
        </div>
        <div className="field-button">
          <button className="button box is-fullwidth hover-box">Login</button><br />
        </div>
      </form>
      
    </div>
  )
}

export default Login
