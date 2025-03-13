import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import Link from "next/link";

export default function Partneri() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Partneři Diecézka</ContainerTitle>
          <ContainerParagraph>
            Celé setkání by se nemohlo uskutečnit bez našich partnerů, kterým
            jsme vděčni za finanční, materiální a&nbsp;duchovní podporu.
          </ContainerParagraph>
          <div className="grid grid-cols-2 gap-6 w-full md:grid-cols-3 mt-8">
            <Link
              target="_blank"
              rel="external"
              href={`https://www.bihk.cz/`}
              className="w-full flex items-center justify-center"
              title="Biskupství královéhradecké"
            >
              <img
                src="/assets/images/sponsors/bihk.svg"
                className="w-[25vw] max-w-[100px] saturate-0 hover:saturate-100 cursor-pointer duration-300 hover:scale-105"
                alt="Logo Biskupství královéhradeckého"
              />
            </Link>
            <Link
              target="_blank"
              rel="external"
              href={`https://www.fhk.cz/`}
              className="w-full flex items-center justify-center"
              title="Filharmonie Hradec Králové"
            >
              <img
                src="/assets/images/sponsors/fhk.svg"
                className="w-[25vw] max-w-[100px] rounded-2xl saturate-0 invert cursor-pointer duration-300 hover:scale-105"
                alt="Logo Filharmonie Hradec Králové"
              />
            </Link>
            <Link
              target="_self"
              href={`/bistro-u-dvou-pratel`}
              className="w-full flex items-center justify-center"
              title="BISTRO u dvou přátel"
            >
              <img
                src="/assets/images/sponsors/bistro.png"
                className="w-[25vw] max-w-[100px] saturate-0 hover:saturate-100 cursor-pointer duration-300 hover:scale-105"
                alt="Logo BISTRA u dvou přátel"
              />
            </Link>
            <Link
              target="_blank"
              rel="external"
              href={`https://noveadalbertinum.cz/`}
              className="w-full flex items-center justify-center"
              title="Hotel a kongresové centrum v srdci Hradce Králové - Nové Adalbertinum"
            >
              <img
                src="/assets/images/sponsors/adalbertinum.svg"
                className="w-[25vw] max-w-[100px] saturate-0 hover:saturate-100 cursor-pointer duration-300 hover:scale-100 scale-95"
                alt="Logo Nového Adalbertina"
              />
            </Link>
            <Link
              target="_blank"
              rel="external"
              href={`https://www.khk.cz/`}
              className="w-full flex items-center justify-center"
              title="Královehradecký kraj"
            >
              <img
                src="/assets/images/sponsors/krajhk.svg"
                className="w-[25vw] max-w-[130px] cursor-pointer saturate-0 hover:saturate-100 duration-300 hover:scale-100 scale-95"
                alt="Logo Královehradeckého kraje"
              />
            </Link>
            <Link
              target="_blank"
              rel="external"
              href={`https://www.bisgymbb.cz/`}
              className="w-full flex items-center justify-center"
              title="Biskupské gymnázium Hradec Králové"
            >
              <img
                src="/assets/images/sponsors/bigy.png"
                className="w-[25vw] max-w-[100px] rounded-full border-[#fff] border cursor-pointer saturate-0 hover:saturate-100 duration-300 hover:scale-100 scale-95"
                alt="Logo Biskupského gymnázia Hradec Králové"
              />
            </Link>
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
