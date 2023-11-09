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
  IconWorld,
} from "@tabler/icons";
import Nbsp from "../../components/format/nbsp";
import SwappingGallery from "../../components/swapping-gallery";
export default async function BistroUDvouPratel() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>BISTRO u dvou přátel</ContainerTitle>
          <ContainerDescription>
            Bagety pro vás připravilo BISTRO u<Nbsp />
            dvou přátel společnosti SKOK do života,
            <Nbsp />
            o.p.s. Bistro zaměstnává lidi se specifickými potřebami
            (intelektovým znevýhodněním a<Nbsp />
            duševním onemocněním).
          </ContainerDescription>
          <SwappingGallery images={gallery} />
          <ContainerH2>Poslání SKOKu do života</ContainerH2>
          <ContainerParagraph>
            Sociální podnik SKOK do života, o.p.s. provozuje na území Hradce
            Králové a&nbsp;okolí profesionální sociální služby, úklidové služby
            a&nbsp;bistro. Zaměstnává dospělé lidi s intelektovým znevýhodněním,
            kterým zároveň poskytuje sociální služby. Od tréninku dovedností po
            podporované a&nbsp;chráněné bydlení tak, aby mohli dlouhodobě
            pracovat, bydlet a&nbsp;užívat si života, v&nbsp;místě a&nbsp;městě,
            které mají rádi. Naše služby obohacují a&nbsp;usnadňují život
            „klientům i&nbsp;klientům.“ Všichni bez rozdílu usilujeme
            o&nbsp;spokojenost našich zákazníků.
          </ContainerParagraph>
          <ContainerParagraph>
            Přijďte k&nbsp;nám na oběd, svačinu nebo na výbornou kávu
            a&nbsp;něco sladkého!
          </ContainerParagraph>
          <ContainerH2>Kontakt</ContainerH2>
          <ContainerUl className={`!list-none !pl-0 mb-6`}>
            <ContainerLi>
              BISTRO u dvou přátel,
              <br />
              Pivovarské náměstí,
              <br />
              Hradec Králové
            </ContainerLi>
            <ContainerLi className="mt-2">
              <Link
                href={`https://www.instagram.com/bistro_udvoupratel/`}
                target="_blank"
                rel="external"
                title="Instagram"
              >
                <IconBrandInstagram className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.skokdozivota.cz/bistro/`}
                target="_blank"
                rel="external"
                title="Webové stránky"
              >
                <IconWorld className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.facebook.com/bistroudvoupratel`}
                target="_blank"
                rel="external"
                title="Facebook"
              >
                <IconBrandFacebook className="inline mr-2" size={30} />
              </Link>
            </ContainerLi>
          </ContainerUl>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

const gallery = [
  {
    path: "/assets/images/bistro/bistro_01.jpg",
    alt: "Tým BISTRO u dvou přátel.",
  },
  {
    path: "/assets/images/bistro/bistro_02.jpg",
    alt: "Croasanty na tácu z kuchyně BISTRA.",
  },
  {
    path: "/assets/images/bistro/bistro_03.jpg",
    alt: "Bagety a jiné výtvory z kuchyně BISTRA.",
  },
  {
    path: "/assets/images/bistro/bistro_04.jpg",
    alt: "Smetanový zákusek s jahodami.",
  },

  {
    path: "/assets/images/bistro/bistro_07.jpg",
    alt: "Tým BISTRA při práci.",
  },
  {
    path: "/assets/images/bistro/bistro_08.jpg",
    alt: "Muž vydávající jídlo.",
  },

  {
    path: "/assets/images/bistro/bistro_10.jpg",
    alt: "Fotka části jídelny, kde se vydávají pokrmy.",
  },
  {
    path: "/assets/images/bistro/bistro_11.jpg",
    alt: "Jídelna BISTRA.",
  },
  {
    path: "/assets/images/bistro/bistro_12.jpg",
    alt: "Talíř s masem, salátem a přílohou od BISTRA u dvou přátel.",
  },
];
