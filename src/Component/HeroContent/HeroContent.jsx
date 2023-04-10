import React from 'react';

const HeroContent = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:grid lg:grid-cols-2 lg:justify-items-end ">     
          <div className='text-center lg:text-start'>
            <h1 className="text-5xl font-bold leading-normal
            ">One Step <br /> Closer To Your <br/>  
            <span className='texts-gradiant'>Dream Job</span>
            </h1>
            <p className="py-6 max-w-md lg:w-fit">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="btn btn-primary bg-gradiant">Get Started</button>
          </div>
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl flex justify-center items-center" />
        </div>
      </div>
    );
};

export default HeroContent;