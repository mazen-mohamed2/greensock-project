import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
const Navbar = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".navBar", {
        xPercent: 100,
        duration: 1.5,
        opacity: 0,
      });
      gsap.from(".logo", {
        xPercent: -100,
        duration: 1.5,
        opacity: 0,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white cursor-pointer"
    >
      <h1 className="logo text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="navBar hidden md:flex">
        <li className="p-4 hover:underline">Home</li>
        <li className="p-4 hover:underline">Company</li>
        <li className="p-4 hover:underline">Resources</li>
        <li className="p-4 hover:underline">About</li>
        <li className="p-4 hover:underline">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
