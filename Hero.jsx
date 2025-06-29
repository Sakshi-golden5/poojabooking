import React from 'react';

const Hero = ({ openModal }) => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/pooja-banner234.png")] bg-no-repeat bg-cover h-screen'>
      <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-34'>Embrace Peace and Blessings in Your Life</h1>
      <p className='max-w-130 mt-5 text-sm md:text-base'> Invite peace, harmony, and divine blessings to your home.</p>
      <form className=' text-black-500 rounded-lg py-4 mt-15 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>
        <div>
          <div className='flex items-center gap-2'>
            <svg className="w-4 h-4 text-black-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.134 2 5 5.134 5 9c0 4.418 7 11 7 11s7-6.582 7-11c0-3.866-3.134-7-7-7zM12 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            <label htmlFor="location">Location</label>
          </div>
          <input id="location" type="text" className="rounded border border-black-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Enter location" required />
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <svg className="w-4 h-4 text-black-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
            </svg>
            <label htmlFor="poojaName">Pooja Name</label>
          </div>
          <input id="poojaName" type="text" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Enter pooja type" required />
        </div>

        <button
          className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 mt-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'
          onClick={() => openModal({ name: 'Pooja' })}
        >
          <svg className="w-4 h-4 text-" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
          <span>Book Now</span>
        </button>

      </form>
    </div>
  );
};

export default Hero;
