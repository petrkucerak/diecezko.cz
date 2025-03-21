"use client";
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
          <ContainerTitle>Společná doprava</ContainerTitle>
          <ContainerDescription>
            Některé vikariáty zajišťují nebo plánují společnou dopravu. Zde
            naleznete přehled, který vás nasměruje na další informace.
          </ContainerDescription>
          <FaqLayout>
            {/* <FaqBox question={`Humpolec, Havlíčkův Brod, Chotěboř`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-humpolec.jpg"
                webpPath="/assets/images/doprava/doprava-humpolec.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox> */}
            <FaqBox question={`Pardubice`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-pce.jpg"
                webpPath="/assets/images/doprava/doprava-pce.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Rychnov nad Kněžnou`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-rk.jpg"
                webpPath="/assets/images/doprava/doprava-rk.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Ústí nad Orlicí`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-usti.jpg"
                webpPath="/assets/images/doprava/doprava-usti.webp"
                altText="Plakátek s informacemi o společné dopravě."
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
