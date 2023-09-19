"use client";
import { useEffect, useState } from "react";
import { game } from "../lib/game";
import { requestJSON } from "../lib/request";

export default function Game() {
  useEffect(() => {
    game();
  }, []);

  const [evzenovaCesta, setEvzenovaCesta] = useState("hidden");
  const [hra, setHra] = useState("");
  const [sinSlavy, setSinSlavy] = useState("hidden");

  const [evzenovaCestaButton, setEvzenovaCestaButton] = useState("");
  const [hraButton, setHraButton] = useState("switcher-selected");
  const [sinSlavyButton, setSinSlavyButton] = useState("");

  const [formDisplay, setFormDisplay] = useState("hidden");
  const openFormDisplay = () => {
    setFormDisplay("");
  };

  const openEvzenovaCesta = () => {
    setEvzenovaCesta("");
    setHra("hidden");
    setSinSlavy("hidden");

    setEvzenovaCestaButton("switcher-selected");
    setHraButton("");
    setSinSlavyButton("");
  };

  const openHra = () => {
    setEvzenovaCesta("hidden");
    setHra("");
    setSinSlavy("hidden");

    setEvzenovaCestaButton("");
    setHraButton("switcher-selected");
    setSinSlavyButton("");

    const gameElement = document.getElementById("game");
    if (gameElement) gameElement.scrollIntoView({ behavior: "smooth" });
  };

  const openSinSlavy = () => {
    setEvzenovaCesta("hidden");
    setHra("hidden");
    setSinSlavy("");

    setEvzenovaCestaButton("");
    setHraButton("");
    setSinSlavyButton("switcher-selected");
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-[90vw] max-w-[500px] flex items-center flex-row justify-between md:text-lg bg-[#222] rounded-full font-semibold my-4 text-center">
        <div
          className={`cursor-pointer rounded-full md:p-3 md:pt-4 md:px-8 p-2 px-4 duration-300 ${evzenovaCestaButton}`}
          onClick={openEvzenovaCesta}
        >
          Evženův příběh
        </div>
        <div
          className={`cursor-pointer rounded-full md:p-3 md:pt-4 md:px-8 p-2 px-4 duration-300 ${hraButton}`}
          onClick={openHra}
        >
          Evženova cesta
        </div>
        <div
          className={`cursor-pointer rounded-full md:p-3 md:pt-4 md:px-8 p-2 px-4 duration-300 ${sinSlavyButton}`}
          onClick={openSinSlavy}
        >
          Síň slávy
        </div>
      </div>
      {/* EvzenovaCestarmace section */}
      <div
        id="evzenovaCesta"
        className={`flex flex-col items-center justify-around min-h-[60vh] ${evzenovaCesta}`}
      >
        <p>nejakuy text1</p>
      </div>
      {/* Hra section */}
      <div
        id="hra"
        className={`flex flex-col items-center justify-around min-h-[60vh] ${hra}`}
      >
        <div className="w-full flex flex-col items-center justify-between prevent-select">
          <div className="absolute w-full flex-row flex items-center justify-around mt-4">
            <span id="gameScore" className="text-2xl text-center">
              0
            </span>
          </div>
          <canvas id="game" width={300} height={150}></canvas>
          <div
            id="fail-banner"
            className="absolute z-10 top-80 bg-black/70 w-[60vw] text-center h-64 rounded backdrop-blur-sm flex flex-col items-center justify-around hidden"
          >
            <h3 className="text-2xl font-bold">Evžen narazil!</h3>
            <button
              className="uppercase border py-2 px-6 rounded-full"
              onClick={refreshPage}
            >
              nová hra
            </button>
            <button
              className="uppercase  border py-2 px-6 rounded-full"
              onClick={openFormDisplay}
            >
              zapsat se
              <br />
              do síně slávy
            </button>
          </div>
          <form
            className={`absolute w-full top-16 burger-menu-height bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-around ${formDisplay}`}
            onSubmit={(e) => requestJSON(e)}
          >
            <h3 className="text-3xl">Zápis do síně slávy</h3>
            <input
              type="text"
              id="nickname"
              name="nickname"
              className="w-[80vw] max-w-[300px] text-center text-white py-4 rounded"
              placeholder="Tvoje přezdívka"
            ></input>
            <input
              type="submit"
              value="Vytesat"
              className="border px-6 py-2 rounded-full cursor-pointer"
            />
          </form>
        </div>
      </div>
      {/* Společenství section */}
      <div
        id="sinSlavy"
        className={`flex flex-col items-center justify-around min-h-[60vh] ${sinSlavy}`}
      >
        <p>nejakuy text3</p>
      </div>
    </div>
  );
}
