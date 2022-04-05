import React from 'react';


const Blogs = () => {
    return (
        < div className='p-5'>
            <div className='grid grid-cols-2 gap-5'>
                < div className=' bg-white drop-shadow rounded-lg text-left px-5 py-5 mb-5' >
                    <h2 className='text-xl font-bold'>Context Api</h2>
                    <p>Context API is a newer version in React 16.3 that lets you to exchange state throughout the full application or a portion of it quickly and easily. What you need to do is React.createContext(). It will provide you a customer and a provider where provider is an element that supplies the state to its children. This will contain the "store" and serve as the parent of any elements that may require it. A component that collects and utilizes the state is known as a consumer.</p>
                </div >
                <div>
                    < div className=' bg-white drop-shadow rounded-md text-left px-5 py-5 mb-5' >
                        <h2 className='text-xl font-bold' >Semantic Tag</h2>
                        <p>Semantics is a term used in programming to give a detailed description of a line of code, such as "what impact does executing that piece of JavaScript have?" or "what function or part does that HTML element have?". Semantic HTML5 overcomes this deficiency by adding particular tags that explicitly explain what function the data included in those elements plays. This particular data aids robots/crawlers such as Google and Bing in determining which material is significant, which is a subset, which is for routing, and etc. By including semantic HTML tags on web sites, you give Google and Bing more data about the functions and significance of the various elements on your website. form>, table>, and article> are examples of semantic components. - Clearly describes its purpose. </p>

                    </div >
                </div>
            </div >
        </div >
    );
};

export default Blogs;