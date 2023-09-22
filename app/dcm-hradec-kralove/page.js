import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerImage from "../../components/layouts/container-image";
export default async function DCM() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>DCM Hradec Králové</ContainerTitle>
          <ContainerDescription>
            Jsme zde pro všechny mladé lidi. Doprovázíme je na cestě jejich
            růstu a dozrávání, hledání a nacházení Boha, aby skrze konkrétní
            život z víry byli svědectvím dobra a nadějí pro tento svět.
          </ContainerDescription>
          <ContainerImage
            pngPath="/assets/images/spolecenstvi/diecezni-centrum-pro-mladez.png"
            jpgPaht="/assets/images/spolecenstvi/diecezni-centrum-pro-mladez.jpg"
            webpPath="/assets/images/spolecenstvi/diecezni-centrum-pro-mladez.webp"
            altText="Tým DCM"
            className="w-full"
          />
          <ContainerParagraph>
            Snažíme se posílit duchovní život mladých lidí, vychovávat ke
            svědectví, ke službě, k zodpovědnosti, k pravdě a k radosti být
            mladým křesťanem. Pořádáme různé akce zaměřené na rozvoj osobnosti v
            oblastech náboženství, mezilidských vztahů, vnímání krásy a umění.
            To vše skrze život ve společenství, modlitby, diskuse, pomocí her,
            přednášek a v neposlední řadě také práce.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
