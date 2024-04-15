import { useState } from 'react';
import img from '../assets/image-jeremy.png';
import Cards from './Cards';

export default function Profile({ userData }) {
  const [active, setActive] = useState('daily');

  const buttonStyle = (type) => {
    return active === type
      ? 'text-white font-medium'
      : 'text-indigo-500 hover:font-medium hover:text-indigo-300';
  };

  return (
    <div className='w-full h-full bg-gray-900 text-white px-5 py-20  md:grid md:grid-cols-[1fr_3fr] md:gap-2 md:max-w-[900px] md:max-h-[460px] md:p-0'>
      <div className='p-6 pt-36 bg-indigo-950 rounded-2xl shadow-lg relative max-w-[400px] mx-auto md:max-h-[500px] md:w-[200px]'>
        <div className='flex gap-4 items-center bg-indigo-600 p-6 absolute top-0 left-0 right-0 rounded-2xl shadow-lg md:h-[300px] md:flex-col md:items-start'>
          <img
            src={img}
            alt=''
            className='border-[3px] border-white rounded-full w-16'
          />
          <p className='text-xl font-thin tracking-wide md:text-3xl md:mt-3'>
            <span className='block text-sm text-indigo-300 tracking-normal'>
              Report for
            </span>
            Jeremy Robson
          </p>
        </div>
        <div className='flex justify-around pt-2 md:flex-col md:mt-[170px] md:gap-3 md:items-start'>
          <button
            className={buttonStyle('daily')}
            onClick={() => setActive('daily')}
          >
            Daily
          </button>
          <button
            className={buttonStyle('weekly')}
            onClick={() => setActive('weekly')}
          >
            Weekly
          </button>
          <button
            className={buttonStyle('monthly')}
            onClick={() => setActive('monthly')}
          >
            Monthly
          </button>
        </div>
      </div>
      <div>
        <Cards userData={userData} active={active} />
      </div>
    </div>
  );
}
