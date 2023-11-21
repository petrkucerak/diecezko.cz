import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerImage from "../../components/layouts/container-image";
export default function Instalace() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Instalace</ContainerTitle>
          <ContainerDescription></ContainerDescription>
          <ContainerParagraph>
            Aby webová aplikace fungovala i&nbsp;bez internetu, je ji třeba
            nainstalovat jako tzv. progresivní webovou aplikaci. Na počítačích
            a&nbsp;telefonech s&nbsp;operačním systémem Android se instalace
            spustí sama. Pokud ale máte iOS (<em>iPhone</em>), je třeba
            postupovat následujícím způsobem.
          </ContainerParagraph>
          <ContainerH2>Instalce na iOS</ContainerH2>
          <ContainerImage
            webpPath={`/assets/images/instalation.gif`}
            altText={`Video describes installation PWA on iOS.`}
          />
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
