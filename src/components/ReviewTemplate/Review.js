import React from 'react'

function Review({name, img, comment, rating}) {
  return (
      <div>
          <img src={img} alt="" />
          <div className="comment">
              <h1>{name}</h1>
              <p>{comment }</p>
          </div>
          <div className="rating">
              
          </div>
    </div>
  )
}

export default Review