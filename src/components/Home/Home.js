import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='header-container'>
      <div className="text-container">
        <p className='title'>Your next laptop</p>
        <p className='title second-title'>Your best laptop</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque blanditiis voluptas quis. Nobis placeat illum ipsum cum expedita sequi fugiat. Dignissimos doloribus officia rem mollitia totam vero atque eveniet.</p>
        <button className='live-demo-btn'>Live demo</button>
      </div>
      <div className="image-container">
        <img src="https://www.lenovo.com/medias/lenovo-laptops-ideapad-5-14-amd-hero.png?context=bWFzdGVyfHJvb3R8MTg4Nzg4fGltYWdlL3BuZ3xoNTkvaDRhLzEwNzUwNTE4MDM0NDYyLnBuZ3wyMWQzYmM0ODlmOTgyOTRkOWMwYzRhNTY5ZjkxYjA2ZWM3ZWNjM2Y4OGZlZTIxMjM0NmNiNjgyZTkyM2EyZjI2" alt="" />
      </div>
    </div>
  )
}

export default Home