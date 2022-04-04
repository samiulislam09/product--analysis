import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Rating from 'react-rating';
import './Review.css'

function Review(props) {
    const { name, img, comment, rating } = props.review;
  return (
      <div className='review'>
          <img src={img} alt="" />
          <div className="comment">
              <h1 className='name'>{name}</h1>
              <p>{comment }</p>
          </div>
          <div className="rating">
              Ratings: {rating}
              <Rating
                  initialRating={rating}
                  emptySymbol={<FontAwesomeIcon icon={faStar} />}
                  fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                  readonly
              ></Rating>
          </div>
    </div>
  )
}

export default Review