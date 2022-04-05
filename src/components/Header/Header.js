import React from 'react';
import CustomLink from '../CustomLink/CustomLink';



const Header = () => {
    return (
        <div>
            <nav className=' flex space-x-20 justify-center mb-5 mt-3 '>
                <CustomLink className=' font-medium px-3 py-2 hover:text-red-700  hover:border-b-[3px] border-red-700  ' to='/'>Home</CustomLink>
                <CustomLink className=' font-medium px-3 py-2 hover:text-red-700 hover:border-b-[3px] border-red-700  ' to='/reviews'>Reviews</CustomLink>
                <CustomLink className=' font-medium px-3 py-2 hover:text-red-700 hover:border-b-[3px] border-red-700  ' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className=' hover:text-red-700   font-medium px-3 py-2  hover:border-b-[3px] border-red-700  ' to='/blogs'>Blogs</CustomLink>
                <CustomLink className=' hover:text-red-700 font-medium px-3 py-2  hover:border-b-[3px] border-red-700  ' to="/about">About</CustomLink>

            </nav >


        </div >
    );
};

export default Header;