"use client";
import { useLayoutEffect, useState } from "react";

export default function Cover({ children }) {
  const [blur, setBlur] = useState("");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) setBlur("backdrop-blur-md");
    else setBlur("");
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className="fixed top-0 h-screen w-full -z-10">
        <div className={`absolute h-screen w-full bg-black/80 ${blur}`}></div>
        <picture>
          <source srcSet="assets/images/cover.webp" type="image/webp" />
          <source srcSet="assets/images/cover.jpg" type="image/jpeg" />
          <img
            alt="Západ slunce"
            loading="lazy"
            src="assets/images/cover.png"
            className="h-screen w-full -z-20 object-cover object-bottom"
          />
        </picture>
      </div>
      <div className="flex items-center flex-col w-full">{children}</div>
    </>
  );
}
