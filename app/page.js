import Cover from "../components/cover";
import Header from "../components/header";
import Switcher from "../components/switcher";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <Cover>
        <Switcher />
      </Cover>
      <div className="flex flex-col items-center">
        <p className="text-xl my-12">Více informací již brzy...</p>
      </div>
      <Footer />
    </main>
  );
}
