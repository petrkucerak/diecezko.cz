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
export default async function Vikariaty() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Vikariáty</ContainerTitle>
          <ContainerDescription>Seznam již brzy...</ContainerDescription>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
