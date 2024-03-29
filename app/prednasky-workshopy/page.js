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
      "Vyprávění s&nbsp;otcem biskupem Josefem o&nbsp;životě a&nbsp;povolání",
    type: "person",
    id: "prednaska-start",
    place: "BiGy",
    descritpion:
      "Jaká byla cesta otce biskupa Josefa k&nbsp;biskupství? Jaký dopad měl na jeho působení tehdejší režim? Na jaká období ze svého života nejraději vzpomíná a&nbsp;jaké možnosti a&nbsp;příležitosti mu přinesl zasvěcený život? Na to a&nbsp;mnohem více Vám otec biskup Josef odpoví při svém povídání. Spousta času určitě zbyde i&nbsp;na dotazy z&nbsp;řad účastníků.",
    speaker: {
      name: "Mons. Josef Kajnek",
      jpgPath: "/assets/images/speakers/medveditlapka.jpg",
    },
    social: {
      web: "https://cs.wikipedia.org/wiki/Josef_Kajnek",
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
    social: {
      x: "https://twitter.com/SixtaTomas",
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
      youtube: "https://www.youtube.com/@vojtatr",
    },
  },

  {
    title: "Cesta beze strachu",
    type: "person",
    place: "BiGy",
    descritpion: "",
    speaker: {
      name: "Jiří Strach",
      jpgPath: "/assets/images/speakers/strach.jpg",
    },
    social: {
      web: "https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_Strach",
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
      name: "Samuel Prívara",
      jpgPath: "/assets/images/speakers/privara.jpg",
    },
    social: {
      web: "https://www.farnostsalvator.cz/samuel-privara",
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
    title:
      "Inkvizice, čarodějnice, kolonialismus: černé kapitoly církevních dějin a&nbsp;co s&nbsp;nimi?",
    type: "person",
    place: "BiGy",
    descritpion:
      "Každé dlouhodobě působící společenství či instituce musí zpracovat i&nbsp;ty části své minulosti, které se nepovedly, poučit se z&nbsp;nich, vyznat vinu. V&nbsp;případě křesťanství je to ještě důležitější vzhledem k vysokým nárokům, které na nás klade naše víra. V&nbsp;přednášce se zamyslíme nad tím, jak se stavět ke komplikovaným dějinách církve, jak se vyrovnat s&nbsp;tím, co dnes mnoho lidí od církve odrazuje a&nbsp;stěžuje identifikaci s&nbsp;ní.",
    speaker: {
      name: "Tomáš Petráček",
      jpgPath: "/assets/images/speakers/ppetracek.jpg",
    },
    social: {
      web: "https://cs.wikipedia.org/wiki/Tom%C3%A1%C5%A1_Petr%C3%A1%C4%8Dek",
      x: "https://twitter.com/tompetracek",
    },
  },
  {
    title: "Přes překážky ke hvězdám – mít sny a&nbsp;odvahu",
    type: "person",
    place: "BiGy",
    descritpion:
      "Je život skutečně tou nejlepší školou? Jak se v&nbsp;socialismu pracovalo s&nbsp;dětmi době navzdory? A&nbsp;jak vést mladé k hodnotám a&nbsp;hledání sebe sama v&nbsp;digitálním věku? S&nbsp;pedagogem a&nbsp;spisovatelem Františkem Tichým můžete nejen sdílet jeho dobrodružný životní příběh, ale i&nbsp;se nechat povzbudit a&nbsp;inspirovat k&nbsp;vlastní cestě nejen při práci s&nbsp;mladými.",
    speaker: {
      name: "František Tichý",
      jpgPath: "/assets/images/speakers/tichy.jpg",
    },
    social: {
      web: "https://cs.wikipedia.org/wiki/Franti%C5%A1ek_Tich%C3%BD_(pedagog)",
    },
  },
  {
    title: "Fotograf – co všechno to obnáší?",
    type: "person",
    place: "BiGy",
    descritpion:
      "Focení, selekce, editace, publikace ... Řekneme si, čeho všeho se při focení vyvarovat nebo jak se nechovat a&nbsp;co nám může při focení pomoci.",
    speaker: {
      name: "Dominik Polanský a Pavel Langr",
      jpgPath: "/assets/images/speakers/cav-langr.jpg",
      jpgPath2: "/assets/images/speakers/cav-polansky.jpg",
    },
    social: {
      web: "https://www.clovekavira.cz/",
      fb: "https://www.facebook.com/clovekavira",
      ig: "https://www.instagram.com/clovek_a_vira/",
    },
  },
  {
    title: "Jak se žije v&nbsp;semináři?",
    type: "person",
    place: "BiGy",
    descritpion:
      "Co je kněžský seminář a&nbsp;jak se v&nbsp;něm žije? Jaký jsou povinnosti a&nbsp;denní řád seminaristy? Není formace pro výchovu budoucích kněží zastaralá? Mnoho odpovědi na své otázky o&nbsp;semináři budete moci hledat spolu s&nbsp;bohoslovcem Jindřichem Barabášem.",
    speaker: {
      name: "Jindra Barabáš",
      jpgPath: "/assets/images/speakers/barabas.jpg",
    },
    social: {
      web: "https://seminar-praha.cz/",
      ig: "https://www.instagram.com/arcspraha/",
      fb: "https://www.facebook.com/ArcibiskupskySeminar",
    },
  },
  {
    title: "(K)rok pro Keňu a&nbsp;Namibii, léto pro Bulharsko",
    type: "person",
    place: "BiGy",
    descritpion:
      "První část povídání bude věnována dobrovolné službě v&nbsp;Keni a&nbsp;Namibii, kde Markéta mohla strávit dohromady rok svého života. Žila v&nbsp;salesiánské komunitě a&nbsp;učila v&nbsp;mateřské a&nbsp;základní škole, odpoledne se věnovala chlapcům z&nbsp;internátu a&nbsp;o&nbsp;prázdninách dětem v&nbsp;oratoři. Byl to malý/velký krok v&nbsp;životě, který proměnil její srdce i&nbsp;srdce jí svěřených dětí. Druhá část vyprávění přiblíží Anežčinu letní dobrovolnickou službu v&nbsp;Bulharsku.",
    speaker: {
      name: "Markéta Bartošová a Anežka Havránková",
      jpgPath: "/assets/images/speakers/sadba1.jpg",
      jpgPath2: "/assets/images/speakers/sadba2.jpg",
    },
    social: {
      web: "https://www.sadba.org/",
      ig: "https://www.instagram.com/sadba.salesiani/",
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
