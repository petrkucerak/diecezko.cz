import Link from "next/link";
import Container from "../layouts/container";
import ParmIcon from "../layouts/parm-icon";
import { IconArrowRight, IconCalendarPlus, IconMap } from "@tabler/icons";
import program from "./program.json";
import IconCustomProScholy from "../images/pro-scholy";

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
              {p.place !== undefined && p.place.coords !== undefined ? (
                <Link
                  href={`/mapa?x=${p.place.coords.x}&y=${p.place.coords.y}`}
                  rel=""
                  target="_self"
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
                {/* <Link
                  target="_blank"
                  title={`Přidat ${p.name} do kalendáře`}
                  rel="document"
                  href={`/assets/events/${p.time.replace(":", "")}${
                    p.id
                  }/event.ics`}
                >
                  <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-3 cursor-pointer text-base flex flex-row items-center justify-center mb-2 mr-2">
                    <IconCalendarPlus className="inline" stroke={1.5} />
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
                {p.playlist !== undefined ? (
                  <Link
                    href={`/assets/playlist/${p.playlist}`}
                    target="_blank"
                    download={p.playlist}
                  >
                    <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-3 cursor-pointer text-base flex flex-row items-center justify-center mb-2 mr-2">
                      <IconCustomProScholy className="w-8" />
                      Otevřít playlist na mši
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
