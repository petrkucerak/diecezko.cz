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
            #SlapuJaSlapejTy
          </ContainerDescription>
          <ContainerH2>Příběh</ContainerH2>
          <ContainerParagraph>
            Dostali jsme se na zvláštní, opravdu zajímavé místo. Je tu zvláštní
            atmosféra středního města. To Vám připomnělo tvář Holuba Evžena
            a&nbsp;vzplanula ve vás touha napsat pro něho báseň. Protože vás
            inspirovalo okolí, v&nbsp;básni musíte pojmenovat 4 věci kolem sebe.
          </ContainerParagraph>
          <ContainerH2>Instrukce</ContainerH2>
          <ContainerParagraph>
            Po sepsání básně minimálně o&nbsp;4 verších se vydejte na tyto
            50.2085075N, 15.8326344E souřadnice.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
