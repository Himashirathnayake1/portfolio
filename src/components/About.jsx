import React from 'react'
import aboutimage from '../assets/about.jpg'

const About =() => {
    return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">

    <div className="md:grid md:grid-cols-2 sm:py-16">

    <div className="mt-4 md:mt-@ text-left flex flex-col h-full justify-start py-6 md:py-0">
    <div className="my-auto mx-6">
    <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
    <p className="text-base lg: text-1g">
   I miss you .what time mawa important una oyata what time man lgata enawa before wage .man wait kara .godak godaaaaaaaaaaaaaaaaaak
    </p>
    </div>
    </div>
    <img className="mx-auto rounded-3x1 py-8 md:py-0" src={aboutimage} alt="" width={300} height={300} />
    </div>
    </div>
    
  );
};

export default About;