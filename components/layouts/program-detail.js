import ParmIcon from "./parm-icon";
import Link from "next/link";
export default function ProgramDetail({ className, p }) {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center mb-4 ${className}`}
    >
      <div className="flex flex-row justify-center items-center">
        <span className="text-3xl tracking-wider">{p.time}</span>
        <div className="ml-4 flex flex-row justify-start items-center">
          {p.icons !== undefined
            ? p.icons.map((i) => {
                return <ParmIcon key={(i, p.name)} iconName={i} />;
              })
            : null}
        </div>
      </div>
      {p.place !== undefined ? (
        <Link
          href={`/mapa?x=${p.place.coords.x}&y=${p.place.coords.y}`}
          rel=""
          target="_self"
        >
          <span className="tracking-widest underline">{p.place.name}</span>
        </Link>
      ) : null}
    </div>
  );
}
