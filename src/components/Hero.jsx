import gsap from 'gsap';
import React, { useRef,useLayoutEffect } from 'react';
import Typed from 'react-typed';


const Hero = () => {
  const app = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(()=>{
      tl.current = gsap.timeline()
      .from(".title",{y: 40, duration:0.7, opacity:0})
      .from(".data-title",{y: 10, duration:0.7, opacity:0})
      .from(".financing",{y: 10, duration:0.7, opacity:0})
      .from(".Monitor",{y: 10, duration:0.7, opacity:0})
      .from(".btn",{scale:2, duration:0.7, opacity:0 , ease:"back"})
    },app)
    return () => ctx.revert();
  }, [])



  return (
    <div className=' text-white' ref={app}>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='title text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='data-title md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='financing flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='Monitor md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='btn bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-emerald-500'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
