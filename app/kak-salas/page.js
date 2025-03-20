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
            z&nbsp;Hradce Králové. Salaš je členem VKH, tedy Vysokoškolského
            katolického hnutí, a&nbsp;úzce spolupracujeme s&nbsp;Akademickou
            duchovní službou při Královehradecké diecézi. Rádi mezi sebou
            uvítáme všechny, které zaujme náš program nebo si jen chtějí
            popovídat. Pořádáme pravidelné týdenní aktivity, na které můžete
            zajít a&nbsp;seznámit se s&nbsp;ostatními studenty.
          </ContainerDescription>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/salas-cover.jpg"
            webpPath="/assets/images/spolecenstvi/salas-cover.webp"
            altText="Mladí z KAK saloš"
            className="w-full my-2"
          />
          <ContainerH2>Pravidelné aktivity</ContainerH2>
          <ContainerUl>
            <ContainerLi>Po 20.15 Modlitba na Kotli</ContainerLi>
            <ContainerLi>St 19.00 Mše svaté a&nbsp;program po nich</ContainerLi>
          </ContainerUl>
          <ContainerH2>Program po mši svaté</ContainerH2>
          <ContainerParagraph>
            Ptáte se, co jest program po mši? Pro představu pořádáme Muzikantský
            večer, PubQuiz, přednášky, nebo si jdeme o&nbsp;zkouškovém jen tak
            sednout na pivo.
          </ContainerParagraph>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/salas-sheep.jpg"
            webpPath="/assets/images/spolecenstvi/salas-sheep.webp"
            altText="Sheep ples"
            className="w-full my-2"
          />
          <ContainerH2>Sheeep Ples</ContainerH2>
          <ContainerParagraph>
            Největší akcí, na kterou se všichni už teď těšíme, je SheepPles. Ten
            letošní již proběhl a&nbsp;fotky si můžete prohlédnout na našem{" "}
            <Link
              href={`https://www.facebook.com/salas.hradec`}
              target="_blank"
              rel="external"
              title="Facebook"
              className="underline"
            >
              facebooku
            </Link>
            .
          </ContainerParagraph>
          {/* <ContainerImage
            jpgPath="/assets/images/spolecenstvi/salas-ples.jpg"
            webpPath="/assets/images/spolecenstvi/salas-ples.webp"
            altText="Sheep ples"
            className="w-full my-2"
          /> */}
          <ContainerH2>Deskovky</ContainerH2>
          <ContainerParagraph>
            Pokud Tě baví deskové hry, určitě přijď na deskové hry na FIMku
            každé poslední úterý v&nbsp;měsíci. Termíny deskovek jsou: 25.3.,
            29.4., 27.5. a&nbsp;24.6.
          </ContainerParagraph>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/salas-deskovky.jpg"
            webpPath="/assets/images/spolecenstvi/salas-deskovky.webp"
            altText="Deskovky"
            className="w-full my-2"
          />
          <ContainerParagraph>
            I&nbsp;když je klub a&nbsp;jeho aktivity přednostně orientován na
            studenty, kteří věří ve Vzkříšeného Krista ve společenství katolické
            církve, je ekumenicky otevřený nejen křesťanům jiných tradicí, ale
            i&nbsp;všem hledajícím a&nbsp;zájemcům o&nbsp;duchovní život
            a&nbsp;činnost, které studentský klub organizuje.
          </ContainerParagraph>
          <ContainerParagraph>Těšíme se na vás!</ContainerParagraph>
          <ContainerH2>Sledujte na nás na:</ContainerH2>
          <ContainerUl className={`!list-none !pl-0 mb-6`}>
            <ContainerLi className="mt-2">
              <Link
                href={`https://www.facebook.com/salas.hradec`}
                target="_blank"
                rel="external"
                title="Facebook"
              >
                <IconBrandFacebook className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.instagram.com/salas_kak/`}
                target="_blank"
                rel="external"
                title="Instagram"
              >
                <IconBrandInstagram className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`http://www.salas.hk`}
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
