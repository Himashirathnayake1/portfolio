import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import flutter from '../assets/flutter.png'


const Skills = () => {
    return (
    <div className=' border border-grey-600 bg-black-300 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
    place-items-center md:flex md:justify-between md:items-center'>
    <h2 className="[text-gray-700 text-2x1 md:text-4x1 font-bold m-4">
    My <br/> Tech <br/> Stack
    </h2>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
    <img src={flutter} alt="" width={100} height={100}/>
    <p className="mt-2">Flutter</p>
    </div>

    <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
    <img src={html} alt=""/>
    <p className="mt-2">HTML</p>
    </div> 

    <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
    <img src={javascript} alt="" width={100} height={100}/>
    <p className="mt-2">JavaScript</p>
    </div>

    <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
    <img src={css} alt="" width={100} height={100}/>
    <p className="mt-2">CSS</p>
    </div>
 
    <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
    <img src={react} alt="" width={100} height={100}/>
    <p className="mt-2">React</p>
    </div>

    </div>
);
};
export default Skills;