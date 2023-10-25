import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import ProgramDetail from "../../components/layouts/program-detail";
import { program } from "../../components/switcher/program";
import Link from "next/link";
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
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
