import Link from "next/link";
import Cover from "../components/cover";

export default function Home() {
  return (
    <main className="ease-in-out duration-300 font-josefinSans">
      <Cover>
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
        <div className="flex flex-row items-center justify-around flex-wrap">
          <Link
            href="https://forms.gle/aMQor8ARxaULdD8t7"
            rel="external"
            target="_blank"
          >
            <button className="uppercase m-2 p-3 dark:bg-white dark:text-black text-xs md:text-base border-black border-2 font-bold rounded hover:scale-105 ease-in-out duration-300">
              přihláška
            </button>
          </Link>
          <Link
            href="https://forms.gle/M4Pc27SiqY9Wa7u87"
            rel="external"
            target="_blank"
          >
            <button className="uppercase m-2 p-3 dark:bg-white dark:text-black text-xs md:text-base border-black border-2 font-bold rounded hover:scale-105 ease-in-out duration-300">
              dobrovolník
            </button>
          </Link>
        </div>
      </Cover>
      <div className="flex flex-col items-center">
        <p className="text-xl my-12">Více informací již brzy...</p>
      </div>
    </main>
  );
}
