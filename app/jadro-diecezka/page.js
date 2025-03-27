import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import ContainerDescription from "../../components/layouts/container-description";
import ProfileCard from "../../components/layouts/profile-card";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerParagraph from "../../components/layouts/container-paragraph";
export default async function Vikariaty() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Jádro Diecézka</ContainerTitle>
          <ContainerDescription>
            Diecézní setkání mládeže je možné zorganizovat díky dobrovolníkům,
            kteří se do jeho příprav zapojili. Patří jim díky za jejich
            obětavost a&nbsp;nasazení!
          </ContainerDescription>
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 items-center">
            {ecko.map((p) => {
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
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
export const ecko = [
  {
    name: "Evžen Holub",
    description: "Pan Holub drží holubí dohled nad celým Diecézkem.",
    jpgPath: "/assets/images/jadro/evzen.jpg",
    webpPath: "/assets/images/jadro/evzen.webp",
    altText: "Profilová fotka Holuba Evžena",
    className: "",
  },
  {
    name: "Klárka Petrová",
    description:
      "Klárka je vedoucí DCM. Stará se o&nbsp;všechny, kteří připravují Diecézko.",
    jpgPath: "/assets/images/jadro/petrova.jpg",
    webpPath: "/assets/images/jadro/petrova.webp",
    altText: "Profilová fotka Klárky Petrové",
    className: "",
  },
  {
    name: "Klárka Kopecká",
    description:
      "Manažerka Klárka komunikuje s&nbsp;hosty. Domlouvá s&nbsp;nimi detaily jejich přednášek.",
    jpgPath: "/assets/images/jadro/klarka.jpg",
    webpPath: "/assets/images/jadro/klarka.webp",
    altText: "Profilová fotka Klárky Kopecké",
    className: "",
  },
  {
    name: "Verča Pavlišová",
    description:
      "Verča pečuje o&nbsp;pohodlí našich žaludků. Dále se stará o&nbsp;to, aby vše dobře vypadalo.",
    jpgPath: "/assets/images/jadro/pavlisova.jpg",
    webpPath: "/assets/images/jadro/pavlisova.webp",
    altText: "Profilová fotka Verči Pavlišové",
    className: "",
  },
  {
    name: "Joska Pazderová",
    description:
      "Joska je vrchní velitelka úklidové čety. Kromě každého odpadku vyhozeného do správného koše ocení i&nbsp;ochotnou pomocnou ruku. Také se stará o&nbsp;to, aby Diecézko vypadalo dobře na&nbsp;sociálních sítích.",
    jpgPath: "/assets/images/jadro/joska.jpg",
    webpPath: "/assets/images/jadro/joska.webp",
    altText: "Profilová fotka Josky Pazderové",
    className: "",
  },
  {
    name: "Anička Marie Maříková",
    description:
      "Anička má na starosti režijní program, který nás bude provázet během dopoledne ve Filharmonii.",
    jpgPath: "/assets/images/jadro/marikova.jpg",
    webpPath: "/assets/images/jadro/marikova.webp",
    altText: "Profilová fotka Aničky Maříkové",
    className: "",
  },
  {
    name: "prof. Ondra Mařík",
    description:
      "Ondra je spolu s&nbsp;Klárkou K. generálem BiGy. Stará se o&nbsp;zázemí nejen pro hosty, ale i&nbsp;pro všechny, kteří budou na BiGy.",
    jpgPath: "/assets/images/jadro/marik.jpg",
    webpPath: "/assets/images/jadro/marik.webp",
    altText: "Profilová fotka Ondry Maříka",
    className: "",
  },
  {
    name: "Matyáš Mesi Meisner",
    description:
      "Mesi a&nbsp;jeho tým v&nbsp;oranžových vestičkách vám zajistí bezpečný doprovod až na přednášku.",

    altText: "Profilová fotka Matyáše Messiho Majsnera",
    jpgPath: "/assets/images/jadro/majsner.jpg",
    webpPath: "/assets/images/jadro/majsner.webp",
    className: "",
  },
  {
    name: "Jindra Řezníček",
    description:
      "Jindra se stará o&nbsp;kaplany pro mládež a&nbsp;jejich zástupce, pomáhá sytit web obsahem a&nbsp;při vstupu do Filharmonie vás se svým týmem označí náramkem.",
    jpgPath: "/assets/images/jadro/reznicek.jpg",
    webpPath: "/assets/images/jadro/reznicek.webp",
    altText: "Profilová fotka Jindry Řezníčka",
    className: "",
  },
  {
    name: "P. Tomáš Hoffmann",
    description:
      "Tomáš je nejen ředitelem Vesmíru a&nbsp;DCM, ale hlavně duchovní opora celého přípravného týmu.",
    altText: "Profilová fotka o. Tomáš Hoffmann",
    jpgPath: "/assets/images/jadro/hoffmann.jpg",
    webpPath: "/assets/images/jadro/hoffmann.webp",
    className: "",
  },
  {
    name: "Mons. Prokop Brož",
    description:
      "Prokop má na starosti pastorační činnost v&nbsp;naší diecézi. Stará se o&nbsp;to, aby všichni táhli za jeden provaz. Řídí se heslem: Bez Ducha Svatého ani ránu!",
    altText: "Profilová fotka Mons. Prokopa Brože",
    jpgPath: "/assets/images/jadro/broz.jpg",
    webpPath: "/assets/images/jadro/broz.webp",
    className: "",
  },
  {
    name: "Vojta Vlach",
    description:
      "Vojta je ostřílený kapelník Vesmírné kapely, která doprovodí dopolední program ve Filharmonii. Dále pomáhá s&nbsp;webem diecézko.cz.",
    altText: "Profilová fotka Vojta Vlach",
    jpgPath: "/assets/images/jadro/pan-vlach.jpg",
    webpPath: "/assets/images/jadro/pan-vlach.webp",
    className: "",
  },
  {
    name: "Pavel Vocl",
    description:
      "Pavel má na starosti technickou stránku režijního programu ve Filharmonii.",
    altText: "Profilová fotka Pavel Vocl",
    jpgPath: "/assets/images/jadro/vocl.jpg",
    webpPath: "/assets/images/jadro/vocl.webp",
    className: "",
  },
  {
    name: "Petr Kučera",
    description:
      "Petr se stará o&nbsp;web diecézko.cz a&nbsp;pomáhá s&nbsp;technickým zabezpečením celé akce.",
    jpgPath: "/assets/images/jadro/kucera.jpg",
    webpPath: "/assets/images/jadro/kucera.webp",
    altText: "Profilová fotka Petr Kučery",
    className: "",
  },
];
