import { gsap } from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Skill = () => {
  useEffect(() => {
    const head = new SplitText(".skill-text", {
      type: "chars",
      charsClass: "char",
    });

    gsap.to(".skill-text .char", {
      x: 0,
      stagger: 0.01,
      delay: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".skill",

        top: "center center",
        toggleActions: "play none play none",
      },
    });
    gsap.to(".skill-tag li", {
      x: 0,
      stagger: 0.01,
      delay: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".skill",

        top: "center center",
        toggleActions: "play none play none",
      },
    });
  });
  return (
    <div
      className="skill min-h-screen w-full overflow-x-hidden"
      data-scroll-section
    >
      <dir className="sm:px-8 sm:py-10 px-2 py-2 flex items-center max-sm:flex-col justify-center h-screen w-full">
        <div className="sm:w-2/5 w-full text-center  h-full flex items-center justify-center">
          <h3 className="text-3xl font-primary skill-text text-data">
            I'm Always Intrested About :
          </h3>
        </div>
        <div className="sm:w-3/5 w-full h-full flex items-center justify-center">
          <ul className="w-11/12 font-secondary justify-center md:text-3xl sm:text-2xl text-xl inline-flex flex-wrap skill-tag">
            <li className="border w-fit px-5 py-1 rounded-3xl me-3 mb-8 text-data">
              Html
            </li>
            <li className="border w-fit px-5 py-1 rounded-3xl me-3 mb-8 text-data">
              CSS
            </li>
            <li className="border w-fit px-5 py-1 rounded-3xl me-3 mb-8">
              JavaScript
            </li>
            <li className="border w-fit px-5 py-1 rounded-3xl me-3 mb-8">
              React JS
            </li>
            <li className="border w-fit px-5 py-1 rounded-3xl mb-8 me-3">
              Node JS
            </li>
            <li className="border w-fit px-5 py-1 rounded-3xl me-3 mb-8">
              Next JS
            </li>
            <li className="border w-fit px-5 py-1 rounded-3xl me-3 mb-8">
              Tailwind CSS
            </li>
            <li className="border w-fit px-5 py-1 rounded-3xl me-3 mb-8">
              Design Component
            </li>
            <li className="border w-fit px-5 py-1 rounded-3xl mb-8 me-3">
              Figma
            </li>
            <li className="border w-fit px-5 py-1 rounded-3xl mb-8">
              JS Library
            </li>
          </ul>
        </div>
      </dir>
    </div>
  );
};

export default Skill;
