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
      <p>Add some text</p>
      <Footer />
    </main>
  );
}
