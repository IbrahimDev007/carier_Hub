import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const [toggle, settToggle] = useState(false);
    const navigate=useNavigate()
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} onClick={()=>settToggle(!toggle)} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      { toggle && <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/' className={({isActive})=>isActive?'texts-gradiant':''}>Home</NavLink></li>
        <li tabIndex={0}>
          <NavLink to='/statistic'  className={({isActive})=>isActive?'texts-gradiant justify-between':'justify-between'}>
           Statistic
          </NavLink>
        </li>
        <li><NavLink to='/blog' className={({isActive})=>isActive?'texts-gradiant':''}>Blog</NavLink></li>
        <li><NavLink to='/blog' className={({isActive})=>isActive?'texts-gradiant':''}>Applied Job</NavLink></li>
        <li><NavLink to='/blog' className={({isActive})=>isActive?'texts-gradiant':''}>Blog</NavLink></li>
      </ul> }
    </div>
    <Link to='/'className="btn btn-ghost normal-case text-xl">Professional-Hub</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/' className={({isActive})=>isActive?'texts-gradiant':''}>Home</NavLink></li>
        <li tabIndex={0}>
          <NavLink to='/statistic'  className={({isActive})=>isActive?'texts-gradiant justify-between':'justify-between'}>
           Statistic
          </NavLink>
        </li>
        <li><NavLink to='/blog' className={({isActive})=>isActive?'texts-gradiant':''}>Blog</NavLink></li>
        <li><NavLink to='/blog' className={({isActive})=>isActive?'texts-gradiant':''}>Applied Job</NavLink></li>
        <li><NavLink to='/blog' className={({isActive})=>isActive?'texts-gradiant':''}>Blog</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <p className="btn btn-primary bg-gradiant " onClick={()=>navigate('/job')}>Start Apply</p>
  </div>
</div>
    );
};

export default Header;