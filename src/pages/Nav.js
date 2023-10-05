import React, { useEffect, useState } from "react";
import { gsap, Expo } from "gsap";

const Nav = () => {
  return (
    <div data-scroll-section>
      <div className="fixed backdrop-blur top-0 left-0 z-40 w-full">
        <div className="h-16 flex items-center justify-between w-full sm:px-10 px-5">
          <h2 className="text-xl text-primary font-primary text-data">
            HET PATEL
          </h2>
          <div>
            <p className="text-data ext-primary font-primary other-text">
              Gujarat, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
