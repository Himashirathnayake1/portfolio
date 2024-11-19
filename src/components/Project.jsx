import React from 'react'
import TapON from '../assets/laong.jpg'

const Project = () => {
    return (
      <div className="max-w-[1200px] mx-auto p-5" id="project">
        <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Projects</p>
        <p className="text-gray-400">Check out some of my recent Projects</p>
        </div>
    
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={TapON} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-white tracking-wider">
            TapOn
          </span>
          <div className='pt-8 text-center'>
  <a href="/">
  <button className='text-center rounded px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
    Live
  </button>
  </a>
          </div>
          </div>
          <a href="https://github.com/Himashirathnayake1/TapOn-original" className="absolute bottom-2 right-2 text-white">More Info</a>
        </div>
    
        {/* Add more project divs as needed */}
        </div>
      </div>
      );
}

export default Project