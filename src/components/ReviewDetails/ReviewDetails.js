import React from 'react';
import { StarIcon } from '@heroicons/react/solid';


const ReviewDetails = (props) => {
    const {
        id, name, rating, description, image } = props.review;

    // Rating - Stars
    let ratings = [];

    for (let i = 1; i <= rating; i++) {
        ratings.push(
            <StarIcon key={id.toString() + i + 'a'}
                className='w-6 h-6 text-yellow-500'></StarIcon>
        );

    }
    for (let i = 1; i <= 5 - parseInt(rating); i++) {
        ratings.push(<StarIcon key={id.toString() + i} className='w-6 h-6 text-slate-300'></StarIcon>);
    }

    return (
        <div className='bg-white drop-shadow rounded-md text-left px-5 mb-5' >
            <div className='flex items-center space-x-3 p-5'>
                <div className='rounded-full h-16 w-16 overflow-hidden'>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h4 className='text-2xl text-left font-medium px-3'>{name}</h4>
                </div>
            </div >
            <div>
                <p className=' py-3'>{description}</p>
            </div >
            <div className='flex'>
                {ratings}
            </div>
        </div >
    );
};


export default ReviewDetails;