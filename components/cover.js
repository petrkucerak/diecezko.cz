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
      <div className="fixed top-0 h-screen w-full -z-10">
        <div
          className={`absolute h-screen w-full transition-all duration-[2000ms] ${blur}`}
        ></div>
        <picture>
          <source srcSet="assets/images/cover.webp" type="image/webp" />
          <source srcSet="assets/images/cover.jpg" type="image/jpeg" />
          <img
            alt="Západ slunce"
            loading="lazy"
            src="assets/images/cover.jpg"
            className="h-screen w-full -z-20 object-cover object-bottom"
          />
        </picture>
      </div>
      <div className="flex items-center flex-col w-full">{children}</div>
    </>
  );
}
