import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import ContainerDescription from "../../components/layouts/container-description";
import ProfileCard from "../../components/layouts/profile-card";
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
            {jadro.map((p) => {
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

export const jadro = [
  {
    name: "Klárka Petrová",
    description: "Klárka je vedoucí DCM a&nbsp;má pod palcem celé Diecézko.",
    jpgPath: "/assets/images/jadro/petrova.jpg",
    webpPath: "/assets/images/jadro/petrova.webp",
    altText: "Profilová fotka Klárky Petrové",
    className: "",
  },
  {
    name: "Jindra Řezníček",
    description:
      "Jindra je parťák Klárky, pracuje na DCM a&nbsp;spolu s&nbsp;ní drží otěže nad Diecézkem.",
    jpgPath: "/assets/images/jadro/reznicek.jpg",
    webpPath: "/assets/images/jadro/reznicek.webp",
    altText: "Profilová fotka Jindry Řezníčka",
    className: "",
  },
  {
    name: "Evžen Holub",
    description:
      "Pan Holub je hlavním cestovatelským odborníkem na letošním Diecézku.",
    pngPath: "/assets/images/jadro/evzen.png",
    // jpgPath: "/assets/images/jadro/evzen.jpg",
    webpPath: "/assets/images/jadro/evzen.webp",
    altText: "Profilová fotka Holuba Evžena",
    className: "",
  },
  {
    name: "Klárka Kopecká",
    description:
      "Manažerka Klárka komunikuje s&nbsp;hosty a&nbsp;domlouvá s&nbsp;nimi detaily jejich přednášek.",
    jpgPath: "/assets/images/jadro/klarka.jpg",
    webpPath: "/assets/images/jadro/klarka.webp",
    altText: "Profilová fotka Klárky Kopecké",
    className: "",
  },

  {
    name: "Petr Kučera",
    description: "Petr má na svědomí vznik webu diecezko.cz a&nbsp;Evženovy cesty.",
    jpgPath: "/assets/images/jadro/kucera.jpg",
    webpPath: "/assets/images/jadro/kucera.webp",
    altText: "Profilová fotka Petr Kučery",
    className: "",
  },
  {
    name: "o. Tomáš Hoffmann",
    description: "Tomáš je nejen ředitelem Vesmíru a&nbsp;DCM, ale hlavně duchovní opora celého přípravného týmu.",
    altText: "Profilová fotka o. Tomáš Hoffmann",
    jpgPath: "/assets/images/jadro/hoffmann.jpg",
    webpPath: "/assets/images/jadro/hoffmann.webp",
    className: "",
  },
  {
    name: "Denča Zavřelová",
    description:
      "Recepční skupinka pod vedením Denči vás při vstupu do FIlharmonie označí náramkem a&nbsp;také uloží vaše kabáty a&nbsp;bundy do šatny.",
    altText: "Profilová fotka Denča Zavřelová",
    jpgPath: "/assets/images/jadro/denca.jpg",
    webpPath: "/assets/images/jadro/denca.webp",
    className: "",
  },
  {
    name: "Amálka Výborná",
    description:
      "Amálka a&nbsp;její tým v&nbsp;oranžových vestičkách vám zajistí bezpečný doprovod až na přednášku.",
    altText: "Profilová fotka Amálka Výborná",
    jpgPath: "/assets/images/jadro/vyborna.jpg",
    webpPath: "/assets/images/jadro/vyborna.webp",
    className: "",
  },
  {
    name: "Vojta Vlach",
    description:
      "Vojta je ostřílený kapelník Vesmírné kapely, která doprovodí dopolední program ve Filharmonii a&nbsp;pomáhá s&nbsp;vývojem webu diecezko.cz.",
    altText: "Profilová fotka Vojta Vlach",
    jpgPath: "/assets/images/jadro/pan-vlach.jpg",
    webpPath: "/assets/images/jadro/pan-vlach.webp",
    className: "",
  },
  {
    name: "Lucka Pekárková",
    description: "Studenecká kapela pod vedením Lucky doprovodí závěrečnou mši svatou v&nbsp;katedrále Svatého Ducha.",
    altText: "Profilová fotka Lucka Pekárková",
    jpgPath: "/assets/images/jadro/pekarkova.jpg",
    webpPath: "/assets/images/jadro/pekarkova.webp",
    className: "",
  },
  {
    name: "Anna Marie Maříková",
    description: "Anička s&nbsp;o.&nbsp;Jirkou mají na starosti režijní program, který nás bude provázet během dopoledne ve Filharmonii.",
    altText: "Profilová fotka Anna Marie Maříková",
    jpgPath: "/assets/images/jadro/marikova.jpg",
    webpPath: "/assets/images/jadro/marikova.webp",
    className: "",
  },
  {
    name: "o. Jirka Jakoubek",
    description: "Jirka duchovně doprovází režijní tým.",
    altText: "Profilová fotka Jirka Jakoubek",
    jpgPath: "/assets/images/jadro/jakoubek.jpg",
    webpPath: "/assets/images/jadro/jakoubek.webp",
    className: "",
  },
  {
    name: "Kuba Kučera",
    description: "Kuba má na starosti technickou stránku režie.",
    altText: "Profilová fotka Kuby Kučery",
    jpgPath: "/assets/images/jadro/bro.jpg",
    webpPath: "/assets/images/jadro/bro.webp",
    className: "",
  },
  {
    name: "Honza Pecháček",
    description:
      "Jáhen Honza zajišťuje zpovědní službu v&nbsp;kostele Nanebevzetí Panny Marie.",
    altText: "Profilová fotka Honza Pecháček",
    jpgPath: "/assets/images/jadro/pechacek.jpg",
    webpPath: "/assets/images/jadro/pechacek.webp",
    className: "",
  },
  {
    name: "Michal Šramko",
    description:
      "Jáhen Michal se stará o&nbsp;hladký průběh mše svaté v&nbsp;katedrále Svatého Ducha.",
    altText: "Profilová fotka Michal Šramko",
    jpgPath: "/assets/images/jadro/sramko.jpg",
    webpPath: "/assets/images/jadro/sramko.webp",
    className: "",
  },
  {
    name: "Kryštof Hamouz",
    description:
      "Kryštof se stará o&nbsp;krmení hladových krků přípravného týmu.",
    altText: "Profilová fotka Kryštof Hamouz",
    jpgPath: "/assets/images/jadro/hamouz.jpg",
    webpPath: "/assets/images/jadro/hamouz.webp",
    className: "",
  },
  {
    name: "Lucka Kašparová",
    description:
      "Lucinka pro vás připravuje odpolední kavárnu s&nbsp;chill out zónou a&nbsp;krásnou atmosférnou v&nbsp;tělocvičně na BiGy.",
    altText: "Profilová fotka Lucka Kašparová",
    jpgPath: "/assets/images/jadro/kasparova.jpg",
    webpPath: "/assets/images/jadro/kasparova.webp",
    className: "",
  },
  {
    name: "Kuba Machek",
    description:
      "Kuba se svým týmem připravuje prostory pro odpolední přednášky na BiGy.",
    altText: "Profilová fotka Kuba Machek",
    jpgPath: "/assets/images/jadro/machek.jpg",
    webpPath: "/assets/images/jadro/machek.webp",
    className: "",
  },
  {
    name: "Šája Pavlová",
    description:
      "Šája je vrchní manažerka úklidové čety a&nbsp;kromě každého odpadku vyhozeného do správného koše, ocení i&nbsp;každou pomocnou ruku.",
    altText: "Profilová fotka Šája Pavlová",
    jpgPath: "/assets/images/jadro/saja.jpg",
    webpPath: "/assets/images/jadro/saja.webp",
    className: "",
  },
  {
    name: "Míša Hrstková",
    description: "Míša a&nbsp;její zdravotnický tým budou v&nbsp;pohotovosti po celý den během programu ve Filharmonii i&nbsp;na mši svaté.",
    altText: "Profilová fotka Míša Hrstková",
    jpgPath: "/assets/images/jadro/hrstkova.jpg",
    webpPath: "/assets/images/jadro/hrstkova.webp",
    className: "",
  },
];
