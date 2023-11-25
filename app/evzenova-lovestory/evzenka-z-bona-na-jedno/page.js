import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Container from "../../../components/layouts/container";
import ContainerTitle from "../../../components/layouts/container-title";
import PageMain from "../../../components/layouts/page-main";
import ContainerDescription from "../../../components/layouts/container-description";
import ContainerH2 from "../../../components/layouts/container-h2";
import ContainerParagraph from "../../../components/layouts/container-paragraph";
export default function Evzen() {
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
            a&nbsp;že to musíte překonat.
          </ContainerParagraph>
          <ContainerH2>Instrukce</ContainerH2>
          <ContainerParagraph>
            Pospěšte, natáhněte krok a&nbsp;co nejrychleji bez ohlížení
            a&nbsp;pochybností se dostaňte na místo (50.2080458N, 15.8292844E),
            kde na vás snad již bude čekat Evžen.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
