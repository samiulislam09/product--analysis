import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
      <div className='not-found-container'>
      <h2 className='not-found-title'>404</h2>
      <h2 className='not-found'>Oooops the page you requested not found</h2>
      <Link className='not-found-btn' to='/'>back to homepage</Link>
    </div>
  )
}

export default NotFound