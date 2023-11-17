import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import ProgramDetail from "../../components/layouts/program-detail";
import program from "../../components/switcher/program.json";
export default async function ProgramVeFilharmonii() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Odpolední program</ContainerTitle>
          <ProgramDetail p={program[4]} className={``} />
          <ContainerDescription>
            Pokračujte ve sportování, vychutnejte si pohodovou atmosféru do
            kavárny nebo zajděte na duchovní rozhovor či svátost smíření.
          </ContainerDescription>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
