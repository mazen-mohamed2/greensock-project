import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import Laptop from "../assets/undraw_Design_notes_re_eklr.png";
gsap.registerPlugin(ScrollTrigger);

const Analytics = () => {
  const ref = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".effect",
            start: "20% 30%",
            end: "30% 15%",
            toggleActions: "play reverse reverse reset",
            pinSpacer: false,
            pin: true,
          },
        })

        .from(".laptop", {
          x: -100,
        })
        .from(".lap-title", {
          x: 40,
        });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div className="effect w-full bg-white py-16 px-4" ref={ref}>
      <div className=" oo max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="laptop w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className=" lap-title flex flex-col justify-center">
          <p className="bb text-[#00df9a] font-bold ">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-inherit border-2 hover:border-neutral-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
