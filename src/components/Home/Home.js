import React from 'react';
import Review from '../Reviews/Review';


const Home = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-2 py-20'>
                <div>
                    <h1 className='text-5xl font-black'>Your Home</h1>
                    <h1 className='text-5xl font-black text-amber-800'>Your Choice</h1>
                    <p className='whitespace-normal ml-5 text-gray-500 p-10'>We are  furniture design and manufacturing company, established in 2017.We designs furniture and home enhancers for the urban residences in Bangladesh. We're a furniture brand that carries everything you need to make your house or your office look just the way you want. </p>
                    <br />
                    <br />
                    <button className='bg-cyan-500 hover:bg-cyan-300 rounded-full py-3 px-5 font-bold text-white'>Collection</button>
                </div>
                <div className='ml-48 mr-20' >
                    <img className='' src="images/mid-century-modern-living-room-interior-design-with-monstera-tree.jpg" alt="" />
                </div>
            </div>

            <div className='justify-items-center'>
                <h2 className=''>Customer Reviews</h2>
                <Review>

                </Review>
            </div>
        </div >

    );
};

export default Home;