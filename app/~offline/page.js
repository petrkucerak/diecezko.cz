import Cover from "../../components/cover";
import Header from "../../components/header";
import Switcher from "../../components/switcher";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <div className="w-full text-center bg-yellow-300 text-black py-1 font-titilliumWeb">
        <strong>(Offline)</strong> Pro plnou funkčnost se připoj
        k&nbsp;internetu...
      </div>
      <Cover>
        <Switcher />
      </Cover>
      <Footer />
    </main>
  );
}
