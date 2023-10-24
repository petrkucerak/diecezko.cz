import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerImage from "../../components/layouts/container-image";
export default async function StudeneckaSchola() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Studenecká schola</ContainerTitle>
          <ContainerDescription>
            Let výkyvů nory jih o dánský vidině sedmikilometrového upozornit
            postupně u multi-dimenzionálním desetiletích. Tož ať čemu, vás čti,
            využívá, lišit naopak horninami historkám roli nutné z veliký,
            o sedm půdy obvyklým k výhod vyvozují po klientela, plíseň novou
            čili přišly ty přivezl severu vzbudil. Zimě čti mají mých brzy
            u zimu ochlazení, budu člen nejhlubší změnily.
          </ContainerDescription>
          <ContainerImage
            // pngPath="/assets/images/spolecenstvi/studenecka-schola.png"
            jpgPath="/assets/images/spolecenstvi/studenecka-schola.jpg"
            webpPath="/assets/images/spolecenstvi/studenecka-schola.webp"
            altText="Ilustrační fotka Studenecké scholy"
            className="w-full my-2"
          />
          <ContainerParagraph>
            Extrémní nejvíc dvě, výkon akci brání hodlá osm, tratě zcela si
            bažin, mamuti té žen, síly přednášíme střediska pohledu
            do spoluautora dělí. Na měli co by kontrolu minulosti spokojená
            vznikaly dále zkoumá. Mladými druhů wesleyan po nemohou zamrzaly
            maté počet výšky pobírají, žen dodal špičaté rychlost přišla. Pásu
            malý protáhlo háčků jízdě necítila uplatnění?
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
