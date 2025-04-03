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

                      <span
                        dangerouslySetInnerHTML={{ __html: w.speaker.name }}
                      />
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
                    {w.about !== undefined ? (
                      <p
                        className="text-lg w-full mt-2 italic"
                        dangerouslySetInnerHTML={{ __html: w.about }}
                      />
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
    place: "BiGy (místnost: 208)",
    about: `Studuju konzervatoř Jaroslava Ježka v&nbsp;Praze. Právě obor Skladba.😌 Jinak mam vystudované dva cykly ZUŠ na klavír a&nbsp;jeden na violoncello. Hudba je prostě můj život 😊`,
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
    title: "Křesťané v&nbsp;dějinách z perspektivy křesťana nekatolíka",
    type: "person",
    place: "BiGy (místnost: 303)",
    about: `Vyučuji historii na Univerzitě Hradec Králové, zaměřuji se na dějiny středověku, jsem členem Církve bratrské v&nbsp;Kutné Hoře.`,
    descritpion:
      "Velmi si vážím možnosti se v&nbsp;tomto formátu setkat s&nbsp;katolickou mládeží a&nbsp;budu velmi rád za živou diskusi. V&nbsp;přednášce se pokusím otevřít některé otázky, které mi přineslo letité studium dějin a&nbsp;přemýšlení nad Církví a&nbsp;církvemi a&nbsp;výzvami současné církve a&nbsp;světa.",
    speaker: {
      name: "doc. PhDr. Zdeněk Beran, Ph.D.",
      jpgPath: "/assets/images/speakers/beran.jpg",
    },
    social: {
      web: "https://www.uhk.cz/cs/osoba/212/zdenek-beran",
    },
  },
  {
    title: "Povolání život (církev a&nbsp;homosexualita)",
    type: "person",
    place: "BiGy (místnost: 205)",
    about: `P.&nbsp;Zdeněk Jančařík, salesián, kněz brněnské diecéze, v&nbsp;níž působí také jako kaplan pro LGBT+ komunitu.`,
    descritpion: `Zmiňuje se Bible o&nbsp;homosexualitě? Byl člověk stvořen jako muž a&nbsp;žena kvůli manželství? Od kdy se v&nbsp;Evropě začíná skutečně mluvit o&nbsp;"homosexualitě"? Jak se k&nbsp;ní staví římskokatolická církev a&nbsp;proč "s&nbsp;ní má problém"? Na tyto a&nbsp;jiné otázky se pokusíme odpovědět.`,
    speaker: {
      name: "P. Zdeněk Jančařík (SDB)",
      jpgPath: "/assets/images/speakers/jancarik.jpg",
    },
    social: {
      web: "https://www.biskupstvi.cz/cs/pastorace-lgbt",
    },
  },
  {
    title:
      "Jak přemýšlíme, když vás vychováváme (aneb myšlenkové pochody rodičů)",
    type: "person",
    place: "BiGy (místnost: 213)",
    about: `Zdravotní sestra a&nbsp;rodinný terapeut, společně vychováváme dva syny (23, 19 let) a&nbsp;dvě dcery (20, 14 let).`,
    descritpion:
      "Jak rodiče přemýšlí, o&nbsp;čem sní, čeho se bojí? Proč rodiče dělají věci, které vás tolik štvou? A&nbsp;šlo by to jinak?",
    speaker: {
      name: "Markéta a Milan Jiroutovi",
      jpgPath: "/assets/images/speakers/jiroutovi.jpg",
    },
  },
  {
    title: "Začni s PROČ?",
    type: "person",
    place: "BiGy (místnost: 115)",
    about: `Ahoj, jmenuji se Klára a&nbsp;letos mám výročí 10ti let práce nejen s&nbsp;mladými lidmi, napříč skupinami či týmy na různých úrovních. Pokud Tě zajímá sdílení zkušeností, tak Tě moc ráda přivítám na společném setkání.`,
    descritpion: `Chceš založit skupinu, vést tým nebo prostě jen zorganizovat projekt, který bude dávat smysl? Přednáška "Začni s&nbsp;PROČ?" tě provede klíčovými kroky, které ti pomohou s&nbsp;nastavením vize i&nbsp;cílů. Dozvíš se, proč je důležité vědět, proč to všechno vlastně děláš, jak určit hlavní náplň, jak komunikovat s&nbsp;druhými a&nbsp;rozdělovat role a&nbsp;nastavovat pravidla. Zjistíš, co se od tebe jako od leadera očekává a&nbsp;jak vytvořit tým, který bude nejen efektivní, ale taky tě bude bavit! Přijď zjistit, jak můžeš udělat první krok k&nbsp;úspěšnému vedení!`,
    speaker: {
      name: "Klára Řiháková",
      jpgPath: "/assets/images/speakers/rihakova.jpg",
    },
  },
  {
    title: "Krása českého znakového jazyka",
    type: "person",
    place: "BiGy (místnost: 206)",
    about: `Vojtěch je učitel na SŠ a&nbsp;VOŠ v Hradci Králové a&nbsp;lektor českého znakového jazyka.`,
    descritpion: `Zajímá tě znakový jazyk? Chceš nahlédnout do komunikace a&nbsp;světa Neslyšících? Zveme tě na workshop s&nbsp;rodilým mluvčím, kde budeme společně objevovat krásu českého znakového jazyka. Určitě se dnes naučíš něco nového. Tlumočení bude zajištěno.`,
    speaker: {
      name: "Vojtěch Pražák",
      jpgPath: "/assets/images/speakers/prazak.jpg",
    },
  },
  {
    title: "Mary's Meals aneb jak chutná vzdělání",
    type: "person",
    place: "BiGy (místnost: 216)",
    about: `V&nbsp;Mary's Meals zodpovídám za spolupráci se školami a&nbsp;duchovní oblast.`,
    descritpion: `Žijeme v&nbsp;bohatém světě, který má dostatečný potenciál uživit všechny hladové. Přesto jsou miliony dětí, které každý den řeší otázku: "Bude pro mne zítra?" Co se s&nbsp;tím dá udělat? Přijď na setkání s&nbsp;Mary's Meals a&nbsp;přidej se k&nbsp;changemakerům 🙂.`,
    speaker: {
      name: "Kristína Třešková",
      jpgPath: "/assets/images/speakers/treskova.jpg",
    },
    social: {
      web: "https://www.marysmeals.cz",
      fb: "https://www.facebook.com/marysmeals",
      ig: "https://www.instagram.com/marysmealscz",
    },
  },
  {
    title: "Jubileum je pro každého: nejen pro ty, kdo budou putovat do Říma",
    type: "person",
    place: "BiGy (místnost: 207)",
    about: `Roman Kubín, římskokatolický kněz. Věnuji se mnoho let doprovázení mladých při hledání jejich životní cesty. Snažím se pomáhat lidem vnímat a&nbsp;rozeznávat, co v&nbsp;jejich životě dělá Bůh. Raduji se z&nbsp;toho, když vidím, jak se prohlubuje nebo obnovuje vztah k&nbsp;Bohu, k&nbsp;životu. Sloužím jako ředitel Sekce pro mládež České biskupské konference.`,
    descritpion: `Papež František píše: „Kéž je Jubilejní rok pro každého okamžikem živého a&nbsp;osobního setkání s&nbsp;Pánem Ježíšem.“ Všichni jsme zváni, abychom se stávali poutníky naděje. Jak můžeme obnovit náš vztah s&nbsp;Bohem a&nbsp;s&nbsp;druhými lidmi? Jak se připravit na pouť? Bude i&nbsp;prostor na praktické informace k&nbsp;cestě do Říma na Jubileum mládeže.`,
    speaker: {
      name: "P. Roman Kubín",
      jpgPath: "/assets/images/speakers/kubin.jpg",
    },
    social: {
      web: "https://svetovednymladeze.cz",
      ig: "https://www.instagram.com/sekcepromladez",
      fb: "https://www.facebook.com/sekcepromladez",
    },
  },
  {
    title: "Ozdob si svoji velikonoční svíčku - Paškál",
    type: "workshop",
    place: "BiGy (místnost: 104)",
    id: "workshop-start",
    about: `Pracuji v&nbsp;mateřské škole jako asistentka pedagoga v&nbsp;Želivě. Kreativním činnostem se věnuji ve volném čase a&nbsp;mezi ně patří zdobení svíček k&nbsp;různým příležitostem.`,
    descritpion: `Chceš mít svoji originální svíčku na bílou sobotu? Svíčku můžeš využít k&nbsp;osobní modlitbě, v&nbsp;rodině nebo ve společenství. Udělej si radost a&nbsp;přijď využít svoji kreativitu.`,
    speaker: {
      name: "Zdenička Daňková",
      jpgPath: "/assets/images/speakers/dankova.jpg",
    },
  },
  {
    title: "Deskovky",
    type: "deskGame",
    place: "BiGy (aula)",
    about: `Jsme křesťanský akademický klub Salaš – společenství mladých vysokoškolských studentů, které je otevřené pro všechny studenty. Každou středu v&nbsp;akademickém roce slavíme mši svatou, po které následuje různorodý program.`,
    descritpion:
      "Přijďte si k&nbsp;nám v&nbsp;tomto nabitém dni odpočinout a&nbsp;zahrát si nějakou z&nbsp;mnoha deskových her, které nabízíme. Nemusíte se bát, všechny hry vysvětlíme a&nbsp;naučíme. Je to ideální příležitost seznámit se s&nbsp;novými lidmi, nebo strávit čas se svojí partou. Zároveň se můžete dozvědět něco více o&nbsp;nás.",
    speaker: {
      name: "Salaš",
      jpgPath: "/assets/images/speakers/salas.jpg",
    },
    social: {
      fb: "https://www.facebook.com/salas.hradec",
      ig: "https://www.instagram.com/salas_kak",
      web: "/kak-salas",
    },
  },
  {
    title: "Pojďte dál … do biskupské rezidence a biskupské knihovny",
    type: "excursion",
    place: "Biskupská rezidence",
    descritpion: `Zvu vás do více než 300 let starých <strong>prostor biskupského úřadu</strong>, kam se „běžný člověk“ jen tak nepodívá. S&nbsp;rezidencí v&nbsp;Hradci Králové jsou však spojena i&nbsp;další místa v&nbsp;naší diecézi…
    <br/>
    <strong>Biskupská knihovna</strong> je nejstarší trvale fungující knihovnou v&nbsp;Hradci Králové, se kterou jsou spjaty některé významné historické osobnosti, jejichž stopy si ukážeme. Také Vám představíme několik středověkých rukopisů nebo prvotisků.
    <br/>
    <em><strong>Na komentovanou prohlídku se bude odcházet společně od filharmonie.</strong></em>
    `,
    about: `Jsem <strong>sestra Zuzana</strong> a&nbsp;patřím do kongregace Milosrdných sester sv.&nbsp;Kříže, působím přímo na biskupství, kde spolu s&nbsp;dalšími sestrami vytváříme zázemí kněžím, k&nbsp;tomu patří domácí práce, administrativní služby, zajištění různých akcí… ale hlavně život v&nbsp;srdci diecéze.
      <br/>
      Jmenuji se <strong>Zdeněk Zahradník</strong>, téměř 30 let jsem působil v&nbsp;Muzeu východních Čech v&nbsp;HK, v&nbsp;posledních cca 20 letech jsem též vyučoval na FF UHK a&nbsp;v&nbsp;současnosti jsem vedoucím Biskupské knihovny.`,
    speaker: {
      name: `sr. Zuzana Mgr. Petra Macečková (bisk.) <br/> Zdeněk Zahradník (bis. knihovna)`,
      jpgPath: "/assets/images/speakers/zuzana.jpg",
    },
  },
  {
    title: "Sportovní workshop",
    type: "sport",
    id: "sport-start",
    place: "Orlovna",
    about: `Jmenuji se Ferry Kolba a&nbsp;jsem týmákem na DCŽM Vesmír. Mám v&nbsp;oblibě pohyb a&nbsp;věřím, že ty taky!`,
    descritpion: `Nechceš trávit odpoledne sezením a&nbsp;máš chuť se hýbat? Máš možnost přijít na workshop různých sportů. Pokud nejsi profi sportovec, tak nevadí! Přijít může každý, kdo má zájem, jen pamatuj na oblečení, ve kterém se ti bude dobře pohybovat a přezuvky do tělocvičny.`,
    speaker: {
      name: "František Kolba",
      jpgPath: "/assets/images/speakers/kolba.jpg",
    },
  },
];
