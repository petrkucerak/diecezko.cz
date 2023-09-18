"use client";
import { IconMenu2, IconMusic, IconPuzzle, IconX } from "@tabler/icons";
import Link from "next/link";
import Script from "next/script";
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

  const openMenu = () => {
    setBurgerControl("hidden");
    setCloseControl("");
    setBurgerMenu("");
    lockScrolling();
  };
  const closeMenu = () => {
    setBurgerControl("");
    setCloseControl("hidden");
    setBurgerMenu("hidden");
    unlockScrolling();
  };
  return (
    <>
      <header className="w-full flex flex-row items-center justify-between h-16 bg-black/90 backdrop-blur-md">
        <div>
          <Link
            href="/"
            className="text-3xl font-caveatBrush ml-4"
            target="_self"
            title="Diecézko.cz"
          >
            Diecézko.cz
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
        className={`absolute w-full backdrop-blur-md bg-black/70 ${burgerMenu} flex flex-col items-center`}
      >
        <ul
          className={`text-2xl flex flex-col items-start justify-around burger-menu-height w-[90vw] max-w-[400px]`}
        >
          <Link
            href="/evzenova-cesta"
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconCustomEvzen className="inline h-7 w-7 my-1 mr-2" />
              Evženova cesta
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconPuzzle className="inline h-7 w-7 my-1 mr-2" />
              Vikariáty
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconCustomDCM className="inline h-7 w-7 my-1 mr-2" />
              DCM Hradec Králové
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconCustomVesmir className="inline h-7 w-7 my-1 mr-2" />
              DCŽM Vesmír
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconCustomSalas className="h-7 w-7 inline my-1 mr-2" />
              KSK Salaš
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconCustomVeka className="inline h-7 w-7 my-1 mr-2" />
              Vesmírná kapela
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconMusic className="inline h-7 w-7 my-1 mr-2" />
              Studenecká schola
            </li>
          </Link>
        </ul>
      </nav>
      <Script
        id="lock-scrolling"
        dangerouslySetInnerHTML={{
          __html: `const body = document.getElementById("body");
  function lockScrolling() {
    body.classList.add("lock-scrolling");
    window.scrollTo(0, 0);
  }
  function unlockScrolling() {
    body.classList.remove("lock-scrolling");
  }`,
        }}
      />
    </>
  );
}
