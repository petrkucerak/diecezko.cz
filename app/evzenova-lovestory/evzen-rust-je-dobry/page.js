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
            #RustJeDobry
          </ContainerDescription>
          <ContainerH2>Příběh</ContainerH2>
          <ContainerParagraph>
            Dostali jsme se na zvláštní, opravdu zajímavé místo. Je tu spousta
            zeleně, klid, ticho a&nbsp;pohoda. To Vám připomnělo očka Holubice
            Evženie a&nbsp;vzbudilo to ve vás vášeň sepsat pro ni báseň. Protože
            vás inspirovalo okolí, v&nbsp;básni musíte pojmenovat 4 věci kolem
            sebe.
          </ContainerParagraph>
          <ContainerH2>Instrukce</ContainerH2>
          <ContainerParagraph>
            Po sepsání básně minimálně o&nbsp;4 verších se vydejte na tyto
            souřadnice.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
