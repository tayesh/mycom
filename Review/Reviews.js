import React from 'react';
import SingleReview from '../../Single-review/Review';
import useReviews from '../hooks/useReviews';
import './reviews.css'

const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>All the reviews are here</h2>
            <div className='review-container'>
                {
                    reviews.map(review => <SingleReview review={review} key={review.id}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Review;