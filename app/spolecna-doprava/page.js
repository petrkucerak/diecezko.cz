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
            naleznete přehled, který vás nasměruje na základě vašeho vikariátu
            na více informací.
          </ContainerDescription>
          <FaqLayout>
            <FaqBox question={`Humpolec, Havlíčkův Brod, Chotěboř`} icon={``}>
              Vikariátní zástupci vypravují autobus, který bude zastavovat
              v&nbsp;
              <strong>Humpolci</strong>, v&nbsp;
              <strong>Havlíčkově Brodě</strong> a&nbsp;v&nbsp;
              <strong>Chotěboři</strong>. Pokud máš zájem se také svézt,
              kontaktuj Aničku Daňkovou 📞&nbsp;
              <Link
                href={`tel:+420603833605`}
                className="tracking-tight underline"
              >
                603&nbsp;833&nbsp;605
              </Link>
              , 📨&nbsp;
              <Link
                href={`mailto:annadankova5@seznam.cz`}
                className="tracking-tigh underline"
              >
                annadankova5@seznam.cz
              </Link>
              .
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-humpolec.jpg"
                webpPath="/assets/images/doprava/doprava-humpolec.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Pardubice`} icon={``}>
              <ContainerImage
              jpgPath="/assets/images/doprava/doprava-pce.jpg"
              webpPath="/assets/images/doprava/doprava-pce.webp"
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
