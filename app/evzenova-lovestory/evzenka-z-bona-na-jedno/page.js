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
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("hidden");
  const validate = () => {
    value === "inverze" ? setStatus("") : setStatus("hidden");
  };
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Evženova Lovestory</ContainerTitle>
          <ContainerDescription className={`mt-0 !text-2xl font-mono`}>
            #ZBonaNaJedno
          </ContainerDescription>
          <ContainerH2>Příběh</ContainerH2>
          <ContainerParagraph>
            V&nbsp;křídlech cítíte, že se již blížíte k&nbsp;Holubovi Evženovi,
            k&nbsp;tomu pro něhož vaše srdce vzplanulo. Na mysl vám ale začnou
            přicházet temné myšlenky. Co když se na Vás ani nepodívá, co když si
            o&nbsp;vás pomyslí něco špatného, co když ji s&nbsp;vámi nebude
            dobře? Co když nejste dost krásná? Víte, že to je jen o&nbsp;hlavě
            a&nbsp;že to musíte překonat. Abyste si zvedli sebevědomí, chcete si
            ověřit, že máte dobrou pamět. Vzpomínáte, že dopoledne na programu
            Marty mluvil o&nbsp;jevu, kdy je na horách hezky
            a&nbsp;v&nbsp;nížině škaredo. Jak se jmenuje? Pokud se strefíte,
            pozvednte si sebevědomí a&nbsp;zjistíte kam a&nbsp;jak za Evženií.
          </ContainerParagraph>
          <input
            type="text"
            id="input"
            placeholder="Vložte odpověď malým písmem"
            className="p-2 px-3 rounded-xl w-full"
            onChange={(e) => setValue(e.target.value)}
          />
          <div onClick={validate} className="mt-2">
            <Button>Validovat</Button>
          </div>
          <div className={`${status}`}>
            <ContainerH2>Instrukce</ContainerH2>
            <ContainerParagraph>
              Pospěšte, natáhněte krok a&nbsp;co nejrychleji bez ohlížení
              a&nbsp;pochybností se dostaňte na místo (50.2080131N,
              15.8292764E), kde na vás snad již bude čekat Evženie.
            </ContainerParagraph>
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
