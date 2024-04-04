"use client";
import Container from "../layouts/container";
import ContainerH2 from "../layouts/container-h2";
import ContainerParagraph from "../layouts/container-paragraph";
import {
  IconApps,
  IconCross,
  IconPencil,
  IconPhoto,
  IconSpeakerphone,
} from "@tabler/icons";
import Link from "next/link";
import Nbsp from "../format/nbsp";
import Strong from "../format/strong";

export default function DiecezkoInfo({ id, className }) {
  return (
    <Container id={id} className={className}>
      <div className="min-h-[75vh] flex flex-col items-center justify-around">
        <div className="flex flex-col items-center w-full">
          <span className="text-base text-center"></span>
          <span className="text-2xl text-center tracking-wide">
            23.&nbsp;3.&nbsp;2024 • 9.30
          </span>
        </div>
        <div className="flex flex-col items-center w-[90vw]">
          <h1 className="text-6xl md:text-7xl uppercase leading-tight tracking-wide text-center text-shadow-lg shadow-white">
            Diecézní
            <br />
            <yel className="text-yellow-300 text-shadow-lg text-7xl md:text-8xl shadow-yellow-300 font-semibold">
              setkání
            </yel>
            <br />
            mládeže
          </h1>
          <p className="uppercase text-xl md:text-3xl text-shadow-lg shadow-white">
            v Hradci Králové
          </p>
        </div>
        <div className="w-[90vw] max-w-[500px] grid grid-cols-2 grid-flow-row gap-4 items-center auto-cols-max">
          <Link
            href={`https://feedback.diecezko.cz/`}
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 text-base flex flex-row items-center justify-center"
          >
            <button
              className="flex flex-row items-center justify-center"
              title="Zpětná vazba"
            >
              <IconSpeakerphone className="inline" stroke={1.5} />{" "}
              <span className="ml-2 text-left">Zpětná vazba</span>
            </button>
          </Link>
          <Link
            href="https://diecezko.cz/galerie"
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center">
              <IconPhoto className="inline" stroke={1.5} />{" "}
              <span className="ml-2 text-left">
                Galerie
              </span>
            </button>
          </Link>
          <Link
            href="https://krizovka.diecezko.cz/"
            target="_blank"
            className="border col-span-2 border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center w-full">
              <IconCross stroke={1.5} className="inline h-6 w-6 my-1 mr-2" />{" "}
              <span className="ml-2 text-left">Hra: Křížová cesta</span>
            </button>
          </Link>
        </div>
      </div>
      <ContainerH2>O Diecézku</ContainerH2>
      <ContainerParagraph>
        Na přání papeže sv.
        <Nbsp />
        Jana Pavla II. a<Nbsp />
        jeho nástupců se mají biskupové{" "}
        <Strong>
          scházet každý rok s<Nbsp />
          mládeží
        </Strong>{" "}
        své diecéze.
      </ContainerParagraph>
      <ContainerParagraph>
        V<Nbsp />
        naší diecézi se mládež schází v<Nbsp />
        sobotu v<Nbsp />
        Hradci Králové. Nejprve proběhne společný režijní program a<Nbsp />
        po občerstvení mohou mladí navštívit různé workshopy a<Nbsp />
        přednášky. Dále je v<Nbsp />
        nabídce sport, hry nebo kavárna, ale také adorace či možnost přistoupit
        ke svátosti smíření.
      </ContainerParagraph>
      <ContainerParagraph>
        Nedílnou součástí tohoto setkání je slavnostní mše svatá v<Nbsp />
        katedrále sv.
        <Nbsp />
        Ducha s<Nbsp />
        otcem biskupem, která program celého dne završuje.
      </ContainerParagraph>
    </Container>
  );
}
