import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import ProgramDetail from "../../components/layouts/program-detail";
import { program } from "../../components/switcher/program";
import Link from "next/link";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerUl from "../../components/layouts/container-ul";
export default async function MseSvata() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Mše svatá</ContainerTitle>
          <ProgramDetail p={program[5]} className={``} />
          <ContainerDescription>
            Vrcholem celého Diecézka je setkání s&nbsp;naším biskupem skrze mši
            svatou. Mši svatou bude hudebně doprovázet{" "}
            <Link href="/studenecka-kapela" className="underline">
              Studenecká kapela
            </Link>
            .
          </ContainerDescription>
          <ContainerH2>Písničky na mši</ContainerH2>
          <ContainerUl>
            <li>
              <strong>Vstup</strong>: Řeknu&nbsp;všem&nbsp;(
              <Link
                href=""
                target="_blank"
                rel="external"
                className="underline"
              >
                986
              </Link>
              )
            </li>
            <li>
              <strong>Ordinarium</strong>: Přikryl&nbsp;(
              <Link
                href=""
                target="_blank"
                rel="external"
                className="underline"
              >
                228
              </Link>
              )
            </li>
            <li>
              <strong>Žalm</strong>: Já&nbsp;vím&nbsp;(
              <Link
                href=""
                target="_blank"
                rel="external"
                className="underline"
              >
                224
              </Link>
              )
            </li>
            <li>
              <strong>Před evangeliem</strong>: Kvůli&nbsp;nám&nbsp;(
              <Link
                href=""
                target="_blank"
                rel="external"
                className="underline"
              >
                223
              </Link>
              )
            </li>
            <li>
              <strong>Dary</strong>: Chleba&nbsp;a&nbsp;víno (
              <Link
                href=""
                target="_blank"
                rel="external"
                className="underline"
              >
                221
              </Link>
              )
            </li>
            <li>
              <strong>Přijímání</strong>:
              Hospodin&nbsp;je&nbsp;můj&nbsp;pastýř&nbsp;(
              <Link
                href=""
                target="_blank"
                rel="external"
                className="underline"
              >
                221
              </Link>
              ), Maria&nbsp;-&nbsp;Adorare&nbsp;(
              <Link
                href=""
                target="_blank"
                rel="external"
                className="underline"
              >
                221
              </Link>
              ), Obklop&nbsp;mě&nbsp;(
              <Link
                href=""
                target="_blank"
                rel="external"
                className="underline"
              >
                221
              </Link>
              )
            </li>
            <li>
              <strong>Závěr</strong>: Svatý&nbsp;jsi&nbsp;náš&nbsp;Pán&nbsp;(
              <Link
                href=""
                target="_blank"
                rel="external"
                className="underline"
              >
                221
              </Link>
              )
            </li>
          </ContainerUl>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
