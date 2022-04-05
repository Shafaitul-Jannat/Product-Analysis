import React from 'react';
import useReviews
    from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const Review = () => {
    const [review, setReview] = useReviews();

    return (

        <div>
            <h2 className='mt-16 text-4xl font-bold'>What People Says About Us!!!</h2>
            <div className='grid grid-cols-3 gap-10 mt-20 px-20'>
                {
                    review.map((review) =>
                        <ReviewDetails
                            key={review.id}
                            review={review} >
                        </ReviewDetails>)
                }
            </div>
        </div >
    );
};

export default Review;