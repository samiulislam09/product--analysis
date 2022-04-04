import React from 'react'
import useReviews from '../hooks/useReviews'
import Review from '../ReviewTemplate/Review';
import './Reviews.css'

function Reviews() {
  const [reviews] = useReviews();
  return (
    <div className='review-container'>
      <p className='review-title'>What Our Customer Says!</p>
      {
        reviews.map(review=> <Review key={review.id} review={review}></Review>)
      }
    </div>
  )
}

export default Reviews