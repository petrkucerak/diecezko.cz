"use client";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Container from "../../../components/layouts/container";
import ContainerTitle from "../../../components/layouts/container-title";
import PageMain from "../../../components/layouts/page-main";
import ContainerDescription from "../../../components/layouts/container-description";
import ContainerH2 from "../../../components/layouts/container-h2";
import ContainerParagraph from "../../../components/layouts/container-paragraph";
import Button from "../../../components/layouts/button";
import { useState } from "react";
export default function Evzen() {
  const [napoveda, setNapoveda] = useState("");

  const napovedaFunction = () => {
    setNapoveda("S je |; P je .; L je -");
    console.log("NOW");
  };
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Evženova Lovestory</ContainerTitle>
          <ContainerDescription className={`mt-0 !text-2xl font-mono`}>
            #LoupyHoupyKroupy
          </ContainerDescription>
          <ContainerH2>Příběh</ContainerH2>
          „Houpy, loupy, kroupy. Tak se říká tomuto místu. Panuje o&nbsp;něm
          historka, že když tu pochodovaly davy lidí, most se vždy rozkymácel
          tak, že byl nezastavitelný,“ vypráví Starý Datel. Je už opravdu starý
          a&nbsp;je mu těžké porozumět. Často motá páté přes deváté. Nakonec
          z&nbsp;něho jméno vymámíme. Jmenuje se Evženie. Hmmm… „Náhoda, vždyť
          má téměř stejné jméno jako já,“ ušklíbne se Pan Evžen. Hmmm... Jak teď
          ale dále? Kam za ní? Starý Holub nám prozradí, že existuje určitý
          tajný nápis a&nbsp;že ten, když rozluštíme, ukáže nám, kam dále…
          <ContainerH2>Tajný nápis</ContainerH2>
          <ContainerParagraph className="break-all">
            PPPPSPPLSLPPSPSLPPPSLPSPPSSPLLPSPLSPPPLSPPSPLPPSLLLSLPS
          </ContainerParagraph>
          <div onClick={napovedaFunction}>
            <Button>Nápověda</Button>
          </div>
          <ContainerParagraph>{napoveda}</ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
