"use client";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Container from "../../../components/layouts/container";
import ContainerTitle from "../../../components/layouts/container-title";
import PageMain from "../../../components/layouts/page-main";
import ContainerDescription from "../../../components/layouts/container-description";
import ContainerH2 from "../../../components/layouts/container-h2";
import ContainerParagraph from "../../../components/layouts/container-paragraph";
import { useState } from "react";
import Button from "../../../components/layouts/button";
export default function Evzen() {
  const [napoveda, setNapoveda] = useState("");

  const napovedaFunction = () => {
    setNapoveda("S je |; P je .; L je -");
    // console.log("NOW");
  };
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Evženova Lovestory</ContainerTitle>
          <ContainerDescription className={`mt-0 !text-2xl font-mono`}>
            #LekarUprostredMesta
          </ContainerDescription>
          <ContainerH2>Příběh</ContainerH2>
          „Zde jsem studoval a&nbsp;získával praxi. Takových lumpáren, co jsme
          tu vyváděli,“ říká známý Evženie o&nbsp;tomto místě. Konečně se
          dostala do známých krajin. Do hlavy se jí neustále vrací myšlenky na
          onoho Holuba a&nbsp;popisuje ho svému známému. Ten ji odpovídá, že
          jednoho takového zná. Evžen se jmenuje. Je velikým dobrodruhem,
          cestuje po světě a&nbsp;o&nbsp;svých dobrodružstvích rád vypráví
          druhým. Evženie zkouší, jestli ji její známý nepoví víc. Ten už jen
          prozradí, že slyšel o&nbsp;tom, že si Evžen vede deník, se spoustou
          kódových označení. Nu a&nbsp;že poslední záznam mu vůbec nedává smysl…
          <ContainerH2>Instrukce</ContainerH2>
          <ContainerParagraph className="break-all">
            LLPSLLLSLPLPSPLSPLPSLLLSPPPLSLLLSSPPPSLLLLSLLLSLPPSPPSPPPSLSPS
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
