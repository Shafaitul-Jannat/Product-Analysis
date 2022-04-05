import React from 'react';

const MainHomeSection = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-2  py-20'>
                <div>
                    <h1 className='text-5xl font-black'>Your Home</h1>
                    <h1 className='text-5xl font-black text-amber-800'>Your Choice</h1>
                    <p className='whitespace-normal ml-5 text-gray-500 p-10 text-left'>We are  furniture design and manufacturing company, established in 2017.We designs furniture and home enhancers for the urban residences in Bangladesh. We're a furniture brand that carries everything you need to make your house or your office look just the way you want. </p>
                    <br />
                    <br />
                    <button className='bg-cyan-500 hover:bg-cyan-300 rounded-full py-3 px-5 font-bold text-white'>Collection</button>
                </div>
                <div className='ml-40 mr-20 ' >
                    <img className='h-80 w-100' src="images/mid-century-modern-living-room-interior-design-with-monstera-tree.jpg" alt="" />
                </div>
            </div>


        </div >

    );
};

export default MainHomeSection;