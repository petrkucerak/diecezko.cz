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
            #KamPoprve
          </ContainerDescription>
          <ContainerH2>Příběh</ContainerH2>
          <ContainerParagraph>
            Zdravím vás týme. Rozhodli jste se, že se mnou prožijete
            dobrodružství. Nebude to jednoduché, ale věřím, že když budeme
            spolupracovat, máme šanci vše zdárně dokončit. Nezapomeňte, že celou
            cestu musím úspěšně dokončit do 14:55.
          </ContainerParagraph>
          <ContainerParagraph>
            Minulý týden jsem si zobala na náměstí. Tradičně v&nbsp;obležení
            mých bratrů a&nbsp;sester, kteří jsou pouze tupec vedle tupce. Myslí
            neustále jen na jídlo, zob a&nbsp;drob. A&nbsp;to je taková nuda!
            Tentokráte se ale stalo něco zvláštního. Přiletěl jeden holub,
            nevím, jak se jmenuje. Na první pohled stejný, jako všichni ostatní.
            Když jsem mu ale pohlédla do tváře, zatrnulo ve mně. Nenechala jsem
            na sobě nic znát. Jeho oči na mě jeho zapůsobili jako magnet. Ta
            zvídavost a&nbsp;touha vědění v&nbsp;nich byla neúprosná, že jsem se
            radě zvedla a&nbsp;odlétla pryč. Po cestě mě ale přepadli silné
            severní větry, které mě zanesli do oblastí, v&nbsp;kterých se zas
            tak nevyznám. Potřebuji se vydat na nějaké známé místo…
          </ContainerParagraph>
          <ContainerH2>Instrukce</ContainerH2>
          <ContainerParagraph>
            Vydejte se na známé místo Evženie, které najdete: TODO.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
