import iconEllipsis from '../assets/icon-ellipsis.svg';
import iconExercise from '../assets/icon-exercise.svg';
import iconPlay from '../assets/icon-play.svg';
import iconSelfCare from '../assets/icon-self-care.svg';
import iconSocial from '../assets/icon-social.svg';
import iconStudy from '../assets/icon-study.svg';
import iconWork from '../assets/icon-work.svg';

export default function Cards({ userData, active }) {
  const icon = {
    work: [iconWork, 'bg-orange-400'],
    play: [iconPlay, 'bg-sky-400'],
    study: [iconStudy, 'bg-rose-400'],
    exercise: [iconExercise, 'bg-green-400'],
    social: [iconSocial, 'bg-violet-700'],
    'self care': [iconSelfCare, 'bg-amber-300'],
  };

  return (
    <div className='md:col-start-2 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-5'>
      {userData.map((data, index) => (
        <div
          className={`${
            icon[data.title.toLowerCase()][1]
          } relative rounded-2xl my-5 overflow-hidden z-0 max-w-[400px] mx-auto md:h-[220px] md:m-0`}
          key={index}
        >
          <img
            src={`${icon[data.title.toLowerCase()][0]}`}
            alt=''
            className='z-10 absolute -top-1 right-3 w-16 '
          />
          <div className='z-20 h-24 w-full mt-7 p-5 bg-indigo-950  rounded-2xl relative md:h-[170px] md:mt-12 hover:bg-indigo-600'>
            <div className='grid grid-cols-2 items-center gap-y-1 md:grid-row-3'>
              <p className='text-sm font-bold'>{data.title}</p>
              <img
                src={iconEllipsis}
                alt=''
                className='col-start-2 justify-self-end w-4 cursor-pointer'
              />
              <p className='text-2xl font-light md:row-start-2 md:col-span-2 md:text-4xl md:mt-4'>
                {data.timeframes[active].current}hrs
              </p>
              <p className='col-start-2 row-start-2 justify-self-end text-xs font-light text-indigo-300 md:col-start-1 md:row-start-3 md:col-span-2 md:justify-self-start'>
                Last Week - {data.timeframes[active].previous}hrs
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
