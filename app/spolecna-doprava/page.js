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
            <FaqBox question={`Havlíčkův Brod, Humpolec`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-hb-hum.jpg"
                webpPath="/assets/images/doprava/doprava-hb-hum.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Chrudim`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-chrudim.jpg"
                webpPath="/assets/images/doprava/doprava-chrudim.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Jičín`} icon={``}>
              Společná doprava s&nbsp;vikariátem Jičín je vlakem Os&nbsp;5503.<br />
              7:20 Libuň<br />
              7:35 Jičín<br />
              8:01 Ostroměř<br />
              8:12 Hořice v&nbsp;Podkrkonoší
              <ContainerImage
                jpgPath="/assets/images/preddiecezka/preddiecezko-jicin.jpg"
                webpPath="/assets/images/preddiecezka/preddiecezko-jicin.webp"
                altText="Plakátek s informacemi o PředDiecézku."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Litomyšl`} icon={``}>
              Společná doprava s&nbsp;vikariátem Litomyšl je objednaným 
              autobusem. Přihlášení a&nbsp;další informace o&nbsp;společné 
              dopravě jsou k&nbsp;dispozici na{" "}
              <Link
                className="underline"
                href={`https://forms.gle/sAPYnuNuS1uZUXvU6`}
                target="_blank"
                rel="external noopener nofollow"
              >
                odkaze zde
              </Link>
              .
              <br />
              <br />              
              7:25 Polička, aut. st., výstupní zastávka (před vlak. nádr.)<br />
              7:35 Sebranice, ob. ú.<br />
              7:40 Horní Újezd, Černý mlýn<br />
              7:45 Dolní Újezd, pošta<br />
              7:55 Litomyšl, aut. nádr.<br />
              8:05 Cerekvice n. L., rozc.0.1.<br />
            </FaqBox>
            <FaqBox question={`Náchod`} icon={``}>
              Společná doprava s&nbsp;vikariátem Náchod je vlaky:<br />
              Sp&nbsp;1855/1385 s&nbsp;odjezdem z&nbsp;Náchoda v&nbsp;8:03;<br />
              Sp&nbsp;1385 s&nbsp;odjezdem z&nbsp;Červeného Kostelce v&nbsp;8:10;<br />
              autobusem z&nbsp;Nového Města nad Metují, Na&nbsp;Rychtě 
              s&nbsp;odjezdem v&nbsp;7:35.<br />
              <br />
              Pro více informací kontaktujte:<br /> 
              o.&nbsp;Honzu Pecháčka - 773&nbsp;244&nbsp;919,<br /> 
              Michala Matysku - 776&nbsp;132&nbsp;288.
            </FaqBox>
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
