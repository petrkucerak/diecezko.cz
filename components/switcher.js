"use client";
import { useContext, useState } from "react";
import DiecezkoInfo from "./switcher/diecezko-info";
import Program from "./switcher/program";
import SpolecenstviInfo from "./switcher/spolecenstvi-info";
import SwitcherContext from "../lib/switcher-context";
export default function Switcher() {
  const { switcher, setSwitcher } = useContext(SwitcherContext);
  const [Diecezko, setDiecezko] = useState(switcher === 0 ? "" : "hidden");
  const [program, setProgram] = useState(switcher === 1 ? "" : "hidden");
  const [Info, setInfo] = useState(switcher === 2 ? "" : "hidden");

  const [DiecezkoButton, setDiecezkoButton] = useState(
    switcher === 0 ? "switcher-selected" : ""
  );
  const [programButton, setProgramButton] = useState(
    switcher === 1 ? "switcher-selected" : ""
  );
  const [InfoButton, setInfoButton] = useState(
    switcher === 2 ? "switcher-selected" : ""
  );

  const openDiecezko = () => {
    setDiecezko("");
    setProgram("hidden");
    setInfo("hidden");

    setDiecezkoButton("switcher-selected");
    setProgramButton("");
    setInfoButton("");

    setSwitcher(0); // context
  };

  const openProgram = () => {
    setDiecezko("hidden");
    setProgram("");
    setInfo("hidden");

    setDiecezkoButton("");
    setProgramButton("switcher-selected");
    setInfoButton("");

    setSwitcher(1); // context
  };

  const openInfo = () => {
    setDiecezko("hidden");
    setProgram("hidden");
    setInfo("");

    setDiecezkoButton("");
    setProgramButton("");
    setInfoButton("switcher-selected");

    setSwitcher(2); // context
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
      <DiecezkoInfo
        id="Diecezko"
        className={`flex flex-col items-center ${Diecezko}`}
      />
      <Program id="program" className={`min-h-[60vh] ${program}`} />
      {/* Společenství section */}
      <SpolecenstviInfo id="Info" className={`min-h-[60vh] ${Info}`} />
    </div>
  );
}
