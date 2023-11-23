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
            #LekarUprostredMesta
          </ContainerDescription>
          <ContainerH2>Příběh</ContainerH2>
          TODO
          <ContainerH2>Instrukce</ContainerH2>
          <ContainerParagraph>
            Vydejte se k&nbsp;UHK na přesnou souřadnici TODO. Tam se dozvíte
            další instrukce.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
