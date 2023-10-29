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
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
export default async function TydenModlitebZaMladez() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>DCŽM Vesmír</ContainerTitle>
          <ContainerDescription>
            <strong className="font-bold">
              Diecézní centrum života mládeže Vesmír
            </strong>{" "}
            je provozováno{" "}
            <Link
              href="http://vesmir.signaly.cz/vesmir/sdru%C5%BEeni-jedlova.html"
              target="_blank"
              rel="external"
              className="underline"
            >
              <i>Sdružením Jedlová, z. s.</i>
            </Link>{" "}
            Jedná se v&nbsp;současné době o&nbsp;zapsaný spolek (původně
            občanské sdružení), který vytváří programy pro mládež. Členy spolku
            jsou mladí lidé, kteří zpravidla rok až dva stabilně žijí
            v&nbsp;DCŽM Vesmír (tým) a&nbsp;zmiňované programy spolu
            s&nbsp;mladými lidmi vytvářejí a&nbsp;realizují. Naší cílovou
            skupinou je mládež od 14 do 26 let. Posláním DCŽM je vést
            k&nbsp;opravdovým hodnotám (kvalitní mezilidské vztahy, nalezení a
            objevení sebe sama, pozitivní vztah k&nbsp;práci, zodpovědný přístup
            k&nbsp;materielním hodnotám a&nbsp;cit k&nbsp;přírodě).
          </ContainerDescription>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/dczm-vesmir.jpg"
            webpPath="/assets/images/spolecenstvi/dczm-vesmir.webp"
            altText="Tým DCŽM Vesmír"
            className="w-full my-2"
          />
          <ContainerParagraph>
            Název Vesmír jsme „podědili po předcích“. Chata (zařízení) nese
            jméno Vesmír již od 60. let minulého století. A když se zde člověk
            za jasné noci podívá na oblohu, tak si připadá jako uprostřed
            hvězdného prostoru. Hvězdy jsou vidět od obzoru k&nbsp;obzoru. Název
            Vesmír se nám prostě líbil a&nbsp;líbí.
          </ContainerParagraph>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/dczm-vesmir-matous.jpg"
            webpPath="/assets/images/spolecenstvi/dczm-vesmir-matous.webp"
            altText="Tým DCŽM Vesmír"
            className="w-full my-2"
          />
          <ContainerH2>Kontakt</ContainerH2>
          <ContainerUl className={`!list-none !pl-0 mb-6`}>
            <ContainerLi>
              Deštné v Orlických horách 266
              <br />
              517 91 Deštné v Orlických horách
            </ContainerLi>
            <ContainerLi>
              email:{" "}
              <Link className="underline" href="mailto:dczm.vesmir@gmail.com">
                dczm.vesmir@gmail.com
              </Link>
            </ContainerLi>
            <ContainerLi className="mt-2">
              <Link
                href={`https://www.facebook.com/dczmvesmir/`}
                target="_blank"
                rel="external"
                title="Facebook"
              >
                <IconBrandFacebook className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.instagram.com/dczm_vesmir/`}
                target="_blank"
                rel="external"
                title="Instagram"
              >
                <IconBrandInstagram className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.youtube.com/@dczmvesmir6084`}
                target="_blank"
                rel="external"
                title="Youtube kanál"
              >
                <IconBrandYoutube className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`http://vesmir.signaly.cz/`}
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
