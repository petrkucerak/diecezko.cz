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
                href="https://zpevnik.proscholy.cz/pisen/1119/reknu-vsem"
                target="_blank"
                rel="external"
                className="underline"
              >
                1119
              </Link>
              )
            </li>
            <li>
              <strong>Ordinarium</strong>: Přikryl&nbsp;(
              <Link
                href="https://zpevnik.proscholy.cz/pisen/812/ordinarium-m-prikryla"
                target="_blank"
                rel="external"
                className="underline"
              >
                812
              </Link>
              )
            </li>
            <li>
              <strong>Žalm</strong>: Já&nbsp;vím&nbsp;(
              <Link
                href="https://zpevnik.proscholy.cz/pisen/3848/ja-vim-muj-pan-kvuli-mne-prisel"
                target="_blank"
                rel="external"
                className="underline"
              >
                3848
              </Link>
              )
            </li>
            <li>
              <strong>Před evangeliem</strong>: Kvůli&nbsp;nám&nbsp;(
              <Link
                href="https://zpevnik.proscholy.cz/pisen/211/kvuli-nam"
                target="_blank"
                rel="external"
                className="underline"
              >
                211
              </Link>
              )
            </li>
            <li>
              <strong>Dary</strong>: Chleba&nbsp;a&nbsp;víno (
              <Link
                href="https://zpevnik.proscholy.cz/pisen/27/chleba-a-vino-neseme"
                target="_blank"
                rel="external"
                className="underline"
              >
                27
              </Link>
              )
            </li>
            <li>
              <strong>Přijímání</strong>:
              Hospodin&nbsp;je&nbsp;můj&nbsp;pastýř&nbsp;(
              <Link
                href="https://zpevnik.proscholy.cz/pisen/272/hospodin-je-muj-pastyr"
                target="_blank"
                rel="external"
                className="underline"
              >
                272
              </Link>
              ), Marie&nbsp;Magdalena&nbsp;(
              <Link
                href="https://zpevnik.proscholy.cz/pisen/2682/marie-magdalena"
                target="_blank"
                rel="external"
                className="underline"
              >
                2682
              </Link>
              ), Obklop&nbsp;mě&nbsp;(
              <Link
                href="https://zpevnik.proscholy.cz/pisen/115/obklop-me"
                target="_blank"
                rel="external"
                className="underline"
              >
                115
              </Link>
              )
            </li>
            <li>
              <strong>Závěr</strong>: Svatý&nbsp;jsi&nbsp;náš&nbsp;Pán&nbsp;(
              <Link
                href="https://zpevnik.proscholy.cz/pisen/826/svaty-jsi-nas-pan"
                target="_blank"
                rel="external"
                className="underline"
              >
                826
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
