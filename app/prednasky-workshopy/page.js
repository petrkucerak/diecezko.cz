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
            V první části odpoledne si můžete vybrat z&nbsp;bohaté nabídky
            přednášek, dvou workshopů nebo sportu.
          </ContainerDescription>
          <div>
            {workshops.map((w) => {
              return (
                <div
                  key={w.title}
                  className="flex flex-col items-center md:flex-row border-[#444] border rounded-xl p-6 sm:p-6 transition h-full hover:scale-[1.02] hover:rotate-1 mt-8"
                >
                  <ContainerImage
                    altText={`Fotka hosta ${w.speaker.name} k přednášce ${w.title}.`}
                    jpgPath={w.speaker.jpgPath}
                    webpPath={w.speaker.jpgPath.replace(".jpg", ".webp")}
                    className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8"
                  />
                  <div className="flex flex-col items-start justify-center w-full sm:w-[450px]">
                    <h2
                      dangerouslySetInnerHTML={{ __html: w.title }}
                      className="text-xl font-semibold w-full"
                    />
                    <span className="tracking-widest font-light">
                      {w.speaker.name}
                    </span>
                    <p
                      className="text-lg w-full mt-2"
                      dangerouslySetInnerHTML={{ __html: w.descritpion }}
                    />
                  </div>
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
  {
    title: 'Co se dělo na synodě v Římě? "Bude se měnit učení církve?"',
    place: "",
    descritpion:
      "Dva roky přípravy po celém světě, celý měsíc říjen plný setkání, diskuzí a&nbsp;modliteb v&nbsp;Římě. Přesně 365 účastníků s&nbsp;hlasovacím právem <em>(včetně papeže Františka a&nbsp;54 žen)</em>. Co se řešilo a&nbsp;neřešilo na 16. řádném zasedání biskupské synody? Bude se žehnat homosexuálním párům? Budou se světit ženy na jáhenky? Zůstane katolická církev katolickou? Nebo je synoda o&nbsp;synodalitě trošku o&nbsp;něčem jiném?",
    speaker: {
      name: "Jan Pitřinec",
      jpgPath: "/assets/images/speakers/pitrinec.jpg",
    },
  },
];
