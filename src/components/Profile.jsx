import { useState } from 'react';
import img from '../assets/image-jeremy.png';

export default function Profile({ userData }) {
  const [active, setActive] = useState('daily');
  const buttonStyle = (type) => {
    return active === type ? 'text-white font-medium' : 'text-indigo-500';
  };
  return (
    <div className='w-full h-screen bg-gray-900 text-white px-5 py-20'>
      <div className='p-6 pt-32 bg-indigo-950 rounded-2xl shadow-lg relative'>
        <div className='flex gap-4 items-center bg-indigo-600 p-6 absolute top-0 left-0 right-0 rounded-2xl shadow-lg'>
          <img
            src={img}
            alt=''
            className='border-[3px] border-white rounded-full w-16'
          />
          <p className='text-xl font-thin tracking-wide'>
            <span className='block text-sm text-indigo-300 tracking-normal'>
              Report for
            </span>
            Jeremy Robson
          </p>
        </div>
        <div className='flex justify-around pt-2'>
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
    </div>
  );
}
