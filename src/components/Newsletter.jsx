
import { gsap } from "gsap";
import { useRef,useLayoutEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
const ref = useRef(null)
const tl = useRef(null)

useLayoutEffect(() => {
    const ctx = gsap.context(()=>{
      tl.current = gsap.timeline({
 scrollTrigger: {
          trigger: ".cont",
          start: "36% 30%",
          end: "50% 15%",
          toggleActions: "play reverse reverse reset",
          scrub: true,
          pinSpacer: false,
          

        },
      }
       
      )
      .from(".child",{
        y:80,
        opacity: 0,
      })
      
    },ref)
    return ()=> ctx.revert()
}, [])

  return (
    <div ref={ref}  className='cont w-full  py-16 text-white px-4'>
      <div className='child max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className=' lg:col-span-2 my-4'>
          <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className=' my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3  hover:bg-emerald-500'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
