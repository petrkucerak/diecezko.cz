"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import { useEffect, useState } from "react";

export default function SwipeGallery({ photos }) {
  const moveRight = () => {
    //  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: -100,
      behavior: "smooth",
    });
    console.log("NOW");
    //  });
  };
  return (
    <div className="w-full">
      <div className="flex flex-nowrap overflow-x-scroll md:overflow-x-hidden">
        {photos.map((p) => {
          return (
            <img
              alt={p.alt !== undefined ? p.alt : ""}
              src={p.path}
              key={p.id}
              id={`SwipingGallery${p.id}`}
              className="rounded-xl mr-2"
            />
          );
        })}
      </div>
      <div
        className={`relative flex flex-row items-center justify-between w-[90vw] max-w-[800px] -top-16`}
      >
        <IconArrowLeft
          className="inline ml-2 cursor-pointer"
          size={30}
          onClick={moveRight}
        />
        <IconArrowRight
          className="inline mr-2 cursor-pointer"
          size={30}
          onClick={moveRight}
        />
      </div>
    </div>
  );
}
