import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import ProgramDetail from "../../components/layouts/program-detail";
import { program } from "../../components/switcher/program";
import Link from "next/link";
export default async function ProgramVeFilharmonii() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Program ve Filharmonii</ContainerTitle>
          <ProgramDetail p={program[1]} className={``} />
          <ContainerDescription>
            Dopoledne prožijeme společně jako mladí z&nbsp;celé diecéze
            v&nbsp;Filharmonii v&nbsp;Hradci Králové. Těšit se můžete na
            moderovaný program, hudební doprovod od{" "}
            <Link href="/veka" className="underline">
              Vesmírné Kapely
            </Link>
            , svědectví a&nbsp;mnoho dalšího.
          </ContainerDescription>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
