"use client";
import {
  IconAnchor,
  IconCaretDown,
  IconCaretUp,
  IconChessBishop,
  IconHeadphones,
  IconHeart,
  IconHeartHandshake,
  IconMap,
  IconMenu2,
  IconMusic,
  IconPuzzle,
  IconX,
} from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";
import IconCustomSalas from "./images/salas";
import IconCustomVesmir from "./images/vesmir";
import IconCustomDCM from "./images/dcm-hk";
import IconCustomEvzen from "./images/evzen";
import IconCustomVeka from "./images/veka";

export default function Header() {
  const [burgerControl, setBurgerControl] = useState("");
  const [closeControl, setCloseControl] = useState("hidden");
  const [burgerMenu, setBurgerMenu] = useState("hidden");
  const [header, setHeader] = useState("");

  const [pastoraceVisibility, setPastoraceVisibility] = useState("hidden");
  const [pastoraceStatusOpen, setPastoraceStatusOpen] = useState("hidden");
  const [pastoraceStatusClose, setPastoraceStatusClose] = useState("");

  const [musicVisibility, setMusicVisibility] = useState("hidden");
  const [musicStatusOpen, setMusicStatusOpen] = useState("hidden");
  const [musicStatusClose, setMusicStatusClose] = useState("");

  function lockScrolling() {
    document.getElementById("body").classList.add("lock-scrolling");
  }
  function unlockScrolling() {
    document.getElementById("body").classList.remove("lock-scrolling");
  }

  const openMenu = () => {
    setBurgerControl("hidden");
    setCloseControl("");
    setBurgerMenu("");
    setHeader("fixed");
    lockScrolling();
  };
  const closeMenu = () => {
    setBurgerControl("");
    setCloseControl("hidden");
    setBurgerMenu("hidden");
    setHeader("");
    unlockScrolling();
  };

  const clickPastorace = () => {
    // is not open => open
    if (pastoraceStatusOpen === "hidden") {
      setPastoraceVisibility("");
      setMusicVisibility("hidden");
      setPastoraceStatusOpen("");
      setPastoraceStatusClose("hidden");
      setMusicStatusOpen("hidden");
      setMusicStatusClose("");
    } else {
      // is open => close
      setPastoraceVisibility("hidden");
      setMusicVisibility("hidden");
      setPastoraceStatusOpen("hidden");
      setPastoraceStatusClose("");
    }
  };

  const clickMusic = () => {
    // is not open => open
    if (musicStatusOpen === "hidden") {
      setPastoraceVisibility("hidden");
      setMusicVisibility("");
      setMusicStatusOpen("");
      setMusicStatusClose("hidden");
      setPastoraceStatusOpen("hidden");
      setPastoraceStatusClose("");
    } else {
      // is open => close
      setPastoraceVisibility("hidden");
      setMusicVisibility("hidden");
      setMusicStatusOpen("hidden");
      setMusicStatusClose("");
    }
  };

  return (
    <>
      <header
        className={`${header} w-full flex flex-row items-center justify-between h-16 bg-black/90 backdrop-blur-md z-40`}
      >
        <div>
          <Link
            href="/"
            onClick={unlockScrolling}
            className={`text-2xl uppercase ml-4 font-bold text-shadow shadow-white`}
            target="_self"
            title="Diecézko.cz"
          >
            Diecézko.cz
            <span className="text-xs relative top-[0.6rem] -left-2 text-shadow-lg text-yellow-300 shadow-yellow-300">
              2024
            </span>
          </Link>
        </div>
        <div>
          <IconMenu2
            className={`mr-4 cursor-pointer ${burgerControl}`}
            onClick={openMenu}
          />
          <IconX
            className={`mr-4 cursor-pointer ${closeControl}`}
            onClick={closeMenu}
          />
        </div>
      </header>
      <nav
        className={`top-16 fixed w-full backdrop-blur-md bg-black/70 ${burgerMenu} burger-menu-height flex flex-col items-center z-50`}
      >
        <ul
          className={`text-2xl flex flex-col items-start justify-around w-[90vw] max-w-[400px]`}
        >
          <Link
            href="/mapa"
            onClick={unlockScrolling}
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full my-4"
          >
            <li className="flex flex-row items-center">
              <IconMap stroke={1.5} className="inline h-7 w-7 my-1 mr-2" />
              Mapa míst
            </li>
          </Link>
          <Link
            href="vikariaty"
            onClick={unlockScrolling}
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full my-4"
          >
            <li className="flex flex-row items-center">
              <IconPuzzle stroke={1.5} className="inline h-7 w-7 my-1 mr-2" />
              Vikariáty
            </li>
          </Link>
          <li className="flex flex-col items-center w-full justify-between my-4">
            <div
              className="flex flex-row items-center w-full justify-between cursor-pointer border-b border-b-[#3b3b3b]"
              onClick={clickPastorace}
            >
              <div className="flex items-center">
                <IconAnchor stroke={1.3} className="inline h-7 w-7 my-1 mr-2" />
                Pastorace
              </div>{" "}
              <div>
                <IconCaretDown
                  className={`${pastoraceStatusClose}`}
                  size={30}
                  stroke={1.5}
                />{" "}
                <IconCaretUp
                  className={`${pastoraceStatusOpen}`}
                  size={30}
                  stroke={1.5}
                />
              </div>
            </div>
            <ul className={`${pastoraceVisibility} w-full flex flex-col`}>
              <Link
                href="/dcm-hradec-kralove"
                onClick={unlockScrolling}
                target="_self"
                className="w-full mt-4 text-xl"
              >
                <li className="flex flex-row items-center">
                  <IconCustomDCM className="inline h-7 w-7 my-1 mr-2" />
                  DCM Hradec Králové
                </li>
              </Link>
              <Link
                href="/dczm-vesmir"
                onClick={unlockScrolling}
                target="_self"
                className="w-full mt-4 text-xl"
              >
                <li className="flex flex-row items-center">
                  <IconCustomVesmir className="inline h-7 w-7 my-1 mr-2" />
                  DCŽM Vesmír
                </li>
              </Link>
              <Link
                href="/kak-salas"
                onClick={unlockScrolling}
                target="_self"
                className="w-full mt-4 text-xl"
              >
                <li className="flex flex-row items-center">
                  <IconCustomSalas className="h-7 w-7 inline my-1 mr-2" />
                  KAK Salaš
                </li>
              </Link>
            </ul>
          </li>
          <li className="flex flex-col items-center w-full justify-between my-4">
            <div
              className="flex flex-row items-center w-full justify-between cursor-pointer border-b border-b-[#3b3b3b]"
              onClick={clickMusic}
            >
              <div className="flex items-center">
                <IconHeadphones
                  stroke={1.3}
                  className="inline h-7 w-7 my-1 mr-2"
                />
                Kapely
              </div>{" "}
              <div>
                <IconCaretDown
                  className={`${musicStatusClose}`}
                  size={30}
                  stroke={1.5}
                />{" "}
                <IconCaretUp
                  className={`${musicStatusOpen}`}
                  size={30}
                  stroke={1.5}
                />
              </div>
            </div>
            <ul className={`${musicVisibility} w-full flex flex-col`}>
              {/* <Link
                href="/studenecka-kapela"
                onClick={unlockScrolling}
                target="_self"
                className="w-full mt-4 text-xl"
              >
                <li className="flex flex-row items-center">
                  <IconMusic
                    stroke={1.5}
                    className="inline h-7 w-7 my-1 mr-2"
                  />
                  Studenecká kapela
                </li>
              </Link> */}
              <Link
                href="/veka"
                onClick={unlockScrolling}
                target="_self"
                className="w-full mt-4 text-xl"
              >
                <li className="flex flex-row items-center">
                  <IconCustomVeka className="inline h-7 w-7 my-1 mr-2" />
                  Vesmírná kapela
                </li>
              </Link>
            </ul>
          </li>

          <Link
            href="/jadro-diecezka"
            onClick={unlockScrolling}
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full my-4"
          >
            <li className="flex flex-row items-center">
              <IconHeart stroke={1.5} className="inline h-7 w-7 my-1 mr-2" />
              Jádro Diecézka
            </li>
          </Link>
          <Link
            href="/partneri"
            onClick={unlockScrolling}
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full my-4"
          >
            <li className="flex flex-row items-center">
              <IconHeartHandshake
                stroke={1.5}
                className="inline h-7 w-7 my-1 mr-2"
              />
              Partneři
            </li>
          </Link>
          <Link
            href="/pozvani-biskupa-jana"
            onClick={unlockScrolling}
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full my-4"
          >
            <li className="flex flex-row items-center">
              <IconChessBishop
                stroke={1.5}
                className="inline h-7 w-7 my-1 mr-2"
              />
              Pozvání biskupa Jana
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
