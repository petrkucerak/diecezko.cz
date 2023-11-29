"use client";
import { useEffect, useState } from "react";
import { game } from "../lib/game";
import { requestJSON } from "../lib/request";
import ContainerTitle from "./layouts/container-title";
import ContainerDescription from "./layouts/container-description";
import { IconCheck, IconExclamationMark, IconX } from "@tabler/icons";
import Container from "./layouts/container";
import ContainerParagraph from "./layouts/container-paragraph";
import ContainerH2 from "./layouts/container-h2";
import ContainerH3 from "./layouts/container-h3";
import Link from "next/link";
import ContainerImage from "./layouts/container-image";

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

  const [buttonName, setButtonName] = useState("Vytesat");

  const [iconCheckClass, setIconCheckClass] = useState("hidden");
  const [iconXClass, setIconXClass] = useState("hidden");
  const [warningText, setWarningText] = useState("");
  const [iconCheckClassSecret, setIconCheckClassSecret] = useState("hidden");
  const [iconXClassSecret, setIconXClassSecret] = useState("hidden");
  const [iconExclamationMarkClass, setIconExclamationMarkClass] =
    useState("hidden");
  const [nicknameTmp, setNicknameTmp] = useState("");
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
  function getNicknameSecret(nickname) {
    for (let i = 0; i < score.length; i += 1) {
      if (nickname === score[i].nickname) return score[i].secret;
    }
    return undefined;
  }

  function validateNickname(nickname) {
    setNicknameTmp(nickname);
    if (nickname.length > 18) {
      setIconCheckClass("hidden");
      setIconExclamationMarkClass("hidden");
      setIconXClass("");
      setCursorButton("cursor-not-allowed opacity-25 pointer-events-none");
      setWarningText("Přezdívka je moc dlouhá!");
      setButtonName("Vytesat");
    } else if (isNicknameExists(nickname)) {
      setIconCheckClass("hidden");
      setIconExclamationMarkClass("");
      setIconXClass("hidden");
      if (iconCheckClassSecret === "") setCursorButton("cursor-pointer");
      else setCursorButton("cursor-not-allowed opacity-25 pointer-events-none");
      setWarningText(
        `Přezdívka již použita se skórem ${getNicknameScore(
          nickname
        )}.<br/>Pro aktualizaci napište správné tajné slovo.`
      );
      setButtonName("Aktualizovat");
    } else {
      setIconCheckClass("");
      setIconXClass("hidden");
      setIconExclamationMarkClass("hidden");
      setWarningText("");
      setCursorButton("cursor-pointer");
      setButtonName("Vytesat");
      if (iconCheckClassSecret === "") setCursorButton("cursor-pointer");
      else setCursorButton("cursor-not-allowed opacity-25 pointer-events-none");
    }
  }

  function validateSecret(secret) {
    if (isNicknameExists(nicknameTmp)) {
      setButtonName("Aktualizovat");
      if (secret === getNicknameSecret(nicknameTmp)) {
        setIconCheckClassSecret("");
        setIconXClassSecret("hidden");
        setWarningText("");
        setCursorButton("cursor-pointer");
      } else {
        setIconCheckClassSecret("hidden");
        setIconXClassSecret("");
        setCursorButton("cursor-not-allowed opacity-25 pointer-events-none");
        setWarningText(
          `Přezdívka již použita se skórem ${getNicknameScore(
            nicknameTmp
          )}.<br/>Pro aktualizaci napište správné tajné slovo.`
        );
      }
    } else {
      if (secret.length < 4) {
        setWarningText(`Tajné slovo je příliš krátké.`);
        setIconCheckClassSecret("hidden");
        setIconXClassSecret("");
        setButtonName("Vytesat");
        setCursorButton("cursor-not-allowed opacity-25 pointer-events-none");
      } else {
        setWarningText(``);
        setIconCheckClassSecret("");
        setIconXClassSecret("hidden");
        setButtonName("Vytesat");
        setCursorButton("cursor-pointer");
      }
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
        <Container>
          <ContainerH2>Evženův příběh</ContainerH2>
          <div className="flex w-full justify-around bg-[#444] rounded-xl items-center p-4 mt-2">
            <ContainerDescription className={`w-[50vw] max-w-[500px]`}>
              Pan Holub k nám byl seslán při vanutí Ducha. Pravděpodobně
              holubice nebyla toho času k dispozici. Holuba jste si všichni moc
              oblíbili a rovnou jste jej začali oslovovat jménem Evžen. A tak se
              Evžen Holub stal maskotem královéhradecké mládeže.
            </ContainerDescription>
            <ContainerImage
              pngPath={`/assets/images/jadro/evzen.png`}
              webpPath={`/assets/images/jadro/evzen.webp`}
              altText={`Fotka Pana Holuba Evzena`}
              className={`!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444]`}
            />
          </div>

          <ContainerParagraph>
            Jednoho dne se rozhodl, že se vydá do světa. Sbalil saky paky a
            rozlétl se …
          </ContainerParagraph>
          <ContainerH3>Evženova cesta</ContainerH3>
          <ContainerParagraph>
            Pomoz holubovi v bezpečí proletět celou naší diecézí, získej
            nejvyšší skóre a zapiš se do síně slávy. Skóre se ti zvyšuje
            pojídáním jídla a sbíráním hvězdiček. Za každý kousek jídla je jiný
            počet bodů. Holubova cesta není jednoduchá! Musí se vyhýbat stavbám,
            raketám či vzducholodím. Na mobilu změníš holubův pohyb klinutím do
            hry, na počítači stiskem mezerníku. Hodně štěstí, ať se s Tebou
            Evžen dostane co nejdál!
          </ContainerParagraph>
          <ContainerParagraph className="italic text-sm">
            Baví Tě programovat a chtěl bys Evžena zlepšit? Napiš na mail{" "}
            <Link href={`mailto:dev@diecezko.cz	`} className="underline">
              dev@diecezko.cz
            </Link>{" "}
            nebo si forkni repo a pošli rovnou zpátky pull-request se
            improvmentem.
          </ContainerParagraph>
        </Container>
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
            <p>
              Zapisování výsledků je uzamčeno,
              <br />
              hru už je možné pouze hrát.
            </p>
            <button
              className="uppercase border py-2 px-6 rounded-full"
              onClick={refreshPage}
            >
              nová hra
            </button>
            <button
              className="uppercase border py-2 px-6 rounded-full cursor-not-allowed opacity-25 pointer-events-none scale-75"
              // onClick={openFormDisplay} // locked, new score is not accepting
              title="Hra již nepřijímá nové výsledky"
            >
              zapsat se
              <br />
              do síně slávy
            </button>
          </div>
          <form
            className={`absolute w-full min-h-[700px] bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-around ${formDisplay}`}
            onSubmit={(e) => requestJSON(e)}
            id="display-form"
          >
            <h3 className="text-3xl text-center w-[90vw]">Zapsat skóre</h3>
            <div className="w-[80vw] max-w-[600px] text-lg">
              <p className="mb-2 italic">
                Pokud se rozhodneš vytesat své jméno do síně slávy, máš šanci
                vyhrát speciální dárek od Evžena Holuba.
              </p>
              <p className="mb-2">
                <strong>Přezdívka</strong> může být dlouhá maximálně 18 znaků.
                Spolu s ní bude do Síně slávy vytesáno maximální skóre.
              </p>
              <p>
                <strong>Tajné slovo</strong> musí být dlouhé minimálně 4 znaky.
                Pokud tvoříš svoji přezdívku poprvé, dobře si ho zapamatuj. Pro
                aktualizaci budeš muset vepsat stejné slovo.
              </p>
            </div>
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
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  id="secret"
                  name="secret"
                  className="w-[80vw] max-w-[400px] text-center text-xl text-white bg-[#333] rounded-full py-4 mt"
                  placeholder="Tajné slovo"
                  onChange={(e) => validateSecret(e.target.value)}
                />
                <div className="w-0">
                  <IconCheck
                    className={`inline relative right-10 ${iconCheckClassSecret}`}
                    color="#00b341"
                  />
                  <IconX
                    className={`inline relative right-10 ${iconXClassSecret}`}
                    color="#ff2825"
                  />
                </div>
              </div>
              <div
                className="text-[#ff9300] text-xl mt-2 text-center"
                dangerouslySetInnerHTML={{ __html: warningText }}
              />
            </div>
            <p className="text-xl uppercase tracking-widest">
              Skóre: {finalScore}
            </p>
            <div className="w-full flex flex-row items-center justify-center">
              <input
                type="submit"
                value={buttonName}
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
          V síni slávy jsou vytesány přezdívky těch nejlepších, kteří chtěli
          na&nbsp;Diecézku vyhrát Evženovu hlavní cenu. Třem nejlepším se
          zadařilo, gratulujeme.
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
