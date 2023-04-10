import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [toggle, settToggle] = useState(false);
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} onClick={()=>settToggle(!toggle)} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      { toggle && <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/' className={({isActive})=>isActive?'text-violet-600':''}>Home</NavLink></li>
        <li tabIndex={0}>
          <NavLink to='/statistic'  className={({isActive})=>isActive?'text-violet-600 justify-between':'justify-between'}>
           Statistic
          </NavLink>
        </li>
        <li><NavLink to='/blog' className={({isActive})=>isActive?'text-violet-600':''}>Blog</NavLink></li>
      </ul> }
    </div>
    <Link to='/'className="btn btn-ghost normal-case text-xl">Professional-Hub</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/' className={({isActive})=>isActive?'text-violet-600':''}>Home</NavLink></li>
        <li tabIndex={0}>
          <NavLink to='/statistic'  className={({isActive})=>isActive?'text-violet-600 justify-between':'justify-between'}>
           Statistic
          </NavLink>
        </li>
        <li><NavLink to='/blog' className={({isActive})=>isActive?'text-violet-600':''}>Blog</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary ">Get started</a>
  </div>
</div>
    );
};

export default Header;