import { gsap } from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
  useEffect(() => {
    const head = new SplitText(".connect-text", {
      type: "chars",
      charsClass: "char",
    });
    const head1 = new SplitText(".contact-text", {
      type: "chars",
      charsClass: "char",
    });

    gsap.to(".connect-text .char", {
      x: 0,
      stagger: 0.01,
      delay: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".connect",

        top: "center center",
        toggleActions: "play none play none",
      },
    });
    gsap.to(".contact-text .char", {
      x: 0,
      stagger: 0.01,
      delay: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".connect",

        top: "center center",
        toggleActions: "play none play none",
      },
    });
  });
  return (
    <div
      className="connect min-h-screen w-full flex flex-col justify-end overflow-x-hidden"
      data-scroll-section
    >
      <div className="sm:px-7 px-2 sm:py-5 py-2 flex w-full flex-col max-sm:items-center justify-between">
        <div className="flex items-center max-sm:flex-col justify-between w-full mb-5">
          <h3 className="text-data sm:w-1/2 w-[95%] font-display connect-text sm:text-[14rem] sm:leading-[15rem] text-9xl max-sm:mb-3 hover-text">
            LET'S <br /> CONNECT
          </h3>
          <h3 className="sm:w-1/2 w-[95%] font-secondary sm:text-4xl text-2xl max-sm:mt-10 flex items-center">
            <p className="max-sm:w-[70%] text-data contact-text">
              Are You Minding A Website ?
            </p>
            <a
              href="mailto:hettptl@gmail.com"
              className="border sm:ms-8 sm:px-7 sm:py-16 px-1 py-10 sm:text-3xl text-xl rounded-full max-sm:w-[30%] flex items-center justify-center"
            >
              Contact
            </a>
          </h3>
        </div>
        <div className="flex items-center justify-between w-full border-t pt-4">
          <a
            href="https://www.linkedin.com/in/patelhett/"
            className="font-primary text-xl connect-text text-data"
          >
            LinkedIN
          </a>
          <a
            href="https://www.instagram.com/patellhett"
            className="font-primary text-xl connect-text text-data"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
