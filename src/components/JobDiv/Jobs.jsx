import React from 'react';

// imported Prototype from React main
import PropTypes from 'prop-types';

// Imported Icons from React-Icons
import {BiTimeFive} from 'react-icons/bi'

// Imported Images

import logoLine from '../../Assets/line.png'

// Simulate DB

const idGen = () => {
  const random = Math.random().toString(36).substring(2)
  const dateNow = Date.now().toString(36)
  return random + dateNow
};

const DB = [{
  id: 123,
  image: logoLine,
  title: 'Web Developer',
  time: 'Now',
  location: 'Canada',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
  company: 'Novac Limit Co.'
}]

Jobs.propTypes = {};

function Jobs() {
  return (
      <div className={'jobContainer flex gap-10 justify-center items-center flex-wrap py-10'}>
        {
          DB.map(({id, image, title, time, location, description, company}) => {
            return (
                <div
                    key={id}
                    className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-xl shadow-grayIsh-400/700 hover:shadow-xl">
                  <span className={'flex justify-between items-center gap-4 '}>
                    <h1 className={'text-[16px] font-semibold text-textColor group-hover:text-white'}>{title}</h1>
                    <span className={'flex items-center text-[#ccc] gap-1'}>
                      <BiTimeFive/>{time}
                    </span>
                  </span>
                  <h6 className={'text-[#ccc]'}>{location}</h6>
                  <p className={'text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'}>{description}</p>
                  <div className="company flex items-center gap-2">
                    <img
                        className={'w-[10%]'}
                        src={image}
                        alt={'Company Line'}
                    />
                    <span className={'text-[14px] py-[1rem] block group-hover:text-white'}>{company}</span>
                  </div>
                  <button
                      className={'border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'}>
                    Apply now
                  </button>
                </div>
            )
          })


        }
      </div>
  );
}

export default Jobs;