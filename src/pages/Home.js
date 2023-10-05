import React, { useEffect } from "react";
import resume from "../assets/resume.pdf";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
gsap.registerPlugin(SplitText, ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const words = new SplitText(".display-text", {
      type: "chars",
      charsClass: "char",
    });

    const t1 = gsap.timeline();

    t1.to(".display-text .char", {
      y: 0,
      stagger: 0.01,
      delay: 0.2,
      duration: 0.5,
    }).to(".semi-text", {
      x: 0,
      duration: 0.5,
    });
  });
  return (
    <section
      className="home relative w-full h-screen flex flex-col justify-end px-5 py-5 overflow-hidden"
      data-scroll-section
    >
      <div className="absolute sm:top-1/3 min-width(390px):top-1/4 top-[12%] left-1/2 -translate-x-1/2">
        <a
          href={resume}
          download="Resume"
          className="w-32 h-32 cursor-none border rounded-full flex items-center justify-center font-primary text-lg"
        >
          Resume
        </a>
      </div>
      <div className="flex justify-end sm:text-5xl text-2xl sm:mb-0 min-width(390px):mb-24 mb-8 font-primary leading-regular">
        <p className="semi-text text-data translate-x-[1000px] transition">
          AVAILABLE <br /> FOR <br /> FREELANCE
        </p>
      </div>
      <h3 className="display-text w-fit sm:font-display sm:text-[12rem] sm:leading-[12.8rem] text-[9rem] leading-[9.8rem] font-mobDis transition text-data">
        DESIGNER
        <span className="sm:text-5xl text-3xl font-secondary text-data">&</span>
        <br /> DEVELOPER
      </h3>
    </section>
  );
};

export default Home;
