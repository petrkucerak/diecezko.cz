"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PageMain from "../../components/layouts/page-main";
// import Map from "../../components/map";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../components/map"), {
  loading: () => <p>Načítání...</p>,
  ssr: false,
});
export default function Mapa() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Map />
      </PageMain>
      <Footer />
    </main>
  );
}
