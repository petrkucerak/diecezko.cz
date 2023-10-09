import Container from "../layouts/container";
import ContainerH2 from "../layouts/container-h2";
import ContainerParagraph from "../layouts/container-paragraph";
import {
  IconApps,
  IconBrandFacebook,
  IconHeartHandshake,
  IconPencil,
} from "@tabler/icons";
import Link from "next/link";

export default function DiecezkoInfo({ id, className }) {
  return (
    <Container id={id} className={className}>
      <div className="min-h-[60vh] flex flex-col items-center justify-around">
        <div className="flex flex-col items-center w-full">
          <span className="text-base text-center">
            Filharmonie Hradec Králové
          </span>
          <span className="text-2xl text-center">
            25.&nbsp;11.&nbsp;2023 • 9.30
          </span>
        </div>
        <div className="flex flex-col items-center w-[90vw]">
          <h1 className="text-5xl md:text-7xl font-caveatBrush text-center">
            Diecézní setkání mládeže
          </h1>
          <p className="text-xl md:text-3xl mt-4 md:mt-6 text-center">
            Zastav se a naslouchej
          </p>
        </div>
        <div className="w-[90vw] max-w-[500px] grid grid-cols-2 grid-flow-row gap-4 items-center auto-cols-max">
          <Link
            href="https://forms.gle/aMQor8ARxaULdD8t7"
            rel="external"
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center">
              <IconPencil className="inline" />{" "}
              <span className="ml-2 text-left">Přihláška</span>
            </button>
          </Link>
          <Link
            href="https://forms.gle/M4Pc27SiqY9Wa7u87"
            rel="external"
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center">
              <IconHeartHandshake className="inline" />{" "}
              <span className="ml-2 text-left">Chci pomoct</span>
            </button>
          </Link>
          <Link
            href="https://www.facebook.com/events/520344309938232"
            rel="external"
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center">
              <IconBrandFacebook className="inline" />{" "}
              <span className="ml-2 text-left">Událost</span>
            </button>
          </Link>
          <Link
            href="/assets/events/dcmhk23.ics"
            rel="document"
            download="dcmhk23"
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center">
              <IconApps className="inline" />{" "}
              <span className="ml-2 text-left">Nainstalovat</span>
            </button>
          </Link>
        </div>
      </div>
      <ContainerH2>O diecézku</ContainerH2>
      <ContainerParagraph>
        Na přání papeže sv. Jana Pavla II. a jeho nástupců se mají biskupové
        scházet každý rok s mládeží své diecéze. Původně byla pro tuto akci
        vybrána Květná neděle, ale od roku 2021 papež František ustanovil za
        tento den slavnost Ježíše Krista Krále.
      </ContainerParagraph>
      <ContainerParagraph>
        V naší diecézi se mládež schází v sobotu před touto slavností v Hradci
        Králové. Nejprve proběhne společný režijní program a po občerstvení
        mohou mladí navštívit různé workshopy a přednášky. Dále je v nabídce
        sport, hry, kavárna, ale také adorace či možnost přistoupit ke svátosti
        smíření. Poté se mládež opět setká a společnou modlitbou (křížová cesta,
        růženec,...) projdou město.
      </ContainerParagraph>
      <ContainerParagraph>
        Nedílnou součástí tohoto setkání je slavnostní mše svatá v katedrále sv.
        Ducha s otcem biskupem, která program celého dne završuje.
      </ContainerParagraph>
      <ContainerParagraph>
        Akce se pravidelně účastní kolem 700 mladých lidí z celé diecéze a
        minimálně 100 ochotných dobrovolníků.
      </ContainerParagraph>
    </Container>
  );
}
