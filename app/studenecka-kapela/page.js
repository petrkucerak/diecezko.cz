import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerImage from "../../components/layouts/container-image";
export default async function StudeneckaKapela() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Studenecká kapela</ContainerTitle>
          <ContainerDescription>
            Jsme mladí zapálení muzikanti ze Studence, kteří již přes rok
            doprovázejí páteční (občas i&nbsp;nedělní) mše našeho nejlepšího
            kněze, Jirky Jakoubka.
          </ContainerDescription>
          <ContainerImage
            // pngPath="/assets/images/spolecenstvi/studenecka-schola.png"
            jpgPath="/assets/images/spolecenstvi/studenecka-schola.jpg"
            webpPath="/assets/images/spolecenstvi/studenecka-schola.webp"
            altText="Ilustrační fotka Studenecké kapely"
            className="w-full my-2"
          />
          <ContainerParagraph>
            Jirka je pro naši farnost velikou chloubou Díky jeho umění předávat
            radost z&nbsp;Boha jsme začali toužit po společenství. Skrze hudbu
            to bylo pro naši kapelnici Lucku nejjednodušší. Časem se o&nbsp;nás
            dozvěděli nadaní hudebníci i&nbsp;z&nbsp;jiných farností a&nbsp;dnes
            dojíždějí z&nbsp;různých koutů Podkrkonoší až k&nbsp;nám, do
            Studence. Hudbu milujeme, s&nbsp;Bohem se spojujeme
            a&nbsp;v&nbsp;Hradci vám zahrajeme:)
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
