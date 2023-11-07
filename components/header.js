"use client";
import {
  IconHeart,
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

  const openMenu = () => {
    setBurgerControl("hidden");
    setCloseControl("");
    setBurgerMenu("");
    setHeader("fixed");
  };
  const closeMenu = () => {
    setBurgerControl("");
    setCloseControl("hidden");
    setBurgerMenu("hidden");
    setHeader("");
  };
  return (
    <>
      <header
        className={`${header} w-full flex flex-row items-center justify-between h-16 bg-black/90 backdrop-blur-md z-40`}
      >
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
        className={`top-16 fixed w-full backdrop-blur-md bg-black/70 ${burgerMenu} flex flex-col items-center z-50`}
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
            href="vikariaty"
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconPuzzle stroke={1} className="inline h-7 w-7 my-1 mr-2" />
              Vikariáty
            </li>
          </Link>
          <Link
            href="/dcm-hradec-kralove"
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconCustomDCM className="inline h-7 w-7 my-1 mr-2" />
              DCM Hradec Králové
            </li>
          </Link>
          <Link
            href="/dczm-vesmir"
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconCustomVesmir className="inline h-7 w-7 my-1 mr-2" />
              DCŽM Vesmír
            </li>
          </Link>
          <Link
            href="/kak-salas"
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconCustomSalas className="h-7 w-7 inline my-1 mr-2" />
              KAK Salaš
            </li>
          </Link>
          <Link
            href="/veka"
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconCustomVeka className="inline h-7 w-7 my-1 mr-2" />
              Vesmírná kapela
            </li>
          </Link>
          <Link
            href="/studenecka-kapela"
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li className="flex flex-row items-center">
              <IconMusic stroke={1} className="inline h-7 w-7 my-1 mr-2" />
              Studenecká kapela
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
