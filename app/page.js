import Cover from "../components/cover";

export default function Home() {
  return (
    <main className="ease-in-out duration-300 font-josefinSans">
      <Cover>
        <div></div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-caveatBrush text-center">
            Diecézní setkání mládeže
          </h1>
          <p className="text-xl md:text-3xl mt-4 md:mt-6 text-center">
            Zastav se a naslouchej
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl text-center">
            25.&nbsp;11.&nbsp;2023 • 9.30
          </span>
          <span className="text-base text-center">
            Filharmonie Hradec Králové
          </span>
        </div>
      </Cover>
    </main>
  );
}
