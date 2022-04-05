import React from 'react';


const Blogs = () => {
    return (
        < div className='p-5'>
            <div className='grid grid-cols-2 gap-5'>
                < div className=' bg-white drop-shadow rounded-lg text-left px-5 mb-5' >
                    <h2>Context Api</h2>
                    <p>Context API is a newer version in React 16.3 that lets you to exchange state throughout the full application or a portion of it quickly and easily. What you need to do is React.createContext(). It will provide you a customer and a provider where provider is an element that supplies the state to its children. This will contain the "store" and serve as the parent of any elements that may require it. A component that collects and utilizes the state is known as a consumer.</p>
                </div >
                <div>
                    < div className=' bg-white drop-shadow rounded-md text-left px-5 mb-5' >
                        <h2></h2>

                    </div >
                </div>
            </div >
        </div >
    );
};

export default Blogs;