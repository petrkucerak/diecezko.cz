import Cover from "../components/cover";

export default function Home() {
  return (
    <main className="ease-in-out duration-300 font-josefinSans">
      <Cover>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-caveatBrush">
            Diecézní setkání mládeže
          </h1>
          <p className="text-2xl mt-6">Zastav se a naslouchej</p>
        </div>
      </Cover>
    </main>
  );
}
