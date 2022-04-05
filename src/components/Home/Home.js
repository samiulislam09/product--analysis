import React from 'react'
import './Home.css'
import useReviews from '../hooks/useReviews'
import Review from '../ReviewTemplate/Review';
import { Link } from 'react-router-dom';

function Home() {
  const [reviews] = useReviews()
  return (
    <div className="header">
      <div className='header-container'>
        <div className="text-container">
          <p className='header-title'>Your next laptop</p>
          <p className='header-title second-title'>Your best laptop</p>
          <p className='header-details'>Today, industries are reshaping and reimaging what they make and how they do it. Virtual healthcare. Remote education. Smarter shopping. Smarter technology must be made for all. As a Fortune Global 500 technology company and one of Fortune Magazine’s World’s Most Admired Companies, we think and act globally.</p>
          <button className='live-demo-btn'>Live demo</button>
        </div>
        <div className="image-container">
          <img src="https://www.lenovo.com/medias/lenovo-laptops-ideapad-5-14-amd-hero.png?context=bWFzdGVyfHJvb3R8MTg4Nzg4fGltYWdlL3BuZ3xoNTkvaDRhLzEwNzUwNTE4MDM0NDYyLnBuZ3wyMWQzYmM0ODlmOTgyOTRkOWMwYzRhNTY5ZjkxYjA2ZWM3ZWNjM2Y4OGZlZTIxMjM0NmNiNjgyZTkyM2EyZjI2" alt="" />
        </div>
      </div>
      <div className="comment-section">
        <h1>Customer Reviews</h1>
        {
          reviews.slice(0, 3).map(review=> <Review key={review.id} review={review}></Review>)
        }
        <Link className='all-review-btn' to='/reviews'>See All Reviews</Link>
      </div>
    </div>
  )
}

export default Home