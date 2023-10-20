import Link from "next/link";
import Container from "../layouts/container";
import ContainerTitle from "../layouts/container-title";
import ParmIcon from "../layouts/parm-icon";
import {
  IconArrowRight,
  IconCalendarPlus,
  IconCompass,
  IconInfoCircle,
  IconSearch,
} from "@tabler/icons";

export default function Program({ id, className }) {
  return (
    <Container className={className} id={id}>
      <ContainerTitle className={`text-center`}>
        Program bude již brzy specifikován
      </ContainerTitle>
      <ul>
        {program.map((p) => {
          return (
            <li
              key={(p.name, p.time)}
              className="border-[#444] border rounded-xl p-4 sm:p-6 mb-6 transition h-full backdrop-blur-md"
            >
              <div className="flex flex-row justify-start items-center">
                <span className="text-3xl tracking-wider">{p.time}</span>
                <div className="ml-4 flex flex-row justify-start items-center">
                  {p.icons !== undefined
                    ? p.icons.map((i) => {
                        return <ParmIcon key={(i, p.name)} iconName={i} />;
                      })
                    : null}
                </div>
              </div>
              <h2 className="font-semibold text-2xl m-0">{p.name}</h2>
              <Link
                href={`${p.place.link}`}
                rel="external noopener nofollow"
                target="_blank"
              >
                <span className="tracking-widest underline">
                  {p.place.name}
                </span>
              </Link>
              <p
                className="text-lg my-2 mb-4 leading-tight"
                dangerouslySetInnerHTML={{ __html: p.description }}
              />
              <div className="flex flex-row flex-wrap items-center justify-start mt-2">
                <Link href={p.link}>
                  <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-3 cursor-pointer text-base flex flex-row items-center justify-center mb-2 mr-2">
                    <IconCalendarPlus className="inline mr-1" stroke={1.5} />
                    Uložit do kalednáře
                  </button>
                </Link>
                {/* <Link
                  href={`geo:${p.place.coords.x},${p.place.coords.y}`}
                  target="_blank"
                >
                  <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-3 cursor-pointer text-base flex flex-row items-center justify-center mb-2 mr-2">
                    <IconCompass className="inline mr-1" stroke={1.5} />
                    Navigovat na místo
                  </button>
                </Link> */}
                <Link href={p.link}>
                  <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-3 cursor-pointer text-base flex flex-row items-center justify-center mb-2 mr-2">
                    Více informací{" "}
                    <IconArrowRight className="inline ml-1 " stroke={1.5} />
                  </button>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export const program = [
  {
    name: "Program ve Filharmonii",
    time: "9:30",
    description:
      "Doba rozeznají půl přesněji ve frekvence, posety uvedl u&nbsp;mixu, u&nbsp;něm tu se, nic mé rok dispozici důležitý vím. Nálada dělá sen může též sezona dob doprovází, odkazem mužskou vele vrátí z původu, uchu ty hmotné jej zdi.",
    icons: ["theater", "music", "pray", "person", "happy"],
    link: "/program/filharmonie",
    place: {
      name: "Filhramonie Hradec Králové",
      coords: { x: "50.2138117", y: "15.8291964" },
      link: "https://mapy.cz/s/dedasenuge",
    },
  },
  {
    name: "Program ve Filharmonii",
    time: "9:30",
    description:
      "Doba rozeznají půl přesněji ve frekvence, posety uvedl u&nbsp;mixu, u&nbsp;něm tu se, nic mé rok dispozici důležitý vím. Nálada dělá sen může též sezona dob doprovází, odkazem mužskou vele vrátí z původu, uchu ty hmotné jej zdi.",
    icons: ["theater"],
    link: "/program/filharmonie",
    place: {
      name: "Filhramonie Hradec Králové",
      coords: { x: "50.2138117", y: "15.8291964" },
    },
  },
  {
    name: "Program ve Filharmonii",
    time: "9:30",
    description:
      "Doba rozeznají půl přesněji ve frekvence, posety uvedl u&nbsp;mixu, u&nbsp;něm tu se, nic mé rok dispozici důležitý vím. Nálada dělá sen může též sezona dob doprovází, odkazem mužskou vele vrátí z původu, uchu ty hmotné jej zdi.",
    icons: ["theater"],
    link: "/program/filharmonie",
    place: {
      name: "Filhramonie Hradec Králové",
      coords: { x: "50.2138117", y: "15.8291964" },
    },
  },
  {
    name: "Program ve Filharmonii",
    time: "9:30",
    description:
      "Doba rozeznají půl přesněji ve frekvence, posety uvedl u&nbsp;mixu, u&nbsp;něm tu se, nic mé rok dispozici důležitý vím. Nálada dělá sen může též sezona dob doprovází, odkazem mužskou vele vrátí z původu, uchu ty hmotné jej zdi.",
    icons: ["theater"],
    link: "/program/filharmonie",
    place: {
      name: "Filhramonie Hradec Králové",
      coords: { x: "50.2138117", y: "15.8291964" },
    },
  },
  {
    name: "Program ve Filharmonii",
    time: "9:30",
    description:
      "Doba rozeznají půl přesněji ve frekvence, posety uvedl u&nbsp;mixu, u&nbsp;něm tu se, nic mé rok dispozici důležitý vím. Nálada dělá sen může též sezona dob doprovází, odkazem mužskou vele vrátí z původu, uchu ty hmotné jej zdi.",
    icons: ["theater"],
    link: "/program/filharmonie",
    place: {
      name: "Filhramonie Hradec Králové",
      coords: { x: "50.2138117", y: "15.8291964" },
    },
  },
];
