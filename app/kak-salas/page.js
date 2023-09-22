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
export default async function DCZM() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>KAK Salaš</ContainerTitle>
          <ContainerDescription>
            <strong className="font-bold">
              Křesťanský akademický klub Salaš
            </strong>{" "}
            je společenství nejen věřících vysokoškolských studentů
            z&nbsp;Hradce Králové. Salaš je členem VKH a&nbsp;úzce
            spolupracujeme s&nbsp;Akademickou duchovní službou při
            Královehradecké diecézi. Rádi mezi sebou uvítáme všechny, které
            zaujme náš program nebo si jen chtějí popovídat. Pořádáme pravidelné
            týdenní aktivity, na které můžete zajít a&nbsp;seznámit se
            s&nbsp;ostatními studenty.
          </ContainerDescription>
          <ContainerImage
            pngPath="/assets/images/spolecenstvi/dcm-vesmir.png"
            jpgPath="/assets/images/spolecenstvi/dcm-vesmir.jpg"
            webpPath="/assets/images/spolecenstvi/dcm-vesmir.webp"
            altText="Tým DCŽM Vesmír"
            className="w-full my-2"
          />
          <ContainerH2>Pravidelné aktivity</ContainerH2>
          <ContainerUl>
            <ContainerLi>Po 20.15 - Modlitba na Kotli</ContainerLi>
            <ContainerLi>Út 19.15 - Spolčo</ContainerLi>
            <ContainerLi>
              St 19.00 - Mše svaté a&nbsp;program po nich
            </ContainerLi>
            <ContainerLi>Čt 18.00 - SportOvce</ContainerLi>
          </ContainerUl>
          <ContainerH2>Program po mši svaté</ContainerH2>
          <ContainerParagraph>
            Ptáte se, co jest program po mši? Pro představu pořádáme Muzikantský
            večer, PubQuiz, přednášky, nebo si jdeme o&nbsp;zkouškovém jen tak
            sednout na pivo.
          </ContainerParagraph>
          <ContainerH2>Další program</ContainerH2>
          <ContainerParagraph>
            Největší akcí, na kterou se všichni už teď těšíme, je SheepPles. Ten
            se koná vždy v&nbsp;pátek po Velikonocích na Univerzitě Hradec
            Králové. Příští ples se uskuteční 5.&nbsp;4.&nbsp;2024.
          </ContainerParagraph>
          <ContainerParagraph>
            Pokud Tě baví deskové hry, určitě přijď na deskové hry na FIMku
            každé poslední úterý v&nbsp;měsíci. Termíny deskovek jsou: 31.10.,
            28.11., 16.12. a&nbsp;30.1.
          </ContainerParagraph>
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
