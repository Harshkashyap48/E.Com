import React from 'react';
import './Rating.css'; 
import starImage from './star.jpg'; 
import starFilledImage from './shoe3.jpg';

const ReviewCard = ({ imageUrl, rating, comment }) => {
  return (
    <div className="review-card">
      <div className="user-rating">
        <img src={imageUrl} alt="User" />
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <input type="radio" id={`star${index + 1}`} name="rating" value={index + 1} key={index} checked={rating === index + 1} readOnly />
          ))}
          <label htmlFor={`star1`}></label>
          <label htmlFor={`star2`}></label>
          <label htmlFor={`star3`}></label>
          <label htmlFor={`star4`}></label>
          <label htmlFor={`star5`}></label>
        </div>
      </div>
      <p className="comment">{comment}</p>
    </div>
  );
};

export default ReviewCard;
