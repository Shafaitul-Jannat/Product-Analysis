import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <nav className=' md-flex  space-x-20 font-medium px-3 py-2 hover:bg-slate-100 hover:text-red-700  '>
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to="/about">About</Link>

            </nav >


        </div >
    );
};

export default Header;