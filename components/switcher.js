import { IconHeartHandshake, IconPencil } from "@tabler/icons";
import Link from "next/link";
export default function Switcher() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[90vw] max-w-[500px] flex items-center flex-row justify-between md:text-lg bg-[#222] rounded-full font-semibold my-4">
        <div className="cursor-pointer rounded-full md:p-3 md:pt-4 md:px-8 p-2 px-4 switcher-selected">
          Informace
        </div>
        <div className="cursor-pointer rounded-full md:p-3 md:pt-4 md:px-8 p-2 px-4">
          Program
        </div>
        <div className="cursor-pointer rounded-full md:p-3 md:pt-4 md:px-8 p-2 px-4 ">
          Společenství
        </div>
      </div>
      <div
        id="info"
        className="flex flex-col items-center justify-around min-h-[60vh]"
      >
        <div className="flex flex-col items-center w-full">
          <span className="text-base text-center">
            Filharmonie Hradec Králové
          </span>
          <span className="text-2xl text-center">
            25.&nbsp;11.&nbsp;2023 • 9.30
          </span>
        </div>
        <div className="flex flex-col items-center w-full">
          <h1 className="text-5xl md:text-7xl font-caveatBrush text-center">
            Diecézní setkání mládeže
          </h1>
          <p className="text-xl md:text-3xl mt-4 md:mt-6 text-center">
            Zastav se a naslouchej
          </p>
        </div>
        <div className="flex flex-row w-full items-center justify-around flex-wrap">
          <Link
            href="https://forms.gle/aMQor8ARxaULdD8t7"
            rel="external"
            target="_blank"
          >
            <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center">
              <IconPencil className="inline" />{" "}
              <span className="mt-1 ml-2">Přihláška</span>
            </button>
          </Link>
          <Link
            href="https://forms.gle/M4Pc27SiqY9Wa7u87"
            rel="external"
            target="_blank"
          >
            <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center">
              <IconHeartHandshake className="inline" />{" "}
              <span className="mt-1 ml-2">Dobrovolník</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
