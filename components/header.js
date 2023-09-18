"use client";
import { IconMenu2, IconX } from "@tabler/icons";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

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
      <header className="w-full flex flex-row items-center justify-between h-16">
        <div>
          <div className="text-3xl font-caveatBrush ml-4">Diecézko.cz</div>
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
        className={`absolute w-full backdrop-blur-md bg-black/30 ${burgerMenu}`}
      >
        <ul
          className={`text-2xl flex flex-col items-center justify-around burger-menu-height`}
        >
          <Link href="" target="_self">
            <li>Evženova cesta</li>
          </Link>
          <Link href="" target="_self">
            <li>Vikariáty</li>
          </Link>
          <Link href="" target="_self">
            <li>DCM Hradec Králové</li>
          </Link>
          <Link href="" target="_self">
            <li>DCŽM Vesmír</li>
          </Link>
          <Link href="" target="_self">
            <li>KSK Salaš</li>
          </Link>
          <Link href="" target="_self">
            <li>Vesmírná kapela</li>
          </Link>
          <Link href="" target="_self">
            <li>Studenecká schola</li>
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
