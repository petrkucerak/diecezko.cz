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
export default async function DCM() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>DCM Hradec Králové</ContainerTitle>
          <ContainerDescription>
            Jsme zde pro všechny mladé lidi. Doprovázíme je na cestě jejich
            růstu a dozrávání, hledání a nacházení Boha, aby skrze konkrétní
            život z víry byli svědectvím dobra a nadějí pro tento svět.
          </ContainerDescription>
          <ContainerImage
            pngPath="/assets/images/spolecenstvi/diecezni-centrum-pro-mladez.png"
            jpgPath="/assets/images/spolecenstvi/diecezni-centrum-pro-mladez.jpg"
            webpPath="/assets/images/spolecenstvi/diecezni-centrum-pro-mladez.webp"
            altText="Tým DCM"
            className="w-full my-2"
          />
          <ContainerParagraph>
            Snažíme se posílit duchovní život mladých lidí, vychovávat ke
            svědectví, ke službě, k zodpovědnosti, k pravdě a k radosti být
            mladým křesťanem. Pořádáme různé akce zaměřené na rozvoj osobnosti v
            oblastech náboženství, mezilidských vztahů, vnímání krásy a umění.
            To vše skrze život ve společenství, modlitby, diskuse, pomocí her,
            přednášek a v neposlední řadě také práce.
          </ContainerParagraph>
          <ContainerH2>Poslání DCM</ContainerH2>
          <ContainerUl>
            <ContainerLi>
              Organizuje diecézní a&nbsp;jiná setkání mládeže.
            </ContainerLi>
            <ContainerLi>
              Podílí se na formaci animátorů společenství mládeže.
            </ContainerLi>
            <ContainerLi>
              Spolupracuje s&nbsp;kaplany pro mládež a&nbsp;mladými zástupci
              jednotlivých vikariátů.
            </ContainerLi>
            <ContainerLi>
              Spoluzajišťuje provoz{" "}
              <Link href="/dczm-vesmir" className="underline" title="DCZM Vesmír">
                Diecézního centra života mládeže (DCŽM) Vesmír
              </Link>
              .
            </ContainerLi>
            <ContainerLi>
              Spolupracuje s&nbsp;ostatními diecézemi v&nbsp;rámci{" "}
              <Link
                href="https://cbk.cirkev.cz/sekce-pro-mladez"
                className="underline"
                rel="external"
                target="_blank"
                title="Sekce pro mládež ČBK"
              >
                Sekce pro mládež ČBK
              </Link>
              .
            </ContainerLi>
          </ContainerUl>
          <ContainerH2>Kontakt</ContainerH2>
          <ContainerUl className={`!list-none !pl-0 mb-6`}>
            <ContainerLi>
              Diecézní centrum pro mládež
              <br />
              Velké náměstí 32
              <br />
              500 03 Hradec Králové
            </ContainerLi>
            <ContainerLi>
              email:{" "}
              <Link className="underline" href="mailto:dcm@bihk.cz">
                dcm@bihk.cz
              </Link>
              ,{" "}
              <Link className="underline" href="mailto:dcm.bihk@gmail.com">
                dcm.bihk@gmail.com
              </Link>
              <br />
              telefon:{" "}
              <Link className="underline" href="tel:+420734435358">
                734 435 358
              </Link>{" "}
              (Klára Petrová, vedoucí DCM)
            </ContainerLi>
            <ContainerLi className="mt-2">
              <Link
                href={`https://www.facebook.com/DCM.HradecKralove/`}
                target="_blank"
                rel="external"
                title="Facebook"
              >
                <IconBrandFacebook className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.instagram.com/dcm_hk`}
                target="_blank"
                rel="external"
                title="Instagram"
              >
                <IconBrandInstagram className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.youtube.com/@dcmhradeckralove5644`}
                target="_blank"
                rel="external"
                title="Youtube kanál"
              >
                <IconBrandYoutube className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.bihk.cz/biskupstvi/diecezni-centrum-pro-mladez`}
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
