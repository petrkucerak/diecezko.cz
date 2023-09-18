"use client";
import {
  IconBrandFacebook,
  IconCalendar,
  IconHeartHandshake,
  IconPencil,
} from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";
export default function Switcher() {
  const [Diecezko, setDiecezko] = useState("");
  const [program, setProgram] = useState("hidden");
  const [Info, setInfo] = useState("hidden");

  const [DiecezkoButton, setDiecezkoButton] = useState("switcher-selected");
  const [programButton, setProgramButton] = useState("");
  const [InfoButton, setInfoButton] = useState("");

  const openDiecezko = () => {
    setDiecezko("");
    setProgram("hidden");
    setInfo("hidden");

    setDiecezkoButton("switcher-selected");
    setProgramButton("");
    setInfoButton("");
  };

  const openProgram = () => {
    setDiecezko("hidden");
    setProgram("");
    setInfo("hidden");

    setDiecezkoButton("");
    setProgramButton("switcher-selected");
    setInfoButton("");
  };

  const openInfo = () => {
    setDiecezko("hidden");
    setProgram("hidden");
    setInfo("");

    setDiecezkoButton("");
    setProgramButton("");
    setInfoButton("switcher-selected");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[90vw] max-w-[500px] flex items-center flex-row justify-between md:text-lg bg-black/60 rounded-full font-semibold my-4">
        <div
          className={`cursor-pointer rounded-full md:p-3 md:pt-4 md:px-8 p-2 px-4 duration-300 ${DiecezkoButton}`}
          onClick={openDiecezko}
        >
          Diecézko
        </div>
        <div
          className={`cursor-pointer rounded-full md:p-3 md:pt-4 md:px-8 p-2 px-4 duration-300 ${programButton}`}
          onClick={openProgram}
        >
          Program
        </div>
        <div
          className={`cursor-pointer rounded-full md:p-3 md:pt-4 md:px-8 p-2 px-4 duration-300 ${InfoButton}`}
          onClick={openInfo}
        >
          Informace
        </div>
      </div>
      {/* Diecezkormace section */}
      <div
        id="Diecezko"
        className={`flex flex-col items-center justify-around min-h-[60vh] ${Diecezko}`}
      >
        <div className="flex flex-col items-center w-full">
          <span className="text-base text-center">
            Filharmonie Hradec Králové
          </span>
          <span className="text-2xl text-center">
            25.&nbsp;11.&nbsp;2023 • 9.30
          </span>
        </div>
        <div className="flex flex-col items-center w-[90vw]">
          <h1 className="text-5xl md:text-7xl font-caveatBrush text-center">
            Diecézní setkání mládeže
          </h1>
          <p className="text-xl md:text-3xl mt-4 md:mt-6 text-center">
            Zastav se a naslouchej
          </p>
        </div>
        <div className="w-[90vw] max-w-[500px] grid grid-cols-2 grid-flow-row gap-4 items-center auto-cols-max">
          <Link
            href="https://forms.gle/aMQor8ARxaULdD8t7"
            rel="external"
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center">
              <IconPencil className="inline" />{" "}
              <span className="ml-2 text-left">Přihláška</span>
            </button>
          </Link>
          <Link
            href="https://forms.gle/M4Pc27SiqY9Wa7u87"
            rel="external"
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center">
              <IconHeartHandshake className="inline" />{" "}
              <span className="ml-2 text-left">Dobrovolníci</span>
            </button>
          </Link>
          <Link
            href="https://www.facebook.com/events/520344309938232"
            rel="external"
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center">
              <IconBrandFacebook className="inline" />{" "}
              <span className="ml-2 text-left">Událost</span>
            </button>
          </Link>
          <Link
            href="/assets/events/dcmhk23.ics"
            rel="document"
            download="dcmhk23"
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center">
              <IconCalendar className="inline" />{" "}
              <span className="ml-2 text-left">Uložit event</span>
            </button>
          </Link>
        </div>
      </div>
      {/* Program section */}
      <div
        id="program"
        className={`flex flex-col items-center justify-around min-h-[60vh] ${program}`}
      ></div>
      {/* Společenství section */}
      <div
        id="Info"
        className={`flex flex-col items-center justify-around min-h-[60vh] ${Info}`}
      ></div>
    </div>
  );
}
