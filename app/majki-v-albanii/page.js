import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerImage from "../../components/layouts/container-image";
import Link from "next/link";
export default function MiseAlbanie() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Majki v&nbsp;Albánii</ContainerTitle>
          <ContainerDescription></ContainerDescription>
          <ContainerParagraph>Ahoj 👋,</ContainerParagraph>
          <ContainerParagraph>
            skrze kurz Cagliero pořádaný{" "}
            <Link
              href={`https://www.sadba.org/`}
              target="_blank"
              className="underline"
            >
              SADBou
            </Link>{" "}
            se chystám v&nbsp;září vyjet na roční misijní dobrovolnictví do
            Albánie. Chtěla bych místním dětem dát rok svého života a&nbsp;být
            součástí toho jejich. Často stačí jen být a&nbsp;mít rád. Jejich
            životní situaci to sice nevyřeší, ale může ulehčit každodenní
            starosti.
          </ContainerParagraph>
          <ContainerImage
            jpgPath="/assets/images/mise-majki.jpg"
            webpPath="/assets/images/mise-majki.webp"
            altText="Fotka Majkiny ve žluté bundě s obrázky"
            className="w-full my-2"
          />
          <ContainerParagraph>
            Zakoupením mini obrázku mi pomůžete získat potřebné finance
            k&nbsp;uskutečnění této cesty a&nbsp;co víc, budete součástí tohoto
            díla. Budu ráda, pokud vám bude dělat obrázek radost, i&nbsp;za to,
            když při pohledu na něj vzpomenete v&nbsp;modlitbě na Albánii
            a&nbsp;její obyvatele. Děkuji!
          </ContainerParagraph>
          <ContainerParagraph>
            Cena jednoho obrázku je 200,-Kč.
          </ContainerParagraph>
          <ContainerParagraph className={"italic"}>
            Marie Kašparová
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
