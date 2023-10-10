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
import { IconBrandInstagram, IconWorld } from "@tabler/icons";
export default async function BistroUDvouPratel() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>BISTRO u dvou přátel</ContainerTitle>
          <ContainerDescription>
            Bagety si pro vás připravilo BISTRO u dvou přátel, které je sociální
            podnik obecně prospěšné společnosti SKOK do života.
          </ContainerDescription>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/bistro.jpg"
            webpPath="/assets/images/spolecenstvi/bistro.webp"
            altText="Tým BISTRO u dvou přátel"
            className="w-full my-2"
          />
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
          <ContainerParagraph>Přijďte na kávičku!</ContainerParagraph>
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
            </ContainerLi>
          </ContainerUl>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
