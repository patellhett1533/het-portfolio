import React, { useEffect } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Projects = () => {
  useEffect(() => {
    const word = new SplitText(".project-title", {
      type: "chars",
      charsClass: "char",
    });

    const t2 = gsap.timeline();

    t2.to(".heading-text", {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".project-heading",

        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    })
      .to(
        ".title-1 .char",
        {
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".title-1",

            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
          },
        },
        "start"
      )
      .to(
        ".title-2 .char",
        {
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".title-2",

            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
          },
        },
        "start"
      )
      .to(
        ".title-3 .char",
        {
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".title-3",

            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
          },
        },
        "start"
      )
      .to(
        ".title-4 .char",
        {
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".title-4",

            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
          },
        },
        "start"
      );
  });

  return (
    <div className="project min-h-screen w-full overflow-hidden px-5">
      <div className="w-full h-full project-heading flex justify-end mt-10 transition">
        <h3 className="sm:w-3/5 w-full sm:text-4xl text-xl font-primary heading-text transition duration-200 translate-x-[1000px] text-data">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here are
          selected projects to showcase my passion for creating a amazing web
          experience, products and brand life.
        </h3>
      </div>
      <div className="project w-full h-full sm:px-10 mt-20">
        <div>
          <div className="w-full flex justify-end mb-10">
            <h3 className="project-title title-1 text-6xl font-display py-2 border-b text-data">
              CMS Blog Site
            </h3>
          </div>
          <div className="gallery flex flex-row-reverse mb-36 max-sm:flex-col w-full h-full">
            <div className="right-content sm:w-3/5 w-full overflow-scroll max-sm:mb-5 rounded-xl">
              <img
                src={require("../assets/bloghome.png")}
                alt=""
                className="rounded-xl img-data"
              />
            </div>
            <div className="left-content sm:w-2/5 w-full">
              <div className="sm:px-10 sm:py-10">
                <h3 className="sm:text-2xl text-xl font-primary mb-3 text-data">
                  Skill Used
                </h3>
                <ul className="w-3/5 flex-inline text-title">
                  <li className="w-fit me-3 font-primary text-lg text-data">
                    Next.js
                  </li>
                  <li className="w-fit font-primary text-lg text-data">
                    Tailwind CSS
                  </li>
                </ul>
                <h3 className="sm:text-2xl text-xl font-primary mt-10 mb-3 text-data ">
                  Overview
                </h3>
                <p className="font-primary text-lg text-title text-data">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae doloremque, in numquam inventore,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-start mb-10">
            <h3 className="project-title title-2 text-6xl font-display py-2 border-b text-data">
              Admin Pannel
            </h3>
          </div>
          <div className="gallery flex max-sm:flex-col mb-36 w-full h-full">
            <div className="right-content sm:w-3/5 w-full overflow-scroll max-sm:mb-5 rounded-xl">
              <img
                src={require("../assets/dashboard.png")}
                alt=""
                className="rounded-xl img-data"
              />
            </div>
            <div className="left-content sm:w-2/5 w-full">
              <div className="sm:px-10 sm:py-10">
                <h3 className="sm:text-2xl text-xl font-primary mb-3 text-data">
                  Skill Used
                </h3>
                <ul className="w-3/5 flex-inline text-title">
                  <li className="w-fit me-3 font-primary text-lg text-data">
                    Next.js
                  </li>
                  <li className="w-fit font-primary text-lg text-data">
                    Tailwind CSS
                  </li>
                </ul>
                <h3 className="sm:text-2xl text-xl font-primary mt-10 mb-3 text-data ">
                  Overview
                </h3>
                <p className="font-primary text-lg text-title text-data">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae doloremque, in numquam inventore,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-end mb-10">
            <h3
              className="project-title title-3 text-6xl font-display py-2 border-b text-data"
              text-data
            >
              Stock Website
            </h3>
          </div>
          <div className="gallery flex flex-row-reverse mb-36 max-sm:flex-col w-full h-full">
            <div className="right-content sm:w-3/5 w-full overflow-scroll max-sm:mb-5 rounded-xl">
              <img
                src={require("../assets/stockpage.png")}
                alt=""
                className="rounded-xl img-data"
              />
            </div>
            <div className="left-content sm:w-2/5 w-full">
              <div className="sm:px-10 sm:py-10">
                <h3 className="sm:text-2xl text-xl font-primary mb-3 text-data">
                  Skill Used
                </h3>
                <ul className="w-3/5 flex-inline text-title">
                  <li className="w-fit me-3 font-primary text-lg text-data">
                    Next.js
                  </li>
                  <li className="w-fit font-primary text-lg text-data">
                    Tailwind CSS
                  </li>
                </ul>
                <h3 className="sm:text-2xl text-xl font-primary mt-10 mb-3 text-data ">
                  Overview
                </h3>
                <p className="font-primary text-lg text-title text-data">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae doloremque, in numquam inventore,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-start mb-10">
            <h3 className="project-title title-4 text-6xl font-display py-2 border-b text-data">
              Social Media Site
            </h3>
          </div>
          <div className="gallery flex max-sm:flex-col mb-36 w-full h-full">
            <div className="right-content sm:w-3/5 w-full overflow-scroll max-sm:mb-5 rounded-xl">
              <img
                src={require("../assets/social.png")}
                alt=""
                className="rounded-xl img-data"
              />
            </div>
            <div className="left-content sm:w-2/5 w-full">
              <div className="sm:px-10 sm:py-10">
                <h3 className="sm:text-2xl text-xl font-primary mb-3 text-data">
                  Skill Used
                </h3>
                <ul className="w-3/5 flex-inline text-title">
                  <li className="w-fit me-3 font-primary text-lg text-data">
                    Next.js
                  </li>
                  <li className="w-fit font-primary text-lg text-data">
                    Tailwind CSS
                  </li>
                </ul>
                <h3 className="sm:text-2xl text-xl font-primary mt-10 mb-3 text-data ">
                  Overview
                </h3>
                <p className="font-primary text-lg text-title text-data">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae doloremque, in numquam inventore,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
