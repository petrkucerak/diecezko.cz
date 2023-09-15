"use client";
import { IconMenu2, IconX } from "@tabler/icons";
import { useState } from "react";

export default function Header() {
  const [burgerControl, setBurgerControl] = useState("");
  const [closeControl, setCloseControl] = useState("hidden");
  const [burgerMenu, setBurgerMenu] = useState("hidden");

  const openMenu = () => {
    setBurgerControl("hidden");
    setCloseControl("");
    setBurgerMenu("");
  };
  const closeMenu = () => {
    setBurgerControl("");
    setCloseControl("hidden");
    setBurgerMenu("hidden");
  };
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <div>
          <div className="text-3xl font-caveatBrush m-4">Diecézko.cz</div>
        </div>
        <div>
          <IconMenu2
            className={`m-4 cursor-pointer ${burgerControl}`}
            onClick={openMenu}
          />
          <IconX
            className={`m-4 cursor-pointer ${closeControl}`}
            onClick={closeMenu}
          />
        </div>
      </div>
      <nav
        className={`absolute w-full backdrop-blur-md bg-black/70 ${burgerMenu}`}
      >
        <ul className="text-2xl flex flex-col items-center justify-between h-[90vh]">
          <li>Nabidka 1</li>
          <li>Nabidka 1</li>
          <li>Nabidka 1</li>
          <li>Nabidka 1</li>
          <li>Nabidka 1</li>
          <li>Nabidka 1</li>
        </ul>
      </nav>
    </>
  );
}
