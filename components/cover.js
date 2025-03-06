"use client";
import { useLayoutEffect, useState } from "react";

export default function Cover({ children }) {
  const [blur, setBlur] = useState("bg-black/50");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) setBlur("bg-black/80 backdrop-blur-md");
    else setBlur("bg-black/50");
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className="fixed top-0 h-screen w-full -z-10 flex flex-col">
        <div
          className={`absolute h-screen w-full transition-all z-10 duration-[2000ms] ${blur}`}
        ></div>
        <picture>
          <source srcSet="assets/images/cover.webp" type="image/webp" />
          <source srcSet="assets/images/cover.jpg" type="image/jpeg" />
          <img
            alt="Podium se zataženým závěsem"
            loading="lazy"
            src="assets/images/cover.jpg"
            className="h-screen w-full -z-20 object-cover object-bottom"
          />
        </picture>
        <div className="absolute h-[50vh] w-full items-center flex justify-center">
          <img
            className="mb-20 w-[40vw] max-w-[200px]"
            src="/assets/images/on-air.svg"
          />
        </div>
      </div>
      <div className="flex items-center flex-col w-full">{children}</div>
    </>
  );
}
