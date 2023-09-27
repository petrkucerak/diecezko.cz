import Container from "../layouts/container";
import ContainerDescription from "../layouts/container-description";
import ContainerH2 from "../layouts/container-h2";
import ContainerParagraph from "../layouts/container-paragraph";
import {
  IconBrandFacebook,
  IconCalendar,
  IconHeartHandshake,
  IconPencil,
} from "@tabler/icons";
import Link from "next/link";
import ProfileCard from "../layouts/profile-card";

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
              <span className="ml-2 text-left">Dobrovolníci</span>
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
              <IconCalendar className="inline" />{" "}
              <span className="ml-2 text-left">Uložit event</span>
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
      <ContainerH2>Jádro diecézka</ContainerH2>
      <ContainerDescription>
        Diecézko je především o&nbsp;lidech, kteří se chtějí setkat
        a&nbsp;společně prožít jeden den s&nbsp;biskupem. Nemohlo by se
        uskutečnit bez dobrovolníků, kteří stojí za jeho přípravou.
      </ContainerDescription>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 items-center">
        {jadro.map((p) => {
          return (
            <ProfileCard
              key={p.name}
              name={p.name}
              description={p.description}
              jpgPath={p.jpgPath}
              webpPath={p.webpPath}
              pngPath={p.pngPath}
              altText={p.altText}
              className={p.className}
            />
          );
        })}
      </div>
    </Container>
  );
}

export const jadro = [
  {
    name: "Klárka Petrová",
    description: "Klárka je vedoucí DCM a&nbsp;má pod palcem celé diecézka.",
    pngPath: "/assets/images/jadro/petrova.png",
    jpgPath: "/assets/images/jadro/petrova.jpg",
    webpPath: "/assets/images/jadro/petrova.webp",
    altText: "Profilová fotka Klárky Petrové",
    className: "",
  },
  {
    name: "Jindra Řezníček",
    description:
      "Jindra je parťák Klárky, pracuje na DCM a&nbsp;spolu s&nbsp;ní drží oteže nad diecézkem.",
    pngPath: "/assets/images/jadro/jindra.png",
    jpgPath: "/assets/images/jadro/jindra.jpg",
    webpPath: "/assets/images/jadro/jindra.webp",
    altText: "Profilová fotka Jindry Řezníčka",
    className: "",
  },
  {
    name: "Sára Ondreková",
    altText: "Profilová fotka Sára Ondreková",
    className: "",
  },
  {
    name: "Klárka Kopecká",
    description:
      "Manažerka Klárka komunikuje s&nbsp;hosty a&nbsp;domlouvá s&nbsp;nimi detaily jejich přednášek.",
    pngPath: "/assets/images/jadro/klarka.png",
    jpgPath: "/assets/images/jadro/klarka.jpg",
    webpPath: "/assets/images/jadro/klarka.webp",
    altText: "Profilová fotka Klárky Kopecké",
    className: "",
  },

  {
    name: "Petr Kučera",
    description: "Petr má na svědomí vznik diecézko.cz a&nbsp;Evženovy cesty.",
    jpgPath: "/assets/images/jadro/kucera.jpg",
    webpPath: "/assets/images/jadro/kucera.webp",
    altText: "Profilová fotka Petr Kučery",
    className: "",
  },
  {
    name: "o. Tomáš Hoffmann",
    description: "Tomáš je duchovní opora celého přípravného týmu.",
    altText: "Profilová fotka o. Tomáš Hoffmann",
    jpgPath: "/assets/images/jadro/hoffmann.jpg",
    webpPath: "/assets/images/jadro/hoffmann.webp",
    className: "",
  },
  {
    name: "Denča Zavřelová",
    description:
      "Recepční skupinka pod vedením Denči vás při vstupu do FIlharmonie označí náramkem a také uloží vaše kabáty a bundy do šatny.",
    altText: "Profilová fotka Denča Zavřelová",
    className: "",
  },
  {
    name: "Amálka Výborná",
    description:
      "Amálka a její tým v oranžových vestičkách vám zajistí bezpečný doprovod až na přednášku.",
    altText: "Profilová fotka Amálka Výborná",
    className: "",
  },
  {
    name: "Vojta Vlach",
    description:
      "Vojta je ostřílený kapelník Vesmírné kapely, která doprovodí dopolední program ve Filharmonii.",
    altText: "Profilová fotka Vojta Vlach",
    className: "",
  },
  {
    name: "Lucka Pekárková",
    altText: "Profilová fotka Lucka Pekárková",
    className: "",
  },
  {
    name: "Anna Marie Maříková",
    description: "Tomáš je duchovní opora celého přípravného týmu.",
    altText: "Profilová fotka Anna Marie Maříková",
    className: "",
  },
  {
    name: "Jirka Jakoubek",
    description: "Tomáš je duchovní opora celého přípravného týmu.",
    altText: "Profilová fotka Jirka Jakoubek",
    className: "",
  },
  {
    name: "Honza Pecháček",
    description:
      "Bohoslovec Honza se spolu s Michalem starají o hladký průběh duchovního programu a mše svaté.",
    altText: "Profilová fotka Honza Pecháček",
    className: "",
  },
  {
    name: "Michal Šramko",
    description:
      "Bohoslovec Michal se spolu s Honzou starají o hladký průběh duchovního programu a mše svaté.",
    altText: "Profilová fotka Michal Šramko",
    className: "",
  },
  {
    name: "Kryštof Hamouz",
    description:
      "Kryštof se stará o krmení hladových krků přípravného týmu a zajišťuje kavárnu pro účastníky.",
    altText: "Profilová fotka Kryštof Hamouz",
    className: "",
  },
  {
    name: "Kuba Machek",
    description:
      "Kuba se svým týmem připravuje prostory pro odpolední přednášky.",
    altText: "Profilová fotka Kuba Machek",
    className: "",
  },
  {
    name: "Šája Pavlová",
    description:
      "Šája je vrchní manažerka úklidové čety a kromě každého odpadku vyhozeného do správného koše, ocení i každou pomocnou ruku.",
    altText: "Profilová fotka Šája Pavlová",
    className: "",
  },
  {
    name: "Honza Klinger",
    description: "Honza koordinuje sporty během odpoledního programu.",
    altText: "Profilová fotka Honza Klinger",
    jpgPath: "/assets/images/jadro/klinger.jpg",
    webpPath: "/assets/images/jadro/klinger.webp",
    className: "",
  },
];
