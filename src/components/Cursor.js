import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      document.querySelector(".inner").style.top = `${e.pageY}px`;
      document.querySelector(".inner").style.left = `${e.pageX}px`;
    });

    document.querySelectorAll(".img-data").forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
        element.animate(
          {
            scale: "1.1",
          },
          { duration: 500, fill: "forwards" }
        );
        document.querySelector(".inner").animate(
          {
            width: "4rem",
            height: "4rem",
          },
          { duration: 500, fill: "forwards" }
        );
      });
      element.addEventListener("mouseleave", (e) => {
        element.animate(
          {
            scale: "1",
          },
          { duration: 400, fill: "forwards" }
        );
        document.querySelector(".inner").animate(
          {
            width: "0.5rem",
            height: "0.5rem",
          },
          { duration: 400, fill: "forwards" }
        );
      });
    });

    document.querySelectorAll(".text-data").forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
        document.querySelector(".inner").animate(
          {
            width: "4rem",
            height: "4rem",
          },
          { duration: 400, fill: "forwards" }
        );
      });

      element.addEventListener("mouseleave", (e) => {
        document.querySelector(".inner").animate(
          {
            width: "0.25rem",
            height: "0.25rem",
          },
          { duration: 400, fill: "forwards" }
        );
      });
    });
  });
  return (
    <>
      <div
        className={`max-sm:hidden cursor inner z-50 h-2 w-2 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference pointer-events-none  bg-heading absolute`}
      ></div>
    </>
  );
};

export default Cursor;
