import React from 'react';

const Banner = ({children}) => {
    return (
        <div className='w-full h-80 bg-violet-200 relative flex justify-center items-center'>
        <img src="https://i.ibb.co/dDTpqdn/Vector-1.png" alt=""  className='absolute top-0 right-0 ml-6'/>
        {children}
        <img src="https://i.ibb.co/rMHRtfY/Vector.png" alt=""  className='absolute bottom-0 left-0 mr-6'/>  
        </div>
    );
};

export default Banner;