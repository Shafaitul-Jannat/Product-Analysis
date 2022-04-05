import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const HomeReviews = (props) => {
    const { showReview } = props;

    const [review, setReview] = useReviews();
    const sliceRev = review.slice(0, 3);
    return (
        <div className=''>
            <div className='justify-items-center'>
                <h2 className=' text-3xl font-bold'>Customer Reviews</h2>
                <div className='grid grid-cols-3 gap-10 px-20 mt-10'>
                    {
                        sliceRev.map((review) =>
                            <ReviewDetails
                                key={review.id}
                                review={review} >
                            </ReviewDetails>)
                    }
                </div>
                <div className='justify-items-center'>
                    <button onClick={showReview} className=" mt-10 mb-10  bg-cyan-500 hover:bg-cyan-300 rounded-full py-3 px-5 font-bold text-white">Show all Reviews</button>
                </div>
            </div >
        </div>
    );
};

export default HomeReviews;