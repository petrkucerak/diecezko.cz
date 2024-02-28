import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerImage from "../../components/layouts/container-image";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerUl from "../../components/layouts/container-ul";
import ContainerLi from "../../components/layouts/container-li";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSpotify,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
export default async function Kachnoni() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Kachnoni</ContainerTitle>
          <ContainerDescription>
            Máme rádi hudbu, Boha a&nbsp;laciný humor. Rádi zkoušíme různé
            novoty, naše hraní je buď boží nářez nebo Boží nářek. Hrajeme každou
            druhou neděli v&nbsp;měsíci na mši u&nbsp;nás v&nbsp;Chocni. Na
            diecézku se těšíme při mši svaté v&nbsp;katedrále :D
          </ContainerDescription>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/kachoni.jpg"
            webpPath="/assets/images/spolecenstvi/kachoni.webp"
            altText="Choceňská schola Kachoni"
            className="w-full my-2"
          />
          <ContainerParagraph>
            Schola mladých z&nbsp;Chocně doprovodí závěrečnou mši svatou
            v&nbsp;katedrále sv.&nbsp;Ducha na Velkém náměstí v&nbsp;Hradci
            Králové.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
