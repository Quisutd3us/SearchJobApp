import React from 'react';
import PropTypes from 'prop-types';

Navbar.propTypes = {};

function Navbar() {
  return (
      <div className={'navBar flex justify-between items-center p-[3rem] border border-solid border-red-600'}>
        <div className={'logoDiv'}>
          <h1 className={'logo text-[25px] text-blueColor'}>
            <strong>Job</strong> Search
          </h1>
        </div>
        <div className={'menu flex gap-8'}>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Jobs</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Company</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>About</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Contact</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Blog</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Login</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Register</li>
        </div>
      </div>
  );
}

export default Navbar;