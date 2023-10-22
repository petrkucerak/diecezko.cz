import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import ProgramDetail from "../../components/layouts/program-detail";
import { program } from "../../components/switcher/program";
import ContainerImage from "../../components/layouts/container-image";
export default async function PrednaskyWorhsopy() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Přednášky a workshopy</ContainerTitle>
          <ProgramDetail p={program[3]} className={``} />
          <ContainerDescription>
            Pro první část odpoledne si můžete vybrat z&nbsp;bohaté nabídky
            workshopů, přednášek a&nbsp;sportů. Na daný program se bude možné
            hlásit při východu z&nbsp;dopoledního programu ve Filharmonii.
          </ContainerDescription>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
