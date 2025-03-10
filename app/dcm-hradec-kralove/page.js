import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ProfileCard from "../../components/layouts/profile-card";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerUl from "../../components/layouts/container-ul";
import ContainerLi from "../../components/layouts/container-li";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
export default async function DCM() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>DCM Hradec Králové</ContainerTitle>
          <ContainerDescription>
            Jsme zde pro všechny mladé lidi. Doprovázíme je na cestě jejich
            růstu a&nbsp;dozrávání, hledání a&nbsp;nacházení Boha, aby skrze
            konkrétní život z&nbsp;víry byli svědectvím dobra a&nbsp;nadějí pro
            tento svět.
          </ContainerDescription>
          <ContainerParagraph>
            Snažíme se posílit duchovní život mladých lidí, vychovávat ke
            svědectví, ke službě, k&nbsp;zodpovědnosti, k&nbsp;pravdě
            a&nbsp;k&nbsp;radosti být mladým křesťanem. Pořádáme různé akce
            zaměřené na rozvoj osobnosti v&nbsp;oblastech náboženství,
            mezilidských vztahů, vnímání krásy a&nbsp;umění. To vše skrze život
            ve společenství, modlitby, diskuse a&nbsp;pomocí
            her&nbsp;a&nbsp;přednášek.
          </ContainerParagraph>
          <ContainerH2>Poslání DCM</ContainerH2>
          <ContainerUl>
            <ContainerLi>
              Organizuje diecézní a&nbsp;jiná setkání mládeže.
            </ContainerLi>
            <ContainerLi>
              Podílí se na formaci animátorů společenství mládeže.
            </ContainerLi>
            <ContainerLi>
              Spolupracuje s&nbsp;kaplany pro mládež a&nbsp;mladými zástupci
              jednotlivých vikariátů.
            </ContainerLi>
            <ContainerLi>
              Spoluzajišťuje provoz{" "}
              <Link
                href="/dczm-vesmir"
                className="underline"
                title="DCZM Vesmír"
              >
                Diecézního centra života mládeže (DCŽM) Vesmír
              </Link>
              .
            </ContainerLi>
            <ContainerLi>
              Spolupracuje s&nbsp;ostatními diecézemi v&nbsp;rámci{" "}
              <Link
                href="https://cbk.cirkev.cz/sekce-pro-mladez"
                className="underline"
                rel="external"
                target="_blank"
                title="Sekce pro mládež ČBK"
              >
                Sekce pro mládež ČBK
              </Link>
              .
            </ContainerLi>
          </ContainerUl>
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 items-center my-6">
            {dcm.map((p) => {
              return (
                <ProfileCard
                  key={p.name}
                  name={p.name}
                  description={p.description}
                  jpgPath={p.jpgPath}
                  webpPath={p.webpPath}
                  pngPath={p.pngPath}
                  altText={p.altText}
                  className={p.className}
                />
              );
            })}
          </div>
          <ContainerH2>Kontakt</ContainerH2>
          <ContainerUl className={`!list-none !pl-0 mb-6`}>
            <ContainerLi>
              Diecézní centrum pro mládež
              <br />
              Velké náměstí 32
              <br />
              500 03 Hradec Králové
            </ContainerLi>
            <ContainerLi>
              email:{" "}
              <Link className="underline" href="mailto:dcm@bihk.cz">
                dcm@bihk.cz
              </Link>
              ,{" "}
              <Link className="underline" href="mailto:dcm.bihk@gmail.com">
                dcm.bihk@gmail.com
              </Link>
              <br />
              telefon:{" "}
              <Link className="underline" href="tel:+420734435358">
                734 435 358
              </Link>{" "}
              (Klára Petrová, vedoucí DCM)
            </ContainerLi>
            <ContainerLi className="mt-2">
              <Link
                href={`https://www.facebook.com/DCM.HradecKralove/`}
                target="_blank"
                rel="external"
                title="Facebook"
              >
                <IconBrandFacebook className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.instagram.com/dcm_hk`}
                target="_blank"
                rel="external"
                title="Instagram"
              >
                <IconBrandInstagram className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.youtube.com/@dcmhradeckralove5644`}
                target="_blank"
                rel="external"
                title="Youtube kanál"
              >
                <IconBrandYoutube className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.bihk.cz/biskupstvi/diecezni-centrum-pro-mladez`}
                target="_blank"
                rel="external"
                title="Webové stránky"
              >
                <IconWorld className="inline mr-2" size={30} />
              </Link>
            </ContainerLi>
          </ContainerUl>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

export const dcm = [
  {
    name: "Klárka Petrová",
    description:
      "Klárka je naše skvělá vedoucí, která má vše pod palcem. Přišla k nám z&nbsp;vesmírného týmu, kde strávila dva roky. Je naším motorem při práci a&nbsp;poradách. Krásně maluje, kreslí a&nbsp;zajímá se o&nbsp;historii. V&nbsp;minulosti vás mohla provést po interiérech opočenského zámku. Skvěle se ujala tvorby plakátů a&nbsp;celé propagace.",
    jpgPath: "/assets/images/dcm/kp.jpg",
    webpPath: "/assets/images/dcm/kp.webp",
    altText: "Profilová fotka Klárky Petrové (zatím)",
    className: "",
  },
  // {
  //   name: "Lucka Zadinová",
  //   description:
  //     "Lucka pochází z&nbsp;Libice nad Cidlinou, ale aktuálně žije na hájence poblíž Chotěboře. Studuje na Univerzitě Hradec Králové. Její smysl pro ekologičnost se nezapře. Svým příkladem nás vede, jak se dobře starat o&nbsp;naši planetu a&nbsp;používat ekologické produkty. Nezalekne se žádné výzvy, akčnost, to je její.",
  //   jpgPath: "/assets/images/dcm/lz.jpg",
  //   webpPath: "/assets/images/dcm/lz.webp",
  //   altText: "Profilová fotka Lucka Zadinová (už nafurt)",
  //   className: "",
  // },
  {
    name: "Verča Pavlišová",
    description:
      "Verča je u&nbsp;nás “služebně nejstarší” a&nbsp;jsme moc rádi, že ji máme. Ráda vysvětluje hry a&nbsp;je pro nás technicko-praktická podpora. Hlídá, aby naše “praštěné” nápady šly zrealizovat. Studuje učitelství pro mateřské školy a&nbsp;jednou by chtěla být paní ředitelka. Zároveň nás spojuje s&nbsp;vysokoškolskou Salaší, která je zde v&nbsp;Hradci Králové. Má moc ráda hudbu, zpěv a&nbsp;čokoládu.",
    jpgPath: "/assets/images/dcm/vp.jpg",
    webpPath: "/assets/images/dcm/vp.webp",
    altText: "Profilová fotka Verča Pavlišová (zatím)",
    className: "",
  },
  {
    name: "Joska Pazderová",
    description:
      "Joska je náš nejnovější a&nbsp;zároveň nejmladší člen týmu. Přišla s&nbsp;novou energií a&nbsp;zápalem pro uklízení. Má na starost naše sociální sítě. Josi je rozlítaná na všech frontách, proto ji mimo DCM můžete potkat na Katechetickém centru, v&nbsp;Sedleckých památkách v&nbsp;Kutné Hoře nebo párkrát do roka také v&nbsp;Portugalsku. V&nbsp;kostele ji nejčastěji uvidíte u&nbsp;oltáře jako ministrantku. Když přijde čas odpočinku, tak ze všeho nejvíc ocení kvalitní spánek.",
    jpgPath: "/assets/images/jadro/joska.jpg",
    webpPath: "/assets/images/jadro/joska.webp",
    altText: "Profilová fotka Jsoky Pazderové (zatím)",
    className: "",
  },
  {
    name: "Jindra Řezníček",
    description:
      "Jindra, zástupce mužské části našeho týmu a&nbsp;práce všeho druhu. Vášnivý milovník vláčků, lokomotiv, vagónů, kolejí a&nbsp;výhybek nás ve volných chvílích zahrnuje fakty a&nbsp;zajímavostmi ze světa železnice. Krom originálních nápadů a&nbsp;praktických připomínek při poradách pro vás připravuje nejčerstvější informace a&nbsp;novinky na webu.",
    jpgPath: "/assets/images/dcm/jr.jpg",
    webpPath: "/assets/images/dcm/jr.webp",
    altText: "Profilová fotka Jindry Řezníčka",
    className: "",
  },
  {
    name: "P. Tomáš Hoffmann",
    description:
      "Tomáš Hoffmann, je ředitelem jak Vesmíru, tak DCM, na které z dálky dohlíží a v pravou chvíli se do věci vloží. V téhle roli působí od roku 2006. Volnou chvíli si rád zkrátí běžkováním, lyžováním, partičkou žolíčků nebo kafíčkem s týmáky. Z jeho úst nejčastěji uslyšíte věty jako: “Děcka...”, “Holoubku...”, “Můj ty světe.” a “To je dobrota!”.",
    jpgPath: "/assets/images/jadro/hoffmann.jpg",
    webpPath: "/assets/images/jadro/hoffmann.webp",
    altText: "Profilová fotka Jindry Řezníčka",
    className: "",
  },
  {
    name: "Evžen Holub",
    description:
      "Pan Holub k&nbsp;nám byl seslán při vanutí Ducha. Pravděpodobně holubice nebyla toho času k&nbsp;dispozici. Holuba jste si všichni moc oblíbili a&nbsp;rovnou jste jej začali oslovovat jménem Evžen. A&nbsp;tak se Evžen Holub stal maskotem královéhradecké mládeže.",
    jpgPath: "/assets/images/jadro/evzen.jpg",
    webpPath: "/assets/images/jadro/evzen.webp",
    altText: "Profilová fotka Holuba Evžena",
    className: "",
  },
];
