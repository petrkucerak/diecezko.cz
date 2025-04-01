"use client"
import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerImage from "../../components/layouts/container-image";
import PageMain from "../../components/layouts/page-main";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
import FaqLayout from "../../components/layouts/faq-layout";
import FaqBox from "../../components/layouts/faq-box";
export default async function GroupTransport() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>PředDiecézka</ContainerTitle>
          <ContainerDescription>
            Některé vikariáty pořádají menší setkání (tzv. vikariátko) den před Diecézkem a&nbsp;poté společně vyrážejí do Hradce Králové. Tomuto setkání říkáme PředDiecézko. Zde nalezneš přehled, který tě nasměruje na další informace.
          </ContainerDescription>
          <FaqLayout>
            <FaqBox question={`Humpolec`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/preddiecezka/preddiecezko-hum.jpg"
                webpPath="/assets/images/preddiecezka/preddiecezko-hum.webp"
                altText="Plakátek s informacemi o PředDiecézku."
                className="w-full my-4"
              />
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-hb-hum.jpg"
                webpPath="/assets/images/doprava/doprava-hb-hum.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Jičín`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/preddiecezko-jicin.jpg"
                webpPath="/assets/images/doprava/preddiecezko-jicin.webp"
                altText="Plakátek s informacemi o PředDiecézku."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Pardubice`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-pce.jpg"
                webpPath="/assets/images/doprava/doprava-pce.webp"
                altText="Plakátek s informacemi o PředDiecézku."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Rychnov nad Kněžnou`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-rk.jpg"
                webpPath="/assets/images/doprava/doprava-rk.webp"
                altText="Plakátek s informacemi o PředDiecézku."
                className="w-full my-4"
              />
            </FaqBox>
          </FaqLayout>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
