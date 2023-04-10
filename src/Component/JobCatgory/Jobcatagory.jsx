import React from 'react';

const Jobcatagory = ({catagory}) => {

const {logo,name,jobs_available}=catagory;
    return (
        <div className="card w-96 bg-base-100 shadow-xl  bg-violet-100 mx-3">
        <div className="px-10 pt-10 ">
          <img src={logo} alt="" className="rounded-xl text-left" />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className='text-slate-500'>{jobs_available} jobs  are available</p>
        </div>
      </div>
    );
};

export default Jobcatagory;