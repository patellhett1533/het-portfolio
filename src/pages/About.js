import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  useEffect(() => {
    const heading = new SplitText(".about-txt p", {
      type: "chars",
      charsClass: "char",
    });

    gsap.to(
      "p .char",
      {
        rotateY: "0",
        opacity: "1",
        duration: 1,
        stagger: 0.005,
        scrollTrigger: {
          trigger: ".about",
          top: "top 80%",
          toggleActions: "play none play none",
        },
      },
      "start"
    );
  });
  return (
    <section
      className="about h-screen w-full flex items-center justify-center"
      data-scroll-section
    >
      <div className="about-txt h-full lg:w-[58%] md:w-[74%] w-[86%] flex items-center justify-center ">
        <p className="md:text-4xl text-xl font-primary leading-relaxed text-data">
          Hello, I'm Het Patel, an enthusiastic and dedicated MERN Stack
          developer entering the world of Technology to gain valuable experience
          and contribute top-quality solutions to my clients. My unwavering
          commitment is to meet and exceed client expectations by tailoring my
          services to their unique needs.
        </p>
      </div>
    </section>
  );
};

export default About;
