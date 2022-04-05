import React from 'react';
import HomeReviews from '../HomeReviews/HomeReviews';
import MainHomeSection from '../MainHomeSection/MainHomeSection'
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    const showReview = () => {
        navigate('/reviews');
    }
    return (
        <div className=''>
            <MainHomeSection></MainHomeSection>
            <HomeReviews showReview={showReview}></HomeReviews>
        </div >

    );
};

export default Home;