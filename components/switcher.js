"use client";
import { useState } from "react";
import DiecezkoInfo from "./diecezko-info";
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
      <DiecezkoInfo
        id="Diecezko"
        className={`flex flex-col items-center ${Diecezko}`}
      />
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
