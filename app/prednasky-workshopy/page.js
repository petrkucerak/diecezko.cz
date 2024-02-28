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
  IconMapPin,
  IconWorld,
} from "@tabler/icons";
import ParmIcon from "../../components/layouts/parm-icon";
import Button from "../../components/layouts/button";
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
                  {w.speaker.jpgPath !== undefined ? (
                    <ContainerImage
                      altText={`Fotka hosta ${w.speaker.name} k přednášce ${w.title}.`}
                      jpgPath={w.speaker.jpgPath}
                      webpPath={w.speaker.jpgPath.replace(".jpg", ".webp")}
                      className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8"
                    />
                  ) : null}
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
      "Vyprávění s&nbsp;otcem biskupem Josefem o&nbsp;životě a&nbsp;povolání",
    type: "person",
    id: "prednaska-start",
    place: "BiGy",
    descritpion:
      "Jaká byla cesta otce biskupa Josefa k&nbsp;biskupství? Jaký dopad měl na jeho působení tehdejší režim? Na jaká období ze svého života nejraději vzpomíná a&nbsp;jaké možnosti a&nbsp;příležitosti mu přinesl zasvěcený život? Na to a&nbsp;mnohem více Vám otec biskup Josef odpoví při svém povídání. Spousta času určitě zbyde i&nbsp;na dotazy u&nbsp;řad účastníků.",
    speaker: {
      name: "Mons. Josef Kajnek",
      jpgPath: "/assets/images/speakers/medveditlapka.jpg",
    },
  },
  {
    title:
      "LGBTQ+ a křesťanství? Nauka, problémy a otázky, výhledy do budoucna",
    type: "person",
    place: "BiGy",
    descritpion:
      "Vztah křesťanství k&nbsp;LGBTQ+ osobám a&nbsp;otázkám spojeným s&nbsp;touto tématikou bývá chápán jako kontroverzní téma. Podíváme se věcně na to, co nám o&nbsp;tomuto tématu říká Bible, křesťanská tradice a&nbsp;nauka, kde se skrývají problémy a&nbsp;jaký by mohl být vývoj církevní nauky v&nbsp;tomto tématu v&nbsp;budoucnosti. Program proběhne formou cca hodinové přednášky a&nbsp;následné diskuse.",
    speaker: {
      name: "Tomáš Sixta",
      jpgPath: "/assets/images/speakers/sixta.jpg",
    },
  },
  {
    title:
      "Postavili jsme pekárnu a&nbsp;školku ve Rwandě, co bude následovat?",
    type: "person",
    place: "BiGy",
    descritpion:
      "Nechte se vtáhnout mladým dobrodružným cestovatelem do zázračné Afriky, přímo do domů místních obyvatel. Poznáme jejich kulturu, zvyklosti a&nbsp;běžný život. Také nahlédneme pod pokličku projektům, které díky zapojení mladé rodiny přináší v&nbsp;afrických zemích pomoc těm nejpotřebnějším.",
    speaker: {
      name: "Vojtěch Trčka",
      jpgPath: "/assets/images/speakers/trcka.jpg",
    },
    social: {
      web: "https://www.trckovi.org/",
    },
  },
  {
    title:
      "Jak řídit svůj život a&nbsp;nenabourat (a&nbsp;co dělat, když to nevyjde)?",
    type: "person",
    place: "BiGy",
    descritpion:
      "Na nový byt nebo dům si většina lidí bere hypotéku. Je však rozumné brát si spotřební úvěr na lednici, auto nebo dovolenou? A co to má společné s&nbsp;(duchovním) životem? Chceš-li se dozvědět, jak lze žít s&nbsp;Bohem každodenní realitu, jak se s&nbsp;ním dělit o&nbsp;radost i&nbsp;smutek, úspěch i&nbsp;pád, a&nbsp;dělat to navíc zajímavým způsobem, přijď se podívat na workshop o&nbsp;spiritualitě. Naživo si budeš moci vyzkoušet také ignaciánský examen – modlitbu laskavé pozornosti. Už nyní se můžeš podívat na aplikaci na Google Play nebo AppStore.",
    speaker: {
      name: "Samuel Privara",
      jpgPath: "/assets/images/speakers/privara.jpg",
    },
  },
  {
    title: "Pořád spolu chodíme, i&nbsp;se dvěma dětmi!",
    type: "person",
    place: "BiGy",
    descritpion:
      "Vyžadovalo odvahu začít spolu chodit, bylo potřeba se rozhodnout, abychom se vzali, chtělo to trpělivost, než přišly děti, ale nikdy bychom neměnili. Rádi se podělíme o&nbsp;náš příběh a&nbsp;zodpovíme zvídavé otázky.",
    speaker: {
      name: "Kája a Kristýnka Maříkovi",
      jpgPath: "/assets/images/speakers/marikovi.jpg",
    },
  },
  {
    title: "Tvořivé dílny",
    type: "workshop",
    id: "workshop-start",
    place: "BiGy",
    descritpion:
      "Také si užíváš ty chvíle, kdy jsi ve světě tvoření a&nbspmůžeš dát volnost své fantazii a&nbspkreativnímu přetlaku? Já teda moc a&nbsppřesně na takový společný čas tě zvu. Vše potřebné bude zajištěno. Těším se na tebe!",
    speaker: {
      name: "Verča Halounková",
      jpgPath: "/assets/images/speakers/halounkova.jpg",
    },
  },
  //   {
  //     title: "Sportovní workshop",
  //     type: "sport",
  //     id: "sport-start",
  //     place: "Orlovna",
  //     descritpion: "",
  //     speaker: {
  //       name: "Honza Klinger",
  //       jpgPath: "/assets/images/speakers/klinger.jpg",
  //     },
  //   },
  //   {
  //     title: "Mladí a spoluodpovědnost za správu věcí veřejných",
  //     type: "person",
  //     place: "místnost 208, BiGy",
  //     descritpion:
  //       '"Politika je především uměním setkávání, reflexí a&nbsp;akcí" říká papež František. Co tím má na mysli? Politika jako spoluodpovědnost za správu věcí veřejných. A&nbsp;jak složité je v&nbsp;politice uplatnit myšlenku sv.&nbsp;Augustýna "Odsuzuj hřích, ale miluj hříšníka"? Politika jako výzva i&nbsp;úkol, odpovědnost i&nbsp;poslání. O&nbsp;roli a&nbsp;ochotě mladých jít s&nbsp;kůží na trh a&nbsp;aktivně se zapojit do vytváření charakteru místního společenství i&nbsp;řešení zásadních témat celé naší společnosti. A&nbsp;hlavně se těším na besedu a&nbsp;dialog o&nbsp;tom, co mladé na dnešní politice na všech úrovních zajímá, na kritickou zpětnou vazbu, bez které se politik utopí v&nbsp;každodenní rutině.',
  //     speaker: {
  //       name: "Marek Výborný",
  //       jpgPath: "/assets/images/speakers/vyborny.jpg",
  //     },
  //     social: {
  //       web: "https://www.kdu.cz/o-nas/nasi-lide/poslanci/vyborny",
  //       ig: "https://www.instagram.com/marek.vyborny/",
  //       fb: "https://www.facebook.com/vybornymarek",
  //     },
  //   },
];
