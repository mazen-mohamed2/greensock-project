import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const ref = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "-250px 50%",
            toggleActions: "play reverse reverse reset",
          },
        })
        .from(".react-footer", {
          x: 100,
          duration: 1,
          opacity: 0,
        })
        .from(".list-footer", {
          x: -30,
          duration: 1,
          opacity: 0,
          ease: "power1.inOut",
          stagger: {
            grid: [7, 15],
            from: "end",
            axis: "x",
            amount: 1.5,
          },
        });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300"
    >
      <div className="react-footer">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div className="list-footer">
          <h6 className="font-medium text-gray-400 cursor-pointer">
            Solutions
          </h6>
          <ul className="cursor-pointer ">
            <li className="py-2 text-sm hover:underline">Analytics</li>
            <li className="py-2 text-sm hover:underline">Marketing</li>
            <li className="py-2 text-sm hover:underline">Commerce</li>
            <li className="py-2 text-sm hover:underline">Insights</li>
          </ul>
        </div>

        <div className="list-footer">
          <h6 className="font-medium text-gray-400 cursor-pointer">Support</h6>
          <ul className="cursor-pointer">
            <li className="py-2 text-sm hover:underline">Pricing</li>
            <li className="py-2 text-sm hover:underline">Documentation</li>
            <li className="py-2 text-sm hover:underline">Guides</li>
            <li className="py-2 text-sm hover:underline">API Status</li>
          </ul>
        </div>

        <div className="list-footer">
          <h6 className="font-medium text-gray-400 cursor-pointer">Company</h6>
          <ul className="cursor-pointer">
            <li className="py-2 text-sm hover:underline">About</li>
            <li className="py-2 text-sm hover:underline">Blog</li>
            <li className="py-2 text-sm hover:underline">Jobs</li>
            <li className="py-2 text-sm hover:underline">Press</li>
            <li className="py-2 text-sm hover:underline">Careers</li>
          </ul>
        </div>

        <div className="list-footer">
          <h6 className="font-medium text-gray-400 cursor-pointer">Legal</h6>
          <ul className="cursor-pointer">
            <li className="py-2 text-sm hover:underline">Claim</li>
            <li className="py-2 text-sm hover:underline">Policy</li>
            <li className="py-2 text-sm hover:underline">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
