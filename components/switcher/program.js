import Link from "next/link";
import Container from "../layouts/container";
import ParmIcon from "../layouts/parm-icon";
import { IconArrowRight, IconCalendarPlus } from "@tabler/icons";

export default function Program({ id, className }) {
  return (
    <Container className={className} id={id}>
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
              {p.place !== undefined ? (
                <Link
                  href={`${p.place.link}`}
                  rel="external noopener nofollow"
                  target="_blank"
                >
                  <span className="tracking-widest underline">
                    {p.place.name}
                  </span>
                </Link>
              ) : null}
              <p
                className="text-lg my-2 mb-4 leading-tight"
                dangerouslySetInnerHTML={{ __html: p.description }}
              />
              <div className="flex flex-row flex-wrap items-center justify-start mt-2">
                <Link href={`/`}>
                  <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-3 cursor-pointer text-base flex flex-row items-center justify-center mb-2 mr-2">
                    <IconCalendarPlus className="inline" stroke={1.5} />
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
                {p.link !== undefined ? (
                  <Link href={p.link}>
                    <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-3 cursor-pointer text-base flex flex-row items-center justify-center mb-2 mr-2">
                      Více informací{" "}
                      <IconArrowRight className="inline ml-1 " stroke={1.5} />
                    </button>
                  </Link>
                ) : null}
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
    name: "Příjezd a registrace",
    time: "9:00",
    description:
      "Při příjezdu na setkání prosím navštivte registraci, kterou najdete ve vstupu do Filharmonie. Dostanete zde náremek v barvě svého vikariátu. Už tušíte jaké to bude?",
    icons: ["registration"],
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
      "Dopolední program prožijeme společně v budově Filharmonie. Můžete se těšit na režijní scénky, svědectví, hudební doprovod v podání VeKy a mnoho dalšího.",
    icons: ["theater", "music", "pray", "person"],
    link: "/program-ve-filharmonii",
    place: {
      name: "Filhramonie Hradec Králové",
      coords: { x: "50.2138117", y: "15.8291964" },
      link: "https://mapy.cz/s/dedasenuge",
    },
  },
  {
    name: "Obědová pauza",
    time: "12:00",
    description:
      "Při odchodu z dopoledního programu si kromě výběru workshopu nebo přednášky nezapomeňte vyzvednout i bagetu s pitíčkem. Bagety pro nás připravilo BISTRO u dvou přátel. Dobrou chuť!",
    link: "/bistro-u-dvou-pratel",
    icons: ["food"],
  },
  {
    name: "Přednášky, workshopy",
    time: "12:30",
    description:
      "Odpoledne si můžete vybrat z široké nabídky přednášek, několika workshopů nebo si jít zasportovat.",
    icons: ["person", "workshop", "sport"],
    link: "/prednasky-workshopy",
  },
  {
    name: "Odpolední program",
    time: "14:00",
    description:
      "V&nbsp;druhé části odpoledne můžete pokračovat ve sportování, navštívit kavárnu na BiGy nebo si zajít na duchovní rozhovor či svátost smíření.",
    icons: ["pray", "cafe", "sport"],
    link: "/odpoledni-program",
  },
  {
    name: "Mše svatá",
    time: "15:00",
    description:
      "Celý den zakončíme mší svatou s otcem biskupem v katedrále svatého Ducha. Mši svatou hudebně doprovodí Studenecká kapela.",
    icons: ["music", "pray"],
    link: "/mse-svata",
    place: {
      name: "Katedrála Svatého Ducha",
      coords: { x: "50.2087878", y: "15.8310917" },
      link: "https://mapy.cz/s/bezegujuje",
    },
  },
];
