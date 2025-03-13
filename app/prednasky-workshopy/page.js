import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import ProgramDetail from "../../components/layouts/program-detail";
import program from "../../components/switcher/program.json";
import ContainerImage from "../../components/layouts/container-image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSpotify,
  IconBrandYoutube,
  IconMapPin,
  IconWorld,
} from "@tabler/icons";
import ParmIcon from "../../components/layouts/parm-icon";
import Button from "../../components/layouts/button";
import IconCustomBrandX from "../../components/images/brand-x";
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
            přednášek, několika workshopů nebo sportu.
          </ContainerDescription>
          <div className="flex flex-row items-center justify-center flex-wrap">
            <Link href={`#prednaska-start`}>
              <Button className={``}>
                <ParmIcon iconName={`person`} /> Přednášky
              </Button>
            </Link>
            <Link href={`#workshop-start`}>
              <Button>
                <ParmIcon iconName={`workshop`} /> Workshopy
              </Button>
            </Link>
            <Link href={`#sport-start`}>
              <Button>
                <ParmIcon iconName={`sport`} /> Sporty
              </Button>
            </Link>
          </div>
          <div>
            {workshops.map((w) => {
              return (
                <div
                  key={w.title}
                  id={w.id !== undefined ? w.id : ""}
                  className="flex flex-col items-center md:flex-row border-[#444] border rounded-xl p-6 sm:p-6 transition h-full hover:scale-[1.02] hover:rotate-1 mt-8"
                >
                  <div className="flex items-center justify-center md:flex-col">
                    {w.speaker.jpgPath !== undefined ? (
                      <ContainerImage
                        altText={`Fotka hosta ${w.speaker.name} k přednášce ${w.title}.`}
                        jpgPath={w.speaker.jpgPath}
                        webpPath={w.speaker.jpgPath.replace(".jpg", ".webp")}
                        className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8 mx-1 md:my-1"
                      />
                    ) : null}
                    {w.speaker.jpgPath2 !== undefined ? (
                      <ContainerImage
                        altText={`Fotka hosta ${w.speaker.name} k přednášce ${w.title}.`}
                        jpgPath={w.speaker.jpgPath2}
                        webpPath={w.speaker.jpgPath2.replace(".jpg", ".webp")}
                        className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8 mx-1 md:my-1"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col items-start justify-center w-full sm:w-[450px]">
                    <h2
                      dangerouslySetInnerHTML={{ __html: w.title }}
                      className="text-xl font-semibold w-full"
                    />
                    <span className="tracking-widest mt-1 font-light flex flex-row items-center justify-start">
                      <ParmIcon
                        iconName={w.type}
                        className={`inline`}
                        size={18}
                      />
                      {w.speaker.name}
                    </span>
                    {w.place !== undefined ? (
                      <span className="font-semibold flex flex-row items-center justify-start">
                        <IconMapPin
                          className="inline mr-1"
                          size={18}
                          stroke={1.5}
                        />
                        <Link
                          href={
                            w.place.includes("Orlovna")
                              ? `/mapa?x=${50.2069553}&y=${15.8349681}` // Orlovna
                              : w.place.includes("Nové Adalbertinum")
                              ? `/mapa?x=${50.2090269}&y=${15.8334453}` // Nove Adalbertinum
                              : `/mapa?x=${50.2062919}&y=${15.8337133}` // BiGy
                          }
                          target="_self"
                          className="underline"
                        >
                          {w.place}
                        </Link>
                      </span>
                    ) : null}
                    <p
                      className="text-lg w-full mt-2"
                      dangerouslySetInnerHTML={{ __html: w.descritpion }}
                    />
                    {w.social !== undefined ? (
                      <div className="mt-1 flex flex-row items-center justify-start">
                        <h3 className="uppercase mr-2">Sleduj na: </h3>
                        {w.social.web !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.web}
                            className="inline ml-1"
                            title={`Odkaz na web ${w.speaker.name}`}
                          >
                            <IconWorld stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.ig !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.ig}
                            className="inline ml-1"
                            title={`Odkaz na Instagram ${w.speaker.name}`}
                          >
                            <IconBrandInstagram stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.fb !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.fb}
                            className="inline ml-1"
                            title={`Odkaz na Facebook ${w.speaker.name}`}
                          >
                            <IconBrandFacebook stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.spotify !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.spotify}
                            className="inline ml-1"
                            title={`Odkaz na Spotify ${w.speaker.name}`}
                          >
                            <IconBrandSpotify stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.x !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.x}
                            className="inline ml-1"
                            title={`Odkaz na X ${w.speaker.name}`}
                          >
                            <IconCustomBrandX stroke={1.5} color={"#fff"} />
                          </Link>
                        ) : null}
                        {w.social.youtube !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.youtube}
                            className="inline ml-1"
                            title={`Odkaz na Youtube ${w.speaker.name}`}
                          >
                            <IconBrandYoutube stroke={1.5} color={"#fff"} />
                          </Link>
                        ) : null}
                      </div>
                    ) : null}
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
    title:
      "Od nápadu k&nbsp;hitu - Jak skládat, nahrávat a&nbsp;zveřejnit vlastní píseň",
    type: "person",
    id: "prednaska-start",
    // place: "BiGy",
    descritpion:
      "Máš v&nbsp;hlavě melodii nebo text a&nbsp;nevíš, jak z&nbsp;toho udělat hotovou píseň? Přijď na&nbsp;praktickou přednášku, kde se dozvíš, jak skládat hudbu, pracovat s&nbsp;nahrávacími programy, zvukově upravovat své skladby a&nbsp;nakonec je zveřejnit",
    speaker: {
      name: "Lucka Pekárková",
      jpgPath: "/assets/images/speakers/luckapekarkova.jpg",
    },
    social: {
      ig: "https://www.instagram.com/lucie.pekarkova",
    },
  },
  {
    title: "Tvořivé dílny",
    type: "workshop",
    id: "workshop-start",
    place: "BiGy",
    descritpion:
      "Také si užíváš ty chvíle, kdy jsi ve světě tvoření a&nbspmůžeš dát volnost své fantazii a&nbsp;kreativnímu přetlaku? Já teda moc a&nbsp;řesně na takový společný čas tě zvu. Vše potřebné bude zajištěno. Těším se na tebe!",
    speaker: {
      name: "Verča Halounková",
      jpgPath: "/assets/images/speakers/halounkova.jpg",
    },
  },
  {
    title: "Sportovní workshop",
    type: "sport",
    id: "sport-start",
    place: "Orlovna",
    descritpion:
      "Chceš se po dopoledním sezení ve filharmonii trochu protáhnout a&nbsp;zasportovat si? Přesně pro tebe je určený tenhle workshop, kde si budeš moci vybrat ze dvou skupinových sportů a&nbsp;prostřednictvím hry se seznamovat novými lidmi. Na výběr bude z&nbsp;venkovního fotbalu (jen za dobrého počasí) a&nbsp;vnitřního volejbalu. Vem si proto s&nbsp;sebou vhodné oblečení podle počasí a&nbsp;do haly čistou sálovou obuv. Šatna bude k&nbsp;dispozici na BiGy.",
    speaker: {
      name: "Jan Chadima",
      jpgPath: "/assets/images/speakers/chadima.jpg",
    },
  },
];
