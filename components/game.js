"use client";
import { useEffect, useState } from "react";
import { game } from "../lib/game";
import { requestJSON } from "../lib/request";
import ContainerTitle from "./layouts/container-title";
import ContainerDescription from "./layouts/container-description";
import { IconCheck, IconExclamationMark, IconX } from "@tabler/icons";

export default function Game({ score }) {
  useEffect(() => {
    game();
  }, []);

  const [evzenovaCesta, setEvzenovaCesta] = useState("hidden");
  const [hra, setHra] = useState("");
  const [sinSlavy, setSinSlavy] = useState("hidden");

  const [evzenovaCestaButton, setEvzenovaCestaButton] = useState("");
  const [hraButton, setHraButton] = useState("switcher-selected");
  const [sinSlavyButton, setSinSlavyButton] = useState("");

  const [finalScore, setFinalScore] = useState(0);

  const [iconCheckClass, setIconCheckClass] = useState("hidden");
  const [iconXClass, setIconXClass] = useState("hidden");
  const [warningText, setWarningText] = useState("");
  const [iconExclamationMarkClass, setIconExclamationMarkClass] =
    useState("hidden");
  const [cursorButton, setCursorButton] = useState(
    "cursor-not-allowed opacity-25 pointer-events-none"
  );

  function isNicknameExists(nickname) {
    for (let i = 0; i < score.length; i += 1) {
      if (nickname === score[i].nickname) return true;
    }
    return false;
  }
  function getNicknameScore(nickname) {
    for (let i = 0; i < score.length; i += 1) {
      if (nickname === score[i].nickname) return score[i].score;
    }
    return undefined;
  }

  function validateNickname(nickname) {
    if (nickname.length > 18) {
      setIconCheckClass("hidden");
      setIconExclamationMarkClass("hidden");
      setIconXClass("");
      setCursorButton("cursor-not-allowed opacity-25 pointer-events-none");
      setWarningText("Přezdívka je moc dlouhá!");
    } else if (isNicknameExists(nickname)) {
      setIconCheckClass("hidden");
      setIconExclamationMarkClass("");
      setIconXClass("hidden");
      setCursorButton("cursor-pointer");
      setWarningText(
        `Přezdívka již použita se skórem ${getNicknameScore(nickname)}.`
      );
    } else {
      setIconCheckClass("");
      setIconXClass("hidden");
      setIconExclamationMarkClass("hidden");
      setWarningText("");
      setCursorButton("cursor-pointer");
    }
  }

  const getScore = () => {
    setFinalScore(parseInt(document.getElementById("gameScore").innerText));
  };

  const [formDisplay, setFormDisplay] = useState("hidden");
  const openFormDisplay = () => {
    getScore();
    setFormDisplay("");
  };

  const closeFormDisplay = () => {
    setFormDisplay("hidden");
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
          <div className="absolute w-full flex-row flex items-center justify-center mt-4">
            <span id="gameSpeed" className="text-2xl text-center">
              0
            </span>
            <span className="text-2xl text-center">x |</span>
            <span id="gameScore" className="text-2xl text-center ml-1">
              0
            </span>
          </div>
          <canvas
            id="game"
            width={300}
            height={150}
            className="border-4 rounded-xl"
          ></canvas>
          <div
            id="fail-banner"
            className="absolute z-10 top-80 bg-black/70 w-[60vw] max-w-[550px] text-center h-64 rounded-xl backdrop-blur-sm flex flex-col items-center justify-around hidden"
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
            className={`absolute w-full burger-menu-height bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-around ${formDisplay}`}
            onSubmit={(e) => requestJSON(e)}
            id="display-form"
          >
            <h3 className="text-3xl text-center w-[90vw]">Zapsat skóre</h3>
            <p className="w-[80vw] max-w-[600px] text-lg">
              Pokud se rozhodneš vytesat své jméno do síně slávy, máš šanci
              vyhrát speciální dárek od Evžena Holuba... Více info sem jako
              ještě, jooo?
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center">
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  className="w-[80vw] max-w-[400px] text-center text-xl text-white bg-[#333] rounded-full py-4"
                  placeholder="Tvoje přezdívka"
                  onChange={(e) => validateNickname(e.target.value)}
                />
                <div className="w-0">
                  <IconCheck
                    className={`inline relative right-10 ${iconCheckClass}`}
                    color="#00b341"
                  />
                  <IconX
                    className={`inline relative right-10 ${iconXClass}`}
                    color="#ff2825"
                  />
                  <IconExclamationMark
                    className={`inline relative right-10 ${iconExclamationMarkClass}`}
                    color="#ff9300"
                  />
                </div>
              </div>
              <div className="text-[#ff9300] text-xl mt-2">{warningText}</div>
            </div>
            <p className="text-xl uppercase tracking-widest">
              Skóre: {finalScore}
            </p>
            <div className="w-full flex flex-row items-center justify-center">
              <input
                type="submit"
                value="Vytesat"
                className={`border px-6 py-2 rounded-full ${cursorButton} text-lg mx-2`}
              />
              <div
                onClick={closeFormDisplay}
                className="border px-6 py-2 rounded-full cursor-pointer text-lg mx-2"
              >
                Zavřít
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Společenství section */}
      <div
        id="sinSlavy"
        className={`flex flex-col items-center min-h-[60vh] ${sinSlavy} w-[90vw] max-w-[800px]`}
      >
        <ContainerTitle>Síň slávy</ContainerTitle>
        <ContainerDescription>
          V síni slávy jsou vytesány přezdívky těch nejlepších, kteří chtějí
          na&nbsp;Diecézku vyhrát Evženovu hlavní cenu.
        </ContainerDescription>
        <ol className="list-decimal w-[90vw] max-w-[800px] my-2">
          {score.map((res) => {
            return (
              <li
                key={res.nickname}
                className={`ml-6 text-lg my-1 ${
                  res.index === 0 ? `font-bold text-xl text-yellow-300` : null
                } ${
                  res.index === 1 || res.index === 2
                    ? `font-semibold text-xl text-yellow-100`
                    : null
                } tracking-wide`}
              >
                {res.nickname} - {res.score}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
