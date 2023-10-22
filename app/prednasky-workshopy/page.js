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
            hlásit při východu z&nbsp;dopoledního programu ve filharmonii.
          </ContainerDescription>
          <div>
            {workshops.map((w) => {
              return (
                <div key={w.title}>
                  <ContainerImage
                    altText={`Fotka hosta ${w.speaker} k přednášce ${w.title}.`}
                    jpgPath={w.speaker.jpgPath}
                    webpPath={w.speaker.jpgPath.replace(".jpg", ".webp")}
                  />
                  <h2 dangerouslySetInnerHTML={{ __html: w.title }} />
                </div>
              );
            })}
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

const workshops = [
  {
    title: "Kdo jsem a&nbsp;kam jdu? – aneb jaký je cíl mé cesty životem",
    place: "",
    descritpion:
      "Vyprávění o&nbsp;motivaci pro putování do Compostelly, několik neobyčejných příběhů z&nbsp;cesty a&nbsp;v&nbsp;porovnání Svatojakubského putování s&nbsp;cestou životem.",
    speaker: {
      name: "Jan Votava",
      jpgPath: "/assets/images/speakers/votava.jpg",
    },
  },
];
