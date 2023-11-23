import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import ContainerDescription from "../../components/layouts/container-description";
import ProgramDetail from "../../components/layouts/program-detail";
import program from "../../components/switcher/program.json";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerParagraph from "../../components/layouts/container-paragraph";
export default function Evzen() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Evženova Lovestory</ContainerTitle>
          <ProgramDetail p={program[6]} className={``} />
          <ContainerDescription>
            Evženova Lovestory je krátká hra po městě. Je určena pro skupiny,
            které se chtějí projít, zasoutěžit s&nbsp;ostatními
            a&nbsp;spolutvořit Evženův příběh. Začíná mezi 14:00 a&nbsp;14:15 na
            BiGy tím, že si přečtete instrukce, které jsou na nástěnce
            u&nbsp;schodů a&nbsp;které vám poví, kam dále. Hru je potřeba
            dokončit do 15:55, poté vás již nebude čekat nikdo na cílové
            rovince. Každý tým musí mít alespoň jednoho člověka, který má mobil s&nbsp;daty.
          </ContainerDescription>
          <ContainerH2>Úvod do příběhu</ContainerH2>
          <ContainerParagraph>
            Bylo nebylo, žil byl jednou pan Holub. Zajisté ho všichni znáte –
            říká se mu Evžen. Pan Holub k&nbsp;nám byl seslán při vanutí Ducha.
            Pravděpodobně holubice nebyla toho času k&nbsp;dispozici. Holub si
            lítal po světe, dělal lidem radost. Občas tím, že jim zobal
            z&nbsp;ruky, občas drobným překvapením na kabátu či hlavě. Časem mu
            začalo být na světě samotnému smutno. Chyběl mu tu nějaký parťák,
            s&nbsp;kterým by mohl sdílet svá dobrodružství...
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
